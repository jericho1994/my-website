/** @type {import('next-sitemap').IConfig} */
const config = {
  // Keep in sync with SITE.url in lib/site.ts
  siteUrl: process.env.SITE_URL || "https://jericho.dev",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
};

module.exports = config;
