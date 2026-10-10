import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globalSetup: "./test/global-setup.ts",
    fileParallelism: false,
    testTimeout: 15000,
    hookTimeout: 30000,
    env: {
      NODE_ENV: "test",
      DB_HOST: "127.0.0.1",
      DB_PORT: "15432",
      DB_USER: "pracby_test",
      DB_PASSWORD: "test_pw",
      DB_NAME: "pracby_test",
      JWT_SECRET: "test-jwt-secret-not-for-production-use-only",
      RESEND_API_KEY: "test-resend-key",
      ALLOWED_ORIGINS: "*",
      ADMIN_EMAIL: "admin@test.local",
      ADMIN_USERNAME: "admin_test",
      ADMIN_PASSWORD: "Test-Admin-Pw-123!",
    },
  },
});
