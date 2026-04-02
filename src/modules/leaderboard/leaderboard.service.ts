import db from "../../db/knex";

type League = "bronze" | "silver" | "gold" | "diamond";

export const getLeaderboard = async (league: League) => {
  const weekStart = getWeekStart();

  return db("leaderboard as l")
    .join("users as u", "l.user_id", "u.id")
    .where({ "l.league": league, "l.week_start": weekStart })
    .select("u.username", "u.avatar_url", "l.xp_earned", "l.rank")
    .orderBy("l.xp_earned", "desc")
    .limit(30);
};

function getWeekStart(): string {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(now.setDate(diff));
  return monday.toISOString().split("T")[0];
}
