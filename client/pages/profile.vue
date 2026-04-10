<template>
  <div class="prof-page">
    <!-- Profile Header -->
    <div class="prof-header">
      <div class="prof-avatar-wrap">
        <div class="prof-avatar">{{ profile.username?.[0]?.toUpperCase() ?? '?' }}</div>
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
      <div class="prof-stat-card">
        <div class="prof-stat-icon">🌰</div>
        <div class="prof-stat-value">{{ profile.acornBalance.toLocaleString('tr') }}</div>
        <div class="prof-stat-label">Acorn</div>
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
        <button class="enrollment-add-btn" @click="openEnrollModal">+ Sınav Ekle</button>
      </div>
    </div>

    <!-- Actions -->
    <div class="prof-actions">
      <button class="pb-btn-outline">✏️ Profili Düzenle</button>
      <button class="pb-btn-outline prof-signout-btn" @click="signOut">🚪 Çıkış</button>
    </div>
  </div>

  <!-- Enroll Modal -->
  <transition name="dialog-fade">
    <div v-if="showEnrollModal" class="enroll-overlay" @click.self="closeEnrollModal">
      <div class="enroll-modal">
        <button class="enroll-close" @click="closeEnrollModal">✕</button>

        <!-- Step 1: Group selection -->
        <template v-if="enrollStep === 1">
          <h2 class="enroll-title">Sınav Grubu Seç</h2>
          <div v-if="loadingExamGroups" class="enroll-loading">Yükleniyor…</div>
          <div v-else class="enroll-grid">
            <button
              v-for="group in examGroups"
              :key="group.id"
              class="enroll-card"
              :class="{
                'enroll-card--selected': selectedGroupId === group.id,
                'enroll-card--disabled': !group.is_active,
              }"
              :disabled="!group.is_active"
              @click="selectGroup(group)"
            >
              <span class="enroll-card-name">{{ group.name }}</span>
              <span class="enroll-card-desc">{{ group.description }}</span>
              <span v-if="!group.is_active" class="enroll-card-soon">Yakında</span>
            </button>
          </div>
          <button class="pb-btn-primary enroll-next" :disabled="!selectedGroupId" @click="enrollStep = 2">Devam →</button>
        </template>

        <!-- Step 2: Type selection -->
        <template v-else-if="enrollStep === 2">
          <h2 class="enroll-title">Sınav Türü Seç</h2>
          <div class="enroll-grid">
            <button
              v-for="type in availableTypes"
              :key="type.id"
              class="enroll-card"
              :class="{ 'enroll-card--selected': selectedTypeId === type.id }"
              @click="selectedTypeId = type.id"
            >
              <span class="enroll-card-name">{{ type.name }}</span>
              <span class="enroll-card-desc">{{ type.description }}</span>
            </button>
          </div>
          <div v-if="availableTypes.length === 0" class="enroll-empty">Bu gruptaki tüm sınavlara zaten kayıtlısın.</div>
          <p v-if="enrollError" class="enroll-error">{{ enrollError }}</p>
          <div class="enroll-actions">
            <button class="pb-btn-outline" @click="enrollStep = 1">← Geri</button>
            <button class="pb-btn-primary" :disabled="!selectedTypeId || enrolling" @click="submitEnrollment">
              {{ enrolling ? 'Ekleniyor…' : 'Sınav Ekle' }}
            </button>
          </div>
        </template>
      </div>
    </div>
  </transition>
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

// Enroll modal state
interface ExamGroup {
  id: string;
  name: string;
  description: string;
  is_active: boolean;
  exam_types: { id: string; name: string; description: string }[];
}

const enrollStep = ref(1);
const examGroups = ref<ExamGroup[]>([]);
const loadingExamGroups = ref(false);
const selectedGroupId = ref('');
const selectedTypeId = ref('');
const enrolling = ref(false);
const enrollError = ref('');

const availableTypes = computed(() => {
  const group = examGroups.value.find(g => g.id === selectedGroupId.value);
  if (!group) return [];
  const enrolledIds = new Set(enrollments.value.map(e => e.exam_type_id));
  return group.exam_types.filter(t => !enrolledIds.has(t.id));
});

function selectGroup(group: ExamGroup) {
  selectedGroupId.value = group.id;
  selectedTypeId.value = '';
}

function closeEnrollModal() {
  showEnrollModal.value = false;
  enrollStep.value = 1;
  selectedGroupId.value = '';
  selectedTypeId.value = '';
  enrollError.value = '';
}

async function openEnrollModal() {
  showEnrollModal.value = true;
  enrollStep.value = 1;
  selectedGroupId.value = '';
  selectedTypeId.value = '';
  enrollError.value = '';
  if (examGroups.value.length === 0) {
    loadingExamGroups.value = true;
    try {
      const groups = await $fetch<ExamGroup[]>('/api/exam-groups', {
        headers: { Authorization: `Bearer ${localStorage.getItem('pb_token')}` },
      });
      examGroups.value = groups;
    } catch { /* skip */ }
    loadingExamGroups.value = false;
  }
}

async function submitEnrollment() {
  if (!selectedTypeId.value) return;
  enrolling.value = true;
  enrollError.value = '';
  const token = localStorage.getItem('pb_token');
  if (!token) return;
  try {
    await $fetch('/api/users/me/enrollments', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: { exam_type_id: selectedTypeId.value },
    });
    closeEnrollModal();
    await fetchEnrollments();
  } catch (e: unknown) {
    const data = (e as { data?: { error?: string } })?.data;
    enrollError.value = data?.error || 'Kayıt başarısız. Tekrar dene.';
  } finally {
    enrolling.value = false;
  }
}

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

const profile = ref({
  username: '',
  email: '',
  totalXp: 0,
  level: 1,
  xpInLevel: 0,
  xpNextLevel: 500,
  currentStreak: 0,
  maxStreak: 0,
  quizzesCompleted: 0,
  acornBalance: 0,
});

const weekDays = ref([
  { label: 'Pzt', done: false, isToday: false },
  { label: 'Sal', done: false, isToday: false },
  { label: 'Çrş', done: false, isToday: false },
  { label: 'Per', done: false, isToday: false },
  { label: 'Cum', done: false, isToday: false },
  { label: 'Cts', done: false, isToday: false },
  { label: 'Paz', done: false, isToday: false },
]);

interface Achievement {
  name: string;
  icon: string;
  description: string;
  earned: boolean;
}

const achievements = ref<Achievement[]>([]);

const fetchProfile = async () => {
  const token = localStorage.getItem('pb_token');
  if (!token) return;
  const h = { Authorization: `Bearer ${token}` };
  try {
    const [user, stats, earnedAchievements, allAchievements, streakHistory] = await Promise.all([
      $fetch<{
        username: string;
        email: string;
        acorn_balance: number;
        active_exam_type_id?: string;
      }>('/api/users/me', { headers: h }),
      $fetch<{
        xp: number;
        total_xp: number;
        level: number;
        current_streak: number;
        max_streak: number;
        quizzes_completed: number;
      }>('/api/users/me/stats', { headers: h }),
      $fetch<{
        id: string;
        name: string;
        icon_url: string;
        description: string;
        earned_at: string;
      }[]>('/api/users/me/achievements', { headers: h }),
      // We don't have a GET /achievements yet, so we skip fetching all
      Promise.resolve([] as { id: string; name: string; icon_url: string; description: string }[]),
      $fetch<{ label: string; date: string; done: boolean; isToday: boolean }[]>('/api/users/me/streak-history', { headers: h }),
    ]);

    const level = stats.level ?? Math.floor((stats.total_xp ?? 0) / 500) + 1;
    const xpForLevel = (stats.total_xp ?? 0) % 500;

    profile.value = {
      username: user.username,
      email: user.email,
      totalXp: stats.total_xp ?? 0,
      level,
      xpInLevel: xpForLevel,
      xpNextLevel: 500,
      currentStreak: stats.current_streak ?? 0,
      maxStreak: stats.max_streak ?? 0,
      quizzesCompleted: stats.quizzes_completed ?? 0,
      acornBalance: user.acorn_balance ?? 0,
    };

    activeExamTypeId.value = user.active_exam_type_id ?? '';

    // Update week days from streak history
    if (streakHistory && streakHistory.length === 7) {
      weekDays.value = streakHistory;
    }

    const earnedIds = new Set(earnedAchievements.map((a) => a.name));
    achievements.value = earnedAchievements.map((a) => ({
      name: a.name,
      icon: a.icon_url || '🏅',
      description: a.description,
      earned: true,
    }));
    // Add unearned from all achievements if available
    for (const a of allAchievements) {
      if (!earnedIds.has(a.name)) {
        achievements.value.push({
          name: a.name,
          icon: a.icon_url || '🏅',
          description: a.description,
          earned: false,
        });
      }
    }
  } catch {
    // silently fail
  }
};

const fetchEnrollments = async () => {
  const token = localStorage.getItem('pb_token');
  if (!token) return;
  loadingEnrollments.value = true;
  try {
    const list = await $fetch<Enrollment[]>('/api/users/me/enrollments', {
      headers: { Authorization: `Bearer ${token}` },
    });
    enrollments.value = list;
  } catch {
    // silently fail
  } finally {
    loadingEnrollments.value = false;
  }
};

onMounted(() => {
  fetchProfile();
  fetchEnrollments();
});
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

/* ===== Enroll Modal ===== */
.enroll-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  padding: 20px;
}

.enroll-modal {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 20px;
  padding: 28px 24px;
  max-width: 480px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.enroll-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: var(--pb-bg);
  color: var(--pb-text-muted);
  font-size: 0.9rem;
  font-weight: 900;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  transition: background 0.12s, color 0.12s;
}

.enroll-close:hover {
  background: var(--pb-bg-card-hover);
  color: var(--pb-text);
}

.enroll-title {
  font-size: 1.15rem;
  font-weight: 900;
  color: var(--pb-text);
}

.enroll-loading {
  color: var(--pb-text-muted);
  font-size: 0.9rem;
  padding: 16px 0;
}

.enroll-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.enroll-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 18px;
  border-radius: 14px;
  border: 2px solid var(--pb-border);
  background: var(--pb-bg);
  color: var(--pb-text);
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  transition: border-color 0.15s, background 0.15s;
  position: relative;
}

.enroll-card:hover {
  background: var(--pb-bg-card-hover);
}

.enroll-card--selected {
  border-color: var(--pb-purple-light);
  background: rgba(124, 58, 237, 0.1);
}

.enroll-card--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.enroll-card-name {
  font-size: 0.95rem;
  font-weight: 800;
}

.enroll-card-desc {
  font-size: 0.78rem;
  color: var(--pb-text-muted);
  font-weight: 600;
}

.enroll-card-soon {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--pb-orange);
  background: rgba(255, 150, 0, 0.12);
  padding: 2px 8px;
  border-radius: 99px;
}

.enroll-empty {
  color: var(--pb-text-muted);
  font-size: 0.85rem;
  padding: 12px 0;
  text-align: center;
}

.enroll-error {
  color: var(--pb-red);
  font-size: 0.82rem;
  font-weight: 700;
}

.enroll-actions {
  display: flex;
  gap: 10px;
  justify-content: space-between;
}

.enroll-next {
  align-self: stretch;
}

/* Dialog fade transition */
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.2s ease;
}
.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}
</style>
