<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-white">Kullanıcılar</h1>
      <button @click="openCreateModal" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-lg transition-colors">
        + Yeni Kullanıcı
      </button>
    </div>

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
            <th class="px-4 py-3 font-medium w-28">Rol</th>
            <th class="px-4 py-3 font-medium w-20 text-center">XP</th>
            <th class="px-4 py-3 font-medium w-20 text-center">Seviye</th>
            <th class="px-4 py-3 font-medium w-20 text-center">Quiz</th>
            <th class="px-4 py-3 font-medium w-28">Kayıt</th>
            <th class="px-4 py-3 font-medium w-36 text-center">İşlem</th>
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
              <span :class="roleBadgeClass(u.role_name)" class="text-xs px-2 py-1 rounded-full font-medium">
                {{ u.role_name ?? '—' }}
              </span>
            </td>
            <td class="px-4 py-3 text-center text-gray-300">{{ u.xp ?? 0 }}</td>
            <td class="px-4 py-3 text-center text-gray-300">{{ u.level ?? 1 }}</td>
            <td class="px-4 py-3 text-center text-gray-300">{{ u.quizzes_completed ?? 0 }}</td>
            <td class="px-4 py-3 text-gray-400 text-xs">{{ formatDate(u.created_at) }}</td>
            <td class="px-4 py-3 text-center">
              <div class="flex gap-2 justify-center">
                <button
                  @click="openRoleModal(u)"
                  class="text-xs px-2 py-1 rounded-lg bg-purple-600/20 text-purple-400 hover:bg-purple-600/40 transition-colors"
                >
                  Rol Değiştir
                </button>
                <NuxtLink
                  :to="`/admin/users/${u.id}`"
                  class="text-xs px-2 py-1 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                >
                  Detay
                </NuxtLink>
              </div>
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

    <!-- Role Edit Modal -->
    <Teleport to="body">
      <div
        v-if="modal.open"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        @click.self="modal.open = false"
      >
        <div class="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-sm shadow-xl">
          <h2 class="text-lg font-bold text-white mb-1">Rol Değiştir</h2>
          <p class="text-gray-400 text-sm mb-5">
            <span class="text-gray-200 font-medium">{{ modal.username }}</span> kullanıcısının rolünü güncelle
          </p>

          <label class="block text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">Yeni Rol</label>
          <select v-model="modal.selectedRoleId" class="admin-input mb-5">
            <option v-for="r in roles" :key="r.id" :value="r.id">{{ r.name }}</option>
          </select>

          <div class="flex gap-3">
            <button
              @click="saveRole"
              :disabled="modal.saving"
              class="flex-1 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-colors disabled:opacity-50"
            >
              {{ modal.saving ? 'Kaydediliyor...' : 'Kaydet' }}
            </button>
            <button
              @click="modal.open = false"
              class="flex-1 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm font-medium transition-colors"
            >
              İptal
            </button>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Create User Modal -->
    <Teleport to="body">
      <div
        v-if="createModal.open"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        @click.self="createModal.open = false"
      >
        <div class="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-sm shadow-xl">
          <h2 class="text-lg font-bold text-white mb-5">Yeni Kullanıcı Oluştur</h2>

          <div class="space-y-4">
            <div>
              <label class="block text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">Email</label>
              <input v-model="createModal.email" type="email" class="admin-input" placeholder="ornek@mail.com" />
            </div>
            <div>
              <label class="block text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">Kullanıcı Adı</label>
              <input v-model="createModal.username" type="text" class="admin-input" placeholder="kullanici_adi" />
            </div>
            <div>
              <label class="block text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">Şifre</label>
              <input v-model="createModal.password" type="password" class="admin-input" placeholder="En az 6 karakter" />
            </div>
            <div>
              <label class="block text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">Rol</label>
              <select v-model="createModal.roleId" class="admin-input">
                <option value="">Rol seçin...</option>
                <option v-for="r in roles" :key="r.id" :value="r.id">{{ r.name }}</option>
              </select>
            </div>
          </div>

          <p v-if="createModal.error" class="mt-3 text-red-400 text-sm">{{ createModal.error }}</p>

          <div class="flex gap-3 mt-6">
            <button
              @click="saveCreateUser"
              :disabled="createModal.saving"
              class="flex-1 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-colors disabled:opacity-50"
            >
              {{ createModal.saving ? 'Oluşturuluyor...' : 'Oluştur' }}
            </button>
            <button
              @click="createModal.open = false"
              class="flex-1 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm font-medium transition-colors"
            >
              İptal
            </button>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Toast -->
    <Teleport to="body">
      <Transition name="toast">
        <div
          v-if="toast.visible"
          :class="[
            'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg text-sm font-medium',
            toast.error
              ? 'bg-red-900/90 text-red-200 border border-red-700'
              : 'bg-green-900/90 text-green-200 border border-green-700'
          ]"
        >
          {{ toast.message }}
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['admin', 'manage-users'] })

const { api } = useApi()

interface UserRow {
  id: string
  username: string
  email: string
  role_id: string
  role_name: string
  xp: number
  level: number
  quizzes_completed: number
  acorn_balance: number
  energy: number
  created_at: string
}

interface Role {
  id: string
  name: string
  description: string | null
}

const loading = ref(true)
const users = ref<UserRow[]>([])
const roles = ref<Role[]>([])
const total = ref(0)
const page = ref(1)
const limit = 20
const searchQuery = ref('')

const modal = reactive({
  open: false,
  userId: '',
  username: '',
  selectedRoleId: '',
  saving: false,
})

const createModal = reactive({
  open: false,
  email: '',
  username: '',
  password: '',
  roleId: '',
  saving: false,
  error: '',
})

const toast = reactive({
  visible: false,
  message: '',
  error: false,
})

let searchTimeout: ReturnType<typeof setTimeout> | null = null
let toastTimeout: ReturnType<typeof setTimeout> | null = null

const totalPages = computed(() => Math.ceil(total.value / limit))
const paginationRange = computed(() => {
  const pages: number[] = []
  const start = Math.max(1, page.value - 2)
  const end = Math.min(totalPages.value, page.value + 2)
  for (let i = start; i <= end; i++) pages.push(i)
  return pages
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
  return new Date(d).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function showToast(message: string, error = false) {
  if (toastTimeout) clearTimeout(toastTimeout)
  toast.message = message
  toast.error = error
  toast.visible = true
  toastTimeout = setTimeout(() => { toast.visible = false }, 3000)
}

function debouncedSearch() {
  if (searchTimeout) clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => loadUsers(1), 300)
}

function openCreateModal() {
  createModal.email = ''
  createModal.username = ''
  createModal.password = ''
  createModal.roleId = ''
  createModal.error = ''
  createModal.saving = false
  createModal.open = true
}

async function saveCreateUser() {
  createModal.error = ''
  if (!createModal.email || !createModal.username || !createModal.password || !createModal.roleId) {
    createModal.error = 'Tüm alanları doldurun.'
    return
  }
  createModal.saving = true
  try {
    await api('/api/admin/users', {
      method: 'POST',
      body: {
        email: createModal.email,
        username: createModal.username,
        password: createModal.password,
        role_id: createModal.roleId,
      },
    })
    createModal.open = false
    showToast('Kullanıcı başarıyla oluşturuldu.')
    await loadUsers(1)
  } catch (e) {
    const err = e as { data?: { error?: string } }
    createModal.error = err?.data?.error ?? 'Bir hata oluştu.'
  } finally {
    createModal.saving = false
  }
}

function openRoleModal(u: UserRow) {  modal.userId = u.id
  modal.username = u.username
  modal.selectedRoleId = u.role_id
  modal.saving = false
  modal.open = true
}

async function saveRole() {
  if (!modal.selectedRoleId) return
  modal.saving = true
  try {
    const updated = await api<UserRow & { role_name: string }>(`/api/admin/users/${modal.userId}/role`, {
      method: 'PATCH',
      body: { role_id: modal.selectedRoleId },
    })
    const idx = users.value.findIndex(u => u.id === modal.userId)
    if (idx !== -1) {
      users.value[idx].role_id = updated.role_id
      users.value[idx].role_name = updated.role_name
    }
    modal.open = false
    showToast('Rol başarıyla güncellendi.')
  } catch (e) {
    const err = e as { data?: { error?: string } }
    showToast(err?.data?.error ?? 'Bir hata oluştu.', true)
  } finally {
    modal.saving = false
  }
}

async function loadUsers(p: number = 1) {
  page.value = p
  loading.value = true
  try {
    const params = new URLSearchParams({ page: String(p), limit: String(limit) })
    if (searchQuery.value.trim()) params.set('search', searchQuery.value.trim())
    const res = await api<{ users: UserRow[]; total: number }>(`/api/admin/users?${params}`)
    users.value = res.users
    total.value = res.total
  } catch {
    // ignore
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  const [, rolesResult] = await Promise.allSettled([
    loadUsers(),
    api<Role[]>('/api/admin/roles'),
  ])
  if (rolesResult.status === 'fulfilled') roles.value = rolesResult.value
})
</script>

<style scoped>
.admin-input {
  @apply w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.25s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
