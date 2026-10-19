import type { APIRoute } from 'astro';
import { COMPANY_INFO, SERVICE_PILLARS } from '../data/siteData';
import { INSIGHT_ARTICLES } from '../data/insightsData';

export const GET: APIRoute = () => {
  const lastmod = '2026-10-19';
  const urls = [
    {
      loc: `${COMPANY_INFO.domain}/`,
      changefreq: 'weekly',
      priority: '1.0',
    },
    ...SERVICE_PILLARS.map((pillar) => ({
      loc: `${COMPANY_INFO.domain}/services/${pillar.slug}`,
      changefreq: 'weekly',
      priority: '0.9',
    })),
    ...INSIGHT_ARTICLES.map((post) => ({
      loc: `${COMPANY_INFO.domain}/insights/${post.slug}`,
      changefreq: 'monthly',
      priority: '0.8',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
