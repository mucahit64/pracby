<template>
  <div class="learn-page">
    <!-- Active exam badge -->
    <div v-if="activeExamName" class="active-exam-banner">
      <span class="active-exam-label">Aktif Sınav</span>
      <span class="active-exam-name">{{ activeExamName }}</span>
    </div>

    <!-- Module tabs -->
    <div v-if="modules.length > 0" class="module-tabs">
      <button
        v-for="mod in modules"
        :key="mod.id"
        class="module-tab"
        :class="{ 'module-tab--active': selectedModuleId === mod.id }"
        @click="selectModule(mod.id)"
      >
        <span class="module-tab-icon">{{ mod.icon_url }}</span>
        <span class="module-tab-name">{{ mod.name }}</span>
      </button>
    </div>

    <!-- Course selector -->
    <div v-if="courses.length > 0" class="course-selector">
      <button
        v-for="course in courses"
        :key="course.id"
        class="course-chip"
        :class="{ 'course-chip--active': selectedCourseId === course.id }"
        @click="selectCourse(course.id)"
      >
        <span class="course-chip-icon">{{ course.icon_url }}</span>
        <span class="course-chip-name">{{ course.name }}</span>
      </button>
    </div>

    <!-- Loading -->
    <div v-if="loadingFull" class="loading-state">
      <div class="loading-spinner" />
      <p>Yükleniyor…</p>
    </div>

    <!-- Unit sections (topics) -->
    <template v-else-if="courseFull">
      <div v-for="(topic, tIdx) in courseFull.topics" :key="topic.id" class="learn-unit">
        <!-- Unit banner -->
        <div class="unit-banner">
          <div class="unit-banner-left">
            <div class="unit-meta">BÖLÜM {{ tIdx + 1 }}</div>
            <div class="unit-title">{{ topic.name }}</div>
          </div>
          <button class="unit-guidebook-btn" @click="openGuidebook(topic)">
            📖 REHBER
          </button>
        </div>

        <!-- Lesson path (zigzag) -->
        <div class="lesson-path">
          <div
            v-for="(node, nIdx) in buildLessonNodes(topic)"
            :key="node.id"
            class="lesson-row"
            :class="`offset-${(nIdx % 5)}`"
          >
            <!-- Show mascot next to first active lesson -->
            <div
              v-if="node.status === 'active'"
              class="mascot-bubble"
            >
              <div class="speech-bubble">YAP!</div>
              <PbMascot :width="64" :height="80" />
            </div>

            <!-- Lesson Node -->
            <div class="lesson-node-wrapper">
              <!-- START label above active -->
              <div v-if="node.status === 'active'" class="lesson-start-label">BAŞLA</div>

              <!-- Node button -->
              <button
                class="lesson-node"
                :class="[`lesson-node--${node.status}`, node.type === 'chest' ? 'lesson-node--chest' : '', node.type === 'boss' ? 'lesson-node--boss' : '']"
                :disabled="node.status === 'locked'"
                @click="goToLesson(node)"
              >
                <!-- Crown indicator dots for completed lessons -->
                <div v-if="node.status === 'completed'" class="crown-dots">
                  <span
                    v-for="i in 5"
                    :key="i"
                    class="crown-dot"
                    :class="{ 'crown-dot--filled': i <= node.crowns }"
                  />
                </div>

                <span class="lesson-icon">
                  {{ node.status === 'locked' ? '🔒' : node.icon }}
                </span>
              </button>

              <!-- Lesson name below node -->
              <div class="lesson-label" :class="{ 'lesson-label--muted': node.status === 'locked' }">
                {{ node.name }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="courseFull.topics.length === 0" class="empty-state">
        <p>Bu ders için henüz konu eklenmemiş.</p>
      </div>
    </template>

    <!-- No data -->
    <div v-else-if="!loadingFull && !courseFull" class="empty-state">
      <p>Başlamak için yukarıdan modül ve ders seçin.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Module {
  id: string;
  name: string;
  icon_url: string;
  sort_order: number;
}

interface Course {
  id: string;
  name: string;
  icon_url: string;
  color: string;
  sort_order: number;
}

interface StepProgress {
  tests_completed: number;
  is_step_completed: boolean;
  step_final_passed: boolean;
  stars: number;
}

interface Test {
  id: string;
  name: string;
  sort_order: number;
}

interface Step {
  id: string;
  name: string;
  sort_order: number;
  step_type: string;
  tests_required: number;
  tests: Test[];
  progress: StepProgress | null;
}

interface TopicProgress {
  crown_level: number;
  is_unlocked: boolean;
  lessons_completed: number;
}

interface Topic {
  id: string;
  name: string;
  sort_order: number;
  steps: Step[];
  progress: TopicProgress | null;
}

interface CourseFull extends Course {
  topics: Topic[];
}

interface LessonNode {
  id: string;
  name: string;
  icon: string;
  type: 'lesson' | 'chest' | 'boss';
  status: 'completed' | 'active' | 'locked';
  crowns: number;
  topicId: string;
  stepId?: string;
  testId?: string;
  sessionType: string;
}

const activeExamName = ref('');
const activeExamTypeId = ref('');
const modules = ref<Module[]>([]);
const selectedModuleId = ref('');
const courses = ref<Course[]>([]);
const selectedCourseId = ref('');
const courseFull = ref<CourseFull | null>(null);
const loadingFull = ref(false);

function getToken() {
  return localStorage.getItem('pb_token') ?? '';
}

onMounted(async () => {
  const token = getToken();
  if (!token) return;

  try {
    const profile = await $fetch<{ active_exam_type_id?: string; hearts?: number; next_heart_at?: string | null }>('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Sync hearts to global state
    const heartsState = useState('userHearts', () => 5);
    heartsState.value = profile.hearts ?? 5;

    if (profile.active_exam_type_id) {
      activeExamTypeId.value = profile.active_exam_type_id;

      // Fetch exam name
      const examGroups = await $fetch<Array<{ exam_types: Array<{ id: string; name: string }> }>>('/api/exam-groups');
      const allTypes = examGroups.flatMap((g) => g.exam_types);
      const match = allTypes.find((t) => t.id === profile.active_exam_type_id);
      if (match) activeExamName.value = match.name;

      // Fetch modules
      const mods = await $fetch<Module[]>(`/api/modules?exam_type_id=${profile.active_exam_type_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      modules.value = mods;

      if (mods.length > 0) {
        const savedModuleId = localStorage.getItem('pb_selectedModuleId');
        const savedCourseId = localStorage.getItem('pb_selectedCourseId');
        const targetModule = savedModuleId && mods.find((m) => m.id === savedModuleId) ? savedModuleId : mods[0].id;
        await selectModule(targetModule, savedCourseId ?? undefined);
      }
    }
  } catch {
    // silently fail
  }
});

async function selectModule(moduleId: string, preferredCourseId?: string) {
  selectedModuleId.value = moduleId;
  localStorage.setItem('pb_selectedModuleId', moduleId);
  const token = getToken();

  try {
    const data = await $fetch<Course[]>(`/api/courses?module_id=${moduleId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    courses.value = data;

    if (data.length > 0) {
      const target = preferredCourseId && data.find((c) => c.id === preferredCourseId)
        ? preferredCourseId
        : data[0].id;
      await selectCourse(target);
    } else {
      selectedCourseId.value = '';
      courseFull.value = null;
    }
  } catch {
    courses.value = [];
  }
}

async function selectCourse(courseId: string) {
  selectedCourseId.value = courseId;
  localStorage.setItem('pb_selectedCourseId', courseId);
  loadingFull.value = true;
  const token = getToken();

  try {
    const data = await $fetch<CourseFull>(`/api/courses/${courseId}/full`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    courseFull.value = data;
  } catch {
    courseFull.value = null;
  } finally {
    loadingFull.value = false;
  }
}

function buildLessonNodes(topic: Topic): LessonNode[] {
  const nodes: LessonNode[] = [];
  let foundActive = false;

  for (const step of topic.steps) {
    if (step.step_type === 'reward') {
      // Reward steps appear as chest nodes
      const prevCompleted = nodes.length > 0 && nodes[nodes.length - 1].status === 'completed';
      nodes.push({
        id: `reward-${step.id}`,
        name: '',
        icon: '🎁',
        type: 'chest',
        status: prevCompleted ? 'active' : 'locked',
        crowns: 0,
        topicId: topic.id,
        stepId: step.id,
        sessionType: 'lesson',
      });
      continue;
    }

    // Each test in the step becomes a lesson node
    for (const test of step.tests) {
      const isCompleted = step.progress?.is_step_completed ?? false;
      const crowns = step.progress?.stars ?? 0;

      let status: 'completed' | 'active' | 'locked';
      if (isCompleted) {
        status = 'completed';
      } else if (!foundActive) {
        status = 'active';
        foundActive = true;
      } else {
        status = 'locked';
      }

      nodes.push({
        id: test.id,
        name: step.name,
        icon: '📝',
        type: 'lesson',
        status,
        crowns,
        topicId: topic.id,
        stepId: step.id,
        testId: test.id,
        sessionType: 'lesson',
      });
    }
  }

  // Boss node at end (topic final)
  if (topic.steps.length > 0) {
    const allCompleted = topic.steps
      .filter((s) => s.step_type !== 'reward')
      .every((s) => s.progress?.is_step_completed);

    nodes.push({
      id: `boss-${topic.id}`,
      name: 'Final',
      icon: '⚔️',
      type: 'boss',
      status: allCompleted ? 'active' : 'locked',
      crowns: 0,
      topicId: topic.id,
      sessionType: 'topic_final',
    });
  }

  return nodes;
}

function goToLesson(node: LessonNode) {
  if (node.status === 'locked') return;

  if (node.type === 'chest') {
    // Reward claim — handled differently
    return;
  }

  const query: Record<string, string> = {};
  if (node.stepId) query.stepId = node.stepId;
  if (node.testId) query.testId = node.testId;
  if (node.sessionType) query.sessionType = node.sessionType;

  navigateTo({ path: `/quiz/${node.topicId}`, query });
}

function openGuidebook(topic: Topic) {
  console.log('Guidebook:', topic.name);
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

/* ===== Module Tabs ===== */
.module-tabs {
  display: flex;
  gap: 8px;
}

.module-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 12px;
  border: 2px solid var(--pb-border);
  background: var(--pb-bg-card);
  color: var(--pb-text);
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s, border-color 0.15s;
}

.module-tab:hover {
  background: rgba(124, 58, 237, 0.1);
}

.module-tab--active {
  background: var(--pb-purple);
  border-color: var(--pb-purple);
  color: white;
}

.module-tab-icon {
  font-size: 1.2rem;
}

/* ===== Course Selector ===== */
.course-selector {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.course-chip {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 99px;
  border: 2px solid var(--pb-border);
  background: var(--pb-bg-card);
  color: var(--pb-text);
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s, border-color 0.15s;
}

.course-chip:hover {
  border-color: var(--pb-purple);
}

.course-chip--active {
  background: rgba(124, 58, 237, 0.15);
  border-color: var(--pb-purple);
  color: var(--pb-purple-light);
}

.course-chip-icon {
  font-size: 1rem;
}

/* ===== Loading & Empty ===== */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 60px 0;
  color: var(--pb-text-muted);
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid var(--pb-border);
  border-top-color: var(--pb-purple);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.empty-state {
  text-align: center;
  padding: 60px 0;
  color: var(--pb-text-muted);
  font-weight: 600;
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
</style>
