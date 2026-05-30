import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.zenlift.in';
  const routes = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/products',
    '/products/chatflow',
    '/products/leadpulse',
    '/products/tutorplus',
    '/products/whypaperbill',
    '/products/zendesk-crm',
    '/solutions/clinics',
    '/solutions/coaching',
    '/solutions/fitness',
    '/solutions/real-estate',
    '/solutions/restaurants',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/solutions') ? 0.8 : route.startsWith('/products') ? 0.7 : 0.5,
  }));
}

