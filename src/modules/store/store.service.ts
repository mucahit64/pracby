import db from "../../db/knex";
import { AppError } from "../../middleware/error";
import type { PurchaseInput } from "./store.schema";
import { regenerateEnergy } from "../user/user.service";

export const getItems = async () => {
  return db("store_items").where({ is_active: true }).orderBy("price_acorn", "asc");
};

export const getInventory = async (userId: string) => {
  return db("user_items as ui")
    .join("store_items as si", "ui.item_id", "si.id")
    .where("ui.user_id", userId)
    .select("ui.id", "ui.item_id", "ui.quantity", "ui.purchased_at", "si.name", "si.description", "si.icon_url", "si.item_type", "si.duration_hours");
};

export const getActiveEffects = async (userId: string) => {
  return db("user_active_effects")
    .where("user_id", userId)
    .where("expires_at", ">", db.fn.now())
    .select("item_type", "expires_at");
};

export const purchase = async (userId: string, input: PurchaseInput) => {
  const item = await db("store_items").where({ id: input.itemId, is_active: true }).first();
  if (!item) throw new AppError(404, "Item not found");

  const totalCost = item.price_acorn * input.quantity;

  const user = await db("users").where({ id: userId }).select("acorn_balance", "energy").first();
  if (!user) throw new AppError(404, "User not found");
  if (user.acorn_balance < totalCost) {
    throw new AppError(400, "Insufficient acorn balance");
  }

  // Energy refill: instant apply, no inventory
  if (item.item_type === "energy_refill") {
    await regenerateEnergy(userId);
    const freshUser = await db("users").where({ id: userId }).select("energy").first();
    const currentEnergy = freshUser?.energy ?? 0;
    const metadata = typeof item.metadata === "string" ? JSON.parse(item.metadata) : (item.metadata ?? {});
    const energyCount = (metadata.energy_count ?? 1) * input.quantity;
    const newEnergy = Math.min(25, currentEnergy + energyCount);

    return db.transaction(async (trx) => {
      await trx("users").where({ id: userId }).update({
        acorn_balance: db.raw("acorn_balance - ?", [totalCost]),
        energy: newEnergy,
        ...(newEnergy >= 25 ? { energy_refreshed_at: new Date() } : {}),
      });

      await trx("acorn_transactions").insert({
        user_id: userId,
        amount: -totalCost,
        type: "spent_store",
        reference_id: item.id,
      });

      return { balance: user.acorn_balance - totalCost, spent: totalCost, item: item.name, energy: newEnergy };
    });
  }

  return db.transaction(async (trx) => {
    await trx("users").where({ id: userId }).decrement("acorn_balance", totalCost);

    await trx("acorn_transactions").insert({
      user_id: userId,
      amount: -totalCost,
      type: "spent_store",
      reference_id: item.id,
    });

    const existing = await trx("user_items")
      .where({ user_id: userId, item_id: input.itemId })
      .first();

    if (existing) {
      await trx("user_items")
        .where({ id: existing.id })
        .increment("quantity", input.quantity);
    } else {
      await trx("user_items").insert({
        user_id: userId,
        item_id: input.itemId,
        quantity: input.quantity,
      });
    }

    return { balance: user.acorn_balance - totalCost, spent: totalCost, item: item.name };
  });
};

export const activateItem = async (userId: string, itemId: string) => {
  const userItem = await db("user_items as ui")
    .join("store_items as si", "ui.item_id", "si.id")
    .where("ui.user_id", userId)
    .where("ui.item_id", itemId)
    .where("ui.quantity", ">", 0)
    .select("ui.*", "si.item_type", "si.duration_hours")
    .first();

  if (!userItem) throw new AppError(404, "Item not found in inventory or quantity is 0");
  if (!userItem.duration_hours) throw new AppError(400, "This item cannot be activated");

  const expiresAt = new Date(Date.now() + userItem.duration_hours * 60 * 60 * 1000);

  return db.transaction(async (trx) => {
    await trx("user_items").where({ user_id: userId, item_id: itemId }).decrement("quantity", 1);

    await trx("user_active_effects")
      .insert({
        user_id: userId,
        item_type: userItem.item_type,
        expires_at: expiresAt,
      })
      .onConflict(["user_id", "item_type"])
      .merge({ expires_at: expiresAt });

    return { itemType: userItem.item_type, expiresAt };
  });
};

const ACORN_PACKAGES = [
  { id: "pkg_50", amount: 50, label: "50 Acorn" },
  { id: "pkg_150", amount: 150, label: "150 Acorn" },
  { id: "pkg_500", amount: 500, label: "500 Acorn" },
];

export const getAcornPackages = () => {
  return ACORN_PACKAGES;
};
