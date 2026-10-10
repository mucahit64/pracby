import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import { app, db } from "./helpers";
import { registerUser, setAcornBalance } from "./helpers";

describe("POST /api/store/purchase — concurrency safety", () => {
  it("never lets two concurrent purchases overspend the acorn balance", async () => {
    const { token, userId } = await registerUser();

    const item = await db("store_items").where({ name: "Seri Dondurma" }).first();
    expect(item).toBeTruthy();
    const price = item.price_acorn as number;

    // Exactly enough acorn for ONE purchase, not two.
    await setAcornBalance(userId, price);

    const [r1, r2] = await Promise.all([
      request(app).post("/api/store/purchase").set("Authorization", `Bearer ${token}`).send({ itemId: item.id, quantity: 1 }),
      request(app).post("/api/store/purchase").set("Authorization", `Bearer ${token}`).send({ itemId: item.id, quantity: 1 }),
    ]);

    const statuses = [r1.status, r2.status].sort();
    // Exactly one must succeed, the other must be rejected as insufficient balance.
    expect(statuses).toEqual([201, 400]);

    const user = await db("users").where({ id: userId }).first();
    expect(user.acorn_balance).toBe(0);
    expect(user.acorn_balance).toBeGreaterThanOrEqual(0);

    const inventory = await db("user_items").where({ user_id: userId, item_id: item.id });
    expect(inventory.length).toBe(1);
    expect(inventory[0].quantity).toBe(1);
  });

  it("upserts quantity instead of creating duplicate rows on repeated concurrent first-time purchases", async () => {
    const { token, userId } = await registerUser();
    const item = await db("store_items").where({ name: "XP Boost" }).first();
    await setAcornBalance(userId, (item.price_acorn as number) * 5);

    await Promise.all([
      request(app).post("/api/store/purchase").set("Authorization", `Bearer ${token}`).send({ itemId: item.id, quantity: 1 }),
      request(app).post("/api/store/purchase").set("Authorization", `Bearer ${token}`).send({ itemId: item.id, quantity: 1 }),
    ]);

    const rows = await db("user_items").where({ user_id: userId, item_id: item.id });
    expect(rows.length).toBe(1);
  });
});
