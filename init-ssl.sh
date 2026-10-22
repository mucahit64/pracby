#!/bin/bash
set -e

# First-time SSL certificate setup with Let's Encrypt
# Usage: ./init-ssl.sh yourdomain.com your@email.com

DOMAIN=${1:?Usage: ./init-ssl.sh <domain> <email>}
EMAIL=${2:?Usage: ./init-ssl.sh <domain> <email>}

echo "▶ Creating certbot directories..."
mkdir -p certbot/conf certbot/www

echo "▶ Creating temporary self-signed certificate for nginx to start..."
mkdir -p "certbot/conf/live/$DOMAIN"
# Only create self-signed if no real cert exists yet
if [ ! -f "certbot/conf/live/$DOMAIN/fullchain.pem" ]; then
  openssl req -x509 -nodes -newkey rsa:2048 -days 1 \
    -keyout "certbot/conf/live/$DOMAIN/privkey.pem" \
    -out "certbot/conf/live/$DOMAIN/fullchain.pem" \
    -subj "/CN=$DOMAIN" 2>/dev/null
fi

echo "▶ Starting nginx with temporary certificate..."
docker compose up -d nginx

# nginx has the temporary certificate loaded now. Remove it so certbot writes the real one to
# live/$DOMAIN; otherwise it would pick live/$DOMAIN-0001 and nginx would keep the temporary one.
if [ ! -f "certbot/conf/renewal/$DOMAIN.conf" ]; then
  rm -rf "certbot/conf/live/$DOMAIN"
fi

echo "▶ Requesting Let's Encrypt certificate..."
docker compose run --rm certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email "$EMAIL" \
  --agree-tos \
  --no-eff-email \
  --force-renewal \
  -d "$DOMAIN" \
  -d "www.$DOMAIN"

echo "▶ Reloading nginx with real certificate..."
docker compose exec nginx nginx -s reload

echo "✓ SSL setup complete for $DOMAIN"
