export default defineNuxtConfig({
  compatibilityDate: "2025-05-10",
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui"],
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
