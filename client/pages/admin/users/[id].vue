<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <NuxtLink to="/admin/users" class="text-gray-400 hover:text-white">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
      </NuxtLink>
      <h1 class="text-2xl font-bold text-white">Kullanıcı Detayı</h1>
    </div>

    <div v-if="loading" class="text-gray-400">Yükleniyor...</div>

    <div v-else-if="user" class="space-y-6">
      <!-- User Info -->
      <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div class="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h2 class="text-xl font-bold text-white">{{ user.username }}</h2>
            <p class="text-gray-400 text-sm">{{ user.email }}</p>
            <p class="text-gray-500 text-xs mt-1">Kayıt: {{ formatDate(user.created_at) }}</p>
          </div>
          <span :class="roleBadgeClass(user.role_name)" class="text-sm px-3 py-1 rounded-lg font-medium">
            {{ user.role_name ?? '—' }}
          </span>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
          <div class="text-2xl font-bold text-blue-400">{{ user.xp ?? 0 }}</div>
          <div class="text-xs text-gray-400 mt-1">XP</div>
        </div>
        <div class="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
          <div class="text-2xl font-bold text-purple-400">{{ user.level ?? 1 }}</div>
          <div class="text-xs text-gray-400 mt-1">Seviye</div>
        </div>
        <div class="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
          <div class="text-2xl font-bold text-green-400">{{ user.streak ?? 0 }}</div>
          <div class="text-xs text-gray-400 mt-1">Streak (max: {{ user.max_streak ?? 0 }})</div>
        </div>
        <div class="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
          <div class="text-2xl font-bold text-yellow-400">{{ user.quizzes_completed ?? 0 }}</div>
          <div class="text-xs text-gray-400 mt-1">Quiz</div>
        </div>
      </div>

      <!-- Edit Form -->
      <div class="bg-gray-800 rounded-xl p-6 border border-gray-700 space-y-4">
        <h3 class="text-lg font-semibold text-gray-200">Düzenle</h3>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- Role selector — uses /users/:id/role endpoint -->
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Rol</label>
            <select v-model="editForm.role_id" class="admin-select">
              <option v-for="r in roles" :key="r.id" :value="r.id">{{ r.name }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Enerji</label>
            <input v-model.number="editForm.energy" type="number" min="0" max="25" class="admin-input" >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Palamut</label>
            <input v-model.number="editForm.acorn_balance" type="number" min="0" class="admin-input" >
          </div>
        </div>

        <div class="flex gap-3">
          <button
            :disabled="submitting"
            class="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
            @click="handleUpdate"
          >
            {{ submitting ? 'Kaydediliyor...' : 'Güncelle' }}
          </button>
          <button
            v-if="user.role_name !== 'admin'"
            :disabled="submitting"
            class="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 text-sm font-medium rounded-lg transition-colors"
            @click="handleDelete"
          >
            Kullanıcıyı Sil
          </button>
        </div>

        <p v-if="error" class="text-red-400 text-sm">{{ error }}</p>
        <p v-if="success" class="text-green-400 text-sm">{{ success }}</p>
      </div>

      <!-- Enrollments -->
      <div v-if="user.enrollments?.length" class="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 class="text-lg font-semibold text-gray-200 mb-3">Sınav Kayıtları</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="e in user.enrollments"
            :key="e.id"
            :class="e.is_active ? 'bg-green-600/20 text-green-400' : 'bg-gray-600/20 text-gray-400'"
            class="text-xs px-3 py-1.5 rounded-lg font-medium"
          >
            {{ e.name }}
          </span>
        </div>
      </div>

      <!-- Recent Quizzes -->
      <div v-if="user.recent_quizzes?.length" class="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 class="text-lg font-semibold text-gray-200 mb-3">Son Quizler</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="text-gray-400 text-left border-b border-gray-700">
                <th class="px-3 py-2 font-medium">Tip</th>
                <th class="px-3 py-2 font-medium text-center">Doğru</th>
                <th class="px-3 py-2 font-medium text-center">Toplam</th>
                <th class="px-3 py-2 font-medium text-center">XP</th>
                <th class="px-3 py-2 font-medium">Tarih</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="q in user.recent_quizzes" :key="q.id" class="border-b border-gray-700/50">
                <td class="px-3 py-2 text-gray-300">{{ q.session_type }}</td>
                <td class="px-3 py-2 text-center text-green-400">{{ q.correct_answers }}</td>
                <td class="px-3 py-2 text-center text-gray-300">{{ q.total_questions }}</td>
                <td class="px-3 py-2 text-center text-purple-400">{{ q.xp_earned }}</td>
                <td class="px-3 py-2 text-gray-400 text-xs">{{ formatDate(q.finished_at) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['admin', 'manage-users'] })

const route = useRoute()
const { api, extractError } = useApi()

interface Role {
  id: string
  name: string
  description: string | null
}

const loading = ref(true)
const submitting = ref(false)
const error = ref('')
const success = ref('')
const user = ref<any>(null)
const roles = ref<Role[]>([])

const editForm = reactive({
  role_id: '',
  energy: 25,
  acorn_balance: 0,
})

function roleBadgeClass(roleName: string) {
  const map: Record<string, string> = {
    admin: 'bg-purple-600/20 text-purple-400',
    teacher: 'bg-blue-600/20 text-blue-400',
    student: 'bg-green-600/20 text-green-400',
  }
  return map[roleName] ?? 'bg-gray-600/20 text-gray-400'
}

function formatDate(d: string) {
  if (!d) return '-'
  return new Date(d).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

async function handleUpdate() {
  error.value = ''
  success.value = ''
  submitting.value = true
  try {
    const userId = route.params.id as string

    // Update role separately via dedicated endpoint
    if (editForm.role_id !== user.value.role_id) {
      const roleResult = await api<{ role_name: string; role_id: string }>(`/api/admin/users/${userId}/role`, {
        method: 'PATCH',
        body: { role_id: editForm.role_id },
      })
      user.value.role_id = roleResult.role_id
      user.value.role_name = roleResult.role_name
    }

    // Update energy/acorn via general endpoint
    await api(`/api/admin/users/${userId}`, {
      method: 'PATCH',
      body: {
        energy: editForm.energy,
        acorn_balance: editForm.acorn_balance,
      },
    })

    user.value.energy = editForm.energy
    user.value.acorn_balance = editForm.acorn_balance
    success.value = 'Kullanıcı güncellendi!'
  } catch (e) {
    error.value = extractError(e)
  } finally {
    submitting.value = false
  }
}

async function handleDelete() {
  if (!confirm('Bu kullanıcıyı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.')) return
  submitting.value = true
  try {
    await api(`/api/admin/users/${route.params.id}`, { method: 'DELETE' })
    await navigateTo('/admin/users')
  } catch (e) {
    error.value = extractError(e)
  } finally {
    submitting.value = false
  }
}

onMounted(async () => {
  try {
    const [userData, rolesData] = await Promise.all([
      api<any>(`/api/admin/users/${route.params.id}`),
      api<Role[]>('/api/admin/roles'),
    ])
    user.value = userData
    roles.value = rolesData
    editForm.role_id = userData.role_id
    editForm.energy = userData.energy
    editForm.acorn_balance = userData.acorn_balance
  } catch {
    error.value = 'Kullanıcı yüklenemedi'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.admin-select {
  @apply w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500;
}
.admin-input {
  @apply w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500;
}
</style>
