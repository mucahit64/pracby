<template>
  <div class="flex flex-col gap-6 max-w-[480px] mx-auto pb-10">
    <NuxtLink to="/" class="text-sm font-bold text-gray-400 hover:text-gray-800 transition-colors">← Geri</NuxtLink>

    <div v-if="loading" class="text-center text-gray-400 font-bold py-10">Yükleniyor…</div>

    <template v-else>
      <!-- Course header -->
      <div class="flex gap-4 items-start bg-white border-2 border-gray-200 rounded-2xl p-5">
        <span class="text-4xl shrink-0">{{ course.emoji }}</span>
        <div class="flex-1">
          <h1 class="text-xl font-black text-gray-800 mb-1">{{ course.name }}</h1>
          <p class="text-xs font-semibold text-gray-400 mb-3">{{ course.description }}</p>
          <div class="flex items-center gap-2.5">
            <div class="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-primary rounded-full transition-all duration-500" :style="{ width: `${course.progress}%` }" />
            </div>
            <span class="text-xs font-extrabold text-primary whitespace-nowrap">%{{ course.progress }}</span>
          </div>
        </div>
      </div>

      <!-- Skill tree -->
      <div class="flex flex-col items-center">
        <div
          v-for="(topic, idx) in topics"
          :key="topic.id"
          class="flex flex-col items-center"
          :class="{
            'self-center': idx % 5 === 0 || idx % 5 === 4,
            'self-end mr-10': idx % 5 === 1 || idx % 5 === 3,
            'self-end mr-20': idx % 5 === 2,
          }"
        >
          <!-- Connector -->
          <div v-if="idx > 0" class="w-1 h-6 bg-gray-200 rounded-full" />

          <div class="flex flex-col items-center gap-1.5 py-2">
            <!-- Crown dots -->
            <div v-if="topic.status === 'completed'" class="flex gap-1">
              <span
                v-for="i in 5"
                :key="i"
                class="w-2.5 h-2.5 rounded-full"
                :class="i <= topic.crownLevel ? 'bg-warning' : 'bg-gray-200'"
              />
            </div>

            <!-- Node button -->
            <button
              class="w-[72px] h-[72px] rounded-full flex items-center justify-center text-[1.7rem] border-0 cursor-pointer transition-transform hover:scale-105 disabled:cursor-not-allowed border-b-[6px]"
              :class="[
                topic.status === 'locked'
                  ? 'bg-gray-100 !border-gray-200 text-gray-400'
                  : [topic.color.bg, topic.color.border, 'text-white'],
                topic.status === 'active' ? 'animate-pulse' : '',
              ]"
              :disabled="topic.status === 'locked'"
              @click="startQuiz(topic)"
            >
              {{ topic.status === 'locked' ? '🔒' : '⭐' }}
            </button>

            <!-- Topic name -->
            <span class="text-xs font-bold text-center max-w-[100px]" :class="topic.status === 'locked' ? 'text-gray-400' : 'text-gray-800'">{{ topic.name }}</span>

            <!-- XP badge -->
            <span v-if="topic.status === 'active'" class="text-[0.7rem] font-extrabold text-positive bg-positive/10 px-2.5 py-0.5 rounded-full border border-positive/30">+{{ topic.xpReward }} XP</span>
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

const TOPIC_COLORS = [
  { bg: 'bg-blue-500', border: 'border-blue-700', ring: 'ring-blue-300' },
  { bg: 'bg-emerald-500', border: 'border-emerald-700', ring: 'ring-emerald-300' },
  { bg: 'bg-amber-500', border: 'border-amber-700', ring: 'ring-amber-300' },
  { bg: 'bg-rose-500', border: 'border-rose-700', ring: 'ring-rose-300' },
  { bg: 'bg-violet-500', border: 'border-violet-700', ring: 'ring-violet-300' },
  { bg: 'bg-cyan-500', border: 'border-cyan-700', ring: 'ring-cyan-300' },
  { bg: 'bg-orange-500', border: 'border-orange-700', ring: 'ring-orange-300' },
  { bg: 'bg-fuchsia-500', border: 'border-fuchsia-700', ring: 'ring-fuchsia-300' },
  { bg: 'bg-teal-500', border: 'border-teal-700', ring: 'ring-teal-300' },
  { bg: 'bg-red-500', border: 'border-red-700', ring: 'ring-red-300' },
];

const course = ref({
  name: '',
  emoji: '📚',
  description: '',
  progress: 0,
});

interface Topic {
  id: string;
  name: string;
  status: 'completed' | 'active' | 'locked';
  crownLevel: number;
  xpReward: number;
  color: typeof TOPIC_COLORS[number];
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
        status,
        crownLevel: t.progress?.crown_level ?? 0,
        xpReward: 20,
        color: TOPIC_COLORS[idx % TOPIC_COLORS.length],
      };
    });

    topics.value = mappedTopics;

    const completed = mappedTopics.filter((t) => t.status === 'completed').length;
    course.value.progress = mappedTopics.length > 0 ? Math.round((completed / mappedTopics.length) * 100) : 0;
  } catch { /* silently fail */ }
  finally { loading.value = false; }
});

function startQuiz(topic: Topic) {
  if (topic.status === 'locked') return;
  navigateTo(`/quiz/${topic.id}`);
}
</script>
