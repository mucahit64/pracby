<template>
  <aside class="w-64 min-w-[256px] sticky top-0 h-screen border-r-2 border-gray-200 flex flex-col py-6 px-4 overflow-y-auto">
    <!-- Logo -->
    <NuxtLink to="/" class="flex items-center gap-2.5 px-4 py-4 mb-2">
      <span class="text-2xl font-black text-primary tracking-tight">pracby</span>
    </NuxtLink>

    <!-- Navigation -->
    <nav class="flex flex-col gap-1 flex-1">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-bold text-gray-600 uppercase tracking-wide border-2 border-transparent transition-all duration-150 hover:bg-gray-100 hover:text-gray-800"
        :class="{ '!bg-primary/10 !text-primary !border-primary/30': isActive(item) }"
      >
        <span class="text-xl w-7 text-center">{{ item.emoji }}</span>
        <span class="text-sm tracking-widest">{{ item.label }}</span>
      </NuxtLink>
    </nav>

    <!-- Admin panel link for users with view_admin_panel permission -->
    <NuxtLink
      v-if="hasPermission('view_admin_panel')"
      to="/admin"
      class="flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-bold text-gray-600 uppercase tracking-wide border-2 border-transparent transition-all duration-150 hover:bg-primary/10 hover:text-primary"
    >
      <span class="text-xl w-7 text-center">⚙️</span>
      <span class="text-sm tracking-widest">PANEL</span>
    </NuxtLink>

    <!-- Exam switcher (only when multiple enrollments) -->
    <div v-if="enrollments.length > 1" class="border-t-2 border-gray-200 pt-4 flex flex-col gap-1.5">
      <div class="text-[0.7rem] font-bold text-gray-400 uppercase tracking-widest px-2 pb-1">Sınav</div>
      <button
        v-for="enr in enrollments"
        :key="enr.exam_type_id"
        class="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border-2 border-transparent bg-transparent text-sm font-bold text-gray-400 cursor-pointer transition-all duration-150 hover:bg-gray-100 hover:text-gray-800 font-[inherit]"
        :class="{ '!bg-primary/10 !text-primary !border-primary/30': enr.exam_type_id === activeExamTypeId }"
        @click="switchExam(enr.exam_type_id)"
      >
        <span class="truncate">{{ enr.exam_type_name }}</span>
        <span v-if="enr.exam_type_id === activeExamTypeId" class="w-2 h-2 bg-primary rounded-full shrink-0" />
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
const route = useRoute()
const { enrollments, activeExamTypeId, isLoggedIn, switchExam } = useUserSession()
const { hasPermission } = useRBAC()

const navItems = computed(() => [
  { emoji: '📚', label: 'ÖĞREN', to: '/', exact: true },
  { emoji: '🏆', label: 'LİDERLİK', to: '/leaderboard', exact: false },
  { emoji: '🌰', label: 'MARKET', to: '/store', exact: false },
  { emoji: '👤', label: 'PROFİL', to: isLoggedIn.value ? '/profile' : '/auth/register', exact: false },
])

function isActive(item: { to: string; exact?: boolean }) {
  return item.exact ? route.path === item.to : route.path.startsWith(item.to)
}
</script>
