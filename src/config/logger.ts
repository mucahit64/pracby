import pino from "pino";
import { env } from "./env";

export const logger = pino({
  level: env.isProduction ? "info" : "debug",
  ...(env.isProduction
    ? {} // JSON logs in production (Docker/ELK friendly)
    : { transport: { target: "pino-pretty", options: { colorize: true } } }),
  redact: ["req.headers.authorization", "password", "password_hash"],
});
