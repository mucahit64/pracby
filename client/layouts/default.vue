<template>
  <!-- Mobile top bar -->
  <header v-if="isMobile" class="sticky top-0 z-50 flex justify-end bg-white border-b-2 border-gray-200 px-5 py-3">
    <div class="flex items-center gap-5">
      <span class="text-base font-extrabold text-gray-800">🔥 {{ streakCount }}</span>
      <span class="text-base font-extrabold text-gray-800">🌰 {{ acornBalance }}</span>
      <span class="text-base font-extrabold text-gray-800">
        ❤️ {{ heartsCount }}
        <span v-if="heartCountdown" class="ml-1 text-xs font-bold text-white bg-negative px-1.5 py-0.5 rounded-full tabular-nums tracking-wide">{{ heartCountdown }}</span>
      </span>
    </div>
  </header>

  <div class="max-w-7xl mx-auto flex min-h-screen bg-white">
    <!-- Left Sidebar -->
    <aside v-if="!isMobile" class="w-64 min-w-[256px] sticky top-0 h-screen border-r-2 border-gray-200 flex flex-col py-6 px-4 overflow-y-auto">
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
          class="flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-bold text-gray-400 uppercase tracking-wide border-2 border-transparent transition-all duration-150 hover:bg-gray-100 hover:text-gray-800"
          :class="{ '!bg-primary/10 !text-primary !border-primary/30': isActiveRoute(item) }"
        >
          <span class="text-xl w-7 text-center">{{ item.emoji }}</span>
          <span class="text-xs tracking-widest">{{ item.label }}</span>
        </NuxtLink>
      </nav>

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

    <!-- Content area -->
    <div class="flex-1 flex justify-center min-w-0 overflow-y-auto h-screen scrollbar-hide">
      <main class="w-full max-w-[700px] min-w-0 overflow-y-auto px-4 py-6 scrollbar-hide" :class="{ 'max-w-full !px-3 !pb-20 !pt-4': isMobile }">
        <slot />
      </main>

      <!-- Right panel (hidden on quiz pages and mobile) -->
      <aside v-if="showRightPanel && !isMobile" class="w-80 min-w-[320px] shrink-0 overflow-y-auto sticky top-0 h-screen pl-6 py-6">
        <PbRightPanel />
      </aside>
    </div>
  </div>

  <!-- Mobile bottom nav -->
  <nav v-if="isMobile" class="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 z-[200] flex flex-col pb-[env(safe-area-inset-bottom)]">
    <!-- Exam switcher row (mobile, multiple enrollments) -->
    <div v-if="enrollments.length > 1" class="flex gap-1.5 px-3 pt-2 overflow-x-auto border-b border-gray-200">
      <button
        v-for="enr in enrollments"
        :key="enr.exam_type_id"
        class="shrink-0 px-3.5 py-1.5 rounded-full border-2 border-gray-200 bg-transparent text-[0.72rem] font-bold text-gray-400 cursor-pointer transition-all duration-150 whitespace-nowrap font-[inherit]"
        :class="{ '!bg-primary/10 !text-primary !border-primary/40': enr.exam_type_id === activeExamTypeId }"
        @click="switchExam(enr.exam_type_id)"
      >
        {{ enr.exam_type_name }}
      </button>
    </div>
    <div class="flex justify-around py-2">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="flex flex-col items-center gap-0.5 px-5 py-1.5 text-[0.72rem] font-bold text-gray-400 uppercase tracking-wide"
        :class="{ '!text-primary': isActiveRoute(item) }"
      >
        <span class="text-xl">{{ item.emoji }}</span>
        <span>{{ item.label }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const showRightPanel = computed(() => !route.path.startsWith('/quiz/'));

const mobileMenuOpen = ref(false);

const screen = ref({ lt: { md: false } });

function isActiveRoute(item: { to: string; exact?: boolean }) {
  if (item.exact) return route.path === item.to;
  return route.path.startsWith(item.to);
}

onMounted(async () => {
  const checkMobile = () => {
    screen.value.lt.md = window.innerWidth < 1024;
  };
  checkMobile();
  window.addEventListener('resize', checkMobile);
  onUnmounted(() => window.removeEventListener('resize', checkMobile));

  const token = localStorage.getItem('pb_token');
  if (!token) {
    const { state: gs, getNextHeartAt, refreshHearts } = useGuestState();
    refreshHearts();
    setAcornBalance(gs.value.acornBalance);
    heartsCount.value = gs.value.heartsCount;
    nextHeartAt.value = getNextHeartAt()?.toISOString() ?? null;
    startGuestHeartCountdown();
    return;
  }

  try {
    const [user, userStats, enrollmentList] = await Promise.all([
      $fetch<{ acorn_balance?: number; hearts?: number; next_heart_at?: string | null; active_exam_type_id?: string }>('/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      }),
      $fetch<{ streak?: number }>('/api/users/me/stats', {
        headers: { Authorization: `Bearer ${token}` },
      }),
      $fetch<{ exam_type_id: string; exam_type_name: string; exam_group_name: string }[]>('/api/users/me/enrollments', {
        headers: { Authorization: `Bearer ${token}` },
      }),
    ]);
    setAcornBalance(user.acorn_balance ?? 0);
    heartsCount.value = user.hearts ?? 5;
    streakCount.value = userStats.streak ?? 0;
    nextHeartAt.value = user.next_heart_at ?? null;
    activeExamTypeId.value = user.active_exam_type_id ?? '';
    enrollments.value = enrollmentList;
    startHeartCountdown(token);
  } catch { /* skip */ }
});

const isMobile = computed(() => screen.value.lt.md);

const { acornBalance, setAcornBalance } = useAcornBalance();
const streakCount = ref(0);
const heartsCount = useState('userHearts', () => 5);
const heartCountdown = useState('heartCountdown', () => '');
const nextHeartAt = ref<string | null>(null);
let heartTimer: ReturnType<typeof setInterval> | null = null;

function startHeartCountdown(token: string) {
  if (heartTimer) clearInterval(heartTimer);
  heartTimer = setInterval(async () => {
    if (!nextHeartAt.value || heartsCount.value >= 5) {
      heartCountdown.value = '';
      return;
    }
    const diff = new Date(nextHeartAt.value).getTime() - Date.now();
    if (diff <= 0) {
      heartCountdown.value = '';
      try {
        const user = await $fetch<{ hearts?: number; next_heart_at?: string | null }>('/api/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        heartsCount.value = user.hearts ?? heartsCount.value;
        nextHeartAt.value = user.next_heart_at ?? null;
      } catch { /* skip */ }
      return;
    }
    const mins = Math.floor(diff / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    heartCountdown.value = `${mins}:${String(secs).padStart(2, '0')}`;
  }, 1000);
}

function startGuestHeartCountdown() {
  if (heartTimer) clearInterval(heartTimer);
  heartTimer = setInterval(() => {
    if (!nextHeartAt.value || heartsCount.value >= 5) {
      heartCountdown.value = '';
      return;
    }
    const diff = new Date(nextHeartAt.value).getTime() - Date.now();
    if (diff <= 0) {
      heartCountdown.value = '';
      const { state: gs, getNextHeartAt, refreshHearts } = useGuestState();
      refreshHearts();
      heartsCount.value = gs.value.heartsCount;
      nextHeartAt.value = getNextHeartAt()?.toISOString() ?? null;
      return;
    }
    const mins = Math.floor(diff / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    heartCountdown.value = `${mins}:${String(secs).padStart(2, '0')}`;
  }, 1000);
}

onUnmounted(() => {
  if (heartTimer) clearInterval(heartTimer);
});

const navItems = computed(() => [
  { emoji: '📚', label: 'ÖĞREN', to: '/', exact: true },
  { emoji: '🏆', label: 'LİDERLİK', to: '/leaderboard', exact: false },
  { emoji: '🌰', label: 'MARKET', to: '/store', exact: false },
  { emoji: '👤', label: 'PROFİL', to: localStorage.getItem('pb_token') ? '/profile' : '/auth/register', exact: false },
]);

interface Enrollment {
  exam_type_id: string;
  exam_type_name: string;
  exam_group_name: string;
}

const enrollments = ref<Enrollment[]>([]);
const activeExamTypeId = ref('');

async function switchExam(examTypeId: string) {
  if (examTypeId === activeExamTypeId.value) return;
  const token = localStorage.getItem('pb_token');
  if (!token) return;
  try {
    await $fetch('/api/users/me/active-exam', {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}` },
      body: { exam_type_id: examTypeId },
    });
    activeExamTypeId.value = examTypeId;
    window.location.href = '/';
  } catch { /* skip */ }
}
</script>
