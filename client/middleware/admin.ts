export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return

  const token = localStorage.getItem('pb_token')
  if (!token) {
    return navigateTo('/admin/login')
  }

  try {
    const user = await $fetch<{ role?: string }>('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (user.role !== 'admin') {
      return navigateTo('/')
    }
  } catch {
    localStorage.removeItem('pb_token')
    return navigateTo('/admin/login')
  }
})
