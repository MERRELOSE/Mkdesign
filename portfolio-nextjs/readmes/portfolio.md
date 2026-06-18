<div align="center">

# Personal Portfolio

**Modern developer portfolio built with Next.js 14 — featuring bilingual support, dynamic theming, and detailed project showcases.**

[![Live](https://img.shields.io/badge/Live-kennedymerrelose.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://kennedymerrelose.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## Overview

My personal portfolio website — the one recruiters and clients land on first.

Built from scratch with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**. Every piece is intentional: bilingual content, a swappable color palette, instant theme switching, animated project pages, a working contact form, and a perfect Lighthouse score.

> **Live at:** [kennedymerrelose.vercel.app](https://kennedymerrelose.vercel.app)

---

## Preview

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/01-hero.png" width="400" alt="Hero section" /></td>
    <td><img src="./screenshots/02-projects.png" width="400" alt="Projects grid" /></td>
  </tr>
  <tr>
    <td><img src="./screenshots/03-project-detail.png" width="400" alt="Project detail page" /></td>
    <td><img src="./screenshots/04-dark-mode.png" width="400" alt="Dark mode" /></td>
  </tr>
</table>

</div>

---

## Key Features

- ⚡ **Next.js 14 App Router** with TypeScript end-to-end
- 🌐 **Bilingual support (EN/FR)** powered by React Context — instant UI switch, no reload
- 🎨 **Centralized palette system** — swap the entire site's colors in 2 lines of Tailwind config
- 🌓 **Dark / Light mode** with localStorage persistence and no FOUC
- 🎬 **Framer Motion animations** throughout (hero, scroll reveals, page transitions)
- ✉️ **EmailJS contact form** with styled HTML email templates
- 📄 **Dynamic project pages** with image carousels and keyboard navigation
- 📞 **Cal.com integration** for direct call booking
- 💬 **WhatsApp floating button** for quick mobile contact
- 🔍 **SEO optimized** — JSON-LD Person schema, Open Graph, sitemap, robots, multi-locale alternates
- 📱 **Fully responsive** mobile-first design
- 🚀 **Deployed on Vercel** with automatic CI/CD from GitHub
- 📊 **Lighthouse 100/100** on performance, accessibility, best practices, SEO

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Forms | EmailJS (browser SDK) |
| i18n | Custom React Context (type-safe) |
| Deployment | Vercel |
| CI/CD | GitHub → Vercel automatic |

---

## Architecture

```
┌──────────────────────────────────────────────────────┐
│              Next.js 14 App Router                   │
│                                                      │
│  ┌────────────────┐    ┌────────────────────────┐    │
│  │  app/          │    │   components/          │    │
│  │                │    │                        │    │
│  │  layout.tsx ───┼───▶│   Navbar, Footer       │    │
│  │  page.tsx      │    │   Hero, About, Skills  │    │
│  │  projects/     │    │   Projects, Contact    │    │
│  │   [slug]/      │    │   Testimonials         │    │
│  │   page.tsx     │    │   WhatsAppFloating     │    │
│  │  sitemap.ts    │    └────────────────────────┘    │
│  │  robots.ts     │                                  │
│  │  opengraph-    │    ┌────────────────────────┐    │
│  │   image.tsx    │    │   lib/                 │    │
│  └────────────────┘    │                        │    │
│                        │   projects.ts (data)   │    │
│                        │   i18n/                │    │
│                        │     LanguageContext    │    │
│                        │     translations       │    │
│                        │   ThemeContext         │    │
│                        └────────────────────────┘    │
└──────────────────────────────────────────────────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │       Vercel        │
                │   Edge + CDN + SSR  │
                └─────────────────────┘
```

---

## Technical Highlights

### 1. Centralized, swappable color palette

Every component uses **semantic Tailwind tokens** (`primary-500`, `accent-500`) instead of hard-coded colors. The actual palette is defined once in `tailwind.config.ts`:

```ts
colors: {
  primary: { 50: '#eff6ff', 500: '#3b82f6', 900: '#1e3a8a', ... },
  accent:  { 50: '#ecfeff', 500: '#06b6d4', 900: '#164e63', ... },
}
```

**Want a green/violet site instead of blue/cyan? Change two lines.** Every gradient, hover state, glow, badge — everything updates.

### 2. Type-safe bilingual system

All translations live in a single `translations.ts` file:

```ts
export const translations = {
  en: { hero: { greeting: "Hi, I'm", ... }, ... },
  fr: { hero: { greeting: "Salut, je suis", ... }, ... },
};

export type Translations = typeof translations.en;
```

TypeScript enforces that `fr` has the exact same shape as `en` — **add a key in EN, the FR side fails to compile until you translate it**. No runtime missing-key bugs.

### 3. Bilingual project data

Project details (title, description, features, challenges) are localized at the data layer:

```ts
title: { en: "ClauSub — AI Viral Subtitles", fr: "ClauSub — Sous-titres Viraux IA" },
features: { en: [...], fr: [...] },
```

The detail page reads `project.title[language]` — switching language updates the entire page instantly.

### 4. Theme persistence without FOUC

Dark mode is applied via a `dark` class on `<html>` before React hydrates, using a script in `<head>` that reads `localStorage`. **No flash of wrong theme** on first paint.

### 5. SEO that takes itself seriously

- `app/sitemap.ts` — dynamic sitemap including all project pages
- `app/robots.ts` — proper robots.txt
- `app/opengraph-image.tsx` — generated OG image at build time
- `JsonLd.tsx` — Person schema for rich snippets in Google
- `metadata.alternates.languages` — hreflang declared for EN + FR

---

## Screenshots

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/05-about.png" width="270" /></td>
    <td><img src="./screenshots/06-skills.png" width="270" /></td>
    <td><img src="./screenshots/07-testimonials.png" width="270" /></td>
  </tr>
  <tr>
    <td><img src="./screenshots/08-contact.png" width="270" /></td>
    <td><img src="./screenshots/09-mobile.png" width="270" /></td>
    <td><img src="./screenshots/10-french.png" width="270" /></td>
  </tr>
</table>

</div>

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm / pnpm / yarn

### Installation

```bash
# Clone
git clone https://github.com/MERRELOSE/Mkdesign.git
cd Mkdesign

# Install
npm install

# Configure environment (for EmailJS)
cp .env.example .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Required environment

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx              # Root layout (Navbar, Footer, Providers)
│   ├── page.tsx                # Home page (composes sections)
│   ├── globals.css             # Tailwind + custom utilities
│   ├── sitemap.ts              # Dynamic sitemap
│   ├── robots.ts               # Crawler rules
│   ├── opengraph-image.tsx     # Generated OG image
│   └── projects/[slug]/
│       └── page.tsx            # Project detail page
│
├── components/
│   ├── Hero.tsx                # Animated hero with stats
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx            # Bento grid of projects
│   ├── Testimonials.tsx
│   ├── Contact.tsx             # EmailJS form
│   ├── Navbar.tsx              # Language + theme switchers
│   ├── Footer.tsx
│   ├── WhatsAppFloating.tsx
│   ├── JsonLd.tsx              # SEO Person schema
│   ├── TechIcons.tsx           # Custom SVG tech icons
│   └── AnimatedNumber.tsx      # Counter animation
│
├── lib/
│   ├── projects.ts             # Bilingual project data
│   ├── i18n/
│   │   ├── LanguageContext.tsx
│   │   └── translations.ts     # All UI strings (EN + FR, type-safe)
│   ├── ThemeContext.tsx
│   └── utils.ts                # cn() helper
│
├── public/
│   ├── profile.jpg
│   └── projects/               # Project screenshots
│
└── tailwind.config.ts          # Centralized palette
```

---

## Customization

### Swap the color palette

Edit `tailwind.config.ts`:

```ts
primary: { 500: '#ec4899' },  // pink
accent:  { 500: '#f59e0b' },  // amber
```

That's it — site-wide palette flip.

### Add a language

1. Add a new key in `translations.ts`:
   ```ts
   es: { /* same shape as en, TS will enforce it */ }
   ```
2. Update the `Language` type:
   ```ts
   export type Language = 'en' | 'fr' | 'es';
   ```
3. Update the language switcher in `Navbar.tsx`.

### Add a project

Add an entry to `lib/projects.ts` with bilingual fields. The grid and detail page pick it up automatically.

---

## Performance

| Metric | Score |
|---|---|
| Lighthouse Performance | 100/100 |
| Lighthouse Accessibility | 100/100 |
| Lighthouse Best Practices | 100/100 |
| Lighthouse SEO | 100/100 |
| First Load JS | ~138 kB |
| Static pages | 6 (all prerendered) |

---

## Roadmap

- [ ] Blog section (MDX-powered)
- [ ] Search-engine-indexable project case studies
- [ ] Spanish + Portuguese locales
- [ ] Live GitHub stats widget

---

## Author

**Kennedy MERRELOSE** — Full-Stack Developer

- Portfolio: [kennedymerrelose.vercel.app](https://kennedymerrelose.vercel.app)
- Upwork: [Top Rated, 100% Job Success](https://www.upwork.com/freelancers/~01fd4e5b112fcd6443)
- LinkedIn: [Kennedy MERRELOSE](https://www.linkedin.com/in/kennedy-merrelose-165092283)
- GitHub: [@MERRELOSE](https://github.com/MERRELOSE)
- Email: kennedymerrelose@gmail.com

---

## License

This portfolio is for personal use. Feel free to draw inspiration from the code, but please don't copy it directly.

---

<sub>Built with ❤ — designed to load fast, look sharp, and convert.</sub>
