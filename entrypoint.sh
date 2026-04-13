#!/bin/sh
set -e

echo "▶ Running database migrations..."
NODE_ENV=production ./node_modules/.bin/knex migrate:latest --knexfile dist/knexfile.js

echo "▶ Running database seeds..."
NODE_ENV=production ./node_modules/.bin/knex seed:run --knexfile dist/knexfile.js

echo "▶ Starting API server..."
exec node dist/src/index.js
