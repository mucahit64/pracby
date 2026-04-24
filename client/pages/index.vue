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
        <!-- Unit banner -->
        <div class="bg-primary rounded-2xl p-5 mb-6 border-b-4 border-primary-dark">
          <div class="text-[0.72rem] font-bold text-white/70 tracking-widest uppercase mb-1">BÖLÜM {{ tIdx + 1 }}</div>
          <div class="text-lg font-black text-white">{{ topic.name }}</div>
        </div>

        <!-- Lesson path (zigzag) -->
        <div class="flex flex-col items-center gap-2">
          <div
            v-for="(node, nIdx) in buildLessonNodes(topic)"
            :key="node.id"
            class="flex items-end relative"
            :class="{
              'translate-x-0': nIdx % 5 === 0 || nIdx % 5 === 4,
              'translate-x-[50px]': nIdx % 5 === 1 || nIdx % 5 === 3,
              'translate-x-[80px]': nIdx % 5 === 2,
            }"
          >
            <!-- Show mascot next to first active lesson -->
            <div
              v-if="node.status === 'active'"
              class="flex flex-col items-center mr-3 mb-1 absolute right-full bottom-0"
            >
              <div class="bg-white border-2 border-gray-200 rounded-xl px-3 py-1 text-[0.72rem] font-extrabold text-gray-800 tracking-wide relative mb-1 whitespace-nowrap">
                YAP!
              </div>
              <PbMascot :width="64" :height="80" />
            </div>

            <!-- Lesson Node -->
            <div class="flex flex-col items-center gap-1.5 relative">
              <div class="relative flex items-center justify-center">
                <button
                  class="rounded-full flex flex-col items-center justify-center text-2xl transition-transform duration-100 font-[inherit] border-2"
                  :class="[
                    node.type === 'boss' ? 'w-20 h-20' : node.isBossNext ? 'w-[76px] h-[76px]' : 'w-[72px] h-[72px]',
                    node.status === 'completed' && node.type === 'lesson'
                      ? 'bg-primary border-primary-dark border-b-4 text-white hover:-translate-y-1 active:translate-y-0.5 active:border-b-2 cursor-pointer'
                      : '',
                    node.status === 'active' && node.type === 'lesson' && !node.isBossNext
                      ? 'bg-primary border-primary-dark border-b-4 text-white hover:-translate-y-1 active:translate-y-0.5 active:border-b-2 cursor-pointer ring-4 ring-primary/30'
                      : '',
                    node.status === 'active' && node.isBossNext
                      ? 'bg-gradient-to-br from-primary to-negative border-primary-dark border-b-4 text-white hover:-translate-y-1 active:translate-y-0.5 active:border-b-2 cursor-pointer'
                      : '',
                    node.status === 'locked' && node.type !== 'boss'
                      ? 'bg-gray-200 border-gray-300 border-b-4 text-gray-400 cursor-not-allowed'
                      : '',
                    node.type === 'chest' && node.status !== 'locked'
                      ? '!bg-warning !border-b-4 !border-amber-700 text-white hover:-translate-y-1 active:translate-y-0.5 active:border-b-2 cursor-pointer'
                      : '',
                    node.type === 'chest' && node.status === 'locked'
                      ? '!bg-gray-200 !border-gray-300 !border-b-4 text-gray-400 cursor-not-allowed'
                      : '',
                    node.type === 'boss' && node.status === 'active'
                      ? '!bg-negative !border-b-4 !border-red-800 text-white hover:-translate-y-1 active:translate-y-0.5 active:border-b-2 cursor-pointer'
                      : '',
                    node.type === 'boss' && node.status === 'locked'
                      ? '!bg-gray-200 !border-gray-300 !border-b-4 text-gray-400 cursor-not-allowed'
                      : '',
                  ]"
                  :disabled="node.status === 'locked'"
                  @click="goToLesson(node)"
                >
                  <span v-if="node.status === 'completed' && node.type === 'lesson'" class="text-3xl font-black text-white/95">✓</span>
                  <span v-else>
                    {{ node.status === 'locked' ? '🔒' : node.icon }}
                  </span>
                </button>
                <svg
                  v-if="node.type === 'lesson' && node.testsRequired > 0 && node.status === 'active'"
                  class="absolute w-[86px] h-[86px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 pointer-events-none"
                  viewBox="0 0 88 88"
                >
                  <circle cx="44" cy="44" r="38" fill="none" stroke="#e5e7eb" stroke-width="5" />
                  <circle
                    cx="44"
                    cy="44"
                    r="38"
                    fill="none"
                    stroke="#7c3aed"
                    stroke-width="5"
                    stroke-linecap="round"
                    class="transition-all duration-500"
                    :style="ringStyle(node)"
                  />
                </svg>
              </div>

              <div class="text-xs font-bold text-center max-w-[90px]" :class="node.status === 'locked' ? 'text-gray-400' : 'text-gray-800'">
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
    <Transition name="dialog-fade">
      <div v-if="stepDialogOpen && selectedNode" class="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-5" @click.self="stepDialogOpen = false">
        <!-- FINAL dialog -->
        <div v-if="selectedNode.isFinalAvailable || selectedNode.type === 'boss'" class="bg-white border-2 border-gray-200 rounded-3xl p-7 max-w-[360px] w-full flex flex-col items-center gap-3.5">
          <div class="w-full rounded-2xl p-5 flex flex-col items-center gap-1"
            :class="selectedNode.isBossNext ? 'bg-gradient-to-br from-primary to-negative' : 'bg-gradient-to-br from-amber-700 to-warning'"
          >
            <span class="text-4xl">⚔️</span>
            <div class="text-lg font-black text-white">{{ selectedNode.type === 'boss' ? 'Konu Finali' : 'Adım Finali' }}</div>
            <div class="text-sm font-semibold text-white/80">{{ selectedNode.name }}</div>
          </div>
          <div class="flex flex-col items-center gap-2 w-full">
            <div v-if="selectedNode.type !== 'boss'" class="flex items-center gap-2 text-sm font-bold text-positive">
              <span>✓</span>
              <span>{{ selectedNode.testsRequired }} / {{ selectedNode.testsRequired }} test tamamlandı</span>
            </div>
            <p class="text-sm text-gray-500 font-semibold text-center">{{ selectedNode.isBossNext ? 'Bu final testini geçerek adımı tamamla!' : 'Tüm adım sorularından karma olarak sınav yapılacak.' }}</p>
          </div>
          <div class="flex flex-col gap-2.5 w-full mt-1">
            <button class="w-full bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 tracking-wide cursor-pointer" @click="startLesson">⚔️ ŞIMDI BAŞLAT</button>
            <button class="w-full bg-transparent text-primary font-extrabold text-sm py-3 rounded-xl border-2 border-primary hover:bg-primary/5 transition-all duration-150 cursor-pointer" @click="stepDialogOpen = false">Kapat</button>
          </div>
        </div>

        <!-- NORMAL test dialog -->
        <div v-else class="bg-white border-2 border-gray-200 rounded-3xl p-7 max-w-[360px] w-full flex flex-col items-center gap-3.5">
          <div class="flex flex-col items-center gap-1.5">
            <span class="text-4xl">📝</span>
            <div class="text-lg font-black text-gray-800 text-center">{{ selectedNode.name }}</div>
          </div>
          <div class="text-sm font-extrabold text-primary tracking-wide uppercase">Test {{ selectedNode.testsCompleted + 1 }} / {{ selectedNode.testsRequired + 1 }}</div>
          <!-- Progress dots row -->
          <div class="flex gap-2 items-center">
            <span
              v-for="t in selectedNode.testsRequired"
              :key="'sd-t'+t"
              class="w-3 h-3 rounded-full transition-colors"
              :class="{
                'bg-positive': t <= selectedNode.testsCompleted,
                'bg-primary w-3.5 h-3.5 ring-2 ring-primary/40': t === selectedNode.testsCompleted + 1,
                'bg-gray-200': t > selectedNode.testsCompleted + 1,
              }"
            />
            <span class="w-3.5 h-3.5 rounded-full bg-gray-200 border-2 border-amber-700" />
          </div>
          <p class="text-sm text-gray-500 font-semibold text-center">Bu testi tamamladığında bir sonraki adıma geçeceksin.</p>
          <div class="flex flex-col gap-2.5 w-full mt-1">
            <button class="w-full bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 tracking-wide cursor-pointer" @click="startLesson">BAŞLAT</button>
            <button class="w-full bg-transparent text-primary font-extrabold text-sm py-3 rounded-xl border-2 border-primary hover:bg-primary/5 transition-all duration-150 cursor-pointer" @click="stepDialogOpen = false">Kapat</button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ===== Hearts Empty Dialog ===== -->
    <Transition name="dialog-fade">
      <div v-if="heartsEmptyOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-5" @click.self="heartsEmptyOpen = false">
        <div class="bg-white border-2 border-gray-200 rounded-3xl p-7 max-w-[360px] w-full flex flex-col items-center gap-3.5">
          <div class="text-4xl">💔</div>
          <div class="text-xl font-black text-gray-800 text-center">Canın Bitti!</div>
          <div class="text-sm font-semibold text-gray-500 text-center">Kalplerin yenilenmesini bekle veya marketten satın al.</div>
          <div class="flex flex-col gap-2.5 w-full mt-1">
            <button class="w-full bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 tracking-wide cursor-pointer" @click="navigateTo('/store')">🛒 Markete Git</button>
            <button class="w-full bg-transparent text-primary font-extrabold text-sm py-3 rounded-xl border-2 border-primary hover:bg-primary/5 transition-all duration-150 cursor-pointer" @click="heartsEmptyOpen = false">Kapat</button>
          </div>
        </div>
      </div>
    </Transition>
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

const heartsEmptyOpen = ref(false);

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

    const heartsState = useState('userHearts', () => 5);
    heartsState.value = profile.hearts ?? 5;

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

const RING_CIRCUMFERENCE = 2 * Math.PI * 38;

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
  if ((node.sessionType === 'lesson' || node.sessionType === 'step_final') && node.nextTestId) query.testId = node.nextTestId;

  navigateTo({ path: `/quiz/${node.topicId}`, query });
}
</script>
