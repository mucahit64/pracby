import { app } from "./app";
import { env } from "./config/env";
import { logger } from "./config/logger";
import db from "./db/knex";

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
