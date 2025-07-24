// Contact link interface
export interface ContactLink {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
}

// Skill tag interface
export interface SkillTag {
  name: string;
  category?: 'backend' | 'frontend' | 'database' | 'tooling';
}

// SEO metadata interface
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

// Navigation link interface
export interface NavLink {
  href: string;
  label: string;
  current?: boolean;
} 