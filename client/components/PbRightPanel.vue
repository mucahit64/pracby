<template>
  <div class="w-[280px] min-w-[280px] flex flex-col gap-4 py-6 overflow-y-auto">
    <!-- Stats Row -->
    <div class="flex border-2 border-gray-200 rounded-2xl p-2.5 justify-between relative">
      <!-- 🔥 Streak -->
      <div class="relative flex flex-col items-center flex-1 group" @mouseenter="openTooltip('streak')" @mouseleave="closeTooltip">
        <div class="flex items-center gap-1.5 px-2 py-1.5 rounded-xl cursor-default transition-colors group-hover:bg-gray-100">
          <span class="text-xl">🔥</span>
          <span class="text-base font-extrabold text-gray-800">{{ stats.streak }}</span>
        </div>
        <!-- Streak Tooltip -->
        <div v-if="activeTooltip === 'streak'" class="absolute top-full mt-2.5 left-0 z-[500] w-60 bg-white border-2 border-gray-200 rounded-2xl p-3.5 flex flex-col gap-2.5">
          <div class="text-[0.72rem] font-extrabold text-gray-400 uppercase tracking-widest">Bu Haftaki Serin</div>
          <div class="flex justify-between gap-0.5">
            <div v-for="day in streakHistory" :key="day.date" class="flex flex-col items-center gap-1 flex-1">
              <div
                class="w-5 h-5 rounded-full"
                :class="{
                  'bg-positive': day.done && !day.isToday,
                  'bg-primary ring-2 ring-primary/40': day.isToday,
                  'bg-gray-200': !day.done && !day.isToday,
                }"
              />
              <span class="text-[0.6rem] font-bold text-gray-400">{{ day.label }}</span>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            <span>🔥</span>
            <span class="text-xl font-black text-gray-800">{{ stats.streak }}</span>
            <span class="text-sm font-semibold text-gray-400">günlük seri</span>
          </div>
          <button class="bg-transparent border-0 text-primary text-sm font-extrabold cursor-pointer p-0 text-left hover:text-primary-dark" @click="navigateTo('/leaderboard')">Tüm Serilerimi Gör →</button>
        </div>
      </div>

      <!-- 🌰 Palamut -->
      <div class="relative flex flex-col items-center flex-1 group" @mouseenter="openTooltip('acorns')" @mouseleave="closeTooltip">
        <div class="flex items-center gap-1.5 px-2 py-1.5 rounded-xl cursor-default transition-colors group-hover:bg-gray-100">
          <span class="text-xl">🌰</span>
          <span class="text-base font-extrabold text-gray-800">{{ sharedAcornBalance }}</span>
        </div>
        <!-- Acorn Tooltip -->
        <div v-if="activeTooltip === 'acorns'" class="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 z-[500] w-60 bg-white border-2 border-gray-200 rounded-2xl p-3.5 flex flex-col gap-2.5">
          <div class="text-[0.72rem] font-extrabold text-gray-400 uppercase tracking-widest">Palamutların</div>
          <div class="flex items-center gap-2">
            <span class="text-3xl">🌰</span>
            <span class="text-xl font-black text-gray-800">{{ sharedAcornBalance }}</span>
          </div>
          <p class="text-xs text-gray-400 font-semibold leading-relaxed">Doğru cevap = 1 🌰</p>
          <p class="text-xs text-gray-400 font-semibold leading-relaxed">Palamutlarınla mağazadan ürün al!</p>
          <button class="w-full bg-primary text-white font-extrabold text-sm py-2.5 rounded-xl border-b-[3px] border-primary-dark active:translate-y-0.5 active:border-b-[2px] transition-all duration-100 cursor-pointer" @click="navigateTo('/store')">Mağazaya Git →</button>
        </div>
      </div>

      <!-- ❤️ Hearts -->
      <div class="relative flex flex-col items-center flex-1 group" @mouseenter="openTooltip('hearts')" @mouseleave="closeTooltip">
        <div class="flex items-center gap-1.5 px-2 py-1.5 rounded-xl cursor-default transition-colors group-hover:bg-gray-100">
          <span class="text-xl">❤️</span>
          <span class="text-base font-extrabold text-gray-800">{{ sharedHearts }}</span>
        </div>
        <!-- Hearts Tooltip -->
        <div v-if="activeTooltip === 'hearts'" class="absolute top-full mt-2.5 right-0 z-[500] w-60 bg-white border-2 border-gray-200 rounded-2xl p-3.5 flex flex-col gap-2.5">
          <div class="text-[0.72rem] font-extrabold text-gray-400 uppercase tracking-widest">Canların</div>
          <div class="flex gap-1 text-xl">
            <span
              v-for="i in 5"
              :key="i"
              class="transition-all"
              :class="{ 'grayscale opacity-30': i > sharedHearts }"
            >❤️</span>
          </div>
          <div v-if="heartCountdown" class="flex items-center gap-2 bg-negative/10 rounded-xl px-2.5 py-2">
            <span class="text-xs font-bold text-gray-400">Sonraki can</span>
            <span class="text-xs font-extrabold text-negative tabular-nums tracking-wide">⏱ {{ heartCountdown }}</span>
          </div>
          <div v-else-if="sharedHearts >= 5" class="text-sm font-bold text-positive text-center">Canların dolu! 🎉</div>
          <template v-if="sharedHearts < 5 && heartPackages.length > 0">
            <div class="text-[0.72rem] font-extrabold text-gray-400 uppercase tracking-wide">Can Satın Al</div>
            <div class="flex flex-col gap-1.5">
              <button
                v-for="pkg in heartPackages"
                :key="pkg.id"
                class="flex justify-between items-center bg-gray-50 border-2 border-gray-200 rounded-xl px-2.5 py-2 cursor-pointer transition-colors hover:border-primary disabled:opacity-40 disabled:cursor-not-allowed font-[inherit]"
                :disabled="sharedAcornBalance < pkg.price_acorn || purchasingId === pkg.id"
                @click="buyHeart(pkg)"
              >
                <span class="text-sm font-bold text-gray-800">{{ pkg.name }}</span>
                <span class="text-sm font-extrabold text-warning">
                  <span v-if="purchasingId === pkg.id" class="inline-block w-3 h-3 border-2 border-gray-200 border-t-primary rounded-full animate-spin" />
                  <template v-else>🌰 {{ pkg.price_acorn }}</template>
                </span>
              </button>
            </div>
          </template>
          <div
            v-if="purchaseMsg"
            class="text-xs font-bold text-center"
            :class="purchaseFailed ? 'text-negative' : 'text-positive'"
          >
            {{ purchaseMsg }}
          </div>
        </div>
      </div>
    </div>

    <!-- Unlock Leaderboard Card -->
    <div class="bg-white border-2 border-gray-200 rounded-2xl p-4 flex flex-col gap-2.5">
      <div class="text-3xl">🏆</div>
      <div>
        <div class="text-base font-extrabold text-gray-800">Liderliği Aç!</div>
        <div class="text-sm text-gray-400 leading-snug mt-0.5">Rekabet etmeye başlamak için 10 ders daha tamamla.</div>
      </div>
      <div class="flex items-center gap-2.5 mt-1">
        <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div class="h-full bg-primary rounded-full transition-all duration-400" :style="{ width: `${(stats.lessonsToLeaderboard / 10) * 100}%` }" />
        </div>
        <span class="text-xs font-bold text-gray-400 whitespace-nowrap">{{ stats.lessonsToLeaderboard }} / 10</span>
      </div>
    </div>

    <!-- Daily Quests -->
    <div class="bg-white border-2 border-gray-200 rounded-2xl p-4">
      <div class="flex justify-between items-center mb-3.5">
        <span class="text-base font-extrabold text-gray-800">Günlük Görevler</span>
        <button class="bg-transparent border-0 text-primary text-[0.72rem] font-extrabold cursor-pointer tracking-wide font-[inherit] hover:text-primary-dark" @click="navigateTo('/quests')">TÜMÜNÜ GÖR</button>
      </div>
      <div v-for="quest in dailyQuests" :key="quest.id" class="flex items-center gap-2.5 py-2 border-b border-gray-100 last:border-b-0 last:pb-0 relative">
        <div class="text-xl w-8 text-center">{{ quest.icon }}</div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-bold text-gray-800 mb-1">{{ quest.name }}</div>
          <div class="h-[7px] bg-gray-100 rounded-full overflow-hidden mb-0.5">
            <div
              class="h-full bg-positive rounded-full transition-all duration-500"
              :style="{ width: `${Math.min((quest.current / quest.target) * 100, 100)}%` }"
            />
          </div>
          <div class="text-[0.72rem] text-gray-400 font-semibold">{{ quest.current }} / {{ quest.target }}</div>
        </div>
        <div class="flex flex-col items-center min-w-[36px]">
          <span class="text-sm font-extrabold text-warning">+{{ quest.xp }}</span>
          <span class="text-[0.65rem] font-bold text-gray-400">XP</span>
        </div>
        <div v-if="quest.current >= quest.target" class="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-positive text-white rounded-full flex items-center justify-center text-xs font-extrabold">✓</div>
      </div>
    </div>

    <!-- XP Goal -->
    <div class="bg-white border-2 border-gray-200 rounded-2xl p-4">
      <div class="flex justify-between items-center mb-3.5">
        <span class="text-base font-extrabold text-gray-800">Günlük Hedef</span>
        <span class="text-sm font-bold text-warning bg-warning/10 px-2.5 py-1 rounded-full">⚡ {{ stats.dailyXp }} / {{ stats.dailyGoal }} XP</span>
      </div>
      <div class="h-3.5 bg-gray-100 rounded-full overflow-hidden mb-1.5">
        <div
          class="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-500"
          :style="{ width: `${Math.min((stats.dailyXp / stats.dailyGoal) * 100, 100)}%` }"
        />
      </div>
      <div class="flex justify-between text-[0.72rem] text-gray-400 font-semibold">
        <span>0</span>
        <span>{{ stats.dailyGoal }} XP</span>
      </div>
    </div>

    <!-- Guest CTA -->
    <div v-if="!isLoggedIn" class="bg-white border-2 border-gray-200 rounded-2xl p-6 flex flex-col items-center gap-3 text-center">
      <p class="text-sm font-bold text-gray-800 leading-snug">İlerlemeni kaydetmek için bir profil oluştur!</p>
      <NuxtLink to="/auth/register" class="w-full bg-primary text-white font-black text-sm py-3 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 text-center block">PROFİL OLUŞTUR</NuxtLink>
      <NuxtLink to="/auth/login" class="w-full bg-white text-primary font-extrabold text-sm py-3 rounded-xl border-2 border-primary hover:bg-primary/5 transition-all duration-150 text-center block">GİRİŞ YAP</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const isLoggedIn = ref(false);
const sharedHearts = useState('userHearts', () => 5);
const heartCountdown = useState('heartCountdown', () => '');
const { acornBalance: sharedAcornBalance, setAcornBalance } = useAcornBalance();

interface HeartPackage {
  id: string;
  name: string;
  price_acorn: number;
  icon_url: string;
  item_type: string;
  metadata?: { heart_count?: number };
}

interface StreakDay {
  label: string;
  date: string;
  done: boolean;
  isToday: boolean;
}

const stats = ref({
  streak: 0,
  acorns: 0,
  lessonsToLeaderboard: 10,
  dailyXp: 0,
  dailyGoal: 50,
});

const dailyQuests = ref([
  { id: 1, icon: '⚡', name: '10 XP Kazan', current: 0, target: 10, xp: 10 },
  { id: 2, icon: '🎯', name: '5 Soru Çöz', current: 0, target: 5, xp: 20 },
  { id: 3, icon: '🔥', name: '3 Ders Tamamla', current: 0, target: 3, xp: 30 },
]);

const activeTooltip = ref<'streak' | 'acorns' | 'hearts' | null>(null);
const streakHistory = ref<StreakDay[]>([]);
const heartPackages = ref<HeartPackage[]>([]);
const purchasingId = ref<string | null>(null);
const purchaseMsg = ref('');
const purchaseFailed = ref(false);

function openTooltip(name: 'streak' | 'acorns' | 'hearts') {
  activeTooltip.value = name;
  purchaseMsg.value = '';
  purchaseFailed.value = false;
}

function closeTooltip() {
  activeTooltip.value = null;
}

function getToken() {
  return localStorage.getItem('pb_token') ?? '';
}

async function buyHeart(pkg: HeartPackage) {
  if (purchasingId.value) return;
  purchasingId.value = pkg.id;
  purchaseMsg.value = '';
  purchaseFailed.value = false;

  const token = getToken();
  if (!token) {
    const { spendAcorns, setHearts } = useGuestState();
    const heartsToAdd = (pkg as HeartPackage & { metadata?: { heart_count?: number } }).metadata?.heart_count ?? 1;
    if (!spendAcorns(pkg.price_acorn)) {
      purchaseMsg.value = 'Yetersiz palamut.';
      purchaseFailed.value = true;
      purchasingId.value = null;
      return;
    }
    stats.value.acorns -= pkg.price_acorn;
    setAcornBalance(stats.value.acorns);
    const newHearts = Math.min(5, sharedHearts.value + heartsToAdd);
    sharedHearts.value = newHearts;
    setHearts(newHearts);
    purchaseMsg.value = `${pkg.name} satın alındı! ❤️`;
    purchasingId.value = null;
    return;
  }

  try {
    await $fetch('/api/store/purchase', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: { itemId: pkg.id },
    });
    const user = await $fetch<{ acorn_balance?: number; hearts?: number }>('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    stats.value.acorns = user.acorn_balance ?? stats.value.acorns;
    setAcornBalance(stats.value.acorns);
    sharedHearts.value = user.hearts ?? sharedHearts.value;
    purchaseMsg.value = `${pkg.name} satın alındı! ❤️`;
  } catch {
    purchaseMsg.value = 'Satın alınamadı.';
    purchaseFailed.value = true;
  } finally {
    purchasingId.value = null;
  }
}

onMounted(async () => {
  const token = getToken();
  if (!token) {
    isLoggedIn.value = false;
    const { state: gs } = useGuestState();
    const guestBalance = gs.value.acornBalance;
    setAcornBalance(guestBalance);
    stats.value.acorns = guestBalance;
    sharedHearts.value = gs.value.heartsCount;
    try {
      const items = await $fetch<HeartPackage[]>('/api/store/items');
      heartPackages.value = items.filter(i => i.item_type === 'heart_refill');
    } catch { /* skip */ }
    return;
  }
  isLoggedIn.value = true;
  const h = { Authorization: `Bearer ${token}` };
  try {
    const [user, userStats, items, streakHist] = await Promise.all([
      $fetch<{ acorn_balance?: number; hearts?: number; daily_goal_xp?: number }>('/api/users/me', { headers: h }),
      $fetch<{ streak?: number; current_streak?: number; daily_xp?: number }>('/api/users/me/stats', { headers: h }),
      $fetch<HeartPackage[]>('/api/store/items', { headers: h }),
      $fetch<StreakDay[]>('/api/users/me/streak-history', { headers: h }),
    ]);
    stats.value.acorns = user.acorn_balance ?? 0;
    setAcornBalance(user.acorn_balance ?? 0);
    sharedHearts.value = user.hearts ?? 5;
    stats.value.dailyGoal = user.daily_goal_xp ?? 50;
    stats.value.streak = userStats.current_streak ?? userStats.streak ?? 0;
    stats.value.dailyXp = userStats.daily_xp ?? 0;
    heartPackages.value = (items as HeartPackage[]).filter(i => i.item_type === 'heart_refill');
    streakHistory.value = streakHist as StreakDay[];
  } catch { /* skip */ }
});
</script>
