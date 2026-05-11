<template>
  <div>
    <h1 class="text-2xl font-bold text-white mb-6">Kullanıcılar</h1>

    <!-- Search & Filters -->
    <div class="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div class="sm:col-span-2">
        <input
          v-model="searchQuery"
          @input="debouncedSearch"
          class="admin-input"
          placeholder="Email veya kullanıcı adı ara..."
        />
      </div>
      <div class="text-sm text-gray-400 flex items-center">
        Toplam: {{ total }} kullanıcı
      </div>
    </div>

    <!-- Table -->
    <div class="bg-gray-800 rounded-xl border border-gray-700 overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-gray-700 text-gray-400 text-left">
            <th class="px-4 py-3 font-medium">Kullanıcı</th>
            <th class="px-4 py-3 font-medium w-24">Rol</th>
            <th class="px-4 py-3 font-medium w-20 text-center">XP</th>
            <th class="px-4 py-3 font-medium w-20 text-center">Seviye</th>
            <th class="px-4 py-3 font-medium w-20 text-center">Quiz</th>
            <th class="px-4 py-3 font-medium w-28">Kayıt</th>
            <th class="px-4 py-3 font-medium w-20 text-center">İşlem</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="7" class="px-4 py-8 text-center text-gray-500">Yükleniyor...</td>
          </tr>
          <tr v-else-if="users.length === 0">
            <td colspan="7" class="px-4 py-8 text-center text-gray-500">Kullanıcı bulunamadı</td>
          </tr>
          <tr
            v-for="u in users"
            :key="u.id"
            class="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors"
          >
            <td class="px-4 py-3">
              <div class="text-gray-200 font-medium">{{ u.username }}</div>
              <div class="text-gray-500 text-xs">{{ u.email }}</div>
            </td>
            <td class="px-4 py-3">
              <span :class="u.role === 'admin' ? 'bg-purple-600/20 text-purple-400' : 'bg-gray-600/20 text-gray-400'" class="text-xs px-2 py-1 rounded font-medium">
                {{ u.role === 'admin' ? 'Admin' : 'Kullanıcı' }}
              </span>
            </td>
            <td class="px-4 py-3 text-center text-gray-300">{{ u.xp ?? 0 }}</td>
            <td class="px-4 py-3 text-center text-gray-300">{{ u.level ?? 1 }}</td>
            <td class="px-4 py-3 text-center text-gray-300">{{ u.quizzes_completed ?? 0 }}</td>
            <td class="px-4 py-3 text-gray-400 text-xs">{{ formatDate(u.created_at) }}</td>
            <td class="px-4 py-3 text-center">
              <NuxtLink :to="`/admin/users/${u.id}`" class="text-purple-400 hover:text-purple-300 text-sm">Detay</NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-4">
      <button
        v-for="p in paginationRange"
        :key="p"
        @click="loadUsers(p)"
        :class="['px-3 py-1.5 rounded text-sm font-medium transition-colors', p === page ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600']"
      >{{ p }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['admin'] })

const { api } = useApi()

const loading = ref(true)
const users = ref<any[]>([])
const total = ref(0)
const page = ref(1)
const limit = 20
const searchQuery = ref('')

let searchTimeout: ReturnType<typeof setTimeout> | null = null

const totalPages = computed(() => Math.ceil(total.value / limit))
const paginationRange = computed(() => {
  const pages: number[] = []
  const start = Math.max(1, page.value - 2)
  const end = Math.min(totalPages.value, page.value + 2)
  for (let i = start; i <= end; i++) pages.push(i)
  return pages
})

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function debouncedSearch() {
  if (searchTimeout) clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => loadUsers(1), 300)
}

async function loadUsers(p: number = 1) {
  page.value = p
  loading.value = true
  try {
    const params = new URLSearchParams({ page: String(p), limit: String(limit) })
    if (searchQuery.value.trim()) params.set('search', searchQuery.value.trim())

    const res = await api<{ users: any[]; total: number }>(`/api/admin/users?${params}`)
    users.value = res.users
    total.value = res.total
  } catch {
    // ignore
  } finally {
    loading.value = false
  }
}

onMounted(() => loadUsers())
</script>

<style scoped>
.admin-input {
  @apply w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500;
}
</style>
