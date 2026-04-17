<template>
  <div class="pb-right-panel">
    <!-- Logged in content -->
    <!-- Stats Row -->
    <div class="pb-stats-row">
      <!-- 🔥 Streak -->
      <div class="pb-stat-wrap" @mouseenter="openTooltip('streak')" @mouseleave="closeTooltip">
        <div class="pb-stat-item">
          <span class="pb-stat-icon">🔥</span>
          <span class="pb-stat-value">{{ stats.streak }}</span>
        </div>
        <div v-if="activeTooltip === 'streak'" class="pb-tooltip pb-tooltip--left">
            <div class="pb-tt-arrow" />
            <div class="pb-tt-head">Bu Haftaki Serin</div>
            <div class="pb-streak-days">
              <div v-for="day in streakHistory" :key="day.date" class="pb-streak-day">
                <div
                  class="pb-streak-dot"
                  :class="{
                    'pb-streak-dot--done': day.done,
                    'pb-streak-dot--today': day.isToday,
                  }"
                />
                <span class="pb-streak-lbl">{{ day.label }}</span>
              </div>
            </div>
            <div class="pb-tt-row">
              <span>🔥</span>
              <span class="pb-tt-big">{{ stats.streak }}</span>
              <span class="pb-tt-muted">günlük seri</span>
            </div>
            <button class="pb-tt-link" @click="navigateTo('/leaderboard')">Tüm Serilerimi Gör →</button>
        </div>
      </div>

      <!-- 🌰 Palamut -->
      <div class="pb-stat-wrap" @mouseenter="openTooltip('acorns')" @mouseleave="closeTooltip">
        <div class="pb-stat-item">
          <span class="pb-stat-icon">🌰</span>
          <span class="pb-stat-value">{{ stats.acorns }}</span>
        </div>
        <div v-if="activeTooltip === 'acorns'" class="pb-tooltip pb-tooltip--center">
            <div class="pb-tt-arrow" />
            <div class="pb-tt-head">Palamutların</div>
            <div class="pb-tt-acorn-bal">
              <span class="pb-tt-acorn-icon">🌰</span>
              <span class="pb-tt-big">{{ stats.acorns }}</span>
            </div>
            <p class="pb-tt-hint">Doğru cevap = 1 🌰</p>
            <p class="pb-tt-hint">Palamutlarınla mağazadan ürün al!</p>
            <button class="pb-tt-primary-btn" @click="navigateTo('/store')">Mağazaya Git →</button>
        </div>
      </div>

      <!-- ❤️ Hearts -->
      <div class="pb-stat-wrap" @mouseenter="openTooltip('hearts')" @mouseleave="closeTooltip">
        <div class="pb-stat-item">
          <span class="pb-stat-icon">❤️</span>
          <span class="pb-stat-value">{{ sharedHearts }}</span>
        </div>
        <div v-if="activeTooltip === 'hearts'" class="pb-tooltip pb-tooltip--right">
            <div class="pb-tt-arrow" />
            <div class="pb-tt-head">Canların</div>
            <div class="pb-tt-hearts-row">
              <span
                v-for="i in 5"
                :key="i"
                class="pb-tt-heart"
                :class="{ 'pb-tt-heart--lost': i > sharedHearts }"
              >❤️</span>
            </div>
            <div v-if="heartCountdown" class="pb-tt-timer">
              <span class="pb-tt-timer-lbl">Sonraki can</span>
              <span class="pb-tt-timer-val">⏱ {{ heartCountdown }}</span>
            </div>
            <div v-else-if="sharedHearts >= 5" class="pb-tt-full-msg">Canların dolu! 🎉</div>
            <template v-if="sharedHearts < 5 && heartPackages.length > 0">
              <div class="pb-tt-pkgs-title">Can Satın Al</div>
              <div class="pb-tt-pkgs">
                <button
                  v-for="pkg in heartPackages"
                  :key="pkg.id"
                  class="pb-tt-pkg"
                  :disabled="stats.acorns < pkg.price_acorn || purchasingId === pkg.id"
                  @click="buyHeart(pkg)"
                >
                  <span class="pb-tt-pkg-name">{{ pkg.name }}</span>
                  <span class="pb-tt-pkg-price">
                    <span v-if="purchasingId === pkg.id" class="pb-tt-spin" />
                    <template v-else>🌰 {{ pkg.price_acorn }}</template>
                  </span>
                </button>
              </div>
            </template>
            <div
              v-if="purchaseMsg"
              class="pb-tt-purchase-msg"
              :class="{ 'pb-tt-purchase-msg--err': purchaseFailed }"
            >
              {{ purchaseMsg }}
            </div>
        </div>
      </div>

    </div>

    <!-- Unlock Leaderboard Card -->
    <div class="pb-panel-card pb-unlock-card">
      <div class="pb-unlock-icon">🏆</div>
      <div class="pb-unlock-body">
        <div class="pb-unlock-title">Liderliği Aç!</div>
        <div class="pb-unlock-desc">Rekabet etmeye başlamak için 10 ders daha tamamla.</div>
      </div>
      <div class="pb-unlock-progress">
        <div class="pb-mini-progress-bar">
          <div class="pb-mini-progress-fill" :style="{ width: `${(stats.lessonsToLeaderboard / 10) * 100}%` }" />
        </div>
        <span class="pb-progress-text">{{ stats.lessonsToLeaderboard }} / 10</span>
      </div>
    </div>

    <!-- Daily Quests -->
    <div class="pb-panel-card">
      <div class="pb-panel-card-header">
        <span class="pb-panel-card-title">Günlük Görevler</span>
        <button class="pb-view-all-btn" @click="navigateTo('/quests')">TÜMÜNÜ GÖR</button>
      </div>
      <div v-for="quest in dailyQuests" :key="quest.id" class="pb-quest-item">
        <div class="pb-quest-icon">{{ quest.icon }}</div>
        <div class="pb-quest-info">
          <div class="pb-quest-name">{{ quest.name }}</div>
          <div class="pb-quest-progress-bar">
            <div
              class="pb-quest-progress-fill"
              :style="{ width: `${Math.min((quest.current / quest.target) * 100, 100)}%` }"
            />
          </div>
          <div class="pb-quest-counts">{{ quest.current }} / {{ quest.target }}</div>
        </div>
        <div class="pb-quest-reward">
          <span class="pb-quest-xp">+{{ quest.xp }}</span>
          <span class="pb-quest-xp-label">XP</span>
        </div>
        <div v-if="quest.current >= quest.target" class="pb-quest-complete">✓</div>
      </div>
    </div>

    <!-- XP Goal -->
    <div class="pb-panel-card">
      <div class="pb-panel-card-header">
        <span class="pb-panel-card-title">Günlük Hedef</span>
        <span class="pb-xp-chip">⚡ {{ stats.dailyXp }} / {{ stats.dailyGoal }} XP</span>
      </div>
      <div class="pb-xp-progress-bar">
        <div
          class="pb-xp-progress-fill"
          :style="{ width: `${Math.min((stats.dailyXp / stats.dailyGoal) * 100, 100)}%` }"
        />
      </div>
      <div class="pb-xp-bar-labels">
        <span>0</span>
        <span>{{ stats.dailyGoal }} XP</span>
      </div>
    </div>
    
    <!-- Guest CTA -->
    <div v-if="!isLoggedIn" class="pb-panel-card pb-guest-cta">
      <p class="pb-guest-cta-text">İlerlemeni kaydetmek için bir profil oluştur!</p>
      <NuxtLink to="/auth/register" class="pb-btn-primary pb-guest-cta-btn">Bir profil oluştur</NuxtLink>
      <NuxtLink to="/auth/login" class="pb-btn-outline pb-guest-cta-btn">Giriş yap</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const isLoggedIn = ref(false);
const sharedHearts = useState('userHearts', () => 5);
const heartCountdown = useState('heartCountdown', () => '');

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

  // Guest: local purchase
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
    // Load guest state (acorns + hearts)
    const { state: gs } = useGuestState();
    stats.value.acorns = gs.value.acornBalance;
    sharedHearts.value = gs.value.heartsCount;
    // Load packages from public endpoint
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
    sharedHearts.value = user.hearts ?? 5;
    stats.value.dailyGoal = user.daily_goal_xp ?? 50;
    stats.value.streak = userStats.current_streak ?? userStats.streak ?? 0;
    stats.value.dailyXp = userStats.daily_xp ?? 0;
    heartPackages.value = (items as HeartPackage[]).filter(i => i.item_type === 'heart_refill');
    streakHistory.value = streakHist as StreakDay[];
  } catch { /* skip */ }
});
</script>

<style scoped>
.pb-right-panel {
  width: 280px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 0 24px 16px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.pb-right-panel::-webkit-scrollbar {
  display: none;
}
/* Guest CTA */
.pb-guest-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px 16px;
  text-align: center;
}

.pb-guest-cta-icon {
  font-size: 2rem;
}

.pb-guest-cta-text {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--pb-text);
  line-height: 1.4;
}

.pb-guest-cta-btn {
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
}

.pb-stats-row {
  display: flex;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 16px;
  padding: 10px 12px;
  justify-content: space-between;
  overflow: visible;
  position: relative;
}

.pb-stat-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

/* Bridge the 10px gap between stat item and tooltip so hover doesn't drop */
.pb-stat-wrap::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 12px;
}

.pb-stat-item {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 8px;
  border-radius: 10px;
  cursor: default;
  transition: background 0.15s;
}

.pb-stat-wrap:hover .pb-stat-item {
  background: rgba(255, 255, 255, 0.06);
}

.pb-stat-icon {
  font-size: 1.2rem;
}

.pb-stat-value {
  font-size: 1rem;
  font-weight: 800;
  color: var(--pb-text);
}

/* ── Tooltips ── */
.pb-tooltip {
  position: absolute;
  top: calc(100% + 10px);
  z-index: 500;
  width: 242px;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 16px;
  padding: 14px;
  box-shadow: 0 14px 44px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pb-tooltip--left   { left: -8px; }
.pb-tooltip--center { left: 50%; transform: translateX(-50%); }
.pb-tooltip--right  { right: -8px; }

.pb-tt-arrow {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 8px;
  background: var(--pb-border);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* Point arrow toward the triggering icon, not always center */
.pb-tooltip--left .pb-tt-arrow {
  left: 26px;
  transform: none;
}

.pb-tooltip--right .pb-tt-arrow {
  left: auto;
  right: 26px;
  transform: none;
}

.pb-tt-head {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--pb-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* Streak */
.pb-streak-days {
  display: flex;
  justify-content: space-between;
  gap: 2px;
}

.pb-streak-day {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex: 1;
}

.pb-streak-dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--pb-border);
}

.pb-streak-dot--done {
  background: var(--pb-green);
}

.pb-streak-dot--today {
  background: var(--pb-purple);
  box-shadow: 0 0 8px rgba(124, 58, 237, 0.6);
  animation: tt-pulse 1.8s infinite;
}

@keyframes tt-pulse {
  0%, 100% { box-shadow: 0 0 8px rgba(124, 58, 237, 0.5); }
  50%       { box-shadow: 0 0 16px rgba(124, 58, 237, 0.9); }
}

.pb-streak-lbl {
  font-size: 0.6rem;
  font-weight: 700;
  color: var(--pb-text-muted);
}

.pb-tt-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pb-tt-big {
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--pb-text);
}

.pb-tt-muted {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--pb-text-muted);
}

.pb-tt-link {
  background: none;
  border: none;
  color: var(--pb-purple-light);
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  font-family: inherit;
  padding: 0;
  text-align: left;
}

.pb-tt-link:hover { color: var(--pb-purple); }

/* Acorn */
.pb-tt-acorn-bal {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pb-tt-acorn-icon {
  font-size: 1.8rem;
}

.pb-tt-hint {
  font-size: 0.78rem;
  color: var(--pb-text-muted);
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
}

.pb-tt-primary-btn {
  background: var(--pb-purple);
  color: white;
  border: none;
  border-bottom: 3px solid var(--pb-purple-dark);
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 0.85rem;
  font-weight: 800;
  cursor: pointer;
  font-family: inherit;
  width: 100%;
  transition: opacity 0.15s;
}

.pb-tt-primary-btn:hover   { opacity: 0.9; }
.pb-tt-primary-btn:active  { transform: translateY(1px); border-bottom-width: 2px; }

/* Hearts */
.pb-tt-hearts-row {
  display: flex;
  gap: 4px;
  font-size: 1.4rem;
}

.pb-tt-heart { transition: filter 0.15s; }

.pb-tt-heart--lost {
  filter: grayscale(1) opacity(0.3);
}

.pb-tt-timer {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 75, 75, 0.1);
  border-radius: 10px;
  padding: 8px 10px;
}

.pb-tt-timer-lbl {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--pb-text-muted);
}

.pb-tt-timer-val {
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--pb-red);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
}

.pb-tt-full-msg {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--pb-green);
  text-align: center;
}

.pb-tt-pkgs-title {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--pb-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.pb-tt-pkgs {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.pb-tt-pkg {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--pb-bg);
  border: 2px solid var(--pb-border);
  border-radius: 10px;
  padding: 8px 10px;
  cursor: pointer;
  font-family: inherit;
  transition: border-color 0.15s;
}

.pb-tt-pkg:hover:not(:disabled) { border-color: var(--pb-purple); }

.pb-tt-pkg:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.pb-tt-pkg-name {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--pb-text);
}

.pb-tt-pkg-price {
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--pb-gold);
}

.pb-tt-spin {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid var(--pb-border);
  border-top-color: var(--pb-purple);
  border-radius: 50%;
  animation: tt-spin 0.6s linear infinite;
}

@keyframes tt-spin { to { transform: rotate(360deg); } }

.pb-tt-purchase-msg {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--pb-green);
  text-align: center;
}

.pb-tt-purchase-msg--err { color: var(--pb-red); }



.pb-panel-card {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 16px;
  padding: 16px;
}

.pb-panel-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.pb-panel-card-title {
  font-size: 1rem;
  font-weight: 800;
  color: var(--pb-text);
}

.pb-view-all-btn {
  background: none;
  border: none;
  color: var(--pb-purple-light);
  font-size: 0.72rem;
  font-weight: 800;
  cursor: pointer;
  letter-spacing: 0.05em;
  font-family: inherit;
}

.pb-view-all-btn:hover {
  color: var(--pb-purple);
}

/* Unlock Card */
.pb-unlock-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pb-unlock-icon {
  font-size: 2rem;
}

.pb-unlock-title {
  font-size: 1rem;
  font-weight: 800;
  color: var(--pb-text);
}

.pb-unlock-desc {
  font-size: 0.82rem;
  color: var(--pb-text-muted);
  line-height: 1.4;
  margin-top: 2px;
}

.pb-unlock-progress {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
}

.pb-mini-progress-bar {
  flex: 1;
  height: 8px;
  background: var(--pb-bg);
  border-radius: 99px;
  overflow: hidden;
}

.pb-mini-progress-fill {
  height: 100%;
  background: var(--pb-purple);
  border-radius: 99px;
  transition: width 0.4s ease;
}

.pb-progress-text {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--pb-text-muted);
  white-space: nowrap;
}

/* Quest Items */
.pb-quest-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid var(--pb-border);
  position: relative;
}

.pb-quest-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.pb-quest-icon {
  font-size: 1.4rem;
  width: 32px;
  text-align: center;
}

.pb-quest-info {
  flex: 1;
  min-width: 0;
}

.pb-quest-name {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--pb-text);
  margin-bottom: 4px;
}

.pb-quest-progress-bar {
  height: 7px;
  background: var(--pb-bg);
  border-radius: 99px;
  overflow: hidden;
  margin-bottom: 2px;
}

.pb-quest-progress-fill {
  height: 100%;
  background: var(--pb-green);
  border-radius: 99px;
  transition: width 0.5s ease;
}

.pb-quest-counts {
  font-size: 0.72rem;
  color: var(--pb-text-muted);
  font-weight: 600;
}

.pb-quest-reward {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 36px;
}

.pb-quest-xp {
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--pb-gold);
}

.pb-quest-xp-label {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--pb-text-muted);
}

.pb-quest-complete {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background: var(--pb-green);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
}

/* XP Goal */
.pb-xp-chip {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--pb-gold);
  background: rgba(255, 215, 0, 0.12);
  padding: 4px 10px;
  border-radius: 99px;
}

.pb-xp-progress-bar {
  height: 14px;
  background: var(--pb-bg);
  border-radius: 99px;
  overflow: hidden;
  margin-bottom: 6px;
}

.pb-xp-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--pb-purple), var(--pb-purple-light));
  border-radius: 99px;
  transition: width 0.5s ease;
}

.pb-xp-bar-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: var(--pb-text-muted);
  font-weight: 600;
}
</style>
