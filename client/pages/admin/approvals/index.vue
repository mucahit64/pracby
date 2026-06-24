<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-white">İçerik Onayları</h1>
      <div v-if="counts.total > 0" class="px-3 py-1 bg-yellow-600/20 text-yellow-400 text-sm font-semibold rounded-full">
        {{ counts.total }} bekleyen
      </div>
    </div>

    <!-- Tabs -->
    <div class="flex gap-2 mb-6">
      <button
        :class="['px-4 py-2 rounded-lg text-sm font-medium transition-colors', activeTab === 'questions' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600']"
        @click="activeTab = 'questions'"
      >
        Sorular
        <span v-if="counts.questions > 0" class="ml-1.5 px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">{{ counts.questions }}</span>
      </button>
      <button
        :class="['px-4 py-2 rounded-lg text-sm font-medium transition-colors', activeTab === 'topics' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600']"
        @click="activeTab = 'topics'"
      >
        Konular
        <span v-if="counts.topics > 0" class="ml-1.5 px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">{{ counts.topics }}</span>
      </button>
    </div>

    <!-- Questions Tab -->
    <div v-if="activeTab === 'questions'">
      <div v-if="loading" class="text-center text-gray-500 py-12">Yükleniyor...</div>
      <div v-else-if="!pendingQuestions.length" class="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center text-gray-500">
        Bekleyen soru yok
      </div>
      <div v-else class="space-y-3">
        <div v-for="q in pendingQuestions" :key="q.id" class="bg-gray-800 rounded-xl border border-gray-700 p-4">
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1 min-w-0">
              <div class="text-gray-200 text-sm mb-2" v-html="truncateHtml(q.question_text, 200)" />
              <div class="flex flex-wrap gap-2 text-xs">
                <span class="px-2 py-0.5 bg-gray-700 text-gray-400 rounded">{{ q.question_type }}</span>
                <span class="px-2 py-0.5 bg-gray-700 text-gray-400 rounded">Zorluk: {{ q.difficulty }}</span>
                <span v-if="q.course_name" class="px-2 py-0.5 bg-blue-900/30 text-blue-400 rounded">{{ q.course_name }}</span>
                <span v-if="q.topic_name" class="px-2 py-0.5 bg-green-900/30 text-green-400 rounded">{{ q.topic_name }}</span>
              </div>
              <div class="text-xs text-gray-500 mt-2">
                Ekleyen: <span class="text-gray-400">{{ q.created_by_username }}</span>
                · {{ formatDate(q.created_at) }}
              </div>
            </div>
            <div class="flex gap-2 shrink-0">
              <button :disabled="processing === q.id" class="px-3 py-1.5 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-colors" @click="approve('question', q.id)">
                ✓ Onayla
              </button>
              <button :disabled="processing === q.id" class="px-3 py-1.5 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-colors" @click="reject('question', q.id)">
                ✗ Reddet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Topics Tab -->
    <div v-if="activeTab === 'topics'">
      <div v-if="loading" class="text-center text-gray-500 py-12">Yükleniyor...</div>
      <div v-else-if="!pendingTopics.length" class="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center text-gray-500">
        Bekleyen konu yok
      </div>
      <div v-else class="space-y-3">
        <div v-for="t in pendingTopics" :key="t.id" class="bg-gray-800 rounded-xl border border-gray-700 p-4">
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1 min-w-0">
              <h3 class="text-gray-200 font-medium text-sm mb-1">{{ t.name }}</h3>
              <p v-if="t.description" class="text-gray-400 text-xs mb-2">{{ t.description }}</p>
              <div class="flex flex-wrap gap-2 text-xs">
                <span v-if="t.course_name" class="px-2 py-0.5 bg-blue-900/30 text-blue-400 rounded">{{ t.course_name }}</span>
                <span class="px-2 py-0.5 bg-gray-700 text-gray-400 rounded">Sıra: {{ t.sort_order }}</span>
              </div>
              <div class="text-xs text-gray-500 mt-2">
                Ekleyen: <span class="text-gray-400">{{ t.created_by_username }}</span>
              </div>
            </div>
            <div class="flex gap-2 shrink-0">
              <button :disabled="processing === t.id" class="px-3 py-1.5 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-colors" @click="approve('topic', t.id)">
                ✓ Onayla
              </button>
              <button :disabled="processing === t.id" class="px-3 py-1.5 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-colors" @click="reject('topic', t.id)">
                ✗ Reddet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast -->
    <div v-if="toast" class="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-lg text-sm font-medium shadow-lg" :class="toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'">
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['admin'] })

const { api, extractError } = useApi()

const activeTab = ref<'questions' | 'topics'>('questions')
const loading = ref(false)
const processing = ref<string | null>(null)
const toast = ref<{ type: string; message: string } | null>(null)

const pendingQuestions = ref<any[]>([])
const pendingTopics = ref<any[]>([])
const counts = ref({ questions: 0, topics: 0, total: 0 })

function truncateHtml(html: string, maxLen: number) {
  const text = html.replace(/<[^>]+>/g, '')
  return text.length > maxLen ? text.slice(0, maxLen) + '...' : html
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' })
}

function showToast(type: string, message: string) {
  toast.value = { type, message }
  setTimeout(() => { toast.value = null }, 3000)
}

async function loadPending() {
  loading.value = true
  try {
    const data = await api<{
      questions: any[]
      topics: any[]
      counts: { questions: number; topics: number; total: number }
    }>('/api/admin/pending')
    pendingQuestions.value = data.questions
    pendingTopics.value = data.topics
    counts.value = data.counts
  } catch {
    pendingQuestions.value = []
    pendingTopics.value = []
  } finally {
    loading.value = false
  }
}

async function approve(type: 'question' | 'topic', id: string) {
  processing.value = id
  try {
    await api(`/api/admin/${type === 'question' ? 'questions' : 'topics'}/${id}/approve`, { method: 'POST' })
    showToast('success', type === 'question' ? 'Soru onaylandı' : 'Konu onaylandı')
    await loadPending()
  } catch (e) {
    showToast('error', extractError(e))
  } finally {
    processing.value = null
  }
}

async function reject(type: 'question' | 'topic', id: string) {
  processing.value = id
  try {
    await api(`/api/admin/${type === 'question' ? 'questions' : 'topics'}/${id}/reject`, { method: 'POST' })
    showToast('success', type === 'question' ? 'Soru reddedildi' : 'Konu reddedildi')
    await loadPending()
  } catch (e) {
    showToast('error', extractError(e))
  } finally {
    processing.value = null
  }
}

onMounted(loadPending)
</script>
