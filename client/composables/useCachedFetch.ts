/**
 * GET that keeps its last successful response in localStorage and returns it
 * when the request fails for lack of a connection, so content seen online
 * (lesson map, energy packages) stays usable offline. Not for quiz questions:
 * a quiz only starts online.
 */
export async function cachedFetch<T>(url: string, opts: { headers?: Record<string, string> } = {}): Promise<T> {
  const token = localStorage.getItem('pb_token');
  // Responses can carry a user's progress and balances: keep each login apart.
  const key = `pb_cache:${token ? token.slice(-16) : 'guest'}:${url}`;
  try {
    const data = await $fetch<T>(url, opts);
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
      // Storage full — the response is still returned.
    }
    return data;
  } catch (e) {
    // A request that failed without a response means there is no connection.
    const offline = !(e as { status?: number })?.status;
    const cached = offline ? localStorage.getItem(key) : null;
    if (cached === null) throw e;
    return JSON.parse(cached) as T;
  }
}
