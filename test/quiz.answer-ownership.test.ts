import { describe, it, expect } from "vitest";
import request from "supertest";
import { app, db } from "./helpers";
import { registerUser } from "./helpers";

async function findTwoUnrelatedMcQuestions() {
  const candidates = await db("answers as a")
    .join("questions as q", "a.question_id", "q.id")
    .where({ "a.is_correct": true, "q.status": "approved", "q.question_type": "multiple_choice" })
    .select("q.id as question_id", "a.id as answer_id", "q.topic_id")
    .limit(50);

  // Pick two whose question ids differ.
  const qA = candidates[0];
  const qB = candidates.find((c) => c.question_id !== qA.question_id);
  if (!qA || !qB) throw new Error("fixture data: need at least 2 distinct MC questions with a correct answer");
  return { qA, qB };
}

describe("POST /api/quiz/:sessionId/answer — cross-question answer ownership", () => {
  it("does not credit a correct answer that belongs to a different question", async () => {
    const { token } = await registerUser();
    const { qA, qB } = await findTwoUnrelatedMcQuestions();

    const startRes = await request(app)
      .post("/api/quiz/start")
      .set("Authorization", `Bearer ${token}`)
      .send({ topicId: qA.topic_id, sessionType: "lesson" });
    expect(startRes.status).toBe(201);
    const sessionId = startRes.body.session?.id;
    expect(sessionId).toBeTruthy();

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
    const { qA } = await findTwoUnrelatedMcQuestions();

    const startRes = await request(app)
      .post("/api/quiz/start")
      .set("Authorization", `Bearer ${token}`)
      .send({ topicId: qA.topic_id, sessionType: "lesson" });
    const sessionId = startRes.body.session?.id;

    const res = await request(app)
      .post(`/api/quiz/${sessionId}/answer`)
      .set("Authorization", `Bearer ${token}`)
      .send({ questionId: qA.question_id, answerId: qA.answer_id });

    expect(res.status).toBe(200);
    expect(res.body.isCorrect).toBe(true);
  });
});
