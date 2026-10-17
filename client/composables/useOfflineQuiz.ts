const STORAGE_KEY = "pb_pending_quiz";
const REPORTS_KEY = "pb_pending_reports";

// Shared by every page using this composable.
let reportSync: Promise<void> | null = null;
let reportSyncAgain = false;

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

/** A question report made offline; `guestId` set for guests (docs 9.2). */
export interface PendingReport {
  questionId: string;
  reason: string;
  description?: string;
  guestId?: string;
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

  function savePendingReport(report: PendingReport) {
    if (import.meta.server) return;
    localStorage.setItem(REPORTS_KEY, JSON.stringify([...loadPendingReports(), report]));
  }

  function loadPendingReports(): PendingReport[] {
    if (import.meta.server) return [];
    try {
      const raw = localStorage.getItem(REPORTS_KEY);
      return raw ? (JSON.parse(raw) as PendingReport[]) : [];
    } catch {
      return [];
    }
  }

  /** Sends reports queued offline. Ones rejected by the server (e.g. 409 already
   *  reported) are dropped; ones that fail for lack of connection stay queued.
   *  Calls made while a sync runs (e.g. several `online` events) wait for it and
   *  then sync once more, so an earlier failed attempt can't restore sent reports. */
  function syncPendingReports(): Promise<void> {
    if (import.meta.server) return Promise.resolve();
    if (reportSync) {
      reportSyncAgain = true;
      return reportSync;
    }
    reportSync = (async () => {
      do {
        reportSyncAgain = false;
        await syncReportsOnce();
      } while (reportSyncAgain);
    })().finally(() => {
      reportSync = null;
    });
    return reportSync;
  }

  async function syncReportsOnce() {
    const pending = loadPendingReports();
    if (pending.length === 0) return;
    const token = localStorage.getItem("pb_token");
    const done = new Set<string>(); // sent or rejected for good
    for (const report of pending) {
      const { guestId, ...body } = report;
      if (!guestId && !token) continue; // a member's report: wait for login
      try {
        await $fetch(guestId ? "/api/quiz/guest-report-question" : "/api/quiz/report-question", {
          method: "POST",
          headers: guestId ? {} : { Authorization: `Bearer ${token}` },
          body: guestId ? { ...body, guestId } : body,
        });
        done.add(JSON.stringify(report));
      } catch (e) {
        const status = (e as { status?: number })?.status;
        if (status && status < 500 && status !== 429) done.add(JSON.stringify(report));
      }
    }
    // Re-read: reports added while this ran must stay.
    const remaining = loadPendingReports().filter((r) => !done.has(JSON.stringify(r)));
    if (remaining.length > 0) localStorage.setItem(REPORTS_KEY, JSON.stringify(remaining));
    else localStorage.removeItem(REPORTS_KEY);
  }

  return {
    savePendingReport,
    loadPendingReports,
    syncPendingReports,
    localAnswers,
    addAnswer,
    resetAnswers,
    savePending,
    loadPending,
    clearPending,
    syncPendingSessions,
  };
}
