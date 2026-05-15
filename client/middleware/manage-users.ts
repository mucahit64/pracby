/**
 * Route guard for pages that require the 'manage_users' permission.
 * Applied on top of the 'admin' middleware for user management routes.
 */
export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.server) return

  const token = localStorage.getItem('pb_token')
  if (!token) return navigateTo('/admin/login')

  try {
    const user = await $fetch<{ permissions?: string[] }>('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!user.permissions?.includes('manage_users')) {
      return navigateTo('/admin')
    }
  } catch {
    return navigateTo('/admin')
  }
})
