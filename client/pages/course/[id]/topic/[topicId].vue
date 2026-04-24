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
      <div class="flex flex-col gap-3">
        <div
          v-for="(step, idx) in topic.steps.filter(s => s.step_type !== 'reward')"
          :key="step.id"
          class="flex items-center gap-3.5 bg-white border-2 rounded-2xl px-4 py-4 transition-colors"
          :class="step.progress?.is_step_completed ? 'border-positive' : 'border-gray-200'"
        >
          <div class="w-9 h-9 rounded-full flex items-center justify-center text-sm font-extrabold shrink-0"
            :class="step.progress?.is_step_completed ? 'bg-positive text-white' : 'bg-gray-200 text-gray-800'"
          >{{ idx + 1 }}</div>
          <div class="flex-1 min-w-0 flex flex-col gap-1">
            <div class="text-sm font-extrabold text-gray-800">{{ step.name }}</div>
            <div class="text-xs font-semibold text-gray-400">
              {{ step.tests.length }} test
              <span v-if="step.progress">· {{ step.progress.tests_completed }} / {{ step.tests_required }} tamamlandı</span>
            </div>
            <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden mt-1">
              <div
                class="h-full rounded-full transition-all duration-300"
                :class="step.progress?.is_step_completed ? 'bg-positive' : 'bg-primary'"
                :style="{ width: `${stepPercent(step)}%` }"
              />
            </div>
          </div>
          <div class="shrink-0">
            <span v-if="step.progress?.is_step_completed" class="text-lg font-black text-positive">✓</span>
            <span v-else class="text-sm font-extrabold text-gray-400">%{{ stepPercent(step) }}</span>
          </div>
        </div>
      </div>

      <div v-if="topic.steps.length === 0" class="text-center py-16 text-gray-400 font-bold">
        Bu bölüm için henüz adım eklenmemiş.
      </div>
    </template>

    <div v-else class="text-center py-16 text-gray-400 font-bold">
      Bölüm bulunamadı.
    </div>
  </div>
</template>

<script setup lang="ts">
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

interface Topic {
  id: string;
  name: string;
  sort_order: number;
  steps: Step[];
}

const route = useRoute();
const loading = ref(true);
const topic = ref<Topic | null>(null);

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

function stepPercent(step: Step): number {
  if (step.progress?.is_step_completed) return 100;
  const total = step.tests_required + 1;
  const done = step.progress?.tests_completed ?? 0;
  return total > 0 ? Math.round((done / total) * 100) : 0;
}

const overallPercent = computed(() => {
  if (!topic.value) return 0;
  const steps = topic.value.steps.filter((s) => s.step_type !== 'reward');
  if (steps.length === 0) return 0;
  const completed = steps.filter((s) => s.progress?.is_step_completed).length;
  return Math.round((completed / steps.length) * 100);
});
</script>
