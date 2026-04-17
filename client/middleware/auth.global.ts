export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) return;

  const publicPaths = ["/auth/login", "/auth/register", "/auth/register-wall", "/welcome"];
  if (publicPaths.some((p) => to.path.startsWith(p))) return;

  // Allow guest access to main app pages and quiz
  const guestAllowedPaths = ["/", "/quiz/", "/course/", "/leaderboard", "/store"];
  const isGuestAllowed = guestAllowedPaths.some((p) =>
    p === "/" ? to.path === "/" : to.path.startsWith(p),
  );
  if (isGuestAllowed) return;

  const token = localStorage.getItem("pb_token");
  if (!token) {
    return navigateTo("/auth/login");
  }
});
