<template>
  <div class="flex flex-col gap-7 max-w-[480px] mx-auto pb-10">
    <!-- Header -->
    <div class="flex items-center gap-3">
      <button class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border-2 border-gray-200 text-gray-800 font-bold hover:bg-gray-200 transition-colors cursor-pointer" @click="router.push('/profile')">←</button>
      <h1 class="text-xl font-black text-gray-800">Profili Düzenle</h1>
    </div>

    <form class="flex flex-col gap-5" @submit.prevent="submit">
      <!-- Username -->
      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-bold text-gray-400 uppercase tracking-wide">Kullanıcı Adı</label>
        <input
          v-model="form.username"
          type="text"
          class="bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-base font-[inherit] outline-none transition-colors focus:border-primary"
          placeholder="kullanici_adi"
          autocomplete="username"
        >
        <p v-if="fieldErrors.username" class="text-negative text-xs font-semibold">{{ fieldErrors.username }}</p>
      </div>

      <!-- Email -->
      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-bold text-gray-400 uppercase tracking-wide">E-posta</label>
        <input
          v-model="form.email"
          type="email"
          class="bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-base font-[inherit] outline-none transition-colors focus:border-primary"
          placeholder="ornek@email.com"
          autocomplete="email"
        >
        <p v-if="fieldErrors.email" class="text-negative text-xs font-semibold">{{ fieldErrors.email }}</p>
      </div>

      <!-- Divider -->
      <div class="border-t-2 border-gray-100" />

      <!-- Current Password -->
      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-bold text-gray-400 uppercase tracking-wide">Mevcut Şifre</label>
        <input
          v-model="form.currentPassword"
          type="password"
          class="bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-base font-[inherit] outline-none transition-colors focus:border-primary"
          placeholder="••••••"
          autocomplete="current-password"
        >
        <p class="text-xs font-semibold text-gray-400">E-posta veya şifre değiştirmek için gerekli</p>
        <p v-if="fieldErrors.currentPassword" class="text-negative text-xs font-semibold">{{ fieldErrors.currentPassword }}</p>
      </div>

      <!-- New Password -->
      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-bold text-gray-400 uppercase tracking-wide">Yeni Şifre</label>
        <input
          v-model="form.newPassword"
          type="password"
          class="bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-base font-[inherit] outline-none transition-colors focus:border-primary"
          placeholder="••••••"
          autocomplete="new-password"
        >
        <p v-if="fieldErrors.newPassword" class="text-negative text-xs font-semibold">{{ fieldErrors.newPassword }}</p>
      </div>

      <!-- Error / Success -->
      <p v-if="error" class="text-negative text-sm font-semibold text-center">{{ error }}</p>
      <p v-if="success" class="text-positive text-sm font-semibold text-center">{{ success }}</p>

      <!-- Submit -->
      <button
        type="submit"
        class="w-full bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        :disabled="loading || !hasChanges"
      >
        <span v-if="loading">Kaydediliyor…</span>
        <span v-else>Kaydet</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Profili Düzenle',
  meta: [
    { name: "description", content: "Pracby ile KPSS Tarih, Coğrafya ve Vatandaşlık derslerini oyun oynayarak, sıkılmadan öğrenin. 3D haritalı ve oyunlaştırılmış soru çözüm platformu." },
    { property: "og:title", content: "Pracby | Oyunlaştırılmış KPSS Platformu" },
    { property: "og:description", content: "KPSS'ye çalışmanın en eğlenceli yolu. Hemen test çözmeye başla!" },
    { property: "og:type", content: "website" }
  ]
});

const router = useRouter();

const originalProfile = ref({ username: '', email: '' });
const form = reactive({ username: '', email: '', currentPassword: '', newPassword: '' });
const error = ref('');
const success = ref('');
const loading = ref(false);
const fieldErrors = reactive({ username: '', email: '', currentPassword: '', newPassword: '' });

const hasChanges = computed(() => {
  return (
    form.username !== originalProfile.value.username ||
    form.email !== originalProfile.value.email ||
    form.newPassword.length > 0
  );
});

function clearFieldErrors() {
  fieldErrors.username = '';
  fieldErrors.email = '';
  fieldErrors.currentPassword = '';
  fieldErrors.newPassword = '';
}

function validate(): boolean {
  clearFieldErrors();
  let valid = true;

  if (form.username && form.username.length < 3) {
    fieldErrors.username = 'Kullanıcı adı en az 3 karakter olmalı';
    valid = false;
  } else if (form.username && !/^[a-z0-9._]+$/.test(form.username)) {
    fieldErrors.username = 'Sadece küçük harf, rakam, nokta ve alt çizgi kullanılabilir';
    valid = false;
  }

  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    fieldErrors.email = 'Geçerli bir e-posta adresi girin';
    valid = false;
  }

  if ((form.email !== originalProfile.value.email || form.newPassword) && !form.currentPassword) {
    fieldErrors.currentPassword = 'E-posta veya şifre değiştirmek için mevcut şifrenizi girin';
    valid = false;
  }

  if (form.newPassword && form.newPassword.length < 6) {
    fieldErrors.newPassword = 'Yeni şifre en az 6 karakter olmalı';
    valid = false;
  }

  return valid;
}

const submit = async () => {
  if (!validate()) return;

  error.value = '';
  success.value = '';
  loading.value = true;

  const token = localStorage.getItem('pb_token');
  if (!token) { router.push('/auth/login'); return; }

  const body: Record<string, string> = {};
  if (form.username !== originalProfile.value.username) body.username = form.username;
  if (form.email !== originalProfile.value.email) body.email = form.email;
  if (form.currentPassword) body.currentPassword = form.currentPassword;
  if (form.newPassword) body.newPassword = form.newPassword;

  try {
    await $fetch('/api/users/me', {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}` },
      body,
    });
    success.value = 'Profil başarıyla güncellendi!';
    // Update original to reflect changes
    if (body.username) originalProfile.value.username = body.username;
    if (body.email) originalProfile.value.email = body.email;
    form.currentPassword = '';
    form.newPassword = '';
    // Redirect after short delay
    setTimeout(() => router.push('/profile'), 1200);
  } catch (e: unknown) {
    const data = (e as { data?: { message?: string; error?: string } })?.data;
    error.value = data?.message || data?.error || 'Güncelleme başarısız. Tekrar deneyin.';
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  const token = localStorage.getItem('pb_token');
  if (!token) { router.push('/auth/login'); return; }

  try {
    const user = await $fetch<{ username: string; email: string }>('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    originalProfile.value = { username: user.username, email: user.email };
    form.username = user.username;
    form.email = user.email;
  } catch {
    router.push('/auth/login');
  }
});
</script>
