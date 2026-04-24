import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../../db/knex";
import { env } from "../../config/env";
import { AppError } from "../../middleware/error";
import type { RegisterInput, LoginInput } from "./auth.schema";

const BCRYPT_ROUNDS = 12;

const signToken = (userId: string, username: string): string =>
  jwt.sign({ userId, username }, env.jwtSecret, { expiresIn: "7d" });

export const register = async (input: RegisterInput) => {
  const emailExists = await db("users").where({ email: input.email }).first();
  if (emailExists) throw new AppError(409, "Email already in use");

  const usernameExists = await db("users").where({ username: input.username }).first();
  if (usernameExists) throw new AppError(409, "Username already taken");

  const passwordHash = await bcrypt.hash(input.password, BCRYPT_ROUNDS);

  let examTypeId = input.exam_type_id;
  if (!examTypeId) {
    const defaultType = await db("exam_types").where({ slug: "lisans" }).first();
    examTypeId = defaultType?.id;
  }

  const [user] = await db("users")
    .insert({
      email: input.email,
      username: input.username,
      password_hash: passwordHash,
      acorn_balance: input.acorn_balance ?? 500,
      energy: input.energy ?? 25,
      ...(examTypeId && { active_exam_type_id: examTypeId }),
    })
    .returning(["id", "email", "username", "active_exam_type_id", "created_at"]);

  await db("user_stats").insert({ user_id: user.id });

  if (examTypeId) {
    await db("user_exam_enrollments").insert({ user_id: user.id, exam_type_id: examTypeId });
  }

  // Apply guest quiz progress if provided
  if (input.guest_data?.quiz_results?.length) {
    const stepIds = [...new Set(input.guest_data.quiz_results.map((r) => r.stepId).filter(Boolean))] as string[];
    if (stepIds.length > 0) {
      const steps = await db("steps").whereIn("id", stepIds).select("id", "tests_required");
      const stepMap = new Map(steps.map((s) => [s.id as string, s.tests_required as number]));

      const totalCorrect = input.guest_data.quiz_results.reduce((sum, r) => sum + r.correctCount, 0);
      if (totalCorrect > 0) {
        await db("user_stats").where({ user_id: user.id }).increment({ xp: totalCorrect, total_xp: totalCorrect });
      }

      const stepProgressRows = stepIds.map((stepId) => {
        const results = input.guest_data!.quiz_results!.filter((r) => r.stepId === stepId);
        const completedTests = new Set(results.filter((r) => r.testId).map((r) => r.testId!)).size;
        const testsRequired = stepMap.get(stepId) ?? 1;
        const isCompleted = completedTests >= testsRequired;
        return {
          user_id: user.id,
          step_id: stepId,
          tests_completed: completedTests,
          is_step_completed: isCompleted,
          step_final_passed: false,
          stars: 0,
          ...(isCompleted && { completed_at: new Date() }),
        };
      });

      await db("user_step_progress").insert(stepProgressRows).onConflict(["user_id", "step_id"]).merge();
    }
  }

  return { user, token: signToken(user.id as string, user.username as string) };
};

export const login = async (input: LoginInput) => {
  const isEmail = input.identifier.includes("@");
  const user = isEmail
    ? await db("users").where({ email: input.identifier }).first()
    : await db("users").where({ username: input.identifier }).first();
  if (!user) throw new AppError(401, "Invalid credentials");

  const valid = await bcrypt.compare(input.password, user.password_hash as string);
  if (!valid) throw new AppError(401, "Invalid credentials");

  return {
    user: { id: user.id, email: user.email, username: user.username },
    token: signToken(user.id as string, user.username as string),
  };
};

export const checkEmail = async (email: string) => {
  const exists = await db("users").where({ email }).first();
  return { available: !exists };
};

export const checkUsername = async (username: string) => {
  const exists = await db("users").where({ username }).first();
  return { available: !exists };
};
