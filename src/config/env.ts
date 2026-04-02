import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: Number(process.env.PORT) || 3000,
  jwtSecret: process.env.JWT_SECRET || "change-me-in-production",
  db: {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER || "pracby",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "pracbydb",
  },
};
