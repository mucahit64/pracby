import { describe, it, expect } from "vitest";
import request from "supertest";
import { app, db, registerUser } from "./helpers";

// Own file: the auth rate limit (10 requests a minute) counts per test file.

async function findTopic() {
  const row = await db("questions").where({ status: "approved" }).select("topic_id").first();
  if (!row) throw new Error("fixture data: need a topic with questions");
  return row.topic_id as string;
}

const DELETED_TOPIC = "00000000-0000-4000-8000-000000000000";

const finalOf = (userId: string, topicId: string) =>
  db("user_topic_progress").where({ user_id: userId, topic_id: topicId }).first();

const register = (guest_data: object) => {
  const n = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  return request(app)
    .post("/api/auth/register")
    .send({ email: `final-${n}@example.com`, username: `final${n}`.slice(0, 20), password: "Password123!", guest_data });
};

describe("a guest's topic final (the boss) is transferred", () => {
  it("register saves its best score; a result without a step is a final", async () => {
    const topicId = await findTopic();
    const res = await register({
      quiz_results: [
        { topicId, correctCount: 4, totalQuestions: 10 },
        { topicId, sessionType: "topic_final", correctCount: 8, totalQuestions: 10 },
        { topicId: DELETED_TOPIC, correctCount: 9, totalQuestions: 10 },
      ],
    });
    expect(res.status).toBe(201);
    const final = await finalOf(res.body.user.id, topicId);
    expect(final.final_best_score).toBe(80);
    expect(final.final_completed_at).not.toBeNull();
    expect(await finalOf(res.body.user.id, DELETED_TOPIC)).toBeUndefined();
  });

  it("caps a final at the questions the final asks (at most 20)", async () => {
    const topicId = await findTopic();
    const [{ n }] = await db("questions").where({ topic_id: topicId, status: "approved" }).count("* as n");
    const asked = Math.min(20, Number(n));
    const res = await register({ quiz_results: [{ topicId, correctCount: 50, totalQuestions: 50 }] });
    expect((await finalOf(res.body.user.id, topicId)).final_best_score).toBe(Math.round((asked / 50) * 100));
  });

  it("merge raises the best score and gives XP only for the first finish", async () => {
    const topicId = await findTopic();
    const { token, userId } = await registerUser();
    const merge = (correctCount: number) =>
      request(app)
        .post("/api/auth/merge-guest-progress")
        .set("Authorization", `Bearer ${token}`)
        .send({ quiz_results: [{ topicId, sessionType: "topic_final", correctCount, totalQuestions: 10 }] });

    expect((await merge(5)).body.xp_awarded).toBe(5);
    expect((await finalOf(userId, topicId)).final_best_score).toBe(50);

    expect((await merge(9)).body.xp_awarded).toBe(0);
    expect((await finalOf(userId, topicId)).final_best_score).toBe(90);
  });
});
