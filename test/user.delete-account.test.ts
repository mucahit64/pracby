import { describe, it, expect } from "vitest";
import request from "supertest";
import { app, db, loginAdmin, registerUser } from "./helpers";

const deleteMe = (token: string, password: string) =>
  request(app).delete("/api/users/me").set("Authorization", `Bearer ${token}`).send({ password });

describe("DELETE /api/users/me", () => {
  it("deletes the account and its data with the right password", async () => {
    const { token, userId, email, password } = await registerUser();

    const res = await deleteMe(token, password);
    expect(res.status).toBe(204);

    expect(await db("users").where({ id: userId }).first()).toBeUndefined();
    expect(await db("user_stats").where({ user_id: userId }).first()).toBeUndefined();
    expect(await db("user_exam_enrollments").where({ user_id: userId }).first()).toBeUndefined();

    const login = await request(app).post("/api/auth/login").send({ identifier: email, password });
    expect(login.status).toBe(401);
  });

  it("keeps the account on a wrong password, without a 401 that would log the user out", async () => {
    const { token, userId } = await registerUser();

    const res = await deleteMe(token, "wrong-password");
    expect(res.status).toBe(403);
    expect(await db("users").where({ id: userId }).first()).toBeDefined();
  });

  it("does not delete an admin", async () => {
    const { token, userId } = await loginAdmin();

    const res = await deleteMe(token, process.env.ADMIN_PASSWORD!);
    expect(res.status).toBe(403);
    expect(await db("users").where({ id: userId }).first()).toBeDefined();
  });

  it("deletes a user who created questions and keeps the questions", async () => {
    const { token, userId, password } = await registerUser();
    const question = await db("questions").first();
    const previousCreator = question.created_by;
    await db("questions").where({ id: question.id }).update({ created_by: userId });

    try {
      expect((await deleteMe(token, password)).status).toBe(204);
      const kept = await db("questions").where({ id: question.id }).first();
      expect(kept.created_by).toBeNull();
    } finally {
      await db("questions").where({ id: question.id }).update({ created_by: previousCreator });
    }
  });
});

describe("PATCH /api/users/me with a wrong current password", () => {
  it("answers 403, not a 401 that would log the user out", async () => {
    const { token } = await registerUser();
    const res = await request(app)
      .patch("/api/users/me")
      .set("Authorization", `Bearer ${token}`)
      .send({ currentPassword: "wrong-password", newPassword: "NewPassword123!" });
    expect(res.status).toBe(403);
  });
});
