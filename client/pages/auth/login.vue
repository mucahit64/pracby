<template>
  <div class="min-h-screen flex items-center justify-center bg-white px-6 relative">
    <div class="w-full max-w-[420px] bg-white border-2 border-gray-200 rounded-3xl p-10 flex flex-col gap-6">
      <div class="flex items-center justify-between">
        <div class="w-10" />
        <h1 class="text-3xl font-black text-primary">pracby</h1>
        <NuxtLink to="/" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border-2 border-gray-200 text-gray-800 font-bold hover:bg-gray-200 transition-colors">✕</NuxtLink>
      </div>

      <h2 class="text-xl font-extrabold text-gray-800 text-center -mt-2">Tekrar hoş geldin!</h2>

      <form class="flex flex-col gap-4" @submit.prevent="submit">
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-bold text-gray-400 uppercase tracking-wide">E-posta veya Kullanıcı Adı</label>
          <input
            v-model="form.identifier"
            type="text"
            class="bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-base font-[inherit] outline-none transition-colors focus:border-primary"
            placeholder="E-posta veya kullanıcı adı"
            autocomplete="username"
            required
          >
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-bold text-gray-400 uppercase tracking-wide">Şifre</label>
          <div class="relative flex items-center">
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-base font-[inherit] outline-none transition-colors focus:border-primary"
              placeholder="••••••"
              autocomplete="current-password"
              required
            >
            <button type="button" class="absolute right-2.5 bg-transparent border-0 cursor-pointer text-lg p-1 text-gray-400" tabindex="-1" @click="showPassword = !showPassword">
              {{ showPassword ? '🙈' : '🐵' }}
            </button>
          </div>
          <div class="flex justify-end -mt-0.5">
            <NuxtLink to="/auth/forgot-password" class="text-xs text-gray-400 hover:text-primary font-semibold transition-colors">Şifremi unuttum</NuxtLink>
          </div>
        </div>

        <p v-if="error" class="text-negative text-sm font-semibold text-center">{{ error }}</p>

        <button type="submit" class="w-full bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-1" :disabled="loading">
          <span v-if="loading">Giriş yapılıyor…</span>
          <span v-else>Giriş Yap</span>
        </button>
      </form>

      <p class="text-center text-sm text-gray-400">
        Hesabın yok mu?
        <NuxtLink to="/auth/register" class="text-primary font-bold underline">Kayıt Ol</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGuestState } from '~/composables/useGuestState';

definePageMeta({ layout: false });

useHead({
  title: 'Giriş Yap',
  meta: [
    { name: "description", content: "Pracby ile KPSS Tarih, Coğrafya ve Vatandaşlık derslerini oyun oynayarak, sıkılmadan öğrenin. 3D haritalı ve oyunlaştırılmış soru çözüm platformu." },
    { property: "og:title", content: "Pracby | Oyunlaştırılmış KPSS Platformu" },
    { property: "og:description", content: "KPSS'ye çalışmanın en eğlenceli yolu. Hemen test çözmeye başla!" },
    { property: "og:type", content: "website" }
  ]
});

const router = useRouter();
const form = reactive({ identifier: '', password: '' });
const error = ref('');
const loading = ref(false);

const showPassword = ref(false);

const submit = async () => {
  error.value = '';
  loading.value = true;
  try {
    const data = await $fetch<{ token: string }>('/api/auth/login', {
      method: 'POST',
      body: form,
    });
    localStorage.setItem('pb_token', data.token);

    // Merge guest progress if any
    const { state, clearGuestState } = useGuestState();
    const earnedAcorns = Math.max(0, state.value.acornBalance - 500);
    const hasGuestProgress =
      state.value.quizResults.length > 0 ||
      state.value.claimedRewardStepIds.length > 0 ||
      earnedAcorns > 0;
    if (hasGuestProgress) {
      try {
        await $fetch('/api/auth/merge-guest-progress', {
          method: 'POST',
          headers: { Authorization: `Bearer ${data.token}` },
          body: {
            quiz_results: state.value.quizResults,
            claimed_rewards: state.value.claimedRewardStepIds,
            earned_acorns: earnedAcorns,
          },
        });
        clearGuestState();
      } catch {
        // Merge failed — keep guest data for retry on next login
      }
    } else {
      clearGuestState();
    }

    await router.push('/');
  } catch (e: unknown) {
    const err = e as { data?: { message?: string } };
    error.value = err?.data?.message ?? 'Giriş başarısız. Bilgilerini kontrol et.';
  } finally {
    loading.value = false;
  }
};
</script>
