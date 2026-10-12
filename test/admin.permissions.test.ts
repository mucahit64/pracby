import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "./helpers";
import { registerUser, loginAdmin } from "./helpers";

describe("Admin routes — permission gating", () => {
  it("rejects a plain student (view_admin_panel-less, no admin perms) from creating a topic", async () => {
    const { token } = await registerUser();

    const res = await request(app)
      .post("/api/admin/topics")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Hacked Topic", course_id: "00000000-0000-0000-0000-000000000000" });

    // Student role has no view_admin_panel permission at all -> blocked at the router.use() gate.
    expect(res.status).toBe(403);
  });

  it("rejects editing another user's admin record without manage_users", async () => {
    const { token } = await registerUser();
    const victim = await registerUser();

    const res = await request(app)
      .get(`/api/admin/users/${victim.userId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(403);
  });

  it("allows an admin (manage_exams + manage_users) through the same routes", async () => {
    const { token } = await loginAdmin();

    const getUsersRes = await request(app)
      .get("/api/admin/users")
      .set("Authorization", `Bearer ${token}`);
    expect(getUsersRes.status).toBe(200);
  });
});
