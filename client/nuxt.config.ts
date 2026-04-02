export default defineNuxtConfig({
  compatibilityDate: "2025-05-10",
  devtools: { enabled: false },
  modules: ["nuxt-quasar-ui"],
  build: {
    transpile: ["quasar"],
  },
  quasar: {
    plugins: ["Notify", "Dialog"],
    extras: {
      fontIcons: ["material-icons"],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:3000",
    },
  },
});
