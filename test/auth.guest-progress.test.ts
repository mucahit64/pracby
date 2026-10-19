import { describe, it, expect } from "vitest";
import request from "supertest";
import { app, db, registerUser } from "./helpers";

async function findLessonStep() {
  const step = await db("steps").where({ step_type: "lesson" }).select("id", "topic_id").first();
  if (!step) throw new Error("fixture data: need a lesson step");
  return { stepId: step.id as string, topicId: step.topic_id as string };
}

const progressOf = (userId: string, stepId: string) =>
  db("user_step_progress").where({ user_id: userId, step_id: stepId }).first();

describe("guest progress keeps the quiz score", () => {
  it("register stores the guest's best score for the step", async () => {
    const { stepId, topicId } = await findLessonStep();
    const n = Date.now();
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        email: `guest-score-${n}@example.com`,
        username: `guestscore${n}`.slice(0, 20),
        password: "Password123!",
        guest_data: {
          quiz_results: [
            { topicId, stepId, correctCount: 3, totalQuestions: 10 },
            { topicId, stepId, correctCount: 7, totalQuestions: 10 },
          ],
        },
      });
    expect(res.status).toBe(201);

    const progress = await progressOf(res.body.user.id, stepId);
    expect(progress.best_score).toBe(70);
    expect(progress.is_step_completed).toBe(true);
    expect(progress.step_final_passed).toBe(true);
  });

  it("merge after login stores the score and only raises an existing one", async () => {
    const { stepId, topicId } = await findLessonStep();
    const { token, userId } = await registerUser();
    const merge = (correctCount: number) =>
      request(app)
        .post("/api/auth/merge-guest-progress")
        .set("Authorization", `Bearer ${token}`)
        .send({ quiz_results: [{ topicId, stepId, correctCount, totalQuestions: 4 }] });

    expect((await merge(3)).status).toBe(200);
    expect((await progressOf(userId, stepId)).best_score).toBe(75);

    await merge(1);
    expect((await progressOf(userId, stepId)).best_score).toBe(75);

    await merge(4);
    expect((await progressOf(userId, stepId)).best_score).toBe(100);
  });
});
