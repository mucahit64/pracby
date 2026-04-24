<template>
  <div class="min-h-screen flex items-center justify-center bg-white px-6 relative">
    <NuxtLink to="/" class="fixed top-5 left-5 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border-2 border-gray-200 text-gray-800 font-bold z-10 hover:bg-gray-200 transition-colors">✕</NuxtLink>
    <div class="w-full max-w-[420px] bg-white border-2 border-gray-200 rounded-3xl p-10 flex flex-col gap-6">
      <div class="flex items-center justify-center gap-3">
        <PbMascot :width="64" :height="80" />
        <h1 class="text-3xl font-black text-primary">pracby</h1>
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
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-bold text-gray-400 uppercase tracking-wide">Şifre</label>
          <input
            v-model="form.password"
            type="password"
            class="bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-base font-[inherit] outline-none transition-colors focus:border-primary"
            placeholder="••••••"
            autocomplete="current-password"
            required
          />
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
definePageMeta({ layout: false });

const router = useRouter();
const form = reactive({ identifier: '', password: '' });
const error = ref('');
const loading = ref(false);

const submit = async () => {
  error.value = '';
  loading.value = true;
  try {
    const data = await $fetch<{ token: string }>('/api/auth/login', {
      method: 'POST',
      body: form,
    });
    localStorage.setItem('pb_token', data.token);
    await router.push('/');
  } catch (e: unknown) {
    const err = e as { data?: { message?: string } };
    error.value = err?.data?.message ?? 'Giriş başarısız. Bilgilerini kontrol et.';
  } finally {
    loading.value = false;
  }
};
</script>
