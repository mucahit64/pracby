import { describe, it, expect } from "vitest";
import request from "supertest";
import { app, db, registerUser } from "./helpers";

// A lesson step with a test, and the number of questions the guest quiz serves for it.
async function lessonStepWithTest() {
  const test = await db("tests as t")
    .join("steps as s", "s.id", "t.step_id")
    .where({ "s.step_type": "lesson" })
    .orderBy("t.sort_order")
    .select("t.id as testId", "s.id as stepId", "s.topic_id as topicId")
    .first();
  const firstTest = await db("tests").where({ step_id: test.stepId }).orderBy("sort_order").first();
  const [{ n }] = await db("questions").where({ test_id: firstTest.id, status: "approved" }).count("* as n");
  return { stepId: test.stepId as string, topicId: test.topicId as string, questionCount: Number(n) };
}

const me = async (token: string) =>
  (await request(app).get("/api/users/me").set("Authorization", `Bearer ${token}`)).body as {
    acorn_balance: number;
  };

const xpOf = async (userId: string) => Number((await db("user_stats").where({ user_id: userId }).first()).total_xp);

const newAccount = () => {
  const n = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  return { email: `caps-${n}@example.com`, username: `caps${n}`.slice(0, 20), password: "Password123!" };
};

describe("register caps the guest's acorns and XP", () => {
  it("ignores a starting balance above 500 without guest progress", async () => {
    const res = await request(app).post("/api/auth/register").send({ ...newAccount(), acorn_balance: 1_000_000 });
    expect(res.status).toBe(201);
    expect((await me(res.body.token)).acorn_balance).toBe(500);
  });

  it("allows at most one acorn and XP per question of the guest's tests", async () => {
    const { stepId, topicId, questionCount } = await lessonStepWithTest();
    const result = { topicId, stepId, correctCount: 1000, totalQuestions: 1000 };
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        ...newAccount(),
        acorn_balance: 1_000_000,
        guest_data: { quiz_results: [result, result, result] },
      });
    expect(res.status).toBe(201);
    expect((await me(res.body.token)).acorn_balance).toBe(500 + questionCount);
    expect(await xpOf(res.body.user.id)).toBe(questionCount);
  });

  it("keeps a real guest balance below the cap", async () => {
    const { stepId, topicId } = await lessonStepWithTest();
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        ...newAccount(),
        acorn_balance: 502,
        guest_data: { quiz_results: [{ topicId, stepId, correctCount: 2, totalQuestions: 4 }] },
      });
    expect(res.status).toBe(201);
    expect((await me(res.body.token)).acorn_balance).toBe(502);
  });
});

describe("merge-guest-progress caps acorns to the progress it merges", () => {
  it("credits acorns once and nothing when the same data is sent again", async () => {
    const { stepId, topicId, questionCount } = await lessonStepWithTest();
    const { token } = await registerUser();
    const merge = () =>
      request(app)
        .post("/api/auth/merge-guest-progress")
        .set("Authorization", `Bearer ${token}`)
        .send({
          quiz_results: [{ topicId, stepId, correctCount: 1000, totalQuestions: 1000 }],
          earned_acorns: 1_000_000,
        });

    const first = await merge();
    expect(first.status).toBe(200);
    expect(first.body.acorns_awarded).toBe(questionCount);
    expect(first.body.xp_awarded).toBe(questionCount);

    const second = await merge();
    expect(second.body.acorns_awarded).toBe(0);
    expect(second.body.xp_awarded).toBe(0);
    expect((await me(token)).acorn_balance).toBe(500 + questionCount);
  });

  it("credits no acorns without progress to back them", async () => {
    const { token } = await registerUser();
    const res = await request(app)
      .post("/api/auth/merge-guest-progress")
      .set("Authorization", `Bearer ${token}`)
      .send({ earned_acorns: 5000 });
    expect(res.status).toBe(200);
    expect(res.body.acorns_awarded).toBe(0);
    expect((await me(token)).acorn_balance).toBe(500);
  });
});

async function startLesson(token: string) {
  const { stepId, topicId } = await lessonStepWithTest();
  const res = await request(app)
    .post("/api/quiz/start")
    .set("Authorization", `Bearer ${token}`)
    .send({ topicId, stepId, sessionType: "lesson" });
  expect(res.status).toBe(201);
  return res.body as {
    session: { id: string };
    questions: { id: string; question_type: string; answers: { id: string; is_correct: boolean }[] }[];
  };
}

describe("quiz answers only count for the session's own questions, once each", () => {
  it("finish-bulk ignores repeated and foreign questions", async () => {
    const { token } = await registerUser();
    const { session, questions } = await startLesson(token);
    const q = questions.find((x) => x.answers.some((a) => a.is_correct))!;
    const correct = { questionId: q.id, answerId: q.answers.find((a) => a.is_correct)!.id };

    const foreign = await db("answers as a")
      .join("questions as qq", "a.question_id", "qq.id")
      .where({ "a.is_correct": true, "qq.status": "approved" })
      .whereNotIn("qq.id", questions.map((x) => x.id))
      .select("qq.id as questionId", "a.id as answerId")
      .first();

    const res = await request(app)
      .post(`/api/quiz/${session.id}/finish-bulk`)
      .set("Authorization", `Bearer ${token}`)
      .send({ answers: [...Array(50).fill(correct), foreign] });
    expect(res.status).toBe(200);
    expect(res.body.correct_answers).toBe(1);
    expect(res.body.acorn_earned).toBe(1);
    expect(res.body.total_questions).toBe(1);
  });

  it("answer rejects a question answered twice or not in the session", async () => {
    const { token } = await registerUser();
    const { session, questions } = await startLesson(token);
    const q = questions[0];
    const send = (questionId: string) =>
      request(app)
        .post(`/api/quiz/${session.id}/answer`)
        .set("Authorization", `Bearer ${token}`)
        .send({ questionId, answerId: q.answers[0]?.id, isSkipped: !q.answers.length });

    expect((await send(q.id)).status).toBe(200);
    expect((await send(q.id)).status).toBe(400);

    const other = await db("questions").whereNotIn("id", questions.map((x) => x.id)).first();
    expect((await send(other.id)).status).toBe(400);
  });
});
