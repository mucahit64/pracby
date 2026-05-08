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
        <div class="rounded-2xl p-5 mb-6 border-b-4" :class="[TOPIC_COLORS[tIdx % TOPIC_COLORS.length].bg, TOPIC_COLORS[tIdx % TOPIC_COLORS.length].border]">
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
                  class="rounded-full flex flex-col items-center justify-center text-2xl transition-all duration-150 font-[inherit] border-2 select-none w-[80px] h-[80px] z-10"
                  :class="[
                    node.status === 'completed' && node.type === 'lesson'
                      ? 'bg-primary border-primary-dark border-b-[8px] text-white hover:translate-y-[2px] hover:border-b-[6px] active:translate-y-[8px] active:border-b-0 cursor-pointer'
                      : '',
                    node.status === 'active' && node.type === 'lesson'
                      ? 'bg-primary border-primary-dark border-b-[8px] text-white hover:translate-y-[2px] hover:border-b-[6px] active:translate-y-[8px] active:border-b-0 cursor-pointer'
                      : '',
                    node.status === 'locked' && node.type === 'lesson'
                      ? 'bg-gray-200 border-gray-300 border-b-[8px] text-gray-400 cursor-not-allowed'
                      : '',
                    node.type === 'chest' && node.status !== 'locked'
                      ? '!bg-warning !border-amber-700 border-b-[8px] text-white hover:translate-y-[2px] hover:border-b-[6px] active:translate-y-[8px] active:border-b-0 cursor-pointer'
                      : '',
                    node.type === 'chest' && node.status === 'locked'
                      ? '!bg-amber-100 !border-amber-300 border-b-[8px] opacity-60 cursor-pointer'
                      : '',
                    node.type === 'boss' && node.status === 'active'
                      ? '!bg-negative !border-red-800 border-b-[8px] text-white hover:translate-y-[2px] hover:border-b-[6px] active:translate-y-[8px] active:border-b-0 cursor-pointer'
                      : '',
                    node.type === 'boss' && node.status === 'locked'
                      ? '!bg-gray-200 !border-gray-300 border-b-[8px] text-gray-400 cursor-not-allowed'
                      : '',
                  ]"
                  :disabled="node.status === 'locked' && node.type !== 'chest'"
                  @click="goToLesson(node)"
                >
                  <span v-if="node.status === 'completed' && node.type === 'lesson'" class="text-3xl font-black text-white/95">✓</span>
                  <span v-else-if="node.type === 'chest'" class="drop-shadow-sm">🎁</span>
                  <span v-else class="drop-shadow-sm">
                    {{ node.status === 'locked' ? '🔒' : node.icon }}
                  </span>
                </button>
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

    <!-- ===== Reward Dialog ===== -->
    <DialogsRewardStepDialog
      :open="rewardDialogOpen"
      :locked="rewardDialogNode?.status === 'locked'"
      :reward-amount="rewardDialogNode?.rewardAmount"
      @close="rewardDialogOpen = false; rewardDialogNode = null"
      @claim="claimReward"
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
}

interface Step {
  id: string;
  sort_order: number;
  step_type: string;
  tests_required: number;
  reward_amount?: number;
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
  icon: string;
  type: 'lesson' | 'chest' | 'boss';
  status: 'completed' | 'active' | 'locked';
  topicId: string;
  stepId?: string;
  sessionType: string;
  rewardAmount?: number;
}

const TOPIC_COLORS = [
  { bg: 'bg-blue-500', border: 'border-blue-700' },
  { bg: 'bg-emerald-500', border: 'border-emerald-700' },
  { bg: 'bg-amber-500', border: 'border-amber-700' },
  { bg: 'bg-rose-500', border: 'border-rose-700' },
  { bg: 'bg-violet-500', border: 'border-violet-700' },
  { bg: 'bg-cyan-500', border: 'border-cyan-700' },
  { bg: 'bg-orange-500', border: 'border-orange-700' },
  { bg: 'bg-fuchsia-500', border: 'border-fuchsia-700' },
  { bg: 'bg-teal-500', border: 'border-teal-700' },
  { bg: 'bg-red-500', border: 'border-red-700' },
];

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

const rewardDialogOpen = ref(false);
const rewardDialogNode = ref<LessonNode | null>(null);

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
  } catch (e: unknown) {
    // Token is stale or invalid (server returned 404/401). Clear it and
    // redirect to login so the user can start fresh instead of seeing an
    // empty screen.
    const err = e as { status?: number; statusCode?: number };
    const status = err?.status ?? err?.statusCode;
    if (status === 404 || status === 401) {
      localStorage.removeItem('pb_token');
      navigateTo('/auth/login');
    }
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
    const isCompleted = step.progress?.is_step_completed ?? false;

    let status: 'completed' | 'active' | 'locked';
    if (isCompleted) {
      status = 'completed';
    } else if (!foundActive) {
      status = 'active';
      foundActive = true;
    } else {
      status = 'locked';
    }

    if (step.step_type === 'reward') {
      nodes.push({
        id: `reward-${step.id}`,
        icon: isCompleted ? '✅' : '🎁',
        type: 'chest',
        status,
        topicId: topic.id,
        stepId: step.id,
        sessionType: 'lesson',
        rewardAmount: step.reward_amount,
      });
    } else {
      nodes.push({
        id: step.id,
        icon: '📝',
        type: 'lesson',
        status,
        topicId: topic.id,
        stepId: step.id,
        sessionType: 'lesson',
      });
    }
  }

  if (topic.steps.length > 0) {
    const allCompleted = topic.steps.every((s) => s.progress?.is_step_completed);

    nodes.push({
      id: `boss-${topic.id}`,
      icon: '⚔️',
      type: 'boss',
      status: allCompleted ? 'active' : 'locked',
      topicId: topic.id,
      sessionType: 'topic_final',
    });
  }

  return nodes;
}

function goToLesson(node: LessonNode) {
  if (node.type === 'chest') {
    if (node.status === 'completed') return;
    if (node.status === 'locked') return;
    rewardDialogNode.value = node;
    rewardDialogOpen.value = true;
    return;
  }
  if (node.status === 'locked') return;
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

async function claimReward() {
  const node = rewardDialogNode.value;
  if (!node?.stepId) return;

  const rewardAmount = node.rewardAmount ?? 10;
  const token = getToken();

  if (!token) {
    const { claimReward: guestClaim } = useGuestState();
    guestClaim(node.stepId, rewardAmount);
    const { incrementAcornBalance } = useAcornBalance();
    incrementAcornBalance(rewardAmount);
    rewardDialogOpen.value = false;
    rewardDialogNode.value = null;
    await selectCourse(selectedCourseId.value);
    return;
  }

  try {
    const headers: Record<string, string> = { Authorization: `Bearer ${token}` };
    await $fetch(`/api/quiz/reward/${node.stepId}/claim`, { method: 'POST', headers });

    const { incrementAcornBalance } = useAcornBalance();
    incrementAcornBalance(rewardAmount);

    rewardDialogOpen.value = false;
    rewardDialogNode.value = null;
    await selectCourse(selectedCourseId.value);
  } catch {
    // silently fail
  }
}

function startLesson() {
  const node = selectedNode.value;
  if (!node) return;
  stepDialogOpen.value = false;

  const query: Record<string, string> = {};
  if (node.stepId) query.stepId = node.stepId;
  if (node.sessionType) query.sessionType = node.sessionType;

  navigateTo({ path: `/quiz/${node.topicId}`, query });
}
</script>
