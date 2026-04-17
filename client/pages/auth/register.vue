<template>
  <div class="pb-auth-page">
    <NuxtLink to="/" class="pb-auth-close">✕</NuxtLink>
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
          <div class="pb-input-wrap">
            <input
              v-model="form.email"
              type="email"
              class="pb-input"
              :class="{ 'pb-input--error': fieldErrors.email, 'pb-input--ok': emailStatus === 'ok' }"
              placeholder="you@example.com"
              autocomplete="email"
              @blur="checkEmailAvailability"
            />
            <span v-if="emailStatus === 'checking'" class="pb-input-addon">⏳</span>
            <span v-else-if="emailStatus === 'ok'" class="pb-input-addon">✅</span>
          </div>
          <span v-if="fieldErrors.email" class="pb-field-error">
            {{ fieldErrors.email }}
            <NuxtLink v-if="fieldErrors.email.includes('kayıtlı')" to="/auth/login" class="pb-auth-link"> Giriş yapmak ister misiniz?</NuxtLink>
          </span>
        </div>

        <div class="pb-field">
          <label class="pb-label">Kullanıcı Adı</label>
          <div class="pb-input-wrap">
            <input
              v-model="form.username"
              type="text"
              class="pb-input"
              :class="{ 'pb-input--error': fieldErrors.username, 'pb-input--ok': usernameStatus === 'ok' }"
              placeholder="kullanici_adi"
              maxlength="20"
              autocomplete="username"
              @input="onUsernameInput"
              @blur="checkUsernameAvailability"
            />
            <span v-if="usernameStatus === 'checking'" class="pb-input-addon">⏳</span>
            <span v-else-if="usernameStatus === 'ok'" class="pb-input-addon">✅</span>
          </div>
          <span v-if="fieldErrors.username" class="pb-field-error">{{ fieldErrors.username }}</span>
        </div>

        <div class="pb-field">
          <label class="pb-label">Şifre</label>
          <div class="pb-input-wrap">
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              class="pb-input pb-input-password"
              :class="{ 'pb-input--ok': passwordOk }"
              placeholder="En az 6 karakter"
              autocomplete="new-password"
              maxlength="64"
              @blur="onPasswordBlur"
            />
            <button type="button" class="pb-eye-btn" tabindex="-1" @click="showPassword = !showPassword">
              {{ showPassword ? '🙈' : '👁️' }}
            </button>
          </div>
          <span class="pb-password-hint" :class="{ 'pb-password-hint--ok': passwordOk }">
            <template v-if="form.password.length > 0">
              En az 6 karakter (Şu an: {{ form.password.length }}) <span v-if="passwordOk">✅</span>
            </template>
          </span>
        </div>

        <p v-if="error" class="pb-auth-error">{{ error }}</p>
        <button type="submit" class="pb-btn-primary" :disabled="!step1Valid">Devam →</button>
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

const fieldErrors = reactive({ email: '', username: '', password: '' });
const emailStatus = ref<'idle' | 'checking' | 'ok' | 'error'>('idle');
const usernameStatus = ref<'idle' | 'checking' | 'ok' | 'error'>('idle');
const showPassword = ref(false);

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

const passwordOk = computed(() => form.password.trim().length >= 6);
const step1Valid = computed(
  () => emailStatus.value === 'ok' && usernameStatus.value === 'ok' && passwordOk.value,
);

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

const checkEmailAvailability = async () => {
  const email = form.email.trim();
  if (!email || !email.includes('@')) return;
  emailStatus.value = 'checking';
  fieldErrors.email = '';
  try {
    const res = await $fetch<{ available: boolean }>('/api/auth/check-email', { query: { email } });
    if (res.available) {
      emailStatus.value = 'ok';
    } else {
      emailStatus.value = 'error';
      fieldErrors.email = 'Bu e-mail zaten kayıtlı.';
    }
  } catch {
    emailStatus.value = 'idle';
  }
};

const usernameRegex = /^[a-z0-9](?!.*[._]{2})[a-z0-9._]{1,18}[a-z0-9]$/;

const validateUsernameFormat = (u: string): string => {
  if (!u) return '';
  if (/[^a-z0-9._]/.test(u))
    return 'Kullanıcı adları sadece rakam, harf, alt çizgi ve nokta içerebilir.';
  if (/[._]{2}/.test(u))
    return 'Art arda gelen özel karakterler içermeyen bir kullanıcı adı seç.';
  if (u.length > 20)
    return '20 karakterden kısa bir kullanıcı adı seç.';
  return '';
};

const onUsernameInput = () => {
  form.username = form.username.toLowerCase();
  usernameStatus.value = 'idle';
  fieldErrors.username = validateUsernameFormat(form.username);
};

const checkUsernameAvailability = async () => {
  const username = form.username;
  if (!username) return;
  const formatError = validateUsernameFormat(username);
  if (formatError) {
    fieldErrors.username = formatError;
    usernameStatus.value = 'error';
    return;
  }
  if (!usernameRegex.test(username)) {
    fieldErrors.username = 'Kullanıcı adı 3-20 karakter olmalı, harf veya rakamla başlayıp bitmelidir.';
    usernameStatus.value = 'error';
    return;
  }
  usernameStatus.value = 'checking';
  fieldErrors.username = '';
  try {
    const res = await $fetch<{ available: boolean }>('/api/auth/check-username', { query: { username } });
    if (res.available) {
      usernameStatus.value = 'ok';
    } else {
      usernameStatus.value = 'error';
      fieldErrors.username = `"${username}" kullanıcı adını alamazsın.`;
    }
  } catch {
    usernameStatus.value = 'idle';
  }
};

const onPasswordBlur = () => {
  form.password = form.password.trim();
};

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
  fieldErrors.email = '';
  fieldErrors.username = '';
  fieldErrors.password = '';
  loading.value = true;
  try {
    const { clearGuestState, getRegistrationPayload } = useGuestState();
    const guestPayload = getRegistrationPayload();

    // Use guest exam_type_id if user hasn't selected one yet
    const examTypeId = form.exam_type_id || guestPayload.exam_type_id || '';

    const data = await $fetch<{ token: string }>('/api/auth/register', {
      method: 'POST',
      body: {
        ...form,
        exam_type_id: examTypeId,
        password: form.password.trim(),
        acorn_balance: guestPayload.acorn_balance,
        hearts: guestPayload.hearts,
      },
    });
    localStorage.setItem('pb_token', data.token);
    clearGuestState();
    await router.push('/');
  } catch (e: unknown) {
    const err = e as { data?: { errors?: Record<string, { _errors: string[] }>; error?: string } };
    const zodErrors = err?.data?.errors;
    const serviceError = err?.data?.error;
    if (zodErrors) {
      fieldErrors.email = zodErrors.email?._errors[0] ?? '';
      fieldErrors.username = zodErrors.username?._errors[0] ?? '';
      fieldErrors.password = zodErrors.password?._errors[0] ?? '';
      if (fieldErrors.email) emailStatus.value = 'error';
      if (fieldErrors.username) usernameStatus.value = 'error';
      step.value = 1;
    } else if (serviceError) {
      const msg = serviceError.toLowerCase();
      if (msg.includes('email')) {
        fieldErrors.email = 'Bu e-posta adresi zaten kullanılıyor.';
        emailStatus.value = 'error';
        step.value = 1;
      } else if (msg.includes('username')) {
        fieldErrors.username = 'Bu kullanıcı adı zaten alınmış.';
        usernameStatus.value = 'error';
        step.value = 1;
      } else {
        error.value = serviceError;
      }
    } else {
      error.value = 'Kayıt başarısız. Bilgilerini kontrol et.';
    }
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
  position: relative;
}

.pb-auth-close {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  color: var(--pb-text);
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  z-index: 10;
  transition: background 0.15s;
}

.pb-auth-close:hover {
  background: var(--pb-border);
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

.pb-input--error {
  border-color: var(--pb-red) !important;
}

.pb-input--ok {
  border-color: var(--pb-green) !important;
}

.pb-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.pb-input-wrap .pb-input {
  width: 100%;
}

.pb-input-addon {
  position: absolute;
  right: 12px;
  font-size: 1rem;
  pointer-events: none;
  line-height: 1;
}

.pb-input-password {
  padding-right: 44px;
}

.pb-eye-btn {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 4px;
  line-height: 1;
  color: var(--pb-text-muted);
}

.pb-password-hint {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--pb-text-muted);
  margin-top: -2px;
}

.pb-password-hint--ok {
  color: var(--pb-green);
}

.pb-field-error {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--pb-red);
  margin-top: -2px;
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
