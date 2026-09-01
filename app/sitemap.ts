import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bluepin.in',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Add more routes here as the application grows
  ];
}
