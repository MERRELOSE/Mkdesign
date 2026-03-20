export interface Project {
  slug: string;
  title: string;
  description: string;
  details: string;
  features: string[];
  challenges: string;
  tags: string[];
  images: string[];
  github: string | null;
  live: string | null;
  badge: string | null;
}

export const projects: Project[] = [
  {
    slug: "clausub",
    title: "ClauSub — AI Viral Subtitles",
    description: "Mobile app that auto-generates viral subtitles on short videos for TikTok, Reels & Shorts using AI.",
    details: "ClauSub is a production-ready mobile application that leverages OpenAI's Whisper API to automatically transcribe and generate viral-style subtitles on short-form videos. The app processes videos through an asynchronous pipeline: upload to Backblaze B2 via presigned URLs, transcription with word-level timestamps, subtitle generation with 9 different styles (karaoke, pop-in, neon glow...), and FFmpeg rendering with ASS stylesheets. The backend runs on Laravel 11 with Redis-powered queues managed by Horizon, deployed on Railway with Docker multi-stage builds.",
    features: [
      "9 subtitle styles with custom color picker (karaoke, pop-in, neon glow, emojis)",
      "Whisper AI transcription with 100+ language auto-detection",
      "FFmpeg server-side rendering with ASS stylesheets",
      "Presigned URL uploads — backend never touches video data",
      "RevenueCat in-app purchases with idempotent webhooks",
      "8-language internationalization (type-safe i18next)",
      "3 specialized Redis queues (transcribe / render / default)",
      "Offline detection with automatic retry on upload",
      "Onboarding flow with language selection",
      "Google Sign-In + classic authentication via Sanctum",
    ],
    challenges: "The biggest challenge was building the video processing pipeline. Each video goes through multiple async stages — transcription, subtitle generation, and FFmpeg rendering — all on separate Redis queues to avoid blocking. The subtitle rendering required deep knowledge of ASS format to create karaoke-style word-level animations with custom colors and effects. Another challenge was implementing presigned URL uploads so the backend never handles video data, keeping bandwidth costs at zero.",
    tags: ["React Native", "Laravel", "Whisper AI", "FFmpeg", "Expo", "Docker"],
    images: [
      "/projects/clausub/1.png",
      "/projects/clausub/2.png",
      "/projects/clausub/3.png",
      "/projects/clausub/4.png",
    ],
    github: null,
    live: null,
    badge: "In Development",
  },
  {
    slug: "tourism-booking",
    title: "Tourism Booking Platform",
    description: "Full-stack web application for booking tourist site visits and participating in cultural events.",
    details: "A comprehensive tourism platform that enables users to discover, book, and pay for tourist site visits and cultural events. The application features a public-facing booking interface built with React and a robust Laravel backend handling payment processing, reservation management, and event scheduling. The admin dashboard provides complete control over sites, events, guides, and booking analytics.",
    features: [
      "Online booking system with integrated payment processing",
      "Event calendar with cultural activities and guided tours",
      "Admin dashboard for managing sites, events, and guides",
      "Booking confirmation with email notifications",
      "User reviews and ratings system",
      "Responsive design for mobile booking on-the-go",
    ],
    challenges: "The main challenge was integrating a reliable payment system for a market where standard gateways aren't always available. I also had to design a booking conflict resolution system to prevent double-bookings on guided tours with limited capacity, using database-level locks and queue-based confirmation flows.",
    tags: ["React", "Laravel", "MySQL"],
    images: [
      "/projects/tourism/1.png",
      "/projects/tourism/2.png",
      "/projects/tourism/3.png",
      "/projects/tourism/4.png",
    ],
    github: "https://github.com/MERRELOSE/reservation-touristique",
    live: null,
    badge: null,
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    description: "Enterprise-grade SaaS dashboard with multi-currency, dark/light mode, filters, and CSV export.",
    details: "A feature-rich SaaS dashboard template built entirely with Laravel. Designed for businesses that need a comprehensive admin panel with real-time data visualization. The dashboard supports multiple currencies with live conversion, advanced data filtering, and one-click CSV export. The UI adapts seamlessly between dark and light modes, with a fully responsive layout that works on all devices.",
    features: [
      "Multi-currency support with dynamic conversion",
      "Dark / Light mode with system preference detection",
      "Advanced filters with real-time data updates",
      "CSV export for reports and analytics data",
      "User profile management and role-based access",
      "Responsive charts and data visualization",
    ],
    challenges: "Implementing multi-currency support was the most complex feature. I had to build a currency conversion layer that updates rates regularly and recalculates all displayed values in real-time when the user switches currency. The dark/light mode also required careful design of every component to ensure readability and visual consistency in both themes.",
    tags: ["Laravel", "MySQL", "HTML5", "CSS3"],
    images: [
      "/projects/dashboard/1.png",
      "/projects/dashboard/2.png",
      "/projects/dashboard/3.png",
      "/projects/dashboard/4.png",
      "/projects/dashboard/5.png",
      "/projects/dashboard/6.png",
    ],
    github: "https://github.com/MERRELOSE/Saas-Dashboard",
    live: null,
    badge: null,
  },
  {
    slug: "shopify-hub",
    title: "Shopify Multi-Store Hub",
    description: "Connects multiple Shopify stores in real-time, centralizing data into a clean Filament dashboard.",
    details: "Built for a client managing multiple Shopify stores, this application connects to the Shopify API to pull real-time data from all connected stores and centralizes it into a single, clean dashboard built with Laravel Filament. Store owners can monitor products, orders, and inventory across all their shops from one interface. Features include admin authentication, dark/light mode, and automatic data synchronization.",
    features: [
      "Real-time multi-store Shopify API integration",
      "Centralized dashboard built with Laravel Filament",
      "Products, orders, and inventory monitoring across stores",
      "Admin authentication with role-based permissions",
      "Dark / Light mode toggle",
      "Automatic data sync with configurable intervals",
    ],
    challenges: "The main challenge was handling Shopify's API rate limits across multiple stores simultaneously. I implemented a queue-based sync system with exponential backoff and intelligent request batching to stay within rate limits while keeping data fresh. The real-time aspect required WebSocket connections to push updates to the dashboard as soon as new orders come in from any connected store.",
    tags: ["Laravel", "Filament", "Shopify API", "MySQL"],
    images: [
      "/projects/shopify/1.png",
      "/projects/shopify/2.png",
      "/projects/shopify/3.png",
      "/projects/shopify/4.png",
    ],
    github: null,
    live: null,
    badge: "Client Project",
  },
  {
    slug: "live-streaming",
    title: "Live Streaming Platform",
    description: "Complete live streaming system with real-time video, chat, and viewer invitations.",
    details: "Integrated a full live streaming solution into an existing Laravel web application. The system uses LiveKit for WebRTC-based video broadcasting and WebSockets for real-time chat and presence. Viewers can be invited to join streams, interact via live chat, and hosts have full control over stream settings and participant management.",
    features: [
      "Real-time video broadcasting with LiveKit WebRTC",
      "Live chat with WebSocket-powered messaging",
      "Viewer invitation system with access control",
      "Host controls for stream and participant management",
      "Stream recording and replay capabilities",
      "Real-time viewer count and engagement metrics",
    ],
    challenges: "Integrating LiveKit into an existing Laravel application required building a custom bridge between PHP and the LiveKit server SDK. The real-time chat had to handle hundreds of concurrent messages without lag, which I solved using WebSocket channels with Redis pub/sub for horizontal scaling.",
    tags: ["Laravel", "LiveKit", "WebSocket"],
    images: [
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    github: null,
    live: null,
    badge: "Private",
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    description: "Modern developer portfolio built with Next.js 14, featuring bilingual support, dynamic theming, and project showcases.",
    details: "My personal portfolio website, the one you're currently browsing. Built from scratch with Next.js 14 App Router, TypeScript, and Tailwind CSS. The site features a complete bilingual system (English/French) powered by React Context, a centralized color palette system that allows swapping the entire theme by changing just 2 lines of code, EmailJS-powered contact form, and dedicated project pages with image carousels. Every component is fully responsive with mobile-first spacing, and the site is deployed on Vercel with automatic CI/CD from GitHub.",
    features: [
      "Next.js 14 App Router with TypeScript",
      "Bilingual support (EN/FR) with React Context",
      "Centralized palette system — swap all colors in 2 lines",
      "Dark / Light mode with localStorage persistence",
      "Framer Motion animations throughout",
      "EmailJS contact form with styled email templates",
      "Dynamic project pages with image carousels",
      "SEO optimized with Open Graph metadata",
      "Fully responsive mobile-first design",
      "Deployed on Vercel with automatic CI/CD",
    ],
    challenges: "The biggest design challenge was building a centralized color system where changing just two lines in the Tailwind config swaps the entire site palette across all components. This required mapping every color reference to semantic tokens (primary/accent) instead of hardcoded values. The bilingual system also needed careful architecture — all translations are type-safe and the context ensures the entire UI updates instantly when the language is toggled.",
    tags: ["Next.js", "TypeScript", "React"],
    images: [
      "/projects/portfolio/1.png",
      "/projects/portfolio/2.png",
      "/projects/portfolio/3.png",
      "/projects/portfolio/4.png",
    ],
    github: "https://github.com/MERRELOSE/Mkdesign",
    live: "https://mkdesign-phi.vercel.app",
    badge: null,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
