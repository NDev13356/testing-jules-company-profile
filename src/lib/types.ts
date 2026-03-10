export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  imageUrl: string;
  link: string;
  featured?: boolean;
}

export type SkillCategory = 'Design Tools' | 'Web' | 'Motion' | 'Strategy';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  slug: string;
  tags: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  socialLinks: SocialLink[];
  experienceYears: number;
  projectsShipped: number;
  clients: number;
}
