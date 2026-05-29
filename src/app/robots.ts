import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/favicon.ico',
        '/icon-48.png',
        '/icon-96.png',
        '/icon-192.png',
        '/icon-512.png',
        '/apple-touch-icon.png'
      ],
      disallow: '/api/*',
    },
    sitemap: 'https://www.zenlift.in/sitemap.xml',
  };
}
