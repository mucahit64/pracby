<template>
  <header v-if="isMobile" class="sticky top-0 z-50 bg-white border-b-2 border-gray-200 px-5 py-3">
    
    <div v-if="activeMobileTooltip" class="fixed inset-0 z-[40]" @click="closeMobileTooltip" />

    <div class="relative z-[50] flex items-center justify-center gap-6 pointer-events-none">
      
      <div class="relative pointer-events-auto">
        <button class="flex items-center gap-1 text-base font-extrabold text-gray-800 cursor-pointer bg-transparent border-0 font-[inherit] p-1" @click="toggleMobileTooltip('streak')">
          🔥 {{ streakCount }}
        </button>
        <div v-if="activeMobileTooltip === 'streak'" class="absolute top-full mt-2 left-0 z-[500] w-60 bg-white border-2 border-gray-200 rounded-2xl p-3.5 flex flex-col gap-2.5 shadow-lg">
          <div class="absolute -top-[8px] left-8 w-3.5 h-3.5 bg-white border-t-2 border-l-2 border-gray-200 rotate-45 rounded-tl-[2px]" />
          <div class="text-[0.72rem] font-extrabold text-gray-400 uppercase tracking-widest">Bu Haftaki Serin</div>
          <div v-if="mobileStreakHistory.length" class="flex justify-between gap-0.5">
            <div v-for="day in mobileStreakHistory" :key="day.date" class="flex flex-col items-center gap-1 flex-1">
              <div class="w-5 h-5 rounded-full" :class="{ 'bg-positive': day.done && !day.isToday, 'bg-primary ring-2 ring-primary/40': day.isToday, 'bg-gray-200': !day.done && !day.isToday }" />
              <span class="text-[0.6rem] font-bold text-gray-400">{{ day.label }}</span>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            <span>🔥</span>
            <span class="text-xl font-black text-gray-800">{{ streakCount }}</span>
            <span class="text-sm font-semibold text-gray-400">günlük seri</span>
          </div>
        </div>
      </div>

      <div class="relative pointer-events-auto">
        <button class="flex items-center gap-1 text-base font-extrabold text-gray-800 cursor-pointer bg-transparent border-0 font-[inherit] p-1" @click="toggleMobileTooltip('acorns')">
          🌰 {{ acornBalance }}
        </button>
        <div v-if="activeMobileTooltip === 'acorns'" class="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[500] w-60 bg-white border-2 border-gray-200 rounded-2xl p-3.5 flex flex-col gap-2.5 shadow-lg">
          <div class="absolute -top-[8px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white border-t-2 border-l-2 border-gray-200 rotate-45 rounded-tl-[2px]" />
          <div class="text-[0.72rem] font-extrabold text-gray-400 uppercase tracking-widest">Palamutların</div>
          <div class="flex items-center gap-2">
            <span class="text-3xl">🌰</span>
            <span class="text-xl font-black text-gray-800">{{ acornBalance }}</span>
          </div>
          <p class="text-xs text-gray-400 font-semibold leading-relaxed">Doğru cevap = 1 🌰</p>
          <p class="text-xs text-gray-400 font-semibold leading-relaxed">Palamutlarınla mağazadan ürün al!</p>
          <NuxtLink to="/store" class="w-full bg-primary text-white font-extrabold text-sm py-2.5 rounded-xl border-b-[3px] border-primary-dark text-center block" @click="closeMobileTooltip">Mağazaya Git →</NuxtLink>
        </div>
      </div>

      <div class="relative pointer-events-auto">
        <button class="flex items-center gap-1 text-base font-extrabold text-gray-800 cursor-pointer bg-transparent border-0 font-[inherit] p-1" @click="toggleMobileTooltip('energy')">
          <template v-if="unlimitedEnergy">♾️🔋</template>
          <template v-else>
            🔋 {{ energyCount }}
            <span v-if="energyCountdown" class="ml-1 text-xs font-bold text-white bg-negative px-1.5 py-0.5 rounded-full tabular-nums tracking-wide">{{ energyCountdown }}</span>
          </template>
        </button>
        <div v-if="activeMobileTooltip === 'energy'" class="absolute top-full mt-2 right-0 z-[500] w-60 bg-white border-2 border-gray-200 rounded-2xl p-3.5 flex flex-col gap-2.5 shadow-lg">
          <div class="absolute -top-[8px] right-8 w-3.5 h-3.5 bg-white border-t-2 border-l-2 border-gray-200 rotate-45 rounded-tl-[2px]" />
          <div class="text-[0.72rem] font-extrabold text-gray-400 uppercase tracking-widest">Enerjin</div>
          <template v-if="unlimitedEnergy">
            <div class="flex items-center gap-2">
              <span class="text-2xl">♾️🔋</span>
            </div>
            <div class="text-sm font-bold text-positive text-center">Sınırsız enerji aktif!</div>
          </template>
          <template v-else>
            <div class="flex items-center gap-2">
              <span class="text-2xl">🔋</span>
              <span class="text-2xl font-black text-gray-800">{{ energyCount }}</span>
              <span class="text-sm font-semibold text-gray-400">/ 25</span>
            </div>
            <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-primary rounded-full transition-all duration-300" :style="{ width: `${(energyCount / 25) * 100}%` }" />
            </div>
            <div v-if="energyCountdown" class="flex items-center gap-2 bg-negative/10 rounded-xl px-2.5 py-2">
              <span class="text-xs font-bold text-gray-400">Sonraki enerji</span>
              <span class="text-xs font-extrabold text-negative tabular-nums tracking-wide">⏱ {{ energyCountdown }}</span>
            </div>
            <div v-else-if="energyCount >= 25" class="text-sm font-bold text-positive text-center">Enerjin dolu! 🎉</div>
            <NuxtLink to="/store" class="w-full bg-primary text-white font-extrabold text-sm py-2.5 rounded-xl border-b-[3px] border-primary-dark text-center block" @click="closeMobileTooltip">Enerji Satın Al →</NuxtLink>
          </template>
        </div>
      </div>

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
          class="flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-bold text-gray-600 uppercase tracking-wide border-2 border-transparent transition-all duration-150 hover:bg-gray-100 hover:text-gray-800"
          :class="{ '!bg-primary/10 !text-primary !border-primary/30': isActiveRoute(item) }"
        >
          <span class="text-xl w-7 text-center">{{ item.emoji }}</span>
          <span class="text-sm tracking-widest">{{ item.label }}</span>
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
      <aside v-if="showRightPanel && !isMobile" class="w-80 min-w-[320px] shrink-0 overflow-y-auto sticky top-0 h-screen pl-6">
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
        class="flex flex-col items-center gap-0.5 px-5 py-1.5 text-[0.72rem] font-bold text-gray-600 uppercase tracking-wide"
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
    const { state: gs, getNextEnergyAt, refreshEnergy } = useGuestState();
    refreshEnergy();
    setAcornBalance(gs.value.acornBalance);
    energyCount.value = gs.value.energyCount;
    nextEnergyAt.value = getNextEnergyAt()?.toISOString() ?? null;
    startGuestEnergyCountdown();
    return;
  }

  try {
    const [user, userStats, enrollmentList, streakHist, effects] = await Promise.all([
      $fetch<{ acorn_balance?: number; energy?: number; next_energy_at?: string | null; active_exam_type_id?: string }>('/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      }),
      $fetch<{ streak?: number }>('/api/users/me/stats', {
        headers: { Authorization: `Bearer ${token}` },
      }),
      $fetch<{ exam_type_id: string; exam_type_name: string; exam_group_name: string }[]>('/api/users/me/enrollments', {
        headers: { Authorization: `Bearer ${token}` },
      }),
      $fetch<StreakDay[]>('/api/users/me/streak-history', {
        headers: { Authorization: `Bearer ${token}` },
      }).catch(() => [] as StreakDay[]),
      $fetch<{ item_type: string; expires_at: string }[]>('/api/store/effects', {
        headers: { Authorization: `Bearer ${token}` },
      }).catch(() => [] as { item_type: string; expires_at: string }[]),
    ]);
    setAcornBalance(user.acorn_balance ?? 0);
    energyCount.value = user.energy ?? 25;
    streakCount.value = userStats.streak ?? 0;
    nextEnergyAt.value = user.next_energy_at ?? null;
    activeExamTypeId.value = user.active_exam_type_id ?? '';
    enrollments.value = enrollmentList;
    mobileStreakHistory.value = streakHist;
    unlimitedEnergy.value = effects.some(e => e.item_type === 'unlimited_energy');
    startEnergyCountdown(token);
  } catch { /* skip */ }
});

const isMobile = computed(() => screen.value.lt.md);

const { acornBalance, setAcornBalance } = useAcornBalance();
const streakCount = ref(0);
const energyCount = useState('userEnergy', () => 25);
const energyCountdown = useState('energyCountdown', () => '');
const unlimitedEnergy = useState('unlimitedEnergy', () => false);
const nextEnergyAt = ref<string | null>(null);
let energyTimer: ReturnType<typeof setInterval> | null = null;

function startEnergyCountdown(token: string) {
  if (energyTimer) clearInterval(energyTimer);
  energyTimer = setInterval(async () => {
    if (!nextEnergyAt.value || energyCount.value >= 25) {
      energyCountdown.value = '';
      return;
    }
    const diff = new Date(nextEnergyAt.value).getTime() - Date.now();
    if (diff <= 0) {
      energyCountdown.value = '';
      try {
        const user = await $fetch<{ energy?: number; next_energy_at?: string | null }>('/api/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        energyCount.value = user.energy ?? energyCount.value;
        nextEnergyAt.value = user.next_energy_at ?? null;
      } catch { /* skip */ }
      return;
    }
    const mins = Math.floor(diff / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    energyCountdown.value = `${mins}:${String(secs).padStart(2, '0')}`;
  }, 1000);
}

function startGuestEnergyCountdown() {
  if (energyTimer) clearInterval(energyTimer);
  energyTimer = setInterval(() => {
    if (!nextEnergyAt.value || energyCount.value >= 25) {
      energyCountdown.value = '';
      return;
    }
    const diff = new Date(nextEnergyAt.value).getTime() - Date.now();
    if (diff <= 0) {
      energyCountdown.value = '';
      const { state: gs, getNextEnergyAt, refreshEnergy } = useGuestState();
      refreshEnergy();
      energyCount.value = gs.value.energyCount;
      nextEnergyAt.value = getNextEnergyAt()?.toISOString() ?? null;
      return;
    }
    const mins = Math.floor(diff / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    energyCountdown.value = `${mins}:${String(secs).padStart(2, '0')}`;
  }, 1000);
}

onUnmounted(() => {
  if (energyTimer) clearInterval(energyTimer);
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

type MobileTooltip = 'streak' | 'acorns' | 'energy';
const activeMobileTooltip = ref<MobileTooltip | null>(null);
interface StreakDay { label: string; date: string; done: boolean; isToday: boolean }
const mobileStreakHistory = ref<StreakDay[]>([]);

function toggleMobileTooltip(name: MobileTooltip) {
  activeMobileTooltip.value = activeMobileTooltip.value === name ? null : name;
}
function closeMobileTooltip() {
  activeMobileTooltip.value = null;
}

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
