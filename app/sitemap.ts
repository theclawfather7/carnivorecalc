import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carnivorecalc.com'

  const blogSlugs = [
    'carnivore-diet-food-list',
    'how-much-protein-on-carnivore',
    'carnivore-diet-beginners-guide',
    'carnivore-diet-30-day-results',
    'carnivore-vs-keto',
    'carnivore-diet-weight-loss',
  ]

  const foodSlugs = [
    'ribeye-steak', 'eggs', 'bacon', 'ground-beef', 'salmon',
    'chicken-thighs', 'butter', 'beef-liver', 'lamb-chops', 'sardines',
    'pork-belly', 'beef-tallow', 'new-york-strip', 'shrimp', 'heavy-cream',
  ]

  const recipeSlugs = [
    'ribeye-steak', 'ground-beef-bowl', 'bacon-and-eggs', 'salmon-fillet',
    'beef-liver', 'scrambled-eggs', 'chuck-roast', 'bone-broth',
  ]

  const goalSlugs = [
    'weight-loss',
    'muscle-gain',
    'women',
    'beginners',
    'lion-diet',
    'diabetes',
    'athletes',
    'autoimmune',
  ]

  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2026-03-17'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const goalUrls = goalSlugs.map((slug) => ({
    url: `${baseUrl}/goals/${slug}`,
    lastModified: new Date('2026-03-18'),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/goals`,
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...goalUrls,
    {
      url: `${baseUrl}/foods`,
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...foodSlugs.map((slug) => ({
      url: `${baseUrl}/foods/${slug}`,
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-03-17'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogUrls,
    {
      url: `${baseUrl}/recipes`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    ...recipeSlugs.map((slug) => ({
      url: `${baseUrl}/recipes/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date('2026-03-17'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-03-17'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-03-17'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
