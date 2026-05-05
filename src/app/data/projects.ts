export type Project = {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  metrics: string;
  gradient: string;
  slug?: string;
  role?: string;
  featured?: boolean;
};

export const upLevoPosProject: Project = {
  title: 'UpLevo POS',
  role: 'Founder',
  featured: true,
  slug: 'uplevo-pos',
  problem:
    'Retail teams needed one reliable product for checkout, FIFO inventory control, and invoice digitization without fragmented tooling.',
  solution:
    'Built a unified multi-tenant POS platform combining real-time inventory and an AI invoice extraction workflow in a single architecture.',
  outcome:
    'Handles high-volume daily operations while reducing invoice-entry effort and improving stock accuracy across business workflows.',
  tech: ['Laravel', 'PostgreSQL', 'FastAPI', 'Redis', 'Queue Workers', 'Mistral OCR'],
  metrics: 'Founder-led unified product',
  gradient: 'from-fuchsia-600 to-violet-600',
};

export const portfolioProjects: Project[] = [
  upLevoPosProject,
  {
    title: 'Multi-Tenant Web Builder Platform',
    problem:
      'Businesses needed a white-label solution to create custom web experiences without technical expertise.',
    solution:
      'Architected a multi-tenant SaaS platform with isolated workspaces, drag-and-drop builder, and custom domain support.',
    outcome: 'Powers 500+ businesses with 99.9% uptime',
    tech: ['Laravel', 'MySQL', 'Redis', 'AWS S3'],
    metrics: '500+ active tenants',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Scalable Multi-Level Menu System',
    problem:
      'Restaurant chains needed a flexible menu management system that could handle complex hierarchies and variations.',
    solution:
      'Engineered a recursive menu builder with nested categories, modifiers, and pricing rules across 1000+ locations.',
    outcome: 'Serving 1000+ restaurant businesses',
    tech: ['Laravel', 'MySQL', 'Caching Layer'],
    metrics: '1000+ businesses',
    gradient: 'from-orange-600 to-red-600',
  },
];
