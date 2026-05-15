export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return

  const token = localStorage.getItem('pb_token')
  if (!token) {
    return navigateTo('/admin/login')
  }

  try {
    const user = await $fetch<{ permissions?: string[] }>('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!user.permissions?.includes('view_admin_panel')) {
      return navigateTo('/')
    }
  } catch {
    localStorage.removeItem('pb_token')
    return navigateTo('/admin/login')
  }
})
