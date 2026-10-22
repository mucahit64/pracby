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
    <!-- Module tabs (desktop; on a phone the header opens the map picker) -->
    <div v-if="modules.length > 0" class="hidden lg:flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      <button
        v-for="mod in modules"
        :key="mod.id"
        class="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 font-bold text-sm cursor-pointer transition-all duration-150 font-[inherit] sm:px-5"
        :class="selectedModuleId === mod.id
          ? 'bg-primary border-primary text-white border-b-4 border-b-primary-dark'
          : 'bg-white border-gray-200 text-gray-800 hover:border-primary/40'"
        @click="selectModule(mod.id)"
      >
        <span class="text-lg">{{ mod.icon_url }}</span>
        <span>{{ mod.name }}</span>
      </button>
    </div>

    <!-- Course selector (desktop) -->
    <div v-if="courses.length > 0" class="hidden lg:flex gap-2 flex-wrap">
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
          <div class="text-lg font-black text-white">{{ topic.name}}</div>
        </div>

        <div class="flex flex-col items-center gap-2">
          <div
            v-for="(node, nIdx) in buildLessonNodes(topic, TOPIC_COLORS[tIdx % TOPIC_COLORS.length].bg, TOPIC_COLORS[tIdx % TOPIC_COLORS.length].border, TOPIC_COLORS[tIdx % TOPIC_COLORS.length].hex, TOPIC_COLORS[tIdx % TOPIC_COLORS.length].shadowHex)"
            :key="node.id"
            class="flex items-end relative"
            :class="{
              'translate-x-0': nIdx % 5 === 0 || nIdx % 5 === 4,
              'translate-x-[40px]': nIdx % 5 === 1 || nIdx % 5 === 3,
              'translate-x-[65px]': nIdx % 5 === 2,
            }"
          >
            <PbStepCoin v-bind="coinOf(node)" :size="84" @click="goToLesson(node)" />
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

    <!-- ===== Map Picker (mobile header) ===== -->
    <DialogsMapPickerSheet
      :open="mapPickerOpen"
      :active-exam-type-id="activeExamTypeId"
      :active-modules="modules"
      :active-module-id="selectedModuleId"
      :active-courses="courses"
      :selected-course-id="selectedCourseId"
      @close="mapPickerOpen = false"
      @select="onMapPick"
    />
  </div>
</template>

<script setup lang="ts">
import type { MapPick } from '~/components/dialogs/MapPickerSheet.vue';
useHead({
  meta: [
    { name: "robots", content: "noindex, follow" },
    { name: "description", content: "Pracby ile KPSS Tarih, Coğrafya ve Vatandaşlık derslerini oyun oynayarak, sıkılmadan öğrenin. 3D haritalı ve oyunlaştırılmış soru çözüm platformu." },
    { property: "og:title", content: "Pracby | Oyunlaştırılmış KPSS Platformu" },
    { property: "og:description", content: "KPSS'ye çalışmanın en eğlenceli yolu. Hemen test çözmeye başla!" },
    { property: "og:type", content: "website" }
  ]
});

interface StepProgress {
  tests_completed: number;
  is_step_completed: boolean;
  step_final_passed: boolean;
  best_score?: number;
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
  /** The topic final (boss): best score and first finish. */
  final_best_score?: number;
  final_completed_at?: string | null;
}

interface Topic {
  id: string;
  name: string;
  sort_order: number;
  steps: Step[];
  progress: TopicProgress | null;
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
  bestScore?: number;
  colorBg?: string;
  colorBorder?: string;
  colorHex?: string;
  colorShadow?: string;
}

const selectedNode = ref<LessonNode | null>(null);
const stepDialogOpen = ref(false);

const energyEmptyOpen = ref(false);

const rewardDialogOpen = ref(false);
const rewardDialogNode = ref<LessonNode | null>(null);

function getToken() {
  return localStorage.getItem('pb_token') ?? '';
}

const { activeExamTypeId, modules, selectedModuleId, courses, selectedCourseId, courseFull, loadingFull, selectModule, selectCourse } = useExamContent()
const { switchExam } = useUserSession()

// The mobile header shows the selected course and opens the picker below.
const { courseLabel, open: mapPickerOpen } = useMapPicker()
watchEffect(() => {
  courseLabel.value = courses.value.find((c) => c.id === selectedCourseId.value)?.name ?? ''
})

async function onMapPick(pick: MapPick) {
  mapPickerOpen.value = false
  if (pick.examTypeId !== activeExamTypeId.value) {
    // Loading the new exam keeps a saved module/course that belongs to it.
    localStorage.setItem('pb_selectedModuleId', pick.moduleId)
    localStorage.setItem('pb_selectedCourseId', pick.courseId)
    await switchExam(pick.examTypeId)
  } else if (pick.moduleId !== selectedModuleId.value) {
    await selectModule(pick.moduleId, pick.courseId)
  } else if (pick.courseId !== selectedCourseId.value) {
    await selectCourse(pick.courseId)
  }
}

// Nuxt scrolls to the top after the page transition, which would undo the
// restore below; skip that while a saved position is waiting.
definePageMeta({
  scrollToTop: () => {
    try {
      return !sessionStorage.getItem('pb_learnScroll');
    } catch {
      return true;
    }
  },
});

// Map scroll position, restored after the map reloads (back from a quiz or
// the register wall, or after opening a chest) instead of starting at the top.
const SCROLL_KEY = 'pb_learnScroll';

function saveScroll() {
  try {
    sessionStorage.setItem(SCROLL_KEY, JSON.stringify({ courseId: selectedCourseId.value, y: window.scrollY }));
  } catch { /* storage unavailable */ }
}

watch([loadingFull, courseFull], async ([loading, full]) => {
  if (loading || !full) return;
  let saved: { courseId: string; y: number } | null = null;
  try {
    saved = JSON.parse(sessionStorage.getItem(SCROLL_KEY) ?? 'null');
    sessionStorage.removeItem(SCROLL_KEY);
  } catch { /* storage unavailable */ }
  if (!saved || saved.courseId !== selectedCourseId.value) return;
  await nextTick();
  window.scrollTo({ top: saved.y });
}, { immediate: true });

const { syncPendingSessions, loadPending, syncPendingReports } = useOfflineQuiz();
const isOnline = ref(true);
const syncing = ref(false);

async function runSync() {
  syncPendingReports();
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
  courseLabel.value = '';
  mapPickerOpen.value = false;
});

function buildLessonNodes(topic: Topic, colorBg: string, colorBorder: string, colorHex: string, colorShadow: string): LessonNode[] {
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
        icon: isCompleted ? 'check' : 'gift',
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
        icon: 'test',
        type: 'lesson',
        status,
        topicId: topic.id,
        stepId: step.id,
        sessionType: 'lesson',
        bestScore: step.progress?.best_score,
        colorBg,
        colorBorder,
        colorHex,
        colorShadow,
      });
    }
  }

  if (topic.steps.length > 0) {
    const allCompleted = topic.steps.every((s) => s.progress?.is_step_completed);
    // Like a lesson: finished once is completed (and can be replayed), with its best score.
    const finished = !!topic.progress?.final_completed_at;

    nodes.push({
      id: `boss-${topic.id}`,
      icon: 'swords',
      type: 'boss',
      status: finished ? 'completed' : allCompleted ? 'active' : 'locked',
      topicId: topic.id,
      sessionType: 'topic_final',
      bestScore: finished ? topic.progress?.final_best_score ?? 0 : undefined,
    });
  }

  return nodes;
}

const LOCKED = { color: '#e5e7eb', shadow: '#9ca3af', disabled: true };

/** How a map node looks as a PbStepCoin (colours from the old map buttons). */
function coinOf(node: LessonNode) {
  const score = node.status === 'completed' ? node.bestScore ?? 0 : null;
  if (node.type === 'chest') {
    if (node.status === 'completed') {
      return { color: '#fef3c7', shadow: '#fcd34d', icon: 'gift-open', disabled: true, label: 'Sandık, alındı' };
    }
    if (node.status === 'locked') {
      return { color: '#fef3c7', shadow: '#d97706', icon: 'gift', disabled: true, dim: true, label: 'Sandık, kilitli' };
    }
    return { color: '#ff9600', shadow: '#cc7800', icon: 'gift', label: 'Sandık' };
  }
  if (node.type === 'boss') {
    if (node.status === 'locked') return { ...LOCKED, icon: 'swords', fadedIcon: true, label: 'Konu sonu testi, kilitli' };
    return {
      color: '#ff4b4b',
      shadow: '#cc2222',
      icon: 'swords',
      score,
      label: score === null ? 'Konu sonu testi' : `Konu sonu testi, ${score} puan`,
    };
  }
  if (node.status === 'locked') return { ...LOCKED, icon: 'lock', label: 'Ders, kilitli' };
  return {
    color: node.colorHex ?? '#3b82f6',
    shadow: node.colorShadow ?? '#1d4ed8',
    icon: 'test',
    score,
    label: score === null ? 'Ders' : `Ders, ${score} puan`,
  };
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

  const token = getToken();
  const { energyCount, unlimitedEnergy } = useEnergyTimer();
  const currentEnergy = token
    ? energyCount.value
    : useGuestState().state.value.energyCount;
  if (currentEnergy <= 0 && !(token && unlimitedEnergy.value)) {
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
    saveScroll();
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
    saveScroll();
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

  saveScroll();
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