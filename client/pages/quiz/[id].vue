<template>
  <div class="min-h-screen bg-white flex flex-col max-w-[600px] mx-auto px-4 pb-10 text-gray-800 font-sans">
    <!-- Loading -->
    <div v-if="loading" class="flex flex-col items-center justify-center flex-1 gap-3 py-20">
      <div class="w-10 h-10 border-4 border-gray-200 border-t-primary rounded-full animate-spin" />
      <p class="font-bold text-gray-400">Sorular yükleniyor…</p>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="flex flex-col items-center justify-center flex-1 gap-4 py-20">
      <p class="text-gray-400 font-bold text-center">{{ error }}</p>
      <NuxtLink to="/" class="bg-primary text-white font-black text-sm py-3 px-6 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all">Ana Sayfaya Dön</NuxtLink>
    </div>

    <!-- Quiz in progress -->
    <template v-else-if="!finished && questions.length > 0">
      <!-- Top bar -->
      <div class="flex items-center gap-4 py-4 pb-5 sticky top-0 bg-white z-10">
        <button class="w-9 h-9 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-gray-400 font-bold cursor-pointer hover:bg-gray-200 transition-colors shrink-0" @click="handleClose">✕</button>
        <div class="flex-1">
          <div class="h-3 bg-gray-100 rounded-full overflow-hidden border-2 border-gray-200">
            <div class="h-full bg-primary rounded-full transition-all duration-300" :style="{ width: `${((answeredCount + (answered && currentIndex >= questions.length - 1 ? 1 : 0)) / questions.length) * 100}%` }" />
          </div>
        </div>
        <template v-if="unlimitedEnergy">
          <span class="text-sm font-extrabold text-positive shrink-0">♾️🔋</span>
        </template>
        <span v-else class="text-sm font-extrabold text-negative shrink-0">🔋 {{ energy }}</span>
      </div>

      <!-- Question body -->
      <div class="flex flex-col gap-5 flex-1">
        <!-- Meta -->
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-gray-400">Soru {{ currentIndex + 1 }} / {{ questions.length }}</span>
          <div class="flex items-center gap-3">
            <button
              v-if="!guestMode"
              @click="openReportModal"
              class="text-gray-300 hover:text-red-400 transition-colors"
              title="Soruyu Raporla"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
            </button>
            <span class="text-xs font-extrabold text-primary">⚡ +{{ xpEarned }} XP</span>
          </div>
        </div>

        <!-- Question text (not for swipe/fill_blank) -->
        <div v-if="currentQuestion.question_type !== 'swipe' && currentQuestion.question_type !== 'fill_blank'" class="question-html text-base sm:text-lg text-gray-800 leading-snug space-y-2" v-html="currentQuestion.question_text" />

        <!-- Question image -->
        <div v-if="currentQuestion.image_url" class="w-full">
          <img
            :src="`/${currentQuestion.image_url}`"
            :alt="'Soru görseli'"
            class="block w-full max-h-72 object-contain rounded-lg"
            @error="imageLoadError = true"
            @load="imageLoadError = false"
          />
          <div v-if="imageLoadError" class="mt-2 flex items-center gap-2 text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs font-semibold">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
            Bu sorunun görseli yüklenemedi veya eksik.
          </div>
        </div>

        <!-- Multiple choice / True-false -->
        <template v-if="currentQuestion.question_type === 'multiple_choice' || currentQuestion.question_type === 'true_false'">
          <div class="flex flex-col gap-2.5">
            <button
              v-for="(option, i) in currentAnswers"
              :key="option.id"
              class="flex items-center gap-3.5 bg-white border-2 rounded-2xl px-4 py-3.5 cursor-pointer transition-all duration-150 font-[inherit] text-left"
              :class="getMcOptionClass(option.id)"
              :disabled="answered"
              @click="answerMc(option.id)"
            >
              <span class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-extrabold shrink-0"
                :class="getMcLetterClass(option.id)"
              >{{ optionLetters[i] }}</span>
              <span class="text-sm font-bold flex-1" v-html="option.answer_text" />
            </button>
          </div>
        </template>

        <!-- Fill in the blank -->
        <template v-else-if="currentQuestion.question_type === 'fill_blank'">
          <!-- Word chip mode -->
          <div v-if="currentQuestion.type_data?.word_options?.length" class="flex flex-col gap-4">
            <div class="text-lg font-black text-gray-800 leading-snug">
              <template v-for="(part, pi) in fillBlankParts" :key="pi">
                <span
                  v-if="/^_+$/.test(part)"
                  class="inline-block min-w-[80px] px-3 py-1 mx-1 border-b-4 text-center font-black transition-all"
                  :class="{
                    'border-primary text-primary': selectedFillWord && !answered,
                    'border-positive text-positive': answered && lastAnswerCorrect,
                    'border-negative text-negative': answered && !lastAnswerCorrect,
                    'border-gray-300 text-gray-400': !selectedFillWord && !answered,
                  }"
                  @click="!answered && selectedFillWord ? (selectedFillWord = '') : undefined"
                >{{ selectedFillWord || '______' }}</span>
                <span v-else v-html="part" />
              </template>
            </div>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="word in currentQuestion.type_data.word_options"
                :key="word"
                class="px-4 py-2.5 rounded-xl border-2 font-bold text-sm cursor-pointer transition-all font-[inherit]"
                :class="{
                  'border-primary bg-primary/10 text-primary': selectedFillWord === word,
                  'border-gray-200 text-gray-800 hover:border-primary/40': selectedFillWord !== word && !answered,
                  'opacity-40': !!selectedFillWord && selectedFillWord !== word,
                }"
                :disabled="answered || (!!selectedFillWord && selectedFillWord !== word)"
                @click="toggleFillWord(word)"
              >{{ word }}</button>
            </div>
            <button
              v-if="!answered"
              :disabled="!selectedFillWord"
              class="w-full font-black text-sm py-3 rounded-xl border-b-4 transition-all duration-150"
              :class="selectedFillWord
                ? 'bg-primary text-white border-primary-dark cursor-pointer active:border-b-0 active:translate-y-1 hover:brightness-110'
                : 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'"
              @click="answerFillBlankChip"
            >
              KONTROL ET
            </button>
          </div>
          <!-- Text input mode -->
          <div v-else class="flex flex-col gap-3">
            <input
              v-model="fillBlankText"
              class="bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-base font-[inherit] outline-none focus:border-primary transition-colors"
              placeholder="Cevabınızı yazın…"
              :disabled="answered"
              @keyup.enter="answerFillBlank"
            />
            <button
              v-if="!answered"
              class="w-full bg-primary text-white font-black text-sm py-3 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              :disabled="!fillBlankText.trim()"
              @click="answerFillBlank"
            >GÖNDER</button>
          </div>
        </template>

        <!-- Flashcard -->
        <template v-else-if="currentQuestion.question_type === 'flashcard'">
          <div class="flex flex-col items-center gap-4">
            <div
              class="w-full max-w-[360px] h-[220px] rounded-2xl border-2 border-gray-200 flex items-center justify-center p-6 text-center cursor-pointer select-none transition-all hover:border-primary"
              :class="flashcardFlipped ? 'bg-primary/5 border-primary' : 'bg-gray-50'"
              @click="flashcardFlipped = !flashcardFlipped"
            >
              <p v-if="!flashcardFlipped" class="text-gray-400 font-bold">Kartı çevirmek için tıkla</p>
              <p v-else class="text-sm font-bold text-gray-800 leading-relaxed">{{ currentQuestion.explanation || currentQuestion.type_data?.back || 'Açıklama yok' }}</p>
            </div>
            <div v-if="!answered" class="flex gap-3 w-full max-w-[360px]">
              <button class="flex-1 bg-white text-negative font-extrabold text-sm py-3.5 rounded-xl border-2 border-negative hover:bg-negative/5 transition-all cursor-pointer font-[inherit]" @click="answerFlashcard(false)">✗ Bilmiyorum</button>
              <button class="flex-1 bg-positive text-white font-extrabold text-sm py-3.5 rounded-xl border-b-4 border-green-700 active:border-b-0 active:translate-y-1 transition-all cursor-pointer font-[inherit]" @click="answerFlashcard(true)">✓ Biliyorum</button>
            </div>
          </div>
        </template>

        <!-- Matching -->
        <template v-else-if="currentQuestion.question_type === 'matching'">
          <div class="flex flex-col gap-4">
            <div class="grid grid-cols-2 gap-3">
              <div class="flex flex-col gap-2">
                <button
                  v-for="(pair, i) in matchingPairs"
                  :key="'l-' + i"
                  class="px-3 py-3 rounded-xl border-2 text-sm font-bold cursor-pointer transition-all font-[inherit] text-center"
                  :class="{
                    'border-primary bg-primary/10 text-primary': matchingSelectedLeft === i,
                    'border-positive bg-positive/10 text-positive': matchingMatched.has(i),
                    'border-negative bg-negative/10 text-negative': matchingWrongLeft === i,
                    'border-gray-200 text-gray-800 hover:border-primary/40': matchingSelectedLeft !== i && !matchingMatched.has(i) && matchingWrongLeft !== i,
                  }"
                  :disabled="answered || matchingMatched.has(i)"
                  @click="selectMatchLeft(i)"
                >{{ pair.left }}</button>
              </div>
              <div class="flex flex-col gap-2">
                <button
                  v-for="(pair, i) in shuffledRightPairs"
                  :key="'r-' + i"
                  class="px-3 py-3 rounded-xl border-2 text-sm font-bold cursor-pointer transition-all font-[inherit] text-center"
                  :class="{
                    'border-primary bg-primary/10 text-primary': matchingSelectedRight === i,
                    'border-positive bg-positive/10 text-positive': matchingMatchedRight.has(i),
                    'border-negative bg-negative/10 text-negative': matchingWrongRight === i,
                    'border-gray-200 text-gray-800 hover:border-primary/40': matchingSelectedRight !== i && !matchingMatchedRight.has(i) && matchingWrongRight !== i,
                  }"
                  :disabled="answered || matchingMatchedRight.has(i)"
                  @click="selectMatchRight(i)"
                >{{ pair.right }}</button>
              </div>
            </div>
            <button
              v-if="!answered && matchingMatched.size === matchingPairs.length"
              class="w-full bg-primary text-white font-black text-sm py-3 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all cursor-pointer"
              @click="submitMatching"
            >ONAYLA</button>
          </div>
        </template>

        <!-- Ordering -->
        <template v-else-if="currentQuestion.question_type === 'ordering'">
          <div class="flex flex-col gap-3">
            <div
              v-for="(item, i) in orderingItems"
              :key="item.originalIndex"
              class="flex items-center gap-3 bg-white border-2 border-gray-200 rounded-xl px-4 py-3"
              :class="{ 'opacity-60': answered }"
            >
              <span class="w-7 h-7 rounded-full bg-primary text-white text-xs font-extrabold flex items-center justify-center shrink-0">{{ i + 1 }}</span>
              <span class="flex-1 text-sm font-bold text-gray-800">{{ item.text }}</span>
              <div v-if="!answered" class="flex flex-col gap-0.5">
                <button class="text-xs text-gray-400 hover:text-primary disabled:opacity-30 cursor-pointer bg-transparent border-0 font-[inherit]" :disabled="i === 0" @click="moveOrderItem(i, -1)">▲</button>
                <button class="text-xs text-gray-400 hover:text-primary disabled:opacity-30 cursor-pointer bg-transparent border-0 font-[inherit]" :disabled="i === orderingItems.length - 1" @click="moveOrderItem(i, 1)">▼</button>
              </div>
            </div>
            <button
              v-if="!answered"
              class="w-full bg-primary text-white font-black text-sm py-3 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all cursor-pointer"
              @click="submitOrdering"
            >ONAYLA</button>
          </div>
        </template>

        <!-- Swipe -->
        <template v-else-if="currentQuestion.question_type === 'swipe'">
          <div class="flex flex-col items-center gap-4">
            <div
              class="w-full max-w-[340px] min-h-[200px] bg-white border-2 border-gray-200 rounded-2xl p-6 flex items-center justify-center text-center relative select-none cursor-grab active:cursor-grabbing"
              :style="swipeCardStyle"
              @mousedown.prevent="swipeMouseDown"
              @touchstart.prevent="swipeTouchStart"
              @touchmove.prevent="swipeTouchMove"
              @touchend="swipeTouchEnd"
            >
              <div class="absolute top-3 right-3 text-positive font-black text-lg opacity-0 transition-opacity" :style="{ opacity: swipeRightOpacity }">DOĞRU ✓</div>
              <div class="absolute top-3 left-3 text-negative font-black text-lg opacity-0 transition-opacity" :style="{ opacity: swipeLeftOpacity }">YANLIŞ ✗</div>
              <p class="text-base font-bold text-gray-800" v-html="currentQuestion.question_text" />
            </div>
            <div v-if="!answered" class="flex justify-between w-full max-w-[340px] text-xs font-extrabold text-gray-400">
              <span>← YANLIŞ</span>
              <span>DOĞRU →</span>
            </div>
          </div>
        </template>

        <!-- Feedback -->
        <transition name="fade">
          <div v-if="answered" class="flex items-center gap-3.5 rounded-2xl px-5 py-4 border-b-4"
            :class="lastAnswerCorrect ? 'bg-positive/10 border-positive text-positive' : 'bg-negative/10 border-negative text-negative'"
          >
            <span class="text-2xl font-black">{{ lastAnswerCorrect ? '✓' : '✗' }}</span>
            <div class="flex-1 min-w-0">
              <div class="text-base font-black">{{ lastAnswerCorrect ? 'Harika! 🎉' : 'Yanlış! 😔' }}</div>
              <div v-if="currentQuestion.explanation" class="text-xs font-semibold opacity-80 mt-0.5" v-html="currentQuestion.explanation" />
            </div>
            <button class="shrink-0 bg-white font-extrabold text-sm px-5 py-2.5 rounded-xl border-2 cursor-pointer transition-all font-[inherit]"
              :class="lastAnswerCorrect ? 'text-positive border-positive hover:bg-positive/5' : 'text-negative border-negative hover:bg-negative/5'"
              @click="nextQuestion"
            >DEVAM</button>
          </div>
        </transition>
      </div>
    </template>

    <!-- Quiz finished -->
    <template v-else-if="finished">
      <div class="flex flex-col items-center gap-5 py-10">
        <div :class="{ 'animate-bounce': isBossSession && stepCompleted }" class="text-[80px] leading-none">
          {{ energyDepleted ? '🔋' : (isBossSession && stepCompleted ? '⚔️' : '🎊') }}
        </div>

        <h1 class="text-2xl font-black text-gray-800 text-center">{{ energyDepleted ? 'Enerjin Bitti! 🔋' : (isBossSession && stepCompleted ? '⚔️ Boss Testi Geçildi!' : 'Tebrikler! 🎊') }}</h1>
        <p class="text-sm font-semibold text-gray-400 text-center">{{ energyDepleted ? 'Enerjin tükendi, test sonlandırıldı.' : (isBossSession ? 'Adım finali tamamlandı!' : 'Quiz tamamlandı!') }}</p>

        <!-- Stats grid -->
        <div class="grid grid-cols-4 gap-3 w-full max-w-[420px]">
          <div class="bg-positive/10 border-2 border-positive/30 rounded-2xl p-3 text-center">
            <div class="text-xl font-black text-positive">{{ correctCount }}</div>
            <div class="text-[0.65rem] font-bold text-positive/70 uppercase">Doğru</div>
          </div>
          <div class="bg-negative/10 border-2 border-negative/30 rounded-2xl p-3 text-center">
            <div class="text-xl font-black text-negative">{{ questions.length - correctCount }}</div>
            <div class="text-[0.65rem] font-bold text-negative/70 uppercase">Yanlış</div>
          </div>
          <div class="bg-primary/10 border-2 border-primary/30 rounded-2xl p-3 text-center">
            <div class="text-xl font-black text-primary">+{{ xpEarned }}</div>
            <div class="text-[0.65rem] font-bold text-primary/70 uppercase">XP</div>
          </div>
          <div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-3 text-center">
            <div class="text-xl font-black text-amber-700">+{{ acornEarned }}</div>
            <div class="text-[0.65rem] font-bold text-amber-400 uppercase">Acorn</div>
          </div>
        </div>

        <!-- Accuracy bar -->
        <div class="flex items-center gap-3 w-full max-w-[420px]">
          <span class="text-xs font-bold text-gray-400 whitespace-nowrap">Doğruluk</span>
          <div class="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden border-2 border-gray-200">
            <div class="h-full bg-primary rounded-full transition-all duration-500" :style="{ width: `${questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0}%` }" />
          </div>
          <span class="text-sm font-extrabold text-primary">%{{ questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0 }}</span>
        </div>

        <div v-if="stepCompleted" class="bg-positive/10 text-positive font-extrabold text-sm px-5 py-2.5 rounded-full border-2 border-positive/30">🎉 Adım tamamlandı!</div>
        <div v-if="topicCompleted" class="bg-warning/10 text-warning font-extrabold text-sm px-5 py-2.5 rounded-full border-2 border-warning/30">🏆 Konu tamamlandı!</div>

        <!-- Pending sync notice -->
        <div v-if="pendingSync" class="flex items-center gap-2 bg-amber-50 border-2 border-amber-200 text-amber-700 font-semibold text-sm px-4 py-3 rounded-2xl w-full max-w-[420px]">
          <svg class="w-4 h-4 shrink-0 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
          Sonuçlar internete bağlanınca otomatik kaydedilecek.
        </div>

        <div class="flex gap-3 w-full max-w-[420px] mt-2">
          <button class="flex-1 bg-white text-gray-400 font-bold text-sm py-3 rounded-xl border-2 border-gray-200 hover:border-gray-400 hover:text-gray-800 transition-all cursor-pointer font-[inherit]" @click="restartQuiz">🔄 Tekrar Dene</button>
          <NuxtLink :to="guestMode ? '/auth/register-wall' : '/'" class="flex-1 bg-primary text-white font-black text-sm py-3 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all text-center">Devam Et →</NuxtLink>
        </div>
      </div>
    </template>

    <!-- Dialogs -->
    <DialogsEnergyEmptyDialog
      :visible="energyEmptyDialog"
      :packages="energyPackages"
      :acorn-balance="acornBalanceForDialog"
      :purchasing-id="purchasingEnergy"
      :loading="loadingPackages"
      :error="purchaseError"
      @buy="buyEnergyInDialog"
      @decline="declineEnergyPurchase"
    />

    <DialogsExitWarningDialog
      :visible="exitWarningDialog"
      @continue="continueFromWarning"
      @exit="exitQuiz"
    />

    <!-- Report Question Modal -->
    <div v-if="reportModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50" @click.self="reportModalOpen = false">
      <div class="bg-white rounded-2xl p-6 w-full max-w-sm mx-4 space-y-4">
        <h3 class="text-lg font-black text-gray-800">Soruyu Raporla</h3>

        <div class="flex flex-col gap-2">
          <label v-for="opt in reportReasons" :key="opt.value" class="flex items-center gap-3 cursor-pointer">
            <input type="radio" v-model="reportReason" :value="opt.value" class="w-4 h-4 text-primary" />
            <span class="text-sm font-semibold text-gray-700">{{ opt.label }}</span>
          </label>
        </div>

        <textarea
          v-model="reportDescription"
          rows="2"
          class="w-full px-3 py-2 border-2 border-gray-200 rounded-xl text-sm text-gray-800 focus:border-primary focus:outline-none resize-none"
          placeholder="Ek açıklama (isteğe bağlı)..."
        />

        <div class="flex gap-3">
          <button
            @click="submitReport"
            :disabled="!reportReason || reportSubmitting"
            class="flex-1 bg-primary text-white font-bold text-sm py-2.5 rounded-xl disabled:opacity-50 transition-colors"
          >
            {{ reportSubmitting ? 'Gönderiliyor...' : 'Gönder' }}
          </button>
          <button @click="reportModalOpen = false" class="flex-1 bg-gray-100 text-gray-500 font-bold text-sm py-2.5 rounded-xl hover:bg-gray-200 transition-colors">
            İptal
          </button>
        </div>

        <p v-if="reportError" class="text-red-500 text-xs font-semibold">{{ reportError }}</p>
        <p v-if="reportSuccess" class="text-green-600 text-xs font-semibold">{{ reportSuccess }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

const route = useRoute();
const router = useRouter();

const { localAnswers, addAnswer, resetAnswers, savePending, syncPendingSessions } = useOfflineQuiz();

interface EnergyPackage {
  id: string;
  name: string;
  description: string;
  icon_url: string;
  price_acorn: number;
  item_type: string;
  metadata?: { energy_count?: number };
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
  image_url?: string;
  explanation?: string;
  hint?: string;
  type_data?: {
    back?: string;
    acceptable_answers?: string[];
    word_options?: string[];
    pairs?: { left: string; right: string }[];
    items?: { text: string; position: number }[];
  };
  answers?: Answer[];
}

const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F'];

const loading = ref(true);
// true while the session result is buffered in localStorage waiting for connectivity
const pendingSync = ref(false);
const error = ref('');
const sessionId = ref('');
const questions = ref<Question[]>([]);
const currentIndex = ref(0);
const answered = ref(false);
const finished = ref(false);
const correctCount = ref(0);
const energy = useState('userEnergy', () => 25);
const unlimitedEnergy = useState('unlimitedEnergy', () => false);
const energyDepleted = ref(false);
const xpEarned = ref(0);
const acornEarned = ref(0);
const lastAnswerCorrect = ref(false);
const answeredCount = ref(0);
const stepCompleted = ref(false);
const topicCompleted = ref(false);
const guestMode = ref(false);
const guestTopicId = ref('');
const guestStepId = ref('');
const guestTestId = ref('');

const isBossSession = computed(() => route.query.sessionType === 'step_final');

const energyEmptyDialog = ref(false);
const exitWarningDialog = ref(false);
const energyPackages = ref<EnergyPackage[]>([]);
const acornBalanceForDialog = ref(0);
const purchasingEnergy = ref<string | null>(null);
const loadingPackages = ref(false);
const purchaseError = ref('');

const selectedAnswerId = ref('');
const fillBlankText = ref('');
const flashcardFlipped = ref(false);

const matchingPairs = ref<{ left: string; right: string }[]>([]);
const shuffledRightPairs = ref<{ right: string; originalIndex: number }[]>([]);
const matchingSelectedLeft = ref(-1);
const matchingSelectedRight = ref(-1);
const matchingMatched = ref(new Set<number>());
const matchingMatchedRight = ref(new Set<number>());
const matchingWrongLeft = ref(-1);
const matchingWrongRight = ref(-1);
const matchingUserPairs = ref<{ leftIndex: number; rightIndex: number }[]>([]);

const orderingItems = ref<{ text: string; originalIndex: number }[]>([]);

const swipeDragX = ref(0);
const swipeStartX = ref(0);
const swipeDragging = ref(false);
const swipeExiting = ref(false);
const swipeExitDirection = ref<'left' | 'right' | null>(null);
const SWIPE_THRESHOLD = 100;

const selectedFillWord = ref('');
const totalAnswered = ref(0);

// Image error tracking — reset per question
const imageLoadError = ref(false);

// Report modal state
const reportModalOpen = ref(false);
const reportReason = ref('');
const reportDescription = ref('');
const reportSubmitting = ref(false);
const reportError = ref('');
const reportSuccess = ref('');
const reportReasons = [
  { value: 'wrong_answer', label: 'Yanlış cevap işaretlenmiş' },
  { value: 'unclear_question', label: 'Soru belirsiz / anlaşılmıyor' },
  { value: 'wrong_explanation', label: 'Açıklama hatalı' },
  { value: 'typo', label: 'Yazım hatası var' },
  { value: 'missing_image', label: 'Görsel eksik veya yanlış' },
  { value: 'other', label: 'Diğer' },
];

const currentQuestion = computed(() => questions.value[currentIndex.value]);
const currentAnswers = computed(() => currentQuestion.value?.answers ?? []);

const swipeCardStyle = computed(() => {
  if (swipeExiting.value) {
    const dir = swipeExitDirection.value === 'right' ? 1 : -1;
    return {
      transform: `translateX(${dir * 120}%) rotate(${dir * 15}deg)`,
      opacity: '0',
      transition: 'transform 0.4s ease, opacity 0.4s ease',
    };
  }
  return {
    transform: `translateX(${swipeDragX.value}px) rotate(${swipeDragX.value * 0.06}deg)`,
    transition: swipeDragging.value ? 'none' : 'transform 0.3s ease',
  };
});

const swipeRightOpacity = computed(() => Math.min(1, Math.max(0, swipeDragX.value / SWIPE_THRESHOLD)));
const swipeLeftOpacity = computed(() => Math.min(1, Math.max(0, -swipeDragX.value / SWIPE_THRESHOLD)));

const fillBlankParts = computed(() => {
  const text = currentQuestion.value?.question_text ?? '';
  const parts = text.split(/(_{2,})/);
  return parts.filter(p => p.length > 0);
});

function getMcOptionClass(answerId: string) {
  if (!answered.value) {
    return answerId === selectedAnswerId.value ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/40';
  }
  // Selected answer: green if correct, red if wrong (works in both auth and guest mode)
  if (answerId === selectedAnswerId.value) {
    return lastAnswerCorrect.value ? 'border-positive bg-positive/10' : 'border-negative bg-negative/10';
  }
  // Guest mode: also highlight the correct answer that wasn't selected
  const correct = currentAnswers.value.find((a) => a.is_correct);
  if (correct && answerId === correct.id) return 'border-positive bg-positive/10';
  return 'border-gray-200 opacity-50';
}

function getMcLetterClass(answerId: string) {
  if (!answered.value) {
    return answerId === selectedAnswerId.value ? 'border-primary text-primary bg-primary/10' : 'border-gray-300 text-gray-400';
  }
  // Selected answer: green if correct, red if wrong
  if (answerId === selectedAnswerId.value) {
    return lastAnswerCorrect.value ? 'border-positive text-positive bg-positive/10' : 'border-negative text-negative bg-negative/10';
  }
  // Guest mode: also highlight the correct answer letter
  const correct = currentAnswers.value.find((a) => a.is_correct);
  if (correct && answerId === correct.id) return 'border-positive text-positive bg-positive/10';
  return 'border-gray-200 text-gray-300';
}

function getToken() {
  return localStorage.getItem('pb_token') ?? '';
}

async function startQuiz() {
  const topicId = route.params.id as string;
  const token = getToken();
  const isGuest = !token;

  if (isGuest) {
    try {
      const query = route.query;
      const params = new URLSearchParams({ topicId });
      if (query.stepId) params.set('stepId', query.stepId as string);
      if (query.testId) params.set('testId', query.testId as string);
      if (query.sessionType) params.set('sessionType', query.sessionType as string);

      const data = await $fetch<{ questions: Question[] }>(`/api/quiz/guest-start?${params.toString()}`);
      guestMode.value = true;
      guestTopicId.value = topicId;
      guestStepId.value = (query.stepId as string) || '';
      guestTestId.value = (query.testId as string) || '';
      const { state: gs } = useGuestState();
      energy.value = gs.value.energyCount;
      questions.value = data.questions;
      initQuestionState();
    } catch (e: unknown) {
      const errData = (e as { data?: { error?: string; message?: string } })?.data;
      error.value = errData?.error || errData?.message || 'Quiz başlatılamadı';
    } finally {
      loading.value = false;
    }
    return;
  }

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
      $fetch<{ energy?: number }>('/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      }),
    ]);

    energy.value = user.energy ?? 25;
    sessionId.value = data.session.id;
    questions.value = data.questions;
    initQuestionState();
  } catch (e: unknown) {
    const fetchErr = e as { status?: number; data?: { error?: string; message?: string } };
    if (fetchErr?.status === 403) {
      loading.value = false;
      openEnergyDialog();
      return;
    }
    const errData = fetchErr?.data;
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
  selectedFillWord.value = '';
  swipeDragX.value = 0;
  swipeStartX.value = 0;
  swipeDragging.value = false;
  swipeExiting.value = false;
  swipeExitDirection.value = null;

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
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    orderingItems.value = items;
  }
}

async function submitToBackend(body: Record<string, unknown>) {
  const q = currentQuestion.value;
  // Client-side evaluation — works for both guest and auth users
  // (auth users now receive is_correct from startSession, same as guests)
  let isCorrect = false;

  switch (q.question_type) {
    case 'multiple_choice':
    case 'true_false':
    case 'swipe': {
      const answer = q.answers?.find((a) => a.id === body.answerId);
      isCorrect = Boolean(answer?.is_correct);
      break;
    }
    case 'fill_blank': {
      const acceptable: string[] = q.type_data?.acceptable_answers ?? [];
      const userAnswer = String(body.textAnswer ?? '').trim().toLowerCase();
      isCorrect = acceptable.some((a) => a.toLowerCase() === userAnswer);
      break;
    }
    case 'matching': {
      const pairs = body.matchingAnswer as { leftIndex: number; rightIndex: number }[];
      isCorrect = pairs.every((p) => p.leftIndex === p.rightIndex);
      break;
    }
    case 'ordering': {
      const indices = body.orderedIndices as number[];
      isCorrect = indices.every((val, idx) => val === idx);
      break;
    }
    case 'flashcard': {
      isCorrect = Boolean(body.isCorrect);
      break;
    }
  }

  lastAnswerCorrect.value = isCorrect;
  answered.value = true;
  totalAnswered.value++;

  if (isCorrect) {
    correctCount.value++;
    xpEarned.value += 1;
  } else {
    energy.value = Math.max(0, energy.value - 1);
    if (energy.value === 0) energyDepleted.value = true;

    if (guestMode.value) {
      const { setEnergy: persistEnergy } = useGuestState();
      persistEnergy(energy.value);
    }
  }

  // Buffer the answer for auth users (will be sent in bulk on finish)
  if (!guestMode.value) {
    addAnswer({
      questionId: String(body.questionId),
      answerId: body.answerId ? String(body.answerId) : undefined,
      isSkipped: Boolean(body.isSkipped ?? false),
      timeSpent: body.timeSpent != null ? Number(body.timeSpent) : undefined,
      answeredAt: new Date().toISOString(),
      textAnswer: body.textAnswer ? String(body.textAnswer) : undefined,
      matchingAnswer: body.matchingAnswer as { leftIndex: number; rightIndex: number }[] | undefined,
      orderedIndices: body.orderedIndices as number[] | undefined,
      isCorrect: body.isCorrect != null ? Boolean(body.isCorrect) : undefined,
    });
  }
}

async function answerMc(answerId: string) {
  selectedAnswerId.value = answerId;
  await submitToBackend({ questionId: currentQuestion.value.id, answerId });
}

async function answerFillBlank() {
  if (!fillBlankText.value.trim()) return;
  await submitToBackend({ questionId: currentQuestion.value.id, textAnswer: fillBlankText.value.trim() });
}

async function answerFlashcard(knows: boolean) {
  await submitToBackend({ questionId: currentQuestion.value.id, isCorrect: knows });
}

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
  await submitToBackend({ questionId: currentQuestion.value.id, matchingAnswer: matchingUserPairs.value });
}

function moveOrderItem(index: number, direction: number) {
  const newIdx = index + direction;
  if (newIdx < 0 || newIdx >= orderingItems.value.length) return;
  const arr = [...orderingItems.value];
  [arr[index], arr[newIdx]] = [arr[newIdx], arr[index]];
  orderingItems.value = arr;
}

async function submitOrdering() {
  const indices = orderingItems.value.map((it) => it.originalIndex);
  await submitToBackend({ questionId: currentQuestion.value.id, orderedIndices: indices });
}

function onSwipeStart(clientX: number) {
  if (answered.value || swipeExiting.value) return;
  swipeDragging.value = true;
  swipeStartX.value = clientX;
  swipeDragX.value = 0;
}

function onSwipeMove(clientX: number) {
  if (!swipeDragging.value) return;
  swipeDragX.value = clientX - swipeStartX.value;
}

function onSwipeEnd() {
  if (!swipeDragging.value) return;
  swipeDragging.value = false;
  if (Math.abs(swipeDragX.value) >= SWIPE_THRESHOLD) {
    const isTrue = swipeDragX.value > 0;
    swipeExiting.value = true;
    swipeExitDirection.value = isTrue ? 'right' : 'left';
    answerSwipe(isTrue);
  } else {
    swipeDragX.value = 0;
  }
}

function swipeMouseDown(e: MouseEvent) {
  onSwipeStart(e.clientX);
  document.addEventListener('mousemove', swipeMouseMove);
  document.addEventListener('mouseup', swipeMouseUp);
}

function swipeMouseMove(e: MouseEvent) { onSwipeMove(e.clientX); }
function swipeMouseUp() { onSwipeEnd(); document.removeEventListener('mousemove', swipeMouseMove); document.removeEventListener('mouseup', swipeMouseUp); }
function swipeTouchStart(e: TouchEvent) { onSwipeStart(e.touches[0].clientX); }
function swipeTouchMove(e: TouchEvent) { onSwipeMove(e.touches[0].clientX); }
function swipeTouchEnd() { onSwipeEnd(); }

async function answerSwipe(isTrue: boolean) {
  const answers = currentAnswers.value;
  const targetText = isTrue ? 'Doğru' : 'Yanlış';
  const answer = answers.find(a => a.answer_text === targetText) || answers[isTrue ? 0 : 1];
  if (answer) {
    await submitToBackend({ questionId: currentQuestion.value.id, answerId: answer.id });
  }
}

function toggleFillWord(word: string) {
  if (answered.value) return;
  selectedFillWord.value = selectedFillWord.value === word ? '' : word;
}

async function answerFillBlankChip() {
  if (!selectedFillWord.value) return;
  await submitToBackend({ questionId: currentQuestion.value.id, textAnswer: selectedFillWord.value });
}

function nextQuestion() {
  answeredCount.value++;
  if (currentIndex.value >= questions.value.length - 1) {
    energyDepleted.value = false;
    finishQuiz();
    return;
  }
  if (energyDepleted.value) {
    openEnergyDialog();
    return;
  }
  imageLoadError.value = false;
  currentIndex.value++;
  initQuestionState();
}

async function finishQuiz() {
  if (guestMode.value) {
    acornEarned.value = correctCount.value;
    const { addQuizResult, gainAcorns } = useGuestState();
    addQuizResult({
      topicId: guestTopicId.value,
      stepId: guestStepId.value || undefined,
      testId: guestTestId.value || undefined,
      correctCount: correctCount.value,
      totalQuestions: questions.value.length,
    });
    gainAcorns(correctCount.value);
    finished.value = true;
    return;
  }

  const token = getToken();
  const { incrementAcornBalance } = useAcornBalance();
  const answersToSend = [...localAnswers.value];

  try {
    const result = await $fetch<{
      xp_earned: number;
      acorn_earned: number;
      correct_answers: number;
      step_completed: boolean;
      topic_completed: boolean;
    }>(`/api/quiz/${sessionId.value}/finish-bulk`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: { answers: answersToSend, skip_rewards: energyDepleted.value },
    });
    xpEarned.value = result.xp_earned;
    acornEarned.value = result.acorn_earned;
    correctCount.value = result.correct_answers;
    stepCompleted.value = result.step_completed;
    topicCompleted.value = result.topic_completed;
    if (result.acorn_earned > 0) incrementAcornBalance(result.acorn_earned);
    resetAnswers();
  } catch {
    // Network failure — persist to localStorage and sync when online
    savePending(sessionId.value, answersToSend, energyDepleted.value);
    pendingSync.value = true;
  }
  finished.value = true;
}

async function openEnergyDialog() {
  energyEmptyDialog.value = true;
  purchaseError.value = '';
  loadingPackages.value = true;

  if (guestMode.value) {
    const { state: gs } = useGuestState();
    acornBalanceForDialog.value = gs.value.acornBalance;
    try {
      const items = await $fetch<EnergyPackage[]>('/api/store/items');
      energyPackages.value = items.filter((i) => i.item_type === 'energy_refill');
    } catch { energyPackages.value = []; }
    loadingPackages.value = false;
    return;
  }

  const token = getToken();
  // Use the in-memory cached balance immediately so the dialog shows a correct value
  // even if the network request below fails (offline scenario)
  const { acornBalance: cachedAcorn } = useAcornBalance();
  acornBalanceForDialog.value = cachedAcorn.value;
  try {
    const [items, user] = await Promise.all([
      $fetch<EnergyPackage[]>('/api/store/items', { headers: { Authorization: `Bearer ${token}` } }),
      $fetch<{ acorn_balance?: number }>('/api/users/me', { headers: { Authorization: `Bearer ${token}` } }),
    ]);
    energyPackages.value = items.filter((i) => i.item_type === 'energy_refill');
    acornBalanceForDialog.value = user.acorn_balance ?? cachedAcorn.value;
  } catch { /* network offline — keep cached balance, packages will be empty */ }
  loadingPackages.value = false;
}

async function buyEnergyInDialog(pkg: EnergyPackage) {
  purchasingEnergy.value = pkg.id;
  purchaseError.value = '';

  if (guestMode.value) {
    const { spendAcorns, setEnergy } = useGuestState();
    const energyToAdd = (pkg as EnergyPackage & { metadata?: { energy_count?: number } }).metadata?.energy_count ?? 1;
    if (!spendAcorns(pkg.price_acorn)) {
      purchaseError.value = 'Yetersiz palamut.';
      purchasingEnergy.value = null;
      return;
    }
    acornBalanceForDialog.value -= pkg.price_acorn;
    const newEnergy = Math.min(25, energy.value + energyToAdd);
    energy.value = newEnergy;
    setEnergy(newEnergy);
    energyDepleted.value = false;
    energyEmptyDialog.value = false;
    exitWarningDialog.value = false;
    purchasingEnergy.value = null;
    if (currentIndex.value < questions.value.length - 1) {
      currentIndex.value++;
      initQuestionState();
    } else {
      await finishQuiz();
    }
    return;
  }

  const token = getToken();
  try {
    const result = await $fetch<{ balance: number; energy: number }>('/api/store/purchase', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: { itemId: pkg.id, quantity: 1 },
    });
    energy.value = result.energy;
    acornBalanceForDialog.value = result.balance;
    const { setAcornBalance } = useAcornBalance();
    setAcornBalance(result.balance);
    energyDepleted.value = false;
    energyEmptyDialog.value = false;
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
  purchasingEnergy.value = null;
}

function declineEnergyPurchase() {
  energyEmptyDialog.value = false;

  if (finished.value) return;
  if (questions.value.length === 0) {
    router.replace('/');
    return;
  }
  exitWarningDialog.value = true;
}

function continueFromWarning() {
  exitWarningDialog.value = false;
  if (energy.value === 0) {
    openEnergyDialog();
  }
}

function exitQuiz() {
  if (guestMode.value) {
    router.replace('/');
    return;
  }
  const token = getToken();
  // Discard buffered answers — session abandoned without rewards
  resetAnswers();
  $fetch(`/api/quiz/${sessionId.value}/finish-bulk`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: { answers: [], skip_rewards: true },
  }).catch(() => {});
  router.replace('/');
}

function handleClose() {
  if (totalAnswered.value === 0) {
    exitQuiz();
  } else {
    exitWarningDialog.value = true;
  }
}

function restartQuiz() {
  const currentEnergy = guestMode.value
    ? useGuestState().state.value.energyCount
    : energy.value;
  if (currentEnergy <= 0) {
    openEnergyDialog();
    return;
  }

  currentIndex.value = 0;
  answered.value = false;
  finished.value = false;
  energyDepleted.value = false;
  pendingSync.value = false;
  correctCount.value = 0;
  answeredCount.value = 0;
  xpEarned.value = 0;
  acornEarned.value = 0;
  stepCompleted.value = false;
  topicCompleted.value = false;
  totalAnswered.value = 0;
  loading.value = true;
  error.value = '';
  resetAnswers();
  startQuiz();
}

onMounted(() => {
  startQuiz();
  // Sync any sessions that failed to submit in a previous visit
  syncPendingSessions();
  window.addEventListener('online', syncPendingSessions);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', swipeMouseMove);
  document.removeEventListener('mouseup', swipeMouseUp);
  window.removeEventListener('online', syncPendingSessions);
});

function openReportModal() {
  reportReason.value = '';
  reportDescription.value = '';
  reportError.value = '';
  reportSuccess.value = '';
  reportModalOpen.value = true;
}

async function submitReport() {
  if (!reportReason.value || !currentQuestion.value) return;
  reportSubmitting.value = true;
  reportError.value = '';
  reportSuccess.value = '';

  try {
    const token = getToken();
    await $fetch('/api/quiz/report-question', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: {
        questionId: currentQuestion.value.id,
        reason: reportReason.value,
        description: reportDescription.value || undefined,
      },
    });
    reportSuccess.value = 'Rapor gönderildi, teşekkürler!';
    setTimeout(() => { reportModalOpen.value = false; }, 1500);
  } catch (e: unknown) {
    const err = e as { data?: { error?: string; message?: string } };
    reportError.value = err?.data?.error ?? err?.data?.message ?? 'Rapor gönderilemedi.';
  } finally {
    reportSubmitting.value = false;
  }
}
</script>

<style scoped>
/* Make images inside question HTML render as block so text flows below, not beside */
.question-html :deep(img) {
  display: block;
  margin-top: 0.375rem;
  margin-bottom: 0.375rem;
  max-width: 100%;
}
</style>
