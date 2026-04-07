import db from "../../db/knex";
import { AppError } from "../../middleware/error";
import type { StartQuizInput, AnswerInput } from "./quiz.schema";

export const startSession = async (userId: string, input: StartQuizInput) => {
  const topic = await db("topics").where({ id: input.topicId }).first();
  if (!topic) throw new AppError(404, "Topic not found");

  const questions = await db("questions")
    .where({ topic_id: input.topicId, status: "approved" })
    .orderByRaw("RANDOM()")
    .limit(20);

  if (questions.length === 0) throw new AppError(404, "No questions available for this topic");

  const [session] = await db("quiz_sessions")
    .insert({
      user_id: userId,
      topic_id: input.topicId,
      session_type: input.sessionType,
      total_questions: questions.length,
    })
    .returning("*");

  return { session, questions };
};

export const submitAnswer = async (
  userId: string,
  sessionId: string,
  input: AnswerInput,
) => {
  const session = await db("quiz_sessions").where({ id: sessionId, user_id: userId }).first();
  if (!session) throw new AppError(404, "Session not found");
  if (session.finished_at) throw new AppError(400, "Session already finished");

  let isCorrect = false;
  if (!input.isSkipped && input.answerId) {
    const answer = await db("answers").where({ id: input.answerId }).first();
    isCorrect = Boolean(answer?.is_correct);
  }

  await db("user_answers").insert({
    session_id: sessionId,
    question_id: input.questionId,
    answer_id: input.answerId ?? null,
    is_correct: isCorrect,
    time_spent: input.timeSpent ?? null,
    is_skipped: input.isSkipped,
  });

  return { isCorrect };
};

export const finishSession = async (userId: string, sessionId: string) => {
  const session = await db("quiz_sessions").where({ id: sessionId, user_id: userId }).first();
  if (!session) throw new AppError(404, "Session not found");
  if (session.finished_at) throw new AppError(400, "Session already finished");

  const answers = await db("user_answers").where({ session_id: sessionId });
  const correctCount = answers.filter((a) => a.is_correct).length;
  const totalSeconds = Math.round(
    (Date.now() - new Date(session.started_at as string).getTime()) / 1000,
  );

  const correctAnswerIds = answers.filter((a) => a.is_correct).map((a) => a.question_id);
  let xpEarned = 0;
  if (correctAnswerIds.length > 0) {
    const questions = await db("questions").whereIn("id", correctAnswerIds).select("point_value");
    xpEarned = questions.reduce((sum, q) => sum + (Number(q.point_value) || 1), 0);
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

  await db("user_stats").where({ user_id: userId }).increment("xp", xpEarned);
  await db("user_stats").where({ user_id: userId }).increment("total_xp", xpEarned);

  return updated;
};
