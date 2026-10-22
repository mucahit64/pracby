#!/bin/bash
set -euo pipefail

# Database backup script — run via cron or manually
# Usage: ./backup.sh
# Cron example (daily at 3 AM):
#   0 3 * * * /path/to/pracby/backup.sh >> /var/log/pracby-backup.log 2>&1
#
# Off-site copy: set BACKUP_REMOTE in .env to an rclone destination (e.g. "b2:pracby-backups"
# or "gdrive:pracby"), configured beforehand with `rclone config`. Without it the backup
# stays on this server only, which does not survive losing the server.
# Restore: ./restore.sh backups/pracby_YYYYMMDD_HHMMSS.sql.gz

cd "$(dirname "$0")"

# Load environment variables
if [ -f .env ]; then
  # shellcheck disable=SC1091
  . ./.env
else
  echo "[$(date)] ERROR: .env file not found" >&2
  exit 1
fi

BACKUP_DIR="./backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/pracby_${TIMESTAMP}.sql.gz"
KEEP_DAYS=7
REMOTE_KEEP_DAYS=30

mkdir -p "$BACKUP_DIR"

echo "[$(date)] Starting backup..."
# pipefail makes a failed pg_dump fail the script instead of leaving an empty .gz behind
if ! docker compose exec -T postgres pg_dump -U "$DB_USER" "$DB_NAME" | gzip > "$BACKUP_FILE"; then
  rm -f "$BACKUP_FILE"
  echo "[$(date)] ERROR: pg_dump failed" >&2
  exit 1
fi
gzip -t "$BACKUP_FILE"
echo "[$(date)] Backup saved to $BACKUP_FILE ($(du -h "$BACKUP_FILE" | cut -f1))"

if [ -n "${BACKUP_REMOTE:-}" ]; then
  rclone copy "$BACKUP_FILE" "$BACKUP_REMOTE"
  rclone delete --min-age "${REMOTE_KEEP_DAYS}d" --include "pracby_*.sql.gz" "$BACKUP_REMOTE"
  echo "[$(date)] Copied to $BACKUP_REMOTE (keeping ${REMOTE_KEEP_DAYS} days there)"
else
  echo "[$(date)] WARNING: BACKUP_REMOTE is not set, the backup is on this server only" >&2
fi

# Remove backups older than KEEP_DAYS
find "$BACKUP_DIR" -name "pracby_*.sql.gz" -mtime +$KEEP_DAYS -delete
echo "[$(date)] Cleaned up backups older than ${KEEP_DAYS} days"
