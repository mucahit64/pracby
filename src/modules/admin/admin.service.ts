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
  UpdateReportInput,
  UpdateUserAdminInput,
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

export const getQuestion = async (id: string) => {
  const question = await db("questions").where({ id }).first();
  if (!question) throw new AppError(404, "Question not found");

  const answers = await db("answers").where({ question_id: id });
  return { ...question, answers };
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

  const today = new Date().toISOString().slice(0, 10);
  const [activeToday] = await db("streak_history").where("date", today).countDistinct("user_id as count");

  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString();
  const [newUsersWeek] = await db("users").where("created_at", ">=", weekAgo).count("id as count");

  const [pendingReports] = await db("question_reports").where("status", "pending").count("id as count");

  return {
    users: Number(users?.count ?? 0),
    questions: Number(questions?.count ?? 0),
    quizzes_completed: Number(quizzes?.count ?? 0),
    topics: Number(topics?.count ?? 0),
    courses: Number(courses?.count ?? 0),
    active_today: Number(activeToday?.count ?? 0),
    new_users_week: Number(newUsersWeek?.count ?? 0),
    pending_reports: Number(pendingReports?.count ?? 0),
  };
};

// ── Reports ────────────────────────────────────────────

export const listReports = async (filters: {
  status?: string;
  reason?: string;
  page?: number;
  limit?: number;
}) => {
  const page = filters.page ?? 1;
  const limit = Math.min(filters.limit ?? 50, 100);
  const offset = (page - 1) * limit;

  const query = db("question_reports as r")
    .leftJoin("users as u", "r.user_id", "u.id")
    .leftJoin("questions as q", "r.question_id", "q.id");

  if (filters.status) query.where("r.status", filters.status);
  if (filters.reason) query.where("r.reason", filters.reason);

  const [countResult] = await query.clone().count("r.id as total");
  const total = Number(countResult?.total ?? 0);

  const reports = await query
    .select(
      "r.*",
      "u.username as reporter_username",
      "u.email as reporter_email",
      "q.question_text",
      "q.question_type",
    )
    .orderByRaw("CASE WHEN r.status = 'pending' THEN 0 ELSE 1 END")
    .orderBy("r.created_at", "desc")
    .offset(offset)
    .limit(limit);

  return { reports, total, page, limit };
};

export const updateReport = async (id: string, input: UpdateReportInput, adminId: string) => {
  const report = await db("question_reports").where({ id }).first();
  if (!report) throw new AppError(404, "Report not found");

  const updateData: Record<string, unknown> = { status: input.status };
  if (input.admin_note !== undefined) updateData.admin_note = input.admin_note;
  if (input.status !== "pending") {
    updateData.resolved_by = adminId;
    updateData.resolved_at = new Date();
  }

  const [updated] = await db("question_reports").where({ id }).update(updateData).returning("*");
  return updated;
};

export const getReportStats = async () => {
  const rows = await db("question_reports").select("status").count("id as count").groupBy("status");
  const stats: Record<string, number> = { pending: 0, reviewed: 0, fixed: 0, dismissed: 0 };
  for (const row of rows) {
    stats[row.status as string] = Number(row.count);
  }
  stats.total = Object.values(stats).reduce((a, b) => a + b, 0);
  return stats;
};

// ── Users ──────────────────────────────────────────────

export const listUsers = async (filters: {
  search?: string;
  role?: string;
  page?: number;
  limit?: number;
}) => {
  const page = filters.page ?? 1;
  const limit = Math.min(filters.limit ?? 50, 100);
  const offset = (page - 1) * limit;

  const query = db("users as u")
    .leftJoin("user_stats as s", "u.id", "s.user_id")
    .select(
      "u.id", "u.email", "u.username", "u.role", "u.acorn_balance",
      "u.energy", "u.created_at",
      "s.xp", "s.level", "s.quizzes_completed",
    );

  if (filters.search) {
    const term = `%${filters.search}%`;
    query.where(function () {
      this.whereILike("u.username", term).orWhereILike("u.email", term);
    });
  }
  if (filters.role) query.where("u.role", filters.role);

  const [countResult] = await query.clone().clearSelect().count("u.id as total");
  const total = Number(countResult?.total ?? 0);

  const users = await query.orderBy("u.created_at", "desc").offset(offset).limit(limit);

  return { users, total, page, limit };
};

export const getUserDetail = async (id: string) => {
  const user = await db("users as u")
    .leftJoin("user_stats as s", "u.id", "s.user_id")
    .select(
      "u.id", "u.email", "u.username", "u.role", "u.avatar_url",
      "u.acorn_balance", "u.energy", "u.daily_goal_xp", "u.created_at",
      "s.xp", "s.level", "s.total_xp", "s.streak", "s.max_streak",
      "s.quizzes_completed", "s.last_active_date",
    )
    .where("u.id", id)
    .first();

  if (!user) throw new AppError(404, "User not found");

  const recentQuizzes = await db("quiz_sessions")
    .where("user_id", id)
    .whereNotNull("finished_at")
    .orderBy("finished_at", "desc")
    .limit(10);

  const enrollments = await db("user_exam_enrollments as e")
    .join("exam_types as et", "e.exam_type_id", "et.id")
    .where("e.user_id", id)
    .select("et.id", "et.name", "e.is_active");

  return { ...user, recent_quizzes: recentQuizzes, enrollments };
};

export const updateUser = async (id: string, input: UpdateUserAdminInput) => {
  const user = await db("users").where({ id }).first();
  if (!user) throw new AppError(404, "User not found");

  const updateData: Record<string, unknown> = {};
  if (input.role !== undefined) updateData.role = input.role;
  if (input.energy !== undefined) updateData.energy = input.energy;
  if (input.acorn_balance !== undefined) updateData.acorn_balance = input.acorn_balance;

  if (Object.keys(updateData).length === 0) throw new AppError(400, "No fields to update");

  const [updated] = await db("users")
    .where({ id })
    .update(updateData)
    .returning(["id", "email", "username", "role", "energy", "acorn_balance"]);

  return updated;
};

export const deleteUser = async (id: string) => {
  const user = await db("users").where({ id }).first();
  if (!user) throw new AppError(404, "User not found");
  if (user.role === "admin") throw new AppError(403, "Cannot delete admin user");

  await db("users").where({ id }).delete();
  return { message: "User deleted" };
};
