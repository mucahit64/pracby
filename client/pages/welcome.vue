<template>
  <div class="welcome-page">
    <div class="welcome-card">
      <PbMascot :width="80" :height="100" />
      <h1 class="welcome-title">pracby</h1>
      <p class="welcome-sub">Hangi sınava hazırlanıyorsun?</p>

      <!-- Step 1: Select exam group -->
      <template v-if="!selectedGroupId">
        <div class="welcome-options">
          <button
            v-for="group in examGroups"
            :key="group.id"
            class="welcome-option"
            @click="selectGroup(group.id)"
          >
            <span class="welcome-option-name">{{ group.name }}</span>
            <span v-if="group.description" class="welcome-option-desc">{{ group.description }}</span>
          </button>
        </div>
      </template>

      <!-- Step 2: Select exam type -->
      <template v-else>
        <button class="welcome-back" @click="selectedGroupId = null">← Geri</button>
        <p class="welcome-step-label">Alt kategori seç:</p>
        <div class="welcome-options">
          <button
            v-for="et in selectedGroupTypes"
            :key="et.id"
            class="welcome-option"
            @click="selectExamType(et.id)"
          >
            <span class="welcome-option-name">{{ et.name }}</span>
          </button>
        </div>
      </template>

      <div class="welcome-footer">
        <span class="welcome-footer-text">Zaten hesabın var mı?</span>
        <NuxtLink to="/auth/login" class="welcome-link">Giriş Yap</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' });

interface ExamType {
  id: string;
  name: string;
}

interface ExamGroup {
  id: string;
  name: string;
  description?: string;
  exam_types: ExamType[];
}

const examGroups = ref<ExamGroup[]>([]);
const selectedGroupId = ref<string | null>(null);

const selectedGroupTypes = computed(() => {
  const group = examGroups.value.find((g) => g.id === selectedGroupId.value);
  return group?.exam_types ?? [];
});

onMounted(async () => {
  // If user is logged in, redirect to home
  if (localStorage.getItem('pb_token')) {
    navigateTo('/');
    return;
  }

  try {
    const data = await $fetch<ExamGroup[]>('/api/exam-groups');
    examGroups.value = data;
  } catch {
    // silently fail
  }
});

function selectGroup(groupId: string) {
  const group = examGroups.value.find((g) => g.id === groupId);
  if (group && group.exam_types.length === 1) {
    // Auto-select if only one type
    selectExamType(group.exam_types[0].id);
    return;
  }
  selectedGroupId.value = groupId;
}

function selectExamType(examTypeId: string) {
  localStorage.setItem('guestExamTypeId', examTypeId);
  localStorage.setItem('guestExamGroupId', selectedGroupId.value ?? '');
  navigateTo('/');
}
</script>

<style scoped>
.welcome-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
}

.welcome-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 400px;
  width: 100%;
}

.welcome-title {
  font-size: 2rem;
  font-weight: 900;
  color: var(--pb-purple-light);
  letter-spacing: -0.5px;
}

.welcome-sub {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--pb-text);
  text-align: center;
}

.welcome-step-label {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--pb-text-muted);
}

.welcome-back {
  align-self: flex-start;
  background: none;
  border: none;
  color: var(--pb-purple-light);
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  padding: 4px 0;
}

.welcome-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.welcome-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 18px 20px;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 16px;
  cursor: pointer;
  font-family: inherit;
  transition: border-color 0.15s, background 0.15s;
  color: var(--pb-text);
}

.welcome-option:hover {
  border-color: var(--pb-purple);
  background: rgba(124, 58, 237, 0.1);
}

.welcome-option-name {
  font-size: 1rem;
  font-weight: 800;
}

.welcome-option-desc {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--pb-text-muted);
}

.welcome-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
}

.welcome-footer-text {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--pb-text-muted);
}

.welcome-link {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--pb-purple-light);
}

.welcome-link:hover {
  text-decoration: underline;
}
</style>
