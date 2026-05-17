import '@/styles/globals.css';
import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/lib/site';
import { defaultMetadata } from '@/lib/seo';
import { Analytics } from '@/components/analytics';

export const metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-brand-500 selection:text-slate-950">
        <ThemeProvider>
          <script
            id="site-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: siteConfig.name,
                url: siteConfig.url,
                description: siteConfig.description,
                publisher: {
                  '@type': 'Organization',
                  name: siteConfig.name,
                  logo: {
                    '@type': 'ImageObject',
                    url: `${siteConfig.url}/favicon.svg`
                  }
                }
              })
            }}
          />
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_45%)]" />
            <div className="relative z-10 mx-auto flex min-h-screen max-w-[1800px] flex-col px-4 sm:px-6 lg:px-8">
              {children}
            </div>
            <Analytics siteUrl={siteConfig.url} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
