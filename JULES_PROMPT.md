# Jules Task — Build Creative Portfolio Website

## Goal
Build a complete **dark, modern creative portfolio website** from scratch using Next.js 14 (App Router), TailwindCSS, and Framer Motion. The site is for a Designer/Creative professional.

Read `AGENTS.md` first for full project context, design system, and structure guidelines.

---

## Tasks (execute in order)

### 1. Project Setup
- Initialize Next.js 14 with TypeScript and App Router
- Install dependencies: `tailwindcss`, `framer-motion`, `lucide-react`, `react-hook-form`
- Configure `tailwind.config.ts` with custom colors and fonts from the design system in AGENTS.md
- Set up `globals.css` with all CSS variables defined in AGENTS.md
- Add Google Fonts in `layout.tsx`: Bricolage Grotesque, Instrument Serif, DM Sans

### 2. Data & Types
- Create `/lib/types.ts` with interfaces: `Project`, `Skill`, `SkillCategory`, `BlogPost`, `SocialLink`
- Create `/lib/data.ts` with placeholder content:
  - 4 projects (with title, description, tags, year, imageUrl, link)
  - Skills grouped in 4 categories: Design Tools (Figma, Adobe CC, Framer), Web (React, Next.js, TailwindCSS), Motion (After Effects, Lottie), Strategy (Brand Strategy, User Research)
  - 3 blog post stubs (title, excerpt, date, readingTime, slug, tags)
  - Personal info: name, tagline, bio, email, social links

### 3. Layout
- `Navbar.tsx`: Fixed top nav, logo left + nav links right, transparent → blurred background on scroll, active section highlighting
- `Footer.tsx`: Minimal dark footer with name, year, social links

### 4. Sections (in order, assembled in `app/page.tsx`)

**Hero.tsx**
- Full viewport height
- Large heading with staggered Framer Motion word reveal (stagger 0.1s per word)
- Subtitle fade-up after heading
- "Available for work" badge (glassmorphic, green pulse dot)
- Scroll-down indicator with bounce animation
- Subtle grain texture overlay via pseudo-element

**About.tsx**
- Two-column layout: text left, visual right
- Bio text with a highlighted pull quote
- Small stat row: years experience, projects shipped, clients

**Projects.tsx**
- Section heading with animated counter
- First/featured project: large card spanning full width, image on right, details on left
- Remaining 3 projects: responsive grid (2-col on desktop)
- Each card: hover lifts with shadow, image zoom effect, tags as chips

**Skills.tsx**
- Grouped by category with category label
- Skills as rounded tag chips with subtle colored dot per category
- Staggered fade-in on scroll entry

**Blog.tsx**
- 3 article preview cards in a row
- Each: date, read time, title, excerpt, tags, "Read →" link
- "View all posts →" link to /blog

**Contact.tsx**
- Split layout: left = heading + social links + email; right = form
- Form fields: Name, Email, Message (textarea), Send button (acid green)
- React Hook Form validation (required fields, email format)
- Success state after submit (show thank you message)

### 5. Blog Pages
- `/app/blog/page.tsx`: Grid of all blog posts from data.ts
- `/app/blog/[slug]/page.tsx`: Single post layout with back link, title, date, reading time, placeholder content area

### 6. Polish
- Add custom CSS cursor (small dot + lagging ring via JS in a `CustomCursor.tsx` client component)
- Ensure fully responsive on mobile (hamburger menu for nav on mobile)
- Add `<meta>` tags and Open Graph in `layout.tsx`
- Smooth scroll behavior in globals.css
- Add scroll-triggered reveal for all sections using a reusable `useScrollReveal` hook with Framer Motion

---

## Definition of Done
- `npm run build` passes with no errors
- All 6 sections render correctly on desktop and mobile
- Animations play on initial load and scroll
- Contact form validates and shows success state
- Blog listing and single post pages work
- No TypeScript errors, no ESLint warnings
