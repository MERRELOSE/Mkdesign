<div align="center">

# ClauSub — AI Viral Subtitles SaaS

**Mobile-first SaaS that turns short videos into viral subtitled clips using AI. Solo-built end-to-end: Laravel API, React Native app, Next.js web.**

[![Live](https://img.shields.io/badge/Web-clausubai.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://clausubai.vercel.app)

![Laravel](https://img.shields.io/badge/Laravel_11-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![OpenAI](https://img.shields.io/badge/Whisper-412991?style=for-the-badge&logo=openai&logoColor=white)
![FFmpeg](https://img.shields.io/badge/FFmpeg-007808?style=for-the-badge&logo=ffmpeg&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

</div>

---

## Overview

ClauSub is a mobile-first SaaS I designed and shipped end-to-end — turning short videos (TikTok, Reels, Shorts) into viral subtitled clips via AI.

The differentiator vs Submagic / Opus Clip: **multilingual from day one** (8 languages: EN, FR, ES, PT, DE, ZH, JA, KO) to capture markets that anglo-centric competitors ignore.

Full stack shipped: Laravel 11 API, Expo mobile app (iOS + Android), Next.js 16 web app on Vercel, OpenAI Whisper + FFmpeg rendering pipeline, direct mobile → Backblaze B2 uploads via presigned URLs. **Backend never touches video bytes.** Growth loops built in.

> **Live web app:** [clausubai.vercel.app](https://clausubai.vercel.app)

---

## Demo

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/web-01-landing.png" width="400" alt="Web landing" /></td>
    <td><img src="./screenshots/web-02-editor.png" width="400" alt="Web editor" /></td>
  </tr>
  <tr>
    <td><img src="./screenshots/web-03-styles.png" width="400" alt="Subtitle styles" /></td>
    <td><img src="./screenshots/web-04-pricing.png" width="400" alt="Pricing" /></td>
  </tr>
</table>

**Also available on mobile (iOS + Android)**

<table>
  <tr>
    <td><img src="./screenshots/mobile-01.png" width="200" alt="Mobile home" /></td>
    <td><img src="./screenshots/mobile-02.png" width="200" alt="Mobile editor" /></td>
  </tr>
</table>

</div>

---

## Key Features

- 🎬 **9 subtitle styles** — Classic, Hormozi, MrBeast, karaoke, pop-in, neon glow, emojis, and more
- 🎙 **OpenAI Whisper transcription** — word-level timestamps, 100+ languages
- 🎞 **Server-side FFmpeg rendering** with ASS stylesheets for word-level karaoke animation
- ☁️ **Zero-egress uploads** — mobile → Backblaze B2 directly via presigned URLs
- 💳 **Stripe + RevenueCat billing** with idempotent webhooks (no double-credit)
- 🌍 **8-language i18n** — i18next on mobile, next-intl on web
- 🎁 **Growth loops** — bilateral referral, free-tier watermark, 3 signup credits
- ⚡ **3 specialized Redis queues** (transcribe / render / default) — long jobs never starve fast ones
- 📶 **Offline detection** with automatic upload retry
- 🔐 **Google Sign-In + classic Sanctum authentication**
- ⚡ **Performance** — a 30s clip is subtitled in under 90s

---

## Tech Stack

### Mobile (Expo React Native)
| Layer | Technology |
|---|---|
| Framework | React Native (Expo SDK) |
| Navigation | Expo Router |
| State | Zustand + TanStack Query |
| i18n | i18next (8 languages, type-safe) |
| Auth | Google Sign-In + Sanctum tokens |
| Payments | RevenueCat |

### Web (Next.js on Vercel)
| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI | Tailwind CSS + Radix UI |
| i18n | next-intl (8 locales) |
| Deployment | Vercel |

### Backend (Laravel + Railway)
| Layer | Technology |
|---|---|
| Framework | Laravel 11 (PHP 8.3) |
| Queues | Redis + Laravel Horizon |
| AI | OpenAI Whisper API |
| Rendering | FFmpeg + ASS stylesheets |
| Storage | Backblaze B2 (S3-compatible, presigned URLs) |
| Auth | Sanctum (API tokens) |
| Billing | Stripe (web) + RevenueCat (mobile) |
| Deployment | Railway (Docker multi-stage) |

---

## Architecture

```
   ┌─────────────┐              ┌─────────────┐
   │   Mobile    │              │   Web App   │
   │ (RN + Expo) │              │  (Next.js)  │
   └──────┬──────┘              └──────┬──────┘
          │                            │
          │  ──1── presigned URL       │
          ▼                            │
   ┌─────────────┐                     │
   │ Backblaze   │                     │
   │  B2 (S3)    │                     │
   └─────────────┘                     │
                                       │
                                       │
   ┌───────────────────────────────────┴───────────────────────┐
   │                    Laravel 11 API                         │
   │                                                           │
   │   Sanctum auth  │  Stripe + RevenueCat webhooks           │
   │                                                           │
   │   ┌────────────────────────────────────────────────┐      │
   │   │       Horizon-managed Redis queues             │      │
   │   │                                                │      │
   │   │  ┌───────────┐  ┌───────────┐  ┌───────────┐   │      │
   │   │  │transcribe │  │  render   │  │  default  │   │      │
   │   │  │           │  │           │  │           │   │      │
   │   │  │  Whisper  │  │  FFmpeg   │  │ webhooks, │   │      │
   │   │  │  (words)  │  │  + ASS    │  │  emails,  │   │      │
   │   │  │           │  │           │  │  notifs   │   │      │
   │   │  └─────┬─────┘  └─────┬─────┘  └───────────┘   │      │
   │   └────────┼──────────────┼──────────────────────  │      │
   │            │              │                        │      │
   └────────────┼──────────────┼────────────────────────┘      │
                │              │                               │
                └──────┬───────┘                               │
                       ▼                                       │
                ┌──────────────┐                               │
                │  B2 (again)  │◀──────────────────────────────┘
                │   rendered   │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │  Push to     │
                │  end user    │
                └──────────────┘
```

---

## Technical Highlights

### 1. Zero-egress video pipeline

The Laravel backend **never receives video bytes**. Mobile and web clients upload directly to Backblaze B2 using presigned URLs generated server-side. The backend only orchestrates the pipeline and stores object keys. Result: bandwidth cost on the API tier stays at zero, regardless of user traffic.

### 2. 3 isolated Redis queues

`transcribe`, `render`, and `default` run on separate Horizon workers. A long FFmpeg render never blocks a webhook handler or a fast notification job. Each queue scales independently on Railway.

### 3. Word-level karaoke via ASS

Whisper returns word-level timestamps. These are converted into ASS stylesheets where each word carries its own `\k` timing tag — producing true karaoke-style highlights synced with the audio, not naive line-by-line captions. 9 distinct styles produce consistent output at any resolution.

### 4. Idempotent billing webhooks

Both Stripe and RevenueCat retry failed webhooks. The backend uses a `payment_events` table with a unique `event_id` constraint — re-deliveries are safely no-ops. No double-credit, no race conditions on subscription state.

### 5. One codebase, three surfaces, 8 languages

Mobile (i18next), web (next-intl), backend (Laravel Lang) all consume the same 8-locale content pool. Adding a language means updating one shared strings source, not touching 3 codebases individually.

---

## Screenshots

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/web-05-referral.png" width="270" /></td>
    <td><img src="./screenshots/web-06-history.png" width="270" /></td>
    <td><img src="./screenshots/web-07-dashboard.png" width="270" /></td>
  </tr>
</table>

</div>

---

## Growth loops

- **Bilateral referral**: referrer + referee both get bonus credits
- **Watermark on free tier**: passive brand exposure on every free clip shared to socials
- **3 credits on signup**: instant hands-on trial, no card required
- **Localized organic content**: 8 languages let the same feature ship internationally with zero re-translation cost

---

## Getting Started

> Source not public — private SaaS. Notes below describe how the system runs locally.

### Mobile

```bash
npm install
cp .env.example .env
npx expo run:ios      # or run:android
```

### Web

```bash
npm install
cp .env.example .env.local
npm run dev
```

### Backend

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate

php artisan serve       # API
php artisan horizon     # queue workers
```

### Required environment

- `OPENAI_API_KEY` — Whisper transcription
- `B2_KEY_ID` / `B2_APPLICATION_KEY` / `B2_BUCKET` — direct-upload storage
- `REDIS_HOST` / `REDIS_PASSWORD` — queues
- `STRIPE_SECRET` / `STRIPE_WEBHOOK_SECRET` — web billing
- `REVENUECAT_WEBHOOK_SECRET` — mobile billing

---

## Project Structure

```
clausub/
├── mobile/                    # Expo React Native
│   ├── app/                   # Expo Router screens
│   ├── components/            # Shared UI
│   ├── locales/               # 8 languages (en, fr, es, pt, de, zh, ja, ko)
│   ├── stores/                # Zustand slices
│   └── services/              # API client, RevenueCat, auth
│
├── web/                       # Next.js 16 (deployed on Vercel)
│   ├── app/[locale]/          # next-intl locale routing
│   ├── components/            # Tailwind + Radix UI
│   └── messages/              # 8 locales
│
└── backend/                   # Laravel 11 API (Railway)
    ├── app/
    │   ├── Http/Controllers/  # API + webhooks
    │   ├── Jobs/              # Transcribe / Render / Notify
    │   └── Services/
    │       ├── Whisper/       # OpenAI transcription
    │       ├── AssBuilder/    # ASS stylesheet generation
    │       └── Ffmpeg/        # Server-side rendering
    └── docker/
        └── Dockerfile         # Multi-stage build (PHP-FPM + FFmpeg)
```

---

## Roadmap

- [ ] B2B tier: long video → 3 shorts repurposing (target: podcasters / educators, $49–99/mo)
- [ ] Auto-caption translation across 8 languages
- [ ] Template library for creators to reuse
- [ ] Chrome extension: capture-and-caption straight from web videos

---

## Author

**Kennedy MERRELOSE** — Full-Stack Developer (Solo)

- Portfolio: [kennedymerrelose.vercel.app](https://kennedymerrelose.vercel.app)
- Upwork: [Top Rated, 100% Job Success, $5K+ earned](https://www.upwork.com/freelancers/~01fd4e5b112fcd6443)
- GitHub: [@MERRELOSE](https://github.com/MERRELOSE)
- Email: kennedymerrelose@gmail.com

---

<sub>Built solo, deployed on Railway + Vercel, currently in launch phase.</sub>
