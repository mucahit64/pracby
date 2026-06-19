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
  claimedRewardStepIds: string[];
  acornBalance: number;
  energyCount: number;
  energyRefreshedAt: number | null;
}

const STORAGE_KEY = 'guestState';
const MAX_ENERGY = 25;
const REGEN_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes per energy

function applyEnergyRegen(state: GuestState): GuestState {
  if (state.energyCount >= MAX_ENERGY || !state.energyRefreshedAt) return state;
  const elapsed = Date.now() - state.energyRefreshedAt;
  const energyToAdd = Math.floor(elapsed / REGEN_INTERVAL_MS);
  if (energyToAdd <= 0) return state;
  const newEnergy = Math.min(MAX_ENERGY, state.energyCount + energyToAdd);
  const newRefreshedAt = newEnergy >= MAX_ENERGY
    ? null
    : state.energyRefreshedAt + energyToAdd * REGEN_INTERVAL_MS;
  return { ...state, energyCount: newEnergy, energyRefreshedAt: newRefreshedAt };
}

function loadState(): GuestState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const state: GuestState = {
        ...parsed,
        claimedRewardStepIds: parsed.claimedRewardStepIds ?? [],
        acornBalance: parsed.acornBalance ?? 500,
        energyCount: parsed.energyCount ?? 25,
        energyRefreshedAt: parsed.energyRefreshedAt ?? null,
      };
      return applyEnergyRegen(state);
    }
  } catch { /* ignore */ }
  return {
    examTypeId: localStorage.getItem('guestExamTypeId'),
    examGroupId: localStorage.getItem('guestExamGroupId'),
    quizResults: [],
    claimedRewardStepIds: [],
    acornBalance: 500,
    energyCount: 25,
    energyRefreshedAt: null,
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

  function setEnergy(count: number) {
    const clamped = Math.max(0, Math.min(MAX_ENERGY, count));
    const wasAtMax = state.value.energyCount >= MAX_ENERGY;
    const nowAtMax = clamped >= MAX_ENERGY;

    if (nowAtMax) {
      state.value.energyRefreshedAt = null;
    } else if (wasAtMax && !nowAtMax) {
      // Energy just dropped below max — start the regen timer
      state.value.energyRefreshedAt = Date.now();
    } else if (!state.value.energyRefreshedAt) {
      // Energy was already below max but no timer set
      state.value.energyRefreshedAt = Date.now();
    }

    state.value.energyCount = clamped;
    saveState(state.value);
  }

  function getNextEnergyAt(): Date | null {
    if (state.value.energyCount >= MAX_ENERGY || !state.value.energyRefreshedAt) return null;
    return new Date(state.value.energyRefreshedAt + REGEN_INTERVAL_MS);
  }

  function refreshEnergy() {
    const updated = applyEnergyRegen(state.value);
    state.value.energyCount = updated.energyCount;
    state.value.energyRefreshedAt = updated.energyRefreshedAt;
    saveState(state.value);
  }

  /**
   * Overlay guest quiz results onto an array of topics fetched from the API.
   * Called after any course/topic fetch when the user has no auth token.
   * Mutates `topics` in-place so that `step.progress` reflects completed steps.
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
    const claimedRewards = state.value.claimedRewardStepIds;
    for (const topic of topics) {
      if (!topic.progress) topic.progress = { is_unlocked: true };
      for (const step of topic.steps ?? []) {
        if (step.progress) continue;
        if (step.step_type === 'reward') {
          const isClaimed = claimedRewards.includes(step.id);
          step.progress = {
            tests_completed: 0,
            is_step_completed: isClaimed,
            step_final_passed: false,
          };
        } else {
          const stepResults = results.filter((r) => r.stepId === step.id);
          const hasResult = stepResults.length > 0;
          const bestScore = hasResult
            ? Math.max(...stepResults.map((r) => r.totalQuestions > 0 ? Math.round((r.correctCount / r.totalQuestions) * 100) : 0))
            : 0;
          step.progress = {
            tests_completed: hasResult ? 1 : 0,
            is_step_completed: hasResult,
            step_final_passed: hasResult,
            best_score: bestScore,
          };
        }
      }
    }
  }

  function claimReward(stepId: string, amount: number) {
    if (state.value.claimedRewardStepIds.includes(stepId)) return;
    state.value.claimedRewardStepIds.push(stepId);
    state.value.acornBalance += amount;
    saveState(state.value);
  }

  function getRegistrationPayload() {
    return {
      exam_type_id: state.value.examTypeId,
      acorn_balance: state.value.acornBalance,
      energy: state.value.energyCount,
      guest_data: {
        quiz_results: state.value.quizResults,
        claimed_reward_step_ids: state.value.claimedRewardStepIds,
      },
    };
  }

  function clearGuestState() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('guestExamTypeId');
    localStorage.removeItem('guestExamGroupId');
    state.value = { examTypeId: null, examGroupId: null, quizResults: [], claimedRewardStepIds: [], acornBalance: 500, energyCount: 25, energyRefreshedAt: null };
  }

  const isGuest = computed(() => !localStorage.getItem('pb_token'));

  return {
    state: readonly(state),
    isGuest,
    addQuizResult,
    overlayGuestProgress,
    claimReward,
    spendAcorns,
    gainAcorns,
    setEnergy,
    getNextEnergyAt,
    refreshEnergy,
    getRegistrationPayload,
    clearGuestState,
  };
}
