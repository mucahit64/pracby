<template>
  <div class="topic-summary">
    <div v-if="loading" class="ts-loading">
      <div class="ts-spinner" />
      <p>Yükleniyor…</p>
    </div>

    <template v-else-if="topic">
      <!-- Header -->
      <div class="ts-header">
        <button class="ts-back" @click="navigateTo('/')">← Geri</button>
        <h1 class="ts-title">{{ topic.name }}</h1>
        <div class="ts-progress-summary">
          <span class="ts-progress-pct">%{{ overallPercent }}</span>
          <div class="ts-progress-bar">
            <div class="ts-progress-fill" :style="{ width: `${overallPercent}%` }" />
          </div>
        </div>
      </div>

      <!-- Steps list -->
      <div class="ts-steps">
        <div
          v-for="(step, idx) in topic.steps.filter(s => s.step_type !== 'reward')"
          :key="step.id"
          class="ts-step-card"
          :class="{ 'ts-step-card--completed': step.progress?.is_step_completed }"
        >
          <div class="ts-step-num">{{ idx + 1 }}</div>
          <div class="ts-step-body">
            <div class="ts-step-name">{{ step.name }}</div>
            <div class="ts-step-meta">
              <span>{{ step.tests.length }} test</span>
              <span v-if="step.progress" class="ts-step-tests">
                · {{ step.progress.tests_completed }} / {{ step.tests_required }} tamamlandı
              </span>
            </div>
            <div class="ts-step-bar">
              <div
                class="ts-step-bar-fill"
                :style="{ width: `${stepPercent(step)}%` }"
              />
            </div>
          </div>
          <div class="ts-step-status">
            <span v-if="step.progress?.is_step_completed" class="ts-check">✓</span>
            <span v-else class="ts-step-pct">%{{ stepPercent(step) }}</span>
          </div>
        </div>
      </div>

      <div v-if="topic.steps.length === 0" class="ts-empty">
        Bu bölüm için henüz adım eklenmemiş.
      </div>
    </template>

    <div v-else class="ts-empty">
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
    topic.value = found ?? null;
  } catch {
    topic.value = null;
  } finally {
    loading.value = false;
  }
});

function stepPercent(step: Step): number {
  if (step.progress?.is_step_completed) return 100;
  const total = step.tests_required + 1; // +1 for step final
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

<style scoped>
.topic-summary {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 40px;
}

.ts-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 60px 0;
  color: var(--pb-text-muted);
}

.ts-spinner {
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

.ts-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ts-back {
  align-self: flex-start;
  background: none;
  border: none;
  color: var(--pb-purple-light);
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  padding: 6px 0;
}

.ts-back:hover {
  color: var(--pb-purple);
}

.ts-title {
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--pb-text);
}

.ts-progress-summary {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ts-progress-pct {
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--pb-purple-light);
  min-width: 40px;
}

.ts-progress-bar {
  flex: 1;
  height: 10px;
  background: var(--pb-bg-card);
  border-radius: 99px;
  border: 2px solid var(--pb-border);
  overflow: hidden;
}

.ts-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--pb-purple), var(--pb-purple-light));
  border-radius: 99px;
  transition: width 0.4s ease;
}

.ts-steps {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ts-step-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 16px;
  padding: 16px 18px;
  transition: border-color 0.15s;
}

.ts-step-card--completed {
  border-color: var(--pb-green);
}

.ts-step-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--pb-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--pb-text);
  flex-shrink: 0;
}

.ts-step-card--completed .ts-step-num {
  background: var(--pb-green);
  color: white;
}

.ts-step-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.ts-step-name {
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--pb-text);
}

.ts-step-meta {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--pb-text-muted);
  display: flex;
  gap: 4px;
}

.ts-step-bar {
  height: 6px;
  background: var(--pb-border);
  border-radius: 99px;
  overflow: hidden;
  margin-top: 4px;
}

.ts-step-bar-fill {
  height: 100%;
  background: var(--pb-purple);
  border-radius: 99px;
  transition: width 0.3s ease;
}

.ts-step-card--completed .ts-step-bar-fill {
  background: var(--pb-green);
}

.ts-step-status {
  flex-shrink: 0;
}

.ts-check {
  font-size: 1.2rem;
  font-weight: 900;
  color: var(--pb-green);
}

.ts-step-pct {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--pb-text-muted);
}

.ts-empty {
  text-align: center;
  padding: 60px 0;
  color: var(--pb-text-muted);
  font-weight: 600;
}
</style>
