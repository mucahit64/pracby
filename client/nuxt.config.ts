export default defineNuxtConfig({
  compatibilityDate: "2025-05-10",
  devtools: { enabled: false },
  
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxtjs/sitemap"
  ],

  site: {
    url: "https://www.pracby.com",
    name: "Pracby",
    description: "KPSS'ye çalışmanın en eğlenceli yolu. Hemen test çözmeye başla!",
  },
  
  app: {
    head: {
      title: "Pracby",
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "alternate icon",type: "image/png",href: "/p-icon.png" },
        { rel: "apple-touch-icon",href: "/p-icon.png" },
        { rel: "manifest",href: "/manifest.json" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" },
      ],
      meta: [
        // Mobil tarayıcıların adres çubuğunu mor yapar
        { name: "theme-color", content: "#7c3aed" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" }
      ]
    },
  },
  
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:3000",
    },
  },
  
  nitro: {
    routeRules: {
      "/api/**": { proxy: `${process.env.NUXT_PUBLIC_API_BASE || "http://localhost:3000"}/api/**` },
    },
  },
});