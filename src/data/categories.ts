
export interface Category {
  name: string;
  slug: string;
  description?: string;
  icon?: string;
}

export const categories: Category[] = [
  {
    name: 'Tech',
    slug: 'tech',
    description: 'Latest in technology and software development'
  },
  {
    name: 'Web Development',
    slug: 'web-development',
    description: 'Tips and insights for better web development'
  },
  {
    name: 'Design',
    slug: 'design',
    description: 'Exploring design and user experience'
  },
  {
    name: 'Accessibility',
    slug: 'accessibility',
    description: 'Exploring accessibility and user experience'
  },
  {
    name: 'Theme Usage',
    slug: 'theme-usage',
    description: 'Learn how to use the theme'
  },
  {
    name: 'Astro JS',
    slug: 'astro-js',
    description: 'Everything about Astro JS framework and development'
  },
  {
    name: 'SEO',
    slug: 'seo',
    description: 'Search engine optimization strategies and best practices'
  },
    {
        name: 'Bootcamp',
        slug: 'Bootcamp',
        // icon: Dumbbell
        icon: 'ph:boot'
    },
    {
        name: 'Run',
        slug: 'run',
        icon: 'ph:person-simple-run',
    },
    {
        name: 'Ruck',
        slug: 'ruck',
        // icon: Backpack
        icon: 'ph:backpack'
    }
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}

export function getCategoryByName(name: string): Category | undefined {
  return categories.find(category => category.name === name)
}
