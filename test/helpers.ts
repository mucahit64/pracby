import request from "supertest";
import { app } from "../src/app";
import db from "../src/db/knex";

let counter = 0;

export const registerUser = async (overrides: Partial<{ email: string; username: string; password: string }> = {}) => {
  counter += 1;
  const email = overrides.email ?? `test-user-${Date.now()}-${counter}@example.com`;
  const username = overrides.username ?? `testuser${Date.now()}${counter}`.slice(0, 20);
  const password = overrides.password ?? "Password123!";

  const res = await request(app).post("/api/auth/register").send({ email, username, password });
  if (res.status !== 201) {
    throw new Error(`register failed: ${res.status} ${JSON.stringify(res.body)}`);
  }
  return { token: res.body.token as string, userId: res.body.user.id as string, email, username };
};

export const loginAdmin = async () => {
  const res = await request(app).post("/api/auth/login").send({
    identifier: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
  });
  if (res.status !== 200) {
    throw new Error(`admin login failed: ${res.status} ${JSON.stringify(res.body)}`);
  }
  return { token: res.body.token as string, userId: res.body.user.id as string };
};

export const setAcornBalance = async (userId: string, amount: number) => {
  await db("users").where({ id: userId }).update({ acorn_balance: amount });
};

export { app, db };
