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
}

const STORAGE_KEY = 'guestState';

function loadState(): GuestState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...parsed,
        acornBalance: parsed.acornBalance ?? 500,
        heartsCount: parsed.heartsCount ?? 5,
      };
    }
  } catch { /* ignore */ }
  return {
    examTypeId: localStorage.getItem('guestExamTypeId'),
    examGroupId: localStorage.getItem('guestExamGroupId'),
    quizResults: [],
    acornBalance: 500,
    heartsCount: 5,
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
    state.value.heartsCount = Math.max(0, Math.min(5, count));
    saveState(state.value);
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
    state.value = { examTypeId: null, examGroupId: null, quizResults: [], acornBalance: 500, heartsCount: 5 };
  }

  const isGuest = computed(() => !localStorage.getItem('pb_token'));

  return {
    state: readonly(state),
    isGuest,
    addQuizResult,
    spendAcorns,
    gainAcorns,
    setHearts,
    getRegistrationPayload,
    clearGuestState,
  };
}
