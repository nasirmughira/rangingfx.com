import { getAllPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/site';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await getAllPosts();
  const feedItems = posts
    .map((post) => {
      return `<item>
  <title><![CDATA[${post.frontMatter.title}]]></title>
  <description><![CDATA[${post.frontMatter.description}]]></description>
  <link>${siteConfig.url}/blog/${post.frontMatter.slug}</link>
  <guid>${siteConfig.url}/blog/${post.frontMatter.slug}</guid>
  <pubDate>${new Date(post.frontMatter.date).toUTCString()}</pubDate>
</item>`;
    })
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name} Blog</title>
    <link>${siteConfig.url}</link>
    <description>${siteConfig.description}</description>
    <language>${siteConfig.locale}</language>
    ${feedItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
