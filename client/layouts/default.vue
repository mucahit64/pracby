<template>
  <div>
    <LayoutMobileHeader v-if="isMobile && showMobileHeader" />

    <LayoutDesktopSidebar v-if="!isMobile" />

    <div class="max-w-7xl mx-auto flex bg-white lg:pl-64">
      <div class="flex-1 flex justify-center min-w-0">
        <main class="w-full max-w-[700px] min-w-0 px-4 py-6" :class="{ 'max-w-full !px-3 !pb-32': isMobile, '!pt-20': isMobile && showMobileHeader }">
          <slot />
        </main>

        <aside v-if="showRightPanel && !isMobile" class="w-80 min-w-[320px] shrink-0 overflow-y-auto sticky top-0 h-screen pl-6">
          <PbRightPanel />
        </aside>
      </div>
    </div>

    <LayoutMobileBottomNav v-if="isMobile" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { init, stopEnergyCountdown, isLoggedIn } = useUserSession()
const { activeExamTypeId } = useExamContent()

const showRightPanel = computed(() => !route.path.startsWith('/quiz/'))
// Like the mobile app: no streak / acorn / energy bar on these pages.
const showMobileHeader = computed(() => !['/leaderboard', '/profile'].some((p) => route.path.startsWith(p)))

const isMobile = ref(false)

function onResize() {
  isMobile.value = window.innerWidth < 1024
}

// Back to the tab (MOBILE_APP_DOCS.md 10.4): energy regenerated in the
// meantime and a new day may have broken the streak, so reload the session.
// The quiz page has its own layout, so a running quiz's energy isn't touched.
function onVisibilityChange() {
  if (document.visibilityState === 'visible') init()
}

onMounted(async () => {
  onResize()
  window.addEventListener('resize', onResize)
  document.addEventListener('visibilitychange', onVisibilityChange)
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

  if (route.path === '/learn' && (isGuestWithoutExam || isUserWithoutExam || hasStaleToken)) {
    navigateTo('/welcome')
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  document.removeEventListener('visibilitychange', onVisibilityChange)
  stopEnergyCountdown()
})
</script>
