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
const { activeExamTypeId } = useExamContent()

const showRightPanel = computed(() => !route.path.startsWith('/quiz/'))

const isMobile = ref(false)

function onResize() {
  isMobile.value = window.innerWidth < 1024
}

onMounted(async () => {
  onResize()
  window.addEventListener('resize', onResize)
  await init()

  // 1. Durum: Misafir kullanıcı ve henüz bir sınav seçmemiş
  const isGuestWithoutExam = !isLoggedIn.value && !localStorage.getItem('pb_token') && !localStorage.getItem('guestExamTypeId')
  
  // 2. Durum: Giriş yapmış üye, ama veritabanında aktif bir sınavı yok (Belki sildi, belki db sıfırlandı)
  const isUserWithoutExam = isLoggedIn.value && !activeExamTypeId.value

  // 3. Durum: Token var ama init() oturum açamadı (kullanıcı DB'den silindi, token geçersiz)
  const hasStaleToken = !isLoggedIn.value && !!localStorage.getItem('pb_token')
  if (hasStaleToken) {
    localStorage.removeItem('pb_token')
  }

  if (route.path === '/' && (isGuestWithoutExam || isUserWithoutExam || hasStaleToken)) {
    navigateTo('/welcome')
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  stopEnergyCountdown()
})
</script>
