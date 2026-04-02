<template>
  <q-page padding>
    <div class="text-center q-mb-lg">
      <q-avatar size="80px" color="primary" text-color="white" icon="person" />
      <div class="text-h5 text-bold q-mt-sm">{{ profile.username }}</div>
      <div class="text-caption text-grey">{{ profile.email }}</div>
    </div>

    <!-- Stats Cards -->
    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-6">
        <q-card flat bordered class="text-center q-pa-md">
          <q-icon name="bolt" color="yellow-8" size="1.5rem" />
          <div class="text-h6 text-bold">{{ profile.totalXp }}</div>
          <div class="text-caption text-grey">Toplam XP</div>
        </q-card>
      </div>
      <div class="col-6">
        <q-card flat bordered class="text-center q-pa-md">
          <q-icon name="local_fire_department" color="orange" size="1.5rem" />
          <div class="text-h6 text-bold">{{ profile.maxStreak }}</div>
          <div class="text-caption text-grey">En Uzun Seri</div>
        </q-card>
      </div>
      <div class="col-6">
        <q-card flat bordered class="text-center q-pa-md">
          <q-icon name="trending_up" color="green" size="1.5rem" />
          <div class="text-h6 text-bold">{{ profile.level }}</div>
          <div class="text-caption text-grey">Seviye</div>
        </q-card>
      </div>
      <div class="col-6">
        <q-card flat bordered class="text-center q-pa-md">
          <q-icon name="quiz" color="blue" size="1.5rem" />
          <div class="text-h6 text-bold">{{ profile.quizzesCompleted }}</div>
          <div class="text-caption text-grey">Quiz</div>
        </q-card>
      </div>
    </div>

    <!-- Achievements -->
    <div class="text-h6 text-bold q-mb-md">Başarımlar</div>
    <div class="row q-col-gutter-sm">
      <div v-for="badge in achievements" :key="badge.name" class="col-4 col-sm-3 text-center">
        <q-card flat bordered class="q-pa-sm" :class="badge.earned ? '' : 'opacity-40'">
          <q-icon :name="badge.icon" :color="badge.earned ? badge.color : 'grey'" size="2rem" />
          <div class="text-caption q-mt-xs">{{ badge.name }}</div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const profile = ref({
  username: "mucahit",
  email: "mucahit@pracby.com",
  totalXp: 1250,
  level: 5,
  maxStreak: 12,
  quizzesCompleted: 28,
});

const achievements = ref([
  { name: "İlk Quiz", icon: "star", color: "amber", earned: true },
  { name: "7 Gün Seri", icon: "local_fire_department", color: "orange", earned: true },
  { name: "1000 XP", icon: "bolt", color: "yellow-8", earned: true },
  { name: "30 Gün Seri", icon: "whatshot", color: "deep-orange", earned: false },
  { name: "5000 XP", icon: "diamond", color: "blue", earned: false },
  { name: "10 Arkadaş", icon: "group", color: "green", earned: false },
]);
</script>

<style scoped>
.opacity-40 {
  opacity: 0.4;
}
</style>
