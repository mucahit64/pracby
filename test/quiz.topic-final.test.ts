import { describe, it, expect } from "vitest";
import request from "supertest";
import { app, db, registerUser } from "./helpers";

type Question = { id: string; answers: { id: string; is_correct: boolean }[] };

// A topic of a course with multiple choice questions, so its final can be played.
async function findTopic() {
  const row = await db("questions as q")
    .join("topics as t", "t.id", "q.topic_id")
    .where({ "q.status": "approved", "q.question_type": "multiple_choice" })
    .select("t.id as topicId", "t.course_id as courseId")
    .first();
  if (!row) throw new Error("fixture data: need a topic with questions");
  return row as { topicId: string; courseId: string };
}

/** Plays the topic's final, answering the first `correct` questions right, the rest wrong. */
async function playFinal(token: string, topicId: string, correct: number | "all", skipRewards = false) {
  const start = await request(app)
    .post("/api/quiz/start")
    .set("Authorization", `Bearer ${token}`)
    .send({ topicId, sessionType: "topic_final" });
  expect(start.status).toBe(201);
  const questions = (start.body.questions as Question[]).filter((q) => q.answers.some((a) => !a.is_correct));
  const right = correct === "all" ? questions.length : correct;
  const answers = questions.map((q, i) => ({
    questionId: q.id,
    answerId: q.answers.find((a) => a.is_correct === i < right)!.id,
    answeredAt: new Date().toISOString(),
  }));
  const finish = await request(app)
    .post(`/api/quiz/${start.body.session.id}/finish-bulk`)
    .set("Authorization", `Bearer ${token}`)
    .send({ answers, skip_rewards: skipRewards });
  expect(finish.status).toBe(200);
  return Math.round((right / answers.length) * 100);
}

const progressOf = (userId: string, topicId: string) =>
  db("user_topic_progress").where({ user_id: userId, topic_id: topicId }).first();

describe("topic final (the boss) is saved like a lesson", () => {
  it("keeps the best score and the first finish, and the course map returns them", async () => {
    const { token, userId } = await registerUser();
    await db("users").where({ id: userId }).update({ energy: 25 });
    const { topicId, courseId } = await findTopic();

    const best = await playFinal(token, topicId, "all");
    const first = await progressOf(userId, topicId);
    expect(first.final_best_score).toBe(best);
    expect(first.final_completed_at).not.toBeNull();

    // A worse run keeps the best score and the first finish.
    await db("users").where({ id: userId }).update({ energy: 25 });
    await playFinal(token, topicId, 0);
    const after = await progressOf(userId, topicId);
    expect(after.final_best_score).toBe(best);
    expect(new Date(after.final_completed_at).getTime()).toBe(new Date(first.final_completed_at).getTime());

    const map = await request(app).get(`/api/courses/${courseId}/full`).set("Authorization", `Bearer ${token}`);
    const topic = map.body.topics.find((t: { id: string }) => t.id === topicId);
    expect(topic.progress.final_best_score).toBe(best);
  });

  it("saves nothing for a final left early", async () => {
    const { token, userId } = await registerUser();
    const { topicId } = await findTopic();
    await playFinal(token, topicId, 1, true);
    expect(await progressOf(userId, topicId)).toBeUndefined();
  });
});

describe("topic final questions", () => {
  it("are the same 20 (or all, if fewer) for every member and guest, easy to hard", async () => {
    const { topicId } = await findTopic();
    const [{ n }] = await db("questions").where({ topic_id: topicId, status: "approved" }).count("* as n");

    const start = async (token: string) =>
      (
        await request(app)
          .post("/api/quiz/start")
          .set("Authorization", `Bearer ${token}`)
          .send({ topicId, sessionType: "topic_final" })
      ).body.questions as { id: string; difficulty: number }[];
    const a = await start((await registerUser()).token);
    const b = await start((await registerUser()).token);
    const guest = (await request(app).get("/api/quiz/guest-start").query({ topicId, sessionType: "topic_final" }))
      .body.questions as { id: string }[];

    expect(a).toHaveLength(Math.min(20, Number(n)));
    expect(b.map((q) => q.id)).toEqual(a.map((q) => q.id));
    expect(guest.map((q) => q.id)).toEqual(a.map((q) => q.id));
    const difficulties = a.map((q) => q.difficulty);
    expect(difficulties).toEqual([...difficulties].sort((x, y) => x - y));
  });
});
