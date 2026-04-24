<template>
  <div class="flex flex-col gap-8 pb-10">
    <!-- Module tabs -->
    <div v-if="modules.length > 0" class="flex gap-2">
      <button
        v-for="mod in modules"
        :key="mod.id"
        class="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 font-bold text-sm cursor-pointer transition-all duration-150 font-[inherit]"
        :class="selectedModuleId === mod.id
          ? 'bg-primary border-primary text-white border-b-4 border-b-primary-dark'
          : 'bg-white border-gray-200 text-gray-800 hover:border-primary/40'"
        @click="selectModule(mod.id)"
      >
        <span class="text-lg">{{ mod.icon_url }}</span>
        <span>{{ mod.name }}</span>
      </button>
    </div>

    <!-- Course selector -->
    <div v-if="courses.length > 0" class="flex gap-2 flex-wrap">
      <button
        v-for="course in courses"
        :key="course.id"
        class="flex items-center gap-1.5 px-4 py-2 rounded-full border-2 text-sm font-bold cursor-pointer transition-all duration-150 font-[inherit]"
        :class="selectedCourseId === course.id
          ? 'bg-primary/10 border-primary text-primary'
          : 'bg-white border-gray-200 text-gray-800 hover:border-primary'"
        @click="selectCourse(course.id)"
      >
        <span class="text-base">{{ course.icon_url }}</span>
        <span>{{ course.name }}</span>
      </button>
    </div>

    <!-- Loading -->
    <div v-if="loadingFull" class="flex flex-col items-center gap-3 py-16 text-gray-400">
      <div class="w-8 h-8 border-3 border-gray-200 border-t-primary rounded-full animate-spin" />
      <p class="font-bold">Yükleniyor…</p>
    </div>

    <!-- Unit sections (topics) -->
    <template v-else-if="courseFull">
      <div v-if="courseFull.topics.length === 0" class="text-center py-16 text-gray-400 font-semibold">
        <p>Bu ders için henüz konu eklenmemiş.</p>
      </div>

      <div v-for="(topic, tIdx) in courseFull.topics" :key="topic.id" class="flex flex-col">
        <div class="bg-primary rounded-2xl p-5 mb-6 border-b-4 border-primary-dark">
          <div class="text-[0.72rem] font-bold text-white/70 tracking-widest uppercase mb-1">BÖLÜM {{ tIdx + 1 }}</div>
          <div class="text-lg font-black text-white">{{ topic.name }}</div>
        </div>

        <div class="flex flex-col items-center gap-4 ">
          <div
            v-for="(node, nIdx) in buildLessonNodes(topic)"
            :key="node.id"
            class="flex items-end relative py-4"
            :class="{
              'translate-x-0': nIdx % 5 === 0 || nIdx % 5 === 4,
              'translate-x-[40px]': nIdx % 5 === 1 || nIdx % 5 === 3,
              'translate-x-[65px]': nIdx % 5 === 2,
            }"
          >
            <div class="flex flex-col items-center gap-2 relative">
              <div class="relative flex items-center justify-center">
                <button
                  class="rounded-full flex flex-col items-center justify-center text-2xl transition-all duration-150 font-[inherit] border-2 select-none w-[60px] h-[60px] z-10"
                  :class="[
                    node.status === 'completed' && node.type === 'lesson'
                      ? 'bg-primary border-primary-dark border-b-[8px] text-white hover:translate-y-[2px] hover:border-b-[6px] active:translate-y-[8px] active:border-b-0 cursor-pointer'
                      : '',
                    node.status === 'active' && node.type === 'lesson' && !node.isBossNext
                      ? 'bg-primary border-primary-dark border-b-[8px] text-white hover:translate-y-[2px] hover:border-b-[6px] active:translate-y-[8px] active:border-b-0 cursor-pointer'
                      : '',
                    node.status === 'active' && node.isBossNext
                      ? 'bg-gradient-to-br from-primary to-negative border-primary-dark border-b-[8px] text-white hover:translate-y-[2px] hover:border-b-[6px] active:translate-y-[8px] active:border-b-0 cursor-pointer'
                      : '',
                    node.status === 'locked' && node.type !== 'boss'
                      ? 'bg-gray-200 border-gray-300 border-b-[8px] text-gray-400 cursor-not-allowed'
                      : '',
                    node.type === 'chest' && node.status !== 'locked'
                      ? '!bg-warning !border-amber-700 border-b-[8px] text-white hover:translate-y-[2px] hover:border-b-[6px] active:translate-y-[8px] active:border-b-0 cursor-pointer'
                      : '',
                    node.type === 'chest' && node.status === 'locked'
                      ? '!bg-gray-200 !border-gray-300 border-b-[8px] text-gray-400 cursor-not-allowed'
                      : '',
                    node.type === 'boss' && node.status === 'active'
                      ? '!bg-negative !border-red-800 border-b-[8px] text-white hover:translate-y-[2px] hover:border-b-[6px] active:translate-y-[8px] active:border-b-0 cursor-pointer'
                      : '',
                    node.type === 'boss' && node.status === 'locked'
                      ? '!bg-gray-200 !border-gray-300 border-b-[8px] text-gray-400 cursor-not-allowed'
                      : '',
                  ]"
                  :disabled="node.status === 'locked'"
                  @click="goToLesson(node)"
                >
                  <span v-if="node.status === 'completed' && node.type === 'lesson'" class="text-3xl font-black text-white/95">✓</span>
                  <span v-else class="drop-shadow-sm">
                    {{ node.status === 'locked' ? '🔒' : node.icon }}
                  </span>
                </button>
                
                <svg
                  v-if="node.type === 'lesson' && node.testsRequired > 0 && node.status === 'active'"
                  class="absolute w-[96px] h-[96px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 pointer-events-none z-0"
                  viewBox="0 0 96 96"
                >
                  <circle cx="48" cy="48" r="40" fill="none" stroke="#e5e7eb" stroke-width="10" />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    fill="none"
                    stroke="#7c3aed"
                    stroke-width="8"
                    stroke-linecap="round"
                    class="transition-all duration-500"
                    :style="ringStyle(node)"
                  />
                </svg>
              </div>

              <div
                class="text-xs font-extrabold text-center max-w-[90px]"
                :class="[
                  node.status === 'active' ? 'mt-3' : 'mt-1',
                  node.status === 'locked' ? 'text-gray-400' : 'text-gray-800'
                ]"
              >
                {{ node.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- No data -->
    <div v-else-if="!loadingFull && !courseFull" class="text-center py-16 text-gray-400 font-semibold">
      <p>Başlamak için yukarıdan modül ve ders seçin.</p>
    </div>

    <!-- ===== Step Preview Dialog ===== -->
    <DialogsStepPreviewDialog
      :open="stepDialogOpen"
      :node="selectedNode"
      @close="stepDialogOpen = false"
      @start="startLesson"
    />

    <!-- ===== Energy Out Dialog ===== -->
    <DialogsEnergyOutDialog
      :open="energyEmptyOpen"
      @close="energyEmptyOpen = false"
      @go-store="navigateTo('/store')"
    />
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

const selectedNode = ref<LessonNode | null>(null);
const stepDialogOpen = ref(false);

const energyEmptyOpen = ref(false);

function getToken() {
  return localStorage.getItem('pb_token') ?? '';
}

onMounted(async () => {
  const token = getToken();

  if (!token) {
    const guestExamTypeId = localStorage.getItem('guestExamTypeId');
    if (!guestExamTypeId) {
      navigateTo('/welcome');
      return;
    }
    activeExamTypeId.value = guestExamTypeId;
    const { state: guestStateData } = useGuestState();
    const energyState = useState('userEnergy', () => 25);
    energyState.value = guestStateData.value.energyCount;
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
    const profile = await $fetch<{ active_exam_type_id?: string; energy?: number; next_energy_at?: string | null }>('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    });

    const energyState = useState('userEnergy', () => 25);
    energyState.value = profile.energy ?? 25;

    if (profile.active_exam_type_id) {
      activeExamTypeId.value = profile.active_exam_type_id;

      const examGroups = await $fetch<Array<{ exam_types: Array<{ id: string; name: string }> }>>('/api/exam-groups');
      const allTypes = examGroups.flatMap((g) => g.exam_types);
      const match = allTypes.find((t) => t.id === profile.active_exam_type_id);
      if (match) activeExamName.value = match.name;

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

    const isCompleted = step.progress?.is_step_completed ?? false;
    const crowns = step.progress?.stars ?? 0;
    const testsCompleted = step.progress?.tests_completed ?? 0;
    const testsRequired = step.tests_required ?? 1;
    const stepFinalPassed = step.progress?.step_final_passed ?? false;
    const isFinalAvailable = testsCompleted >= testsRequired && !stepFinalPassed && !isCompleted;

    const sortedTests = [...step.tests].sort((a, b) => a.sort_order - b.sort_order);
    const nextTestIndex = Math.min(testsCompleted, sortedTests.length - 1);
    const nextTest = sortedTests[nextTestIndex];
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

const RING_CIRCUMFERENCE = 2 * Math.PI * 43;

function ringStyle(node: LessonNode) {
  const total = node.testsRequired + 1;
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

  const token = getToken();
  const currentEnergy = token
    ? useState('userEnergy', () => 25).value
    : useGuestState().state.value.energyCount;
  if (currentEnergy <= 0) {
    energyEmptyOpen.value = true;
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
  if ((node.sessionType === 'lesson' || node.sessionType === 'step_final') && node.nextTestId) query.testId = node.nextTestId;

  navigateTo({ path: `/quiz/${node.topicId}`, query });
}
</script>
