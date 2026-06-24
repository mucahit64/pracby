<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-white">Modül Yönetimi</h1>
      <button class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-lg transition-colors" @click="openCreate">
        + Yeni Modül
      </button>
    </div>

    <!-- Filter -->
    <div class="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="admin-label">Sınav</label>
          <select v-model="filterExamTypeId" class="admin-select" @change="loadModules">
            <option value="">Tümü</option>
            <option v-for="e in examTypes" :key="e.id" :value="e.id">{{ e.name }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Modules List -->
    <div class="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <table class="w-full text-sm text-left">
        <thead class="bg-gray-750 border-b border-gray-700">
          <tr>
            <th class="px-4 py-3 text-gray-400 font-medium">Sıra</th>
            <th class="px-4 py-3 text-gray-400 font-medium">Modül Adı</th>
            <th class="px-4 py-3 text-gray-400 font-medium">Sınav</th>
            <th class="px-4 py-3 text-gray-400 font-medium">Durum</th>
            <th class="px-4 py-3 text-gray-400 font-medium">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading" class="border-b border-gray-700">
            <td colspan="5" class="px-4 py-8 text-center text-gray-500">Yükleniyor...</td>
          </tr>
          <tr v-else-if="!modules.length" class="border-b border-gray-700">
            <td colspan="5" class="px-4 py-8 text-center text-gray-500">Modül bulunamadı</td>
          </tr>
          <tr v-for="mod in modules" :key="mod.id" class="border-b border-gray-700 hover:bg-gray-750">
            <td class="px-4 py-3 text-gray-300">{{ mod.sort_order }}</td>
            <td class="px-4 py-3 text-gray-200 font-medium">{{ mod.name }}</td>
            <td class="px-4 py-3 text-gray-400">{{ mod.exam_type_name || '-' }}</td>
            <td class="px-4 py-3">
              <span :class="mod.is_active ? 'text-green-400' : 'text-gray-500'">{{ mod.is_active ? 'Aktif' : 'Pasif' }}</span>
            </td>
            <td class="px-4 py-3">
              <div class="flex gap-2">
                <button class="text-blue-400 hover:text-blue-300 text-xs font-medium" @click="editModule(mod)">Düzenle</button>
                <button class="text-red-400 hover:text-red-300 text-xs font-medium" @click="confirmDelete(mod)">Sil</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" @click.self="closeModal">
      <div class="bg-gray-800 rounded-xl p-6 w-full max-w-lg border border-gray-700 space-y-4">
        <h2 class="text-lg font-bold text-white">{{ editing ? 'Modülü Düzenle' : 'Yeni Modül Ekle' }}</h2>

        <div>
          <label class="admin-label">Sınav Tipi *</label>
          <select v-model="form.exam_type_id" :disabled="!!editing" required class="admin-select">
            <option value="">Seçin</option>
            <option v-for="e in examTypes" :key="e.id" :value="e.id">{{ e.name }}</option>
          </select>
        </div>

        <div>
          <label class="admin-label">Modül Adı *</label>
          <input v-model="form.name" required class="admin-input" placeholder="Ör: Genel Kültür" >
        </div>

        <div>
          <label class="admin-label">Açıklama</label>
          <textarea v-model="form.description" rows="2" class="admin-input" placeholder="İsteğe bağlı" />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="admin-label">Sıra</label>
            <input v-model.number="form.sort_order" type="number" min="0" class="admin-input" >
          </div>
          <div>
            <label class="admin-label">İkon URL</label>
            <input v-model="form.icon_url" class="admin-input" placeholder="https://..." >
          </div>
        </div>

        <div v-if="editing" class="flex items-center gap-2">
          <input id="is_active" v-model="form.is_active" type="checkbox" class="w-4 h-4 rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500" >
          <label for="is_active" class="text-sm text-gray-300">Aktif</label>
        </div>

        <div class="flex gap-3 pt-2">
          <button :disabled="submitting" class="px-5 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm" @click="submitForm">
            {{ submitting ? 'Kaydediliyor...' : (editing ? 'Güncelle' : 'Oluştur') }}
          </button>
          <button class="px-5 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-lg transition-colors text-sm" @click="closeModal">İptal</button>
        </div>

        <p v-if="error" class="text-red-400 text-sm">{{ error }}</p>
        <p v-if="success" class="text-green-400 text-sm">{{ success }}</p>
      </div>
    </div>

    <!-- Delete Confirmation -->
    <div v-if="deleting" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" @click.self="deleting = null">
      <div class="bg-gray-800 rounded-xl p-6 w-full max-w-sm border border-gray-700 space-y-4">
        <h2 class="text-lg font-bold text-white">Modülü Sil</h2>
        <p class="text-gray-300 text-sm">"{{ deleting.name }}" modülünü silmek istediğinize emin misiniz?</p>
        <div class="flex gap-3">
          <button :disabled="submitting" class="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold rounded-lg text-sm" @click="doDelete">Sil</button>
          <button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-lg text-sm" @click="deleting = null">İptal</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['admin'] })

const { api, extractError } = useApi()

const examTypes = ref<any[]>([])
const modules = ref<any[]>([])
const loading = ref(false)
const filterExamTypeId = ref('')

const showModal = ref(false)
const editing = ref<any>(null)
const deleting = ref<any>(null)
const submitting = ref(false)
const error = ref('')
const success = ref('')

const form = reactive({
  exam_type_id: '',
  name: '',
  description: '',
  sort_order: 0,
  icon_url: '',
  is_active: true,
})

function openCreate() {
  editing.value = null
  form.exam_type_id = filterExamTypeId.value
  form.name = ''
  form.description = ''
  form.sort_order = modules.value.length + 1
  form.icon_url = ''
  form.is_active = true
  error.value = ''
  success.value = ''
  showModal.value = true
}

function editModule(mod: any) {
  editing.value = mod
  form.exam_type_id = mod.exam_type_id
  form.name = mod.name
  form.description = mod.description ?? ''
  form.sort_order = mod.sort_order
  form.icon_url = mod.icon_url ?? ''
  form.is_active = mod.is_active
  error.value = ''
  success.value = ''
  showModal.value = true
}

function confirmDelete(mod: any) {
  deleting.value = mod
}

function closeModal() {
  showModal.value = false
  editing.value = null
}

async function loadModules() {
  loading.value = true
  try {
    let url = '/api/admin/modules'
    if (filterExamTypeId.value) url += `?exam_type_id=${filterExamTypeId.value}`
    modules.value = await api<any[]>(url)
  } catch {
    modules.value = []
  } finally {
    loading.value = false
  }
}

async function submitForm() {
  error.value = ''
  success.value = ''
  submitting.value = true

  try {
    if (editing.value) {
      const body: Record<string, unknown> = {
        name: form.name,
        sort_order: form.sort_order,
        is_active: form.is_active,
      }
      if (form.description) body.description = form.description
      if (form.icon_url) body.icon_url = form.icon_url

      await api(`/api/admin/modules/${editing.value.id}`, { method: 'PATCH', body })
      success.value = 'Modül güncellendi!'
    } else {
      const body: Record<string, unknown> = {
        exam_type_id: form.exam_type_id,
        name: form.name,
        sort_order: form.sort_order,
      }
      if (form.description) body.description = form.description
      if (form.icon_url) body.icon_url = form.icon_url

      await api('/api/admin/modules', { method: 'POST', body })
      success.value = 'Modül oluşturuldu!'
    }
    await loadModules()
    setTimeout(closeModal, 800)
  } catch (e) {
    error.value = extractError(e)
  } finally {
    submitting.value = false
  }
}

async function doDelete() {
  if (!deleting.value) return
  submitting.value = true
  try {
    await api(`/api/admin/modules/${deleting.value.id}`, { method: 'DELETE' })
    deleting.value = null
    await loadModules()
  } catch (e) {
    error.value = extractError(e)
  } finally {
    submitting.value = false
  }
}

onMounted(async () => {
  examTypes.value = await api<any[]>('/api/admin/exam-types').catch(() => [])
  await loadModules()
})
</script>

<style scoped>
.admin-label {
  @apply block text-sm font-medium text-gray-300 mb-1;
}
.admin-select {
  @apply w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500;
}
.admin-input {
  @apply w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500;
}
.bg-gray-750 {
  background-color: rgb(42, 48, 60);
}
</style>
