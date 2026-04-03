import type { Knex } from "knex";
import dotenv from "dotenv";

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
  migrations: {
    directory: isProd ? "./src/db/migrations" : "./src/db/migrations",
    extension: isProd ? "js" : "ts",
  },
  seeds: {
    directory: isProd ? "./src/db/seeds" : "./src/db/seeds",
  },
};

export default config;