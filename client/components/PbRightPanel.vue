<template>
  <div class="pb-right-panel">
    <!-- Stats Row -->
    <div class="pb-stats-row">
      <div class="pb-stat-item">
        <span class="pb-stat-icon fire">🔥</span>
        <span class="pb-stat-value">{{ stats.streak }}</span>
      </div>
      <div class="pb-stat-item">
        <span class="pb-stat-icon gem">💎</span>
        <span class="pb-stat-value">{{ stats.gems }}</span>
      </div>
      <div class="pb-stat-item">
        <span class="pb-stat-icon heart">❤️</span>
        <span class="pb-stat-value">{{ stats.hearts }}</span>
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
  </div>
</template>

<script setup lang="ts">
const stats = ref({
  streak: 7,
  gems: 500,
  hearts: 5,
  lessonsToLeaderboard: 4,
  dailyXp: 35,
  dailyGoal: 50,
});

const dailyQuests = ref([
  { id: 1, icon: "⚡", name: "10 XP Kazan", current: 10, target: 10, xp: 10 },
  { id: 2, icon: "🎯", name: "5 Soru Çöz", current: 3, target: 5, xp: 20 },
  { id: 3, icon: "🔥", name: "3 Ders Tamamla", current: 1, target: 3, xp: 30 },
]);
</script>

<style scoped>
.pb-right-panel {
  width: 280px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 0 24px 16px;
}

.pb-stats-row {
  display: flex;
  gap: 16px;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 16px;
  padding: 14px 16px;
  justify-content: space-around;
}

.pb-stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pb-stat-icon {
  font-size: 1.3rem;
}

.pb-stat-value {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--pb-text);
}

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
