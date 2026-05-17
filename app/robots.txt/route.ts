import { NextResponse } from 'next/server';

export async function GET() {
  const content = `User-agent: *
Allow: /
Sitemap: https://rangingfx.com/sitemap.xml
Host: rangingfx.com
`;
  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8'
    }
  });
}
