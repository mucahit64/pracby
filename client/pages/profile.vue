<template>
  <div class="prof-page">
    <!-- Profile Header -->
    <div class="prof-header">
      <div class="prof-avatar-wrap">
        <div class="prof-avatar">{{ profile.username[0].toUpperCase() }}</div>
        <div class="prof-level-badge">Seviye {{ profile.level }}</div>
      </div>
      <div class="prof-info">
        <h1 class="prof-username">{{ profile.username }}</h1>
        <p class="prof-email">{{ profile.email }}</p>
        <div class="prof-xp-bar-wrap">
          <div class="prof-xp-label">
            <span>Seviye {{ profile.level }}</span>
            <span>{{ profile.xpInLevel }} / {{ profile.xpNextLevel }} XP</span>
          </div>
          <div class="prof-xp-bar">
            <div class="prof-xp-fill" :style="{ width: `${(profile.xpInLevel / profile.xpNextLevel) * 100}%` }" />
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="prof-stats-grid">
      <div class="prof-stat-card">
        <div class="prof-stat-icon">⚡</div>
        <div class="prof-stat-value">{{ profile.totalXp.toLocaleString('tr') }}</div>
        <div class="prof-stat-label">Toplam XP</div>
      </div>
      <div class="prof-stat-card">
        <div class="prof-stat-icon">🔥</div>
        <div class="prof-stat-value">{{ profile.currentStreak }}</div>
        <div class="prof-stat-label">Güncel Seri</div>
      </div>
      <div class="prof-stat-card">
        <div class="prof-stat-icon">🏆</div>
        <div class="prof-stat-value">{{ profile.maxStreak }}</div>
        <div class="prof-stat-label">En Uzun Seri</div>
      </div>
      <div class="prof-stat-card">
        <div class="prof-stat-icon">🎯</div>
        <div class="prof-stat-value">{{ profile.quizzesCompleted }}</div>
        <div class="prof-stat-label">Quiz</div>
      </div>
    </div>

    <!-- Streak Calendar -->
    <div class="prof-section">
      <div class="prof-section-title">📅 Bu Haftaki Seri</div>
      <div class="streak-calendar">
        <div
          v-for="day in weekDays"
          :key="day.label"
          class="streak-day"
          :class="{ 'streak-day--done': day.done, 'streak-day--today': day.isToday }"
        >
          <div class="streak-day-icon">{{ day.done ? '🔥' : '·' }}</div>
          <div class="streak-day-label">{{ day.label }}</div>
        </div>
      </div>
    </div>

    <!-- Achievements -->
    <div class="prof-section">
      <div class="prof-section-title">🏅 Başarımlar</div>
      <div class="achievements-grid">
        <div
          v-for="badge in achievements"
          :key="badge.name"
          class="achievement-card"
          :class="{ 'achievement-card--locked': !badge.earned }"
          :title="badge.description"
        >
          <div class="achievement-icon">{{ badge.icon }}</div>
          <div class="achievement-name">{{ badge.name }}</div>
          <div v-if="badge.earned" class="achievement-earned-dot" />
        </div>
      </div>
    </div>

    <!-- Enrollments -->
    <div class="prof-section">
      <div class="prof-section-title">🎓 Kayıtlı Sınavlarım</div>
      <div v-if="loadingEnrollments" class="enrollments-loading">Yükleniyor…</div>
      <div v-else class="enrollments-list">
        <div
          v-for="enrollment in enrollments"
          :key="enrollment.exam_type_id"
          class="enrollment-card"
          :class="{ 'enrollment-card--active': enrollment.exam_type_id === activeExamTypeId }"
        >
          <div class="enrollment-info">
            <span class="enrollment-group">{{ enrollment.exam_group_name }}</span>
            <span class="enrollment-type">{{ enrollment.exam_type_name }}</span>
          </div>
          <button
            v-if="enrollment.exam_type_id !== activeExamTypeId"
            class="enrollment-switch-btn"
            @click="switchExam(enrollment.exam_type_id)"
          >
            Geç
          </button>
          <span v-else class="enrollment-active-badge">Aktif</span>
        </div>
        <button class="enrollment-add-btn" @click="showEnrollModal = true">+ Sınav Ekle</button>
      </div>
    </div>

    <!-- Actions -->
    <div class="prof-actions">
      <button class="pb-btn-outline">✏️ Profili Düzenle</button>
      <button class="pb-btn-outline prof-signout-btn" @click="signOut">🚪 Çıkış</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

interface Enrollment {
  id: string;
  exam_type_id: string;
  exam_type_name: string;
  exam_type_slug: string;
  exam_group_name: string;
  exam_group_slug: string;
  enrolled_at: string;
}

const activeExamTypeId = ref('');
const enrollments = ref<Enrollment[]>([]);
const loadingEnrollments = ref(false);
const showEnrollModal = ref(false);

const fetchEnrollments = async () => {
  const token = localStorage.getItem('pb_token');
  if (!token) return;
  loadingEnrollments.value = true;
  try {
    const [userProfile, list] = await Promise.all([
      $fetch<{ active_exam_type_id?: string }>('/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      }),
      $fetch<Enrollment[]>('/api/users/me/enrollments', {
        headers: { Authorization: `Bearer ${token}` },
      }),
    ]);
    activeExamTypeId.value = userProfile.active_exam_type_id ?? '';
    enrollments.value = list;
  } catch {
    // silently fail
  } finally {
    loadingEnrollments.value = false;
  }
};

const switchExam = async (examTypeId: string) => {
  const token = localStorage.getItem('pb_token');
  if (!token) return;
  try {
    await $fetch('/api/users/me/active-exam', {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}` },
      body: { exam_type_id: examTypeId },
    });
    activeExamTypeId.value = examTypeId;
  } catch {
    // silently fail
  }
};

const signOut = () => {
  localStorage.removeItem('pb_token');
  router.replace('/auth/login');
};

onMounted(fetchEnrollments);

const profile = ref({
  username: 'mucahit',
  email: 'mucahit@pracby.com',
  totalXp: 1250,
  level: 5,
  xpInLevel: 250,
  xpNextLevel: 500,
  currentStreak: 7,
  maxStreak: 12,
  quizzesCompleted: 28,
});

const weekDays = ref([
  { label: 'Pzt', done: true, isToday: false },
  { label: 'Sal', done: true, isToday: false },
  { label: 'Çrş', done: true, isToday: false },
  { label: 'Per', done: true, isToday: false },
  { label: 'Cum', done: true, isToday: false },
  { label: 'Cts', done: true, isToday: false },
  { label: 'Paz', done: false, isToday: true },
]);

const achievements = ref([
  { name: 'İlk Adım', icon: '⭐', description: 'İlk quizi tamamla', earned: true },
  { name: '7 Günlük', icon: '🔥', description: '7 gün seri yap', earned: true },
  { name: '1K XP', icon: '⚡', description: '1000 XP kazan', earned: true },
  { name: 'Hızlı Top', icon: '⚡', description: '3 dersi arka arkaya tamamla', earned: true },
  { name: '30 Günlük', icon: '🌟', description: '30 gün seri yap', earned: false },
  { name: '5K XP', icon: '💎', description: '5000 XP kazan', earned: false },
  { name: '10 Arkadaş', icon: '👥', description: '10 arkadaş edin', earned: false },
  { name: 'Altın Lig', icon: '🏆', description: "Altın Lig'e ulaş", earned: false },
  { name: 'Mükemmel', icon: '✨', description: 'Bir quizi hatasız bitir', earned: false },
]);
</script>

<style scoped>
.prof-page {
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 560px;
  margin: 0 auto;
  padding-bottom: 40px;
}

/* Profile Header */
.prof-header {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 20px;
  padding: 24px;
}

.prof-avatar-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.prof-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--pb-purple), var(--pb-purple-light));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 900;
  color: white;
  border: 3px solid rgba(255,255,255,0.15);
}

.prof-level-badge {
  background: var(--pb-purple);
  color: white;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 99px;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.prof-info {
  flex: 1;
  min-width: 0;
}

.prof-username {
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--pb-text);
  margin-bottom: 4px;
}

.prof-email {
  font-size: 0.82rem;
  color: var(--pb-text-muted);
  font-weight: 600;
  margin-bottom: 14px;
}

.prof-xp-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--pb-text-muted);
  margin-bottom: 6px;
}

.prof-xp-bar {
  height: 12px;
  background: var(--pb-bg);
  border-radius: 99px;
  overflow: hidden;
}

.prof-xp-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--pb-purple), var(--pb-purple-light));
  border-radius: 99px;
  transition: width 0.6s ease;
}

/* Stats Grid */
.prof-stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.prof-stat-card {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 16px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
  transition: background 0.15s;
}

.prof-stat-card:hover {
  background: var(--pb-bg-card-hover);
}

.prof-stat-icon {
  font-size: 1.6rem;
}

.prof-stat-value {
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--pb-text);
}

.prof-stat-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--pb-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* Section */
.prof-section {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.prof-section-title {
  font-size: 1rem;
  font-weight: 800;
  color: var(--pb-text);
}

/* Streak Calendar */
.streak-calendar {
  display: flex;
  justify-content: space-between;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 16px;
  padding: 16px;
  flex-wrap: wrap;
  gap: 8px;
}

.streak-day {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 36px;
}

.streak-day-icon {
  font-size: 1.3rem;
  line-height: 1;
}

.streak-day-label {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--pb-text-muted);
}

.streak-day--today .streak-day-label {
  color: var(--pb-purple-light);
}

.streak-day--today .streak-day-icon {
  background: rgba(124,58,237,0.15);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Achievements */
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.achievement-card {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 14px;
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  position: relative;
  cursor: default;
  transition: background 0.15s;
}

.achievement-card:hover {
  background: var(--pb-bg-card-hover);
}

.achievement-card--locked {
  opacity: 0.4;
}

.achievement-icon {
  font-size: 1.8rem;
}

.achievement-name {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--pb-text);
  text-align: center;
}

.achievement-earned-dot {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  background: var(--pb-green);
  border-radius: 50%;
}

/* Enrollments */
.enrollments-loading {
  color: var(--pb-text-muted);
  font-size: 0.9rem;
  padding: 10px 0;
}

.enrollments-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.enrollment-card {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.enrollment-card--active {
  border-color: rgba(124, 58, 237, 0.5);
  background: rgba(124, 58, 237, 0.08);
}

.enrollment-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.enrollment-group {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--pb-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.enrollment-type {
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--pb-text);
}

.enrollment-switch-btn {
  background: var(--pb-bg);
  border: 2px solid var(--pb-border);
  border-radius: 10px;
  padding: 6px 14px;
  font-size: 0.82rem;
  font-weight: 700;
  font-family: inherit;
  color: var(--pb-text-muted);
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
  white-space: nowrap;
}

.enrollment-switch-btn:hover {
  border-color: var(--pb-purple-light);
  color: var(--pb-purple-light);
}

.enrollment-active-badge {
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--pb-purple-light);
  background: rgba(124, 58, 237, 0.15);
  padding: 4px 12px;
  border-radius: 99px;
  white-space: nowrap;
}

.enrollment-add-btn {
  background: transparent;
  border: 2px dashed var(--pb-border);
  border-radius: 14px;
  padding: 12px 18px;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: inherit;
  color: var(--pb-text-muted);
  cursor: pointer;
  text-align: left;
  transition: border-color 0.15s, color 0.15s;
}

.enrollment-add-btn:hover {
  border-color: var(--pb-purple-light);
  color: var(--pb-purple-light);
}

/* Actions */
.prof-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.prof-signout-btn {
  color: var(--pb-red);
  border-color: var(--pb-red);
}

.prof-signout-btn:hover {
  background: rgba(255, 75, 75, 0.08);
}
</style>
