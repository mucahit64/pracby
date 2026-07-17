export default defineEventHandler((event) => {
  const { public: { siteUrl } } = useRuntimeConfig(event)

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')

  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /admin/',
    'Disallow: /api/',
    'Disallow: /auth/',
    'Disallow: /profile/',
    'Disallow: /quiz/',
    'Disallow: /learn',
    'Disallow: /leaderboard',
    'Disallow: /store',
    'Disallow: /welcome',
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    '',
  ].join('\n')
})
