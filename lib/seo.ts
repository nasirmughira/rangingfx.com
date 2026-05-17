import { siteConfig } from './site';

export const defaultMetadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  manifest: '/manifest.json',
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'RangingFX Premium' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og-image.svg']
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  }
};

export const generatePageMetadata = ({
  title,
  description,
  pathname,
  image
}: {
  title: string;
  description: string;
  pathname?: string;
  image?: string;
}) => ({
  title: `${title} | ${siteConfig.name}`,
  description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: pathname ? `${siteConfig.url}${pathname}` : siteConfig.url
  },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: pathname ? `${siteConfig.url}${pathname}` : siteConfig.url,
    images: [{ url: image ?? '/og-image.svg', width: 1200, height: 630, alt: title }]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [image ?? '/og-image.svg']
  }
});
