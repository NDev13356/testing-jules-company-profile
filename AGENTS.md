# AGENTS.md — Portfolio Website

## Project Overview
A **dark, modern creative portfolio** for a Designer/Creative professional. Built with Next.js 14 (App Router) and TailwindCSS. The aesthetic is bold, editorial, and typographically-driven — think high-end design studio meets personal brand.

## Tech Stack
- **Framework**: Next.js 14 (App Router, `/app` directory)
- **Styling**: TailwindCSS + CSS custom properties for design tokens
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (loaded via `next/font/google`)
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Language**: TypeScript

## Project Structure
```
/app
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Home page — assembles all sections
  globals.css         # CSS variables, base styles, custom utilities
  /blog
    page.tsx          # Blog listing page
    /[slug]
      page.tsx        # Individual blog post page

/components
  /ui
    Button.tsx
    Tag.tsx
  /sections
    Hero.tsx          # Full-screen hero with animated name reveal
    About.tsx         # About me with photo and bio
    Projects.tsx      # Work/projects grid with hover previews
    Skills.tsx        # Tech stack & tools with visual flair
    Blog.tsx          # Latest articles preview
    Contact.tsx       # Contact form
  /layout
    Navbar.tsx        # Fixed top nav with scroll behavior
    Footer.tsx

/lib
  data.ts             # All content: projects, skills, blog posts, personal info
  types.ts            # TypeScript interfaces

/public
  /images             # Project screenshots, profile photo
```

## Design System
All design tokens are in `globals.css` as CSS variables:

```css
--background: #0A0A0F
--surface: rgba(255,255,255,0.05)
--border: rgba(255,255,255,0.09)
--text-primary: #FFF8F0
--text-muted: rgba(255,248,240,0.45)
--accent: #CAFF00        /* Primary accent — acid green */
--accent-coral: #FF5C5C
--accent-blue: #5B8DFF
--font-display: 'Bricolage Grotesque'
--font-serif: 'Instrument Serif'
--font-body: 'DM Sans'
```

## Key Design Principles
1. **Dark background** (#0A0A0F) with glassmorphic cards (backdrop-filter: blur)
2. **Acid green** (#CAFF00) as the primary accent — used for highlights, CTAs, hover states
3. **Kinetic typography** — text animations on scroll entry using Framer Motion
4. **Grain overlay** on hero for texture depth
5. **Custom cursor** — small dot + lagging ring, blends with `mix-blend-mode: difference`
6. **Asymmetric layouts** — avoid rigid 3-column grids, use varied column spans

## Section-Specific Notes

### Hero (`/components/sections/Hero.tsx`)
- Full viewport height
- Large display name with staggered letter/word reveal animation
- Subtitle with typewriter or fade-up effect
- Floating glassmorphic badge (e.g., "Available for work" with pulse dot)
- Scroll indicator at bottom

### Projects (`/components/sections/Projects.tsx`)
- Featured project takes full width (or 2/3 + 1/3 split)
- Smaller projects in a masonry-ish grid below
- On hover: project image scales slightly, overlay shows quick info
- Each project card: title, tags (design/branding/web), year, brief description

### Skills (`/components/sections/Skills.tsx`)
- Group by category: Design Tools, Web, Motion, Strategy
- Skill items as minimal tags/chips with subtle hover glow
- NOT a boring progress-bar layout

### Blog (`/components/sections/Blog.tsx`)
- Show 3 latest posts
- Card layout with date, reading time, tags
- Link to `/blog` for full listing

### Contact (`/components/sections/Contact.tsx`)
- Simple form: Name, Email, Message, Send button
- Alongside: email address, social links (Dribbble, Instagram, LinkedIn, Twitter)
- Form validation with React Hook Form

## Content Source
All dynamic content (projects, skills, blog posts) lives in `/lib/data.ts` as typed arrays. Never hardcode content inside components — always import from data.ts.

## Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build
npm run lint         # ESLint check
```

## Jules Task Guidelines
- When adding new sections or components, always follow the existing design system (colors, fonts, spacing)
- Keep animations performant — prefer CSS transitions for simple hover states, Framer Motion only for complex sequences
- Ensure all pages are responsive (mobile-first)
- TypeScript strict mode is on — no `any` types
- All text content must come from `/lib/data.ts`, not hardcoded
