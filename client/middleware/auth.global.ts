export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) return;

  // Authed users visiting the landing page are redirected to /learn immediately,
  // before the page renders. Guests and bots (no token) stay on the landing page.
  if (to.path === "/" && localStorage.getItem("pb_token")) {
    return navigateTo("/learn", { replace: true });
  }

  const publicPaths = ["/auth/login", "/auth/register", "/auth/register-wall", "/auth/forgot-password", "/auth/reset-password", "/welcome", "/admin/login"];
  if (publicPaths.some((p) => to.path.startsWith(p))) return;

  // Admin pages are handled by their own middleware
  if (to.path.startsWith("/admin")) return;

  // Allow guest access to main app pages and quiz
  const guestAllowedPaths = ["/", "/learn", "/quiz/", "/leaderboard", "/store"];
  const isGuestAllowed = guestAllowedPaths.some((p) =>
    p === "/" ? to.path === "/" : to.path.startsWith(p),
  );
  if (isGuestAllowed) return;

  const token = localStorage.getItem("pb_token");
  if (!token) {
    return navigateTo("/auth/login");
  }
});
