export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) return;

  const publicPaths = ["/auth/login", "/auth/register"];
  if (publicPaths.some((p) => to.path.startsWith(p))) return;

  const token = localStorage.getItem("pb_token");
  if (!token) {
    return navigateTo("/auth/login");
  }
});
