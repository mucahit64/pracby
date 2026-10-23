import type { Knex } from "knex";

// The streak lives in streak_history (one row per UTC day with a rewarded quiz
// or a streak freeze); user_stats.current_streak / max_streak / last_active_date
// are recomputed from it, so days that arrive late (results queued offline on
// the app) or out of order still give the right streak.

/** How far back a quiz's own day is trusted: answeredAt comes from the device clock. */
const MAX_DAYS_BACK = 7;

const utcDay = (time: Date | number): string => new Date(time).toISOString().slice(0, 10);

const addDays = (day: string, days: number): string => {
  const [y, m, d] = day.split("-").map(Number);
  return utcDay(Date.UTC(y, m - 1, d + days));
};

/**
 * The UTC day a quiz was played: that of its last answer's device time. A
 * result sent days later (offline queue) still counts for that day, up to
 * MAX_DAYS_BACK; a missing, future or older time counts as today.
 */
export const playedDay = (answeredAts: (string | undefined)[]): string => {
  const today = utcDay(Date.now());
  const times = answeredAts.map((a) => (a ? Date.parse(a) : NaN)).filter((t) => !Number.isNaN(t));
  if (times.length === 0) return today;
  const day = utcDay(Math.max(...times));
  return day > today || day < addDays(today, -MAX_DAYS_BACK) ? today : day;
};

/** Recomputes user_stats' streak fields from streak_history. */
export const recomputeStreak = async (trx: Knex.Transaction, userId: string): Promise<void> => {
  const rows: { day: string; quizzes_completed: number; frozen: boolean }[] = await trx("streak_history")
    .where({ user_id: userId })
    .where((q) => q.where("quizzes_completed", ">", 0).orWhere("frozen", true))
    .orderBy("date")
    .select(trx.raw("to_char(date, 'YYYY-MM-DD') as day"), "quizzes_completed", "frozen");

  // A run is consecutive days that were played or frozen; only played days count.
  let run = 0;
  let best = 0;
  let previous: string | null = null;
  for (const row of rows) {
    if (previous && addDays(previous, 1) !== row.day) run = 0;
    if (row.quizzes_completed > 0) run += 1;
    best = Math.max(best, run);
    previous = row.day;
  }

  const stats = await trx("user_stats").where({ user_id: userId }).first("max_streak");
  await trx("user_stats")
    .where({ user_id: userId })
    .update({
      current_streak: run,
      streak: run,
      max_streak: Math.max(best, Number(stats?.max_streak) || 0),
      // The last day that kept the streak going (may be a frozen day ahead);
      // clients show 0 once it is before yesterday.
      last_active_date: previous,
    });
};

/** Counts a rewarded quiz for [day] and updates the streak. */
export const recordQuizDay = async (
  trx: Knex.Transaction,
  userId: string,
  day: string,
  xpEarned: number,
): Promise<void> => {
  await trx("streak_history")
    .insert({ user_id: userId, date: day, xp_earned: xpEarned, quizzes_completed: 1 })
    .onConflict(["user_id", "date"])
    .merge({
      xp_earned: trx.raw("streak_history.xp_earned + excluded.xp_earned"),
      quizzes_completed: trx.raw("streak_history.quizzes_completed + 1"),
    });
  await recomputeStreak(trx, userId);
};

/** Marks the UTC days a streak freeze covers ([from, until]) and updates the streak. */
export const freezeDays = async (trx: Knex.Transaction, userId: string, from: Date, until: Date): Promise<void> => {
  const rows = [];
  for (let day = utcDay(from); day <= utcDay(until); day = addDays(day, 1)) {
    rows.push({ user_id: userId, date: day, frozen: true });
  }
  await trx("streak_history").insert(rows).onConflict(["user_id", "date"]).merge(["frozen"]);
  await recomputeStreak(trx, userId);
};
