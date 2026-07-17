export default defineNuxtConfig({
  compatibilityDate: "2025-05-10",
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      apiBase: "/api",
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://pracby.com",
    },
  },

  hooks: {
    "pages:extend"(pages) {
      const learningPage = pages.find((page) => page.name === "index");
      if (learningPage) learningPage.path = "/learn";

      const homePage = pages.find((page) => page.name === "home");
      if (homePage) homePage.path = "/";
    },
  },
  
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
  ],
  
  app: {
    head: {
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
  
  nitro: {
    routeRules: {
      "/api/**": { proxy: `${process.env.API_INTERNAL_BASE || "http://localhost:3000"}/api/**` },
      "/learn": { headers: { "X-Robots-Tag": "noindex, follow" } },
      "/quiz/**": { headers: { "X-Robots-Tag": "noindex, follow" } },
      "/auth/**": { headers: { "X-Robots-Tag": "noindex, follow" } },
      "/profile/**": { headers: { "X-Robots-Tag": "noindex, follow" } },
      "/admin/**": { headers: { "X-Robots-Tag": "noindex, follow" } },
      "/store": { headers: { "X-Robots-Tag": "noindex, follow" } },
      "/leaderboard": { headers: { "X-Robots-Tag": "noindex, follow" } },
      "/welcome": { headers: { "X-Robots-Tag": "noindex, follow" } },
    },
  },
});