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
