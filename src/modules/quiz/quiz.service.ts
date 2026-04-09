import db from "../../db/knex";
import { AppError } from "../../middleware/error";
import type { StartQuizInput, AnswerInput } from "./quiz.schema";
import { regenerateHearts } from "../user/user.service";

// Normal test: fixed 10 questions from a specific test record
// Step final: 15 questions from all tests in the step (2×d1, 7×d2, 6×d3)
// Topic final: 15 questions from all steps in the topic (2×d1, 7×d2, 6×d3)
const STEP_FINAL_DISTRIBUTION = [
  { difficulty: 1, count: 2 },
  { difficulty: 2, count: 7 },
  { difficulty: 3, count: 6 },
];

const TOPIC_FINAL_DISTRIBUTION = STEP_FINAL_DISTRIBUTION;

async function fetchQuestionsForFinal(
  filterColumn: string,
  filterValue: string,
  distribution: { difficulty: number; count: number }[],
) {
  const allQuestions = [];
  for (const { difficulty, count } of distribution) {
    const qs = await db("questions")
      .where(filterColumn, filterValue)
      .where({ status: "approved", difficulty })
      .orderByRaw("RANDOM()")
      .limit(count);
    allQuestions.push(...qs);
  }
  return allQuestions;
}

export const startSession = async (userId: string, input: StartQuizInput) => {
  const topic = await db("topics").where({ id: input.topicId }).first();
  if (!topic) throw new AppError(404, "Topic not found");

  // Regenerate hearts and check if user can start
  await regenerateHearts(userId);
  const user = await db("users").where({ id: userId }).select("hearts").first();
  const unlimitedLives = await db("user_active_effects")
    .where({ user_id: userId, item_type: "unlimited_lives" })
    .where("expires_at", ">", db.fn.now())
    .first();
  if (!unlimitedLives && (user?.hearts ?? 0) <= 0) {
    throw new AppError(403, "Canın kalmadı! Kalplerin yenilenmesini bekle veya marketten satın al.");
  }

  const isFinal = input.sessionType === "step_final" || input.sessionType === "topic_final";

  let questions;

  if (input.sessionType === "topic_final") {
    // Topic final: questions from all steps, mixed by difficulty
    questions = await fetchQuestionsForFinal("topic_id", input.topicId, TOPIC_FINAL_DISTRIBUTION);
  } else if (input.sessionType === "step_final" && input.stepId) {
    if (input.testId) {
      // Boss test: static questions from a specific final test
      questions = await db("questions")
        .where({ test_id: input.testId, status: "approved" })
        .orderBy("sort_order", "asc");
    } else {
      // Step final: questions from all tests in this step, mixed by difficulty
      questions = await fetchQuestionsForFinal("step_id", input.stepId, STEP_FINAL_DISTRIBUTION);
    }
  } else if (input.testId) {
    // Normal test: fixed questions from this specific test, ordered by sort_order
    questions = await db("questions")
      .where({ test_id: input.testId, status: "approved" })
      .orderBy("sort_order", "asc");
  } else if (input.stepId) {
    // Fallback: all questions from step (shouldn't normally happen if testId is provided)
    questions = await db("questions")
      .where({ step_id: input.stepId, status: "approved" })
      .orderByRaw("RANDOM()")
      .limit(10);
  } else {
    // Fallback: topic-level questions (backwards compatible)
    questions = await db("questions")
      .where({ topic_id: input.topicId, status: "approved" })
      .orderByRaw("RANDOM()")
      .limit(10);
  }

  if (questions.length === 0) throw new AppError(404, "No questions available");

  // Fetch answers for multiple_choice and true_false questions
  const mcQuestionIds = questions
    .filter((q) => q.question_type === "multiple_choice" || q.question_type === "true_false" || q.question_type === "swipe")
    .map((q) => q.id);

  const answers = mcQuestionIds.length > 0
    ? await db("answers").whereIn("question_id", mcQuestionIds).select("id", "question_id", "answer_text")
    : [];

  const answersByQuestion = new Map<string, typeof answers>();
  for (const a of answers) {
    const list = answersByQuestion.get(a.question_id) ?? [];
    list.push(a);
    answersByQuestion.set(a.question_id, list);
  }

  const questionsWithAnswers = questions.map((q) => ({
    ...q,
    answers: answersByQuestion.get(q.id) ?? [],
  }));

  const [session] = await db("quiz_sessions")
    .insert({
      user_id: userId,
      topic_id: input.topicId,
      step_id: input.stepId ?? null,
      test_id: input.testId ?? null,
      session_type: input.sessionType,
      is_final_test: isFinal,
      total_questions: questions.length,
    })
    .returning("*");

  return { session, questions: questionsWithAnswers };
};

export const submitAnswer = async (
  userId: string,
  sessionId: string,
  input: AnswerInput,
) => {
  const session = await db("quiz_sessions").where({ id: sessionId, user_id: userId }).first();
  if (!session) throw new AppError(404, "Session not found");
  if (session.finished_at) throw new AppError(400, "Session already finished");

  const question = await db("questions").where({ id: input.questionId }).first();
  if (!question) throw new AppError(404, "Question not found");

  let isCorrect = false;

  if (!input.isSkipped) {
    switch (question.question_type) {
      case "swipe":
      case "multiple_choice":
      case "true_false": {
        if (input.answerId) {
          const answer = await db("answers").where({ id: input.answerId }).first();
          isCorrect = Boolean(answer?.is_correct);
        }
        break;
      }
      case "fill_blank": {
        if (input.textAnswer && question.type_data) {
          const acceptable: string[] = question.type_data.acceptable_answers ?? [];
          const userAnswer = input.textAnswer.trim().toLowerCase();
          isCorrect = acceptable.some((a: string) => a.trim().toLowerCase() === userAnswer);
        }
        break;
      }
      case "matching": {
        if (input.matchingAnswer && question.type_data) {
          const pairs: { left: string; right: string }[] = question.type_data.pairs ?? [];
          if (input.matchingAnswer.length === pairs.length) {
            isCorrect = input.matchingAnswer.every((ma) => {
              const pair = pairs[ma.leftIndex];
              const matchedPair = pairs[ma.rightIndex];
              return pair && matchedPair && pair.right === pairs[ma.leftIndex]?.right
                && ma.rightIndex === ma.leftIndex; // user must match left[i] to right[i]
            });
          }
        }
        break;
      }
      case "ordering": {
        if (input.orderedIndices && question.type_data) {
          const items: { text: string; position: number }[] = question.type_data.items ?? [];
          const correctOrder = items
            .slice()
            .sort((a, b) => a.position - b.position)
            .map((_, idx) => idx);
          isCorrect =
            input.orderedIndices.length === correctOrder.length &&
            input.orderedIndices.every((val, idx) => val === correctOrder[idx]);
        }
        break;
      }
      case "flashcard": {
        // Client-side evaluation: user swipes right (knows) or left (doesn't know)
        isCorrect = Boolean(input.isCorrect);
        break;
      }
      default: {
        // Fallback to multiple_choice behavior
        if (input.answerId) {
          const answer = await db("answers").where({ id: input.answerId }).first();
          isCorrect = Boolean(answer?.is_correct);
        }
        break;
      }
    }
  }

  await db("user_answers").insert({
    session_id: sessionId,
    question_id: input.questionId,
    answer_id: input.answerId ?? null,
    is_correct: isCorrect,
    time_spent: input.timeSpent ?? null,
    is_skipped: input.isSkipped,
  });

  // Deduct a heart on wrong answer (unless user has unlimited_lives active effect)
  if (!isCorrect && !input.isSkipped) {
    await regenerateHearts(userId);
    const unlimitedLives = await db("user_active_effects")
      .where({ user_id: userId, item_type: "unlimited_lives" })
      .where("expires_at", ">", db.fn.now())
      .first();

    if (!unlimitedLives) {
      await db("users").where({ id: userId }).where("hearts", ">", 0).decrement("hearts", 1);
      await db("quiz_sessions").where({ id: sessionId }).increment("hearts_lost", 1);
    }
  }

  const user = await db("users").where({ id: userId }).select("hearts").first();

  return { isCorrect, hearts_remaining: user?.hearts ?? 0 };
};

export const finishSession = async (userId: string, sessionId: string, skipRewards = false) => {
  const session = await db("quiz_sessions").where({ id: sessionId, user_id: userId }).first();
  if (!session) throw new AppError(404, "Session not found");
  if (session.finished_at) throw new AppError(400, "Session already finished");

  const answers = await db("user_answers").where({ session_id: sessionId });
  const correctCount = answers.filter((a) => a.is_correct).length;
  const totalSeconds = Math.round(
    (Date.now() - new Date(session.started_at as string).getTime()) / 1000,
  );

  let xpEarned = 0;
  let acornEarned = 0;

  if (!skipRewards) {
    // Calculate XP
    const correctAnswerIds = answers.filter((a) => a.is_correct).map((a) => a.question_id);
    if (correctAnswerIds.length > 0) {
      const questions = await db("questions").whereIn("id", correctAnswerIds).select("point_value");
      xpEarned = questions.reduce((sum, q) => sum + (Number(q.point_value) || 1), 0);
    }

    // Calculate acorn earnings (1 per correct answer)
    acornEarned = correctCount;
  }

  const [updated] = await db("quiz_sessions")
    .where({ id: sessionId })
    .update({
      finished_at: db.fn.now() as unknown as string,
      correct_answers: correctCount,
      xp_earned: xpEarned,
      duration: totalSeconds,
    })
    .returning("*");

  // Update XP, streak, acorn — skipped if hearts depleted
  if (!skipRewards) {
    await db("user_stats").where({ user_id: userId }).increment("xp", xpEarned);
    await db("user_stats").where({ user_id: userId }).increment("total_xp", xpEarned);
    await db("user_stats").where({ user_id: userId }).increment("quizzes_completed", 1);

    // Update streak
    const today = new Date().toISOString().split("T")[0];
    const currentStats = await db("user_stats").where({ user_id: userId }).first();
    const lastActive = currentStats?.last_active_date
      ? (currentStats.last_active_date instanceof Date
          ? currentStats.last_active_date.toISOString().split("T")[0]
          : String(currentStats.last_active_date).split("T")[0])
      : null;
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

    let newStreak = currentStats?.current_streak ?? 0;
    if (lastActive !== today) {
      newStreak = lastActive === yesterday ? newStreak + 1 : 1;
      const newMaxStreak = Math.max(newStreak, currentStats?.max_streak ?? 0);
      await db("user_stats").where({ user_id: userId }).update({
        current_streak: newStreak,
        streak: newStreak,
        max_streak: newMaxStreak,
        last_active_date: today,
      });
      // Upsert streak_history
      const existing = await db("streak_history").where({ user_id: userId, date: today }).first();
      if (!existing) {
        await db("streak_history").insert({ user_id: userId, date: today, xp_earned: xpEarned, quizzes_completed: 1 });
      } else {
        await db("streak_history").where({ user_id: userId, date: today })
          .increment("xp_earned", xpEarned).increment("quizzes_completed", 1);
      }
    } else {
      // Same day — just increment streak_history
      const existing = await db("streak_history").where({ user_id: userId, date: today }).first();
      if (!existing) {
        await db("streak_history").insert({ user_id: userId, date: today, xp_earned: xpEarned, quizzes_completed: 1 });
      } else {
        await db("streak_history").where({ user_id: userId, date: today })
          .increment("xp_earned", xpEarned).increment("quizzes_completed", 1);
      }
    }

    // Update acorn balance
    if (acornEarned > 0) {
      await db("users").where({ id: userId }).increment("acorn_balance", acornEarned);
      await db("acorn_transactions").insert({
        user_id: userId,
        amount: acornEarned,
        type: "earned_quiz",
        reference_id: sessionId,
      });
    }
  }

  // Update step progress
  let stepCompleted = false;
  let topicCompleted = false;

  if (session.step_id && !skipRewards) {
    const step = await db("steps").where({ id: session.step_id }).first();

    // Upsert user_step_progress
    const existing = await db("user_step_progress")
      .where({ user_id: userId, step_id: session.step_id })
      .first();

    if (existing) {
      const newTestsCompleted = existing.tests_completed + 1;
      const isCompleted = newTestsCompleted >= (step?.tests_required ?? 5);
      const isFinalPassed = session.is_final_test ? true : existing.step_final_passed;

      await db("user_step_progress")
        .where({ id: existing.id })
        .update({
          tests_completed: newTestsCompleted,
          is_step_completed: isCompleted && isFinalPassed,
          step_final_passed: isFinalPassed,
          ...(isCompleted && isFinalPassed ? { completed_at: db.fn.now() } : {}),
        });

      stepCompleted = isCompleted && isFinalPassed;
    } else {
      await db("user_step_progress").insert({
        user_id: userId,
        step_id: session.step_id,
        tests_completed: 1,
        is_step_completed: false,
        step_final_passed: Boolean(session.is_final_test),
      });
    }

    // Check if all steps in topic are completed
    if (stepCompleted && step) {
      const allSteps = await db("steps").where({ topic_id: step.topic_id });
      const completedSteps = await db("user_step_progress")
        .where({ user_id: userId, is_step_completed: true })
        .whereIn("step_id", allSteps.map((s) => s.id));

      topicCompleted = completedSteps.length === allSteps.length;
    }
  }

  // Check and grant achievements
  await checkAndGrantAchievements(userId, {
    correctCount,
    totalQuestions: answers.length,
    sessionId,
  });

  return {
    ...updated,
    acorn_earned: acornEarned,
    step_completed: stepCompleted,
    topic_completed: topicCompleted,
  };
};

async function checkAndGrantAchievements(
  userId: string,
  sessionResult: { correctCount: number; totalQuestions: number; sessionId: string },
) {
  const achievements = await db("achievements");
  const userAchievements = await db("user_achievements").where({ user_id: userId });
  const earnedIds = new Set(userAchievements.map((ua) => ua.achievement_id));

  const stats = await db("user_stats").where({ user_id: userId }).first();
  const totalQuizzes = await db("quiz_sessions")
    .where({ user_id: userId })
    .whereNotNull("finished_at")
    .count("id as count")
    .first();

  const quizzesCompleted = Number(totalQuizzes?.count ?? 0);
  const accuracy = sessionResult.totalQuestions > 0
    ? sessionResult.correctCount / sessionResult.totalQuestions
    : 0;

  const newlyEarned: string[] = [];

  for (const achievement of achievements) {
    if (earnedIds.has(achievement.id)) continue;

    let qualified = false;

    switch (achievement.requirement_type) {
      case "quiz_accuracy":
        qualified = accuracy >= achievement.requirement_value / 100;
        break;
      case "quiz_perfect":
        qualified = accuracy === 1 && sessionResult.totalQuestions >= achievement.requirement_value;
        break;
      case "quizzes_completed":
        qualified = quizzesCompleted >= achievement.requirement_value;
        break;
      case "streak_days":
        qualified = (stats?.current_streak ?? 0) >= achievement.requirement_value;
        break;
      case "total_xp":
        qualified = (stats?.total_xp ?? 0) >= achievement.requirement_value;
        break;
      case "friends_count": {
        const friendCount = await db("friendships")
          .where({ user_id: userId, status: "accepted" })
          .count("id as count")
          .first();
        qualified = Number(friendCount?.count ?? 0) >= achievement.requirement_value;
        break;
      }
    }

    if (qualified) {
      newlyEarned.push(achievement.id);
    }
  }

  if (newlyEarned.length > 0) {
    await db("user_achievements").insert(
      newlyEarned.map((achievementId) => ({
        user_id: userId,
        achievement_id: achievementId,
      })),
    );

    // Award acorn for each new achievement
    const acornPerAchievement = 5;
    const totalAcorn = newlyEarned.length * acornPerAchievement;

    await db("users").where({ id: userId }).increment("acorn_balance", totalAcorn);

    for (const achievementId of newlyEarned) {
      await db("acorn_transactions").insert({
        user_id: userId,
        amount: acornPerAchievement,
        type: "earned_achievement",
        reference_id: achievementId,
      });
    }
  }
}

export const claimReward = async (userId: string, stepId: string) => {
  const step = await db("steps").where({ id: stepId, step_type: "reward" }).first();
  if (!step) throw new AppError(404, "Reward step not found");

  // Check if already claimed
  const existing = await db("user_reward_claims")
    .where({ user_id: userId, step_id: stepId })
    .first();
  if (existing) throw new AppError(400, "Reward already claimed");

  // Check if previous step is completed (user has earned access to this reward)
  const allSteps = await db("steps")
    .where({ topic_id: step.topic_id })
    .orderBy("sort_order", "asc");

  const stepIndex = allSteps.findIndex((s) => s.id === stepId);
  if (stepIndex > 0) {
    const previousStep = allSteps[stepIndex - 1];
    if (previousStep.step_type === "lesson") {
      const progress = await db("user_step_progress")
        .where({ user_id: userId, step_id: previousStep.id, is_step_completed: true })
        .first();
      if (!progress) throw new AppError(403, "Previous step not completed");
    }
  }

  return db.transaction(async (trx) => {
    // Record claim
    await trx("user_reward_claims").insert({ user_id: userId, step_id: stepId });

    let reward: { type: string; amount?: number; itemName?: string } = { type: "none" };

    if (step.reward_type === "acorn" && step.reward_amount) {
      await trx("users").where({ id: userId }).increment("acorn_balance", step.reward_amount);
      await trx("acorn_transactions").insert({
        user_id: userId,
        amount: step.reward_amount,
        type: "earned_quiz",
        reference_id: stepId,
      });
      reward = { type: "acorn", amount: step.reward_amount };
    } else if (step.reward_type === "store_item" && step.reward_item_id) {
      const item = await trx("store_items").where({ id: step.reward_item_id }).first();
      if (item) {
        const existingItem = await trx("user_items")
          .where({ user_id: userId, item_id: step.reward_item_id })
          .first();
        if (existingItem) {
          await trx("user_items").where({ id: existingItem.id }).increment("quantity", 1);
        } else {
          await trx("user_items").insert({
            user_id: userId,
            item_id: step.reward_item_id,
            quantity: 1,
          });
        }
        reward = { type: "store_item", itemName: item.name };
      }
    }

    return reward;
  });
};
