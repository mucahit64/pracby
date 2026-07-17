<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 z-[200] flex flex-col pb-[env(safe-area-inset-bottom)]">
    <!-- Exam switcher row (multiple enrollments) -->
    <div v-if="enrollments.length > 1" class="flex gap-1.5 px-3 py-2 overflow-x-auto border-b border-gray-200 scrollbar-hide">
      <button
        v-for="enr in enrollments"
        :key="enr.exam_type_id"
        class="shrink-0 px-3.5 py-1.5 rounded-full border-2 border-gray-200 bg-transparent text-[0.72rem] font-bold text-gray-400 cursor-pointer transition-all duration-150 whitespace-nowrap font-[inherit]"
        :class="{ '!bg-primary/10 !text-primary !border-primary/40': enr.exam_type_id === activeExamTypeId }"
        :disabled="switchingExam"
        @click="handleSwitchExam(enr.exam_type_id)"
      >
        {{ enr.exam_type_name }}
      </button>
    </div>

    <!-- Nav items -->
    <div class="flex justify-around py-2">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="flex flex-col items-center gap-0.5 pb-2 text-[0.60rem] font-bold text-gray-600 uppercase tracking-wide"
        :class="{ '!text-primary': isActive(item) }"
        @click="closeTooltip"
      >
        <span class="text-xl">{{ item.emoji }}</span>
        <span>{{ item.label }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const { enrollments, activeExamTypeId, isLoggedIn, switchExam, switchingExam } = useUserSession()
const { hasPermission } = useRBAC()

const activeTooltip = useState('pbMobileTooltip', () => null)

const navItems = computed(() => {
  const items: Array<{ emoji: string; label: string; to: string; exact: boolean }> = [
    { emoji: '📚', label: 'ÖĞREN', to: '/learn', exact: true },
    { emoji: '🏆', label: 'LİDERLİK', to: '/leaderboard', exact: false },
    { emoji: '🌰', label: 'MARKET', to: '/store', exact: false },
    { emoji: '👤', label: 'PROFİL', to: isLoggedIn.value ? '/profile' : '/auth/register', exact: false },
  ]
  if (hasPermission('view_admin_panel')) {
    items.push({ emoji: '⚙️', label: 'PANEL', to: '/admin', exact: false })
  }
  return items
})

function isActive(item: { to: string; exact?: boolean }) {
  return item.exact ? route.path === item.to : route.path.startsWith(item.to)
}

function closeTooltip() {
  activeTooltip.value = null
}

async function handleSwitchExam(examTypeId: string) {
  closeTooltip()
  await switchExam(examTypeId)
}
</script>

<style scoped>
.scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
.scrollbar-hide::-webkit-scrollbar { display: none; }
</style>