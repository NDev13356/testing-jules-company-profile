import { Project, Skill, BlogPost, PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
  name: "Alex Designer",
  tagline: "I build digital experiences that live at the intersection of bold aesthetics and intuitive strategy.",
  bio: "With a background spanning both fine arts and human-computer interaction, I don't just push pixels. I craft narratives. My approach bridges the gap between raw creative expression and systematic product thinking, resulting in interfaces that feel both surprising and inevitable. “Good design is obvious. Great design is transparent.”",
  email: "hello@alexdesigner.co",
  socialLinks: [
    { platform: "Dribbble", url: "https://dribbble.com" },
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "LinkedIn", url: "https://linkedin.com" },
    { platform: "Twitter", url: "https://twitter.com" },
  ],
  experienceYears: 6,
  projectsShipped: 40,
  clients: 24,
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Aura Brand Identity",
    description: "A complete visual overhaul and digital presence for a next-gen wellness platform. Combining stark brutalism with warm, tactile motion to redefine health tech.",
    tags: ["Branding", "Web Design", "Motion"],
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2829&auto=format&fit=crop",
    link: "https://example.com/project1",
    featured: true,
  },
  {
    id: "2",
    title: "Nova Dashboard",
    description: "Financial analytics interface designed for extreme clarity and dense data density.",
    tags: ["Product Design", "Design Systems"],
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    link: "https://example.com/project2",
  },
  {
    id: "3",
    title: "Lumina App",
    description: "A consumer iOS application focusing on micro-interactions and haptic feedback.",
    tags: ["UI/UX", "iOS", "Prototyping"],
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2940&auto=format&fit=crop",
    link: "https://example.com/project3",
  },
  {
    id: "4",
    title: "Elysium E-commerce",
    description: "Headless Shopify storefront emphasizing editorial layout and immersive product storytelling.",
    tags: ["E-commerce", "Web Design", "Development"],
    year: "2022",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop",
    link: "https://example.com/project4",
  },
];

export const skills: Skill[] = [
  { name: "Figma", category: "Design Tools" },
  { name: "Adobe CC", category: "Design Tools" },
  { name: "Framer", category: "Design Tools" },
  { name: "Spline", category: "Design Tools" },

  { name: "React", category: "Web" },
  { name: "Next.js", category: "Web" },
  { name: "TailwindCSS", category: "Web" },
  { name: "Three.js", category: "Web" },

  { name: "After Effects", category: "Motion" },
  { name: "Lottie", category: "Motion" },
  { name: "Framer Motion", category: "Motion" },

  { name: "Brand Strategy", category: "Strategy" },
  { name: "User Research", category: "Strategy" },
  { name: "Information Architecture", category: "Strategy" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Return of Tactile Interfaces in the Digital Age",
    excerpt: "Why the flat design era is ending, and how adding skeuomorphic depth and texture improves usability and emotional connection.",
    date: "October 12, 2023",
    readingTime: "5 min read",
    slug: "tactile-interfaces",
    tags: ["Design Trends", "UI/UX"],
  },
  {
    id: "2",
    title: "Designing for Extremes: Accessibility as a Catalyst",
    excerpt: "How constraints driven by extreme accessibility requirements often lead to universally better design solutions.",
    date: "August 24, 2023",
    readingTime: "7 min read",
    slug: "accessibility-catalyst",
    tags: ["Accessibility", "Strategy"],
  },
  {
    id: "3",
    title: "Motion is Not a Decorative Layer",
    excerpt: "Stop treating animation as an afterthought. It's a fundamental dimension of spatial interfaces that guides user comprehension.",
    date: "May 06, 2023",
    readingTime: "4 min read",
    slug: "motion-fundamental",
    tags: ["Motion", "Interaction"],
  },
];
