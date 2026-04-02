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

  const [user] = await db("users")
    .insert({ email: input.email, username: input.username, password_hash: passwordHash })
    .returning(["id", "email", "username", "created_at"]);

  await db("user_stats").insert({ user_id: user.id });

  return { user, token: signToken(user.id as string, user.username as string) };
};

export const login = async (input: LoginInput) => {
  const user = await db("users").where({ email: input.email }).first();
  if (!user) throw new AppError(401, "Invalid credentials");

  const valid = await bcrypt.compare(input.password, user.password_hash as string);
  if (!valid) throw new AppError(401, "Invalid credentials");

  return {
    user: { id: user.id, email: user.email, username: user.username },
    token: signToken(user.id as string, user.username as string),
  };
};
