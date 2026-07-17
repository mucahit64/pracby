<template>
  <div class="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 relative">
    <div class="w-full max-w-[480px] bg-white border-2 border-gray-200 rounded-2xl p-5 flex flex-col gap-5 sm:rounded-3xl sm:p-10 sm:gap-6">
      <div class="flex items-center justify-between">
        <div class="w-10" />
        <h1 class="text-3xl font-black text-primary">pracby</h1>
        <NuxtLink to="/" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border-2 border-gray-200 text-gray-800 font-bold hover:bg-gray-200 transition-colors">✕</NuxtLink>
      </div>

      <!-- Step indicator -->
      <div class="flex justify-center gap-3">
        <div
          v-for="n in 3"
          :key="n"
          class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold"
          :class="{
            'border-primary text-primary': step === n,
            'bg-primary border-primary text-white': step > n,
            'border-gray-200 text-gray-400': step < n,
          }"
        >
          <span v-if="step > n">✓</span>
          <span v-else>{{ n }}</span>
        </div>
      </div>

      <!-- Step 1: Account info -->
      <form v-if="step === 1" class="flex flex-col gap-4" @submit.prevent="nextStep">
        <h2 class="text-xl font-extrabold text-gray-800 text-center">Hesap Oluştur</h2>

        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-bold text-gray-400 uppercase tracking-wide">E-posta</label>
          <div class="relative flex items-center">
            <input
              v-model="form.email"
              type="email"
              class="w-full bg-gray-50 border-2 rounded-xl px-4 py-3 text-gray-800 text-base font-[inherit] outline-none transition-colors"
              :class="{
                'border-negative': fieldErrors.email,
                'border-positive': emailStatus === 'ok',
                'border-gray-200 focus:border-primary': !fieldErrors.email && emailStatus !== 'ok',
              }"
              placeholder="you@example.com"
              autocomplete="email"
              @blur="checkEmailAvailability"
            >
            <span v-if="emailStatus === 'checking'" class="absolute right-3 pointer-events-none">⏳</span>
            <span v-else-if="emailStatus === 'ok'" class="absolute right-3 pointer-events-none">✅</span>
          </div>
          <span v-if="fieldErrors.email" class="text-xs font-semibold text-negative -mt-0.5">
            {{ fieldErrors.email }}
            <NuxtLink v-if="fieldErrors.email.includes('kayıtlı')" to="/auth/login" class="text-primary underline"> Giriş yapmak ister misiniz?</NuxtLink>
          </span>
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-bold text-gray-400 uppercase tracking-wide">Kullanıcı Adı</label>
          <div class="relative flex items-center">
            <input
              v-model="form.username"
              type="text"
              class="w-full bg-gray-50 border-2 rounded-xl px-4 py-3 text-gray-800 text-base font-[inherit] outline-none transition-colors"
              :class="{
                'border-negative': fieldErrors.username,
                'border-positive': usernameStatus === 'ok',
                'border-gray-200 focus:border-primary': !fieldErrors.username && usernameStatus !== 'ok',
              }"
              placeholder="kullanici_adi"
              maxlength="20"
              autocomplete="username"
              @input="onUsernameInput"
              @blur="checkUsernameAvailability"
            >
            <span v-if="usernameStatus === 'checking'" class="absolute right-3 pointer-events-none">⏳</span>
            <span v-else-if="usernameStatus === 'ok'" class="absolute right-3 pointer-events-none">✅</span>
          </div>
          <span v-if="fieldErrors.username" class="text-xs font-semibold text-negative -mt-0.5">{{ fieldErrors.username }}</span>
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-bold text-gray-400 uppercase tracking-wide">Şifre</label>
          <div class="relative flex items-center">
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full bg-gray-50 border-2 rounded-xl px-4 py-3 pr-11 text-gray-800 text-base font-[inherit] outline-none transition-colors"
              :class="passwordOk ? 'border-positive' : 'border-gray-200 focus:border-primary'"
              placeholder="En az 6 karakter"
              autocomplete="new-password"
              maxlength="64"
              @blur="onPasswordBlur"
            >
            <button type="button" class="absolute right-2.5 bg-transparent border-0 cursor-pointer text-lg p-1 text-gray-400" tabindex="-1" @click="showPassword = !showPassword">
              {{ showPassword ? '🙈' : '🐵' }}
            </button>
          </div>
          <span class="text-xs font-semibold -mt-0.5" :class="passwordOk ? 'text-positive' : 'text-gray-400'">
            <template v-if="form.password.length > 0">
              En az 6 karakter (Şu an: {{ form.password.length }}) <span v-if="passwordOk">✅</span>
            </template>
          </span>
        </div>

        <p v-if="error" class="text-negative text-sm font-semibold text-center">{{ error }}</p>
        <button type="submit" class="w-full bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed" :disabled="!step1Valid">Devam →</button>
      </form>

      <!-- Step 2: Exam group -->
      <div v-else-if="step === 2" class="flex flex-col gap-4">
        <h2 class="text-xl font-extrabold text-gray-800 text-center">Hangi sınava çalışıyorsun?</h2>
        <p class="text-center text-sm text-gray-400 -mt-3">İleride birden fazla sınav ekleyebilirsin.</p>

        <div v-if="loadingExams" class="text-center text-gray-400 py-5">Yükleniyor…</div>
        <div v-else-if="error" class="text-center text-negative text-sm font-semibold">{{ error }}</div>
        <div v-else class="flex flex-col gap-2.5">
          <button
            v-for="group in examGroups"
            :key="group.id"
            type="button"
            class="flex flex-col gap-1 px-4 py-3.5 rounded-2xl border-2 bg-gray-50 text-left cursor-pointer transition-all duration-150 relative font-[inherit]"
            :class="{
              '!border-primary !bg-primary/10': selectedGroupId === group.id,
              'border-gray-200 hover:border-primary/40': selectedGroupId !== group.id && group.is_active,
              'opacity-40 cursor-not-allowed': !group.is_active,
            }"
            :disabled="!group.is_active"
            @click="selectGroup(group)"
          >
            <span class="text-base font-extrabold text-gray-800">{{ group.name }}</span>
            <span class="text-xs text-gray-400 font-semibold">{{ group.description }}</span>
            <span v-if="!group.is_active" class="absolute top-3 right-3 text-[0.68rem] font-bold text-warning bg-warning/10 px-2 py-0.5 rounded-full">Yakında</span>
          </button>
        </div>
        <button class="w-full bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed" :disabled="!selectedGroupId" @click="step = 3">Devam →</button>
      </div>

      <!-- Step 3: Exam type -->
      <div v-else-if="step === 3" class="flex flex-col gap-4">
        <h2 class="text-xl font-extrabold text-gray-800 text-center">Hangi düzey?</h2>

        <div class="flex flex-col gap-2.5">
          <button
            v-for="type in selectedGroupTypes"
            :key="type.id"
            type="button"
            class="flex flex-col gap-1 px-4 py-3.5 rounded-2xl border-2 bg-gray-50 text-left cursor-pointer transition-all duration-150 font-[inherit]"
            :class="form.exam_type_id === type.id ? '!border-primary !bg-primary/10' : 'border-gray-200 hover:border-primary/40'"
            @click="form.exam_type_id = type.id"
          >
            <span class="text-base font-extrabold text-gray-800">{{ type.name }}</span>
            <span class="text-xs text-gray-400 font-semibold">{{ type.description }}</span>
          </button>
        </div>
        <div v-if="availableTypes.length === 0" class="text-center text-gray-400 text-sm py-3">Bu gruptaki tüm sınavlara zaten kayıtlısın.</div>
        <p v-if="error" class="text-negative text-sm font-semibold text-center">{{ error }}</p>
        <div class="flex gap-2.5">
          <button class="flex-1 bg-white text-gray-400 font-bold text-sm py-3 rounded-xl border-2 border-gray-200 hover:border-gray-400 hover:text-gray-800 transition-all cursor-pointer font-[inherit]" @click="step = 2">← Geri</button>
          <button class="flex-1 bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed" :disabled="!form.exam_type_id || loading" @click="submit">
            <span v-if="loading">Kayıt yapılıyor…</span>
            <span v-else>Kayıt Ol</span>
          </button>
        </div>
      </div>

      <p class="text-center text-sm text-gray-400">
        Zaten hesabın var mı?
        <NuxtLink to="/auth/login" class="text-primary font-bold underline">Giriş Yap</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

useHead({
  title: 'Kayıt Ol',
  meta: [
    { name: "description", content: "Pracby ile KPSS Tarih, Coğrafya ve Vatandaşlık derslerini oyun oynayarak, sıkılmadan öğrenin. 3D haritalı ve oyunlaştırılmış soru çözüm platformu." },
    { property: "og:title", content: "Pracby | Oyunlaştırılmış KPSS Platformu" },
    { property: "og:description", content: "KPSS'ye çalışmanın en eğlenceli yolu. Hemen test çözmeye başla!" },
    { property: "og:type", content: "website" }
  ]
});

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

const availableTypes = computed(() => selectedGroupTypes.value);

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
    const examTypeId = form.exam_type_id || guestPayload.exam_type_id || '';

    const data = await $fetch<{ token: string }>('/api/auth/register', {
      method: 'POST',
      body: {
        ...form,
        exam_type_id: examTypeId,
        password: form.password.trim(),
        acorn_balance: guestPayload.acorn_balance,
        energy: guestPayload.energy,
        guest_data: guestPayload.guest_data,
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
