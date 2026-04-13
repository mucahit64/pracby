import type { Knex } from "knex";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const isProd = process.env.NODE_ENV === "production";

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  pool: {
    min: isProd ? 2 : 0,
    max: isProd ? 10 : 5,
    acquireTimeoutMillis: 30000,
  },
  migrations: {
    directory: path.join(__dirname, "src/db/migrations"),
    extension: isProd ? "js" : "ts",
  },
  seeds: {
    directory: path.join(__dirname, "src/db/seeds"),
  },
};

export default config;