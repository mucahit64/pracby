<template>
  <div class="flex flex-col gap-5 max-w-[560px] mx-auto pb-10">
    <div class="text-center py-2">
      <h1 class="text-2xl font-black text-gray-800">🏆 Liderlik Tablosu</h1>
      <p class="text-sm font-semibold text-gray-400 mt-1">Bu haftanın en iyileri arasına gir!</p>
    </div>

    <!-- League tabs -->
    <div class="flex bg-white border-2 border-gray-200 rounded-2xl p-1 gap-0.5">
      <button
        v-for="league in leagues"
        :key="league.id"
        class="flex-1 flex flex-col items-center gap-0.5 py-2.5 px-1.5 rounded-xl border-0 bg-transparent text-gray-400 text-[0.72rem] font-extrabold cursor-pointer transition-all duration-150 tracking-wide font-[inherit]"
        :class="activeLeague === league.id ? '!bg-primary !text-white' : 'hover:bg-gray-100 hover:text-gray-800'"
        @click="activeLeague = league.id"
      >
        <span class="text-lg">{{ league.emoji }}</span>
        <span class="uppercase">{{ league.name }}</span>
      </button>
    </div>

    <!-- League info banner -->
    <div class="flex items-center gap-3.5 rounded-2xl px-5 py-4 text-white border-b-4"
      :class="{
        'bg-amber-800 border-amber-900': activeLeague === 'bronze',
        'bg-gray-500 border-gray-600': activeLeague === 'silver',
        'bg-amber-600 border-amber-700': activeLeague === 'gold',
        'bg-blue-500 border-blue-700': activeLeague === 'diamond',
      }"
    >
      <span class="text-3xl">{{ currentLeague.emoji }}</span>
      <div>
        <div class="text-lg font-black">{{ currentLeague.name }} Ligi</div>
        <div class="text-xs font-semibold opacity-80 mt-0.5">Top 10 → Gümüş'e yüksel • Alt 5 → Bronza düş</div>
      </div>
    </div>

    <!-- Players list -->
    <div class="flex flex-col bg-white border-2 border-gray-200 rounded-2xl overflow-hidden">
      <div v-if="loadingLb" class="text-center py-8 text-gray-400 font-bold">Yükleniyor…</div>
      <div v-else-if="leaderboard.length === 0" class="text-center py-8 text-gray-400 font-bold">Bu ligde henüz kimse yok.</div>
      <template v-else>
        <!-- Promotion zone -->
        <div class="text-[0.7rem] font-extrabold tracking-widest uppercase px-5 py-1.5 bg-positive/10 text-positive border-b-2 border-dashed border-positive/30">↑ Yükselme Bölgesi</div>

        <div
          v-for="(player, index) in leaderboard"
          :key="player.username"
          class="flex items-center gap-3.5 px-5 py-3.5 border-b border-gray-100 last:border-b-0 transition-colors hover:bg-gray-50"
          :class="{
            '!bg-primary/5 border-l-[3px] !border-l-primary': player.isMe,
            'opacity-75': index >= leaderboard.length - 3,
          }"
        >
          <!-- Rank -->
          <div class="w-8 text-center shrink-0">
            <span v-if="index === 0" class="text-xl">🥇</span>
            <span v-else-if="index === 1" class="text-xl">🥈</span>
            <span v-else-if="index === 2" class="text-xl">🥉</span>
            <span v-else class="text-sm font-extrabold text-gray-400">{{ index + 1 }}</span>
          </div>

          <!-- Avatar -->
          <div class="w-11 h-11 rounded-full flex items-center justify-center text-lg font-black text-white shrink-0 relative"
            :style="{ background: player.avatarColor }"
          >
            {{ player.username?.[0]?.toUpperCase() ?? '?' }}
            <div v-if="player.isMe" class="absolute -bottom-1 -right-1 bg-primary text-white text-[0.55rem] font-black px-1.5 py-0.5 rounded-full tracking-wide">SEN</div>
          </div>

          <!-- Info -->
          <div class="flex-1 min-w-0">
            <div class="text-sm font-extrabold text-gray-800 flex items-center gap-1.5">
              {{ player.username }}
              <span v-if="player.isMe" class="text-[0.65rem] bg-primary text-white px-1.5 py-0.5 rounded-full font-bold">sen</span>
            </div>
          </div>

          <!-- XP -->
          <div class="flex flex-col items-end shrink-0">
            <span class="text-base font-black text-gray-800">{{ player.xp_earned.toLocaleString('tr') }}</span>
            <span class="text-[0.65rem] font-bold text-gray-400 tracking-widest">XP</span>
          </div>
        </div>

        <!-- Demotion zone -->
        <div class="text-[0.7rem] font-extrabold tracking-widest uppercase px-5 py-1.5 bg-negative/5 text-negative border-t-2 border-dashed border-negative/25">↓ Düşme Bölgesi</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeLeague = ref('bronze');

const leagues = [
  { id: 'bronze', name: 'Bronz', emoji: '🥉' },
  { id: 'silver', name: 'Gümüş', emoji: '🥈' },
  { id: 'gold', name: 'Altın', emoji: '🥇' },
  { id: 'diamond', name: 'Elmas', emoji: '💎' },
];

const leagueMap: Record<string, { name: string; emoji: string }> = {
  bronze: { name: 'Bronz', emoji: '🥉' },
  silver: { name: 'Gümüş', emoji: '🥈' },
  gold: { name: 'Altın', emoji: '🥇' },
  diamond: { name: 'Elmas', emoji: '💎' },
};

const currentLeague = computed(() => leagueMap[activeLeague.value]);

const avatarColors = ['#7c3aed', '#059669', '#dc2626', '#2563eb', '#d97706', '#db2777', '#0891b2', '#65a30d', '#ea580c', '#7c3aed'];

interface LeaderboardEntry {
  username: string;
  avatar_url: string | null;
  xp_earned: number;
  rank: number;
  isMe?: boolean;
  avatarColor?: string;
}

const myUsername = ref('');
const leaderboard = ref<LeaderboardEntry[]>([]);
const loadingLb = ref(false);

async function fetchLeaderboard(league: string) {
  loadingLb.value = true;
  try {
    const token = localStorage.getItem('pb_token') ?? '';
    const data = await $fetch<LeaderboardEntry[]>(`/api/leaderboard?league=${league}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    leaderboard.value = data.map((p, i) => ({
      ...p,
      isMe: p.username === myUsername.value,
      avatarColor: avatarColors[i % avatarColors.length],
    }));
  } catch { /* keep empty list */ }
  loadingLb.value = false;
}

watch(activeLeague, (league) => fetchLeaderboard(league));

onMounted(async () => {
  const token = localStorage.getItem('pb_token') ?? '';
  if (!token) return;
  try {
    const me = await $fetch<{ username: string }>('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    myUsername.value = me.username;
  } catch { /* skip */ }
  fetchLeaderboard(activeLeague.value);
});
</script>
