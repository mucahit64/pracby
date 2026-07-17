<template>
  <div class="min-h-screen bg-[#f7f8fc] text-gray-900">
    <header class="border-b border-gray-200 bg-white/95">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
        <NuxtLink to="/" class="flex items-center gap-3" aria-label="Pracby ana sayfa">
          <img src="/p-icon.png" alt="" class="h-8 w-8 rounded-md sm:h-10 sm:w-10 sm:rounded-lg">
          <span class="text-xl font-black text-primary sm:text-2xl">pracby</span>
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
      <section class="overflow-hidden border-b border-gray-200 bg-white">
        <div class="mx-auto grid max-w-6xl items-center gap-9 px-4 py-10 sm:min-h-[620px] sm:gap-12 sm:px-5 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div class="max-w-2xl">
            <p class="mb-3 text-xs font-black uppercase text-primary sm:mb-4 sm:text-sm">KPSS soru çözme ve tekrar</p>
            <h1 class="text-3xl font-black leading-[1.12] text-gray-950 sm:text-5xl sm:leading-tight lg:text-6xl">
              KPSS konularını kısa alıştırmalarla pekiştir.
            </h1>
            <p class="mt-5 max-w-xl text-base font-semibold leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              Tarih, coğrafya, vatandaşlık, Türkçe ve matematik sorularını adım adım çöz. İlerlemeni gör, eksiklerine dön ve çalışma serini koru.
            </p>

            <div class="mt-6 max-w-lg border-l-4 border-primary bg-primary/5 p-4 sm:mt-8 sm:p-5">
              <h2 class="text-base font-black text-gray-900 sm:text-lg">Hemen alıştırmaya başla</h2>
              <p class="mt-1 text-sm font-semibold text-gray-600">Bir sınav türü seç. Üye olmadan deneyebilirsin.</p>
              <div v-if="pending" class="mt-4 text-sm font-bold text-gray-500">Sınavlar yükleniyor...</div>
              <div v-else class="mt-4 flex flex-wrap gap-2">
                <button
                  v-for="examType in activeExamTypes"
                  :key="examType.id"
                  type="button"
                  class="rounded-md border-2 border-primary bg-white px-3 py-2.5 text-xs font-black text-primary transition-colors hover:bg-primary hover:text-white sm:rounded-lg sm:px-4 sm:py-3 sm:text-sm"
                  @click="startLearning(examType)"
                >
                  {{ examType.name }}
                </button>
                <NuxtLink
                  v-if="activeExamTypes.length === 0"
                  to="/welcome"
                  class="rounded-md bg-primary px-4 py-2.5 text-xs font-black text-white sm:rounded-lg sm:px-5 sm:py-3 sm:text-sm"
                >
                  Sınavını seç
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="relative mx-auto w-full max-w-[480px]" aria-label="Pracby öğrenme ekranı önizlemesi">
            <div class="absolute -left-5 top-12 h-24 w-2 bg-positive" />
            <div class="border-2 border-gray-200 bg-white p-4 shadow-[8px_8px_0_0_#111827] sm:p-5 sm:shadow-[12px_12px_0_0_#111827]">
              <div class="flex items-center justify-between border-b border-gray-200 pb-4">
                <div>
                  <div class="text-xs font-black uppercase text-gray-400">Genel Kültür</div>
                  <div class="mt-1 text-xl font-black">Türkiye Coğrafyası</div>
                </div>
                <div class="rounded-lg bg-amber-50 px-3 py-2 text-sm font-black text-amber-700">🔥 7</div>
              </div>
              <div class="mt-5 bg-info p-4 text-white rounded-2xl border-b-4">
                <div class="text-xs font-black uppercase text-white/70">Bölüm 2</div>
                <div class="mt-1 text-lg font-black">Türkiye'nin İklimi</div>
              </div>
              <div class="flex flex-col items-center gap-7 py-8">
                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-positive text-2xl text-white shadow-[0_7px_0_0_#3b8e00]">✓</div>
                <div class="ml-20 flex h-16 w-16 items-center justify-center rounded-full bg-info text-2xl text-white shadow-[0_7px_0_0_#087cad]">📝</div>
                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-2xl text-gray-400 shadow-[0_7px_0_0_#9ca3af]">🔒</div>
              </div>
              <p class="text-center text-sm font-bold text-gray-500">Her adımda kısa testler, anında sonuç ve konu ilerlemesi.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="border-b border-gray-200 bg-[#f7f8fc]">
        <div class="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-16">
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

      <section class="bg-white">
        <div class="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:gap-10 sm:px-5 sm:py-16 lg:grid-cols-[0.8fr_1.2fr]">
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

      <section class="bg-gray-950 text-white">
        <div class="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-4 py-10 sm:gap-6 sm:px-5 sm:py-14 sm:flex-row sm:items-center">
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

interface ExamType {
  id: string
  name: string
  is_active?: boolean
}

interface ExamGroup {
  id: string
  slug: string
  is_active: boolean
  exam_types: ExamType[]
}

const { data: examGroups, pending } = await useFetch<ExamGroup[]>('/api/exam-groups', {
  default: () => [],
})

const activeExamTypes = computed(() => examGroups.value
  .filter(group => group.is_active)
  .flatMap(group => group.exam_types.filter(examType => examType.is_active !== false)))

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

function startLearning(examType: ExamType) {
  localStorage.setItem('guestExamTypeId', examType.id)
  navigateTo('/learn')
}
</script>
