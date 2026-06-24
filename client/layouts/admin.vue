<template>
  <div class="min-h-screen bg-gray-900 text-gray-100 flex">
    <!-- Mobile header -->
    <div v-if="isMobile" class="fixed top-0 left-0 right-0 z-30 bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
      <button class="text-gray-300 hover:text-white" @click="sidebarOpen = !sidebarOpen">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <span class="font-bold text-lg text-purple-400">{{ panelTitle }}</span>
      <button class="text-gray-400 hover:text-red-400 text-sm" @click="logout">Çıkış</button>
    </div>

    <!-- Sidebar overlay for mobile -->
    <div v-if="isMobile && sidebarOpen" class="fixed inset-0 z-40 bg-black/50" @click="sidebarOpen = false" />

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed lg:sticky z-50 top-0 left-0 h-screen w-64 bg-gray-800 border-r border-gray-700 flex flex-col transition-transform duration-200',
        isMobile && !sidebarOpen ? '-translate-x-full' : 'translate-x-0'
      ]"
    >
      <div class="px-6 py-5 border-b border-gray-700">
        <h1 class="text-xl font-bold text-purple-400">{{ panelTitle }}</h1>
      </div>

      <nav class="flex-1 px-3 py-4 space-y-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :class="[
            'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
            isActive(item.to)
              ? 'bg-purple-600/20 text-purple-400'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          ]"
          @click="isMobile && (sidebarOpen = false)"
        >
          <span class="w-5 h-5 shrink-0" v-html="item.icon" />
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="px-3 py-4 border-t border-gray-700 space-y-1">
        <div class="px-3 py-2 text-xs text-gray-500 truncate">{{ adminEmail }}</div>
        <NuxtLink
          to="/"
          class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:bg-blue-600/20 hover:text-blue-400 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" /></svg>
          Uygulamaya Dön
        </NuxtLink>
        <button
          class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:bg-red-600/20 hover:text-red-400 transition-colors"
          @click="logout"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          Çıkış Yap
        </button>
      </div>
    </aside>

    <!-- Main content -->
    <main class="flex-1 min-w-0" :class="{ 'pt-14': isMobile }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const sidebarOpen = ref(false)
const isMobile = ref(false)
const adminEmail = ref('')
const userRole = ref('')
const userPermissions = ref<string[]>([])

const panelTitle = computed(() =>
  userRole.value === 'teacher' ? 'Pracby Studio' : 'Pracby Admin'
)

const ALL_NAV_ITEMS = [
  {
    to: '/admin',
    label: 'Dashboard',
    permission: null,
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" /></svg>',
  },
  {
    to: '/admin/questions',
    label: 'Sorular',
    permission: null,
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
  },
  {
    to: '/admin/topics',
    label: 'Konular',
    permission: null,
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>',
  },
  {
    to: '/admin/structure',
    label: 'Yapı Yönetimi',
    permission: null,
    adminOnly: true,
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>',
  },
  {
    to: '/admin/approvals',
    label: 'Onaylar',
    permission: null,
    adminOnly: true,
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
  },
  {
    to: '/admin/reports',
    label: 'Raporlar',
    permission: null,
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>',
  },
  {
    to: '/admin/users',
    label: 'Kullanıcılar',
    permission: 'manage_users',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>',
  },
]

const navItems = computed(() =>
  ALL_NAV_ITEMS.filter(item => {
    if (item.permission && !userPermissions.value.includes(item.permission)) return false
    if ((item as any).adminOnly && userRole.value !== 'admin') return false
    return true
  })
)

function isActive(to: string) {
  if (to === '/admin') return route.path === '/admin'
  return route.path.startsWith(to)
}

function onResize() {
  isMobile.value = window.innerWidth < 1024
}

async function logout() {
  const { reset: resetSession } = useUserSession()
  const { reset: resetExamContent } = useExamContent()
  resetSession()
  resetExamContent()
  localStorage.removeItem('pb_token')
  await navigateTo('/admin/login')
}

onMounted(async () => {
  onResize()
  window.addEventListener('resize', onResize)

  const token = localStorage.getItem('pb_token')
  if (token) {
    try {
      const user = await $fetch<{ email?: string; role?: string; permissions?: string[] }>('/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
      adminEmail.value = user.email ?? ''
      userRole.value = user.role ?? ''
      userPermissions.value = user.permissions ?? []
    } catch {
      // ignore
    }
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>
