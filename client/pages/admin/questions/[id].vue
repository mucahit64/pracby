<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <NuxtLink to="/admin/questions" class="text-gray-400 hover:text-white">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
      </NuxtLink>
      <h1 class="text-2xl font-bold text-white">Soru Düzenle</h1>
    </div>

    <div v-if="loading" class="text-gray-400">Yükleniyor...</div>

    <form v-else @submit.prevent="handleUpdate" class="space-y-6">
      <div class="bg-gray-800 rounded-xl p-6 border border-gray-700 space-y-4">
        <h2 class="text-lg font-semibold text-gray-200">Soru Bilgileri</h2>

        <div>
          <label class="admin-label">Soru Metni</label>
          <textarea v-model="form.question_text" rows="4" class="admin-input" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label class="admin-label">Soru Tipi</label>
            <select v-model="form.question_type" class="admin-select">
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
            <label class="admin-label">Zorluk</label>
            <select v-model.number="form.difficulty" class="admin-select">
              <option :value="1">Kolay (1)</option>
              <option :value="2">Orta (2)</option>
              <option :value="3">Zor (3)</option>
            </select>
          </div>
          <div>
            <label class="admin-label">Durum</label>
            <select v-model="form.status" class="admin-select">
              <option value="approved">Onaylı</option>
              <option value="pending">Beklemede</option>
              <option value="draft">Taslak</option>
              <option value="archived">Arşivlenmiş</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="admin-label">Açıklama</label>
            <textarea v-model="form.explanation" rows="2" class="admin-input" />
          </div>
          <div>
            <label class="admin-label">İpucu</label>
            <textarea v-model="form.hint" rows="2" class="admin-input" />
          </div>
        </div>
      </div>

      <!-- Answers (read-only display) -->
      <div v-if="answers.length > 0" class="bg-gray-800 rounded-xl p-6 border border-gray-700 space-y-3">
        <h2 class="text-lg font-semibold text-gray-200">Mevcut Cevaplar</h2>
        <div v-for="ans in answers" :key="ans.id" class="flex items-center gap-3 py-1">
          <span :class="ans.is_correct ? 'text-green-400' : 'text-gray-500'" class="text-sm">
            {{ ans.is_correct ? '✓' : '✗' }}
          </span>
          <span class="text-gray-300 text-sm">{{ ans.answer_text }}</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex gap-3">
        <button
          type="submit"
          :disabled="submitting"
          class="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
        >
          {{ submitting ? 'Kaydediliyor...' : 'Güncelle' }}
        </button>
        <button
          type="button"
          @click="archiveQuestion"
          :disabled="submitting"
          class="px-6 py-2.5 bg-red-600/20 hover:bg-red-600/30 text-red-400 font-medium rounded-lg transition-colors"
        >
          Arşivle
        </button>
        <NuxtLink to="/admin/questions" class="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-lg transition-colors">Geri</NuxtLink>
      </div>

      <p v-if="error" class="text-red-400 text-sm">{{ error }}</p>
      <p v-if="success" class="text-green-400 text-sm">{{ success }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['admin'] })

const route = useRoute()
const { api, extractError } = useApi()

const loading = ref(true)
const submitting = ref(false)
const error = ref('')
const success = ref('')
const answers = ref<any[]>([])

const form = reactive({
  question_text: '',
  question_type: '',
  difficulty: 1,
  point_value: 1,
  explanation: '',
  hint: '',
  status: '',
})

async function handleUpdate() {
  error.value = ''
  success.value = ''
  submitting.value = true
  try {
    await api(`/api/admin/questions/${route.params.id}`, {
      method: 'PATCH',
      body: {
        question_text: form.question_text,
        question_type: form.question_type,
        difficulty: form.difficulty,
        point_value: form.point_value,
        explanation: form.explanation || undefined,
        hint: form.hint || undefined,
        status: form.status,
      },
    })
    success.value = 'Soru güncellendi!'
  } catch (e) {
    error.value = extractError(e)
  } finally {
    submitting.value = false
  }
}

async function archiveQuestion() {
  if (!confirm('Bu soruyu arşivlemek istediğinize emin misiniz?')) return
  submitting.value = true
  try {
    await api(`/api/admin/questions/${route.params.id}`, { method: 'DELETE' })
    await navigateTo('/admin/questions')
  } catch (e) {
    error.value = extractError(e)
  } finally {
    submitting.value = false
  }
}

onMounted(async () => {
  try {
    const q = await api<any>(`/api/admin/questions/${route.params.id}`)
    form.question_text = q.question_text
    form.question_type = q.question_type
    form.difficulty = q.difficulty
    form.point_value = q.point_value
    form.explanation = q.explanation ?? ''
    form.hint = q.hint ?? ''
    form.status = q.status
    answers.value = q.answers ?? []
  } catch {
    error.value = 'Soru yüklenemedi'
  } finally {
    loading.value = false
  }
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
