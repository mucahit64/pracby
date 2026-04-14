import { z } from "zod";

export const PurchaseSchema = z.object({
  itemId: z.uuid(),
  quantity: z.number().int().min(1).max(10).default(1),
});

export type PurchaseInput = z.infer<typeof PurchaseSchema>;
