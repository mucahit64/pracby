import { describe, it, expect } from "vitest";
import request from "supertest";
import { app, db, registerUser } from "./helpers";

const HOUR = 60 * 60 * 1000;

async function findMcQuestionWithWrongAnswer() {
  const row = await db("answers as a")
    .join("questions as q", "a.question_id", "q.id")
    .where({ "a.is_correct": false, "q.status": "approved", "q.question_type": "multiple_choice" })
    .whereNotNull("q.test_id")
    .select("q.topic_id", "q.test_id", "q.id as question_id", "a.id as answer_id")
    .first();
  if (!row) throw new Error("fixture data: need an approved MC question with a wrong answer");
  return row;
}

/** Starts a test session and finishes it with one wrong answer (costs 1 energy). */
async function loseOneEnergy(token: string) {
  const q = await findMcQuestionWithWrongAnswer();
  const start = await request(app)
    .post("/api/quiz/start")
    .set("Authorization", `Bearer ${token}`)
    .send({ topicId: q.topic_id, testId: q.test_id, sessionType: "lesson" });
  expect(start.status).toBe(201);

  const finish = await request(app)
    .post(`/api/quiz/${start.body.session.id}/finish-bulk`)
    .set("Authorization", `Bearer ${token}`)
    .send({ answers: [{ questionId: q.question_id, answerId: q.answer_id }] });
  expect(finish.status).toBe(200);
  expect(finish.body.energy_lost).toBe(1);
}

describe("energy regeneration after spending", () => {
  it("does not refund energy spent from a full bar that has been idle for hours", async () => {
    const { token, userId } = await registerUser();
    await db("users").where({ id: userId }).update({ energy: 25, energy_refreshed_at: new Date(Date.now() - 5 * HOUR) });

    await loseOneEnergy(token);

    const me = await request(app).get("/api/users/me").set("Authorization", `Bearer ${token}`);
    expect(me.status).toBe(200);
    expect(me.body.energy).toBe(24);
    expect(new Date(me.body.next_energy_at).getTime()).toBeGreaterThan(Date.now());
  });

  it("keeps accrued regeneration when spending below max", async () => {
    const { token, userId } = await registerUser();
    const refreshedAt = new Date(Date.now() - 5 * 60 * 1000); // 5 minutes into the current tick
    await db("users").where({ id: userId }).update({ energy: 20, energy_refreshed_at: refreshedAt });

    await loseOneEnergy(token);

    const user = await db("users").where({ id: userId }).first("energy", "energy_refreshed_at");
    expect(user.energy).toBe(19);
    expect(new Date(user.energy_refreshed_at).getTime()).toBe(refreshedAt.getTime());
  });
});
