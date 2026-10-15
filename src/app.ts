import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { env } from "./config/env";
import apiRoutes from "./modules";
import { errorHandler } from "./middleware/error";
import db from "./db/knex";

export const app = express();

// nginx runs in its own container on the docker network, so trust private addresses too;
// otherwise req.ip is nginx's address and IP-based rate limits are shared by every visitor.
app.set("trust proxy", "loopback, uniquelocal");

// ── Security middleware ──────────────────────────────────────
app.use(helmet());

const allowedOrigins = env.allowedOrigins === "*"
  ? "*"
  : env.allowedOrigins.split(",").map((o) => o.trim()).filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins === "*" ? true : allowedOrigins,
    credentials: true,
  }),
);

app.use(express.json({ limit: "1mb" }));

// ── Rate limiting ────────────────────────────────────────────
const authLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later" },
});

// ── Health check ─────────────────────────────────────────────
app.get("/api/health", async (_req, res) => {
  try {
    await db.raw("SELECT 1");
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  } catch {
    res.status(503).json({ status: "unhealthy", timestamp: new Date().toISOString() });
  }
});

// ── Routes ───────────────────────────────────────────────────
app.use("/api/auth", authLimiter);
app.use("/api", apiRoutes);

// Global error handler — must be last
app.use(errorHandler);
