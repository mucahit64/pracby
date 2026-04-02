<template>
  <q-page padding>
    <q-btn flat icon="arrow_back" label="Geri" class="q-mb-md" to="/" />

    <div class="text-h5 text-bold q-mb-sm">{{ course.name }}</div>
    <div class="text-subtitle2 text-grey q-mb-lg">{{ course.description }}</div>

    <!-- Skill Tree -->
    <div class="column items-center q-gutter-md">
      <div v-for="(topic, index) in topics" :key="topic.id" class="text-center">
        <!-- Connector line -->
        <div v-if="index > 0" class="connector q-mb-sm" />

        <q-btn
          round
          size="xl"
          :color="topic.isUnlocked ? crownColor(topic.crownLevel) : 'grey-4'"
          :text-color="topic.isUnlocked ? 'white' : 'grey-6'"
          :disable="!topic.isUnlocked"
          @click="startQuiz(topic)"
        >
          <q-icon :name="topic.isUnlocked ? 'star' : 'lock'" size="1.5rem" />
        </q-btn>

        <div class="q-mt-xs text-subtitle2" :class="topic.isUnlocked ? '' : 'text-grey'">
          {{ topic.name }}
        </div>
        <div v-if="topic.isUnlocked" class="text-caption text-grey">
          <q-icon name="emoji_events" size="xs" />
          {{ topic.crownLevel }} / 5
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const route = useRoute();
const _courseId = route.params.id;

const course = ref({
  name: "Tarih",
  description: "KPSS Genel Kültür — Osmanlı'dan Cumhuriyet'e",
});

const topics = ref([
  { id: "1", name: "İlk Türk Devletleri", crownLevel: 3, isUnlocked: true },
  { id: "2", name: "Osmanlı Kuruluş", crownLevel: 1, isUnlocked: true },
  { id: "3", name: "Osmanlı Yükselme", crownLevel: 0, isUnlocked: true },
  { id: "4", name: "Osmanlı Duraklama", crownLevel: 0, isUnlocked: false },
  { id: "5", name: "Tanzimat Dönemi", crownLevel: 0, isUnlocked: false },
  { id: "6", name: "Kurtuluş Savaşı", crownLevel: 0, isUnlocked: false },
]);

function crownColor(level: number): string {
  if (level >= 5) return "amber";
  if (level >= 3) return "deep-purple";
  if (level >= 1) return "primary";
  return "blue-grey";
}

function startQuiz(topic: { id: string; name: string }) {
  navigateTo(`/quiz/${topic.id}`);
}
</script>

<style scoped>
.connector {
  width: 4px;
  height: 24px;
  background: #e0e0e0;
  margin: 0 auto;
  border-radius: 2px;
}
</style>
