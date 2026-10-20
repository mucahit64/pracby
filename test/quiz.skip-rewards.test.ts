import { describe, it, expect } from "vitest";
import request from "supertest";
import { app, db, registerUser } from "./helpers";

async function startLesson(token: string) {
  const q = await db("answers as a")
    .join("questions as q", "a.question_id", "q.id")
    .where({ "a.is_correct": false, "q.status": "approved", "q.question_type": "multiple_choice" })
    .whereNotNull("q.step_id")
    .select("q.topic_id", "q.step_id", "q.test_id")
    .first();
  const res = await request(app)
    .post("/api/quiz/start")
    .set("Authorization", `Bearer ${token}`)
    .send({ topicId: q.topic_id, stepId: q.step_id, testId: q.test_id ?? undefined, sessionType: "lesson" });
  expect(res.status).toBe(201);
  return res.body as {
    session: { id: string };
    questions: { id: string; answers: { id: string; is_correct: boolean }[] }[];
  };
}

const wrongAnswers = (questions: { id: string; answers: { id: string; is_correct: boolean }[] }[], n: number) =>
  questions.slice(0, n).map((q) => ({
    questionId: q.id,
    answerId: q.answers.find((a) => !a.is_correct)!.id,
    answeredAt: new Date().toISOString(),
  }));

const me = async (token: string) =>
  (await request(app).get("/api/users/me").set("Authorization", `Bearer ${token}`)).body as {
    energy: number;
    acorn_balance: number;
  };

describe("finish-bulk with skip_rewards (leaving a quiz early)", () => {
  it("deducts energy for the wrong answers sent but grants no rewards or achievements", async () => {
    const { token, userId } = await registerUser();
    const { session, questions } = await startLesson(token);
    const before = await me(token);

    const res = await request(app)
      .post(`/api/quiz/${session.id}/finish-bulk`)
      .set("Authorization", `Bearer ${token}`)
      .send({ answers: wrongAnswers(questions, 3), skip_rewards: true });
    expect(res.status).toBe(200);
    expect(res.body.energy_lost).toBe(3);
    expect(res.body.xp_earned).toBe(0);
    expect(res.body.acorn_earned).toBe(0);

    const after = await me(token);
    expect(after.energy).toBe(before.energy - 3);
    // No "İlk Adım" (+5 acorns) for an abandoned quiz.
    expect(after.acorn_balance).toBe(before.acorn_balance);
    const earned = await db("user_achievements").where({ user_id: userId });
    expect(earned).toHaveLength(0);
  });

  it("does not count abandoned quizzes towards quizzes_completed achievements", async () => {
    const { token, userId } = await registerUser();
    // 9 abandoned quizzes + 1 finished one = 1 completed quiz, so only
    // "İlk Adım" (1) may be earned, not "Hızlı Öğrenci" (10).
    for (let i = 0; i < 9; i++) {
      const abandoned = await startLesson(token);
      await request(app)
        .post(`/api/quiz/${abandoned.session.id}/finish-bulk`)
        .set("Authorization", `Bearer ${token}`)
        .send({ answers: [], skip_rewards: true })
        .expect(200);
    }
    const real = await startLesson(token);
    await request(app)
      .post(`/api/quiz/${real.session.id}/finish-bulk`)
      .set("Authorization", `Bearer ${token}`)
      .send({ answers: wrongAnswers(real.questions, 1), skip_rewards: false })
      .expect(200);

    const values = (
      await db("user_achievements as ua")
        .join("achievements as a", "a.id", "ua.achievement_id")
        .where({ "ua.user_id": userId, "a.requirement_type": "quizzes_completed" })
        .select("a.requirement_value")
    ).map((r) => Number(r.requirement_value));
    expect(values).toEqual([1]);
  });
});
