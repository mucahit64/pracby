import { describe, it, expect } from "vitest";
import request from "supertest";
import { app, db } from "./helpers";
import { registerUser } from "./helpers";

// Starts a lesson and returns one of its MC questions with its correct answer (qA), plus the
// correct answer of a different question (qB). Answers only count for the session's own questions.
async function startWithTwoUnrelatedMcQuestions(token: string) {
  const topic = await db("answers as a")
    .join("questions as q", "a.question_id", "q.id")
    .where({ "a.is_correct": true, "q.status": "approved", "q.question_type": "multiple_choice" })
    .select("q.topic_id")
    .first();

  const startRes = await request(app)
    .post("/api/quiz/start")
    .set("Authorization", `Bearer ${token}`)
    .send({ topicId: topic.topic_id, sessionType: "lesson" });
  expect(startRes.status).toBe(201);
  const sessionId = startRes.body.session?.id as string;
  expect(sessionId).toBeTruthy();

  const questions = startRes.body.questions as {
    id: string;
    question_type: string;
    answers: { id: string; is_correct: boolean }[];
  }[];
  const q = questions.find((x) => x.question_type === "multiple_choice" && x.answers.some((a) => a.is_correct));
  if (!q) throw new Error("fixture data: need an MC question with a correct answer in the lesson");
  const qA = { question_id: q.id, answer_id: q.answers.find((a) => a.is_correct)!.id };

  const qB = await db("answers")
    .where({ is_correct: true })
    .whereNot({ question_id: qA.question_id })
    .select("question_id", "id as answer_id")
    .first();
  return { sessionId, qA, qB };
}

describe("POST /api/quiz/:sessionId/answer — cross-question answer ownership", () => {
  it("does not credit a correct answer that belongs to a different question", async () => {
    const { token } = await registerUser();
    const { sessionId, qA, qB } = await startWithTwoUnrelatedMcQuestions(token);

    // Exploit attempt: qA's question paired with qB's correct answer id.
    const exploitRes = await request(app)
      .post(`/api/quiz/${sessionId}/answer`)
      .set("Authorization", `Bearer ${token}`)
      .send({ questionId: qA.question_id, answerId: qB.answer_id });

    expect(exploitRes.status).toBe(200);
    expect(exploitRes.body.isCorrect).toBe(false);
  });

  it("still credits a correctly-paired answer (sanity check)", async () => {
    const { token } = await registerUser();
    const { sessionId, qA } = await startWithTwoUnrelatedMcQuestions(token);

    const res = await request(app)
      .post(`/api/quiz/${sessionId}/answer`)
      .set("Authorization", `Bearer ${token}`)
      .send({ questionId: qA.question_id, answerId: qA.answer_id });

    expect(res.status).toBe(200);
    expect(res.body.isCorrect).toBe(true);
  });
});
