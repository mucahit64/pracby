<template>
  <q-page padding>
    <!-- Quiz in progress -->
    <template v-if="!finished">
      <div class="row items-center q-mb-md">
        <q-btn flat round icon="close" to="/" />
        <q-linear-progress
          :value="(currentIndex + 1) / questions.length"
          color="primary"
          size="10px"
          rounded
          class="col q-mx-md"
        />
        <div class="row items-center">
          <q-icon name="favorite" color="red" size="sm" />
          <span class="text-bold q-ml-xs">{{ hearts }}</span>
        </div>
      </div>

      <q-card flat bordered class="q-pa-md">
        <div class="text-h6 q-mb-lg">{{ currentQuestion.text }}</div>

        <div class="column q-gutter-sm">
          <q-btn
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            outline
            no-caps
            size="lg"
            class="text-left"
            :color="getOptionColor(i)"
            :disable="answered"
            @click="answer(i)"
          >
            {{ option }}
          </q-btn>
        </div>

        <div v-if="answered" class="q-mt-lg">
          <q-banner :class="selectedAnswer === currentQuestion.correctIndex ? 'bg-green-1 text-positive' : 'bg-red-1 text-negative'" rounded>
            <template #avatar>
              <q-icon :name="selectedAnswer === currentQuestion.correctIndex ? 'check_circle' : 'cancel'" />
            </template>
            {{ selectedAnswer === currentQuestion.correctIndex ? 'Doğru! 🎉' : 'Yanlış! 😔' }}
            <div v-if="currentQuestion.explanation" class="text-caption q-mt-xs">
              {{ currentQuestion.explanation }}
            </div>
          </q-banner>
          <q-btn
            color="primary"
            label="Devam"
            class="full-width q-mt-md"
            size="lg"
            @click="next"
          />
        </div>
      </q-card>
    </template>

    <!-- Quiz finished -->
    <template v-else>
      <div class="text-center q-pa-xl">
        <q-icon name="emoji_events" color="amber" size="5rem" />
        <div class="text-h4 text-bold q-mt-md">Tebrikler!</div>
        <div class="text-subtitle1 text-grey q-mt-sm">Quiz tamamlandı</div>

        <div class="row justify-center q-gutter-lg q-mt-lg">
          <div class="text-center">
            <div class="text-h5 text-bold text-positive">{{ correctCount }}</div>
            <div class="text-caption">Doğru</div>
          </div>
          <div class="text-center">
            <div class="text-h5 text-bold text-negative">{{ questions.length - correctCount }}</div>
            <div class="text-caption">Yanlış</div>
          </div>
          <div class="text-center">
            <div class="text-h5 text-bold text-primary">+{{ xpEarned }}</div>
            <div class="text-caption">XP</div>
          </div>
        </div>

        <q-btn color="primary" label="Ana Sayfaya Dön" class="q-mt-xl" size="lg" to="/" />
      </div>
    </template>
  </q-page>
</template>

<script setup lang="ts">
const _route = useRoute();

interface Question {
  text: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

const questions = ref<Question[]>([
  {
    text: "Osmanlı Devleti'nin kurucusu kimdir?",
    options: ["Osman Bey", "Orhan Bey", "Fatih Sultan Mehmet", "Kanuni Sultan Süleyman"],
    correctIndex: 0,
    explanation: "Osmanlı Devleti, 1299 yılında Osman Bey tarafından kurulmuştur.",
  },
  {
    text: "İstanbul'un fethi hangi yılda gerçekleşmiştir?",
    options: ["1071", "1299", "1453", "1517"],
    correctIndex: 2,
    explanation: "İstanbul, 1453 yılında Fatih Sultan Mehmet tarafından fethedilmiştir.",
  },
  {
    text: "Malazgirt Savaşı hangi yılda yapılmıştır?",
    options: ["1071", "1176", "1243", "1402"],
    correctIndex: 0,
    explanation: "Malazgirt Savaşı 1071 yılında Alparslan komutasında kazanılmıştır.",
  },
  {
    text: "Tanzimat Fermanı hangi padişah döneminde ilan edilmiştir?",
    options: ["II. Mahmut", "Abdülmecid", "Abdülaziz", "II. Abdülhamid"],
    correctIndex: 1,
    explanation: "Tanzimat Fermanı 1839'da Abdülmecid döneminde ilan edilmiştir.",
  },
  {
    text: "TBMM ne zaman açılmıştır?",
    options: ["19 Mayıs 1919", "23 Nisan 1920", "29 Ekim 1923", "30 Ağustos 1922"],
    correctIndex: 1,
    explanation: "TBMM, 23 Nisan 1920'de Ankara'da açılmıştır.",
  },
]);

const currentIndex = ref(0);
const selectedAnswer = ref(-1);
const answered = ref(false);
const finished = ref(false);
const correctCount = ref(0);
const hearts = ref(5);
const xpEarned = ref(0);

const currentQuestion = computed(() => questions.value[currentIndex.value]);

function getOptionColor(index: number): string {
  if (!answered.value) return "primary";
  if (index === currentQuestion.value.correctIndex) return "positive";
  if (index === selectedAnswer.value) return "negative";
  return "grey";
}

function answer(index: number) {
  selectedAnswer.value = index;
  answered.value = true;
  if (index === currentQuestion.value.correctIndex) {
    correctCount.value++;
    xpEarned.value += 10;
  } else {
    hearts.value = Math.max(0, hearts.value - 1);
  }
}

function next() {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++;
    selectedAnswer.value = -1;
    answered.value = false;
  } else {
    finished.value = true;
  }
}
</script>
