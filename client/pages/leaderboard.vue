<template>
  <div class="lb-page">
    <div class="lb-header">
      <h1 class="lb-title">🏆 Liderlik Tablosu</h1>
      <p class="lb-subtitle">Bu haftanın en iyileri arasına gir!</p>
    </div>

    <!-- League tabs -->
    <div class="lb-league-tabs">
      <button
        v-for="league in leagues"
        :key="league.id"
        class="lb-league-tab"
        :class="{ 'lb-league-tab--active': activeLeague === league.id }"
        @click="activeLeague = league.id"
      >
        <span class="lb-league-emoji">{{ league.emoji }}</span>
        <span class="lb-league-name">{{ league.name }}</span>
      </button>
    </div>

    <!-- League info banner -->
    <div class="lb-league-banner" :style="{ background: currentLeague.gradient }">
      <span class="lb-league-banner-emoji">{{ currentLeague.emoji }}</span>
      <div>
        <div class="lb-league-banner-title">{{ currentLeague.name }} Ligi</div>
        <div class="lb-league-banner-sub">Top 10 → Gümüş'e yüksel • Alt 5 → Bronza düş</div>
      </div>
    </div>

    <!-- Players list -->
    <div class="lb-list">
      <!-- Promotion zone -->
      <div class="lb-zone-label lb-zone-promote">↑ Yükselme Bölgesi</div>

      <div
        v-for="(player, index) in leaderboard"
        :key="player.username"
        class="lb-item"
        :class="{
          'lb-item--top3': index < 3,
          'lb-item--me': player.isMe,
          'lb-item--demote': index >= leaderboard.length - 3,
        }"
      >
        <!-- Rank -->
        <div class="lb-rank">
          <span v-if="index === 0" class="lb-rank-medal">🥇</span>
          <span v-else-if="index === 1" class="lb-rank-medal">🥈</span>
          <span v-else-if="index === 2" class="lb-rank-medal">🥉</span>
          <span v-else class="lb-rank-num">{{ index + 1 }}</span>
        </div>

        <!-- Avatar -->
        <div class="lb-avatar" :style="{ background: player.avatarColor }">
          {{ player.username[0].toUpperCase() }}
          <div v-if="player.isMe" class="lb-avatar-badge">SEN</div>
        </div>

        <!-- Info -->
        <div class="lb-info">
          <div class="lb-username">
            {{ player.username }}
            <span v-if="player.isMe" class="lb-me-tag">sen</span>
          </div>
          <div class="lb-level">Seviye {{ player.level }}</div>
        </div>

        <!-- XP -->
        <div class="lb-xp">
          <span class="lb-xp-value">{{ player.xp.toLocaleString('tr') }}</span>
          <span class="lb-xp-label">XP</span>
        </div>
      </div>

      <!-- Demotion zone separator -->
      <div class="lb-zone-label lb-zone-demote">↓ Düşme Bölgesi</div>
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

const leagueMap: Record<string, { name: string; emoji: string; gradient: string }> = {
  bronze: { name: 'Bronz', emoji: '🥉', gradient: 'linear-gradient(135deg, #7c3d1a 0%, #c27c41 100%)' },
  silver: { name: 'Gümüş', emoji: '🥈', gradient: 'linear-gradient(135deg, #374151 0%, #6b7280 100%)' },
  gold: { name: 'Altın', emoji: '🥇', gradient: 'linear-gradient(135deg, #78350f 0%, #d97706 100%)' },
  diamond: { name: 'Elmas', emoji: '💎', gradient: 'linear-gradient(135deg, #1e3a5f 0%, #1cb0f6 100%)' },
};

const currentLeague = computed(() => leagueMap[activeLeague.value]);

const avatarColors = ['#7c3aed', '#059669', '#dc2626', '#2563eb', '#d97706', '#db2777', '#0891b2', '#65a30d', '#ea580c', '#7c3aed'];

const leaderboard = ref([
  { username: 'ahmet_k', level: 8, xp: 2520, isMe: false, avatarColor: avatarColors[0] },
  { username: 'elif_y', level: 7, xp: 2480, isMe: false, avatarColor: avatarColors[1] },
  { username: 'mehmet_d', level: 7, xp: 2410, isMe: false, avatarColor: avatarColors[2] },
  { username: 'zeynep_a', level: 6, xp: 2350, isMe: false, avatarColor: avatarColors[3] },
  { username: 'can_b', level: 5, xp: 2320, isMe: false, avatarColor: avatarColors[4] },
  { username: 'selin_t', level: 5, xp: 2280, isMe: false, avatarColor: avatarColors[5] },
  { username: 'mucahit', level: 5, xp: 1250, isMe: true, avatarColor: avatarColors[6] },
  { username: 'emre_g', level: 4, xp: 1100, isMe: false, avatarColor: avatarColors[7] },
  { username: 'buse_k', level: 3, xp: 820, isMe: false, avatarColor: avatarColors[8] },
  { username: 'kerem_a', level: 2, xp: 540, isMe: false, avatarColor: avatarColors[9] },
]);
</script>

<style scoped>
.lb-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 560px;
  margin: 0 auto;
  padding-bottom: 40px;
}

.lb-header {
  text-align: center;
  padding: 8px 0;
}

.lb-title {
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--pb-text);
  margin-bottom: 4px;
}

.lb-subtitle {
  font-size: 0.9rem;
  color: var(--pb-text-muted);
  font-weight: 600;
}

/* League Tabs */
.lb-league-tabs {
  display: flex;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 16px;
  padding: 4px;
  gap: 2px;
}

.lb-league-tab {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 10px 6px;
  border-radius: 12px;
  border: none;
  background: transparent;
  color: var(--pb-text-muted);
  font-size: 0.72rem;
  font-weight: 800;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.15s;
  letter-spacing: 0.04em;
}

.lb-league-tab:hover {
  background: var(--pb-bg);
  color: var(--pb-text);
}

.lb-league-tab--active {
  background: var(--pb-purple);
  color: white;
}

.lb-league-emoji {
  font-size: 1.1rem;
}

.lb-league-name {
  text-transform: uppercase;
}

/* League banner */
.lb-league-banner {
  display: flex;
  align-items: center;
  gap: 14px;
  border-radius: 16px;
  padding: 16px 20px;
  color: white;
}

.lb-league-banner-emoji {
  font-size: 2rem;
}

.lb-league-banner-title {
  font-size: 1.1rem;
  font-weight: 900;
}

.lb-league-banner-sub {
  font-size: 0.78rem;
  opacity: 0.8;
  margin-top: 2px;
  font-weight: 600;
}

/* List */
.lb-list {
  display: flex;
  flex-direction: column;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 18px;
  overflow: hidden;
}

.lb-zone-label {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 20px;
}

.lb-zone-promote {
  background: rgba(88, 204, 2, 0.1);
  color: var(--pb-green);
  border-bottom: 2px dashed rgba(88, 204, 2, 0.3);
}

.lb-zone-demote {
  background: rgba(255, 75, 75, 0.08);
  color: var(--pb-red);
  border-top: 2px dashed rgba(255, 75, 75, 0.25);
}

.lb-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 20px;
  border-bottom: 1px solid var(--pb-border);
  transition: background 0.12s;
}

.lb-item:last-child { border-bottom: none; }

.lb-item:hover {
  background: var(--pb-bg-card-hover);
}

.lb-item--me {
  background: rgba(124, 58, 237, 0.1);
  border-left: 3px solid var(--pb-purple);
}

.lb-item--demote {
  opacity: 0.75;
}

.lb-rank {
  width: 32px;
  text-align: center;
  flex-shrink: 0;
}

.lb-rank-medal {
  font-size: 1.3rem;
}

.lb-rank-num {
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--pb-text-muted);
}

.lb-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 900;
  color: white;
  flex-shrink: 0;
  position: relative;
}

.lb-avatar-badge {
  position: absolute;
  bottom: -4px;
  right: -4px;
  background: var(--pb-purple-light);
  color: white;
  font-size: 0.55rem;
  font-weight: 900;
  padding: 2px 5px;
  border-radius: 99px;
  letter-spacing: 0.05em;
}

.lb-info {
  flex: 1;
  min-width: 0;
}

.lb-username {
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--pb-text);
  display: flex;
  align-items: center;
  gap: 6px;
}

.lb-me-tag {
  font-size: 0.65rem;
  background: var(--pb-purple);
  color: white;
  padding: 2px 6px;
  border-radius: 99px;
  font-weight: 700;
}

.lb-level {
  font-size: 0.78rem;
  color: var(--pb-text-muted);
  font-weight: 600;
  margin-top: 1px;
}

.lb-xp {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-shrink: 0;
}

.lb-xp-value {
  font-size: 1rem;
  font-weight: 900;
  color: var(--pb-text);
}

.lb-xp-label {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--pb-text-muted);
  letter-spacing: 0.08em;
}
</style>
