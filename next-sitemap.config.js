/**
 * Sitemap is generated via the next-sitemap plugin. For more options see:
 * https://www.npmjs.com/package/next-sitemap
 */

// next-sitemap runs after `next build` and does not read .env files itself
require('@next/env').loadEnvConfig(process.cwd())

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  // ...other options
}
