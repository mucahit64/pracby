#!/bin/bash
set -euo pipefail

# Restores a backup made by backup.sh. This REPLACES all data in the database.
# Usage: ./restore.sh backups/pracby_YYYYMMDD_HHMMSS.sql.gz
# A backup kept off-site can be fetched first, e.g.:
#   rclone copy "$BACKUP_REMOTE/pracby_YYYYMMDD_HHMMSS.sql.gz" backups/

cd "$(dirname "$0")"

BACKUP_FILE=${1:?Usage: ./restore.sh <backup.sql.gz>}
[ -f "$BACKUP_FILE" ] || { echo "Not found: $BACKUP_FILE" >&2; exit 1; }
gzip -t "$BACKUP_FILE"

# shellcheck disable=SC1091
. ./.env

read -r -p "All data in '$DB_NAME' will be replaced by $BACKUP_FILE. Type the database name to continue: " answer
[ "$answer" = "$DB_NAME" ] || { echo "Aborted."; exit 1; }

echo "[$(date)] Stopping the API..."
docker compose stop api

echo "[$(date)] Restoring..."
docker compose exec -T postgres psql -v ON_ERROR_STOP=1 -U "$DB_USER" -d "$DB_NAME" \
  -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
gunzip -c "$BACKUP_FILE" | docker compose exec -T postgres psql -v ON_ERROR_STOP=1 -q -U "$DB_USER" -d "$DB_NAME"

echo "[$(date)] Starting the API..."
docker compose start api

echo "[$(date)] Restored $BACKUP_FILE"
