<div align="center">

# ClauSub — AI Viral Subtitles

**Mobile app that auto-generates viral-style subtitles on short videos for TikTok, Reels & Shorts using AI.**

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel_11-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![OpenAI](https://img.shields.io/badge/Whisper_AI-412991?style=for-the-badge&logo=openai&logoColor=white)
![FFmpeg](https://img.shields.io/badge/FFmpeg-007808?style=for-the-badge&logo=ffmpeg&logoColor=white)

</div>

---

## Overview

ClauSub is a production-ready mobile application that leverages **OpenAI's Whisper API** to automatically transcribe and generate viral-style subtitles on short-form videos.

The app processes videos through a fully asynchronous pipeline — from upload to final render — keeping the backend lightweight and the user experience fast.

> **Why this matters:** typical solutions either run subtitle rendering on-device (slow, battery-hungry) or pay heavy egress costs by routing video bytes through their backend. ClauSub does **neither**: presigned uploads bypass the backend entirely, and rendering happens server-side on dedicated Redis-backed workers.

---

## Demo

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/01-onboarding.png" width="200" alt="Onboarding" /></td>
    <td><img src="./screenshots/02-style-picker.png" width="200" alt="Style picker" /></td>
    <td><img src="./screenshots/03-rendering.png" width="200" alt="Rendering" /></td>
    <td><img src="./screenshots/04-result.png" width="200" alt="Final result" /></td>
  </tr>
</table>

</div>

---

## Key Features

- **9 subtitle styles** with custom color picker (karaoke, pop-in, neon glow, emojis, ...)
- **Whisper AI transcription** with auto-detection of 100+ languages
- **Server-side FFmpeg rendering** using ASS stylesheets for word-level animations
- **Presigned URL uploads** — backend never touches video data, zero egress cost
- **RevenueCat in-app purchases** with idempotent webhooks
- **8-language internationalization** (type-safe via i18next)
- **3 specialized Redis queues** (transcribe / render / default) to isolate workloads
- **Offline detection** with automatic retry on upload failure
- **Onboarding flow** with language selection
- **Google Sign-In** + classic authentication via Laravel Sanctum

---

## Tech Stack

### Mobile
| Layer | Technology |
|---|---|
| Framework | React Native (Expo SDK) |
| Navigation | Expo Router |
| State | React Context + hooks |
| i18n | i18next (8 languages, type-safe) |
| Auth | Google Sign-In + Sanctum tokens |
| Payments | RevenueCat |

### Backend
| Layer | Technology |
|---|---|
| Framework | Laravel 11 (PHP 8.3) |
| Queues | Redis + Laravel Horizon |
| AI | OpenAI Whisper API |
| Rendering | FFmpeg with ASS stylesheets |
| Storage | Backblaze B2 (S3-compatible, presigned URLs) |
| Auth | Sanctum (API tokens) |
| Deployment | Railway (Docker multi-stage builds) |

---

## Architecture

```
┌──────────────┐      ┌─────────────────────┐      ┌────────────────┐
│ Mobile (RN)  │──1──▶│  Backblaze B2 (S3)  │      │  Laravel API   │
│              │      │   presigned upload  │      │  + Horizon     │
└──────┬───────┘      └─────────────────────┘      └───────┬────────┘
       │                                                   │
       │  2. notify backend (video uploaded)               │
       └───────────────────────────────────────────────────┘
                                                           │
                                          ┌────────────────┼────────────────┐
                                          ▼                ▼                ▼
                                  ┌──────────────┐ ┌──────────────┐ ┌─────────────┐
                                  │   QUEUE:     │ │   QUEUE:     │ │   QUEUE:    │
                                  │  transcribe  │ │    render    │ │   default   │
                                  │              │ │              │ │             │
                                  │  Whisper AI  │ │   FFmpeg     │ │  Webhooks,  │
                                  │  transcripts │ │   + ASS      │ │  receipts,  │
                                  │              │ │   styling    │ │  notifs     │
                                  └──────┬───────┘ └──────┬───────┘ └─────────────┘
                                         │                │
                                         └────────┬───────┘
                                                  ▼
                                          ┌──────────────┐
                                          │   B2 again   │
                                          │ (rendered)   │
                                          └──────┬───────┘
                                                 │
                                          ┌──────▼───────┐
                                          │ Push to user │
                                          └──────────────┘
```

---

## Technical Highlights

### 1. Zero-egress video pipeline

The backend **never receives video bytes**. Mobile clients upload directly to Backblaze B2 using presigned URLs generated by Laravel. The backend only stores object keys and orchestrates the pipeline. Bandwidth cost on the API tier = 0.

### 2. Word-level karaoke subtitles via ASS

Whisper returns word-level timestamps. These are converted into [ASS stylesheets](https://en.wikipedia.org/wiki/SubStation_Alpha) where each word has its own `\k` timing tag, producing true karaoke-style highlights synced with the audio — not a naive line-by-line caption.

### 3. Three isolated Redis queues

`transcribe`, `render`, and `default` run on separate workers. This prevents a long render job from starving fast jobs (webhook handling, push notifications) and lets each worker scale independently on Railway.

### 4. Idempotent payment webhooks

RevenueCat retries failed webhooks. The backend uses a `payment_events` table with a unique `event_id` constraint, so re-deliveries are safely no-ops — no double-credit, no race conditions.

---

## Screenshots

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/05-home.png" width="180" /></td>
    <td><img src="./screenshots/06-upload.png" width="180" /></td>
    <td><img src="./screenshots/07-styles.png" width="180" /></td>
    <td><img src="./screenshots/08-history.png" width="180" /></td>
  </tr>
</table>

</div>

---

## Getting Started

> Source not public — project is currently in private development. The notes below describe how the system runs locally.

### Mobile

```bash
# Install dependencies
npm install

# Configure .env (API base URL, RevenueCat key, Google client IDs)
cp .env.example .env

# Run on iOS
npx expo run:ios

# Run on Android
npx expo run:android
```

### Backend

```bash
# Install
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate

# Start API
php artisan serve

# Start workers (in 3 separate terminals or via Horizon)
php artisan horizon
```

Required environment:
- `OPENAI_API_KEY` — Whisper transcription
- `B2_KEY_ID` / `B2_APPLICATION_KEY` / `B2_BUCKET` — storage
- `REDIS_HOST` / `REDIS_PASSWORD` — queue backend
- `REVENUECAT_WEBHOOK_SECRET` — payment verification

---

## Project Structure

```
clausub/
├── mobile/                    # React Native app (Expo)
│   ├── app/                   # Expo Router screens
│   ├── components/            # Shared UI
│   ├── locales/               # 8 languages (en, fr, es, pt, de, it, ja, ko)
│   └── services/              # API client, auth, RevenueCat
│
└── backend/                   # Laravel 11 API
    ├── app/
    │   ├── Http/Controllers/  # API endpoints
    │   ├── Jobs/              # Transcribe / Render / Notify
    │   └── Services/
    │       ├── Whisper/       # OpenAI transcription
    │       ├── AssBuilder/    # ASS stylesheet generation
    │       └── Ffmpeg/        # Server-side rendering
    └── docker/
        └── Dockerfile         # Multi-stage build (PHP-FPM + FFmpeg)
```

---

## Author

**Kennedy MERRELOSE** — Full-Stack Developer

- Portfolio: [kennedymerrelose.vercel.app](https://kennedymerrelose.vercel.app)
- Upwork: [Top Rated, 100% Job Success](https://www.upwork.com/freelancers/~01fd4e5b112fcd6443)
- GitHub: [@MERRELOSE](https://github.com/MERRELOSE)
- Email: kennedymerrelose@gmail.com

---

<sub>Built with care, deployed on Railway, and tested on real iOS + Android devices.</sub>
