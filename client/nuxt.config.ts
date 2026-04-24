export default defineNuxtConfig({
  compatibilityDate: "2025-05-10",
  ssr: false,
  devtools: { enabled: false },
  
  modules: ["@nuxtjs/tailwindcss"],
  
  app: {
    head: {
      title: "Pracby",
      link: [
        { 
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg"
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        // Nunito fontu Duolingo/Oyunlaştırma teması için harika bir seçim!
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap",
        },
      ],
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