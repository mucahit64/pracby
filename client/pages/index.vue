<template>
  <div class="learn-page">
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
      <div v-if="courseFull.topics.length === 0" class="empty-state">
        <p>Bu ders için henüz konu eklenmemiş.</p>
      </div>

        <div v-for="(topic, tIdx) in courseFull.topics" :key="topic.id" class="learn-unit">
          <!-- Unit banner -->
          <div class="unit-banner">
            <div class="unit-meta">BÖLÜM {{ tIdx + 1 }}</div>
            <div class="unit-title">{{ topic.name }}</div>
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
                <div class="node-ring-wrap">
                  <button
                    class="lesson-node"
                    :class="[`lesson-node--${node.status}`, node.type === 'chest' ? 'lesson-node--chest' : '', node.type === 'boss' ? 'lesson-node--boss' : '', node.isBossNext ? 'lesson-node--step-boss' : '']"
                    :disabled="node.status === 'locked'"
                    @click="goToLesson(node)"
                  >
                    <span v-if="node.status === 'completed' && node.type === 'lesson'" class="lesson-tick">✓</span>
                    <span v-else class="lesson-icon">
                      {{ node.status === 'locked' ? '🔒' : node.icon }}
                    </span>
                  </button>
                  <svg
                    v-if="node.type === 'lesson' && node.testsRequired > 0 && node.status === 'active'"
                    class="step-ring"
                    viewBox="0 0 88 88"
                  >
                    <circle class="step-ring-bg" cx="44" cy="44" r="38" />
                    <circle
                      class="step-ring-fill"
                      cx="44"
                      cy="44"
                      r="38"
                      :style="ringStyle(node)"
                    />
                  </svg>
                </div>

                <div class="lesson-label" :class="{ 'lesson-label--muted': node.status === 'locked' }">
                  {{ node.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
    </template>

    <!-- No data -->
    <div v-else-if="!loadingFull && !courseFull" class="empty-state">
      <p>Başlamak için yukarıdan modül ve ders seçin.</p>
    </div>

    <!-- ===== Step Preview Dialog ===== -->
    <transition name="dialog-fade">
      <div v-if="stepDialogOpen && selectedNode" class="sd-overlay" @click.self="stepDialogOpen = false">
        <!-- FINAL dialog -->
        <div v-if="selectedNode.isFinalAvailable || selectedNode.type === 'boss'" class="sd-modal sd-modal--final" :class="{ 'sd-modal--step-boss': selectedNode.isBossNext }">
          <div class="sd-final-header" :class="{ 'sd-final-header--step-boss': selectedNode.isBossNext }">
            <span class="sd-final-icon">⚔️</span>
            <div class="sd-final-title">{{ selectedNode.type === 'boss' ? 'Konu Finali' : 'Adım Finali' }}</div>
            <div class="sd-final-sub">{{ selectedNode.name }}</div>
          </div>
          <div class="sd-final-body">
            <div v-if="selectedNode.type !== 'boss'" class="sd-final-check">
              <span class="sd-final-check-icon">✓</span>
              <span>{{ selectedNode.testsRequired }} / {{ selectedNode.testsRequired }} test tamamlandı</span>
            </div>
            <p class="sd-final-desc">{{ selectedNode.isBossNext ? 'Bu final testini geçerek adımı tamamla!' : 'Tüm adım sorularından karma olarak sınav yapılacak.' }}</p>
          </div>
          <div class="sd-actions">
            <button class="pb-btn-primary sd-btn-start" @click="startLesson">⚔️ ŞIMDI BAŞLAT</button>
            <button class="pb-btn-outline sd-btn-cancel" @click="stepDialogOpen = false">Kapat</button>
          </div>
        </div>

        <!-- NORMAL test dialog -->
        <div v-else class="sd-modal">
          <div class="sd-header">
            <span class="sd-icon">📝</span>
            <div class="sd-title">{{ selectedNode.name }}</div>
          </div>
          <div class="sd-test-label">Test {{ selectedNode.testsCompleted + 1 }} / {{ selectedNode.testsRequired + 1 }}</div>
          <!-- Progress dots row -->
          <div class="sd-dots">
            <span
              v-for="t in selectedNode.testsRequired"
              :key="'sd-t'+t"
              class="sd-dot"
              :class="{
                'sd-dot--done': t <= selectedNode.testsCompleted,
                'sd-dot--active': t === selectedNode.testsCompleted + 1,
              }"
            />
            <span class="sd-dot sd-dot--final" />
          </div>
          <p class="sd-desc">Bu testi tamamladığında bir sonraki adıma geçeceksin.</p>
          <div class="sd-actions">
            <button class="pb-btn-primary sd-btn-start" @click="startLesson">BAŞLAT</button>
            <button class="pb-btn-outline sd-btn-cancel" @click="stepDialogOpen = false">Kapat</button>
          </div>
        </div>
      </div>
    </transition>

    <!-- ===== Hearts Empty Dialog ===== -->
    <transition name="dialog-fade">
      <div v-if="heartsEmptyOpen" class="sd-overlay" @click.self="heartsEmptyOpen = false">
        <div class="sd-modal">
          <div class="hd-icon">💔</div>
          <div class="hd-title">Canın Bitti!</div>
          <div class="hd-sub">Kalplerin yenilenmesini bekle veya marketten satın al.</div>
          <div class="sd-actions">
            <button class="pb-btn-primary sd-btn-start" @click="navigateTo('/store')">🛒 Markete Git</button>
            <button class="pb-btn-outline sd-btn-cancel" @click="heartsEmptyOpen = false">Kapat</button>
          </div>
        </div>
      </div>
    </transition>
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
  // step-level test progress (lesson nodes only)
  testsCompleted: number;
  testsRequired: number;
  isFinalAvailable: boolean;
  isBossNext: boolean;
  nextTestId?: string;
  tests: Test[];
}

const activeExamName = ref('');
const activeExamTypeId = ref('');
const modules = ref<Module[]>([]);
const selectedModuleId = ref('');
const courses = ref<Course[]>([]);
const selectedCourseId = ref('');
const courseFull = ref<CourseFull | null>(null);
const loadingFull = ref(false);

// Step preview dialog
const selectedNode = ref<LessonNode | null>(null);
const stepDialogOpen = ref(false);

// Hearts empty dialog
const heartsEmptyOpen = ref(false);

function getToken() {
  return localStorage.getItem('pb_token') ?? '';
}

onMounted(async () => {
  const token = getToken();

  // Guest mode: no token but has guest exam selection
  if (!token) {
    const guestExamTypeId = localStorage.getItem('guestExamTypeId');
    if (!guestExamTypeId) {
      navigateTo('/welcome');
      return;
    }
    activeExamTypeId.value = guestExamTypeId;
    // Sync hearts from guest state
    const { state: guestStateData } = useGuestState();
    const heartsState = useState('userHearts', () => 5);
    heartsState.value = guestStateData.value.heartsCount;
    try {
      const mods = await $fetch<Module[]>(`/api/modules?exam_type_id=${guestExamTypeId}`);
      modules.value = mods;
      if (mods.length > 0) {
        const savedModuleId = localStorage.getItem('pb_selectedModuleId');
        const savedCourseId = localStorage.getItem('pb_selectedCourseId');
        const targetModule = savedModuleId && mods.find((m) => m.id === savedModuleId) ? savedModuleId : mods[0].id;
        await selectModule(targetModule, savedCourseId ?? undefined);
      }
    } catch { /* silently fail */ }
    return;
  }

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
  const headers: Record<string, string> = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const data = await $fetch<Course[]>(`/api/courses?module_id=${moduleId}`, { headers });
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
  const headers: Record<string, string> = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const data = await $fetch<CourseFull>(`/api/courses/${courseId}/full`, { headers });
    if (!token) {
      const { overlayGuestProgress } = useGuestState();
      overlayGuestProgress(data.topics);
    }
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
        testsCompleted: 0,
        testsRequired: 0,
        isFinalAvailable: false,
        isBossNext: false,
        tests: [],
      });
      continue;
    }

    // One node per step
    const isCompleted = step.progress?.is_step_completed ?? false;
    const crowns = step.progress?.stars ?? 0;
    const testsCompleted = step.progress?.tests_completed ?? 0;
    const testsRequired = step.tests_required ?? 1;
    const stepFinalPassed = step.progress?.step_final_passed ?? false;
    const isFinalAvailable = testsCompleted >= testsRequired && !stepFinalPassed && !isCompleted;

    // Which test to start next (first not-yet last-completed)
    const sortedTests = [...step.tests].sort((a, b) => a.sort_order - b.sort_order);
    const nextTestIndex = Math.min(testsCompleted, sortedTests.length - 1);
    const nextTest = sortedTests[nextTestIndex];
    // Last test in the step is the Boss Node (step final)
    const isBossNext = sortedTests.length > 1
      && nextTestIndex === sortedTests.length - 1
      && !stepFinalPassed
      && !isCompleted;

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
      id: step.id,
      name: step.name,
      icon: isBossNext ? '⚔️' : '📝',
      type: 'lesson',
      status,
      crowns,
      topicId: topic.id,
      stepId: step.id,
      testId: nextTest?.id,
      sessionType: (isFinalAvailable || isBossNext) ? 'step_final' : 'lesson',
      testsCompleted,
      testsRequired,
      isFinalAvailable: isFinalAvailable || isBossNext,
      isBossNext,
      nextTestId: nextTest?.id,
      tests: sortedTests,
    });
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
      testsCompleted: 0,
      testsRequired: 0,
      isFinalAvailable: false,
      isBossNext: false,
      tests: [],
    });
  }

  return nodes;
}

const RING_CIRCUMFERENCE = 2 * Math.PI * 38;

function ringStyle(node: LessonNode) {
  const total = node.testsRequired + 1; // +1 for the boss/final test
  const done = node.status === 'completed' ? total : node.testsCompleted;
  const progress = total > 0 ? done / total : 0;
  return {
    strokeDasharray: RING_CIRCUMFERENCE,
    strokeDashoffset: RING_CIRCUMFERENCE * (1 - progress),
  };
}

function goToLesson(node: LessonNode) {
  if (node.status === 'locked') return;
  if (node.type === 'chest') return;
  if (node.status === 'completed') return;

  // Check hearts before opening quiz dialog (both logged-in and guest users)
  const token = getToken();
  const currentHearts = token
    ? useState('userHearts', () => 5).value
    : useGuestState().state.value.heartsCount;
  if (currentHearts <= 0) {
    heartsEmptyOpen.value = true;
    return;
  }

  selectedNode.value = node;
  stepDialogOpen.value = true;
}

function startLesson() {
  const node = selectedNode.value;
  if (!node) return;
  stepDialogOpen.value = false;

  const query: Record<string, string> = {};
  if (node.stepId) query.stepId = node.stepId;
  if (node.sessionType) query.sessionType = node.sessionType;
  // Pass testId for normal lessons and boss (step_final) tests
  if ((node.sessionType === 'lesson' || node.sessionType === 'step_final') && node.nextTestId) query.testId = node.nextTestId;

  navigateTo({ path: `/quiz/${node.topicId}`, query });
}
</script>

<style scoped>
.learn-page {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 40px;
}

/* ===== Hearts Empty Dialog ===== */
.hd-icon {
  font-size: 2.6rem;
  line-height: 1;
  text-align: center;
}

.hd-title {
  font-size: 1.2rem;
  font-weight: 900;
  color: var(--pb-text);
  text-align: center;
}

.hd-sub {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--pb-text-muted);
  text-align: center;
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
  flex-direction: column;
  gap: 4px;
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
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  position: relative;
  font-family: inherit;
}

.lesson-node:hover:not(:disabled) {
  transform: translateY(-4px);
}

.lesson-node:active:not(:disabled) {
  transform: translateY(3px);
}

/* Completed */
.lesson-node--completed {
  background: linear-gradient(160deg, #9f6ef5 0%, var(--pb-purple) 55%, #5b21b6 100%);
  box-shadow:
    0 7px 0 #3b1591,
    0 8px 16px rgba(109, 40, 217, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Active (current) */
.lesson-node--active {
  background: linear-gradient(160deg, #a78bfa 0%, var(--pb-purple) 55%, #5b21b6 100%);
  box-shadow:
    0 7px 0 #3b1591,
    0 8px 20px rgba(124, 58, 237, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
}

/* Locked */
.lesson-node--locked {
  background: linear-gradient(160deg, #2d2b50 0%, #1e1c35 100%);
  box-shadow:
    0 5px 0 rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  cursor: not-allowed;
  border: 2px solid var(--pb-border);
}

/* Chest node */
.lesson-node--chest {
  background: linear-gradient(160deg, #fcd34d 0%, #f59e0b 55%, #b45309 100%);
  box-shadow:
    0 7px 0 #78350f,
    0 8px 16px rgba(245, 158, 11, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

.lesson-node--chest.lesson-node--locked {
  background: linear-gradient(160deg, #2d2b50 0%, #1e1c35 100%);
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

/* Boss node */
.lesson-node--boss {
  background: linear-gradient(160deg, #f87171 0%, #dc2626 55%, #7f1d1d 100%);
  box-shadow:
    0 7px 0 #7f1d1d,
    0 8px 20px rgba(220, 38, 38, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  width: 80px;
  height: 80px;
}

.lesson-node--boss.lesson-node--locked {
  background: linear-gradient(160deg, #2d2b50 0%, #1e1c35 100%);
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

/* Step boss node (last test in step) */
.lesson-node--step-boss {
  background: linear-gradient(160deg, #a78bfa 0%, #7c3aed 40%, #dc2626 100%);
  box-shadow:
    0 7px 0 #4c1d95,
    0 8px 20px rgba(124, 58, 237, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  width: 76px;
  height: 76px;
}

.lesson-node--step-boss.lesson-node--locked {
  background: linear-gradient(160deg, #2d2b50 0%, #1e1c35 100%);
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.lesson-icon {
  line-height: 1;
}

.lesson-tick {
  font-size: 1.8rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
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

/* ===== Circular Progress Ring ===== */
.node-ring-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-ring {
  position: absolute;
  width: 86px;
  height: 86px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  pointer-events: none;
}

.step-ring-bg {
  fill: none;
  stroke: rgba(255, 255, 255, 0.12);
  stroke-width: 5;
}

.step-ring-fill {
  fill: none;
  stroke: rgba(255, 255, 255, 0.9);
  stroke-width: 5;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease;
}

/* ===== Step Dialog ===== */
.sd-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.sd-modal {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 24px;
  padding: 28px 26px 22px;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
}

.sd-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.sd-icon {
  font-size: 2.6rem;
  line-height: 1;
}

.sd-title {
  font-size: 1.15rem;
  font-weight: 900;
  color: var(--pb-text);
  text-align: center;
}

.sd-test-label {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--pb-purple-light);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.sd-dots {
  display: flex;
  gap: 8px;
  align-items: center;
}

.sd-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--pb-border);
  transition: background 0.2s;
}

.sd-dot--done {
  background: var(--pb-green);
}

.sd-dot--active {
  background: var(--pb-purple);
  box-shadow: 0 0 8px rgba(124, 58, 237, 0.7);
  width: 14px;
  height: 14px;
}

.sd-dot--final {
  background: var(--pb-border);
  border: 2px solid #78350f;
  width: 14px;
  height: 14px;
}

.sd-desc {
  font-size: 0.82rem;
  color: var(--pb-text-muted);
  font-weight: 600;
  text-align: center;
  margin: 0;
}

.sd-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 4px;
}

.sd-btn-start {
  width: 100%;
  padding: 14px;
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: 0.06em;
}

.sd-btn-cancel {
  width: 100%;
  padding: 12px;
  font-size: 0.9rem;
}

/* Final dialog variant */
.sd-modal--final {
  border-color: #78350f;
}

/* Step boss final dialog variant */
.sd-modal--step-boss {
  border-color: #7c3aed;
}

.sd-final-header {
  width: 100%;
  background: linear-gradient(135deg, #92400e 0%, #d97706 100%);
  border-radius: 16px;
  padding: 20px 16px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.sd-final-header--step-boss {
  background: linear-gradient(135deg, #4c1d95 0%, #dc2626 100%);
}

.sd-final-icon {
  font-size: 2.4rem;
  line-height: 1;
}

.sd-final-title {
  font-size: 1.2rem;
  font-weight: 900;
  color: white;
}

.sd-final-sub {
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
}

.sd-final-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.sd-final-check {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--pb-green);
}

.sd-final-check-icon {
  font-size: 1rem;
}

.sd-final-desc {
  font-size: 0.82rem;
  color: var(--pb-text-muted);
  font-weight: 600;
  text-align: center;
  margin: 0;
}

/* Dialog transition */
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.18s ease;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}
</style>
