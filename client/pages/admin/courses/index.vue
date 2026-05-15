<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-white">Ders Yönetimi</h1>
      <button @click="openCreate" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-lg transition-colors">
        + Yeni Ders
      </button>
    </div>

    <!-- Filters -->
    <div class="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="admin-label">Sınav</label>
          <select v-model="filterExamTypeId" @change="loadCourses" class="admin-select">
            <option value="">Tümü</option>
            <option v-for="e in examTypes" :key="e.id" :value="e.id">{{ e.name }}</option>
          </select>
        </div>
        <div>
          <label class="admin-label">Modül</label>
          <select v-model="filterModuleId" @change="loadCourses" class="admin-select">
            <option value="">Tümü</option>
            <option v-for="m in modules" :key="m.id" :value="m.id">{{ m.name }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Courses List -->
    <div class="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <table class="w-full text-sm text-left">
        <thead class="bg-gray-750 border-b border-gray-700">
          <tr>
            <th class="px-4 py-3 text-gray-400 font-medium">Sıra</th>
            <th class="px-4 py-3 text-gray-400 font-medium">Ders Adı</th>
            <th class="px-4 py-3 text-gray-400 font-medium">Sınav</th>
            <th class="px-4 py-3 text-gray-400 font-medium">Modül</th>
            <th class="px-4 py-3 text-gray-400 font-medium">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading" class="border-b border-gray-700">
            <td colspan="5" class="px-4 py-8 text-center text-gray-500">Yükleniyor...</td>
          </tr>
          <tr v-else-if="!courses.length" class="border-b border-gray-700">
            <td colspan="5" class="px-4 py-8 text-center text-gray-500">Ders bulunamadı</td>
          </tr>
          <tr v-for="course in courses" :key="course.id" class="border-b border-gray-700 hover:bg-gray-750">
            <td class="px-4 py-3 text-gray-300">{{ course.sort_order }}</td>
            <td class="px-4 py-3 text-gray-200 font-medium">
              <span v-if="course.color" class="inline-block w-3 h-3 rounded-full mr-2" :style="{ backgroundColor: course.color }" />
              {{ course.name }}
            </td>
            <td class="px-4 py-3 text-gray-400">{{ course.exam_type_name || '-' }}</td>
            <td class="px-4 py-3 text-gray-400">{{ course.module_name || '-' }}</td>
            <td class="px-4 py-3">
              <div class="flex gap-2">
                <button @click="editCourse(course)" class="text-blue-400 hover:text-blue-300 text-xs font-medium">Düzenle</button>
                <button @click="confirmDelete(course)" class="text-red-400 hover:text-red-300 text-xs font-medium">Sil</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" @click.self="closeModal">
      <div class="bg-gray-800 rounded-xl p-6 w-full max-w-lg border border-gray-700 space-y-4">
        <h2 class="text-lg font-bold text-white">{{ editing ? 'Dersi Düzenle' : 'Yeni Ders Ekle' }}</h2>

        <div>
          <label class="admin-label">Ders Adı *</label>
          <input v-model="form.name" required class="admin-input" placeholder="Ör: Türkçe" />
        </div>

        <div>
          <label class="admin-label">Açıklama</label>
          <textarea v-model="form.description" rows="2" class="admin-input" placeholder="İsteğe bağlı" />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="admin-label">Sınav Tipi *</label>
            <select v-model="form.exam_type_id" :disabled="!!editing" required class="admin-select">
              <option value="">Seçin</option>
              <option v-for="e in examTypes" :key="e.id" :value="e.id">{{ e.name }}</option>
            </select>
          </div>
          <div>
            <label class="admin-label">Modül</label>
            <select v-model="form.module_id" class="admin-select">
              <option value="">Yok</option>
              <option v-for="m in modules" :key="m.id" :value="m.id">{{ m.name }}</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div>
            <label class="admin-label">Sıra</label>
            <input v-model.number="form.sort_order" type="number" min="0" class="admin-input" />
          </div>
          <div>
            <label class="admin-label">Renk</label>
            <input v-model="form.color" type="color" class="admin-input h-10" />
          </div>
          <div>
            <label class="admin-label">İkon URL</label>
            <input v-model="form.icon_url" class="admin-input" placeholder="https://..." />
          </div>
        </div>

        <div class="flex gap-3 pt-2">
          <button @click="submitForm" :disabled="submitting" class="px-5 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm">
            {{ submitting ? 'Kaydediliyor...' : (editing ? 'Güncelle' : 'Oluştur') }}
          </button>
          <button @click="closeModal" class="px-5 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-lg transition-colors text-sm">İptal</button>
        </div>

        <p v-if="error" class="text-red-400 text-sm">{{ error }}</p>
        <p v-if="success" class="text-green-400 text-sm">{{ success }}</p>
      </div>
    </div>

    <!-- Delete Confirmation -->
    <div v-if="deleting" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" @click.self="deleting = null">
      <div class="bg-gray-800 rounded-xl p-6 w-full max-w-sm border border-gray-700 space-y-4">
        <h2 class="text-lg font-bold text-white">Dersi Sil</h2>
        <p class="text-gray-300 text-sm">"{{ deleting.name }}" dersini silmek istediğinize emin misiniz? İlişkili tüm konular da silinecektir.</p>
        <div class="flex gap-3">
          <button @click="doDelete" :disabled="submitting" class="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold rounded-lg text-sm">Sil</button>
          <button @click="deleting = null" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-lg text-sm">İptal</button>
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
const courses = ref<any[]>([])
const loading = ref(false)
const filterExamTypeId = ref('')
const filterModuleId = ref('')

const showModal = ref(false)
const editing = ref<any>(null)
const deleting = ref<any>(null)
const submitting = ref(false)
const error = ref('')
const success = ref('')

const form = reactive({
  name: '',
  description: '',
  exam_type_id: '',
  module_id: '',
  sort_order: 0,
  color: '#6366f1',
  icon_url: '',
})

function openCreate() {
  editing.value = null
  form.name = ''
  form.description = ''
  form.exam_type_id = filterExamTypeId.value
  form.module_id = filterModuleId.value
  form.sort_order = courses.value.length + 1
  form.color = '#6366f1'
  form.icon_url = ''
  error.value = ''
  success.value = ''
  showModal.value = true
}

function editCourse(course: any) {
  editing.value = course
  form.name = course.name
  form.description = course.description ?? ''
  form.exam_type_id = course.exam_type_id ?? ''
  form.module_id = course.module_id ?? ''
  form.sort_order = course.sort_order
  form.color = course.color ?? '#6366f1'
  form.icon_url = course.icon_url ?? ''
  error.value = ''
  success.value = ''
  showModal.value = true
}

function confirmDelete(course: any) {
  deleting.value = course
}

function closeModal() {
  showModal.value = false
  editing.value = null
}

async function loadCourses() {
  loading.value = true
  try {
    let url = '/api/admin/courses'
    const params: string[] = []
    if (filterExamTypeId.value) params.push(`exam_type_id=${filterExamTypeId.value}`)
    if (params.length) url += `?${params.join('&')}`

    const data = await api<any[]>(url)
    courses.value = filterModuleId.value
      ? data.filter((c: any) => c.module_id === filterModuleId.value)
      : data
  } catch {
    courses.value = []
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
        color: form.color,
      }
      if (form.description) body.description = form.description
      if (form.icon_url) body.icon_url = form.icon_url
      body.module_id = form.module_id || null

      await api(`/api/admin/courses/${editing.value.id}`, { method: 'PATCH', body })
      success.value = 'Ders güncellendi!'
    } else {
      const body: Record<string, unknown> = {
        name: form.name,
        exam_type_id: form.exam_type_id,
        sort_order: form.sort_order,
        color: form.color,
      }
      if (form.description) body.description = form.description
      if (form.icon_url) body.icon_url = form.icon_url
      if (form.module_id) body.module_id = form.module_id

      await api('/api/admin/courses', { method: 'POST', body })
      success.value = 'Ders oluşturuldu!'
    }
    await loadCourses()
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
    await api(`/api/admin/courses/${deleting.value.id}`, { method: 'DELETE' })
    deleting.value = null
    await loadCourses()
  } catch (e) {
    error.value = extractError(e)
  } finally {
    submitting.value = false
  }
}

onMounted(async () => {
  examTypes.value = await api<any[]>('/api/admin/exam-types').catch(() => [])
  modules.value = await api<any[]>('/api/admin/modules').catch(() => [])
  await loadCourses()
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
