import db from "../../db/knex";
import { AppError } from "../../middleware/error";
import type {
  CreateQuestionInput,
  UpdateQuestionInput,
  BulkCreateQuestionsInput,
  CreateTopicInput,
  UpdateTopicInput,
  CreateStepInput,
  CreateTestInput,
} from "./admin.schema";

// ── Questions ──────────────────────────────────────────

export const listQuestions = async (filters: {
  topic_id?: string;
  step_id?: string;
  test_id?: string;
  question_type?: string;
  status?: string;
  page?: number;
  limit?: number;
}) => {
  const page = filters.page ?? 1;
  const limit = Math.min(filters.limit ?? 50, 100);
  const offset = (page - 1) * limit;

  const query = db("questions").whereNot("status", "archived");

  if (filters.topic_id) query.where("topic_id", filters.topic_id);
  if (filters.step_id) query.where("step_id", filters.step_id);
  if (filters.test_id) query.where("test_id", filters.test_id);
  if (filters.question_type) query.where("question_type", filters.question_type);
  if (filters.status) query.where("status", filters.status);

  const [countResult] = await query.clone().count("id as total");
  const total = Number(countResult?.total ?? 0);

  const questions = await query.orderBy("created_at", "desc").offset(offset).limit(limit);

  // Fetch answers for these questions
  const questionIds = questions.map((q) => q.id);
  const answers = questionIds.length > 0
    ? await db("answers").whereIn("question_id", questionIds)
    : [];

  const answerMap = new Map<string, typeof answers>();
  for (const a of answers) {
    const list = answerMap.get(a.question_id as string) ?? [];
    list.push(a);
    answerMap.set(a.question_id as string, list);
  }

  return {
    questions: questions.map((q) => ({
      ...q,
      answers: answerMap.get(q.id as string) ?? [],
    })),
    total,
    page,
    limit,
  };
};

export const createQuestion = async (input: CreateQuestionInput, createdBy: string) => {
  // Validate topic exists
  const topic = await db("topics").where({ id: input.topic_id }).first();
  if (!topic) throw new AppError(404, "Topic not found");

  if (input.step_id) {
    const step = await db("steps").where({ id: input.step_id }).first();
    if (!step) throw new AppError(404, "Step not found");
  }
  if (input.test_id) {
    const test = await db("tests").where({ id: input.test_id }).first();
    if (!test) throw new AppError(404, "Test not found");
  }

  return db.transaction(async (trx) => {
    const [question] = await trx("questions")
      .insert({
        topic_id: input.topic_id,
        step_id: input.step_id ?? null,
        test_id: input.test_id ?? null,
        question_text: input.question_text,
        question_type: input.question_type,
        difficulty: input.difficulty,
        point_value: input.point_value,
        explanation: input.explanation ?? null,
        hint: input.hint ?? null,
        type_data: input.type_data ? JSON.stringify(input.type_data) : null,
        status: "approved",
        created_by: createdBy,
      })
      .returning("*");

    let answers: Record<string, unknown>[] = [];
    if (input.answers && input.answers.length > 0) {
      answers = await trx("answers")
        .insert(
          input.answers.map((a) => ({
            question_id: question.id,
            answer_text: a.answer_text,
            is_correct: a.is_correct,
          })),
        )
        .returning("*");
    }

    return { ...question, answers };
  });
};

export const updateQuestion = async (id: string, input: UpdateQuestionInput) => {
  const question = await db("questions").where({ id }).first();
  if (!question) throw new AppError(404, "Question not found");

  const updateData: Record<string, unknown> = {};
  if (input.question_text !== undefined) updateData.question_text = input.question_text;
  if (input.question_type !== undefined) updateData.question_type = input.question_type;
  if (input.difficulty !== undefined) updateData.difficulty = input.difficulty;
  if (input.point_value !== undefined) updateData.point_value = input.point_value;
  if (input.explanation !== undefined) updateData.explanation = input.explanation;
  if (input.hint !== undefined) updateData.hint = input.hint;
  if (input.type_data !== undefined) updateData.type_data = JSON.stringify(input.type_data);
  if (input.status !== undefined) updateData.status = input.status;

  const [updated] = await db("questions").where({ id }).update(updateData).returning("*");
  return updated;
};

export const deleteQuestion = async (id: string) => {
  const question = await db("questions").where({ id }).first();
  if (!question) throw new AppError(404, "Question not found");

  await db("questions").where({ id }).update({ status: "archived" });
  return { message: "Question archived" };
};

export const bulkCreateQuestions = async (input: BulkCreateQuestionsInput, createdBy: string) => {
  const results = [];
  for (const q of input.questions) {
    const result = await createQuestion(q, createdBy);
    results.push(result);
  }
  return results;
};

// ── Topics ─────────────────────────────────────────────

export const listTopics = async (courseId?: string) => {
  const query = db("topics as t")
    .leftJoin("courses as c", "t.course_id", "c.id")
    .select("t.*", "c.name as course_name")
    .orderBy("t.sort_order");

  if (courseId) query.where("t.course_id", courseId);
  return query;
};

export const createTopic = async (input: CreateTopicInput) => {
  const course = await db("courses").where({ id: input.course_id }).first();
  if (!course) throw new AppError(404, "Course not found");

  const [topic] = await db("topics").insert(input).returning("*");
  return topic;
};

export const updateTopic = async (id: string, input: UpdateTopicInput) => {
  const topic = await db("topics").where({ id }).first();
  if (!topic) throw new AppError(404, "Topic not found");

  const [updated] = await db("topics").where({ id }).update(input).returning("*");
  return updated;
};

// ── Steps ──────────────────────────────────────────────

export const listSteps = async (topicId?: string) => {
  const query = db("steps").orderBy("sort_order");
  if (topicId) query.where("topic_id", topicId);
  return query;
};

export const createStep = async (input: CreateStepInput) => {
  const topic = await db("topics").where({ id: input.topic_id }).first();
  if (!topic) throw new AppError(404, "Topic not found");

  const [step] = await db("steps").insert(input).returning("*");
  return step;
};

// ── Tests ──────────────────────────────────────────────

export const listTests = async (stepId?: string) => {
  const query = db("tests").orderBy("sort_order");
  if (stepId) query.where("step_id", stepId);
  return query;
};

export const createTest = async (input: CreateTestInput) => {
  const step = await db("steps").where({ id: input.step_id }).first();
  if (!step) throw new AppError(404, "Step not found");

  const [test] = await db("tests").insert(input).returning("*");
  return test;
};

// ── Stats ──────────────────────────────────────────────

export const getDashboardStats = async () => {
  const [users] = await db("users").count("id as count");
  const [questions] = await db("questions").whereNot("status", "archived").count("id as count");
  const [quizzes] = await db("quiz_sessions").whereNotNull("finished_at").count("id as count");
  const [topics] = await db("topics").count("id as count");
  const [courses] = await db("courses").count("id as count");

  return {
    users: Number(users?.count ?? 0),
    questions: Number(questions?.count ?? 0),
    quizzes_completed: Number(quizzes?.count ?? 0),
    topics: Number(topics?.count ?? 0),
    courses: Number(courses?.count ?? 0),
  };
};
