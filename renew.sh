#!/bin/bash
set -e

# SSL certificate renewal and nginx reload
# Run via host cron: 0 */12 * * * /path/to/pracby/renew.sh >> /var/log/pracby-renew.log 2>&1

cd "$(dirname "$0")"

echo "[$(date -Iseconds)] Running certbot renew..."
docker compose run --rm certbot certbot renew --quiet

echo "[$(date -Iseconds)] Reloading nginx..."
docker compose exec nginx nginx -s reload

echo "[$(date -Iseconds)] Done."
