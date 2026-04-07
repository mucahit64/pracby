<template>
  <!-- Mobile top bar -->
  <header v-if="isMobile" class="pb-mobile-header">
    <div class="pb-mobile-header-stats">
      <span class="pb-mobile-stat">🔥 {{ 7 }}</span>
      <span class="pb-mobile-stat">💎 {{ 500 }}</span>
      <span class="pb-mobile-stat">❤️ {{ 5 }}</span>
    </div>
  </header>

  <div class="pb-app-shell">
    <!-- Left Sidebar -->
    <aside class="pb-sidebar" :class="{ 'pb-sidebar-mobile': isMobile, 'pb-sidebar-open': mobileMenuOpen }">
      <!-- Logo -->
      <NuxtLink to="/" class="pb-logo-link">
        <PbMascot :width="44" :height="55" />
        <span class="pb-logo-text">pracby</span>
      </NuxtLink>

      <!-- Navigation -->
      <nav class="pb-nav">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="pb-nav-item"
          active-class="pb-nav-item--active"
          :exact="item.exact"
        >
          <span class="pb-nav-emoji">{{ item.emoji }}</span>
          <span class="pb-nav-label">{{ item.label }}</span>
        </NuxtLink>
      </nav>
    </aside>

    <!-- Main content area -->
    <main class="pb-main">
      <slot />
    </main>

    <!-- Right panel (hidden on quiz pages and mobile) -->
    <aside v-if="showRightPanel && !isMobile" class="pb-right-panel-wrapper">
      <PbRightPanel />
    </aside>
  </div>

  <!-- Mobile bottom nav -->
  <nav v-if="isMobile" class="pb-bottom-nav">
    <NuxtLink
      v-for="item in navItems"
      :key="item.to"
      :to="item.to"
      class="pb-bottom-nav-item"
      active-class="pb-bottom-nav-item--active"
      :exact="item.exact"
    >
      <span class="pb-bottom-nav-icon">{{ item.emoji }}</span>
      <span class="pb-bottom-nav-label">{{ item.label }}</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const showRightPanel = computed(() => !route.path.startsWith('/quiz/'));

const mobileMenuOpen = ref(false);

const screen = ref({ lt: { md: false } });

onMounted(() => {
  const token = localStorage.getItem('pb_token');
  if (!token) {
    router.replace('/auth/login');
    return;
  }

  const checkMobile = () => {
    screen.value.lt.md = window.innerWidth < 900;
  };
  checkMobile();
  window.addEventListener('resize', checkMobile);
  onUnmounted(() => window.removeEventListener('resize', checkMobile));
});

const isMobile = computed(() => screen.value.lt.md);

const navItems = [
  { emoji: '📚', label: 'Öğren', to: '/', exact: true },
  { emoji: '🏆', label: 'Liderlik', to: '/leaderboard', exact: false },
  { emoji: '👤', label: 'Profil', to: '/profile', exact: false },
];
</script>

<style>
/* ===== Global CSS Variables ===== */
:root {
  --pb-purple: #7c3aed;
  --pb-purple-light: #8b5cf6;
  --pb-purple-dark: #6d28d9;
  --pb-purple-xlight: #ede9fe;
  --pb-bg: #131221;
  --pb-bg-card: #1e1c35;
  --pb-bg-card-hover: #252342;
  --pb-text: #e8e7f4;
  --pb-text-muted: #7a79a0;
  --pb-border: #2d2b50;
  --pb-green: #58cc02;
  --pb-green-dark: #45a000;
  --pb-green-bg: #0d3d00;
  --pb-red: #ff4b4b;
  --pb-red-bg: #3d0000;
  --pb-gold: #ffd700;
  --pb-orange: #ff9600;
  --pb-blue: #1cb0f6;
  --pb-sidebar-width: 250px;
  --pb-right-panel-width: 296px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html, body, #__nuxt {
  height: 100%;
  background: var(--pb-bg);
  color: var(--pb-text);
  font-family: 'Nunito', 'Segoe UI', sans-serif;
}

a { text-decoration: none; color: inherit; }

/* ===== App Shell ===== */
.pb-app-shell {
  display: flex;
  min-height: 100vh;
  min-height: 100dvh;
}

/* ===== Sidebar ===== */
.pb-sidebar {
  width: var(--pb-sidebar-width);
  min-width: var(--pb-sidebar-width);
  background: var(--pb-bg);
  border-right: 2px solid var(--pb-border);
  display: flex;
  flex-direction: column;
  padding: 24px 16px 32px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.pb-sidebar-mobile {
  display: none;
}

.pb-logo-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 8px 20px;
  text-decoration: none;
}

.pb-logo-text {
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--pb-purple-light);
  letter-spacing: -0.5px;
}

.pb-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.pb-nav-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 13px 16px;
  border-radius: 14px;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--pb-text-muted);
  border: 2px solid transparent;
  transition: all 0.15s ease;
  letter-spacing: 0.02em;
}

.pb-nav-item:hover {
  background: var(--pb-bg-card);
  color: var(--pb-text);
}

.pb-nav-item--active {
  background: rgba(124, 58, 237, 0.15);
  color: var(--pb-purple-light);
  border-color: rgba(124, 58, 237, 0.3);
}

.pb-nav-emoji {
  font-size: 1.3rem;
  width: 28px;
  text-align: center;
}

.pb-nav-label {
  text-transform: uppercase;
  font-size: 0.82rem;
  letter-spacing: 0.06em;
}

/* ===== Main Content ===== */
.pb-main {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  padding: 24px 16px;
  max-width: 700px;
}

/* ===== Right Panel Wrapper ===== */
.pb-right-panel-wrapper {
  width: var(--pb-right-panel-width);
  min-width: var(--pb-right-panel-width);
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

/* ===== Mobile Header ===== */
.pb-mobile-header {
  display: none;
  background: var(--pb-bg);
  border-bottom: 2px solid var(--pb-border);
  padding: 12px 20px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.pb-mobile-header-stats {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.pb-mobile-stat {
  font-size: 1rem;
  font-weight: 800;
  color: var(--pb-text);
}

/* ===== Mobile Bottom Nav ===== */
.pb-bottom-nav {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--pb-bg);
  border-top: 2px solid var(--pb-border);
  padding: 8px 0 calc(8px + env(safe-area-inset-bottom));
  z-index: 200;
  justify-content: space-around;
}

.pb-bottom-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 6px 20px;
  color: var(--pb-text-muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.pb-bottom-nav-icon {
  font-size: 1.3rem;
}

.pb-bottom-nav-item--active {
  color: var(--pb-purple-light);
}

/* ===== Responsive (mobile) ===== */
@media (max-width: 899px) {
  .pb-mobile-header { display: flex; }
  .pb-sidebar { display: none; }
  .pb-right-panel-wrapper { display: none; }
  .pb-bottom-nav { display: flex; }

  .pb-main {
    padding: 16px 12px 80px;
    max-width: 100%;
  }
}

/* ===== Shared Component Styles ===== */
.pb-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--pb-purple);
  color: white;
  border: none;
  border-radius: 14px;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.15s;
  font-family: inherit;
  letter-spacing: 0.04em;
  border-bottom: 4px solid var(--pb-purple-dark);
}

.pb-btn-primary:hover {
  background: var(--pb-purple-light);
  transform: translateY(-1px);
}

.pb-btn-primary:active {
  transform: translateY(2px);
  border-bottom-width: 2px;
}

.pb-btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  color: var(--pb-purple-light);
  border: 2px solid var(--pb-purple-light);
  border-radius: 14px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.15s;
  font-family: inherit;
  letter-spacing: 0.04em;
}

.pb-btn-outline:hover {
  background: rgba(124, 58, 237, 0.1);
}

.pb-card {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 18px;
  padding: 20px;
}

.pb-card:hover {
  background: var(--pb-bg-card-hover);
}

/* Quasar overrides */
.body--dark {
  background: var(--pb-bg) !important;
}
</style>
