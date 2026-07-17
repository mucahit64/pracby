# ── Stage 1: Build ──────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
ARG API_INTERNAL_BASE=http://api:3000
ENV API_INTERNAL_BASE=${API_INTERNAL_BASE}
RUN pnpm build

# ── Stage 2: Production ─────────────────────────────────────
FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
