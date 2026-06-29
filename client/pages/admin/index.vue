<template>
  <div>
    <h1 class="text-2xl font-bold text-white mb-6">Dashboard</h1>

    <div v-if="loading" class="text-gray-400">Yükleniyor...</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="card in cards" :key="card.label" class="bg-gray-800 rounded-xl p-5 border border-gray-700">
        <div class="flex items-center justify-between mb-2">
          <span class="text-gray-400 text-sm">{{ card.label }}</span>
          <span class="w-5 h-5 text-gray-500">{{ card.icon }}</span>
        </div>
        <div class="text-2xl font-bold" :class="card.color">{{ card.value }}</div>
        <p v-if="card.sub" class="text-xs text-gray-500 mt-1">{{ card.sub }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['admin'] })

const { api } = useApi()

const loading = ref(true)
const stats = ref<Record<string, number>>({})

const cards = computed(() => [
  {
    label: 'Toplam Kullanıcı',
    value: stats.value.users ?? 0,
    color: 'text-blue-400',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>',
    sub: `Bu hafta ${stats.value.new_users_week ?? 0} yeni`,
  },
  {
    label: 'Toplam Soru',
    value: stats.value.questions ?? 0,
    color: 'text-green-400',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
  },
  {
    label: 'Tamamlanan Quiz',
    value: stats.value.quizzes_completed ?? 0,
    color: 'text-purple-400',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
  },
  {
    label: 'Bugün Aktif',
    value: stats.value.active_today ?? 0,
    color: 'text-yellow-400',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
  },
  {
    label: 'Toplam Konu',
    value: stats.value.topics ?? 0,
    color: 'text-indigo-400',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',
  },
  {
    label: 'Toplam Ders',
    value: stats.value.courses ?? 0,
    color: 'text-teal-400',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>',
  },
  {
    label: 'Bekleyen Raporlar',
    value: stats.value.pending_reports ?? 0,
    color: stats.value.pending_reports ? 'text-red-400' : 'text-gray-400',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>',
  },
])

onMounted(async () => {
  try {
    stats.value = await api<Record<string, number>>('/api/admin/stats')
  } catch {
    // ignore
  } finally {
    loading.value = false
  }
})
</script>
