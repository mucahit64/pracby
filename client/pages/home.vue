<template>
  <div class="min-h-screen bg-[#f7f8fc] text-gray-900">
    <header class="border-b border-gray-200 bg-white/95">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
        <NuxtLink to="/" class="flex items-center gap-3" aria-label="Pracby ana sayfa">
          <img src="/p-icon.png" alt="" class="h-8 w-8 rounded-md sm:h-10 sm:w-10 sm:rounded-lg">
          <span class="text-xl font-black text-primary sm:text-2xl">Pracby</span>
        </NuxtLink>
        <nav class="flex items-center gap-1 sm:gap-2" aria-label="Ana navigasyon">
          <NuxtLink to="/auth/login" class="px-2 py-2 text-xs font-extrabold text-gray-700 hover:text-primary sm:px-4 sm:text-sm">
            Giriş yap
          </NuxtLink>
          <NuxtLink to="/auth/register" class="rounded-md bg-gray-900 px-3 py-2.5 text-xs font-extrabold text-white hover:bg-gray-800 sm:rounded-lg sm:px-4 sm:text-sm">
            Hesap oluştur
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main>
      <section class="flex min-h-[calc(100vh-73px)] items-center border-b border-gray-200 bg-white px-4 py-16 sm:px-5 sm:py-24">
        <div class="mx-auto w-full max-w-2xl text-center">
          <p class="text-sm font-black uppercase text-primary">KPSS soru çözme ve tekrar</p>
          <h1 class="mt-4 text-4xl font-black leading-tight text-gray-950 sm:text-6xl">
            Hazırlanmak için küçük bir adım yeter.
          </h1>
          <p class="mx-auto mt-5 max-w-xl text-base font-semibold leading-7 text-gray-600 sm:text-lg sm:leading-8">
            KPSS konularını kısa alıştırmalarla pekiştir, ilerlemeni takip et ve kaldığın yerden devam et.
          </p>
          <div class="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <NuxtLink to="/welcome" class="rounded-lg bg-primary px-7 py-3.5 text-base font-black text-white transition-colors hover:bg-primary-dark">
              Başla
            </NuxtLink>
            <NuxtLink to="/auth/login" class="rounded-lg border-2 border-gray-300 bg-white px-7 py-3 text-base font-black text-gray-800 transition-colors hover:border-primary hover:text-primary">
              Zaten hesabım var
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="flex border-b border-gray-200 bg-[#f7f8fc] md:min-h-[620px] md:items-center">
        <div class="mx-auto w-full max-w-6xl px-4 py-16 sm:px-5 sm:py-20">
          <div class="max-w-2xl">
            <p class="text-sm font-black uppercase text-positive">Çalışma düzeni</p>
            <h2 class="mt-3 text-2xl font-black text-gray-950 sm:text-3xl">Uzun oturumlar yerine düzenli pratik</h2>
          </div>
          <div class="mt-7 grid gap-px overflow-hidden border border-gray-200 bg-gray-200 sm:mt-10 md:grid-cols-3">
            <article class="bg-white p-5 sm:p-7">
              <span class="text-sm font-black text-primary">01</span>
              <h3 class="mt-4 text-xl font-black">Konunu seç</h3>
              <p class="mt-3 font-semibold leading-7 text-gray-600">KPSS derslerini ve konu adımlarını kendi sırana göre ilerlet.</p>
            </article>
            <article class="bg-white p-5 sm:p-7">
              <span class="text-sm font-black text-info">02</span>
              <h3 class="mt-4 text-xl font-black">Soruları çöz</h3>
              <p class="mt-3 font-semibold leading-7 text-gray-600">Kısa testlerle bilgini yokla ve açıklamalarla yanlışlarını gözden geçir.</p>
            </article>
            <article class="bg-white p-5 sm:p-7">
              <span class="text-sm font-black text-positive">03</span>
              <h3 class="mt-4 text-xl font-black">İlerlemeni izle</h3>
              <p class="mt-3 font-semibold leading-7 text-gray-600">Puanlarını, tamamladığın adımları ve çalışma serini tek yerde gör.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="flex bg-white md:min-h-[560px] md:items-center">
        <div class="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:gap-10 sm:px-5 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p class="text-sm font-black uppercase text-warning">Kapsam</p>
            <h2 class="mt-3 text-2xl font-black sm:text-3xl">KPSS Genel Yetenek ve Genel Kültür</h2>
            <p class="mt-4 font-semibold leading-7 text-gray-600">Pracby içeriği konu adımlarına ayrılır. Böylece nerede kaldığını kaybetmeden çalışmaya devam edebilirsin.</p>
          </div>
          <ul class="grid gap-3 sm:grid-cols-2" aria-label="Pracby dersleri">
            <li v-for="course in courses" :key="course.name" class="flex items-center gap-3 border-b-2 border-gray-200 px-2 py-4 font-extrabold">
              <span class="text-xl" aria-hidden="true">{{ course.icon }}</span>
              {{ course.name }}
            </li>
          </ul>
        </div>
      </section>

      <section class="flex bg-gray-950 text-white md:min-h-[420px] md:items-center">
        <div class="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-5 px-4 py-16 sm:gap-6 sm:px-5 sm:py-20 sm:flex-row sm:items-center">
          <div>
            <h2 class="text-2xl font-black sm:text-3xl">İlk alıştırmanı şimdi çöz.</h2>
            <p class="mt-2 font-semibold text-gray-300">Üyelik oluşturmadan başlayabilirsin.</p>
          </div>
          <NuxtLink to="/welcome" class="shrink-0 rounded-md bg-positive px-5 py-3 text-sm font-black text-gray-950 hover:bg-[#65df0b] sm:rounded-lg sm:px-6 sm:py-3.5 sm:text-base">
            Ücretsiz başla
          </NuxtLink>
        </div>
      </section>
    </main>

    <footer class="border-t border-gray-200 bg-white">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm font-semibold text-gray-500 sm:px-5 sm:py-7 sm:flex-row sm:items-center sm:justify-between">
        <span>© {{ new Date().getFullYear() }} Pracby</span>
        <div class="flex gap-5">
          <NuxtLink to="/auth/login" class="hover:text-primary">Giriş yap</NuxtLink>
          <NuxtLink to="/auth/register" class="hover:text-primary">Kayıt ol</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const courses = [
  { name: 'Tarih', icon: '🏛️' },
  { name: 'Coğrafya', icon: '🌍' },
  { name: 'Vatandaşlık', icon: '⚖️' },
  { name: 'Türkçe', icon: '📖' },
  { name: 'Matematik', icon: '➗' },
]

useSeoMeta({
  title: 'KPSS Soru Çözme ve Tekrar Platformu',
  description: 'Pracby ile KPSS tarih, coğrafya, vatandaşlık, Türkçe ve matematik sorularını kısa alıştırmalarla çöz, konu ilerlemeni takip et.',
  ogTitle: 'Pracby | KPSS Soru Çözme ve Tekrar Platformu',
  ogSiteName: 'Pracby',
  ogDescription: 'KPSS konularını kısa testlerle pekiştir, yanlışlarını gözden geçir ve ilerlemeni takip et.',
  ogType: 'website',
  ogUrl: 'https://pracby.com/',
  ogImage: 'https://pracby.com/p-icon.png',
  twitterCard: 'summary',
  twitterTitle: 'Pracby | KPSS Soru Çözme ve Tekrar',
  twitterDescription: 'KPSS konularını kısa testlerle pekiştir ve ilerlemeni takip et.',
  twitterImage: 'https://pracby.com/p-icon.png',
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://pracby.com/' }],
})

onMounted(async () => {
  const token = localStorage.getItem('pb_token')
  if (!token) return

  try {
    await $fetch('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
    await navigateTo('/learn', { replace: true })
  } catch (error) {
    if (!error || typeof error !== 'object') return

    const status = 'statusCode' in error
      ? error.statusCode
      : 'status' in error
        ? error.status
        : undefined

    if (status === 401 || status === 403) {
      localStorage.removeItem('pb_token')
    }
  }
})

</script>
