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
  github: string | null;
  live: string | null;
  badgeType: BadgeType | null;
}

export const projects: Project[] = [
  {
    slug: "clausub",
    title: {
      en: "ClauSub — AI Viral Subtitles",
      fr: "ClauSub — Sous-titres Viraux IA",
    },
    description: {
      en: "Mobile app that auto-generates viral subtitles on short videos for TikTok, Reels & Shorts using AI.",
      fr: "Application mobile qui génère automatiquement des sous-titres viraux pour vidéos courtes (TikTok, Reels, Shorts) grâce à l'IA.",
    },
    details: {
      en: "ClauSub is a production-ready mobile application that leverages OpenAI's Whisper API to automatically transcribe and generate viral-style subtitles on short-form videos. The app processes videos through an asynchronous pipeline: upload to Backblaze B2 via presigned URLs, transcription with word-level timestamps, subtitle generation with 9 different styles (karaoke, pop-in, neon glow...), and FFmpeg rendering with ASS stylesheets. The backend runs on Laravel 11 with Redis-powered queues managed by Horizon, deployed on Railway with Docker multi-stage builds.",
      fr: "ClauSub est une application mobile prête pour la production qui s'appuie sur l'API Whisper d'OpenAI pour transcrire automatiquement et générer des sous-titres de style viral sur des vidéos courtes. L'application traite les vidéos via un pipeline asynchrone : upload vers Backblaze B2 grâce à des URLs présignées, transcription avec timestamps au mot près, génération de sous-titres avec 9 styles différents (karaoké, pop-in, néon...), et rendu FFmpeg via des feuilles de style ASS. Le backend tourne sous Laravel 11 avec des files Redis gérées par Horizon, déployé sur Railway avec des builds Docker multi-stage.",
    },
    features: {
      en: [
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
      fr: [
        "9 styles de sous-titres avec sélecteur de couleurs (karaoké, pop-in, néon, emojis)",
        "Transcription Whisper IA avec auto-détection de plus de 100 langues",
        "Rendu FFmpeg côté serveur avec feuilles de style ASS",
        "Uploads via URLs présignées — le backend ne touche jamais les données vidéo",
        "Achats in-app RevenueCat avec webhooks idempotents",
        "Internationalisation en 8 langues (i18next type-safe)",
        "3 files Redis spécialisées (transcription / rendu / défaut)",
        "Détection hors ligne avec retry automatique à l'upload",
        "Parcours d'onboarding avec sélection de langue",
        "Connexion Google + authentification classique via Sanctum",
      ],
    },
    challenges: {
      en: "The biggest challenge was building the video processing pipeline. Each video goes through multiple async stages — transcription, subtitle generation, and FFmpeg rendering — all on separate Redis queues to avoid blocking. The subtitle rendering required deep knowledge of ASS format to create karaoke-style word-level animations with custom colors and effects. Another challenge was implementing presigned URL uploads so the backend never handles video data, keeping bandwidth costs at zero.",
      fr: "Le plus gros défi a été de construire le pipeline de traitement vidéo. Chaque vidéo passe par plusieurs étapes asynchrones — transcription, génération des sous-titres et rendu FFmpeg — toutes sur des files Redis séparées pour éviter les blocages. Le rendu des sous-titres a demandé une bonne maîtrise du format ASS pour créer des animations karaoké au mot près avec couleurs et effets personnalisés. Un autre défi a été l'implémentation des uploads via URLs présignées, pour que le backend ne manipule jamais les données vidéo, gardant les coûts de bande passante à zéro.",
    },
    tags: ["React Native", "Laravel", "Whisper AI", "FFmpeg", "Expo", "Docker"],
    images: [
      "/projects/clausub/1.png",
      "/projects/clausub/2.png",
      "/projects/clausub/3.png",
      "/projects/clausub/4.png",
    ],
    github: null,
    live: null,
    badgeType: "in-development",
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
