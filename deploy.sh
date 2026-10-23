#!/bin/bash
set -euo pipefail

# Deploys the latest main on the server. CI runs it over SSH after the tests
# pass (the deploy key in authorized_keys can only run this script); it can
# also be run by hand: ./deploy.sh
# A failed step stops the deploy and fails the CI job; the running containers
# stay as they were unless the new ones already started.

cd "$(dirname "$0")"

# One deploy at a time
exec 9>"/tmp/pracby-deploy.lock"
if ! flock -n 9; then
  echo "[$(date -Iseconds)] Another deploy is running" >&2
  exit 1
fi

echo "[$(date -Iseconds)] Fetching main..."
git fetch --quiet origin main
# Fails instead of merging if the server's checkout has diverged (manual edits)
git merge --ff-only origin/main
git log --oneline -1

echo "[$(date -Iseconds)] Building and restarting..."
# --wait: fails if a container doesn't become healthy (e.g. a failed migration)
docker compose up -d --build --remove-orphans --wait --wait-timeout 300

echo "[$(date -Iseconds)] Removing unused images..."
docker image prune -f >/dev/null

echo "[$(date -Iseconds)] Deployed $(git rev-parse --short HEAD)"
