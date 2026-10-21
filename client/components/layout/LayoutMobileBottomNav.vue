<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 z-[200] flex flex-col pb-[env(safe-area-inset-bottom)]">
    <!-- Nav items -->
    <!-- Icons only, like the mobile app; the labels stay for screen readers -->
    <div class="flex justify-around py-2">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :aria-label="item.label"
        class="flex items-center justify-center px-5 py-1 rounded-xl transition-colors duration-150"
        :class="{ 'bg-primary/10': isActive(item) }"
        @click="closeTooltip"
      >
        <PbIcon :name="item.icon" class="text-[25px]" />
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const { isLoggedIn } = useUserSession()
const { hasPermission } = useRBAC()

const activeTooltip = useState('pbMobileTooltip', () => null)

const navItems = computed(() => {
  const items: Array<{ icon: string; label: string; to: string; exact: boolean }> = [
    { icon: 'book', label: 'ÖĞREN', to: '/learn', exact: true },
    { icon: 'trophy', label: 'LİDERLİK', to: '/leaderboard', exact: false },
    { icon: 'acorn', label: 'MARKET', to: '/store', exact: false },
    { icon: 'profile', label: 'PROFİL', to: isLoggedIn.value ? '/profile' : '/auth/register', exact: false },
  ]
  if (hasPermission('view_admin_panel')) {
    items.push({ icon: 'settings', label: 'PANEL', to: '/admin', exact: false })
  }
  return items
})

function isActive(item: { to: string; exact?: boolean }) {
  return item.exact ? route.path === item.to : route.path.startsWith(item.to)
}

function closeTooltip() {
  activeTooltip.value = null
}
</script>
