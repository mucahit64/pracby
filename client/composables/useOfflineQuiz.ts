const STORAGE_KEY = "pb_pending_quiz";

export interface LocalAnswer {
  questionId: string;
  answerId?: string;
  isSkipped: boolean;
  timeSpent?: number;
  answeredAt: string; // ISO timestamp captured at the moment of answering
  textAnswer?: string;
  matchingAnswer?: { leftIndex: number; rightIndex: number }[];
  orderedIndices?: number[];
  isCorrect?: boolean;
}

export interface PendingSession {
  sessionId: string;
  answers: LocalAnswer[];
  savedAt: string;
  skipRewards: boolean;
}

export function useOfflineQuiz() {
  const localAnswers = ref<LocalAnswer[]>([]);

  function addAnswer(record: LocalAnswer) {
    localAnswers.value.push(record);
  }

  function resetAnswers() {
    localAnswers.value = [];
  }

  function savePending(sessionId: string, answers: LocalAnswer[], skipRewards: boolean) {
    if (import.meta.server) return;
    const existing = loadPending();
    // Replace if same sessionId already exists (retry scenario)
    const filtered = existing.filter((p) => p.sessionId !== sessionId);
    const entry: PendingSession = { sessionId, answers, savedAt: new Date().toISOString(), skipRewards };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...filtered, entry]));
  }

  function loadPending(): PendingSession[] {
    if (import.meta.server) return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as PendingSession[]) : [];
    } catch {
      return [];
    }
  }

  function clearPending(sessionId: string) {
    if (import.meta.server) return;
    const updated = loadPending().filter((p) => p.sessionId !== sessionId);
    if (updated.length === 0) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  }

  async function syncPendingSessions() {
    if (import.meta.server) return;
    const token = localStorage.getItem("pb_token");
    if (!token) return;

    const pending = loadPending();
    if (pending.length === 0) return;

    for (const session of pending) {
      try {
        await $fetch(`/api/quiz/${session.sessionId}/finish-bulk`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: {
            answers: session.answers,
            skip_rewards: session.skipRewards,
          },
        });
        clearPending(session.sessionId);
      } catch {
        // Network still down or server error — leave in localStorage, retry next time
      }
    }
  }

  return {
    localAnswers,
    addAnswer,
    resetAnswers,
    savePending,
    loadPending,
    clearPending,
    syncPendingSessions,
  };
}
