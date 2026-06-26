<template>
  <div class="flex items-center justify-center min-h-[80vh] px-5">
    <div class="flex flex-col items-center gap-4 max-w-[420px] w-full bg-white border-2 border-gray-200 rounded-3xl p-10 text-center">
      <h1 class="text-xl font-black text-gray-800">Harika gidiyorsun! 🎉</h1>
      <p class="text-sm font-semibold text-gray-500 leading-relaxed">
        İlerlemeni kaydetmek ve ücretsiz olarak öğrenmeye devam etmek için bir profil oluştur.
      </p>
      <div class="flex flex-col gap-3 w-full mt-2">
        <NuxtLink to="/auth/register" class="w-full bg-primary text-white font-black text-sm py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 text-center block">Profil Oluştur</NuxtLink>
        <NuxtLink to="/auth/login" class="w-full bg-white text-primary font-extrabold text-sm py-3 rounded-xl border-2 border-primary hover:bg-primary/5 transition-all duration-150 text-center block">Giriş Yap</NuxtLink>
      </div>
      <button class="bg-transparent border-0 text-gray-400 text-sm font-bold cursor-pointer mt-2 hover:text-primary font-[inherit]" @click="navigateTo('/')">← Ana sayfaya dön</button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' });

useHead({
  title: 'Kayıt Ol',
  meta: [
    { name: "description", content: "Pracby ile KPSS Tarih, Coğrafya ve Vatandaşlık derslerini oyun oynayarak, sıkılmadan öğrenin. 3D haritalı ve oyunlaştırılmış soru çözüm platformu." },
    { property: "og:title", content: "Pracby | Oyunlaştırılmış KPSS Platformu" },
    { property: "og:description", content: "KPSS'ye çalışmanın en eğlenceli yolu. Hemen test çözmeye başla!" },
    { property: "og:type", content: "website" }
  ]
});

onMounted(() => {
  if (localStorage.getItem('pb_token')) {
    navigateTo('/');
  }
});
</script>
