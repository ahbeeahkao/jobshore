import type { APIRoute } from 'astro';
import { COMPANY_INFO } from '../data/siteData';
import { INSIGHT_ARTICLES, REGULATORY_AND_AI_NEWS_RADAR } from '../data/insightsData';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = () => {
  const siteUrl = COMPANY_INFO.domain.replace(/\/$/, '');
  const rssUrl = `${siteUrl}/rss.xml`;
  const buildDate = new Date('2026-10-28T08:00:00+08:00').toUTCString();

  const articleItemsXml = INSIGHT_ARTICLES.map((article) => {
    const url = `${siteUrl}/insights/${article.slug}`;
    const pubDate = new Date(`${article.publishedDate}T08:00:00+08:00`).toUTCString();
    const summaryText = `${article.excerpt} — Direct Answer: ${article.aeoDirectAnswer} Key Takeaways: ${article.keyTakeaways.join(' | ')}`;

    return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(article.category)}</category>
      <author>hello@jobshore.dpdns.org (${escapeXml(COMPANY_INFO.legalName)})</author>
      <description>${escapeXml(summaryText)}</description>
    </item>`;
  }).join('\n');

  const radarItemsXml = REGULATORY_AND_AI_NEWS_RADAR.map((news, idx) => {
    const targetPath = news.actionHref.startsWith('/') ? news.actionHref : `/${news.actionHref}`;
    const url = `${siteUrl}${targetPath}#radar-${idx + 1}`;
    const pubDate = new Date('2026-10-27T08:00:00+08:00').toUTCString();

    return `    <item>
      <title>${escapeXml(`[${news.badge}] ${news.title}`)}</title>
      <link>${escapeXml(`${siteUrl}${targetPath}`)}</link>
      <guid isPermaLink="false">${escapeXml(url)}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(news.badge)}</category>
      <author>hello@jobshore.dpdns.org (${escapeXml(COMPANY_INFO.legalName)})</author>
      <description>${escapeXml(news.summary)}</description>
    </item>`;
  }).join('\n');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${COMPANY_INFO.name} — Executive Playbooks, Malaysia LHDN e-Invoice & Enterprise AI Radar`)}</title>
    <link>${escapeXml(`${siteUrl}/`)}</link>
    <description>${escapeXml(
      `Official executive briefings, Malaysia LHDN MyInvois e-Invoicing & RM 50,000 tax deduction guides, Frappe ERPNext v15 migration checklists, Offline POS architectures, and zero-hallucination AI engineering updates from ${COMPANY_INFO.legalName} (${COMPANY_INFO.ssmRegistrationNo}).`
    )}</description>
    <language>en-my</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${escapeXml(rssUrl)}" rel="self" type="application/rss+xml" />
${articleItemsXml}
${radarItemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
};
