<template>
  <div class="quiz-page">
    <!-- === Quiz in progress === -->
    <template v-if="!finished">
      <!-- Top bar -->
      <div class="quiz-topbar">
        <NuxtLink to="/" class="quiz-close">✕</NuxtLink>
        <div class="quiz-progress-wrap">
          <div class="quiz-progress-bar">
            <div
              class="quiz-progress-fill"
              :style="{ width: `${((currentIndex) / questions.length) * 100}%` }"
            />
          </div>
        </div>
        <div class="quiz-hearts">
          <span
            v-for="i in 5"
            :key="i"
            class="quiz-heart"
            :class="{ 'quiz-heart--lost': i > hearts }"
          >❤️</span>
        </div>
      </div>

      <!-- Question card -->
      <div class="quiz-body">
        <!-- XP & question count -->
        <div class="quiz-meta">
          <span class="quiz-qcount">Soru {{ currentIndex + 1 }} / {{ questions.length }}</span>
          <span class="quiz-xp-live">⚡ +{{ xpEarned }} XP</span>
        </div>

        <div class="quiz-question">{{ currentQuestion.text }}</div>

        <!-- Options -->
        <div class="quiz-options">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            class="quiz-option"
            :class="getOptionClass(i)"
            :disabled="answered"
            @click="answer(i)"
          >
            <span class="quiz-option-letter">{{ optionLetters[i] }}</span>
            <span class="quiz-option-text">{{ option }}</span>
          </button>
        </div>

        <!-- Feedback -->
        <transition name="fade-up">
          <div v-if="answered" class="quiz-feedback" :class="isCorrect ? 'quiz-feedback--correct' : 'quiz-feedback--wrong'">
            <div class="quiz-feedback-icon">{{ isCorrect ? '✓' : '✗' }}</div>
            <div class="quiz-feedback-content">
              <div class="quiz-feedback-title">
                {{ isCorrect ? 'Harika! 🎉' : 'Yanlış! 😔' }}
              </div>
              <div v-if="!isCorrect" class="quiz-feedback-explanation">
                Doğru cevap: <strong>{{ currentQuestion.options[currentQuestion.correctIndex] }}</strong>
              </div>
              <div v-if="currentQuestion.explanation" class="quiz-feedback-detail">
                {{ currentQuestion.explanation }}
              </div>
            </div>
            <button class="quiz-continue-btn" @click="next">DEVAM</button>
          </div>
        </transition>
      </div>
    </template>

    <!-- === Quiz finished === -->
    <template v-else>
      <div class="quiz-result">
        <!-- Mascot celebration -->
        <div class="quiz-result-mascot">
          <PbMascot :width="120" :height="150" />
        </div>

        <h1 class="quiz-result-title">Tebrikler! 🎊</h1>
        <p class="quiz-result-sub">Quiz tamamlandı!</p>

        <!-- Score rings -->
        <div class="quiz-result-stats">
          <div class="quiz-result-stat quiz-result-stat--correct">
            <div class="quiz-result-stat-val">{{ correctCount }}</div>
            <div class="quiz-result-stat-label">Doğru</div>
          </div>
          <div class="quiz-result-stat quiz-result-stat--wrong">
            <div class="quiz-result-stat-val">{{ questions.length - correctCount }}</div>
            <div class="quiz-result-stat-label">Yanlış</div>
          </div>
          <div class="quiz-result-stat quiz-result-stat--xp">
            <div class="quiz-result-stat-val">+{{ xpEarned }}</div>
            <div class="quiz-result-stat-label">XP</div>
          </div>
        </div>

        <!-- Accuracy -->
        <div class="quiz-accuracy">
          <div class="quiz-accuracy-label">Doğruluk Oranı</div>
          <div class="quiz-accuracy-bar">
            <div
              class="quiz-accuracy-fill"
              :style="{ width: `${Math.round((correctCount / questions.length) * 100)}%` }"
            />
          </div>
          <div class="quiz-accuracy-pct">%{{ Math.round((correctCount / questions.length) * 100) }}</div>
        </div>

        <div class="quiz-result-actions">
          <NuxtLink to="/" class="pb-btn-primary">🏠 Ana Sayfaya Dön</NuxtLink>
          <button class="pb-btn-outline" @click="restartQuiz">🔄 Tekrar Dene</button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const _route = useRoute();

interface Question {
  text: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

const optionLetters = ['A', 'B', 'C', 'D'];

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
const isCorrect = computed(() => selectedAnswer.value === currentQuestion.value.correctIndex);

function getOptionClass(i: number) {
  if (!answered.value) return '';
  if (i === currentQuestion.value.correctIndex) return 'quiz-option--correct';
  if (i === selectedAnswer.value) return 'quiz-option--wrong';
  return 'quiz-option--dim';
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

function restartQuiz() {
  currentIndex.value = 0;
  selectedAnswer.value = -1;
  answered.value = false;
  finished.value = false;
  correctCount.value = 0;
  hearts.value = 5;
  xpEarned.value = 0;
}
</script>

<style scoped>
.quiz-page {
  min-height: 100vh;
  background: var(--pb-bg);
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 40px;
}

/* Top bar */
.quiz-topbar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0 20px;
  position: sticky;
  top: 0;
  background: var(--pb-bg);
  z-index: 10;
}

.quiz-close {
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--pb-text-muted);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.12s, color 0.12s;
  flex-shrink: 0;
}

.quiz-close:hover {
  background: var(--pb-bg-card);
  color: var(--pb-text);
}

.quiz-progress-wrap {
  flex: 1;
}

.quiz-progress-bar {
  height: 14px;
  background: var(--pb-bg-card);
  border-radius: 99px;
  overflow: hidden;
  border: 2px solid var(--pb-border);
}

.quiz-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--pb-purple), var(--pb-purple-light));
  border-radius: 99px;
  transition: width 0.4s ease;
}

.quiz-hearts {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}

.quiz-heart {
  font-size: 1rem;
  transition: filter 0.2s;
}

.quiz-heart--lost {
  filter: grayscale(1) opacity(0.3);
}

/* Question body */
.quiz-body {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
}

.quiz-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quiz-qcount {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--pb-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.quiz-xp-live {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--pb-gold);
  background: rgba(255, 215, 0, 0.1);
  padding: 4px 12px;
  border-radius: 99px;
}

.quiz-question {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--pb-text);
  line-height: 1.4;
}

/* Options */
.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.quiz-option {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 14px;
  padding: 16px 18px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  color: var(--pb-text);
  cursor: pointer;
  text-align: left;
  transition: all 0.12s;
}

.quiz-option:hover:not(:disabled) {
  background: var(--pb-bg-card-hover);
  border-color: var(--pb-purple-light);
  transform: translateY(-1px);
}

.quiz-option:disabled {
  cursor: not-allowed;
}

.quiz-option-letter {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--pb-bg);
  border: 2px solid var(--pb-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 900;
  flex-shrink: 0;
  color: var(--pb-text-muted);
}

.quiz-option-text {
  flex: 1;
}

/* Option states */
.quiz-option--correct {
  background: rgba(88, 204, 2, 0.12);
  border-color: var(--pb-green);
  color: var(--pb-green);
}

.quiz-option--correct .quiz-option-letter {
  background: var(--pb-green);
  border-color: var(--pb-green);
  color: white;
}

.quiz-option--wrong {
  background: rgba(255, 75, 75, 0.12);
  border-color: var(--pb-red);
  color: var(--pb-red);
}

.quiz-option--wrong .quiz-option-letter {
  background: var(--pb-red);
  border-color: var(--pb-red);
  color: white;
}

.quiz-option--dim {
  opacity: 0.45;
}

/* Feedback bar */
.quiz-feedback {
  position: sticky;
  bottom: 0;
  border-radius: 18px 18px 0 0;
  padding: 22px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin: 0 -16px -24px;
}

.quiz-feedback--correct {
  background: rgba(88, 204, 2, 0.15);
  border-top: 3px solid var(--pb-green);
}

.quiz-feedback--wrong {
  background: rgba(255, 75, 75, 0.12);
  border-top: 3px solid var(--pb-red);
}

.quiz-feedback-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 900;
  flex-shrink: 0;
  color: white;
}

.quiz-feedback--correct .quiz-feedback-icon { background: var(--pb-green); }
.quiz-feedback--wrong .quiz-feedback-icon { background: var(--pb-red); }

.quiz-feedback-content {
  flex: 1;
}

.quiz-feedback-title {
  font-size: 1rem;
  font-weight: 900;
}

.quiz-feedback--correct .quiz-feedback-title { color: var(--pb-green); }
.quiz-feedback--wrong .quiz-feedback-title { color: var(--pb-red); }

.quiz-feedback-explanation {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--pb-text);
  margin-top: 4px;
}

.quiz-feedback-detail {
  font-size: 0.78rem;
  color: var(--pb-text-muted);
  margin-top: 4px;
  font-weight: 600;
}

.quiz-continue-btn {
  background: var(--pb-purple);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 20px;
  font-size: 0.88rem;
  font-weight: 900;
  cursor: pointer;
  font-family: inherit;
  letter-spacing: 0.06em;
  border-bottom: 3px solid var(--pb-purple-dark);
  flex-shrink: 0;
  align-self: center;
  transition: transform 0.12s;
}

.quiz-continue-btn:hover {
  transform: translateY(-1px);
}

/* Fade up transition */
.fade-up-enter-active { transition: all 0.25s ease; }
.fade-up-enter-from { opacity: 0; transform: translateY(20px); }

/* ===== Result Screen ===== */
.quiz-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 20px;
  text-align: center;
}

.quiz-result-mascot {
  animation: bounce 1s ease infinite alternate;
}

@keyframes bounce {
  from { transform: translateY(0); }
  to { transform: translateY(-12px); }
}

.quiz-result-title {
  font-size: 2rem;
  font-weight: 900;
  color: var(--pb-text);
}

.quiz-result-sub {
  font-size: 1rem;
  color: var(--pb-text-muted);
  font-weight: 600;
  margin-top: -16px;
}

.quiz-result-stats {
  display: flex;
  gap: 16px;
}

.quiz-result-stat {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 18px;
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 90px;
}

.quiz-result-stat-val {
  font-size: 1.8rem;
  font-weight: 900;
}

.quiz-result-stat-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--pb-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.quiz-result-stat--correct .quiz-result-stat-val { color: var(--pb-green); }
.quiz-result-stat--wrong .quiz-result-stat-val { color: var(--pb-red); }
.quiz-result-stat--xp .quiz-result-stat-val { color: var(--pb-gold); }

.quiz-accuracy {
  width: 100%;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 16px;
  padding: 16px 20px;
}

.quiz-accuracy-label {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--pb-text-muted);
  margin-bottom: 8px;
  text-align: left;
}

.quiz-accuracy-bar {
  height: 14px;
  background: var(--pb-bg);
  border-radius: 99px;
  overflow: hidden;
  margin-bottom: 6px;
}

.quiz-accuracy-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--pb-purple), var(--pb-purple-light));
  border-radius: 99px;
  transition: width 0.8s ease;
}

.quiz-accuracy-pct {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--pb-purple-light);
  text-align: right;
}

.quiz-result-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 340px;
}

.quiz-result-actions .pb-btn-primary {
  width: 100%;
  font-size: 1rem;
}

.quiz-result-actions .pb-btn-outline {
  width: 100%;
  font-size: 1rem;
}
</style>
