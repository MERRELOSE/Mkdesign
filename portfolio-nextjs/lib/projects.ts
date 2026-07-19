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
      en: "ClauSub, AI Viral Subtitles SaaS",
      fr: "ClauSub, SaaS de sous-titres viraux par IA",
    },
    description: {
      en: "A SaaS I built solo. Turns short videos into subtitled clips for TikTok, Reels, and Shorts. Laravel backend, Expo mobile app, Next.js web.",
      fr: "Un SaaS que j'ai construit en solo. Transforme des vidéos courtes en clips sous-titrés pour TikTok, Reels et Shorts. Backend Laravel, app mobile Expo, site Next.js.",
    },
    details: {
      en: "ClauSub is a mobile-first SaaS I designed and shipped end to end. The idea is simple: you drop a short video, the app transcribes it with Whisper, then FFmpeg burns viral-style subtitles on top in 9 different styles (Classic, Hormozi, MrBeast, karaoke, and a few others). What I wanted to prove was that a solo dev can compete with Submagic or Opus Clip if you attack the markets they ignore, so ClauSub ships with 8 languages from day one (EN, FR, ES, PT, DE, ZH, JA, KO). Full stack: Laravel 11 API with Sanctum, Horizon queues on Redis, Stripe on the web side and RevenueCat on mobile, both with idempotent webhooks. Expo React Native app for iOS and Android. Next.js 16 web app on Vercel. Videos never touch the backend: the mobile client uploads straight to Backblaze B2 via a presigned URL, which keeps bandwidth costs at zero. Growth loops built in from the start: bilateral referral, watermark on the free tier, and 3 credits at signup so users can try it without a card. A 30 second clip is subtitled in under 90 seconds.",
      fr: "ClauSub est un SaaS mobile-first que j'ai conçu et livré de bout en bout. L'idée est simple : tu déposes une vidéo courte, l'app la transcrit avec Whisper, puis FFmpeg incruste des sous-titres viraux en 9 styles (Classic, Hormozi, MrBeast, karaoké, et quelques autres). Ce que je voulais prouver, c'est qu'un dev solo peut se battre contre Submagic ou Opus Clip si on attaque les marchés qu'ils ignorent, donc ClauSub sort avec 8 langues dès le départ (EN, FR, ES, PT, DE, ZH, JA, KO). Stack complète : API Laravel 11 avec Sanctum, files Redis gérées par Horizon, Stripe côté web et RevenueCat côté mobile, les deux avec webhooks idempotents. App Expo React Native pour iOS et Android. Site Next.js 16 sur Vercel. Les vidéos ne touchent jamais le backend : le client mobile upload directement vers Backblaze B2 via URL présignée, ce qui garde la bande passante à zéro. Boucles de croissance intégrées dès le départ : parrainage bilatéral, watermark sur le tier gratuit, et 3 crédits à l'inscription pour tester sans carte bancaire. Une vidéo de 30s est sous-titrée en moins de 90s.",
    },
    features: {
      en: [
        "9 subtitle styles including Classic, Hormozi, MrBeast, and karaoke",
        "Whisper transcription with word-level timestamps, 100+ languages",
        "FFmpeg rendering on the server using ASS stylesheets",
        "Mobile uploads go directly to Backblaze B2 via presigned URLs",
        "Stripe on web, RevenueCat on mobile, idempotent webhooks on both",
        "8-language i18n (i18next on mobile, next-intl on web)",
        "Growth loops: bilateral referral, free-tier watermark, 3 signup credits",
        "3 separate Redis queues so long renders never block webhooks",
        "Offline detection with automatic upload retry",
        "Google Sign-In plus classic Sanctum auth",
      ],
      fr: [
        "9 styles de sous-titres dont Classic, Hormozi, MrBeast et karaoké",
        "Transcription Whisper avec timestamps au mot, 100+ langues",
        "Rendu FFmpeg côté serveur avec feuilles de style ASS",
        "Les uploads mobiles vont directement vers Backblaze B2 via URL présignée",
        "Stripe côté web, RevenueCat côté mobile, webhooks idempotents des deux côtés",
        "i18n 8 langues (i18next sur mobile, next-intl sur web)",
        "Boucles de croissance : parrainage bilatéral, watermark tier gratuit, 3 crédits à l'inscription",
        "3 files Redis séparées pour qu'un long rendu ne bloque jamais un webhook",
        "Détection hors ligne avec retry auto sur les uploads",
        "Connexion Google plus auth classique via Sanctum",
      ],
    },
    challenges: {
      en: "The trickiest part was designing a pipeline where the backend never touches video bytes. Mobile clients get a presigned URL and push straight to Backblaze B2, and the backend only stores an object key and kicks off jobs. That keeps API bandwidth at zero no matter how many users pile in. On top of that, three isolated Redis queues (transcribe, render, default) mean a long FFmpeg render never starves a fast job like a webhook or a push notification. The subtitle rendering itself took time to get right: 9 distinct visual styles with word-level karaoke animation, all built from ASS stylesheets and consistent at any resolution. And on the billing side, Stripe and RevenueCat both retry failed webhooks, so I added a unique event_id constraint on the payment_events table to make replays no-ops. No double credits, no race conditions.",
      fr: "La partie la plus délicate a été de concevoir un pipeline où le backend ne touche jamais aux données vidéo. Les clients mobiles reçoivent une URL présignée et poussent directement vers Backblaze B2, le backend stocke juste une clé d'objet et déclenche les jobs. Ça garde la bande passante API à zéro peu importe combien d'utilisateurs arrivent. En plus, trois files Redis isolées (transcription, rendu, défaut) font qu'un long rendu FFmpeg n'affame jamais un job rapide comme un webhook ou une notification push. Le rendu des sous-titres lui-même a demandé du temps : 9 styles visuels distincts avec animation karaoké au mot près, tous construits à partir de feuilles ASS et cohérents à toute résolution. Côté facturation, Stripe et RevenueCat retentent tous les deux les webhooks échoués, donc j'ai ajouté une contrainte unique event_id sur la table payment_events pour que les replays soient des no-ops. Pas de double crédit, pas de race condition.",
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
      en: "BourseIQ, AI-Powered Multi-Market Stock Analysis",
      fr: "BourseIQ, analyse boursière multi-marchés propulsée par l'IA",
    },
    description: {
      en: "Full-stack investment platform covering global markets and BRVM (47 African UEMOA stocks I scrape myself). Proprietary 5-dimension scoring engine and a multi-LLM AI layer routed by task.",
      fr: "Plateforme d'investissement full-stack couvrant les marchés globaux et la BRVM (47 titres UEMOA africains que je scrape moi-même). Moteur de scoring propriétaire à 5 dimensions et une couche IA multi-LLM routée par tâche.",
    },
    details: {
      en: "BourseIQ tracks about 80 stocks across US, European, and Asian markets (via yfinance), plus the Bourse Régionale d'Abidjan (47 UEMOA stocks scraped from brvm.org and sikafinance.com). At the core is a proprietary scoring engine over 5 dimensions: valuation, quality, financial health, dividend, and market risk, plus a few composite metrics on top (risk/reward, quality/value, sustainable yield). From there you get a watchlist, a multi-currency virtual portfolio (USD and XOF live side by side with no FX conversion), historical buy-and-hold backtests, email alerts on score or price movements, a stock comparator with an analytical verdict, and a Netflix-style discovery homepage. The AI layer is where I saved the most money: 5 distinct tasks routed to 5 different models through a single OpenRouter API. Gemini 2.5 Flash for high-volume narrative synthesis (cheap tokens), Claude Haiku 4.5 for a disciplined Q&A analyst with a strict anti-advice prompt, Claude Sonnet 4.6 for macro market views and PDF fundamentals extraction, and Perplexity Sonar Pro for cited web research. Real monthly AI cost for typical usage: around $1. Stack: FastAPI async with SQLAlchemy 2.0, JWT via fastapi-users, Alembic migrations, APScheduler for periodic jobs, custom rate limiting middleware. Frontend Next.js 14 App Router in TypeScript strict, custom SVG charts (no chart library). Deployed on Vercel and Render with Neon Postgres.",
      fr: "BourseIQ suit environ 80 actions sur les marchés US, européens et asiatiques (via yfinance), plus la Bourse Régionale d'Abidjan (47 titres UEMOA scrapés depuis brvm.org et sikafinance.com). Au cœur, un moteur de scoring propriétaire sur 5 dimensions : valorisation, qualité, santé financière, dividende et risque de marché, plus quelques métriques composites (risque/récompense, qualité/prix, rendement durable). À partir de là, tu as une watchlist, un portefeuille virtuel multi-devises (USD et XOF cohabitent sans conversion FX), des backtests historiques buy-and-hold, des alertes email sur mouvement de score ou de prix, un comparateur d'actions avec verdict analytique, et une page d'accueil de découverte style Netflix. La couche IA est là où j'ai économisé le plus : 5 tâches distinctes routées vers 5 modèles différents via une seule API OpenRouter. Gemini 2.5 Flash pour la synthèse narrative haut volume (tokens pas chers), Claude Haiku 4.5 pour un Q&A analyste discipliné avec un prompt strict anti-conseil, Claude Sonnet 4.6 pour la vue macro marché et l'extraction de fondamentaux depuis les PDFs, et Perplexity Sonar Pro pour la recherche web avec sources citées. Coût mensuel IA réel pour un usage normal : environ 1$. Stack : FastAPI async avec SQLAlchemy 2.0, JWT via fastapi-users, migrations Alembic, APScheduler pour les jobs périodiques, middleware de rate limiting maison. Frontend Next.js 14 App Router en TypeScript strict, graphiques SVG custom (pas de librairie de charts). Déployé sur Vercel et Render avec Neon Postgres.",
    },
    features: {
      en: [
        "80+ stocks: US, Europe, Asia via yfinance, plus 47 BRVM UEMOA titles via custom scrapers",
        "Proprietary 5-dimension scoring engine with composite metrics",
        "Netflix-style discovery homepage with curated carousels",
        "Multi-currency virtual portfolio (USD + XOF, no FX conversion)",
        "Historical buy-and-hold backtest with performance chart",
        "Stock comparator with analytical verdict",
        "Multi-LLM AI routed per task through OpenRouter (Gemini, Claude, Perplexity)",
        "Email alerts on score or price movements",
        "34 REST endpoints, 10 frontend routes, 25+ React components",
        "Alembic migrations, JWT auth, rate limiting, env validation on startup",
      ],
      fr: [
        "80+ actions : US, Europe, Asie via yfinance, plus 47 titres UEMOA BRVM via scrapers custom",
        "Moteur de scoring propriétaire à 5 dimensions avec métriques composites",
        "Page d'accueil de découverte style Netflix avec carrousels curés",
        "Portefeuille virtuel multi-devises (USD + XOF, sans conversion FX)",
        "Backtest historique buy-and-hold avec graphique de performance",
        "Comparateur d'actions avec verdict analytique",
        "IA multi-LLM routée par tâche via OpenRouter (Gemini, Claude, Perplexity)",
        "Alertes email sur mouvement de score ou de prix",
        "34 endpoints REST, 10 routes frontend, 25+ composants React",
        "Migrations Alembic, auth JWT, rate limiting, validation env au démarrage",
      ],
    },
    challenges: {
      en: "The most interesting call was on the AI side. Rather than paying premium tokens for every task, I mapped each cognitive load to the cheapest model that could still do the job well. Narrative synthesis on high-volume structured data goes to Gemini Flash, PDF fundamentals extraction goes to Claude Sonnet because it needs both long context and precision, and cited web research goes to Perplexity Sonar. The result is a real cost of about $1 a month for typical usage. The other real challenge was the BRVM data layer. There is no public API, so I wrote scrapers against brvm.org and sikafinance.com with rate limiting and a cache layer, then normalized the outputs so BRVM stocks feed the exact same scoring pipeline as the global markets. That way an African stock gets the same first-class treatment as an AAPL or a Nvidia.",
      fr: "Le choix le plus intéressant a été côté IA. Plutôt que payer des tokens premium pour chaque tâche, j'ai mappé chaque charge cognitive au modèle le moins cher capable de bien faire le job. La synthèse narrative sur données structurées haut volume va à Gemini Flash, l'extraction de fondamentaux depuis les PDFs va à Claude Sonnet parce qu'il faut à la fois du contexte long et de la précision, et la recherche web avec sources va à Perplexity Sonar. Résultat : un coût réel d'environ 1$/mois pour un usage normal. L'autre vrai défi a été la couche de données BRVM. Il n'y a pas d'API publique, donc j'ai écrit des scrapers contre brvm.org et sikafinance.com avec rate limiting et couche de cache, puis normalisé les sorties pour que les titres BRVM alimentent exactement le même pipeline de scoring que les marchés globaux. Comme ça un titre africain reçoit le même traitement first-class qu'un AAPL ou un Nvidia.",
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
      en: "Web app to book tourist site visits and cultural events. React frontend, Laravel backend, integrated payments.",
      fr: "Application web pour réserver des visites de sites touristiques et des événements culturels. Frontend React, backend Laravel, paiements intégrés.",
    },
    details: {
      en: "A booking platform where users discover, book, and pay for tourist site visits and cultural events. The public interface is React, and the backend is Laravel handling payments, reservations, and event scheduling. There's an admin dashboard on top for managing sites, events, guides, and analytics. Built for a context where standard payment gateways are not always available, so the payment layer is a service abstraction that can swap providers without touching booking logic.",
      fr: "Une plateforme de réservation où les utilisateurs découvrent, réservent et paient des visites de sites et des événements culturels. L'interface publique est en React, le backend en Laravel gère les paiements, les réservations et la planification des événements. Il y a un tableau de bord admin par-dessus pour gérer les sites, les événements, les guides et les statistiques. Construit dans un contexte où les passerelles de paiement standard ne sont pas toujours disponibles, donc la couche de paiement est une abstraction de service qui peut changer de fournisseur sans toucher à la logique de réservation.",
    },
    features: {
      en: [
        "Online booking with integrated payment processing",
        "Event calendar with cultural activities and guided tours",
        "Admin dashboard for sites, events, and guides",
        "Booking confirmation emails",
        "User reviews and ratings",
        "Mobile-first responsive design",
      ],
      fr: [
        "Réservation en ligne avec paiement intégré",
        "Calendrier d'événements avec activités culturelles et visites guidées",
        "Tableau de bord admin pour les sites, événements et guides",
        "Emails de confirmation de réservation",
        "Avis et notes utilisateurs",
        "Design responsive mobile-first",
      ],
    },
    challenges: {
      en: "Two things to solve. First, a payment integration that works in a market where standard global gateways are patchy, so I built a service abstraction that lets me swap providers without touching booking logic. Second, preventing double-bookings on guided tours with limited capacity. That one I handled with database-level locks (SELECT FOR UPDATE) inside a transaction and queue-based confirmation flows to keep response times snappy during peak hours.",
      fr: "Deux choses à résoudre. D'abord, une intégration de paiement qui marche dans un marché où les passerelles standards ne sont pas fiables partout, donc j'ai construit une abstraction de service qui me permet de changer de fournisseur sans toucher à la logique de réservation. Ensuite, éviter les doubles réservations sur les visites guidées à capacité limitée. Ça, je l'ai géré avec des verrous au niveau base de données (SELECT FOR UPDATE) dans une transaction et des flux de confirmation par file d'attente pour garder des temps de réponse rapides aux heures de pointe.",
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
      en: "SaaS admin dashboard built entirely in Laravel. Multi-currency, dark/light mode, filters, CSV export.",
      fr: "Tableau de bord d'administration SaaS construit entièrement en Laravel. Multi-devises, mode sombre/clair, filtres, export CSV.",
    },
    details: {
      en: "A SaaS admin dashboard template built entirely in Laravel with Blade templates and vanilla JS. Meant for businesses that need a proper admin panel with real-time visualization without pulling in an SPA framework. Supports multiple currencies with live conversion, advanced filters, one-click CSV export, and dark/light mode with system preference detection. Fully responsive. The whole thing loads fast because there is no heavy JS bundle to ship.",
      fr: "Un template de tableau de bord SaaS construit entièrement en Laravel avec des templates Blade et du JS vanilla. Pensé pour les entreprises qui ont besoin d'un panneau admin sérieux avec de la visualisation temps réel sans passer par un framework SPA. Supporte plusieurs devises avec conversion en direct, des filtres avancés, un export CSV en un clic, et un mode sombre/clair avec détection des préférences système. Entièrement responsive. Le tout se charge vite parce qu'il n'y a pas de gros bundle JS à envoyer.",
    },
    features: {
      en: [
        "Multi-currency support with dynamic conversion",
        "Dark and light mode with system preference detection",
        "Advanced filters with real-time updates",
        "CSV export for reports and analytics",
        "User profile management and role-based access",
        "Responsive charts and data visualization",
      ],
      fr: [
        "Support multi-devises avec conversion dynamique",
        "Mode sombre et clair avec détection des préférences système",
        "Filtres avancés avec mises à jour en temps réel",
        "Export CSV pour les rapports et l'analytique",
        "Gestion des profils utilisateurs et accès basé sur les rôles",
        "Graphiques responsives et visualisation de données",
      ],
    },
    challenges: {
      en: "The most complex piece was the multi-currency support. Every value displayed had to recalculate live when the user switched currency, without a page reload and without stale data. I built a conversion layer that pulls fresh rates on a schedule and pipes every money value through a Money::convert() helper at render time. The dark/light mode also required careful CSS variable design so every component stays readable and visually consistent in both themes.",
      fr: "Le morceau le plus complexe a été le support multi-devises. Chaque valeur affichée devait se recalculer en direct au changement de devise, sans rechargement de page et sans données périmées. J'ai construit une couche de conversion qui récupère les taux à intervalles réguliers et passe chaque valeur monétaire par un helper Money::convert() au moment du rendu. Le mode sombre/clair a aussi demandé un design soigné des variables CSS pour que chaque composant reste lisible et cohérent visuellement dans les deux thèmes.",
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
      fr: "Hub multi-boutiques Shopify",
    },
    description: {
      en: "Connects several Shopify stores in real time and centralizes them into a single Filament dashboard.",
      fr: "Connecte plusieurs boutiques Shopify en temps réel et les centralise dans un seul tableau de bord Filament.",
    },
    details: {
      en: "Built for a client running several Shopify stores at once. The app connects to the Shopify API on each connected store, pulls real-time data, and centralizes everything into a single Laravel Filament dashboard. Store owners can monitor products, orders, and inventory across all their shops from one place without jumping between Shopify admin panels. Admin auth with role-based permissions, dark/light mode toggle, automatic sync on configurable intervals.",
      fr: "Construit pour un client qui gère plusieurs boutiques Shopify en même temps. L'app se connecte à l'API Shopify de chaque boutique connectée, récupère les données en temps réel, et centralise tout dans un seul tableau de bord Laravel Filament. Les propriétaires de boutiques peuvent surveiller produits, commandes et inventaire de toutes leurs boutiques depuis un seul endroit sans sauter entre les panneaux d'admin Shopify. Auth admin avec permissions basées sur les rôles, bascule mode sombre/clair, synchronisation automatique à intervalles configurables.",
    },
    features: {
      en: [
        "Real-time Shopify API integration across multiple stores",
        "Centralized dashboard in Laravel Filament",
        "Products, orders, and inventory monitoring across stores",
        "Admin authentication with role-based permissions",
        "Dark and light mode toggle",
        "Automatic data sync on configurable intervals",
      ],
      fr: [
        "Intégration API Shopify en temps réel sur plusieurs boutiques",
        "Tableau de bord centralisé en Laravel Filament",
        "Surveillance produits, commandes et inventaire à travers les boutiques",
        "Authentification admin avec permissions basées sur les rôles",
        "Bascule mode sombre et clair",
        "Synchronisation automatique à intervalles configurables",
      ],
    },
    challenges: {
      en: "The real challenge was handling Shopify API rate limits across many stores at once. Shopify enforces a leaky-bucket limit per app per store, so with N stores connected you have to track each one separately. I implemented a queue-based sync system with per-store rate tracking, exponential backoff with jitter on 429s, and intelligent request batching to stay in-quota while keeping data fresh. The real-time side uses WebSocket connections so new orders show up on the dashboard within a second of being placed on any store.",
      fr: "Le vrai défi a été de gérer les limites de l'API Shopify sur plusieurs boutiques à la fois. Shopify impose une limite en seau percé par app par boutique, donc avec N boutiques connectées il faut suivre chaque boutique séparément. J'ai mis en place un système de synchronisation par files d'attente avec suivi de rate par boutique, un backoff exponentiel avec jitter sur les 429, et un regroupement intelligent des requêtes pour rester dans le quota tout en gardant les données fraîches. Le côté temps réel utilise des connexions WebSocket pour que les nouvelles commandes apparaissent sur le tableau de bord en moins d'une seconde après avoir été passées sur n'importe quelle boutique.",
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
      en: "Full live streaming system with real-time video, live chat, and viewer invitations. Integrated into an existing Laravel app.",
      fr: "Système complet de streaming en direct avec vidéo temps réel, chat en direct et invitations de spectateurs. Intégré dans une application Laravel existante.",
    },
    details: {
      en: "A full live streaming solution I integrated into an existing Laravel web app. Video broadcasting uses LiveKit over WebRTC, and chat plus presence run on WebSockets. Viewers can be invited to join a stream, chat in real time, and hosts get full control over stream settings and participant management. Recording is supported with replay.",
      fr: "Une solution complète de streaming en direct que j'ai intégrée dans une application web Laravel existante. La diffusion vidéo utilise LiveKit via WebRTC, et le chat plus la présence tournent sur WebSockets. Les spectateurs peuvent être invités à rejoindre un stream, discuter en temps réel, et les hôtes ont un contrôle complet sur les paramètres du stream et la gestion des participants. L'enregistrement est supporté avec replay.",
    },
    features: {
      en: [
        "Real-time video broadcasting via LiveKit WebRTC",
        "Live chat powered by WebSockets",
        "Viewer invitation system with access control",
        "Host controls for stream and participant management",
        "Stream recording and replay",
        "Real-time viewer count and engagement metrics",
      ],
      fr: [
        "Diffusion vidéo en temps réel via LiveKit WebRTC",
        "Chat en direct propulsé par WebSockets",
        "Système d'invitation de spectateurs avec contrôle d'accès",
        "Contrôles hôte pour la gestion du stream et des participants",
        "Enregistrement et replay du stream",
        "Compteur de spectateurs et métriques d'engagement en temps réel",
      ],
    },
    challenges: {
      en: "Integrating LiveKit into an existing Laravel app required a custom bridge, because LiveKit has no first-class PHP SDK. I generate JWT room tokens directly with HS256 and call the LiveKit HTTP admin API for room management, all from Laravel. For chat, naive WebSocket broadcasting breaks at scale, so I put a Redis pub/sub layer between instances: each Laravel instance subscribes once per stream and fans messages out to its local connections. That makes horizontal scaling trivial without sticky sessions.",
      fr: "Intégrer LiveKit dans une app Laravel existante a demandé un pont custom, parce que LiveKit n'a pas de SDK PHP officiel. Je génère les tokens JWT de salle directement en HS256 et j'appelle l'API HTTP admin de LiveKit pour la gestion des salles, le tout depuis Laravel. Pour le chat, un broadcasting WebSocket naïf casse à grande échelle, donc j'ai mis une couche Redis pub/sub entre les instances : chaque instance Laravel s'abonne une fois par stream et distribue les messages à ses connexions locales. Ça rend le scaling horizontal trivial sans sessions collantes.",
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
      fr: "Portfolio personnel",
    },
    description: {
      en: "This site. Next.js 14 with bilingual EN/FR, dark/light theme, and a swappable color palette.",
      fr: "Ce site. Next.js 14 avec bilingue EN/FR, thème sombre/clair, et une palette de couleurs interchangeable.",
    },
    details: {
      en: "The site you're on right now. Built from scratch with Next.js 14 App Router, TypeScript, and Tailwind CSS. Full bilingual system (EN/FR) via React Context so switching language updates the whole UI instantly. Every color goes through semantic tokens (primary/accent), which means changing two lines in the Tailwind config swaps the entire site palette. Dark and light mode persist via localStorage with no flash of wrong theme on first paint. EmailJS-powered contact form, dedicated project pages with image carousels, Framer Motion animations, JSON-LD Person schema for SEO, and a small hidden preview route (/readme/[slug]) that renders each project's GitHub README so I can copy the markdown into a repo in one click. Deployed on Vercel with automatic CI/CD from GitHub.",
      fr: "Le site sur lequel tu es en ce moment. Construit de zéro avec Next.js 14 App Router, TypeScript et Tailwind CSS. Système bilingue complet (EN/FR) via React Context pour que changer de langue mette à jour toute l'UI instantanément. Chaque couleur passe par des tokens sémantiques (primary/accent), ce qui fait que changer deux lignes dans la config Tailwind bascule toute la palette du site. Le mode sombre et clair est persistant via localStorage sans flash de mauvais thème au premier rendu. Formulaire de contact propulsé par EmailJS, pages projets dédiées avec carrousels d'images, animations Framer Motion, JSON-LD Person schema pour le SEO, et une petite route cachée (/readme/[slug]) qui rend le README GitHub de chaque projet pour que je puisse copier le markdown dans un repo en un clic. Déployé sur Vercel avec CI/CD automatique depuis GitHub.",
    },
    features: {
      en: [
        "Next.js 14 App Router with TypeScript",
        "Bilingual EN/FR via React Context, type-safe translations",
        "Centralized palette: swap all colors in 2 lines",
        "Dark and light mode with localStorage persistence, no flash",
        "Framer Motion animations",
        "EmailJS contact form with styled email templates",
        "Dynamic project pages with image carousels and phone-frame mobile section",
        "SEO: JSON-LD Person schema, Open Graph, dynamic sitemap",
        "Hidden /readme/[slug] preview route with one-click copy to GitHub",
        "Deployed on Vercel with automatic CI/CD from GitHub",
      ],
      fr: [
        "Next.js 14 App Router avec TypeScript",
        "Bilingue EN/FR via React Context, traductions type-safe",
        "Palette centralisée : change toutes les couleurs en 2 lignes",
        "Mode sombre et clair avec persistance localStorage, sans flash",
        "Animations Framer Motion",
        "Formulaire de contact EmailJS avec templates email stylisés",
        "Pages projets dynamiques avec carrousels d'images et section mobile en phone-frame",
        "SEO : JSON-LD Person schema, Open Graph, sitemap dynamique",
        "Route cachée /readme/[slug] avec copie en un clic vers GitHub",
        "Déployé sur Vercel avec CI/CD automatique depuis GitHub",
      ],
    },
    challenges: {
      en: "The most interesting piece to design was the centralized color system. Instead of hardcoded blue/red/whatever, every component uses semantic tokens (primary and accent). That means changing two lines in tailwind.config.ts flips the entire site palette. To make it work I had to audit every color reference and replace it with a token, plus check contrast in both themes. The bilingual system was the other one: I wanted type-safe translations so that adding a key in English makes the French side fail to compile until it's translated. That way there are no runtime missing-key bugs, even under language switches.",
      fr: "La partie la plus intéressante à concevoir a été le système de couleurs centralisé. Au lieu de bleu/rouge en dur, chaque composant utilise des tokens sémantiques (primary et accent). Ce qui fait que changer deux lignes dans tailwind.config.ts bascule toute la palette du site. Pour que ça marche, il a fallu auditer chaque référence de couleur et la remplacer par un token, plus vérifier le contraste dans les deux thèmes. Le système bilingue a été l'autre : je voulais des traductions type-safe pour qu'ajouter une clé en anglais fasse échouer la compilation côté français jusqu'à ce qu'elle soit traduite. Comme ça, aucun bug de clé manquante au runtime, même sur changement de langue.",
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
