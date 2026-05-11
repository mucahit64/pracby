<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <NuxtLink to="/admin/questions" class="text-gray-400 hover:text-white">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
      </NuxtLink>
      <h1 class="text-2xl font-bold text-white">Yeni Soru Ekle</h1>
    </div>

    <!-- Tab: Single / Bulk -->
    <div class="flex gap-2 mb-6">
      <button
        @click="mode = 'single'"
        :class="['px-4 py-2 rounded-lg text-sm font-medium transition-colors', mode === 'single' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600']"
      >Tekli Ekleme</button>
      <button
        @click="mode = 'bulk'"
        :class="['px-4 py-2 rounded-lg text-sm font-medium transition-colors', mode === 'bulk' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600']"
      >Toplu Ekleme (JSON)</button>
    </div>

    <!-- Single Question Form -->
    <form v-if="mode === 'single'" @submit.prevent="submitSingle" class="space-y-6">
      <div class="bg-gray-800 rounded-xl p-6 border border-gray-700 space-y-4">
        <h2 class="text-lg font-semibold text-gray-200 mb-2">Soru Bilgileri</h2>

        <!-- Topic / Step / Test cascading selects -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label class="admin-label">Konu *</label>
            <select v-model="form.topic_id" @change="onTopicChange" required class="admin-select">
              <option value="">Seçin</option>
              <option v-for="t in topics" :key="t.id" :value="t.id">{{ t.name }}</option>
            </select>
          </div>
          <div>
            <label class="admin-label">Adım</label>
            <select v-model="form.step_id" @change="onStepChange" class="admin-select">
              <option value="">Seçin (opsiyonel)</option>
              <option v-for="s in steps" :key="s.id" :value="s.id">{{ s.name || `Adım ${s.sort_order}` }}</option>
            </select>
          </div>
          <div>
            <label class="admin-label">Test</label>
            <select v-model="form.test_id" class="admin-select">
              <option value="">Seçin (opsiyonel)</option>
              <option v-for="t in tests" :key="t.id" :value="t.id">{{ t.name || `Test ${t.sort_order}` }}</option>
            </select>
          </div>
        </div>

        <!-- Question text -->
        <div>
          <label class="admin-label">Soru Metni * (HTML destekli)</label>
          <textarea v-model="form.question_text" required rows="4" class="admin-input" placeholder="<p><b>Soru metni</b></p>" />
        </div>

        <!-- Type, Difficulty -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label class="admin-label">Soru Tipi *</label>
            <select v-model="form.question_type" required class="admin-select">
              <option value="multiple_choice">Çoktan Seçmeli</option>
              <option value="true_false">Doğru/Yanlış</option>
              <option value="fill_blank">Boşluk Doldurma</option>
              <option value="matching">Eşleştirme</option>
              <option value="ordering">Sıralama</option>
              <option value="flashcard">Flashcard</option>
              <option value="swipe">Swipe</option>
            </select>
          </div>
          <div>
            <label class="admin-label">Zorluk *</label>
            <select v-model.number="form.difficulty" required class="admin-select">
              <option :value="1">Kolay (1)</option>
              <option :value="2">Orta (2)</option>
              <option :value="3">Zor (3)</option>
            </select>
          </div>
          <div>
            <label class="admin-label">Puan</label>
            <input v-model.number="form.point_value" type="number" min="1" class="admin-input" />
          </div>
        </div>

        <!-- Explanation & Hint -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="admin-label">Açıklama</label>
            <textarea v-model="form.explanation" rows="2" class="admin-input" placeholder="Doğru cevabın açıklaması" />
          </div>
          <div>
            <label class="admin-label">İpucu</label>
            <textarea v-model="form.hint" rows="2" class="admin-input" placeholder="İsteğe bağlı ipucu" />
          </div>
        </div>
      </div>

      <!-- Answers -->
      <div v-if="form.question_type === 'multiple_choice' || form.question_type === 'true_false'" class="bg-gray-800 rounded-xl p-6 border border-gray-700 space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold text-gray-200">Cevaplar</h2>
          <button type="button" @click="addAnswer" class="text-sm text-purple-400 hover:text-purple-300">+ Cevap Ekle</button>
        </div>

        <div v-for="(ans, idx) in form.answers" :key="idx" class="flex items-center gap-3">
          <input
            type="radio"
            :name="'correct'"
            :checked="ans.is_correct"
            @change="setCorrect(idx)"
            class="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600"
          />
          <input v-model="ans.answer_text" class="admin-input flex-1" :placeholder="`Cevap ${idx + 1}`" required />
          <button v-if="form.answers.length > 2" type="button" @click="form.answers.splice(idx, 1)" class="text-red-400 hover:text-red-300 text-sm">Sil</button>
        </div>
        <p class="text-xs text-gray-500">Doğru cevabı seçmek için radio butonunu tıklayın</p>
      </div>

      <!-- Submit -->
      <div class="flex gap-3">
        <button
          type="submit"
          :disabled="submitting"
          class="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
        >
          {{ submitting ? 'Kaydediliyor...' : 'Soru Oluştur' }}
        </button>
        <NuxtLink to="/admin/questions" class="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-lg transition-colors">İptal</NuxtLink>
      </div>

      <p v-if="error" class="text-red-400 text-sm">{{ error }}</p>
      <p v-if="success" class="text-green-400 text-sm">{{ success }}</p>
    </form>

    <!-- Bulk Import -->
    <div v-else class="space-y-4">
      <div class="bg-gray-800 rounded-xl p-6 border border-gray-700 space-y-4">
        <h2 class="text-lg font-semibold text-gray-200">Toplu Soru Ekleme</h2>
        <p class="text-sm text-gray-400">
          Aşağıdaki formata uygun JSON yapıştırın. Her soru CreateQuestionSchema formatında olmalıdır.
        </p>

        <div class="bg-gray-900 rounded-lg p-3 text-xs text-gray-400 font-mono overflow-x-auto">
          <pre>{{ bulkExample }}</pre>
        </div>

        <textarea v-model="bulkJson" rows="12" class="admin-input font-mono text-xs" placeholder='{ "questions": [...] }' />

        <div class="flex gap-3">
          <button
            @click="submitBulk"
            :disabled="submitting"
            class="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
          >
            {{ submitting ? 'Yükleniyor...' : 'Toplu Ekle' }}
          </button>
        </div>

        <p v-if="error" class="text-red-400 text-sm">{{ error }}</p>
        <p v-if="success" class="text-green-400 text-sm">{{ success }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['admin'] })

const { api, extractError } = useApi()

const mode = ref<'single' | 'bulk'>('single')
const submitting = ref(false)
const error = ref('')
const success = ref('')

const topics = ref<any[]>([])
const steps = ref<any[]>([])
const tests = ref<any[]>([])

const form = reactive({
  topic_id: '',
  step_id: '',
  test_id: '',
  question_text: '',
  question_type: 'multiple_choice',
  difficulty: 1,
  point_value: 1,
  explanation: '',
  hint: '',
  answers: [
    { answer_text: '', is_correct: true },
    { answer_text: '', is_correct: false },
    { answer_text: '', is_correct: false },
    { answer_text: '', is_correct: false },
  ],
})

const bulkJson = ref('')
const bulkExample = `{
  "questions": [
    {
      "topic_id": "uuid-here",
      "question_text": "<p>Soru metni</p>",
      "question_type": "multiple_choice",
      "difficulty": 1,
      "answers": [
        { "answer_text": "A seçeneği", "is_correct": false },
        { "answer_text": "B seçeneği", "is_correct": true }
      ]
    }
  ]
}`

function addAnswer() {
  form.answers.push({ answer_text: '', is_correct: false })
}

function setCorrect(idx: number) {
  form.answers.forEach((a, i) => (a.is_correct = i === idx))
}

async function onTopicChange() {
  form.step_id = ''
  form.test_id = ''
  steps.value = []
  tests.value = []
  if (!form.topic_id) return
  steps.value = await api<any[]>(`/api/admin/steps?topic_id=${form.topic_id}`).catch(() => [])
}

async function onStepChange() {
  form.test_id = ''
  tests.value = []
  if (!form.step_id) return
  tests.value = await api<any[]>(`/api/admin/tests?step_id=${form.step_id}`).catch(() => [])
}

async function submitSingle() {
  error.value = ''
  success.value = ''
  submitting.value = true

  try {
    const body: Record<string, unknown> = {
      topic_id: form.topic_id,
      question_text: form.question_text,
      question_type: form.question_type,
      difficulty: form.difficulty,
      point_value: form.point_value,
    }
    if (form.step_id) body.step_id = form.step_id
    if (form.test_id) body.test_id = form.test_id
    if (form.explanation) body.explanation = form.explanation
    if (form.hint) body.hint = form.hint
    if (form.question_type === 'multiple_choice' || form.question_type === 'true_false') {
      body.answers = form.answers.filter((a) => a.answer_text.trim())
    }

    await api('/api/admin/questions', { method: 'POST', body })
    success.value = 'Soru başarıyla oluşturuldu!'
    // Reset form
    form.question_text = ''
    form.explanation = ''
    form.hint = ''
    form.answers = [
      { answer_text: '', is_correct: true },
      { answer_text: '', is_correct: false },
      { answer_text: '', is_correct: false },
      { answer_text: '', is_correct: false },
    ]
  } catch (e) {
    error.value = extractError(e)
  } finally {
    submitting.value = false
  }
}

async function submitBulk() {
  error.value = ''
  success.value = ''
  submitting.value = true

  try {
    const parsed = JSON.parse(bulkJson.value)
    await api('/api/admin/questions/bulk', { method: 'POST', body: parsed })
    success.value = `${parsed.questions?.length ?? 0} soru başarıyla eklendi!`
    bulkJson.value = ''
  } catch (e) {
    if (e instanceof SyntaxError) {
      error.value = 'Geçersiz JSON formatı'
    } else {
      error.value = extractError(e)
    }
  } finally {
    submitting.value = false
  }
}

onMounted(async () => {
  topics.value = await api<any[]>('/api/admin/topics').catch(() => [])
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
</style>
