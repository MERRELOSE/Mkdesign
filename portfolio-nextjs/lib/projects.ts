export type Language = "en" | "fr";

export type LocalizedString = { en: string; fr: string };
export type LocalizedStringArray = { en: string[]; fr: string[] };

export type BadgeType = "in-development" | "client-project" | "private";

export interface Project {
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  details: LocalizedString;
  features: LocalizedStringArray;
  challenges: LocalizedString;
  tags: string[];
  images: string[];
  mobileImages?: string[];
  github: string | null;
  live: string | null;
  badgeType: BadgeType | null;
}

export const projects: Project[] = [
  {
    slug: "clausub",
    title: {
      en: "ClauSub — AI Viral Subtitles SaaS",
      fr: "ClauSub — SaaS de Sous-titres Viraux IA",
    },
    description: {
      en: "Solo-built SaaS that turns short videos into viral subtitled clips — Laravel API, React Native app, Next.js web, all wired end-to-end.",
      fr: "SaaS développé en solo qui transforme les vidéos courtes en clips sous-titrés viraux — API Laravel, app React Native, site Next.js, le tout branché de bout en bout.",
    },
    details: {
      en: "ClauSub is a mobile-first SaaS I designed and built end-to-end — turning short videos (TikTok, Reels, Shorts) into viral subtitled clips via AI. The differentiator vs Submagic/Opus Clip: bilingual from day one (8 languages: EN, FR, ES, PT, DE, ZH, JA, KO) to tap markets the anglo-centric competitors ignore. Full stack shipped: a Laravel 11 backend (Sanctum, Horizon-managed Redis queues, Stripe + RevenueCat with idempotent webhooks), an Expo React Native app (iOS + Android, i18next, Zustand + TanStack Query), a Next.js 16 web app deployed on Vercel (next-intl 8 locales, Tailwind + Radix), an OpenAI Whisper + FFmpeg pipeline that renders 9 subtitle styles (Classic, Hormozi, MrBeast, karaoke...), and direct mobile → Backblaze B2 uploads via presigned URLs to keep backend bandwidth at zero. Backend hosted on Railway. Growth loops built-in: bilateral referral, watermark on the free tier, 3 credits on signup. Product performance: a 30-second clip is subtitled in under 90 seconds.",
      fr: "ClauSub est un SaaS mobile-first que j'ai conçu et développé seul, end-to-end — transforme les vidéos courtes (TikTok, Reels, Shorts) en clips sous-titrés viraux grâce à l'IA. Le différenciant vs Submagic/Opus Clip : multilingue dès le départ (8 langues : EN, FR, ES, PT, DE, ZH, JA, KO) pour attaquer les marchés que les concurrents anglo-centrés négligent. Stack complète livrée : backend Laravel 11 (Sanctum, queues Redis + Horizon, Stripe + RevenueCat avec webhooks idempotents), app mobile Expo React Native (iOS + Android, i18next, Zustand + TanStack Query), app web Next.js 16 déployée sur Vercel (next-intl 8 locales, Tailwind + Radix), pipeline OpenAI Whisper + FFmpeg qui rend les sous-titres animés en 9 styles (Classic, Hormozi, MrBeast, karaoké...), upload direct mobile → Backblaze B2 via URLs présignées pour garder la bande passante backend à zéro. Backend hébergé sur Railway. Boucles de croissance intégrées : parrainage bilatéral, watermark sur tier gratuit, 3 crédits à l'inscription. Performance produit : un clip de 30s est sous-titré en moins de 90s.",
    },
    features: {
      en: [
        "9 subtitle styles: Classic, Hormozi, MrBeast, karaoke, pop-in, neon glow, emojis",
        "OpenAI Whisper transcription with word-level timestamps, 100+ languages",
        "Server-side FFmpeg rendering with ASS stylesheets",
        "Direct mobile → Backblaze B2 upload via presigned URLs (zero backend egress)",
        "Stripe + RevenueCat billing with idempotent webhooks",
        "8-language i18n across mobile (i18next) and web (next-intl)",
        "Growth loops: bilateral referral, free-tier watermark, 3 signup credits",
        "3 specialized Redis queues (transcribe / render / default)",
        "Offline detection with automatic upload retry",
        "Google Sign-In + classic Sanctum authentication",
      ],
      fr: [
        "9 styles de sous-titres : Classic, Hormozi, MrBeast, karaoké, pop-in, néon, emojis",
        "Transcription OpenAI Whisper avec timestamps au mot près, 100+ langues",
        "Rendu FFmpeg côté serveur via feuilles de style ASS",
        "Upload direct mobile → Backblaze B2 via URLs présignées (zéro egress backend)",
        "Facturation Stripe + RevenueCat avec webhooks idempotents",
        "i18n 8 langues sur mobile (i18next) et web (next-intl)",
        "Boucles de croissance : parrainage bilatéral, watermark tier gratuit, 3 crédits à l'inscription",
        "3 files Redis spécialisées (transcription / rendu / défaut)",
        "Détection hors ligne avec retry automatique à l'upload",
        "Connexion Google + authentification classique via Sanctum",
      ],
    },
    challenges: {
      en: "The biggest technical challenge was designing a zero-egress video pipeline: the Laravel backend never touches video bytes. Mobile clients upload directly to Backblaze B2 using presigned URLs, the backend only orchestrates. Then, 3 isolated Redis queues (transcribe / render / default) prevent long FFmpeg jobs from starving fast jobs like webhook handling. The subtitle rendering itself required deep knowledge of the ASS format to build karaoke-style word-level animations with custom colors — 9 distinct visual styles, each producing consistent output at any resolution. Finally, idempotent webhook handling (unique event_id constraint) guarantees no double-credit under Stripe/RevenueCat retry pressure.",
      fr: "Le plus gros défi technique a été de concevoir un pipeline vidéo à egress zéro : le backend Laravel ne touche jamais aux données vidéo. Les clients mobile uploadent directement vers Backblaze B2 via URLs présignées, le backend ne fait qu'orchestrer. Ensuite, 3 files Redis isolées (transcription / rendu / défaut) empêchent les longs jobs FFmpeg d'affamer les jobs rapides comme le traitement de webhooks. Le rendu des sous-titres a demandé une bonne maîtrise du format ASS pour construire des animations karaoké au mot près avec couleurs personnalisées — 9 styles visuels distincts, chacun produisant une sortie cohérente à toute résolution. Enfin, le traitement idempotent des webhooks (contrainte unique event_id) garantit l'absence de double-crédit sous pression de retry Stripe/RevenueCat.",
    },
    tags: ["Laravel", "React Native", "Next.js", "OpenAI API", "FFmpeg", "TypeScript"],
    images: [
      "/projects/clausub/web/1.jpeg",
      "/projects/clausub/web/2.png",
      "/projects/clausub/web/3.png",
      "/projects/clausub/web/4.png",
      "/projects/clausub/web/5.png",
    ],
    mobileImages: [
      "/projects/clausub/mobile/1.png",
      "/projects/clausub/mobile/2.png",
    ],
    github: null,
    live: "https://clausubai.vercel.app",
    badgeType: null,
  },
  {
    slug: "bourseiq",
    title: {
      en: "BourseIQ — AI-Powered Multi-Market Stock Analysis",
      fr: "BourseIQ — Analyse Boursière Multi-Marchés Propulsée par l'IA",
    },
    description: {
      en: "Full-stack investment analysis platform covering global markets (US/Europe/Asia) and BRVM (47 African UEMOA stocks via custom scraping), with a proprietary 5-dimension scoring engine and a multi-LLM AI layer.",
      fr: "Plateforme full-stack d'analyse d'investissement couvrant les marchés globaux (US/Europe/Asie) et la BRVM (47 titres africains UEMOA via scraping custom), avec un moteur de scoring propriétaire à 5 dimensions et une couche IA multi-LLM.",
    },
    details: {
      en: "BourseIQ analyzes 80+ stocks across global markets (US, Europe, Asia via yfinance) and the Bourse Régionale d'Abidjan (BRVM, 47 UEMOA stocks fetched via custom scrapers on brvm.org and sikafinance.com). The core is a proprietary 5-dimension scoring engine (valuation, quality, financial health, dividend, market risk), enriched with composite metrics (risk/reward, quality/value, sustainable yield). Users track a watchlist, run a multi-currency virtual portfolio (USD and XOF coexist with no FX conversion), execute historical buy-and-hold backtests, receive email alerts when a score or price moves, compare stocks side-by-side with an analytical verdict, and navigate a streaming-style discovery UI with curated carousels. The AI layer is the key differentiator: 5 distinct tasks routed to 5 models via a single OpenRouter API — Gemini 2.5 Flash for narrative synthesis (cheap, high volume), Claude Haiku 4.5 for a disciplined Q&A analyst, Claude Sonnet 4.6 for macro market views and PDF fundamental extraction, and Perplexity Sonar Pro for cited web research. Realistic monthly AI cost: ~$1 for typical usage.",
      fr: "BourseIQ analyse plus de 80 actions couvrant les marchés globaux (US, Europe, Asie via yfinance) et la Bourse Régionale d'Abidjan (BRVM, 47 titres UEMOA récupérés via scrapers custom sur brvm.org et sikafinance.com). Le cœur est un système de scoring propriétaire à 5 dimensions (valorisation, qualité, santé financière, dividende, risque de marché), enrichi de composites (risque/récompense, qualité/prix, rendement durable). L'utilisateur suit une watchlist, gère un portefeuille virtuel multi-devises (USD et XOF cohabitent sans conversion FX), fait des backtests historiques buy-and-hold, reçoit des alertes email quand un score ou prix bouge, compare plusieurs actions côte à côte avec un verdict analytique, et navigue un dashboard style streaming avec carrousels et sections curées. La couche IA est le différenciant majeur : 5 tâches distinctes routées vers 5 modèles via une seule API OpenRouter — Gemini 2.5 Flash pour la synthèse narrative (cheap, haut volume), Claude Haiku 4.5 pour un Q&A analyste discipliné, Claude Sonnet 4.6 pour la vue macro marché et l'extraction de fondamentaux depuis les PDFs, et Perplexity Sonar Pro pour la recherche web avec sources citées. Coût mensuel IA réel : ~1 USD pour un usage normal.",
    },
    features: {
      en: [
        "80+ stocks: US, Europe, Asia (yfinance) + BRVM 47 UEMOA (custom scrapers)",
        "Proprietary 5-dimension scoring engine + composite metrics",
        "Netflix-style discovery UI with curated carousels",
        "Multi-currency virtual portfolio (USD + XOF, no FX conversion)",
        "Historical buy-and-hold backtest with performance chart",
        "Stock comparator with analytical verdict",
        "Multi-LLM AI layer via OpenRouter (Gemini / Claude / Perplexity, task-routed)",
        "Automated email alerts on score or price movement",
        "34 REST endpoints, 10 frontend routes, 25+ reusable React components",
        "Alembic migrations, JWT auth (fastapi-users), rate limiting, env validation",
      ],
      fr: [
        "80+ actions : US, Europe, Asie (yfinance) + BRVM 47 UEMOA (scrapers custom)",
        "Moteur de scoring propriétaire à 5 dimensions + métriques composites",
        "UI de découverte style Netflix avec carrousels curés",
        "Portefeuille virtuel multi-devises (USD + XOF, sans conversion FX)",
        "Backtest historique buy-and-hold avec graphique de performance",
        "Comparateur d'actions avec verdict analytique",
        "Couche IA multi-LLM via OpenRouter (Gemini / Claude / Perplexity, routage par tâche)",
        "Alertes email automatiques sur mouvement de score ou de prix",
        "34 endpoints REST, 10 routes frontend, 25+ composants React réutilisables",
        "Migrations Alembic, auth JWT (fastapi-users), rate limiting, validation env",
      ],
    },
    challenges: {
      en: "The most interesting engineering choice was the multi-LLM routing strategy: instead of paying premium tokens for every task, I mapped each cognitive load to the cheapest model that can do it well. Narrative synthesis on high-volume structured data goes to Gemini Flash; a disciplined 'ask the analyst' Q&A goes to Claude Haiku with a strict anti-advice system prompt; PDF fundamental extraction from annual reports goes to Claude Sonnet (needs long context + precision); web research with cited sources goes to Perplexity Sonar. Result: ~$1/month realistic cost. The other real challenge was building the BRVM data layer: no public API, so I wrote custom scrapers against brvm.org and sikafinance.com with rate-limiting and cache layers, then normalized the outputs into the same scoring pipeline as the global markets.",
      fr: "Le choix d'ingénierie le plus intéressant a été la stratégie de routage multi-LLM : plutôt que de payer des tokens premium pour chaque tâche, j'ai mappé chaque charge cognitive au modèle le moins cher capable de la traiter. La synthèse narrative sur données structurées haut volume va à Gemini Flash ; un Q&A 'demande à l'analyste' discipliné va à Claude Haiku avec un system prompt strict anti-conseil ; l'extraction de fondamentaux depuis les PDFs de rapports annuels va à Claude Sonnet (besoin de contexte long + précision) ; la recherche web avec sources citées va à Perplexity Sonar. Résultat : ~1$/mois de coût réaliste. L'autre vrai défi a été de construire la couche de données BRVM : pas d'API publique, donc j'ai écrit des scrapers custom contre brvm.org et sikafinance.com avec rate-limiting et cache, puis normalisé les sorties dans le même pipeline de scoring que les marchés globaux.",
    },
    tags: ["FastAPI", "Next.js", "TypeScript", "Python", "OpenAI API", "PostgreSQL"],
    images: [
      "/projects/bourseiq/1.png",
      "/projects/bourseiq/2.png",
      "/projects/bourseiq/3.png",
      "/projects/bourseiq/4.png",
      "/projects/bourseiq/5.png",
      "/projects/bourseiq/6.png",
      "/projects/bourseiq/7.png",
    ],
    github: "https://github.com/MERRELOSE/Investissements-en-bourse",
    live: "https://bourseiq-ai.vercel.app",
    badgeType: null,
  },
  {
    slug: "tourism-booking",
    title: {
      en: "Tourism Booking Platform",
      fr: "Plateforme de Réservation Touristique",
    },
    description: {
      en: "Full-stack web application for booking tourist site visits and participating in cultural events.",
      fr: "Application web full-stack pour réserver des visites de sites touristiques et participer à des événements culturels.",
    },
    details: {
      en: "A comprehensive tourism platform that enables users to discover, book, and pay for tourist site visits and cultural events. The application features a public-facing booking interface built with React and a robust Laravel backend handling payment processing, reservation management, and event scheduling. The admin dashboard provides complete control over sites, events, guides, and booking analytics.",
      fr: "Une plateforme touristique complète qui permet aux utilisateurs de découvrir, réserver et payer des visites de sites et événements culturels. L'application propose une interface de réservation publique en React et un backend Laravel robuste qui gère le paiement, la gestion des réservations et la planification des événements. Le tableau de bord admin offre un contrôle total sur les sites, événements, guides et statistiques de réservation.",
    },
    features: {
      en: [
        "Online booking system with integrated payment processing",
        "Event calendar with cultural activities and guided tours",
        "Admin dashboard for managing sites, events, and guides",
        "Booking confirmation with email notifications",
        "User reviews and ratings system",
        "Responsive design for mobile booking on-the-go",
      ],
      fr: [
        "Système de réservation en ligne avec paiement intégré",
        "Calendrier d'événements avec activités culturelles et visites guidées",
        "Tableau de bord admin pour gérer sites, événements et guides",
        "Confirmation de réservation par notification email",
        "Système d'avis et de notes utilisateurs",
        "Design responsive pour la réservation mobile en déplacement",
      ],
    },
    challenges: {
      en: "The main challenge was integrating a reliable payment system for a market where standard gateways aren't always available. I also had to design a booking conflict resolution system to prevent double-bookings on guided tours with limited capacity, using database-level locks and queue-based confirmation flows.",
      fr: "Le principal défi a été d'intégrer un système de paiement fiable pour un marché où les passerelles standards ne sont pas toujours disponibles. J'ai aussi dû concevoir un système de résolution de conflits pour éviter les doubles réservations sur les visites guidées à capacité limitée, en utilisant des verrous au niveau base de données et des flux de confirmation par file d'attente.",
    },
    tags: ["React", "Laravel", "MySQL"],
    images: [
      "/projects/tourism/1.png",
      "/projects/tourism/2.png",
      "/projects/tourism/3.png",
      "/projects/tourism/4.png",
    ],
    github: "https://github.com/MERRELOSE/reservation-touristique",
    live: null,
    badgeType: null,
  },
  {
    slug: "saas-dashboard",
    title: {
      en: "SaaS Dashboard",
      fr: "Tableau de Bord SaaS",
    },
    description: {
      en: "Enterprise-grade SaaS dashboard with multi-currency, dark/light mode, filters, and CSV export.",
      fr: "Tableau de bord SaaS de niveau entreprise avec multi-devises, mode sombre/clair, filtres et export CSV.",
    },
    details: {
      en: "A feature-rich SaaS dashboard template built entirely with Laravel. Designed for businesses that need a comprehensive admin panel with real-time data visualization. The dashboard supports multiple currencies with live conversion, advanced data filtering, and one-click CSV export. The UI adapts seamlessly between dark and light modes, with a fully responsive layout that works on all devices.",
      fr: "Un template de tableau de bord SaaS riche en fonctionnalités, entièrement construit avec Laravel. Conçu pour les entreprises qui ont besoin d'un panneau d'administration complet avec visualisation de données en temps réel. Le tableau de bord supporte plusieurs devises avec conversion en direct, des filtres de données avancés et un export CSV en un clic. L'interface bascule sans accroc entre mode sombre et clair, avec une mise en page entièrement responsive qui fonctionne sur tous les appareils.",
    },
    features: {
      en: [
        "Multi-currency support with dynamic conversion",
        "Dark / Light mode with system preference detection",
        "Advanced filters with real-time data updates",
        "CSV export for reports and analytics data",
        "User profile management and role-based access",
        "Responsive charts and data visualization",
      ],
      fr: [
        "Support multi-devises avec conversion dynamique",
        "Mode sombre / clair avec détection des préférences système",
        "Filtres avancés avec mises à jour de données en temps réel",
        "Export CSV pour rapports et données analytiques",
        "Gestion des profils utilisateurs et accès basé sur les rôles",
        "Graphiques responsives et visualisation de données",
      ],
    },
    challenges: {
      en: "Implementing multi-currency support was the most complex feature. I had to build a currency conversion layer that updates rates regularly and recalculates all displayed values in real-time when the user switches currency. The dark/light mode also required careful design of every component to ensure readability and visual consistency in both themes.",
      fr: "L'implémentation du support multi-devises a été la fonctionnalité la plus complexe. J'ai dû construire une couche de conversion de devises qui met à jour les taux régulièrement et recalcule toutes les valeurs affichées en temps réel quand l'utilisateur change de devise. Le mode sombre/clair a aussi demandé une conception soignée de chaque composant pour garantir la lisibilité et la cohérence visuelle dans les deux thèmes.",
    },
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
    badgeType: null,
  },
  {
    slug: "shopify-hub",
    title: {
      en: "Shopify Multi-Store Hub",
      fr: "Hub Multi-Boutiques Shopify",
    },
    description: {
      en: "Connects multiple Shopify stores in real-time, centralizing data into a clean Filament dashboard.",
      fr: "Connecte plusieurs boutiques Shopify en temps réel et centralise leurs données dans un tableau de bord Filament épuré.",
    },
    details: {
      en: "Built for a client managing multiple Shopify stores, this application connects to the Shopify API to pull real-time data from all connected stores and centralizes it into a single, clean dashboard built with Laravel Filament. Store owners can monitor products, orders, and inventory across all their shops from one interface. Features include admin authentication, dark/light mode, and automatic data synchronization.",
      fr: "Conçue pour un client gérant plusieurs boutiques Shopify, cette application se connecte à l'API Shopify pour récupérer les données en temps réel de toutes les boutiques connectées et les centralise dans un tableau de bord unique et épuré construit avec Laravel Filament. Les propriétaires peuvent surveiller produits, commandes et inventaire de toutes leurs boutiques depuis une seule interface. Les fonctionnalités incluent l'authentification admin, le mode sombre/clair et la synchronisation automatique des données.",
    },
    features: {
      en: [
        "Real-time multi-store Shopify API integration",
        "Centralized dashboard built with Laravel Filament",
        "Products, orders, and inventory monitoring across stores",
        "Admin authentication with role-based permissions",
        "Dark / Light mode toggle",
        "Automatic data sync with configurable intervals",
      ],
      fr: [
        "Intégration API Shopify multi-boutiques en temps réel",
        "Tableau de bord centralisé construit avec Laravel Filament",
        "Surveillance des produits, commandes et inventaires entre boutiques",
        "Authentification admin avec permissions basées sur les rôles",
        "Bascule mode sombre / clair",
        "Synchronisation automatique des données avec intervalles configurables",
      ],
    },
    challenges: {
      en: "The main challenge was handling Shopify's API rate limits across multiple stores simultaneously. I implemented a queue-based sync system with exponential backoff and intelligent request batching to stay within rate limits while keeping data fresh. The real-time aspect required WebSocket connections to push updates to the dashboard as soon as new orders come in from any connected store.",
      fr: "Le principal défi a été de gérer les limites de l'API Shopify sur plusieurs boutiques simultanément. J'ai implémenté un système de synchronisation par files d'attente avec backoff exponentiel et regroupement intelligent des requêtes pour rester dans les limites tout en gardant les données à jour. L'aspect temps réel a nécessité des connexions WebSocket pour pousser les mises à jour vers le tableau de bord dès qu'une nouvelle commande arrive sur n'importe quelle boutique connectée.",
    },
    tags: ["Laravel", "Filament", "Shopify API", "MySQL"],
    images: [
      "/projects/shopify/1.png",
      "/projects/shopify/2.png",
      "/projects/shopify/3.png",
      "/projects/shopify/4.png",
    ],
    github: null,
    live: null,
    badgeType: "client-project",
  },
  {
    slug: "live-streaming",
    title: {
      en: "Live Streaming Platform",
      fr: "Plateforme de Streaming en Direct",
    },
    description: {
      en: "Complete live streaming system with real-time video, chat, and viewer invitations.",
      fr: "Système complet de streaming en direct avec vidéo temps réel, chat et invitations de spectateurs.",
    },
    details: {
      en: "Integrated a full live streaming solution into an existing Laravel web application. The system uses LiveKit for WebRTC-based video broadcasting and WebSockets for real-time chat and presence. Viewers can be invited to join streams, interact via live chat, and hosts have full control over stream settings and participant management.",
      fr: "Intégration d'une solution complète de streaming en direct dans une application web Laravel existante. Le système utilise LiveKit pour la diffusion vidéo via WebRTC et les WebSockets pour le chat en temps réel et la présence. Les spectateurs peuvent être invités à rejoindre les streams, interagir via le chat en direct, et les hôtes ont le contrôle total sur les paramètres du stream et la gestion des participants.",
    },
    features: {
      en: [
        "Real-time video broadcasting with LiveKit WebRTC",
        "Live chat with WebSocket-powered messaging",
        "Viewer invitation system with access control",
        "Host controls for stream and participant management",
        "Stream recording and replay capabilities",
        "Real-time viewer count and engagement metrics",
      ],
      fr: [
        "Diffusion vidéo en temps réel avec LiveKit WebRTC",
        "Chat en direct propulsé par WebSocket",
        "Système d'invitation de spectateurs avec contrôle d'accès",
        "Contrôles hôte pour la gestion du stream et des participants",
        "Capacités d'enregistrement et de replay du stream",
        "Compteur de spectateurs et métriques d'engagement en temps réel",
      ],
    },
    challenges: {
      en: "Integrating LiveKit into an existing Laravel application required building a custom bridge between PHP and the LiveKit server SDK. The real-time chat had to handle hundreds of concurrent messages without lag, which I solved using WebSocket channels with Redis pub/sub for horizontal scaling.",
      fr: "Intégrer LiveKit dans une application Laravel existante a nécessité la construction d'un pont sur mesure entre PHP et le SDK serveur LiveKit. Le chat en direct devait gérer des centaines de messages concurrents sans latence, ce que j'ai résolu en utilisant des canaux WebSocket avec Redis pub/sub pour la scalabilité horizontale.",
    },
    tags: ["Laravel", "LiveKit", "WebSocket"],
    images: [
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    github: null,
    live: null,
    badgeType: "private",
  },
  {
    slug: "portfolio",
    title: {
      en: "Personal Portfolio",
      fr: "Portfolio Personnel",
    },
    description: {
      en: "Modern developer portfolio built with Next.js 14, featuring bilingual support, dynamic theming, and project showcases.",
      fr: "Portfolio développeur moderne construit avec Next.js 14, incluant support bilingue, thèmes dynamiques et présentation des projets.",
    },
    details: {
      en: "My personal portfolio website, the one you're currently browsing. Built from scratch with Next.js 14 App Router, TypeScript, and Tailwind CSS. The site features a complete bilingual system (English/French) powered by React Context, a centralized color palette system that allows swapping the entire theme by changing just 2 lines of code, EmailJS-powered contact form, and dedicated project pages with image carousels. Every component is fully responsive with mobile-first spacing, and the site is deployed on Vercel with automatic CI/CD from GitHub.",
      fr: "Mon site portfolio personnel, celui que vous consultez en ce moment. Construit de zéro avec Next.js 14 App Router, TypeScript et Tailwind CSS. Le site dispose d'un système bilingue complet (anglais/français) propulsé par React Context, d'un système de palette de couleurs centralisé qui permet de changer tout le thème en modifiant seulement 2 lignes de code, d'un formulaire de contact propulsé par EmailJS et de pages projets dédiées avec carrousels d'images. Chaque composant est entièrement responsive avec un espacement mobile-first, et le site est déployé sur Vercel avec CI/CD automatique depuis GitHub.",
    },
    features: {
      en: [
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
      fr: [
        "Next.js 14 App Router avec TypeScript",
        "Support bilingue (EN/FR) avec React Context",
        "Système de palette centralisé — change toutes les couleurs en 2 lignes",
        "Mode sombre / clair avec persistance localStorage",
        "Animations Framer Motion partout",
        "Formulaire de contact EmailJS avec templates email stylisés",
        "Pages projets dynamiques avec carrousels d'images",
        "Optimisé SEO avec métadonnées Open Graph",
        "Design entièrement responsive mobile-first",
        "Déployé sur Vercel avec CI/CD automatique",
      ],
    },
    challenges: {
      en: "The biggest design challenge was building a centralized color system where changing just two lines in the Tailwind config swaps the entire site palette across all components. This required mapping every color reference to semantic tokens (primary/accent) instead of hardcoded values. The bilingual system also needed careful architecture — all translations are type-safe and the context ensures the entire UI updates instantly when the language is toggled.",
      fr: "Le plus gros défi de design a été de construire un système de couleurs centralisé où changer simplement deux lignes dans la config Tailwind bascule toute la palette du site sur tous les composants. Cela a nécessité de mapper chaque référence de couleur à des tokens sémantiques (primary/accent) plutôt qu'à des valeurs en dur. Le système bilingue a aussi demandé une architecture soignée — toutes les traductions sont type-safe et le contexte garantit que toute l'interface se met à jour instantanément quand on bascule la langue.",
    },
    tags: ["Next.js", "TypeScript", "React"],
    images: [
      "/projects/portfolio/1.png",
      "/projects/portfolio/2.png",
      "/projects/portfolio/3.png",
      "/projects/portfolio/4.png",
    ],
    github: "https://github.com/MERRELOSE/Mkdesign",
    live: "https://kennedymerrelose.vercel.app",
    badgeType: null,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
