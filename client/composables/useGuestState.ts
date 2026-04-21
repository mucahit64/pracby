interface GuestQuizResult {
  topicId: string;
  stepId?: string;
  testId?: string;
  correctCount: number;
  totalQuestions: number;
}

interface GuestState {
  examTypeId: string | null;
  examGroupId: string | null;
  quizResults: GuestQuizResult[];
  acornBalance: number;
  heartsCount: number;
  heartsRefreshedAt: number | null;
}

const STORAGE_KEY = 'guestState';
const MAX_HEARTS = 5;
const REGEN_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes per heart

function applyHeartRegen(state: GuestState): GuestState {
  if (state.heartsCount >= MAX_HEARTS || !state.heartsRefreshedAt) return state;
  const elapsed = Date.now() - state.heartsRefreshedAt;
  const heartsToAdd = Math.floor(elapsed / REGEN_INTERVAL_MS);
  if (heartsToAdd <= 0) return state;
  const newHearts = Math.min(MAX_HEARTS, state.heartsCount + heartsToAdd);
  const newRefreshedAt = newHearts >= MAX_HEARTS
    ? null
    : state.heartsRefreshedAt + heartsToAdd * REGEN_INTERVAL_MS;
  return { ...state, heartsCount: newHearts, heartsRefreshedAt: newRefreshedAt };
}

function loadState(): GuestState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const state: GuestState = {
        ...parsed,
        acornBalance: parsed.acornBalance ?? 500,
        heartsCount: parsed.heartsCount ?? 5,
        heartsRefreshedAt: parsed.heartsRefreshedAt ?? null,
      };
      return applyHeartRegen(state);
    }
  } catch { /* ignore */ }
  return {
    examTypeId: localStorage.getItem('guestExamTypeId'),
    examGroupId: localStorage.getItem('guestExamGroupId'),
    quizResults: [],
    acornBalance: 500,
    heartsCount: 5,
    heartsRefreshedAt: null,
  };
}

function saveState(state: GuestState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useGuestState() {
  const state = ref<GuestState>(loadState());

  function addQuizResult(result: GuestQuizResult) {
    state.value.quizResults.push(result);
    saveState(state.value);
  }

  function spendAcorns(amount: number): boolean {
    if (state.value.acornBalance < amount) return false;
    state.value.acornBalance -= amount;
    saveState(state.value);
    return true;
  }

  function gainAcorns(amount: number) {
    state.value.acornBalance += amount;
    saveState(state.value);
  }

  function setHearts(count: number) {
    const clamped = Math.max(0, Math.min(MAX_HEARTS, count));
    const wasAtMax = state.value.heartsCount >= MAX_HEARTS;
    const nowAtMax = clamped >= MAX_HEARTS;

    if (nowAtMax) {
      state.value.heartsRefreshedAt = null;
    } else if (wasAtMax && !nowAtMax) {
      // Hearts just dropped below max — start the regen timer
      state.value.heartsRefreshedAt = Date.now();
    } else if (!state.value.heartsRefreshedAt) {
      // Hearts were already below max but no timer set (e.g. first load after losing hearts)
      state.value.heartsRefreshedAt = Date.now();
    }

    state.value.heartsCount = clamped;
    saveState(state.value);
  }

  function getNextHeartAt(): Date | null {
    if (state.value.heartsCount >= MAX_HEARTS || !state.value.heartsRefreshedAt) return null;
    return new Date(state.value.heartsRefreshedAt + REGEN_INTERVAL_MS);
  }

  function refreshHearts() {
    const updated = applyHeartRegen(state.value);
    state.value.heartsCount = updated.heartsCount;
    state.value.heartsRefreshedAt = updated.heartsRefreshedAt;
    saveState(state.value);
  }

  /**
   * Overlay guest quiz results onto an array of topics fetched from the API.
   * Called after any course/topic fetch when the user has no auth token.
   * Mutates `topics` in-place so that `step.progress` reflects completed tests.
   */
  function overlayGuestProgress(topics: Array<{
    progress?: object | null;
    steps?: Array<{
      id: string;
      step_type: string;
      tests_required?: number;
      progress?: object | null;
    }>;
  }>) {
    const results = state.value.quizResults;
    for (const topic of topics) {
      if (!topic.progress) topic.progress = { is_unlocked: true };
      for (const step of topic.steps ?? []) {
        if (step.step_type === 'reward' || step.progress) continue;
        const completedTestIds = new Set(
          results.filter((r) => r.stepId === step.id && r.testId).map((r) => r.testId!),
        );
        const testsCompleted = completedTestIds.size;
        const isCompleted = testsCompleted >= (step.tests_required ?? 1);
        step.progress = {
          tests_completed: testsCompleted,
          is_step_completed: isCompleted,
          step_final_passed: false,
          stars: 0,
        };
      }
    }
  }

  function getRegistrationPayload() {
    return {
      exam_type_id: state.value.examTypeId,
      acorn_balance: state.value.acornBalance,
      hearts: state.value.heartsCount,
      guest_data: {
        quiz_results: state.value.quizResults,
      },
    };
  }

  function clearGuestState() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('guestExamTypeId');
    localStorage.removeItem('guestExamGroupId');
    state.value = { examTypeId: null, examGroupId: null, quizResults: [], acornBalance: 500, heartsCount: 5, heartsRefreshedAt: null };
  }

  const isGuest = computed(() => !localStorage.getItem('pb_token'));

  return {
    state: readonly(state),
    isGuest,
    addQuizResult,
    overlayGuestProgress,
    spendAcorns,
    gainAcorns,
    setHearts,
    getNextHeartAt,
    refreshHearts,
    getRegistrationPayload,
    clearGuestState,
  };
}
