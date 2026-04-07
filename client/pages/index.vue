<template>
  <div class="learn-page">
    <!-- Active exam badge -->
    <div v-if="activeExamName" class="active-exam-banner">
      <span class="active-exam-label">Aktif Sınav</span>
      <span class="active-exam-name">{{ activeExamName }}</span>
    </div>

    <!-- Unit sections -->
    <div v-for="(unit, uIdx) in units" :key="unit.id" class="learn-unit">
      <!-- Unit banner -->
      <div class="unit-banner">
        <div class="unit-banner-left">
          <div class="unit-meta">BÖLÜM {{ uIdx + 1 }}, ÜNİTE {{ unit.id }}</div>
          <div class="unit-title">{{ unit.title }}</div>
        </div>
        <button class="unit-guidebook-btn" @click="openGuidebook(unit)">
          📖 REHBER
        </button>
      </div>

      <!-- Lesson path (zigzag) -->
      <div class="lesson-path">
        <div
          v-for="(lesson, lIdx) in unit.lessons"
          :key="lesson.id"
          class="lesson-row"
          :class="`offset-${(lIdx % 5)}`"
        >
          <!-- Show mascot next to first active lesson -->
          <div
            v-if="lesson.status === 'active'"
            class="mascot-bubble"
          >
            <div class="speech-bubble">YAP!</div>
            <PbMascot :width="64" :height="80" />
          </div>

          <!-- Lesson Node -->
          <div class="lesson-node-wrapper">
            <!-- START label above active -->
            <div v-if="lesson.status === 'active'" class="lesson-start-label">BAŞLA</div>

            <!-- Node button -->
            <button
              class="lesson-node"
              :class="[`lesson-node--${lesson.status}`, lesson.type === 'chest' ? 'lesson-node--chest' : '', lesson.type === 'boss' ? 'lesson-node--boss' : '']"
              :disabled="lesson.status === 'locked'"
              @click="goToLesson(lesson)"
            >
              <!-- Crown indicator dots for completed lessons -->
              <div v-if="lesson.status === 'completed'" class="crown-dots">
                <span
                  v-for="i in 5"
                  :key="i"
                  class="crown-dot"
                  :class="{ 'crown-dot--filled': i <= lesson.crowns }"
                />
              </div>

              <span class="lesson-icon">
                {{ lesson.status === 'locked' ? '🔒' : lesson.icon }}
              </span>
            </button>

            <!-- Lesson name below node -->
            <div class="lesson-label" :class="{ 'lesson-label--muted': lesson.status === 'locked' }">
              {{ lesson.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Jump ahead button -->
    <div class="jump-section">
      <div class="jump-btn-wrapper">
        <div class="jump-label">ATLA?</div>
        <button class="jump-btn" @click="jumpAhead">⏭</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Lesson {
  id: string;
  name: string;
  icon: string;
  type: 'lesson' | 'chest' | 'boss';
  status: 'completed' | 'active' | 'locked';
  crowns: number;
  courseId?: string;
}

interface Unit {
  id: number;
  title: string;
  lessons: Lesson[];
}

const activeExamName = ref('');

onMounted(async () => {
  const token = localStorage.getItem('pb_token');
  if (!token) return;
  try {
    const profile = await $fetch<{ active_exam_type_id?: string }>('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (profile.active_exam_type_id) {
      const examGroups = await $fetch<Array<{ exam_types: Array<{ id: string; name: string }> }>>('/api/exam-groups');
      const allTypes = examGroups.flatMap((g) => g.exam_types);
      const match = allTypes.find((t) => t.id === profile.active_exam_type_id);
      if (match) activeExamName.value = match.name;
    }
  } catch {
    // silently fail — page still works with mock data
  }
});

const units = ref<Unit[]>([
  {
    id: 1,
    title: 'Türkçe Temelleri',
    lessons: [
      { id: 'l1', name: 'Ses Bilgisi', icon: '🔤', type: 'lesson', status: 'completed', crowns: 5 },
      { id: 'l2', name: 'Hece Yapısı', icon: '📝', type: 'lesson', status: 'completed', crowns: 3 },
      { id: 'l3', name: 'Yazım Kuralları', icon: '✏️', type: 'lesson', status: 'completed', crowns: 1 },
      { id: 'l4', name: 'Noktalama', icon: '📌', type: 'lesson', status: 'active', crowns: 0 },
      { id: 'l5', name: '', icon: '🎁', type: 'chest', status: 'locked', crowns: 0 },
      { id: 'l6', name: 'Sözcük Türleri', icon: '🗂️', type: 'lesson', status: 'locked', crowns: 0 },
      { id: 'l7', name: 'İsim — Fiil', icon: '📖', type: 'lesson', status: 'locked', crowns: 0 },
      { id: 'l8', name: 'Sıfatlar', icon: '🎨', type: 'lesson', status: 'locked', crowns: 0 },
      { id: 'l9', name: 'Birim Boss', icon: '⚔️', type: 'boss', status: 'locked', crowns: 0 },
    ],
  },
  {
    id: 2,
    title: 'Matematik Temelleri',
    lessons: [
      { id: 'm1', name: 'Sayı Sistemleri', icon: '🔢', type: 'lesson', status: 'locked', crowns: 0 },
      { id: 'm2', name: 'Kesirler', icon: '➗', type: 'lesson', status: 'locked', crowns: 0 },
      { id: 'm3', name: 'Yüzdeler', icon: '📊', type: 'lesson', status: 'locked', crowns: 0 },
      { id: 'm4', name: '', icon: '🎁', type: 'chest', status: 'locked', crowns: 0 },
      { id: 'm5', name: 'Oranlar', icon: '⚖️', type: 'lesson', status: 'locked', crowns: 0 },
      { id: 'm6', name: 'İşlem Önceliği', icon: '🧮', type: 'lesson', status: 'locked', crowns: 0 },
    ],
  },
]);

const offsets = ['0px', '60px', '100px', '60px', '0px'];

function goToLesson(lesson: Lesson) {
  if (lesson.status === 'locked') return;
  if (lesson.type === 'boss' || lesson.type === 'lesson') {
    navigateTo(`/quiz/${lesson.id}`);
  }
}

function jumpAhead() {
  const firstLocked = units.value.flatMap(u => u.lessons).find(l => l.status === 'locked');
  if (firstLocked) goToLesson({ ...firstLocked, status: 'active' });
}

function openGuidebook(unit: Unit) {
  console.log('Guidebook:', unit.title);
}
</script>

<style scoped>
.active-exam-banner {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(124, 58, 237, 0.15);
  border: 2px solid rgba(124, 58, 237, 0.35);
  border-radius: 14px;
  padding: 10px 18px;
  max-width: 480px;
}

.active-exam-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--pb-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.active-exam-name {
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--pb-purple-light);
}

.learn-page {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 40px;
}

/* ===== Unit Banner ===== */
.learn-unit {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.unit-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, var(--pb-purple-dark) 0%, var(--pb-purple) 100%);
  border-radius: 18px;
  padding: 18px 22px;
  margin-bottom: 24px;
  border-bottom: 4px solid #4c1d95;
}

.unit-meta {
  font-size: 0.72rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.unit-title {
  font-size: 1.1rem;
  font-weight: 900;
  color: white;
}

.unit-guidebook-btn {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  padding: 9px 16px;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  font-family: inherit;
  letter-spacing: 0.05em;
  transition: background 0.15s;
}

.unit-guidebook-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

/* ===== Lesson Path ===== */
.lesson-path {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.lesson-row {
  display: flex;
  align-items: flex-end;
  gap: 0;
  position: relative;
}

/* Zigzag offsets */
.offset-0 { transform: translateX(0px); }
.offset-1 { transform: translateX(50px); }
.offset-2 { transform: translateX(80px); }
.offset-3 { transform: translateX(50px); }
.offset-4 { transform: translateX(0px); }

.lesson-node-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  position: relative;
}

.lesson-start-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--pb-text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 12px;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 99px;
  margin-bottom: -2px;
}

/* ===== Lesson Node Button ===== */
.lesson-node {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-size: 1.6rem;
  transition: transform 0.12s, box-shadow 0.12s;
  position: relative;
  font-family: inherit;
}

.lesson-node:hover:not(:disabled) {
  transform: translateY(-3px);
}

.lesson-node:active:not(:disabled) {
  transform: translateY(2px);
}

/* Completed */
.lesson-node--completed {
  background: var(--pb-purple);
  box-shadow: 0 6px 0 var(--pb-purple-dark);
}

/* Active (current) */
.lesson-node--active {
  background: var(--pb-purple);
  box-shadow: 0 6px 0 var(--pb-purple-dark);
  animation: pulse 2s infinite;
}

/* Locked */
.lesson-node--locked {
  background: var(--pb-bg-card);
  box-shadow: 0 5px 0 rgba(0,0,0,0.4);
  cursor: not-allowed;
  border: 3px solid var(--pb-border);
}

/* Chest node */
.lesson-node--chest {
  background: linear-gradient(145deg, #d97706, #f59e0b);
  box-shadow: 0 6px 0 #92400e;
}

.lesson-node--chest.lesson-node--locked {
  background: var(--pb-bg-card);
  box-shadow: 0 5px 0 rgba(0,0,0,0.4);
}

/* Boss node */
.lesson-node--boss {
  background: linear-gradient(145deg, #dc2626, #ef4444);
  box-shadow: 0 6px 0 #991b1b;
  width: 80px;
  height: 80px;
}

.lesson-node--boss.lesson-node--locked {
  background: var(--pb-bg-card);
  box-shadow: 0 5px 0 rgba(0,0,0,0.4);
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 6px 0 var(--pb-purple-dark); }
  50% { box-shadow: 0 6px 20px rgba(124, 58, 237, 0.6); }
}

.lesson-icon {
  line-height: 1;
}

/* Crown dots */
.crown-dots {
  display: flex;
  gap: 3px;
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
}

.crown-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
}

.crown-dot--filled {
  background: var(--pb-gold);
}

.lesson-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--pb-text);
  text-align: center;
  max-width: 90px;
}

.lesson-label--muted {
  color: var(--pb-text-muted);
}

/* ===== Mascot Bubble ===== */
.mascot-bubble {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 12px;
  margin-bottom: 4px;
  position: absolute;
  right: 100%;
  bottom: 0;
}

.speech-bubble {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 12px;
  padding: 5px 12px;
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--pb-text);
  letter-spacing: 0.05em;
  position: relative;
  margin-bottom: 4px;
  white-space: nowrap;
}

.speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: var(--pb-border);
}

/* ===== Jump Section ===== */
.jump-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.jump-btn-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.jump-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--pb-text-muted);
  letter-spacing: 0.1em;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 99px;
  padding: 4px 12px;
}

.jump-btn {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--pb-purple);
  color: white;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  box-shadow: 0 5px 0 var(--pb-purple-dark);
  transition: transform 0.12s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.jump-btn:hover {
  transform: translateY(-2px);
}

.jump-btn:active {
  transform: translateY(3px);
  box-shadow: 0 2px 0 var(--pb-purple-dark);
}
</style>
