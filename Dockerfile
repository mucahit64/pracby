# ── Stage 1: Build ──────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
# Install all deps (including devDeps — needed for tsc)
RUN pnpm install --frozen-lockfile --ignore-workspace

COPY tsconfig.json knexfile.ts ./
COPY src/ ./src/

RUN pnpm build

# ── Stage 2: Production ─────────────────────────────────────
FROM node:20-alpine
WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile --ignore-workspace --prod

COPY --from=builder /app/dist ./dist
COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["./entrypoint.sh"]
