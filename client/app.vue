<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

useHead({
  htmlAttrs: { lang: 'tr' },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Pracby` : 'Pracby';
  },
  meta: [
    { 
      name: "description", 
      content: "Pracby ile KPSS Tarih, Coğrafya ve Vatandaşlık derslerini oyun oynayarak, sıkılmadan öğrenin. 3D haritalı ve oyunlaştırılmış soru çözüm platformu." 
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    
    { property: "og:title", content: "Pracby | Oyunlaştırılmış KPSS Platformu" },
    { property: "og:description", content: "KPSS'ye çalışmanın en eğlenceli yolu. Hemen test çözmeye başla!" },
    { property: "og:type", content: "website" },
    { name: "robots", content: "index, follow" }
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap",
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: 'Pracby',
            url: siteUrl,
            logo: `${siteUrl}/p-icon.png`,
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            name: 'Pracby',
            url: siteUrl,
            inLanguage: 'tr-TR',
            publisher: { '@id': `${siteUrl}/#organization` },
          },
        ],
      }),
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

html, body, #__nuxt {
  height: 100%;
  background: #ffffff;
  color: #1f2937;
  font-family: 'Nunito', 'Segoe UI', sans-serif;
}

a { text-decoration: none; color: inherit; }

.scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
.scrollbar-hide::-webkit-scrollbar { display: none; }

/* Bottom-sheet slide-up animation */
@keyframes slideUp {
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
.animate-slide-up { animation: slideUp 0.28s cubic-bezier(0.32, 0.72, 0, 1) both; }

/* Vue <transition name="fade"> — overlay fade */
.fade-enter-active,
.fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

/* Vue <Transition name="dialog-fade"> — used in index.vue dialogs */
.dialog-fade-enter-active,
.dialog-fade-leave-active { transition: opacity 0.2s ease; }
.dialog-fade-enter-from,
.dialog-fade-leave-to { opacity: 0; }
</style>