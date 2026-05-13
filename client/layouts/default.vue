<template>
  <LayoutMobileHeader v-if="isMobile" />

  <div class="max-w-7xl mx-auto flex bg-white">
    <LayoutDesktopSidebar v-if="!isMobile" />

    <div class="flex-1 flex justify-center min-w-0">
      <main class="w-full max-w-[700px] min-w-0 px-4 py-6" :class="{ 'max-w-full !px-3 !pb-32 !pt-4': isMobile }">
        <slot />
      </main>

      <aside v-if="showRightPanel && !isMobile" class="w-80 min-w-[320px] shrink-0 overflow-y-auto sticky top-0 h-screen pl-6">
        <PbRightPanel />
      </aside>
    </div>
  </div>

  <LayoutMobileBottomNav v-if="isMobile" />
</template>

<script setup lang="ts">
const route = useRoute()
const { init, stopEnergyCountdown, isLoggedIn } = useUserSession()

const showRightPanel = computed(() => !route.path.startsWith('/quiz/'))

const isMobile = ref(false)

function onResize() {
  isMobile.value = window.innerWidth < 1024
}

onMounted(async () => {
  onResize()
  window.addEventListener('resize', onResize)
  await init()

  // After init, if the user has no active exam (not logged in, no guest exam chosen),
  // redirect to /welcome so they can pick one. Handles the case where a stale
  // pb_token was cleared above (account deleted after a DB rebuild).
  if (
    route.path === '/' &&
    !isLoggedIn.value &&
    !localStorage.getItem('pb_token') &&
    !localStorage.getItem('guestExamTypeId')
  ) {
    navigateTo('/welcome')
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  stopEnergyCountdown()
})
</script>
