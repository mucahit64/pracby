export default defineEventHandler((event) => {
  const { public: { siteUrl } } = useRuntimeConfig(event)
  const urls = [`${siteUrl}/`]
  const entries = urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n')

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    '</urlset>',
    '',
  ].join('\n')
})