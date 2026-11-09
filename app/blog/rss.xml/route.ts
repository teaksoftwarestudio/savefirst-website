import { POSTS } from "../posts";
import { SITE_URL } from "../../constants";

export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = POSTS.map(({ meta }) => {
    const url = `${SITE_URL}/blog/${meta.slug}`;
    return `    <item>
      <title>${esc(meta.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${meta.published}T12:00:00Z`).toUTCString()}</pubDate>
      <category>${esc(meta.category)}</category>
      <description>${esc(meta.description)}</description>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The SaveFirst Blog</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Plain-English guides to paying yourself first, knowing what's safe to spend, and sinking funds.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
