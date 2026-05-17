'use client';

import { useEffect } from 'react';

export function Analytics({ siteUrl }: { siteUrl: string }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    script.setAttribute('data-cf-beacon', `{"token":"YOUR_CLOUDFLARE_TOKEN"}`);
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [siteUrl]);

  return null;
}
