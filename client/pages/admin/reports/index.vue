<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-white">Soru Raporları</h1>
      <div v-if="reportStats" class="flex gap-3 text-sm">
        <span class="text-yellow-400">{{ reportStats.pending }} beklemede</span>
        <span class="text-green-400">{{ reportStats.fixed }} düzeltildi</span>
        <span class="text-gray-400">{{ reportStats.total }} toplam</span>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
      <select v-model="filters.status" class="admin-select" @change="loadReports(1)">
        <option value="">Tüm Durumlar</option>
        <option value="pending">Beklemede</option>
        <option value="reviewed">İncelendi</option>
        <option value="fixed">Düzeltildi</option>
        <option value="dismissed">Reddedildi</option>
      </select>
      <select v-model="filters.reason" class="admin-select" @change="loadReports(1)">
        <option value="">Tüm Sebepler</option>
        <option value="wrong_answer">Yanlış Cevap</option>
        <option value="unclear_question">Belirsiz Soru</option>
        <option value="wrong_explanation">Yanlış Açıklama</option>
        <option value="typo">Yazım Hatası</option>
        <option value="other">Diğer</option>
      </select>
      <div class="text-sm text-gray-400 flex items-center">
        Toplam: {{ total }} rapor
      </div>
    </div>

    <!-- Table -->
    <div class="bg-gray-800 rounded-xl border border-gray-700 overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-gray-700 text-gray-400 text-left">
            <th class="px-4 py-3 font-medium">Soru</th>
            <th class="px-4 py-3 font-medium w-36">Raporlayan</th>
            <th class="px-4 py-3 font-medium w-32">Sebep</th>
            <th class="px-4 py-3 font-medium w-24">Durum</th>
            <th class="px-4 py-3 font-medium w-28">Tarih</th>
            <th class="px-4 py-3 font-medium w-24 text-center">İşlem</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="6" class="px-4 py-8 text-center text-gray-500">Yükleniyor...</td>
          </tr>
          <tr v-else-if="reports.length === 0">
            <td colspan="6" class="px-4 py-8 text-center text-gray-500">Rapor bulunamadı</td>
          </tr>
          <tr
            v-for="r in reports"
            :key="r.id"
            class="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors"
          >
            <td class="px-4 py-3">
              <div class="text-gray-200 line-clamp-2 max-w-xs" v-html="stripHtml(r.question_text)" />
              <div v-if="r.description" class="text-xs text-gray-500 mt-1 italic">{{ r.description }}</div>
            </td>
            <td class="px-4 py-3 text-gray-300">{{ r.reporter_username ?? 'Anonim' }}</td>
            <td class="px-4 py-3">
              <span class="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300">{{ reasonLabel(r.reason) }}</span>
            </td>
            <td class="px-4 py-3">
              <span :class="statusClass(r.status)" class="text-xs px-2 py-1 rounded font-medium">{{ statusLabel(r.status) }}</span>
            </td>
            <td class="px-4 py-3 text-gray-400 text-xs">{{ formatDate(r.created_at) }}</td>
            <td class="px-4 py-3 text-center">
              <button class="text-purple-400 hover:text-purple-300 text-sm" @click="openDetail(r)">Detay</button>
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
        :class="['px-3 py-1.5 rounded text-sm font-medium transition-colors', p === page ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600']"
        @click="loadReports(p)"
      >{{ p }}</button>
    </div>

    <!-- Detail Modal -->
    <div v-if="selected" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" @click.self="selected = null">
      <div class="bg-gray-800 rounded-xl p-6 border border-gray-700 w-full max-w-lg mx-4 space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-white">Rapor Detayı</h3>
          <button class="text-gray-400 hover:text-white" @click="selected = null">&times;</button>
        </div>

        <div class="text-sm space-y-2">
          <p><span class="text-gray-400">Soru:</span></p>
          <div class="bg-gray-900 rounded p-3 text-gray-300 text-sm" v-html="selected.question_text" />

          <p><span class="text-gray-400">Raporlayan:</span> {{ selected.reporter_username ?? 'Anonim' }} ({{ selected.reporter_email ?? '-' }})</p>
          <p><span class="text-gray-400">Sebep:</span> {{ reasonLabel(selected.reason) }}</p>
          <p v-if="selected.description"><span class="text-gray-400">Açıklama:</span> {{ selected.description }}</p>
        </div>

        <div class="space-y-3 border-t border-gray-700 pt-4">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Durum</label>
            <select v-model="modalForm.status" class="admin-select">
              <option value="pending">Beklemede</option>
              <option value="reviewed">İncelendi</option>
              <option value="fixed">Düzeltildi</option>
              <option value="dismissed">Reddedildi</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Admin Notu</label>
            <textarea v-model="modalForm.admin_note" rows="2" class="admin-input" placeholder="İsteğe bağlı not" />
          </div>
          <div class="flex gap-3">
            <button :disabled="updating" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors" @click="updateReport">
              {{ updating ? 'Güncelleniyor...' : 'Güncelle' }}
            </button>
            <NuxtLink v-if="selected.question_id" :to="`/admin/questions/${selected.question_id}`" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm font-medium rounded-lg transition-colors">
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

const loading = ref(true)
const reports = ref<any[]>([])
const total = ref(0)
const page = ref(1)
const limit = 20
const reportStats = ref<Record<string, number> | null>(null)
const selected = ref<any>(null)
const updating = ref(false)
const modalForm = reactive({ status: '', admin_note: '' })

const filters = reactive({ status: '', reason: '' })

const totalPages = computed(() => Math.ceil(total.value / limit))
const paginationRange = computed(() => {
  const pages: number[] = []
  const start = Math.max(1, page.value - 2)
  const end = Math.min(totalPages.value, page.value + 2)
  for (let i = start; i <= end; i++) pages.push(i)
  return pages
})

function stripHtml(html: string) {
  return html?.replace(/<[^>]*>/g, '').slice(0, 100) ?? ''
}

function reasonLabel(r: string) {
  const map: Record<string, string> = {
    wrong_answer: 'Yanlış Cevap',
    unclear_question: 'Belirsiz Soru',
    wrong_explanation: 'Yanlış Açıklama',
    typo: 'Yazım Hatası',
    other: 'Diğer',
  }
  return map[r] ?? r
}

function statusLabel(s: string) {
  const map: Record<string, string> = { pending: 'Beklemede', reviewed: 'İncelendi', fixed: 'Düzeltildi', dismissed: 'Reddedildi' }
  return map[s] ?? s
}

function statusClass(s: string) {
  const map: Record<string, string> = {
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

function openDetail(r: any) {
  selected.value = r
  modalForm.status = r.status
  modalForm.admin_note = r.admin_note ?? ''
}

async function updateReport() {
  if (!selected.value) return
  updating.value = true
  try {
    await api(`/api/admin/reports/${selected.value.id}`, {
      method: 'PATCH',
      body: { status: modalForm.status, admin_note: modalForm.admin_note || undefined },
    })
    // Update in list
    const idx = reports.value.findIndex((r) => r.id === selected.value.id)
    if (idx !== -1) {
      reports.value[idx].status = modalForm.status
      reports.value[idx].admin_note = modalForm.admin_note
    }
    selected.value = null
    // Refresh stats
    reportStats.value = await api<Record<string, number>>('/api/admin/reports/stats').catch(() => null)
  } catch (e) {
    alert(extractError(e))
  } finally {
    updating.value = false
  }
}

async function loadReports(p: number = 1) {
  page.value = p
  loading.value = true
  try {
    const params = new URLSearchParams({ page: String(p), limit: String(limit) })
    if (filters.status) params.set('status', filters.status)
    if (filters.reason) params.set('reason', filters.reason)

    const res = await api<{ reports: any[]; total: number }>(`/api/admin/reports?${params}`)
    reports.value = res.reports
    total.value = res.total
  } catch {
    // ignore
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await Promise.all([
    loadReports(),
    api<Record<string, number>>('/api/admin/reports/stats').then((s) => (reportStats.value = s)).catch(() => {}),
  ])
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
