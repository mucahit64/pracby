#!/bin/sh
set -e

# Database backup script — run via cron or manually
# Usage: ./backup.sh
# Cron example (daily at 3 AM):
#   0 3 * * * cd /path/to/pracby && ./backup.sh >> /var/log/pracby-backup.log 2>&1

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

mkdir -p "$BACKUP_DIR"

export PGPASSWORD="$DB_PASSWORD"

echo "[$(date)] Starting backup..."
docker compose exec -T postgres pg_dump -U "$DB_USER" "$DB_NAME" | gzip > "$BACKUP_FILE"
echo "[$(date)] Backup saved to $BACKUP_FILE ($(du -h "$BACKUP_FILE" | cut -f1))"

# Remove backups older than KEEP_DAYS
find "$BACKUP_DIR" -name "pracby_*.sql.gz" -mtime +$KEEP_DAYS -delete
echo "[$(date)] Cleaned up backups older than ${KEEP_DAYS} days"
