<template>
  <div class="flex flex-col gap-6 pb-10">
    <div v-if="loading" class="flex flex-col items-center gap-3 py-16 text-gray-400">
      <div class="w-8 h-8 border-3 border-gray-200 border-t-primary rounded-full animate-spin" />
      <p class="font-bold">Yükleniyor…</p>
    </div>

    <template v-else-if="topic">
      <!-- Header -->
      <div class="flex flex-col gap-3">
        <button class="self-start bg-transparent border-0 text-primary text-sm font-bold cursor-pointer p-1 font-[inherit]" @click="navigateTo('/')">← Geri</button>
        <h1 class="text-xl font-black text-gray-800">{{ topic.name }}</h1>
        <div class="flex items-center gap-3">
          <span class="text-lg font-black text-primary">%{{ overallPercent }}</span>
          <div class="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden border-2 border-gray-200">
            <div class="h-full bg-primary rounded-full transition-all duration-300" :style="{ width: `${overallPercent}%` }" />
          </div>
        </div>
      </div>

      <!-- Steps -->
      <div class="flex flex-col items-center gap-0">
        <template v-for="(step, idx) in topic.steps" :key="step.id">
          <div v-if="idx > 0" class="w-0.5 h-5 bg-gray-200" />

          <div v-if="step.step_type === 'reward'" class="flex flex-col items-center">
            <button
              class="w-[46px] h-[40px] rounded-[50%] flex items-center justify-center text-xl cursor-pointer transition-all duration-150"
              :style="{ '--node-shadow-color': isRewardUnlocked(step, idx) ? '#cc7800' : '#d97706' }"
              :class="isRewardUnlocked(step, idx)
                ? 'bg-warning text-white shadow-[0_6px_0_0_var(--node-shadow-color)] hover:shadow-[0_4px_0_0_var(--node-shadow-color)] hover:translate-y-[2px] active:shadow-none active:translate-y-[6px]'
                : 'bg-amber-100 text-amber-400 opacity-60 shadow-[0_6px_0_0_var(--node-shadow-color)]'"
              @click="openRewardDialog(step, idx)"
            >
              🎁
            </button>
          </div>

          <div v-else class="flex flex-col items-center">
            <div class="relative flex items-center justify-center w-[46px] h-[40px]">
              <svg
                v-if="step.progress?.is_step_completed"
                class="absolute w-[100px] h-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] pointer-events-none mt-[3px]"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" stroke-width="8" />
                <circle
                  cx="50" cy="50" r="40" fill="none"
                  :stroke="topicColor.hex"
                  stroke-width="8"
                  stroke-linecap="round"
                  :stroke-dasharray="2 * Math.PI * 40"
                  :stroke-dashoffset="2 * Math.PI * 40 * (1 - (step.progress.best_score ?? 0) / 100)"
                />
              </svg>
              
              <button
                class="w-[46px] h-[40px] rounded-[50%] flex flex-col items-center justify-center text-base font-extrabold cursor-pointer transition-all duration-150"
                :style="{ '--node-shadow-color': (isStepActive(idx) || step.progress?.is_step_completed) ? topicColor.shadowHex : '#9ca3af' }"
                :class="(!isStepActive(idx) && !step.progress?.is_step_completed)
                  ? 'bg-gray-100 text-gray-400 shadow-[0_6px_0_0_var(--node-shadow-color)] cursor-not-allowed'
                  : `${topicColor.bg} text-white shadow-[0_6px_0_0_var(--node-shadow-color)] hover:shadow-[0_4px_0_0_var(--node-shadow-color)] hover:translate-y-[2px] active:shadow-none active:translate-y-[6px]`"
                :disabled="!isStepActive(idx) && !step.progress?.is_step_completed"
                @click="startStep(step)"
              >
                <template v-if="step.progress?.is_step_completed">
                  <span class="text-sm font-black leading-none">{{ step.progress.best_score ?? 0 }}</span>
                  <span class="text-[9px] font-bold text-white/70 leading-none mt-0.5">puan</span>
                </template>
                <span v-else>{{ getLessonNumber(idx) }}</span>
              </button>
            </div>
          </div>
        </template>
      </div>

      <div v-if="topic.steps.length === 0" class="text-center py-16 text-gray-400 font-bold">
        Bu bölüm için henüz adım eklenmemiş.
      </div>
    </template>

    <div v-else class="text-center py-16 text-gray-400 font-bold">
      Bölüm bulunamadı.
    </div>
  </div>

  <!-- Reward Dialog -->
  <DialogsRewardStepDialog
    :open="rewardDialogOpen"
    :locked="!rewardDialogUnlocked"
    :reward-amount="rewardDialogStep?.reward_amount"
    @close="rewardDialogOpen = false; rewardDialogStep = null"
    @claim="claimSelectedReward"
  />
</template>

<script setup lang="ts">
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

interface Topic {
  id: string;
  name: string;
  sort_order: number;
  steps: Step[];
}

const route = useRoute();
const { api } = useApi();
const loading = ref(true);
const topic = ref<Topic | null>(null);
const topicColorIndex = ref(0);
const topicColor = computed(() => TOPIC_COLORS[topicColorIndex.value % TOPIC_COLORS.length]);

const rewardDialogOpen = ref(false);
const rewardDialogStep = ref<Step | null>(null);
const rewardDialogUnlocked = ref(false);

function getToken() {
  return localStorage.getItem('pb_token') ?? '';
}

onMounted(async () => {
  const courseId = route.params.id as string;
  const topicId = route.params.topicId as string;
  const token = getToken();

  try {
    const headers: Record<string, string> = {};
    if (token) headers.Authorization = `Bearer ${token}`;

    const data = await $fetch<{ topics: Topic[] }>(`/api/courses/${courseId}/full`, { headers });
    const found = data.topics.find((t) => t.id === topicId);
    const topicIdx = data.topics.findIndex((t) => t.id === topicId);
    topicColorIndex.value = topicIdx >= 0 ? topicIdx : 0;

    if (!token && found) {
      const { overlayGuestProgress } = useGuestState();
      overlayGuestProgress([found]);
    }

    topic.value = found ?? null;
  } catch {
    topic.value = null;
  } finally {
    loading.value = false;
  }
});

function getLessonNumber(stepIndex: number): number {
  if (!topic.value) return 1;
  let count = 0;
  for (let i = 0; i <= stepIndex; i++) {
    if (topic.value.steps[i].step_type === 'lesson') count++;
  }
  return count;
}

function isStepActive(idx: number): boolean {
  if (!topic.value) return false;
  const steps = topic.value.steps;
  // First lesson step is always active
  if (idx === 0) return true;
  // Active if previous non-reward step is completed
  for (let i = idx - 1; i >= 0; i--) {
    if (steps[i].step_type === 'lesson') {
      return Boolean(steps[i].progress?.is_step_completed);
    }
  }
  return true;
}

function isRewardUnlocked(step: Step, idx: number): boolean {
  if (!topic.value) return false;
  const steps = topic.value.steps;
  // Reward is unlocked if previous lesson step is completed
  for (let i = idx - 1; i >= 0; i--) {
    if (steps[i].step_type === 'lesson') {
      return Boolean(steps[i].progress?.is_step_completed);
    }
  }
  return true;
}

async function claimReward(step: Step) {
  const token = getToken();
  if (!token) return;
  try {
    await api(`/api/quiz/reward/${step.id}/claim`, { method: 'POST' });
    // Refresh page to show updated state
    window.location.reload();
  } catch { /* silently fail */ }
}

function openRewardDialog(step: Step, idx: number) {
  rewardDialogStep.value = step;
  rewardDialogUnlocked.value = isRewardUnlocked(step, idx);
  rewardDialogOpen.value = true;
}

async function claimSelectedReward() {
  if (!rewardDialogStep.value) return;
  await claimReward(rewardDialogStep.value);
}

function startStep(step: Step) {
  if (!topic.value) return;
  navigateTo(`/quiz/${topic.value.id}?stepId=${step.id}`);
}

const overallPercent = computed(() => {
  if (!topic.value) return 0;
  const steps = topic.value.steps.filter((s) => s.step_type === 'lesson');
  if (steps.length === 0) return 0;
  const completed = steps.filter((s) => s.progress?.is_step_completed).length;
  return Math.round((completed / steps.length) * 100);
});
</script>
