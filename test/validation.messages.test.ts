import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "./helpers";

// Clients show these under the form fields, so they must be Turkish.
describe("validation errors are in Turkish", () => {
  it("uses the schema's messages for the register form", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "not-an-email", username: "A", password: "123" });
    expect(res.status).toBe(400);
    const fields = res.body.errors.properties;
    expect(fields.email.errors).toEqual(["Geçerli bir e-posta adresi gir"]);
    expect(fields.username.errors).toContain("Kullanıcı adı en az 3 karakter olmalı");
    expect(fields.password.errors).toEqual(["Şifre en az 6 karakter olmalı"]);
  });

  it("falls back to Zod's Turkish messages elsewhere", async () => {
    const res = await request(app).post("/api/auth/login").send({});
    expect(res.status).toBe(400);
    expect(res.body.errors.properties.identifier.errors[0]).toMatch(/^Geçersiz değer/);
  });
});
