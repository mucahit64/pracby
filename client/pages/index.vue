<template>
  <q-page padding>
    <!-- Streak & XP Bar -->
    <div class="row q-mb-lg q-col-gutter-md">
      <div class="col-12 col-sm-4">
        <q-card flat bordered>
          <q-card-section class="row items-center">
            <q-icon name="local_fire_department" color="orange" size="2rem" class="q-mr-sm" />
            <div>
              <div class="text-caption text-grey">Günlük Seri</div>
              <div class="text-h6 text-bold">{{ stats.streak }} gün</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-4">
        <q-card flat bordered>
          <q-card-section class="row items-center">
            <q-icon name="bolt" color="yellow-8" size="2rem" class="q-mr-sm" />
            <div>
              <div class="text-caption text-grey">Toplam XP</div>
              <div class="text-h6 text-bold">{{ stats.totalXp }}</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-4">
        <q-card flat bordered>
          <q-card-section class="row items-center">
            <q-icon name="favorite" color="red" size="2rem" class="q-mr-sm" />
            <div>
              <div class="text-caption text-grey">Canlar</div>
              <div class="text-h6 text-bold">{{ stats.hearts }} / 5</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Daily Goal Progress -->
    <q-card flat bordered class="q-mb-lg">
      <q-card-section>
        <div class="row items-center justify-between q-mb-sm">
          <span class="text-subtitle1 text-bold">Günlük Hedef</span>
          <span class="text-caption">{{ stats.dailyXp }} / {{ stats.dailyGoal }} XP</span>
        </div>
        <q-linear-progress
          :value="stats.dailyXp / stats.dailyGoal"
          color="positive"
          size="12px"
          rounded
        />
      </q-card-section>
    </q-card>

    <!-- Courses -->
    <div class="text-h5 text-bold q-mb-md">Dersler</div>
    <div class="row q-col-gutter-md">
      <div v-for="course in courses" :key="course.id" class="col-12 col-sm-6 col-md-4">
        <q-card class="cursor-pointer" flat bordered @click="goToCourse(course.id)">
          <q-card-section class="text-center q-pa-lg">
            <q-icon :name="course.icon" :color="course.color" size="3rem" />
            <div class="text-h6 q-mt-sm">{{ course.name }}</div>
            <div class="text-caption text-grey">{{ course.description }}</div>
          </q-card-section>
          <q-card-section>
            <q-linear-progress
              :value="course.progress"
              :color="course.color"
              size="8px"
              rounded
            />
            <div class="text-caption text-grey q-mt-xs text-right">
              %{{ Math.round(course.progress * 100) }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const router = useRouter();

const stats = ref({
  streak: 5,
  totalXp: 1250,
  hearts: 4,
  dailyXp: 30,
  dailyGoal: 50,
});

const courses = ref([
  {
    id: "1",
    name: "Tarih",
    description: "KPSS Genel Kültür",
    icon: "history_edu",
    color: "deep-purple",
    progress: 0.35,
  },
  {
    id: "2",
    name: "Matematik",
    description: "YKS TYT Matematik",
    icon: "calculate",
    color: "blue",
    progress: 0.12,
  },
  {
    id: "3",
    name: "Türkçe",
    description: "Paragraf & Dil Bilgisi",
    icon: "menu_book",
    color: "teal",
    progress: 0.0,
  },
]);

function goToCourse(id: string) {
  router.push(`/course/${id}`);
}
</script>
