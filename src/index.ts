import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { env } from "./config/env";
import { logger } from "./config/logger";
import apiRoutes from "./modules";
import { errorHandler } from "./middleware/error";
import db from "./db/knex";

const app = express();

app.set("trust proxy", 'loopback');

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

// ── Server startup ───────────────────────────────────────────
const server = app.listen(env.port, () => {
  logger.info(`Server running on port ${env.port} [${env.nodeEnv}]`);
});

// ── Graceful shutdown ────────────────────────────────────────
const shutdown = async (signal: string) => {
  logger.info(`${signal} received — shutting down gracefully`);
  server.close(async () => {
    try {
      await db.destroy();
      logger.info("Database pool closed");
    } catch (err) {
      logger.error(err, "Error closing database pool");
    }
    process.exit(0);
  });
  // Force exit after 10s
  setTimeout(() => {
    logger.error("Forced shutdown after timeout");
    process.exit(1);
  }, 10_000);
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));