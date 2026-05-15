<template>
  <div class="flex flex-col gap-7 max-w-[560px] mx-auto pb-10">
    <!-- Profile Header -->
    <div class="flex gap-5 items-start bg-white border-2 border-gray-200 rounded-2xl p-6">
      <div class="flex flex-col items-center gap-2 shrink-0">
        <div class="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-3xl font-black text-white border-b-4 border-primary-dark">
          {{ profile.username?.[0]?.toUpperCase() ?? '?' }}
        </div>
        <span class="bg-primary text-white text-[0.72rem] font-extrabold px-2.5 py-1 rounded-full tracking-wide whitespace-nowrap">Seviye {{ profile.level }}</span>
      </div>
      <div class="flex-1 min-w-0">
        <h1 class="text-xl font-black text-gray-800 mb-1">{{ profile.username }}</h1>
        <p class="text-sm font-semibold text-gray-400 mb-3.5">{{ profile.email }}</p>
        <div class="flex justify-between text-xs font-bold text-gray-400 mb-1.5">
          <span>Seviye {{ profile.level }}</span>
          <span>{{ profile.xpInLevel }} / {{ profile.xpNextLevel }} XP</span>
        </div>
        <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div class="h-full bg-primary rounded-full transition-all duration-500" :style="{ width: `${(profile.xpInLevel / profile.xpNextLevel) * 100}%` }" />
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-2 gap-3">
      <div v-for="stat in statCards" :key="stat.label" class="bg-white border-2 border-gray-200 rounded-2xl p-4 flex flex-col items-center gap-1 text-center hover:bg-gray-50 transition-colors">
        <span class="text-2xl">{{ stat.icon }}</span>
        <span class="text-xl font-black text-gray-800">{{ stat.value }}</span>
        <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">{{ stat.label }}</span>
      </div>
    </div>

    <!-- Streak Calendar -->
    <div class="flex flex-col gap-3.5">
      <h2 class="text-base font-extrabold text-gray-800">📅 Bu Haftaki Seri</h2>
      <div class="flex justify-between bg-white border-2 border-gray-200 rounded-2xl p-4 gap-2">
        <div
          v-for="day in weekDays"
          :key="day.label"
          class="flex flex-col items-center gap-1.5 flex-1 min-w-[36px]"
        >
          <div class="w-9 h-9 rounded-full flex items-center justify-center text-lg"
            :class="{
              'bg-warning/15': day.done,
              'border-2 border-primary border-dashed': day.isToday && !day.done,
              'bg-gray-100': !day.done && !day.isToday,
            }"
          >{{ day.done ? '🔥' : '·' }}</div>
          <span class="text-[0.68rem] font-bold uppercase tracking-wide"
            :class="day.isToday ? 'text-primary' : 'text-gray-400'"
          >{{ day.label }}</span>
        </div>
      </div>
    </div>

    <!-- Achievements -->
    <div class="flex flex-col gap-3.5">
      <h2 class="text-base font-extrabold text-gray-800">🏅 Başarımlar</h2>
      <div v-if="achievements.length === 0" class="text-sm font-semibold text-gray-400 text-center py-4">Henüz başarım kazanılmadı.</div>
      <div v-else class="grid grid-cols-3 sm:grid-cols-4 gap-3">
        <div
          v-for="badge in achievements"
          :key="badge.name"
          class="flex flex-col items-center gap-1.5 bg-white border-2 border-gray-200 rounded-2xl p-3 text-center relative"
          :class="{ 'opacity-40 grayscale': !badge.earned }"
          :title="badge.description"
        >
          <span class="text-2xl">{{ badge.icon }}</span>
          <span class="text-[0.68rem] font-bold text-gray-800 leading-tight">{{ badge.name }}</span>
          <div v-if="badge.earned" class="absolute -top-1 -right-1 w-4 h-4 bg-positive rounded-full border-2 border-white" />
        </div>
      </div>
    </div>

    <!-- Enrollments -->
    <div class="flex flex-col gap-3.5">
      <h2 class="text-base font-extrabold text-gray-800">🎓 Kayıtlı Sınavlarım</h2>
      <div v-if="loadingEnrollments" class="text-sm font-semibold text-gray-400 text-center py-4">Yükleniyor…</div>
      <div v-else class="flex flex-col gap-2.5">
        <div
          v-for="enrollment in enrollments"
          :key="enrollment.exam_type_id"
          class="flex items-center justify-between bg-white border-2 rounded-2xl px-4 py-3 transition-colors"
          :class="enrollment.exam_type_id === activeExamTypeId ? 'border-primary bg-primary/5' : 'border-gray-200'"
        >
          <div class="flex flex-col">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-wide">{{ enrollment.exam_group_name }}</span>
            <span class="text-sm font-extrabold text-gray-800">{{ enrollment.exam_type_name }}</span>
          </div>
          <div class="flex items-center gap-2">
            <button
              v-if="enrollment.exam_type_id !== activeExamTypeId"
              class="bg-white text-primary font-bold text-xs px-3 py-1.5 rounded-xl border-2 border-primary hover:bg-primary/5 transition-all cursor-pointer font-[inherit]"
              @click="switchExam(enrollment.exam_type_id)"
            >Geç</button>
            <span v-else class="text-xs font-bold text-positive bg-positive/10 px-3 py-1.5 rounded-full">Aktif</span>
            <button
              class="w-7 h-7 flex items-center justify-center rounded-lg border-2 transition-all font-[inherit]"
              :class="enrollments.length === 1 ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-gray-200 text-gray-400 hover:border-negative hover:text-negative hover:bg-negative/5 cursor-pointer'"
              :disabled="enrollments.length === 1"
              :title="enrollments.length === 1 ? 'Son kayıtlı sınavınızı silemezsiniz' : 'Sınavı kaldır'"
              @click="enrollments.length > 1 && openDeleteConfirm(enrollment.exam_type_id)"
            >✕</button>
          </div>
        </div>
        <button class="w-full bg-gray-50 border-2 border-dashed border-gray-300 text-gray-400 font-bold text-sm py-3 rounded-2xl cursor-pointer hover:border-primary hover:text-primary transition-all font-[inherit]" @click="openEnrollModal">+ Sınav Ekle</button>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex gap-3">
      <button class="flex-1 bg-white text-gray-400 font-bold text-sm py-3 rounded-xl border-2 border-gray-200 hover:border-gray-400 hover:text-gray-800 transition-all cursor-pointer font-[inherit]" @click="router.push('/profile/edit')">✏️ Profili Düzenle</button>
      <button class="flex-1 bg-white text-negative font-bold text-sm py-3 rounded-xl border-2 border-gray-200 hover:border-negative hover:bg-negative/5 transition-all cursor-pointer font-[inherit]" @click="signOut">🚪 Çıkış</button>
    </div>
  </div>

  <!-- Delete Confirm Modal -->
  <Teleport to="body">
    <transition name="fade">
      <div v-if="showDeleteConfirm" class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5" @click.self="closeDeleteConfirm">
        <div class="bg-white border-2 border-gray-200 rounded-3xl max-w-[380px] w-full p-8 relative flex flex-col gap-5">
          <button class="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-gray-400 font-bold cursor-pointer hover:bg-gray-200 transition-colors" @click="closeDeleteConfirm">✕</button>
          <div class="flex flex-col items-center gap-3 text-center">
            <div class="w-14 h-14 rounded-full bg-negative/10 flex items-center justify-center text-2xl">🗑️</div>
            <h2 class="text-lg font-black text-gray-800">Sınavı Kaldır</h2>
            <p class="text-sm font-semibold text-gray-500 leading-relaxed">İlerlemeniz korunur ve istediğiniz zaman yeniden katılabilirsiniz.</p>
          </div>
          <p v-if="deleteError" class="text-negative text-sm font-semibold text-center">{{ deleteError }}</p>
          <div class="flex gap-2.5">
            <button class="flex-1 bg-white text-gray-400 font-bold text-sm py-3 rounded-xl border-2 border-gray-200 hover:border-gray-400 hover:text-gray-800 transition-all cursor-pointer font-[inherit]" :disabled="deleting" @click="closeDeleteConfirm">Vazgeç</button>
            <button class="flex-1 bg-negative text-white font-black text-sm py-3 rounded-xl border-b-4 border-negative/70 active:border-b-0 active:translate-y-1 transition-all duration-100 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed" :disabled="deleting" @click="confirmDelete">
              {{ deleting ? 'Kaldırılıyor…' : 'Kaldır' }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>

  <!-- Enroll Modal -->
  <Teleport to="body">
    <transition name="fade">
      <div v-if="showEnrollModal" class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5" @click.self="closeEnrollModal">
        <div class="bg-white border-2 border-gray-200 rounded-3xl max-w-[440px] w-full p-8 relative flex flex-col gap-5">
          <button class="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-gray-400 font-bold cursor-pointer hover:bg-gray-200 transition-colors" @click="closeEnrollModal">✕</button>

          <!-- Step 1 -->
          <template v-if="enrollStep === 1">
            <h2 class="text-lg font-black text-gray-800 text-center">Sınav Grubu Seç</h2>
            <div v-if="loadingExamGroups" class="text-center text-gray-400 py-4">Yükleniyor…</div>
            <div v-else class="flex flex-col gap-2.5">
              <button
                v-for="group in examGroups"
                :key="group.id"
                class="flex flex-col gap-1 px-4 py-3 rounded-2xl border-2 bg-gray-50 text-left cursor-pointer transition-all duration-150 relative font-[inherit]"
                :class="{
                  '!border-primary !bg-primary/10': selectedGroupId === group.id,
                  'border-gray-200 hover:border-primary/40': selectedGroupId !== group.id && group.is_active,
                  'opacity-40 cursor-not-allowed': !group.is_active,
                }"
                :disabled="!group.is_active"
                @click="selectGroup(group)"
              >
                <span class="text-sm font-extrabold text-gray-800">{{ group.name }}</span>
                <span class="text-xs text-gray-400 font-semibold">{{ group.description }}</span>
                <span v-if="!group.is_active" class="absolute top-3 right-3 text-[0.65rem] font-bold text-warning bg-warning/10 px-2 py-0.5 rounded-full">Yakında</span>
              </button>
            </div>
            <button class="w-full bg-primary text-white font-black text-sm py-3 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed" :disabled="!selectedGroupId" @click="enrollStep = 2">Devam →</button>
          </template>

          <!-- Step 2 -->
          <template v-else-if="enrollStep === 2">
            <h2 class="text-lg font-black text-gray-800 text-center">Sınav Türü Seç</h2>
            <div class="flex flex-col gap-2.5">
              <button
                v-for="type in availableTypes"
                :key="type.id"
                class="flex flex-col gap-1 px-4 py-3 rounded-2xl border-2 bg-gray-50 text-left cursor-pointer transition-all duration-150 font-[inherit]"
                :class="selectedTypeId === type.id ? '!border-primary !bg-primary/10' : 'border-gray-200 hover:border-primary/40'"
                @click="selectedTypeId = type.id"
              >
                <span class="text-sm font-extrabold text-gray-800">{{ type.name }}</span>
                <span class="text-xs text-gray-400 font-semibold">{{ type.description }}</span>
              </button>
            </div>
            <div v-if="availableTypes.length === 0" class="text-center text-gray-400 text-sm py-3">Bu gruptaki tüm sınavlara zaten kayıtlısın.</div>
            <p v-if="enrollError" class="text-negative text-sm font-semibold text-center">{{ enrollError }}</p>
            <div class="flex gap-2.5">
              <button class="flex-1 bg-white text-gray-400 font-bold text-sm py-3 rounded-xl border-2 border-gray-200 hover:border-gray-400 hover:text-gray-800 transition-all cursor-pointer font-[inherit]" @click="enrollStep = 1">← Geri</button>
              <button class="flex-1 bg-primary text-white font-black text-sm py-3 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed" :disabled="!selectedTypeId || enrolling" @click="submitEnrollment">
                {{ enrolling ? 'Ekleniyor…' : 'Sınav Ekle' }}
              </button>
            </div>
          </template>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
const router = useRouter();

interface Enrollment {
  id: string;
  exam_type_id: string;
  exam_type_name: string;
  exam_type_slug: string;
  exam_group_name: string;
  exam_group_slug: string;
  enrolled_at: string;
}

const activeExamTypeId = ref('');
const { activeExamTypeId: globalActiveExamTypeId, switchExam: globalSwitchExam, switchingExam } = useUserSession()
const { enrollments } = useUserSession()
const loadingEnrollments = ref(false);
const showEnrollModal = ref(false);

const showDeleteConfirm = ref(false);
const confirmDeleteId = ref('');
const deleting = ref(false);
const deleteError = ref('');

function openDeleteConfirm(examTypeId: string) {
  confirmDeleteId.value = examTypeId;
  deleteError.value = '';
  showDeleteConfirm.value = true;
}

function closeDeleteConfirm() {
  showDeleteConfirm.value = false;
  confirmDeleteId.value = '';
  deleteError.value = '';
}

async function confirmDelete() {
  if (!confirmDeleteId.value) return;
  deleting.value = true;
  deleteError.value = '';
  const token = localStorage.getItem('pb_token');
  if (!token) return;
  try {
    const result = await $fetch<{ newActiveExamTypeId: string | null }>(
      `/api/users/me/enrollments/${confirmDeleteId.value}`,
      { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } },
    );
    enrollments.value = enrollments.value.filter(e => e.exam_type_id !== confirmDeleteId.value);
    if (result.newActiveExamTypeId) {
      activeExamTypeId.value = result.newActiveExamTypeId;
      globalActiveExamTypeId.value = result.newActiveExamTypeId;
    }
    closeDeleteConfirm();
  } catch (e: unknown) {
    const data = (e as { data?: { error?: string } })?.data;
    deleteError.value = data?.error || 'Kaldırma başarısız. Tekrar dene.';
  } finally {
    deleting.value = false;
  }
}

interface ExamGroup {
  id: string;
  name: string;
  description: string;
  is_active: boolean;
  exam_types: { id: string; name: string; description: string }[];
}

const enrollStep = ref(1);
const examGroups = ref<ExamGroup[]>([]);
const loadingExamGroups = ref(false);
const selectedGroupId = ref('');
const selectedTypeId = ref('');
const enrolling = ref(false);
const enrollError = ref('');

const availableTypes = computed(() => {
  const group = examGroups.value.find(g => g.id === selectedGroupId.value);
  if (!group) return [];
  const enrolledIds = new Set(enrollments.value.map(e => e.exam_type_id));
  return group.exam_types.filter(t => !enrolledIds.has(t.id));
});

function selectGroup(group: ExamGroup) {
  selectedGroupId.value = group.id;
  selectedTypeId.value = '';
}

function closeEnrollModal() {
  showEnrollModal.value = false;
  enrollStep.value = 1;
  selectedGroupId.value = '';
  selectedTypeId.value = '';
  enrollError.value = '';
}

async function openEnrollModal() {
  showEnrollModal.value = true;
  enrollStep.value = 1;
  selectedGroupId.value = '';
  selectedTypeId.value = '';
  enrollError.value = '';
  if (examGroups.value.length === 0) {
    loadingExamGroups.value = true;
    try {
      const groups = await $fetch<ExamGroup[]>('/api/exam-groups', {
        headers: { Authorization: `Bearer ${localStorage.getItem('pb_token')}` },
      });
      examGroups.value = groups;
    } catch { /* skip */ }
    loadingExamGroups.value = false;
  }
}

async function submitEnrollment() {
  if (!selectedTypeId.value) return;
  enrolling.value = true;
  enrollError.value = '';
  const token = localStorage.getItem('pb_token');
  if (!token) return;
  try {
    await $fetch('/api/users/me/enrollments', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: { exam_type_id: selectedTypeId.value },
    });
    closeEnrollModal();
    try {
      const list = await $fetch<Enrollment[]>('/api/users/me/enrollments', {
        headers: { Authorization: `Bearer ${token}` },
      });
      enrollments.value = list;
    } catch { /* skip */ }
  } catch (e: unknown) {
    const data = (e as { data?: { error?: string } })?.data;
    enrollError.value = data?.error || 'Kayıt başarısız. Tekrar dene.';
  } finally {
    enrolling.value = false;
  }
}

const switchExam = async (examTypeId: string) => {
  await globalSwitchExam(examTypeId)
}

// Keep local view in sync with global active exam
watch(globalActiveExamTypeId, (v) => {
  if (v) activeExamTypeId.value = v
})

const signOut = () => {
  const { reset: resetSession } = useUserSession()
  const { reset: resetExamContent } = useExamContent()
  resetSession()
  resetExamContent()
  localStorage.removeItem('pb_token')
  router.replace('/auth/login')
};

const profile = ref({
  username: '',
  email: '',
  totalXp: 0,
  level: 1,
  xpInLevel: 0,
  xpNextLevel: 500,
  currentStreak: 0,
  maxStreak: 0,
  quizzesCompleted: 0,
  acornBalance: 0,
});

const statCards = computed(() => [
  { icon: '⚡', value: profile.value.totalXp.toLocaleString('tr'), label: 'Toplam XP' },
  { icon: '🔥', value: profile.value.currentStreak, label: 'Güncel Seri' },
  { icon: '🏆', value: profile.value.maxStreak, label: 'En Uzun Seri' },
  { icon: '🎯', value: profile.value.quizzesCompleted, label: 'Quiz' },
  { icon: '🌰', value: profile.value.acornBalance.toLocaleString('tr'), label: 'Acorn' },
]);

const weekDays = ref([
  { label: 'Pzt', done: false, isToday: false },
  { label: 'Sal', done: false, isToday: false },
  { label: 'Çrş', done: false, isToday: false },
  { label: 'Per', done: false, isToday: false },
  { label: 'Cum', done: false, isToday: false },
  { label: 'Cts', done: false, isToday: false },
  { label: 'Paz', done: false, isToday: false },
]);

interface Achievement {
  name: string;
  icon: string;
  description: string;
  earned: boolean;
}

const achievements = ref<Achievement[]>([]);

const fetchProfile = async () => {
  const token = localStorage.getItem('pb_token');
  if (!token) return;
  const h = { Authorization: `Bearer ${token}` };
  try {
    const [user, stats, earnedAchievements, allAchievements, streakHistory] = await Promise.all([
      $fetch<{
        username: string;
        email: string;
        acorn_balance: number;
        active_exam_type_id?: string;
      }>('/api/users/me', { headers: h }),
      $fetch<{
        xp: number;
        total_xp: number;
        level: number;
        current_streak: number;
        max_streak: number;
        quizzes_completed: number;
      }>('/api/users/me/stats', { headers: h }),
      $fetch<{
        id: string;
        name: string;
        icon_url: string;
        description: string;
        earned_at: string;
      }[]>('/api/users/me/achievements', { headers: h }),
      Promise.resolve([] as { id: string; name: string; icon_url: string; description: string }[]),
      $fetch<{ label: string; date: string; done: boolean; isToday: boolean }[]>('/api/users/me/streak-history', { headers: h }),
    ]);

    const level = stats.level ?? Math.floor((stats.total_xp ?? 0) / 500) + 1;
    const xpForLevel = (stats.total_xp ?? 0) % 500;

    profile.value = {
      username: user.username,
      email: user.email,
      totalXp: stats.total_xp ?? 0,
      level,
      xpInLevel: xpForLevel,
      xpNextLevel: 500,
      currentStreak: stats.current_streak ?? 0,
      maxStreak: stats.max_streak ?? 0,
      quizzesCompleted: stats.quizzes_completed ?? 0,
      acornBalance: user.acorn_balance ?? 0,
    };

    activeExamTypeId.value = user.active_exam_type_id ?? '';

    if (streakHistory && streakHistory.length === 7) {
      weekDays.value = streakHistory;
    }

    const earnedIds = new Set(earnedAchievements.map((a) => a.name));
    achievements.value = earnedAchievements.map((a) => ({
      name: a.name,
      icon: a.icon_url || '🏅',
      description: a.description,
      earned: true,
    }));
    for (const a of allAchievements) {
      if (!earnedIds.has(a.name)) {
        achievements.value.push({
          name: a.name,
          icon: a.icon_url || '🏅',
          description: a.description,
          earned: false,
        });
      }
    }
  } catch { /* silently fail */ }
};


onMounted(() => {
  fetchProfile();
  loadingEnrollments.value = false; // Ensure loadingEnrollments is set to false since we are no longer fetching enrollments
});
</script>
