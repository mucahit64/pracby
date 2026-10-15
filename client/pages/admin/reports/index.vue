<template>
  <div>
    <h1 class="text-2xl font-bold text-white mb-6">Soru Raporları</h1>

    <!-- Filters: status tabs with per-status question counts, plus reason -->
    <div class="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div class="inline-flex flex-wrap gap-1 p-1 bg-gray-800 border border-gray-700 rounded-xl self-start">
        <button
          v-for="tab in statusTabs"
          :key="tab.value"
          :class="['inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors', filters.status === tab.value ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700']"
          @click="setStatusFilter(tab.value)"
        >
          {{ tab.label }}
          <span
            v-if="reportStats"
            :class="['min-w-[1.25rem] px-1.5 rounded-full text-xs leading-5 text-center', filters.status === tab.value ? 'bg-white/20 text-white' : 'bg-gray-700 text-gray-400']"
          >{{ reportStats[tab.value || 'total'] ?? 0 }}</span>
        </button>
      </div>
      <div class="md:w-56 shrink-0">
        <select v-model="filters.reason" class="admin-select" @change="loadGroups(1)">
          <option value="">Tüm Sebepler</option>
          <option v-for="(label, value) in REASON_LABELS" :key="value" :value="value">{{ label }}</option>
        </select>
      </div>
    </div>

    <!-- Table: one row per reported question -->
    <div class="bg-gray-800 rounded-xl border border-gray-700 overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-gray-700 text-gray-400 text-left">
            <th class="px-4 py-3 font-medium">Soru</th>
            <th class="px-4 py-3 font-medium w-24 text-center">Bildirim</th>
            <th class="px-4 py-3 font-medium w-28">Durum</th>
            <th class="px-4 py-3 font-medium w-28">Son Bildirim</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="4" class="px-4 py-8 text-center text-gray-500">Yükleniyor...</td>
          </tr>
          <tr v-else-if="loadError">
            <td colspan="4" class="px-4 py-8 text-center text-red-400">{{ loadError }}</td>
          </tr>
          <tr v-else-if="groups.length === 0">
            <td colspan="4" class="px-4 py-8 text-center text-gray-500">Rapor bulunamadı</td>
          </tr>
          <tr
            v-for="g in groups"
            v-else
            :key="g.question_id"
            class="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors cursor-pointer"
            @click="openDetail(g)"
          >
            <td class="px-4 py-3">
              <div class="text-gray-200 line-clamp-2">{{ stripHtml(g.question_text, 160) }}</div>
              <div class="flex flex-wrap gap-1 mt-1.5">
                <span v-for="reason in g.reasons" :key="reason" class="text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-400">{{ reasonLabel(reason) }}</span>
              </div>
            </td>
            <td class="px-4 py-3 text-center text-gray-100 font-semibold">{{ g.report_count }}</td>
            <td class="px-4 py-3">
              <span :class="statusClass(g.status)" class="text-xs px-2 py-1 rounded font-medium whitespace-nowrap">{{ statusLabel(g.status) }}</span>
            </td>
            <td class="px-4 py-3 text-gray-400 text-xs">{{ formatDate(g.last_reported_at) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-4">
      <button
        v-for="p in paginationRange"
        :key="p"
        :class="['px-3 py-1.5 rounded text-sm font-medium transition-colors', p === page ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600']"
        @click="loadGroups(p)"
      >{{ p }}</button>
    </div>

    <!-- Detail Modal -->
    <div v-if="selected" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" @click.self="selected = null">
      <div class="bg-gray-800 rounded-xl p-6 border border-gray-700 w-full max-w-2xl mx-4 space-y-4 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-white">Soru Raporları</h3>
          <button class="text-gray-400 hover:text-white text-xl leading-none" @click="selected = null">&times;</button>
        </div>

        <div class="bg-gray-900 rounded p-3 text-gray-300 text-sm whitespace-pre-line">{{ stripHtml(selected.question_text) }}</div>

        <div class="text-sm">
          <p class="text-gray-400 mb-2">
            {{ selected.report_count }} bildirim<template v-if="selected.guest_count > 0"> ({{ selected.guest_count }} misafir)</template>
          </p>
          <div v-if="detailLoading" class="text-gray-500">Yükleniyor...</div>
          <ul v-else class="divide-y divide-gray-700 border border-gray-700 rounded-lg">
            <li v-for="r in detailReports" :key="r.id" class="px-3 py-2 space-y-1">
              <div class="flex items-center justify-between gap-2">
                <span class="text-gray-200 truncate">{{ reporterLabel(r) }}</span>
                <div class="flex items-center gap-2 shrink-0">
                  <span class="text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-300">{{ reasonLabel(r.reason) }}</span>
                  <span class="text-xs text-gray-500">{{ formatDate(r.created_at) }}</span>
                </div>
              </div>
              <p v-if="r.description" class="text-xs text-gray-400 italic">{{ r.description }}</p>
            </li>
          </ul>
        </div>

        <div class="space-y-3 border-t border-gray-700 pt-4">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Durum</label>
            <select v-model="modalForm.status" class="admin-select">
              <option v-for="tab in statusTabs.slice(1)" :key="tab.value" :value="tab.value">{{ tab.label }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Admin Notu</label>
            <textarea v-model="modalForm.admin_note" rows="2" maxlength="1000" class="admin-input" placeholder="İsteğe bağlı not" />
          </div>
          <p class="text-xs text-gray-500">Durum ve not bu sorunun tüm bildirimlerine uygulanır.</p>
          <p v-if="updateError" class="text-xs text-red-400">{{ updateError }}</p>
          <div class="flex gap-3">
            <button :disabled="updating || detailLoading" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors" @click="updateReports">
              {{ updating ? 'Kaydediliyor...' : 'Kaydet' }}
            </button>
            <NuxtLink :to="`/admin/questions/${selected.question_id}`" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm font-medium rounded-lg transition-colors">
              Soruyu Düzenle
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['admin'] })

const { api, extractError } = useApi()

type ReportStatus = 'pending' | 'reviewed' | 'fixed' | 'dismissed'

interface ReportGroup {
  question_id: string
  question_text: string
  status: ReportStatus
  report_count: number
  guest_count: number
  reasons: string[]
  last_reported_at: string
}

interface QuestionReport {
  id: string
  guest_id: string | null
  reporter_username: string | null
  reason: string
  description: string | null
  admin_note: string | null
  created_at: string
}

const REASON_LABELS: Record<string, string> = {
  wrong_answer: 'Yanlış Cevap',
  unclear_question: 'Belirsiz Soru',
  wrong_explanation: 'Yanlış Açıklama',
  typo: 'Yazım Hatası',
  missing_image: 'Eksik Görsel',
  other: 'Diğer',
}

const STATUS_LABELS: Record<ReportStatus, string> = {
  pending: 'Beklemede',
  reviewed: 'İncelendi',
  fixed: 'Düzeltildi',
  dismissed: 'Reddedildi',
}

const statusTabs: { value: '' | ReportStatus; label: string }[] = [
  { value: '', label: 'Tümü' },
  ...(Object.entries(STATUS_LABELS) as [ReportStatus, string][]).map(([value, label]) => ({ value, label })),
]

const loading = ref(true)
const loadError = ref('')
const groups = ref<ReportGroup[]>([])
const total = ref(0)
const page = ref(1)
const limit = 20
const reportStats = ref<Record<string, number> | null>(null)
const selected = ref<ReportGroup | null>(null)
const detailReports = ref<QuestionReport[]>([])
const detailLoading = ref(false)
const updating = ref(false)
const updateError = ref('')
const modalForm = reactive<{ status: ReportStatus; admin_note: string }>({ status: 'pending', admin_note: '' })

const filters = reactive<{ status: '' | ReportStatus; reason: string }>({ status: 'pending', reason: '' })

const totalPages = computed(() => Math.ceil(total.value / limit))
const paginationRange = computed(() => {
  const pages: number[] = []
  const start = Math.max(1, page.value - 2)
  const end = Math.min(totalPages.value, page.value + 2)
  for (let i = start; i <= end; i++) pages.push(i)
  return pages
})

function stripHtml(html: string, max = Infinity) {
  const text = html?.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim() ?? ''
  return text.length > max ? `${text.slice(0, max)}…` : text
}

function reasonLabel(r: string) {
  return REASON_LABELS[r] ?? r
}

function reporterLabel(r: QuestionReport) {
  if (r.reporter_username) return r.reporter_username
  if (r.guest_id) return `Misafir #${r.guest_id.slice(0, 4)}`
  return 'Silinmiş kullanıcı'
}

function statusLabel(s: ReportStatus) {
  return STATUS_LABELS[s] ?? s
}

function statusClass(s: ReportStatus) {
  const map: Record<ReportStatus, string> = {
    pending: 'bg-yellow-600/20 text-yellow-400',
    reviewed: 'bg-blue-600/20 text-blue-400',
    fixed: 'bg-green-600/20 text-green-400',
    dismissed: 'bg-gray-600/20 text-gray-400',
  }
  return map[s] ?? 'bg-gray-600/20 text-gray-400'
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function setStatusFilter(status: '' | ReportStatus) {
  filters.status = status
  loadGroups(1)
}

async function openDetail(g: ReportGroup) {
  selected.value = g
  modalForm.status = g.status
  modalForm.admin_note = ''
  updateError.value = ''
  detailReports.value = []
  detailLoading.value = true
  try {
    const res = await api<{ reports: QuestionReport[] }>(`/api/admin/reports?questionId=${g.question_id}&limit=100`)
    detailReports.value = res.reports
    // The note is stored on every report of the question; show the one that is set.
    modalForm.admin_note = res.reports.find((r) => r.admin_note)?.admin_note ?? ''
  } catch (e) {
    updateError.value = extractError(e)
  } finally {
    detailLoading.value = false
  }
}

async function updateReports() {
  if (!selected.value) return
  updating.value = true
  updateError.value = ''
  try {
    await api(`/api/admin/reports/question/${selected.value.question_id}`, {
      method: 'PATCH',
      body: { status: modalForm.status, admin_note: modalForm.admin_note },
    })
    selected.value = null
    await Promise.all([loadGroups(page.value), loadStats()])
  } catch (e) {
    updateError.value = extractError(e)
  } finally {
    updating.value = false
  }
}

async function loadStats() {
  reportStats.value = await api<Record<string, number>>('/api/admin/reports/stats').catch(() => null)
}

async function loadGroups(p: number = 1) {
  page.value = p
  loading.value = true
  loadError.value = ''
  try {
    const params = new URLSearchParams({ page: String(p), limit: String(limit) })
    if (filters.status) params.set('status', filters.status)
    if (filters.reason) params.set('reason', filters.reason)

    const res = await api<{ groups: ReportGroup[]; total: number }>(`/api/admin/reports/groups?${params}`)
    groups.value = res.groups
    total.value = res.total
    // The last row of a page was resolved away under a status filter: step back a page.
    if (res.groups.length === 0 && p > 1) await loadGroups(p - 1)
  } catch (e) {
    loadError.value = extractError(e)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await Promise.all([loadGroups(), loadStats()])
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
