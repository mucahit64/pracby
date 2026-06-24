<template>
  <div class="flex items-center justify-center min-h-[80vh] px-5">
    <div class="flex flex-col items-center gap-4 max-w-[400px] w-full">
      <h1 class="text-3xl font-black text-primary tracking-tight">pracby</h1>
      <p class="text-lg font-bold text-gray-800 text-center">Hangi sınava hazırlanıyorsun?</p>

      <template v-if="!selectedGroupId">
        <div class="flex flex-col gap-3 w-full">
          <button
            v-for="group in examGroups"
            :key="group.id"
            :disabled="group.name === 'YKS'"
            :class="[
              'relative flex flex-col items-center gap-1 px-5 py-4 bg-white border-2 rounded-2xl transition-all duration-150 font-[inherit]',
              group.name === 'YKS' 
                ? 'border-gray-200 opacity-60 cursor-not-allowed bg-gray-50' 
                : 'border-gray-200 cursor-pointer hover:border-primary hover:bg-primary/5'
            ]"
            @click="selectGroup(group.id)"
          >
            <span 
              v-if="group.name === 'YKS'" 
              class="absolute top-2 right-2 bg-primary/10 text-primary text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider"
            >
              Çok Yakında
            </span>

            <span class="text-base font-extrabold text-gray-800">{{ group.name }}</span>
            <span v-if="group.description" class="text-xs font-semibold text-gray-400 text-center">{{ group.description }}</span>
          </button>
        </div>
      </template>

      <template v-else>
        <button class="self-start bg-transparent border-0 text-primary text-sm font-bold cursor-pointer p-1 font-[inherit]" @click="selectedGroupId = null">← Geri</button>
        <p class="text-sm font-bold text-gray-400">Alt kategori seç:</p>
        <div class="flex flex-col gap-3 w-full">
          <button
            v-for="et in selectedGroupTypes"
            :key="et.id"
            class="flex flex-col items-center gap-1 px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl cursor-pointer transition-all duration-150 hover:border-primary hover:bg-primary/5 font-[inherit]"
            @click="selectExamType(et.id)"
          >
            <span class="text-base font-extrabold text-gray-800">{{ et.name }}</span>
          </button>
        </div>
      </template>

      <div class="flex items-center gap-2 mt-4">
        <span class="text-sm font-semibold text-gray-400">Zaten hesabın var mı?</span>
        <NuxtLink to="/auth/login" class="text-sm font-extrabold text-primary hover:underline">Giriş Yap</NuxtLink>
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
  if (localStorage.getItem('pb_token')) {
    navigateTo('/');
    return;
  }
  try {
    const data = await $fetch<ExamGroup[]>('/api/exam-groups');
    examGroups.value = data;
  } catch { /* silently fail */ }
});

function selectGroup(groupId: string) {
  const group = examGroups.value.find((g) => g.id === groupId);
  if (group && group.exam_types.length === 1) {
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
