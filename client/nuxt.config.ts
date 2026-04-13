export default defineNuxtConfig({
  compatibilityDate: "2025-05-10",
  ssr: false,
  devtools: { enabled: false },
  modules: ["nuxt-quasar-ui"],
  build: {
    transpile: ["quasar"],
  },
  quasar: {
    plugins: ["Notify", "Dialog"],
    config: {
      dark: true,
      brand: {
        primary: "#7c3aed",
        secondary: "#8b5cf6",
        accent: "#c4b5fd",
        positive: "#58cc02",
        negative: "#ff4b4b",
        warning: "#ff9600",
        info: "#1cb0f6",
        dark: "#131221",
        "dark-page": "#131221",
      },
    },
    extras: {
      fontIcons: ["material-icons"],
    },
  },
  app: {
    head: {
      title: "Pracby",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
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

