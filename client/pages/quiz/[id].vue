<template>
  <div class="quiz-page">
    <!-- Loading -->
    <div v-if="loading" class="quiz-loading">
      <div class="quiz-loading-spinner" />
      <p>Sorular yükleniyor…</p>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="quiz-error">
      <p>{{ error }}</p>
      <NuxtLink to="/" class="pb-btn-primary">Ana Sayfaya Dön</NuxtLink>
    </div>

    <!-- === Quiz in progress === -->
    <template v-else-if="!finished && questions.length > 0">
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

        <div class="quiz-question">{{ currentQuestion.question_text }}</div>

        <!-- Multiple choice / True-false -->
        <template v-if="currentQuestion.question_type === 'multiple_choice' || currentQuestion.question_type === 'true_false'">
          <div class="quiz-options">
            <button
              v-for="(option, i) in currentAnswers"
              :key="option.id"
              class="quiz-option"
              :class="getMcOptionClass(option.id)"
              :disabled="answered"
              @click="answerMc(option.id)"
            >
              <span class="quiz-option-letter">{{ optionLetters[i] }}</span>
              <span class="quiz-option-text">{{ option.answer_text }}</span>
            </button>
          </div>
        </template>

        <!-- Fill in the blank -->
        <template v-else-if="currentQuestion.question_type === 'fill_blank'">
          <div class="quiz-fill-blank">
            <input
              v-model="fillBlankText"
              class="quiz-fill-input"
              placeholder="Cevabınızı yazın…"
              :disabled="answered"
              @keyup.enter="answerFillBlank"
            />
            <button
              v-if="!answered"
              class="pb-btn-primary quiz-fill-submit"
              :disabled="!fillBlankText.trim()"
              @click="answerFillBlank"
            >
              GÖNDER
            </button>
          </div>
        </template>

        <!-- Flashcard -->
        <template v-else-if="currentQuestion.question_type === 'flashcard'">
          <div class="quiz-flashcard-wrap">
            <div
              class="quiz-flashcard"
              :class="{ 'quiz-flashcard--flipped': flashcardFlipped }"
              @click="flashcardFlipped = !flashcardFlipped"
            >
              <div class="quiz-flashcard-front">
                <p>Kartı çevirmek için tıkla</p>
              </div>
              <div class="quiz-flashcard-back">
                <p>{{ currentQuestion.explanation || currentQuestion.type_data?.back || 'Açıklama yok' }}</p>
              </div>
            </div>
            <div v-if="!answered" class="quiz-flashcard-actions">
              <button class="quiz-flashcard-btn quiz-flashcard-btn--wrong" @click="answerFlashcard(false)">
                ✗ Bilmiyorum
              </button>
              <button class="quiz-flashcard-btn quiz-flashcard-btn--correct" @click="answerFlashcard(true)">
                ✓ Biliyorum
              </button>
            </div>
          </div>
        </template>

        <!-- Matching -->
        <template v-else-if="currentQuestion.question_type === 'matching'">
          <div class="quiz-matching">
            <div class="quiz-matching-cols">
              <div class="quiz-matching-col">
                <button
                  v-for="(pair, i) in matchingPairs"
                  :key="'l-' + i"
                  class="quiz-match-item"
                  :class="{
                    'quiz-match-item--selected': matchingSelectedLeft === i,
                    'quiz-match-item--matched': matchingMatched.has(i),
                    'quiz-match-item--wrong': matchingWrongLeft === i,
                  }"
                  :disabled="answered || matchingMatched.has(i)"
                  @click="selectMatchLeft(i)"
                >
                  {{ pair.left }}
                </button>
              </div>
              <div class="quiz-matching-col">
                <button
                  v-for="(pair, i) in shuffledRightPairs"
                  :key="'r-' + i"
                  class="quiz-match-item quiz-match-item--right"
                  :class="{
                    'quiz-match-item--selected': matchingSelectedRight === i,
                    'quiz-match-item--matched': matchingMatchedRight.has(i),
                    'quiz-match-item--wrong': matchingWrongRight === i,
                  }"
                  :disabled="answered || matchingMatchedRight.has(i)"
                  @click="selectMatchRight(i)"
                >
                  {{ pair.right }}
                </button>
              </div>
            </div>
            <button
              v-if="!answered && matchingMatched.size === matchingPairs.length"
              class="pb-btn-primary quiz-matching-submit"
              @click="submitMatching"
            >
              ONAYLA
            </button>
          </div>
        </template>

        <!-- Ordering -->
        <template v-else-if="currentQuestion.question_type === 'ordering'">
          <div class="quiz-ordering">
            <div class="quiz-ordering-list">
              <div
                v-for="(item, i) in orderingItems"
                :key="item.originalIndex"
                class="quiz-ordering-item"
                :class="{ 'quiz-ordering-item--disabled': answered }"
              >
                <span class="quiz-ordering-num">{{ i + 1 }}</span>
                <span class="quiz-ordering-text">{{ item.text }}</span>
                <div v-if="!answered" class="quiz-ordering-btns">
                  <button :disabled="i === 0" @click="moveOrderItem(i, -1)">▲</button>
                  <button :disabled="i === orderingItems.length - 1" @click="moveOrderItem(i, 1)">▼</button>
                </div>
              </div>
            </div>
            <button
              v-if="!answered"
              class="pb-btn-primary quiz-ordering-submit"
              @click="submitOrdering"
            >
              ONAYLA
            </button>
          </div>
        </template>

        <!-- Feedback -->
        <transition name="fade-up">
          <div v-if="answered" class="quiz-feedback" :class="lastAnswerCorrect ? 'quiz-feedback--correct' : 'quiz-feedback--wrong'">
            <div class="quiz-feedback-icon">{{ lastAnswerCorrect ? '✓' : '✗' }}</div>
            <div class="quiz-feedback-content">
              <div class="quiz-feedback-title">
                {{ lastAnswerCorrect ? 'Harika! 🎉' : 'Yanlış! 😔' }}
              </div>
              <div v-if="currentQuestion.explanation" class="quiz-feedback-detail">
                {{ currentQuestion.explanation }}
              </div>
            </div>
            <button class="quiz-continue-btn" @click="nextQuestion">DEVAM</button>
          </div>
        </transition>
      </div>
    </template>

    <!-- === Quiz finished === -->
    <template v-else-if="finished">
      <div class="quiz-result">
        <div class="quiz-result-mascot">
          <PbMascot :width="120" :height="150" />
        </div>

        <h1 class="quiz-result-title">{{ heartsDepleted ? 'Canların Bitti! 💔' : 'Tebrikler! 🎊' }}</h1>
        <p class="quiz-result-sub">{{ heartsDepleted ? 'Kalplerin tükendi, test sonlandırıldı.' : 'Quiz tamamlandı!' }}</p>

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
          <div class="quiz-result-stat quiz-result-stat--acorn">
            <div class="quiz-result-stat-val">+{{ acornEarned }}</div>
            <div class="quiz-result-stat-label">Acorn</div>
          </div>
        </div>

        <div class="quiz-accuracy">
          <div class="quiz-accuracy-label">Doğruluk Oranı</div>
          <div class="quiz-accuracy-bar">
            <div
              class="quiz-accuracy-fill"
              :style="{ width: `${questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0}%` }"
            />
          </div>
          <div class="quiz-accuracy-pct">%{{ questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0 }}</div>
        </div>

        <div v-if="stepCompleted" class="quiz-step-complete">
          🎉 Adım tamamlandı!
        </div>
        <div v-if="topicCompleted" class="quiz-topic-complete">
          🏆 Konu tamamlandı!
        </div>

        <div class="quiz-result-actions">
          <NuxtLink to="/" class="pb-btn-primary">🏠 Ana Sayfaya Dön</NuxtLink>
          <button class="pb-btn-outline" @click="restartQuiz">🔄 Tekrar Dene</button>
        </div>
      </div>
    </template>

    <!-- Dialog 1: Hearts Empty -->
    <div v-if="heartsEmptyDialog" class="hd-overlay">
      <div class="hd-modal">
        <div class="hd-icon">💔</div>
        <div class="hd-title">Canın Bitti!</div>
        <div class="hd-sub">Devam etmek için can satın al.</div>

        <div class="hd-balance">
          <span class="hd-balance-icon">🌰</span>
          <span class="hd-balance-val">{{ acornBalanceForDialog }}</span>
          <span class="hd-balance-label">Palamut</span>
        </div>

        <div v-if="loadingPackages" class="hd-loading">
          <div class="hd-spinner" />
        </div>
        <div v-else class="hd-packages">
          <button
            v-for="pkg in heartPackages"
            :key="pkg.id"
            class="hd-pkg"
            :class="{ 'hd-pkg--disabled': acornBalanceForDialog < pkg.price_acorn || purchasingHeart !== null }"
            :disabled="acornBalanceForDialog < pkg.price_acorn || purchasingHeart !== null"
            @click="buyHeartInDialog(pkg)"
          >
            <span class="hd-pkg-icon">{{ pkg.icon_url }}</span>
            <span class="hd-pkg-name">{{ pkg.name }}</span>
            <span class="hd-pkg-price">
              <span v-if="purchasingHeart === pkg.id" class="hd-pkg-spinner" />
              <template v-else>🌰 {{ pkg.price_acorn }}</template>
            </span>
          </button>
        </div>

        <div v-if="purchaseError" class="hd-error">{{ purchaseError }}</div>

        <button class="hd-decline" @click="declineHeartPurchase">Hayır, teşekkürler</button>
      </div>
    </div>

    <!-- Dialog 2: Exit Warning -->
    <div v-if="exitWarningDialog" class="hd-overlay">
      <div class="hd-modal">
        <div class="hd-icon">⚠️</div>
        <div class="hd-title">Bekle!</div>
        <div class="hd-sub">Şimdi çıkarsan tüm ilerlemeni kaybedeceksin!</div>

        <div class="hd-warn-actions">
          <button class="hd-btn-continue" @click="continueFromWarning">💪 Öğrenmeye Devam</button>
          <button class="hd-btn-exit" @click="exitQuiz">🚪 Testten Çık</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

interface HeartPackage {
  id: string;
  name: string;
  description: string;
  icon_url: string;
  price_acorn: number;
  item_type: string;
  metadata?: { heart_count?: number };
}

interface Answer {
  id: string;
  question_id: string;
  answer_text: string;
  is_correct?: boolean;
}

interface Question {
  id: string;
  question_text: string;
  question_type: string;
  explanation?: string;
  hint?: string;
  type_data?: {
    back?: string;
    acceptable_answers?: string[];
    pairs?: { left: string; right: string }[];
    items?: { text: string; position: number }[];
  };
  answers?: Answer[];
}

const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F'];

const loading = ref(true);
const error = ref('');
const sessionId = ref('');
const questions = ref<Question[]>([]);
const currentIndex = ref(0);
const answered = ref(false);
const finished = ref(false);
const correctCount = ref(0);
const hearts = useState('userHearts', () => 5);
const heartsDepleted = ref(false);
const xpEarned = ref(0);
const acornEarned = ref(0);
const lastAnswerCorrect = ref(false);
const stepCompleted = ref(false);
const topicCompleted = ref(false);

// Hearts dialog state
const heartsEmptyDialog = ref(false);
const exitWarningDialog = ref(false);
const heartPackages = ref<HeartPackage[]>([]);
const acornBalanceForDialog = ref(0);
const purchasingHeart = ref<string | null>(null);
const loadingPackages = ref(false);
const purchaseError = ref('');

// Multiple choice state
const selectedAnswerId = ref('');

// Fill blank state
const fillBlankText = ref('');

// Flashcard state
const flashcardFlipped = ref(false);

// Matching state
const matchingPairs = ref<{ left: string; right: string }[]>([]);
const shuffledRightPairs = ref<{ right: string; originalIndex: number }[]>([]);
const matchingSelectedLeft = ref(-1);
const matchingSelectedRight = ref(-1);
const matchingMatched = ref(new Set<number>());
const matchingMatchedRight = ref(new Set<number>());
const matchingWrongLeft = ref(-1);
const matchingWrongRight = ref(-1);
const matchingUserPairs = ref<{ leftIndex: number; rightIndex: number }[]>([]);

// Ordering state
const orderingItems = ref<{ text: string; originalIndex: number }[]>([]);

const currentQuestion = computed(() => questions.value[currentIndex.value]);
const currentAnswers = computed(() => currentQuestion.value?.answers ?? []);

function getToken() {
  return localStorage.getItem('pb_token') ?? '';
}

async function startQuiz() {
  const topicId = route.params.id as string;
  const token = getToken();
  if (!token) { error.value = 'Giriş yapmalısınız'; loading.value = false; return; }

  try {
    const query = route.query;
    const body: Record<string, unknown> = { topicId };
    if (query.stepId) body.stepId = query.stepId;
    if (query.testId) body.testId = query.testId;
    if (query.sessionType) body.sessionType = query.sessionType;

    const [data, user] = await Promise.all([
      $fetch<{ session: { id: string }; questions: Question[] }>('/api/quiz/start', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body,
      }),
      $fetch<{ hearts?: number }>('/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      }),
    ]);

    hearts.value = user.hearts ?? 5;
    sessionId.value = data.session.id;
    questions.value = data.questions;
    initQuestionState();
  } catch (e: unknown) {
    const errData = (e as { data?: { error?: string; message?: string } })?.data;
    error.value = errData?.error || errData?.message || 'Quiz başlatılamadı';
  } finally {
    loading.value = false;
  }
}

function initQuestionState() {
  const q = currentQuestion.value;
  if (!q) return;
  answered.value = false;
  selectedAnswerId.value = '';
  fillBlankText.value = '';
  flashcardFlipped.value = false;
  matchingSelectedLeft.value = -1;
  matchingSelectedRight.value = -1;
  matchingMatched.value = new Set();
  matchingMatchedRight.value = new Set();
  matchingWrongLeft.value = -1;
  matchingWrongRight.value = -1;
  matchingUserPairs.value = [];

  if (q.question_type === 'matching' && q.type_data?.pairs) {
    matchingPairs.value = q.type_data.pairs;
    const shuffled = q.type_data.pairs.map((p, i) => ({ right: p.right, originalIndex: i }));
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    shuffledRightPairs.value = shuffled;
  }

  if (q.question_type === 'ordering' && q.type_data?.items) {
    const items = q.type_data.items.map((it, i) => ({ text: it.text, originalIndex: i }));
    // Shuffle
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    orderingItems.value = items;
  }
}

async function submitToBackend(body: Record<string, unknown>) {
  const token = getToken();
  try {
    const result = await $fetch<{ isCorrect: boolean; hearts_remaining: number }>(`/api/quiz/${sessionId.value}/answer`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body,
    });
    lastAnswerCorrect.value = result.isCorrect;
    answered.value = true;
    if (result.isCorrect) {
      correctCount.value++;
      xpEarned.value += 1;
    } else {
      hearts.value = result.hearts_remaining;
      if (result.hearts_remaining === 0) {
        heartsDepleted.value = true;
      }
    }
  } catch {
    lastAnswerCorrect.value = false;
    answered.value = true;
  }
}

// Multiple choice
function getMcOptionClass(answerId: string) {
  if (!answered.value) {
    return answerId === selectedAnswerId.value ? 'quiz-option--selected' : '';
  }
  const correct = currentAnswers.value.find((a) => a.is_correct);
  if (answerId === correct?.id) return 'quiz-option--correct';
  if (answerId === selectedAnswerId.value) return 'quiz-option--wrong';
  return 'quiz-option--dim';
}

async function answerMc(answerId: string) {
  selectedAnswerId.value = answerId;
  await submitToBackend({
    questionId: currentQuestion.value.id,
    answerId,
  });
}

// Fill blank
async function answerFillBlank() {
  if (!fillBlankText.value.trim()) return;
  await submitToBackend({
    questionId: currentQuestion.value.id,
    textAnswer: fillBlankText.value.trim(),
  });
}

// Flashcard
async function answerFlashcard(knows: boolean) {
  await submitToBackend({
    questionId: currentQuestion.value.id,
    isCorrect: knows,
  });
}

// Matching
function selectMatchLeft(index: number) {
  matchingWrongLeft.value = -1;
  matchingWrongRight.value = -1;
  matchingSelectedLeft.value = index;
  tryMatch();
}

function selectMatchRight(index: number) {
  matchingWrongLeft.value = -1;
  matchingWrongRight.value = -1;
  matchingSelectedRight.value = index;
  tryMatch();
}

function tryMatch() {
  if (matchingSelectedLeft.value === -1 || matchingSelectedRight.value === -1) return;
  const leftIdx = matchingSelectedLeft.value;
  const rightShuffledIdx = matchingSelectedRight.value;
  const rightOriginalIdx = shuffledRightPairs.value[rightShuffledIdx].originalIndex;

  if (leftIdx === rightOriginalIdx) {
    // Correct match
    matchingMatched.value = new Set([...matchingMatched.value, leftIdx]);
    matchingMatchedRight.value = new Set([...matchingMatchedRight.value, rightShuffledIdx]);
    matchingUserPairs.value.push({ leftIndex: leftIdx, rightIndex: leftIdx });
  } else {
    matchingWrongLeft.value = leftIdx;
    matchingWrongRight.value = rightShuffledIdx;
    setTimeout(() => { matchingWrongLeft.value = -1; matchingWrongRight.value = -1; }, 600);
  }

  matchingSelectedLeft.value = -1;
  matchingSelectedRight.value = -1;
}

async function submitMatching() {
  await submitToBackend({
    questionId: currentQuestion.value.id,
    matchingAnswer: matchingUserPairs.value,
  });
}

// Ordering
function moveOrderItem(index: number, direction: number) {
  const newIdx = index + direction;
  if (newIdx < 0 || newIdx >= orderingItems.value.length) return;
  const arr = [...orderingItems.value];
  [arr[index], arr[newIdx]] = [arr[newIdx], arr[index]];
  orderingItems.value = arr;
}

async function submitOrdering() {
  const indices = orderingItems.value.map((it) => it.originalIndex);
  await submitToBackend({
    questionId: currentQuestion.value.id,
    orderedIndices: indices,
  });
}

// Navigation
function nextQuestion() {
  if (heartsDepleted.value) {
    openHeartsDialog();
    return;
  }
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++;
    initQuestionState();
  } else {
    finishQuiz();
  }
}

async function finishQuiz() {
  const token = getToken();
  try {
    const result = await $fetch<{
      xp_earned: number;
      acorn_earned: number;
      correct_answers: number;
      step_completed: boolean;
      topic_completed: boolean;
    }>(`/api/quiz/${sessionId.value}/finish`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: heartsDepleted.value ? { skip_rewards: true } : {},
    });
    xpEarned.value = result.xp_earned;
    acornEarned.value = result.acorn_earned;
    correctCount.value = result.correct_answers;
    stepCompleted.value = result.step_completed;
    topicCompleted.value = result.topic_completed;
  } catch {
    // finish failed, use local counts
    acornEarned.value = correctCount.value;
  }
  finished.value = true;
}

async function openHeartsDialog() {
  heartsEmptyDialog.value = true;
  purchaseError.value = '';
  loadingPackages.value = true;
  const token = getToken();
  try {
    const [items, user] = await Promise.all([
      $fetch<HeartPackage[]>('/api/store/items', { headers: { Authorization: `Bearer ${token}` } }),
      $fetch<{ acorn_balance?: number }>('/api/users/me', { headers: { Authorization: `Bearer ${token}` } }),
    ]);
    heartPackages.value = items.filter((i) => i.item_type === 'heart_refill');
    acornBalanceForDialog.value = user.acorn_balance ?? 0;
  } catch { /* skip */ }
  loadingPackages.value = false;
}

async function buyHeartInDialog(pkg: HeartPackage) {
  purchasingHeart.value = pkg.id;
  purchaseError.value = '';
  const token = getToken();
  try {
    const result = await $fetch<{ balance: number; hearts: number }>('/api/store/purchase', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: { itemId: pkg.id, quantity: 1 },
    });
    hearts.value = result.hearts;
    acornBalanceForDialog.value = result.balance;
    heartsDepleted.value = false;
    heartsEmptyDialog.value = false;
    exitWarningDialog.value = false;
    if (currentIndex.value < questions.value.length - 1) {
      currentIndex.value++;
      initQuestionState();
    } else {
      await finishQuiz();
    }
  } catch {
    purchaseError.value = 'Satın alma başarısız. Tekrar dene.';
  }
  purchasingHeart.value = null;
}

function declineHeartPurchase() {
  heartsEmptyDialog.value = false;
  exitWarningDialog.value = true;
}

function continueFromWarning() {
  exitWarningDialog.value = false;
  if (hearts.value === 0) {
    openHeartsDialog();
  }
}

function exitQuiz() {
  const token = getToken();
  $fetch(`/api/quiz/${sessionId.value}/finish`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: { skip_rewards: true },
  }).catch(() => {});
  router.replace('/');
}

function restartQuiz() {
  currentIndex.value = 0;
  answered.value = false;
  finished.value = false;
  heartsDepleted.value = false;
  correctCount.value = 0;
  xpEarned.value = 0;
  acornEarned.value = 0;
  stepCompleted.value = false;
  topicCompleted.value = false;
  loading.value = true;
  error.value = '';
  startQuiz();
}

onMounted(startQuiz);
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

.quiz-option--selected {
  background: rgba(124, 58, 237, 0.12);
  border-color: var(--pb-purple-light);
  color: var(--pb-text);
}

.quiz-option--selected .quiz-option-letter {
  background: var(--pb-purple);
  border-color: var(--pb-purple);
  color: white;
}

.quiz-option--wrong {
  background: rgba(255, 150, 0, 0.12);
  border-color: var(--pb-orange);
  color: var(--pb-orange);
}

.quiz-option--wrong .quiz-option-letter {
  background: var(--pb-orange);
  border-color: var(--pb-orange);
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

/* Acorn stat */
.quiz-result-stat--acorn .quiz-result-stat-val { color: #cd853f; }

/* Step/Topic complete banners */
.quiz-step-complete, .quiz-topic-complete {
  background: rgba(88, 204, 2, 0.12);
  border: 2px solid var(--pb-green);
  border-radius: 14px;
  padding: 14px 20px;
  font-weight: 800;
  font-size: 1rem;
  color: var(--pb-green);
  width: 100%;
  text-align: center;
}

.quiz-topic-complete {
  background: rgba(255, 215, 0, 0.12);
  border-color: var(--pb-gold);
  color: var(--pb-gold);
}

/* Loading */
.quiz-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 16px;
  color: var(--pb-text-muted);
  font-weight: 700;
}

.quiz-loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--pb-border);
  border-top-color: var(--pb-purple);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.quiz-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 16px;
  color: var(--pb-red);
  font-weight: 700;
}

/* Fill blank */
.quiz-fill-blank {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.quiz-fill-input {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 14px;
  padding: 16px 18px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  color: var(--pb-text);
  outline: none;
  transition: border-color 0.15s;
}

.quiz-fill-input:focus {
  border-color: var(--pb-purple-light);
}

.quiz-fill-submit {
  align-self: flex-end;
}

/* Flashcard */
.quiz-flashcard-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.quiz-flashcard {
  width: 100%;
  min-height: 200px;
  perspective: 800px;
  cursor: pointer;
  position: relative;
}

.quiz-flashcard-front, .quiz-flashcard-back {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 18px;
  padding: 32px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  color: var(--pb-text);
  min-height: 200px;
  transition: all 0.4s;
}

.quiz-flashcard-front {
  color: var(--pb-text-muted);
}

.quiz-flashcard-back {
  display: none;
}

.quiz-flashcard--flipped .quiz-flashcard-front {
  display: none;
}

.quiz-flashcard--flipped .quiz-flashcard-back {
  display: flex;
  background: rgba(124, 58, 237, 0.1);
  border-color: var(--pb-purple-light);
}

.quiz-flashcard-actions {
  display: flex;
  gap: 12px;
  width: 100%;
}

.quiz-flashcard-btn {
  flex: 1;
  padding: 14px;
  border: 2px solid;
  border-radius: 14px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.15s;
  background: transparent;
}

.quiz-flashcard-btn--wrong {
  color: var(--pb-red);
  border-color: var(--pb-red);
}

.quiz-flashcard-btn--wrong:hover {
  background: rgba(255, 75, 75, 0.12);
}

.quiz-flashcard-btn--correct {
  color: var(--pb-green);
  border-color: var(--pb-green);
}

.quiz-flashcard-btn--correct:hover {
  background: rgba(88, 204, 2, 0.12);
}

/* Matching */
.quiz-matching {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.quiz-matching-cols {
  display: flex;
  gap: 12px;
}

.quiz-matching-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.quiz-match-item {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 12px;
  padding: 14px 16px;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--pb-text);
  cursor: pointer;
  transition: all 0.15s;
  text-align: center;
}

.quiz-match-item:hover:not(:disabled) {
  border-color: var(--pb-purple-light);
}

.quiz-match-item--selected {
  border-color: var(--pb-purple-light);
  background: rgba(124, 58, 237, 0.15);
}

.quiz-match-item--matched {
  border-color: var(--pb-green);
  background: rgba(88, 204, 2, 0.12);
  color: var(--pb-green);
  cursor: default;
}

.quiz-match-item--wrong {
  border-color: var(--pb-red);
  background: rgba(255, 75, 75, 0.12);
  animation: shake 0.4s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-6px); }
  75% { transform: translateX(6px); }
}

.quiz-matching-submit {
  align-self: center;
}

/* Ordering */
.quiz-ordering {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.quiz-ordering-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.quiz-ordering-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 12px;
  padding: 14px 16px;
  transition: all 0.15s;
}

.quiz-ordering-item--disabled {
  opacity: 0.7;
}

.quiz-ordering-num {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--pb-bg);
  border: 2px solid var(--pb-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 900;
  color: var(--pb-text-muted);
  flex-shrink: 0;
}

.quiz-ordering-text {
  flex: 1;
  font-weight: 700;
  font-size: 0.9rem;
}

.quiz-ordering-btns {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.quiz-ordering-btns button {
  background: var(--pb-bg);
  border: 1px solid var(--pb-border);
  border-radius: 6px;
  color: var(--pb-text-muted);
  cursor: pointer;
  padding: 2px 8px;
  font-size: 0.7rem;
  transition: all 0.12s;
}

.quiz-ordering-btns button:hover:not(:disabled) {
  background: var(--pb-bg-card-hover);
  color: var(--pb-text);
}

.quiz-ordering-btns button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.quiz-ordering-submit {
  align-self: center;
}

/* ===== Hearts Dialogs ===== */
.hd-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
  animation: hdFadeIn 0.2s ease;
}

@keyframes hdFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.hd-modal {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 24px 24px 0 0;
  padding: 28px 24px 44px;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  animation: hdSlideUp 0.3s ease;
}

@keyframes hdSlideUp {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.hd-icon {
  font-size: 3rem;
  line-height: 1;
}

.hd-title {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--pb-text);
}

.hd-sub {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--pb-text-muted);
  text-align: center;
}

.hd-balance {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--pb-bg);
  border: 2px solid var(--pb-border);
  border-radius: 99px;
  padding: 8px 20px;
  margin: 4px 0;
}

.hd-balance-icon { font-size: 1.2rem; }

.hd-balance-val {
  font-size: 1.1rem;
  font-weight: 900;
  color: #cd853f;
}

.hd-balance-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--pb-text-muted);
  text-transform: uppercase;
}

.hd-loading {
  display: flex;
  justify-content: center;
  padding: 12px 0;
}

.hd-spinner {
  width: 28px;
  height: 28px;
  border: 3px solid var(--pb-border);
  border-top-color: var(--pb-purple);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.hd-packages {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.hd-pkg {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--pb-bg);
  border: 2px solid var(--pb-border);
  border-radius: 14px;
  padding: 14px 18px;
  cursor: pointer;
  font-family: inherit;
  color: var(--pb-text);
  transition: all 0.12s;
  width: 100%;
}

.hd-pkg:hover:not(:disabled) {
  border-color: var(--pb-purple-light);
  background: var(--pb-bg-card-hover);
}

.hd-pkg--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.hd-pkg-icon { font-size: 1.4rem; flex-shrink: 0; }

.hd-pkg-name {
  flex: 1;
  font-size: 0.95rem;
  font-weight: 800;
  text-align: left;
}

.hd-pkg-price {
  font-size: 0.88rem;
  font-weight: 800;
  color: #cd853f;
  background: rgba(205, 133, 63, 0.12);
  padding: 4px 12px;
  border-radius: 99px;
  min-width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hd-pkg-spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(205, 133, 63, 0.3);
  border-top-color: #cd853f;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  display: inline-block;
}

.hd-error {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--pb-red);
  text-align: center;
}

.hd-decline {
  background: none;
  border: none;
  color: var(--pb-text-muted);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 16px;
  border-radius: 8px;
  transition: color 0.12s;
  margin-top: 4px;
}

.hd-decline:hover { color: var(--pb-text); }

.hd-warn-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding-top: 4px;
}

.hd-btn-continue {
  background: var(--pb-purple);
  color: white;
  border: none;
  border-bottom: 3px solid var(--pb-purple-dark);
  border-radius: 14px;
  padding: 16px;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;
  font-family: inherit;
  width: 100%;
  letter-spacing: 0.02em;
  transition: transform 0.12s;
}

.hd-btn-continue:hover { transform: translateY(-1px); }

.hd-btn-exit {
  background: none;
  border: 2px solid var(--pb-border);
  border-radius: 14px;
  padding: 14px;
  font-size: 0.95rem;
  font-weight: 800;
  cursor: pointer;
  font-family: inherit;
  color: var(--pb-text-muted);
  width: 100%;
  transition: all 0.12s;
}

.hd-btn-exit:hover {
  border-color: var(--pb-red);
  color: var(--pb-red);
}
</style>
