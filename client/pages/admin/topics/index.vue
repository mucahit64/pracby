<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-white">Konu Yönetimi</h1>
      <button @click="showCreateModal = true" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-lg transition-colors">
        + Yeni Konu
      </button>
    </div>

    <!-- Filters -->
    <div class="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="admin-label">Sınav</label>
          <select v-model="filterExamTypeId" @change="onFilterExamChange" class="admin-select">
            <option value="">Tümü</option>
            <option v-for="e in examTypes" :key="e.id" :value="e.id">{{ e.name }}</option>
          </select>
        </div>
        <div>
          <label class="admin-label">Ders</label>
          <select v-model="filterCourseId" @change="loadTopics" :disabled="!filterCourses.length" class="admin-select">
            <option value="">Tümü</option>
            <option v-for="c in filterCourses" :key="c.id" :value="c.id">{{ c.name }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Topics List -->
    <div class="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <table class="w-full text-sm text-left">
        <thead class="bg-gray-750 border-b border-gray-700">
          <tr>
            <th class="px-4 py-3 text-gray-400 font-medium">Sıra</th>
            <th class="px-4 py-3 text-gray-400 font-medium">Konu Adı</th>
            <th class="px-4 py-3 text-gray-400 font-medium">Ders</th>
            <th class="px-4 py-3 text-gray-400 font-medium">Ders Sayısı</th>
            <th class="px-4 py-3 text-gray-400 font-medium">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading" class="border-b border-gray-700">
            <td colspan="5" class="px-4 py-8 text-center text-gray-500">Yükleniyor...</td>
          </tr>
          <tr v-else-if="!topics.length" class="border-b border-gray-700">
            <td colspan="5" class="px-4 py-8 text-center text-gray-500">Konu bulunamadı</td>
          </tr>
          <tr v-for="topic in topics" :key="topic.id" class="border-b border-gray-700 hover:bg-gray-750">
            <td class="px-4 py-3 text-gray-300">{{ topic.sort_order }}</td>
            <td class="px-4 py-3 text-gray-200 font-medium">{{ topic.name }}</td>
            <td class="px-4 py-3 text-gray-400">{{ topic.course_name }}</td>
            <td class="px-4 py-3 text-gray-400">{{ topic.total_lessons }}</td>
            <td class="px-4 py-3">
              <div class="flex gap-2">
                <button @click="editTopic(topic)" class="text-blue-400 hover:text-blue-300 text-xs font-medium">Düzenle</button>
                <button v-if="isAdmin" @click="confirmDelete(topic)" class="text-red-400 hover:text-red-300 text-xs font-medium">Sil</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showCreateModal || editingTopic" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" @click.self="closeModal">
      <div class="bg-gray-800 rounded-xl p-6 w-full max-w-lg border border-gray-700 space-y-4">
        <h2 class="text-lg font-bold text-white">{{ editingTopic ? 'Konuyu Düzenle' : 'Yeni Konu Ekle' }}</h2>

        <div>
          <label class="admin-label">Ders *</label>
          <select v-model="modalForm.course_id" :disabled="!!editingTopic" required class="admin-select">
            <option value="">Seçin</option>
            <option v-for="c in allCourses" :key="c.id" :value="c.id">{{ c.name }}</option>
          </select>
        </div>

        <div>
          <label class="admin-label">Konu Adı *</label>
          <input v-model="modalForm.name" required class="admin-input" placeholder="Ör: Osmanlı Tarihi" />
        </div>

        <div>
          <label class="admin-label">Açıklama</label>
          <textarea v-model="modalForm.description" rows="2" class="admin-input" placeholder="İsteğe bağlı açıklama" />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="admin-label">Sıra (sort_order)</label>
            <input v-model.number="modalForm.sort_order" type="number" min="0" class="admin-input" />
            <p class="text-xs text-gray-500 mt-1">Mevcut konu sayısı: {{ courseTopicCount }}</p>
          </div>
          <div>
            <label class="admin-label">Toplam Ders</label>
            <input v-model.number="modalForm.total_lessons" type="number" min="1" class="admin-input" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="admin-label">Max Taç Seviyesi</label>
            <input v-model.number="modalForm.max_crown_level" type="number" min="1" max="10" class="admin-input" />
          </div>
          <div>
            <label class="admin-label">Kilit Açma (unlock_after)</label>
            <select v-model="modalForm.unlock_after" class="admin-select">
              <option value="">Yok (İlk konu)</option>
              <option v-for="t in unlockOptions" :key="t.id" :value="t.id">{{ t.name }}</option>
            </select>
          </div>
        </div>

        <div class="flex gap-3 pt-2">
          <button @click="submitModal" :disabled="modalSubmitting" class="px-5 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm">
            {{ modalSubmitting ? 'Kaydediliyor...' : (editingTopic ? 'Güncelle' : 'Oluştur') }}
          </button>
          <button @click="closeModal" class="px-5 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-lg transition-colors text-sm">İptal</button>
        </div>

        <p v-if="modalError" class="text-red-400 text-sm">{{ modalError }}</p>
        <p v-if="modalSuccess" class="text-green-400 text-sm">{{ modalSuccess }}</p>
      </div>
    </div>

    <!-- Delete Confirmation -->
    <div v-if="deletingTopic" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" @click.self="deletingTopic = null">
      <div class="bg-gray-800 rounded-xl p-6 w-full max-w-sm border border-gray-700 space-y-4">
        <h2 class="text-lg font-bold text-white">Konuyu Sil</h2>
        <p class="text-gray-300 text-sm">"{{ deletingTopic.name }}" konusunu silmek istediğinize emin misiniz? Bu işlem geri alınamaz.</p>
        <div class="flex gap-3">
          <button @click="doDelete" :disabled="modalSubmitting" class="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold rounded-lg text-sm">Sil</button>
          <button @click="deletingTopic = null" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-lg text-sm">İptal</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['admin'] })

const { api, extractError } = useApi()
const { hasRole } = useRBAC()

const isAdmin = computed(() => hasRole('admin'))

const examTypes = ref<any[]>([])
const filterExamTypeId = ref('')
const filterCourseId = ref('')
const filterCourses = ref<any[]>([])
const allCourses = ref<any[]>([])
const topics = ref<any[]>([])
const loading = ref(false)

const showCreateModal = ref(false)
const editingTopic = ref<any>(null)
const deletingTopic = ref<any>(null)
const modalSubmitting = ref(false)
const modalError = ref('')
const modalSuccess = ref('')

const modalForm = reactive({
  course_id: '',
  name: '',
  description: '',
  sort_order: 0,
  total_lessons: 5,
  max_crown_level: 5,
  unlock_after: '',
})

const courseTopicCount = ref(0)

const unlockOptions = computed(() => {
  if (!modalForm.course_id) return []
  return topics.value.filter(t => t.course_id === modalForm.course_id && t.id !== editingTopic.value?.id)
})

watch(() => modalForm.course_id, async (courseId) => {
  if (!courseId) { courseTopicCount.value = 0; return }
  try {
    const list = await api<any[]>(`/api/admin/topics?course_id=${courseId}`)
    courseTopicCount.value = list.length
    if (!editingTopic.value) {
      modalForm.sort_order = list.length + 1
    }
  } catch {
    courseTopicCount.value = 0
  }
})

async function onFilterExamChange() {
  filterCourseId.value = ''
  filterCourses.value = []
  if (filterExamTypeId.value) {
    filterCourses.value = await api<any[]>(`/api/admin/courses?exam_type_id=${filterExamTypeId.value}`).catch(() => [])
  }
  await loadTopics()
}

async function loadTopics() {
  loading.value = true
  try {
    let url = '/api/admin/topics'
    if (filterCourseId.value) url += `?course_id=${filterCourseId.value}`
    topics.value = await api<any[]>(url)
  } catch {
    topics.value = []
  } finally {
    loading.value = false
  }
}

function editTopic(topic: any) {
  editingTopic.value = topic
  modalForm.course_id = topic.course_id
  modalForm.name = topic.name
  modalForm.description = topic.description ?? ''
  modalForm.sort_order = topic.sort_order
  modalForm.total_lessons = topic.total_lessons
  modalForm.max_crown_level = topic.max_crown_level
  modalForm.unlock_after = topic.unlock_after ?? ''
}

function confirmDelete(topic: any) {
  deletingTopic.value = topic
}

function closeModal() {
  showCreateModal.value = false
  editingTopic.value = null
  modalError.value = ''
  modalSuccess.value = ''
  modalForm.course_id = ''
  modalForm.name = ''
  modalForm.description = ''
  modalForm.sort_order = 0
  modalForm.total_lessons = 5
  modalForm.max_crown_level = 5
  modalForm.unlock_after = ''
}

async function submitModal() {
  modalError.value = ''
  modalSuccess.value = ''
  modalSubmitting.value = true

  try {
    const body: Record<string, unknown> = {
      name: modalForm.name,
      sort_order: modalForm.sort_order,
      total_lessons: modalForm.total_lessons,
      max_crown_level: modalForm.max_crown_level,
    }
    if (modalForm.description) body.description = modalForm.description
    if (modalForm.unlock_after) body.unlock_after = modalForm.unlock_after
    else body.unlock_after = null

    if (editingTopic.value) {
      await api(`/api/admin/topics/${editingTopic.value.id}`, { method: 'PATCH', body })
      modalSuccess.value = 'Konu güncellendi!'
    } else {
      body.course_id = modalForm.course_id
      await api('/api/admin/topics', { method: 'POST', body })
      modalSuccess.value = 'Konu oluşturuldu!'
    }
    await loadTopics()
    setTimeout(closeModal, 800)
  } catch (e) {
    modalError.value = extractError(e)
  } finally {
    modalSubmitting.value = false
  }
}

async function doDelete() {
  if (!deletingTopic.value) return
  modalSubmitting.value = true
  try {
    await api(`/api/admin/topics/${deletingTopic.value.id}`, { method: 'DELETE' })
    deletingTopic.value = null
    await loadTopics()
  } catch (e) {
    modalError.value = extractError(e)
  } finally {
    modalSubmitting.value = false
  }
}

onMounted(async () => {
  examTypes.value = await api<any[]>('/api/admin/exam-types').catch(() => [])
  allCourses.value = await api<any[]>('/api/admin/courses').catch(() => [])
  await loadTopics()
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
