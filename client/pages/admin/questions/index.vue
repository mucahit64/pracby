<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-white">Sorular</h1>
      <NuxtLink to="/admin/questions/create" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
        + Yeni Soru
      </NuxtLink>
    </div>

    <!-- Filters -->
    <div class="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-4 space-y-3">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <!-- Sınav -->
        <select v-model="filters.exam_type_id" class="admin-select" @change="onFilterExamChange">
          <option value="">Tüm Sınavlar</option>
          <option v-for="e in examTypes" :key="e.id" :value="e.id">{{ e.name }}</option>
        </select>
        <!-- Ders -->
        <select v-model="filters.course_id" :disabled="!filterCourses.length" class="admin-select" @change="onFilterCourseChange">
          <option value="">Tüm Dersler</option>
          <option v-for="c in filterCourses" :key="c.id" :value="c.id">{{ c.name }}</option>
        </select>
        <!-- Konu -->
        <select v-model="filters.topic_id" :disabled="!filterTopics.length" class="admin-select" @change="onFilterTopicChange">
          <option value="">Tüm Konular</option>
          <option v-for="t in filterTopics" :key="t.id" :value="t.id">{{ t.name }}</option>
        </select>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <!-- Adım -->
        <select v-model="filters.step_id" :disabled="!filterSteps.length" class="admin-select" @change="loadQuestions(1)">
          <option value="">Tüm Adımlar</option>
          <option v-for="s in filterSteps" :key="s.id" :value="s.id">{{ s.name || `Adım ${s.sort_order}` }}</option>
        </select>
        <select v-model="filters.status" class="admin-select" @change="loadQuestions(1)">
          <option value="">Tüm Durumlar</option>
          <option value="approved">Onaylı</option>
          <option value="pending">Beklemede</option>
          <option value="draft">Taslak</option>
        </select>
        <select v-model="filters.question_type" class="admin-select" @change="loadQuestions(1)">
          <option value="">Tüm Tipler</option>
          <option value="multiple_choice">Çoktan Seçmeli</option>
          <option value="true_false">Doğru/Yanlış</option>
          <option value="fill_blank">Boşluk Doldurma</option>
          <option value="matching">Eşleştirme</option>
          <option value="ordering">Sıralama</option>
        </select>
        <div class="text-sm text-gray-400 flex items-center">
          Toplam: {{ total }} soru
        </div>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-gray-800 rounded-xl border border-gray-700 overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-gray-700 text-gray-400 text-left">
            <th class="px-4 py-3 font-medium">Soru</th>
            <th class="px-4 py-3 font-medium w-28">Tip</th>
            <th class="px-4 py-3 font-medium w-20 text-center">Zorluk</th>
            <th class="px-4 py-3 font-medium w-24">Durum</th>
            <th class="px-4 py-3 font-medium w-20 text-center">İşlem</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="5" class="px-4 py-8 text-center text-gray-500">Yükleniyor...</td>
          </tr>
          <tr v-else-if="questions.length === 0">
            <td colspan="5" class="px-4 py-8 text-center text-gray-500">Soru bulunamadı</td>
          </tr>
          <tr
            v-for="q in questions"
            :key="q.id"
            class="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors"
          >
            <td class="px-4 py-3">
              <div class="text-gray-200 line-clamp-2 max-w-md" v-html="stripHtml(q.question_text)" />
            </td>
            <td class="px-4 py-3">
              <span class="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300">{{ typeLabel(q.question_type) }}</span>
            </td>
            <td class="px-4 py-3 text-center">
              <span :class="difficultyColor(q.difficulty)">{{ '★'.repeat(q.difficulty) }}</span>
            </td>
            <td class="px-4 py-3">
              <span :class="statusClass(q.status)" class="text-xs px-2 py-1 rounded font-medium">{{ statusLabel(q.status) }}</span>
            </td>
            <td class="px-4 py-3 text-center">
              <NuxtLink :to="`/admin/questions/${q.id}`" class="text-purple-400 hover:text-purple-300 text-sm">
                Düzenle
              </NuxtLink>
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
        :class="[
          'px-3 py-1.5 rounded text-sm font-medium transition-colors',
          p === page ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        ]"
        @click="loadQuestions(p)"
      >
        {{ p }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['admin'] })

const { api } = useApi()

const loading = ref(true)
const questions = ref<any[]>([])
const total = ref(0)
const page = ref(1)
const limit = 20

const examTypes = ref<{ id: string; name: string; slug: string }[]>([])
const filterCourses = ref<{ id: string; name: string }[]>([])
const filterTopics = ref<{ id: string; name: string }[]>([])
const filterSteps = ref<{ id: string; name: string; sort_order: number }[]>([])

const filters = reactive({
  exam_type_id: '',
  course_id: '',
  status: '',
  question_type: '',
  topic_id: '',
  step_id: '',
})

async function onFilterExamChange() {
  filters.course_id = ''
  filters.topic_id = ''
  filters.step_id = ''
  filterCourses.value = []
  filterTopics.value = []
  filterSteps.value = []
  if (filters.exam_type_id) {
    filterCourses.value = await api<any[]>(`/api/admin/courses?exam_type_id=${filters.exam_type_id}`).catch(() => [])
  }
  loadQuestions(1)
}

async function onFilterCourseChange() {
  filters.topic_id = ''
  filters.step_id = ''
  filterTopics.value = []
  filterSteps.value = []
  if (filters.course_id) {
    filterTopics.value = await api<any[]>(`/api/admin/topics?course_id=${filters.course_id}`).catch(() => [])
  }
  loadQuestions(1)
}

async function onFilterTopicChange() {
  filters.step_id = ''
  filterSteps.value = []
  if (filters.topic_id) {
    filterSteps.value = await api<any[]>(`/api/admin/steps?topic_id=${filters.topic_id}`).catch(() => [])
  }
  loadQuestions(1)
}

const totalPages = computed(() => Math.ceil(total.value / limit))
const paginationRange = computed(() => {
  const pages: number[] = []
  const start = Math.max(1, page.value - 2)
  const end = Math.min(totalPages.value, page.value + 2)
  for (let i = start; i <= end; i++) pages.push(i)
  return pages
})

function stripHtml(html: string) {
  return html?.replace(/<[^>]*>/g, '').slice(0, 120) ?? ''
}

function typeLabel(type: string) {
  const map: Record<string, string> = {
    multiple_choice: 'Çoktan Seçmeli',
    true_false: 'D/Y',
    fill_blank: 'Boşluk',
    matching: 'Eşleştirme',
    ordering: 'Sıralama',
    flashcard: 'Flashcard',
    swipe: 'Swipe',
  }
  return map[type] ?? type
}

function difficultyColor(d: number) {
  return d === 1 ? 'text-green-400' : d === 2 ? 'text-yellow-400' : 'text-red-400'
}

function statusLabel(s: string) {
  const map: Record<string, string> = { approved: 'Onaylı', pending: 'Beklemede', draft: 'Taslak' }
  return map[s] ?? s
}

function statusClass(s: string) {
  const map: Record<string, string> = {
    approved: 'bg-green-600/20 text-green-400',
    pending: 'bg-yellow-600/20 text-yellow-400',
    draft: 'bg-gray-600/20 text-gray-400',
  }
  return map[s] ?? 'bg-gray-600/20 text-gray-400'
}

async function loadQuestions(p: number = 1) {
  page.value = p
  loading.value = true
  try {
    const params = new URLSearchParams({ page: String(p), limit: String(limit) })
    if (filters.status) params.set('status', filters.status)
    if (filters.question_type) params.set('question_type', filters.question_type)
    if (filters.exam_type_id) params.set('exam_type_id', filters.exam_type_id)
    if (filters.course_id) params.set('course_id', filters.course_id)
    if (filters.topic_id) params.set('topic_id', filters.topic_id)
    if (filters.step_id) params.set('step_id', filters.step_id)

    const res = await api<{ questions: any[]; total: number }>(`/api/admin/questions?${params}`)
    questions.value = res.questions
    total.value = res.total
  } catch {
    // ignore
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  const [, examTypesRes] = await Promise.all([
    loadQuestions(),
    api<{ id: string; name: string; slug: string }[]>('/api/admin/exam-types').catch(() => []),
  ])
  examTypes.value = examTypesRes as any
})
</script>

<style scoped>
.admin-select {
  @apply w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500;
}
</style>
