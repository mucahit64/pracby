import { describe, it, expect } from "vitest";
import request from "supertest";
import { app, db, registerUser } from "./helpers";

// An acorn chest and the lesson step right before it in its topic.
async function chestAfterLesson() {
  const chests = await db("steps").where({ step_type: "reward", reward_type: "acorn" }).select("id", "topic_id");
  for (const chest of chests) {
    const steps = await db("steps").where({ topic_id: chest.topic_id }).orderBy("sort_order").select("id", "step_type");
    const previous = steps[steps.findIndex((s) => s.id === chest.id) - 1];
    if (previous?.step_type === "lesson") {
      return { chestId: chest.id as string, lessonId: previous.id as string, topicId: chest.topic_id as string };
    }
  }
  throw new Error("fixture data: need an acorn chest right after a lesson");
}

// A step id that looks real but no longer exists (a deleted step).
const DELETED_STEP = "00000000-0000-4000-8000-000000000000";

const newAccount = () => {
  const n = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  return { email: `transfer-${n}@example.com`, username: `transfer${n}`.slice(0, 20), password: "Password123!" };
};

const progressOf = (userId: string, stepId: string) =>
  db("user_step_progress").where({ user_id: userId, step_id: stepId }).first();
const claimOf = (userId: string, stepId: string) =>
  db("user_reward_claims").where({ user_id: userId, step_id: stepId }).first();

const register = (guest_data: object, acorn_balance?: number) =>
  request(app)
    .post("/api/auth/register")
    .send({ ...newAccount(), guest_data, ...(acorn_balance !== undefined && { acorn_balance }) });

describe("guest progress for steps that no longer exist", () => {
  it("register keeps the rest of the progress", async () => {
    const { lessonId, topicId } = await chestAfterLesson();
    const res = await register({
      quiz_results: [
        { topicId, stepId: lessonId, correctCount: 1, totalQuestions: 2 },
        { topicId, stepId: DELETED_STEP, correctCount: 1, totalQuestions: 2 },
        { topicId, stepId: "not-a-uuid", correctCount: 1, totalQuestions: 2 },
      ],
      claimed_reward_step_ids: [DELETED_STEP],
    });
    expect(res.status).toBe(201);
    expect((await progressOf(res.body.user.id, lessonId))?.is_step_completed).toBe(true);
    expect(await progressOf(res.body.user.id, DELETED_STEP)).toBeUndefined();
  });

  it("merge keeps the rest of the progress", async () => {
    const { lessonId, topicId } = await chestAfterLesson();
    const { token, userId } = await registerUser();
    const res = await request(app)
      .post("/api/auth/merge-guest-progress")
      .set("Authorization", `Bearer ${token}`)
      .send({
        quiz_results: [
          { topicId, stepId: lessonId, correctCount: 1, totalQuestions: 2 },
          { topicId, stepId: DELETED_STEP, correctCount: 1, totalQuestions: 2 },
        ],
        claimed_rewards: [DELETED_STEP],
      });
    expect(res.status).toBe(200);
    expect((await progressOf(userId, lessonId))?.is_step_completed).toBe(true);
  });
});

describe("a guest's chest counts only after the lesson before it, like claimReward", () => {
  it("register drops a chest whose lesson the guest didn't finish", async () => {
    const { chestId } = await chestAfterLesson();
    const res = await register({ claimed_reward_step_ids: [chestId] }, 10_000);
    expect(res.status).toBe(201);
    expect(await claimOf(res.body.user.id, chestId)).toBeUndefined();
    expect(await progressOf(res.body.user.id, chestId)).toBeUndefined();
    const user = await db("users").where({ id: res.body.user.id }).first();
    expect(user.acorn_balance).toBe(500); // no chest acorns on top of the start balance
  });

  it("register keeps a chest after a lesson the guest finished", async () => {
    const { chestId, lessonId, topicId } = await chestAfterLesson();
    const res = await register({
      quiz_results: [{ topicId, stepId: lessonId, correctCount: 1, totalQuestions: 2 }],
      claimed_reward_step_ids: [chestId],
    });
    expect(res.status).toBe(201);
    expect(await claimOf(res.body.user.id, chestId)).toBeDefined();
  });

  it("merge accepts a chest after a lesson the account already finished", async () => {
    const { chestId, lessonId } = await chestAfterLesson();
    const { token, userId } = await registerUser();
    const merge = () =>
      request(app)
        .post("/api/auth/merge-guest-progress")
        .set("Authorization", `Bearer ${token}`)
        .send({ claimed_rewards: [chestId], earned_acorns: 1000 });

    expect((await merge()).status).toBe(200);
    expect(await claimOf(userId, chestId)).toBeUndefined();

    await db("user_step_progress").insert({ user_id: userId, step_id: lessonId, is_step_completed: true, tests_completed: 1 });
    expect((await merge()).status).toBe(200);
    expect(await claimOf(userId, chestId)).toBeDefined();
  });
});
