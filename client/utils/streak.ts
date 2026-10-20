/**
 * The UTC calendar day ("YYYY-MM-DD") of a `last_active_date` from the API.
 * The DATE column is sent as a timestamp at midnight in the server's time
 * zone (UTC in production; e.g. "…T21:00:00.000Z" for the next day on a
 * UTC+3 dev machine). Adding 12 hours before taking the UTC date recovers the
 * day for any server zone within ±12h.
 */
export function utcDay(value: string | null | undefined): string | null {
  if (!value) return null;
  if (!value.includes('T')) return value.slice(0, 10);
  const time = Date.parse(value);
  if (Number.isNaN(time)) return null;
  return new Date(time + 12 * 3600 * 1000).toISOString().slice(0, 10);
}

/**
 * The streak to show. The server only resets `current_streak` at the next
 * rewarded quiz, so a streak whose last active day is before yesterday (UTC)
 * is already broken and shows 0 (MOBILE_APP_DOCS.md 16.4).
 */
export function displayStreak(currentStreak: number | null | undefined, lastActiveDate: string | null | undefined): number {
  const last = utcDay(lastActiveDate);
  if (!last) return 0;
  const yesterday = new Date(Date.now() - 24 * 3600 * 1000).toISOString().slice(0, 10);
  return last < yesterday ? 0 : (currentStreak ?? 0);
}
