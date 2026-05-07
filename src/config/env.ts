import dotenv from "dotenv";

dotenv.config();

const nodeEnv = process.env.NODE_ENV || "development";
const isProduction = nodeEnv === "production";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

// In production, JWT_SECRET, DB_PASSWORD and RESEND_API_KEY are mandatory
const jwtSecret = isProduction
  ? requireEnv("JWT_SECRET")
  : process.env.JWT_SECRET || "dev-only-secret";

const resendApiKey = isProduction
  ? requireEnv("RESEND_API_KEY")
  : process.env.RESEND_API_KEY || "";

if (isProduction && jwtSecret === "change-me-in-production") {
  throw new Error("JWT_SECRET must be changed from default value in production");
}

export const env = {
  nodeEnv,
  isProduction,
  port: Number(process.env.PORT) || 3000,
  jwtSecret,
  resendApiKey,
  appUrl: process.env.APP_URL || "http://localhost:3001",
  allowedOrigins: process.env.ALLOWED_ORIGINS || (isProduction ? "" : "*"),
  db: {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER || "pracby",
    password: isProduction ? requireEnv("DB_PASSWORD") : (process.env.DB_PASSWORD || ""),
    database: process.env.DB_NAME || "pracbydb",
  },
};
