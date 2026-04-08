<template>
  <div class="pb-auth-page">
    <div class="pb-auth-card">
      <div class="pb-auth-logo">
        <PbMascot :width="64" :height="80" />
        <h1 class="pb-auth-logo-text">pracby</h1>
      </div>

      <!-- Step indicator -->
      <div class="pb-steps">
        <div
          v-for="n in 3"
          :key="n"
          class="pb-step"
          :class="{ 'pb-step--active': step === n, 'pb-step--done': step > n }"
        >
          <span v-if="step > n">✓</span>
          <span v-else>{{ n }}</span>
        </div>
      </div>

      <!-- Step 1: Account info -->
      <form v-if="step === 1" class="pb-auth-form" @submit.prevent="nextStep">
        <h2 class="pb-auth-title">Hesap Oluştur</h2>

        <div class="pb-field">
          <label class="pb-label">E-posta</label>
          <input v-model="form.email" type="email" class="pb-input" placeholder="you@example.com" autocomplete="email" required />
        </div>

        <div class="pb-field">
          <label class="pb-label">Kullanıcı Adı</label>
          <input v-model="form.username" type="text" class="pb-input" placeholder="kullanici_adi" minlength="3" maxlength="30" required />
        </div>

        <div class="pb-field">
          <label class="pb-label">Şifre</label>
          <input v-model="form.password" type="password" class="pb-input" placeholder="En az 8 karakter" autocomplete="new-password" minlength="8" required />
        </div>

        <p v-if="error" class="pb-auth-error">{{ error }}</p>
        <button type="submit" class="pb-btn-primary">Devam →</button>
      </form>

      <!-- Step 2: Exam group -->
      <div v-else-if="step === 2" class="pb-auth-form">
        <h2 class="pb-auth-title">Hangi sınava çalışıyorsun?</h2>
        <p class="pb-auth-subtitle">İleride birden fazla sınav ekleyebilirsin.</p>

        <div v-if="loadingExams" class="pb-auth-loading">Yükleniyor…</div>
        <div v-else-if="error" class="pb-auth-error">{{ error }}</div>
        <div v-else class="pb-exam-grid">
          <button
            v-for="group in examGroups"
            :key="group.id"
            type="button"
            class="pb-exam-card"
            :class="{
              'pb-exam-card--selected': selectedGroupId === group.id,
              'pb-exam-card--disabled': !group.is_active,
            }"
            :disabled="!group.is_active"
            @click="selectGroup(group)"
          >
            <span class="pb-exam-name">{{ group.name }}</span>
            <span class="pb-exam-desc">{{ group.description }}</span>
            <span v-if="!group.is_active" class="pb-exam-soon">Yakında</span>
          </button>
        </div>

        <button class="pb-btn-primary" :disabled="!selectedGroupId" @click="step = 3">Devam →</button>
      </div>

      <!-- Step 3: Exam type -->
      <div v-else-if="step === 3" class="pb-auth-form">
        <h2 class="pb-auth-title">Hangi düzey?</h2>

        <div class="pb-exam-grid">
          <button
            v-for="type in selectedGroupTypes"
            :key="type.id"
            type="button"
            class="pb-exam-card"
            :class="{ 'pb-exam-card--selected': form.exam_type_id === type.id }"
            @click="form.exam_type_id = type.id"
          >
            <span class="pb-exam-name">{{ type.name }}</span>
            <span class="pb-exam-desc">{{ type.description }}</span>
          </button>
        </div>

        <p v-if="error" class="pb-auth-error">{{ error }}</p>
        <button class="pb-btn-primary" :disabled="!form.exam_type_id || loading" @click="submit">
          <span v-if="loading">Kayıt yapılıyor…</span>
          <span v-else>Kayıt Ol</span>
        </button>
        <button type="button" class="pb-btn-ghost" @click="step = 2">← Geri</button>
      </div>

      <p class="pb-auth-switch">
        Zaten hesabın var mı?
        <NuxtLink to="/auth/login" class="pb-auth-link">Giriş Yap</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

interface ExamType {
  id: string;
  name: string;
  slug: string;
  description: string;
  exam_group_id: string;
}

interface ExamGroup {
  id: string;
  name: string;
  slug: string;
  description: string;
  is_active: boolean;
  exam_types: ExamType[];
}

const router = useRouter();
const step = ref(1);
const error = ref('');
const loading = ref(false);
const loadingExams = ref(false);
const examGroups = ref<ExamGroup[]>([]);
const selectedGroupId = ref('');

const form = reactive({
  email: '',
  username: '',
  password: '',
  exam_type_id: '',
});

const selectedGroupTypes = computed(() => {
  const group = examGroups.value.find((g) => g.id === selectedGroupId.value);
  return group?.exam_types ?? [];
});

const fetchExamGroups = async () => {
  loadingExams.value = true;
  error.value = '';
  try {
    examGroups.value = await $fetch<ExamGroup[]>('/api/exam-groups');
  } catch {
    error.value = 'Sınav listesi yüklenemedi. Sayfayı yenileyin.';
  } finally {
    loadingExams.value = false;
  }
};

console.log('Exam groups:', examGroups.value);

const nextStep = () => {
  error.value = '';
  step.value = 2;
  if (examGroups.value.length === 0) fetchExamGroups();
};

const selectGroup = (group: ExamGroup) => {
  if (!group.is_active) return;
  selectedGroupId.value = group.id;
  form.exam_type_id = '';
};

const submit = async () => {
  error.value = '';
  loading.value = true;
  try {
    const data = await $fetch<{ token: string }>('/api/auth/register', {
      method: 'POST',
      body: form,
    });
    localStorage.setItem('pb_token', data.token);
    await router.push('/');
  } catch (e: unknown) {
    const err = e as { data?: { message?: string } };
    error.value = err?.data?.message ?? 'Kayıt başarısız. Bilgilerini kontrol et.';
    step.value = 1;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.pb-auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pb-bg);
  padding: 24px;
}

.pb-auth-card {
  width: 100%;
  max-width: 480px;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 20px;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.pb-auth-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.pb-auth-logo-text {
  font-size: 2rem;
  font-weight: 900;
  color: var(--pb-purple-light);
}

.pb-steps {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.pb-step {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid var(--pb-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--pb-text-muted);
}

.pb-step--active {
  border-color: var(--pb-purple-light);
  color: var(--pb-purple-light);
}

.pb-step--done {
  background: var(--pb-purple);
  border-color: var(--pb-purple);
  color: #fff;
}

.pb-auth-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--pb-text);
  text-align: center;
}

.pb-auth-subtitle {
  text-align: center;
  font-size: 0.9rem;
  color: var(--pb-text-muted);
  margin-top: -12px;
}

.pb-auth-loading {
  text-align: center;
  color: var(--pb-text-muted);
  padding: 20px 0;
}

.pb-auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pb-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.pb-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--pb-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pb-input {
  background: var(--pb-bg);
  border: 2px solid var(--pb-border);
  border-radius: 12px;
  padding: 12px 16px;
  color: var(--pb-text);
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.15s;
  outline: none;
}

.pb-input:focus {
  border-color: var(--pb-purple-light);
}

.pb-auth-error {
  color: var(--pb-red);
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
}

.pb-exam-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pb-exam-card {
  background: var(--pb-bg);
  border: 2px solid var(--pb-border);
  border-radius: 14px;
  padding: 16px 18px;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
}

.pb-exam-card:hover:not(:disabled) {
  border-color: var(--pb-purple-light);
  background: var(--pb-bg-card-hover);
}

.pb-exam-card--selected {
  border-color: var(--pb-purple) !important;
  background: rgba(124, 58, 237, 0.12) !important;
}

.pb-exam-card--disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.pb-exam-name {
  font-size: 1rem;
  font-weight: 800;
  color: var(--pb-text);
}

.pb-exam-desc {
  font-size: 0.85rem;
  color: var(--pb-text-muted);
}

.pb-exam-soon {
  position: absolute;
  top: 12px;
  right: 14px;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--pb-orange);
  background: rgba(255, 150, 0, 0.15);
  padding: 2px 8px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pb-btn-primary {
  background: var(--pb-purple);
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 14px;
  font-size: 1rem;
  font-weight: 800;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
}

.pb-btn-primary:hover:not(:disabled) {
  background: var(--pb-purple-light);
}

.pb-btn-primary:active:not(:disabled) {
  transform: scale(0.98);
}

.pb-btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.pb-btn-ghost {
  background: transparent;
  color: var(--pb-text-muted);
  border: 2px solid var(--pb-border);
  border-radius: 14px;
  padding: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
}

.pb-btn-ghost:hover {
  border-color: var(--pb-text-muted);
  color: var(--pb-text);
}

.pb-auth-switch {
  text-align: center;
  font-size: 0.9rem;
  color: var(--pb-text-muted);
}

.pb-auth-link {
  color: var(--pb-purple-light);
  font-weight: 700;
  text-decoration: underline;
}
</style>
