<template>
  <div class="course-page">
    <!-- Back button -->
    <NuxtLink to="/" class="course-back-btn">
      ← Geri
    </NuxtLink>

    <div v-if="loading" class="course-loading">Yükleniyor…</div>

    <template v-else>
    <div class="course-header">
      <div class="course-emoji">{{ course.emoji }}</div>
      <div class="course-header-info">
        <h1 class="course-name">{{ course.name }}</h1>
        <p class="course-desc">{{ course.description }}</p>
        <div class="course-progress-row">
          <div class="course-progress-bar">
            <div class="course-progress-fill" :style="{ width: `${course.progress}%` }" />
          </div>
          <span class="course-progress-pct">%{{ course.progress }}</span>
        </div>
      </div>
    </div>

    <!-- Topics skill tree -->
    <div class="skill-tree">
      <div
        v-for="(topic, idx) in topics"
        :key="topic.id"
        class="skill-node-row"
        :class="`skill-offset-${idx % 5}`"
      >
        <!-- Connector line from previous node -->
        <div v-if="idx > 0" class="skill-connector" />

        <div class="skill-node-wrap">
          <!-- Crown dots above completed -->
          <div v-if="topic.status === 'completed'" class="skill-crowns">
            <span
              v-for="i in 5"
              :key="i"
              class="skill-crown"
              :class="{ 'skill-crown--filled': i <= topic.crownLevel }"
            />
          </div>

          <!-- Node button -->
          <button
            class="skill-node"
            :class="[`skill-node--${topic.status}`]"
            :disabled="topic.status === 'locked'"
            @click="startQuiz(topic)"
          >
            <span class="skill-node-icon">
              {{ topic.status === 'locked' ? '🔒' : topic.icon }}
            </span>
          </button>

          <!-- Topic name -->
          <div class="skill-node-label" :class="{ 'skill-node-label--muted': topic.status === 'locked' }">
            {{ topic.name }}
          </div>

          <!-- XP badge for active -->
          <div v-if="topic.status === 'active'" class="skill-xp-badge">+{{ topic.xpReward }} XP</div>
        </div>
      </div>
    </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const courseId = route.params.id as string;
const { api } = useApi();

const loading = ref(true);

const course = ref({
  name: '',
  emoji: '📚',
  description: '',
  progress: 0,
});

interface Topic {
  id: string;
  name: string;
  icon: string;
  status: 'completed' | 'active' | 'locked';
  crownLevel: number;
  xpReward: number;
}

const topics = ref<Topic[]>([]);

interface ApiTopic {
  id: string;
  name: string;
  icon_url?: string;
  unlock_after?: string | null;
  steps?: { id: string; step_type: string; progress?: { is_step_completed?: boolean } | null }[];
  progress?: { crown_level?: number; lessons_completed?: number; is_unlocked?: boolean } | null;
}

interface ApiCourseFull {
  name: string;
  icon_url?: string;
  color?: string;
  description?: string;
  topics: ApiTopic[];
}

function deriveTopicStatus(topic: ApiTopic, idx: number, allTopics: ApiTopic[]): 'completed' | 'active' | 'locked' {
  const progress = topic.progress;
  if (!progress) {
    return idx === 0 ? 'active' : 'locked';
  }
  if (progress.is_unlocked === false) return 'locked';

  const steps = topic.steps ?? [];
  const lessonSteps = steps.filter((s) => s.step_type === 'lesson');
  const allDone = lessonSteps.length > 0 && lessonSteps.every((s) => s.progress?.is_step_completed);
  if (allDone) return 'completed';

  // If previous topic is completed or this is the first, it's active
  if (idx === 0) return 'active';
  const prevTopic = allTopics[idx - 1];
  const prevProgress = prevTopic?.progress;
  if (prevProgress) {
    const prevSteps = prevTopic.steps ?? [];
    const prevLessons = prevSteps.filter((s) => s.step_type === 'lesson');
    const prevAllDone = prevLessons.length > 0 && prevLessons.every((s) => s.progress?.is_step_completed);
    if (prevAllDone) return 'active';
  }
  return 'locked';
}

onMounted(async () => {
  try {
    const data = await api<ApiCourseFull>(`/api/courses/${courseId}/full`);
    course.value = {
      name: data.name,
      emoji: data.icon_url ?? '📚',
      description: data.description ?? '',
      progress: 0,
    };

    // For guest users, overlay step and topic progress from localStorage quiz results
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('pb_token') : '';
    if (!token) {
      const { overlayGuestProgress } = useGuestState();
      overlayGuestProgress(data.topics);
    }

    const mappedTopics: Topic[] = data.topics.map((t, idx) => {
      const status = deriveTopicStatus(t, idx, data.topics);
      return {
        id: t.id,
        name: t.name,
        icon: t.icon_url ?? '📖',
        status,
        crownLevel: t.progress?.crown_level ?? 0,
        xpReward: 20,
      };
    });

    topics.value = mappedTopics;

    // Calculate progress
    const completed = mappedTopics.filter((t) => t.status === 'completed').length;
    course.value.progress = mappedTopics.length > 0 ? Math.round((completed / mappedTopics.length) * 100) : 0;
  } catch {
    // Silently handle — empty state shown
  } finally {
    loading.value = false;
  }
});

function startQuiz(topic: Topic) {
  if (topic.status === 'locked') return;
  navigateTo(`/quiz/${topic.id}`);
}
</script>

<style scoped>
.course-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 480px;
  margin: 0 auto;
  padding-bottom: 40px;
}

.course-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--pb-text-muted);
  font-size: 0.88rem;
  font-weight: 700;
  transition: color 0.12s;
}

.course-back-btn:hover { color: var(--pb-text); }

.course-loading {
  text-align: center;
  color: var(--pb-text-muted);
  padding: 40px 0;
  font-weight: 700;
}

/* Course header */
.course-header {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 20px;
  padding: 22px;
}

.course-emoji {
  font-size: 2.4rem;
  flex-shrink: 0;
}

.course-header-info { flex: 1; }

.course-name {
  font-size: 1.3rem;
  font-weight: 900;
  color: var(--pb-text);
  margin-bottom: 4px;
}

.course-desc {
  font-size: 0.82rem;
  color: var(--pb-text-muted);
  font-weight: 600;
  margin-bottom: 12px;
}

.course-progress-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.course-progress-bar {
  flex: 1;
  height: 10px;
  background: var(--pb-bg);
  border-radius: 99px;
  overflow: hidden;
}

.course-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--pb-purple), var(--pb-purple-light));
  border-radius: 99px;
  transition: width 0.5s;
}

.course-progress-pct {
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--pb-purple-light);
  white-space: nowrap;
}

/* Skill tree */
.skill-tree {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.skill-node-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.skill-offset-0 { align-self: center; }
.skill-offset-1 { align-self: flex-end; margin-right: 40px; }
.skill-offset-2 { align-self: flex-end; margin-right: 80px; }
.skill-offset-3 { align-self: flex-end; margin-right: 40px; }
.skill-offset-4 { align-self: center; }

.skill-connector {
  width: 4px;
  height: 24px;
  background: var(--pb-border);
  border-radius: 2px;
  margin-bottom: 0;
}

.skill-node-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px 0;
}

.skill-crowns {
  display: flex;
  gap: 4px;
}

.skill-crown {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--pb-border);
}

.skill-crown--filled {
  background: var(--pb-gold);
}

.skill-node {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  transition: transform 0.12s;
}

.skill-node:hover:not(:disabled) { transform: scale(1.08); }

.skill-node--completed {
  background: var(--pb-purple);
  box-shadow: 0 6px 0 var(--pb-purple-dark);
}

.skill-node--active {
  background: var(--pb-purple);
  box-shadow: 0 6px 0 var(--pb-purple-dark);
  animation: skillpulse 2s infinite;
}

.skill-node--locked {
  background: var(--pb-bg-card);
  box-shadow: 0 5px 0 rgba(0,0,0,0.35);
  cursor: not-allowed;
  border: 3px solid var(--pb-border);
}

@keyframes skillpulse {
  0%, 100% { box-shadow: 0 6px 0 var(--pb-purple-dark); }
  50% { box-shadow: 0 6px 24px rgba(124, 58, 237, 0.55); }
}

.skill-node-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--pb-text);
  text-align: center;
  max-width: 100px;
}

.skill-node-label--muted { color: var(--pb-text-muted); }

.skill-xp-badge {
  background: rgba(88, 204, 2, 0.15);
  color: var(--pb-green);
  font-size: 0.7rem;
  font-weight: 800;
  padding: 3px 10px;
  border-radius: 99px;
  border: 1px solid rgba(88, 204, 2, 0.35);
}
</style>
