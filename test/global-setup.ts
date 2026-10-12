import { execFileSync } from "child_process";
import path from "path";

export default async function setup() {
  const env = {
    ...process.env,
    NODE_ENV: "test",
    DB_HOST: "127.0.0.1",
    DB_PORT: "15432",
    DB_USER: "pracby_test",
    DB_PASSWORD: "test_pw",
    DB_NAME: "pracby_test",
    ADMIN_EMAIL: "admin@test.local",
    ADMIN_USERNAME: "admin_test",
    ADMIN_PASSWORD: "Test-Admin-Pw-123!",
  };

  const root = path.join(__dirname, "..");
  const run = (args: string[]) =>
    execFileSync("npx", ["knex", ...args, "--knexfile", "knexfile.ts"], {
      cwd: root,
      env,
      stdio: "inherit",
    });

  run(["migrate:latest"]);
  run(["seed:run"]);
}
