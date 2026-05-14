<template>
  <div class="flex flex-col gap-8 pb-10 flex-1 overflow-y-auto scrollbar-hide">
    <!-- Offline banner -->
    <div v-if="!isOnline" class="flex items-center gap-2 bg-gray-800 text-white text-sm font-semibold px-4 py-3 rounded-2xl">
      <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636a9 9 0 010 12.728M15.536 8.464a5 5 0 010 7.072M12 12h.01M6.343 6.343a9 9 0 000 12.728M9.172 9.172a5 5 0 000 7.071" /></svg>
      İnternet bağlantısı yok. Bazı özellikler kullanılamayabilir.
    </div>

    <!-- Sync loading banner -->
    <div v-if="syncing" class="flex items-center gap-2 bg-primary/10 border-2 border-primary/20 text-primary text-sm font-semibold px-4 py-3 rounded-2xl">
      <svg class="w-4 h-4 shrink-0 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
      Önceki test sonuçları senkronize ediliyor…
    </div>
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

const selectedNode = ref<LessonNode | null>(null);
const stepDialogOpen = ref(false);

const energyEmptyOpen = ref(false);

const rewardDialogOpen = ref(false);
const rewardDialogNode = ref<LessonNode | null>(null);

function getToken() {
  return localStorage.getItem('pb_token') ?? '';
}

const { activeExamName, activeExamTypeId, modules, selectedModuleId, courses, selectedCourseId, courseFull, loadingFull, selectModule, selectCourse } = useExamContent()

const { syncPendingSessions, loadPending } = useOfflineQuiz();
const isOnline = ref(true);
const syncing = ref(false);

async function runSync() {
  if (loadPending().length === 0) return;
  
  syncing.value = true;
  try {
    await syncPendingSessions();
  } catch (error) {
    console.warn('[OfflineQuiz] Senkronizasyon başarısız, sonra tekrar denenecek.', error);
  } finally {
    syncing.value = false; 
  }
}

function setOnline() { isOnline.value = true; runSync(); }
function setOffline() { isOnline.value = false; }

onMounted(() => {
  isOnline.value = navigator.onLine;
  window.addEventListener('online', setOnline);
  window.addEventListener('offline', setOffline);

  runSync();

  const token = localStorage.getItem('pb_token')
  if (!token && !localStorage.getItem('guestExamTypeId')) {
    navigateTo('/welcome')
  }
});

onUnmounted(() => {
  window.removeEventListener('online', setOnline);
  window.removeEventListener('offline', setOffline);
});

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

<style>
/* Chrome, Safari ve Opera için */
html::-webkit-scrollbar,
body::-webkit-scrollbar,
#__nuxt::-webkit-scrollbar,
.scrollbar-hide::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}

/* IE, Edge ve Firefox için */
html, 
body, 
#__nuxt,
.scrollbar-hide {
  -ms-overflow-style: none !important;  /* IE ve Edge */
  scrollbar-width: none !important;  /* Firefox */
}
</style>