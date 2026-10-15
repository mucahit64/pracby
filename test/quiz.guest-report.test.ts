import { randomUUID } from "crypto";
import { describe, it, expect } from "vitest";
import request from "supertest";
import { app, db, loginAdmin, registerUser } from "./helpers";

async function findQuestionId(): Promise<string> {
  const q = await db("questions").where({ status: "approved" }).first("id");
  if (!q) throw new Error("fixture data: need at least one approved question");
  return q.id;
}

describe("POST /api/quiz/guest-report-question", () => {
  it("lets a guest report a question without a token, once per guest id", async () => {
    const questionId = await findQuestionId();
    const guestId = randomUUID();

    const first = await request(app)
      .post("/api/quiz/guest-report-question")
      .send({ questionId, guestId, reason: "typo" });
    expect(first.status).toBe(201);

    const row = await db("question_reports").where({ id: first.body.id }).first();
    expect(row.guest_id).toBe(guestId);
    expect(row.user_id).toBeNull();

    const duplicate = await request(app)
      .post("/api/quiz/guest-report-question")
      .send({ questionId, guestId, reason: "other" });
    expect(duplicate.status).toBe(409);

    const otherGuest = await request(app)
      .post("/api/quiz/guest-report-question")
      .send({ questionId, guestId: randomUUID(), reason: "typo" });
    expect(otherGuest.status).toBe(201);
  });

  it("rejects guest descriptions longer than 200 characters", async () => {
    const res = await request(app)
      .post("/api/quiz/guest-report-question")
      .send({ questionId: await findQuestionId(), guestId: randomUUID(), reason: "other", description: "x".repeat(201) });
    expect(res.status).toBe(400);
  });
});

describe("Admin report groups", () => {
  it("groups reports per question with member/guest counts and resolves them together", async () => {
    const questionId = await findQuestionId();
    await db("question_reports").where({ question_id: questionId }).del();

    const { token } = await registerUser();
    await request(app)
      .post("/api/quiz/report-question")
      .set("Authorization", `Bearer ${token}`)
      .send({ questionId, reason: "wrong_answer" })
      .expect(201);
    await request(app)
      .post("/api/quiz/guest-report-question")
      .send({ questionId, guestId: randomUUID(), reason: "typo" })
      .expect(201);

    const { token: adminToken } = await loginAdmin();
    const groupsRes = await request(app)
      .get("/api/admin/reports/groups?limit=100")
      .set("Authorization", `Bearer ${adminToken}`);
    expect(groupsRes.status).toBe(200);
    const group = groupsRes.body.groups.find((g: { question_id: string }) => g.question_id === questionId);
    expect(group).toMatchObject({ status: "pending", report_count: 2, guest_count: 1 });
    expect([...group.reasons].sort()).toEqual(["typo", "wrong_answer"]);

    const patchRes = await request(app)
      .patch(`/api/admin/reports/question/${questionId}`)
      .set("Authorization", `Bearer ${adminToken}`)
      .send({ status: "fixed" });
    expect(patchRes.status).toBe(200);
    expect(patchRes.body.updated).toBe(2);

    const statuses = await db("question_reports").where({ question_id: questionId }).pluck("status");
    expect(statuses).toEqual(["fixed", "fixed"]);
  });
});
