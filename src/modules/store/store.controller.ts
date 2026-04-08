import type { Request, Response } from "express";
import * as StoreService from "./store.service";

export const getItems = async (_req: Request, res: Response): Promise<void> => {
  const items = await StoreService.getItems();
  res.json(items);
};

export const getInventory = async (req: Request, res: Response): Promise<void> => {
  const inventory = await StoreService.getInventory(req.user!.userId);
  res.json(inventory);
};

export const getActiveEffects = async (req: Request, res: Response): Promise<void> => {
  const effects = await StoreService.getActiveEffects(req.user!.userId);
  res.json(effects);
};

export const purchase = async (req: Request, res: Response): Promise<void> => {
  const result = await StoreService.purchase(req.user!.userId, req.body);
  res.status(201).json(result);
};

export const activateItem = async (req: Request, res: Response): Promise<void> => {
  const result = await StoreService.activateItem(req.user!.userId, req.params.itemId as string);
  res.json(result);
};

export const getAcornPackages = async (_req: Request, res: Response): Promise<void> => {
  const packages = StoreService.getAcornPackages();
  res.json(packages);
};
