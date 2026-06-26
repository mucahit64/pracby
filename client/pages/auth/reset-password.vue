<template>
  <div class="min-h-screen flex items-center justify-center bg-white px-6 relative">
    <div class="w-full max-w-[420px] bg-white border-2 border-gray-200 rounded-3xl p-10 flex flex-col gap-6">
      <div class="flex items-center justify-center">
        <h1 class="text-3xl font-black text-primary">pracby</h1>
      </div>

      <!-- Başarı ekranı -->
      <template v-if="success">
        <div class="flex flex-col items-center gap-4 py-2">
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl">✅</div>
          <h2 class="text-xl font-extrabold text-gray-800 text-center">Şifren güncellendi!</h2>
          <p class="text-sm text-gray-500 text-center">Yeni şifrenle giriş yapabilirsin.</p>
          <NuxtLink to="/auth/login" class="w-full mt-2 bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 text-center block">
            Giriş Yap
          </NuxtLink>
        </div>
      </template>

      <!-- Geçersiz token ekranı -->
      <template v-else-if="!token">
        <div class="flex flex-col items-center gap-4 py-2">
          <div class="w-16 h-16 rounded-full bg-negative/10 flex items-center justify-center text-3xl">⚠️</div>
          <h2 class="text-xl font-extrabold text-gray-800 text-center">Geçersiz bağlantı</h2>
          <p class="text-sm text-gray-500 text-center">Bu bağlantı geçersiz veya süresi dolmuş.</p>
          <NuxtLink to="/auth/forgot-password" class="w-full mt-2 bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 text-center block">
            Yeniden Dene
          </NuxtLink>
        </div>
      </template>

      <!-- Form -->
      <template v-else>
        <div class="flex flex-col gap-1 -mt-2">
          <h2 class="text-xl font-extrabold text-gray-800 text-center">Yeni Şifre Belirle</h2>
          <p class="text-sm text-gray-500 text-center">En az 6 karakter içeren yeni bir şifre gir.</p>
        </div>

        <form class="flex flex-col gap-4" @submit.prevent="submit">
          <div class="flex flex-col gap-1.5">
            <label class="text-sm font-bold text-gray-400 uppercase tracking-wide">Yeni Şifre</label>
            <div class="relative flex items-center">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                class="w-full bg-gray-50 border-2 rounded-xl px-4 py-3 pr-11 text-gray-800 text-base font-[inherit] outline-none transition-colors"
                :class="passwordOk ? 'border-positive' : 'border-gray-200 focus:border-primary'"
                placeholder="En az 6 karakter"
                autocomplete="new-password"
                maxlength="64"
                required
              >
              <button type="button" class="absolute right-2.5 bg-transparent border-0 cursor-pointer text-lg p-1 text-gray-400" tabindex="-1" @click="showPassword = !showPassword">
                {{ showPassword ? '🙈' : '🐵' }}
              </button>
            </div>
          </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-sm font-bold text-gray-400 uppercase tracking-wide">Şifre Tekrar</label>
            <input
              v-model="confirmPassword"
              :type="showPassword ? 'text' : 'password'"
              class="w-full bg-gray-50 border-2 rounded-xl px-4 py-3 text-gray-800 text-base font-[inherit] outline-none transition-colors"
              :class="{
                'border-positive': confirmPassword.length > 0 && passwordsMatch,
                'border-negative': confirmPassword.length > 0 && !passwordsMatch,
                'border-gray-200 focus:border-primary': confirmPassword.length === 0,
              }"
              placeholder="••••••"
              autocomplete="new-password"
              maxlength="64"
              required
            >
            <span v-if="confirmPassword.length > 0 && !passwordsMatch" class="text-xs font-semibold text-negative -mt-0.5">Şifreler eşleşmiyor</span>
          </div>

          <p v-if="error" class="text-negative text-sm font-semibold text-center">{{ error }}</p>

          <button
            type="submit"
            class="w-full bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            :disabled="loading || !passwordOk || !passwordsMatch"
          >
            <span v-if="loading">Güncelleniyor…</span>
            <span v-else>Şifremi Güncelle</span>
          </button>
        </form>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

useHead({
  title: 'Şifre Sıfırlama',
  meta: [
    { name: "description", content: "Pracby ile KPSS Tarih, Coğrafya ve Vatandaşlık derslerini oyun oynayarak, sıkılmadan öğrenin. 3D haritalı ve oyunlaştırılmış soru çözüm platformu." },
    { property: "og:title", content: "Pracby | Oyunlaştırılmış KPSS Platformu" },
    { property: "og:description", content: "KPSS'ye çalışmanın en eğlenceli yolu. Hemen test çözmeye başla!" },
    { property: "og:type", content: "website" }
  ]
});

const route = useRoute();
const token = computed(() => String(route.query.token ?? ''));

const password = ref('');
const confirmPassword = ref('');
const showPassword = ref(false);
const error = ref('');
const loading = ref(false);
const success = ref(false);

const passwordOk = computed(() => password.value.length >= 6);
const passwordsMatch = computed(() => password.value === confirmPassword.value);

const submit = async () => {
  if (!passwordOk.value || !passwordsMatch.value) return;
  error.value = '';
  loading.value = true;
  try {
    await $fetch('/api/auth/reset-password', {
      method: 'POST',
      body: { token: token.value, password: password.value },
    });
    success.value = true;
  } catch (e: unknown) {
    const err = e as { data?: { error?: string } };
    error.value = err?.data?.error ?? 'Bir hata oluştu. Bağlantın süresi dolmuş olabilir.';
  } finally {
    loading.value = false;
  }
};
</script>
