<template>
  <div class="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 relative">
    <div class="w-full max-w-[420px] bg-white border-2 border-gray-200 rounded-2xl p-5 flex flex-col gap-5 sm:rounded-3xl sm:p-10 sm:gap-6">
      <div class="flex items-center justify-between">
        <div class="w-10" />
        <h1 class="text-3xl font-black text-primary">pracby</h1>
        <button type="button" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border-2 border-gray-200 text-gray-800 font-bold hover:bg-gray-200 transition-colors cursor-pointer font-[inherit]" aria-label="Geri dön" @click="handleClose">✕</button>
      </div>

      <!-- Başarı ekranı -->
      <template v-if="submitted">
        <div class="flex flex-col items-center gap-4 py-2">
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl">📬</div>
          <h2 class="text-xl font-extrabold text-gray-800 text-center">E-posta gönderildi</h2>
          <p class="text-sm text-gray-500 text-center leading-relaxed">
            Eğer bu adres kayıtlıysa, şifre sıfırlama bağlantısı gönderildi.<br >
            Spam klasörünü de kontrol etmeyi unutma.
          </p>
          <NuxtLink to="/auth/login" class="w-full mt-2 bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 text-center block">
            Giriş Yap
          </NuxtLink>
        </div>
      </template>

      <!-- Form -->
      <template v-else>
        <div class="flex flex-col gap-1 -mt-2">
          <h2 class="text-xl font-extrabold text-gray-800 text-center">Şifreni mi unuttun?</h2>
          <p class="text-sm text-gray-500 text-center">E-postanı gir, sıfırlama bağlantısı gönderelim.</p>
        </div>

        <form class="flex flex-col gap-4" @submit.prevent="submit">
          <div class="flex flex-col gap-1.5">
            <label class="text-sm font-bold text-gray-400 uppercase tracking-wide">E-posta</label>
            <input
              v-model="email"
              type="email"
              class="bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-base font-[inherit] outline-none transition-colors focus:border-primary"
              placeholder="you@example.com"
              autocomplete="email"
              required
            >
          </div>

          <p v-if="error" class="text-negative text-sm font-semibold text-center">{{ error }}</p>

          <button
            type="submit"
            class="w-full bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            :disabled="loading"
          >
            <span v-if="loading">Gönderiliyor…</span>
            <span v-else>Bağlantı Gönder</span>
          </button>
        </form>

        <p class="text-center text-sm text-gray-400">
          Şifreni hatırladın mı?
          <NuxtLink to="/auth/login" class="text-primary font-bold underline">Giriş Yap</NuxtLink>
        </p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

useHead({
  title: 'Şifremi Unuttum',
  meta: [
    { name: "description", content: "Pracby ile KPSS Tarih, Coğrafya ve Vatandaşlık derslerini oyun oynayarak, sıkılmadan öğrenin. 3D haritalı ve oyunlaştırılmış soru çözüm platformu." },
    { property: "og:title", content: "Pracby | Oyunlaştırılmış KPSS Platformu" },
    { property: "og:description", content: "KPSS'ye çalışmanın en eğlenceli yolu. Hemen test çözmeye başla!" },
    { property: "og:type", content: "website" }
  ]
});

const router = useRouter();

function handleClose() {
  if (window.history.length > 1) router.back();
  else navigateTo('/auth/login', { replace: true });
}

const email = ref('');
const error = ref('');
const loading = ref(false);
const submitted = ref(false);

const submit = async () => {
  error.value = '';
  loading.value = true;
  try {
    await $fetch('/api/auth/forgot-password', {
      method: 'POST',
      body: { email: email.value },
    });
    submitted.value = true;
  } catch {
    // Her durumda başarı mesajı göster — enumeration koruması
    submitted.value = true;
  } finally {
    loading.value = false;
  }
};
</script>
