import { describe, it, expect } from "vitest";
import request from "supertest";
import { app, db, registerUser } from "./helpers";

const DAY = 24 * 3600 * 1000;
const isoDaysAgo = (days: number) => new Date(Date.now() - days * DAY).toISOString();
const dayAgo = (days: number) => isoDaysAgo(days).slice(0, 10);

async function lessonToStart() {
  return db("tests as t")
    .join("steps as s", "s.id", "t.step_id")
    .where({ "s.step_type": "lesson" })
    .orderBy("t.sort_order")
    .first("t.id as testId", "s.id as stepId", "s.topic_id as topicId");
}

// Starts a lesson and finishes it with one correct answer given [daysAgo] days ago
// (what a result queued offline on the app sends).
async function playDaysAgo(token: string, daysAgo: number) {
  const { topicId, stepId, testId } = await lessonToStart();
  const start = await request(app)
    .post("/api/quiz/start")
    .set("Authorization", `Bearer ${token}`)
    .send({ topicId, stepId, testId, sessionType: "lesson" });
  expect(start.status).toBe(201);
  const q = (start.body.questions as { id: string; answers: { id: string; is_correct: boolean }[] }[]).find((x) =>
    x.answers.some((a) => a.is_correct),
  )!;
  const res = await request(app)
    .post(`/api/quiz/${start.body.session.id}/finish-bulk`)
    .set("Authorization", `Bearer ${token}`)
    .send({
      answers: [{ questionId: q.id, answerId: q.answers.find((a) => a.is_correct)!.id, answeredAt: isoDaysAgo(daysAgo) }],
    });
  expect(res.status).toBe(200);
}

const historyDays = async (userId: string) =>
  (
    await db("streak_history")
      .where({ user_id: userId })
      .where("quizzes_completed", ">", 0)
      .orderBy("date")
      .select(db.raw("to_char(date, 'YYYY-MM-DD') as day"))
  ).map((r: { day: string }) => r.day);

const statsOf = async (userId: string) => {
  const s = await db("user_stats")
    .where({ user_id: userId })
    .first("current_streak", "max_streak", db.raw("to_char(last_active_date, 'YYYY-MM-DD') as last"));
  return { current: s.current_streak as number, max: s.max_streak as number, last: s.last as string | null };
};

describe("streak counts the day a quiz was played", () => {
  it("writes a result sent later to the day it was played", async () => {
    const { token, userId } = await registerUser();
    await playDaysAgo(token, 2);
    expect(await historyDays(userId)).toEqual([dayAgo(2)]);
    expect(await statsOf(userId)).toMatchObject({ current: 1, last: dayAgo(2) });
  });

  it("builds the streak from queued days, in order or not", async () => {
    const { token, userId } = await registerUser();
    await playDaysAgo(token, 1);
    await playDaysAgo(token, 3);
    await playDaysAgo(token, 2);
    await playDaysAgo(token, 0);
    expect(await historyDays(userId)).toEqual([dayAgo(3), dayAgo(2), dayAgo(1), dayAgo(0)]);
    expect(await statsOf(userId)).toEqual({ current: 4, max: 4, last: dayAgo(0) });
  });

  it("restarts after a missed day but keeps the best streak", async () => {
    const { token, userId } = await registerUser();
    await playDaysAgo(token, 5);
    await playDaysAgo(token, 4);
    await playDaysAgo(token, 1);
    expect(await statsOf(userId)).toEqual({ current: 1, max: 2, last: dayAgo(1) });
  });

  it("counts times older than 7 days or in the future as today", async () => {
    const { token, userId } = await registerUser();
    await playDaysAgo(token, 10);
    await playDaysAgo(token, -3);
    expect(await historyDays(userId)).toEqual([dayAgo(0)]);
  });
});

describe("streak freeze", () => {
  it("keeps the streak over a frozen day without adding to it", async () => {
    const { token, userId } = await registerUser();
    await playDaysAgo(token, 2);
    await db("streak_history").insert({ user_id: userId, date: dayAgo(1), frozen: true });
    await playDaysAgo(token, 0);
    expect(await statsOf(userId)).toMatchObject({ current: 2, last: dayAgo(0) });
  });

  it("without the freeze the missed day breaks it", async () => {
    const { token, userId } = await registerUser();
    await playDaysAgo(token, 2);
    await playDaysAgo(token, 0);
    expect((await statsOf(userId)).current).toBe(1);
  });

  it("activating it marks the days it covers and shows them in the week", async () => {
    const { token, userId } = await registerUser();
    await playDaysAgo(token, 1);
    const freeze = await db("store_items").where({ item_type: "streak_freeze" }).first("id");
    await db("user_items").insert({ user_id: userId, item_id: freeze.id, quantity: 1 });

    const res = await request(app)
      .post(`/api/store/activate/${freeze.id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);

    const frozen = await db("streak_history")
      .where({ user_id: userId, frozen: true })
      .select(db.raw("to_char(date, 'YYYY-MM-DD') as day"));
    expect(frozen.map((r: { day: string }) => r.day)).toContain(dayAgo(0));
    // Yesterday's quiz plus a frozen today: still a 1-day streak, alive tomorrow too
    const stats = await statsOf(userId);
    expect(stats.current).toBe(1);
    expect(stats.last! >= dayAgo(0)).toBe(true);

    const week = await request(app).get("/api/users/me/streak-history").set("Authorization", `Bearer ${token}`);
    const today = (week.body as { date: string; done: boolean; frozen: boolean }[]).find((d) => d.date === dayAgo(0))!;
    expect(today).toMatchObject({ done: false, frozen: true });
  });
});
