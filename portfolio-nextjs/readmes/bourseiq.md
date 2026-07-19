<div align="center">

# BourseIQ — AI-Powered Multi-Market Stock Analysis

**Full-stack investment analysis platform covering global markets and BRVM (47 African UEMOA stocks), powered by a proprietary 5-dimension scoring engine and a task-routed multi-LLM AI layer.**

[![Live](https://img.shields.io/badge/Live-bourseiq--ai.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://bourseiq-ai.vercel.app)
[![GitHub](https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MERRELOSE/Investissements-en-bourse)

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenRouter-000000?style=for-the-badge&logo=openai&logoColor=white)

</div>

---

## Overview

BourseIQ analyzes **80+ stocks** across global markets (US, Europe, Asia via `yfinance`) and the **Bourse Régionale d'Abidjan (BRVM)** — 47 UEMOA stocks fetched via custom scrapers on `brvm.org` and `sikafinance.com`.

The core is a **proprietary 5-dimension scoring engine** (valuation, quality, financial health, dividend, market risk), enriched with composite metrics (risk/reward, quality/value, sustainable yield).

The differentiator is the **AI layer**: 5 distinct cognitive tasks routed to 5 different models through a single OpenRouter API — with realistic monthly AI cost around **$1** for typical usage.

> **Live:** [bourseiq-ai.vercel.app](https://bourseiq-ai.vercel.app)
> **Source:** [github.com/MERRELOSE/Investissements-en-bourse](https://github.com/MERRELOSE/Investissements-en-bourse)

---

## Demo

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/01-discovery.png" width="400" alt="Discovery home" /></td>
    <td><img src="./screenshots/02-company.png" width="400" alt="Company page with 5D scoring" /></td>
  </tr>
  <tr>
    <td><img src="./screenshots/03-brvm.png" width="400" alt="BRVM dashboard" /></td>
    <td><img src="./screenshots/04-portfolio.png" width="400" alt="Virtual portfolio" /></td>
  </tr>
</table>

</div>

---

## Key Features

### For investors
- 📈 **80+ stocks** — US, Europe, Asia (yfinance) + 47 BRVM UEMOA stocks (custom scrapers)
- ⭐ **Proprietary 5-dimension scoring** — valuation, quality, financial health, dividend, market risk
- 🧮 **Composite metrics** — risk/reward, quality/value, sustainable yield
- 🎬 **Netflix-style discovery** — curated carousels per market and per theme
- 💼 **Multi-currency virtual portfolio** — USD + XOF coexist without FX conversion
- 📊 **Historical backtest** — buy-and-hold performance chart against benchmarks
- ⚖️ **Stock comparator** — side-by-side with analytical verdict
- 🔔 **Automated alerts** — email notifications on score / price movements
- 🇧🇯 **BRVM dashboard** — dedicated view for the African regional market

### AI-powered
- 🤖 **Multi-LLM routing via OpenRouter** — each task uses the cheapest model that can do it well
- 💰 **~$1/month realistic AI cost** for typical usage

---

## Tech Stack

### Backend (FastAPI on Render)
| Layer | Technology |
|---|---|
| Framework | FastAPI (async) |
| Language | Python 3.11+ |
| ORM | SQLAlchemy 2.0 |
| Migrations | Alembic |
| Auth | JWT via fastapi-users |
| Scheduling | APScheduler (periodic jobs) |
| Rate limiting | Custom middleware |
| Database | PostgreSQL (Neon) |

### Frontend (Next.js on Vercel)
| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS |
| Theme | Dark / Light with persistence |
| Charts | Custom SVG components (no chart lib) |
| Deployment | Vercel |

### External
| Provider | Purpose |
|---|---|
| yfinance | Global markets (US, Europe, Asia) |
| brvm.org + sikafinance.com | Custom scrapers for BRVM |
| OpenRouter | Unified access to Gemini / Claude / Perplexity |

---

## Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    Next.js 14 (Vercel)                       │
│                                                              │
│  10 routes  │  25+ React components  │  Custom SVG charts    │
│  Dark/Light theme  │  TypeScript strict                      │
└─────────────────────────┬────────────────────────────────────┘
                          │
                          │  REST (34 endpoints, JWT-authed)
                          ▼
┌──────────────────────────────────────────────────────────────┐
│                 FastAPI Async (Render)                       │
│                                                              │
│  ┌────────────────┐   ┌────────────────┐   ┌──────────────┐  │
│  │  Auth (JWT)    │   │  Rate limiter  │   │ APScheduler  │  │
│  │  fastapi-users │   │  (custom)      │   │ (periodic)   │  │
│  └────────────────┘   └────────────────┘   └──────┬───────┘  │
│                                                   │          │
│  ┌────────────────────────────────────────────────┼────────┐ │
│  │             Data providers                     │        │ │
│  │                                                ▼        │ │
│  │  ┌──────────┐  ┌─────────────────────────────────────┐  │ │
│  │  │ yfinance │  │  BRVM scrapers                      │  │ │
│  │  │ (global) │  │  (brvm.org + sikafinance.com)       │  │ │
│  │  └──────────┘  └─────────────────────────────────────┘  │ │
│  └─────────────────────────────────────────────────────────┘ │
│                          │                                   │
│  ┌───────────────────────▼──────────────────────────┐        │
│  │       Proprietary 5-dimension scoring engine     │        │
│  │       + composite metrics                        │        │
│  └───────────────────────┬──────────────────────────┘        │
│                          │                                   │
│  ┌───────────────────────▼──────────────────────────┐        │
│  │       AI layer (OpenRouter, task-routed)         │        │
│  │                                                  │        │
│  │  Gemini Flash  ──▶  narrative synthesis          │        │
│  │  Claude Haiku  ──▶  Q&A "ask the analyst"        │        │
│  │  Claude Sonnet ──▶  macro view + PDF extraction  │        │
│  │  Perplexity    ──▶  web research with citations  │        │
│  └──────────────────────────────────────────────────┘        │
│                                                              │
│                          │                                   │
└──────────────────────────┼───────────────────────────────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │  PostgreSQL (Neon)     │
              │  Alembic-managed       │
              └────────────────────────┘
```

---

## Technical Highlights

### 1. Multi-LLM routing — pay per cognitive load, not per token

Instead of paying premium tokens for every AI task, I mapped each cognitive load to the cheapest model that can execute it correctly:

| Task | Model | Why |
|---|---|---|
| Narrative synthesis on structured data | Gemini 2.5 Flash | High volume, cheap tokens, good enough for templated summaries |
| Q&A "ask the analyst" | Claude Haiku 4.5 | Fast, disciplined, strict anti-advice system prompt |
| Macro market view + PDF fundamentals extraction | Claude Sonnet 4.6 | Long context + precision required for annual reports |
| Web research with cited sources | Perplexity Sonar Pro | Native web-search + source attribution |

**Realistic monthly cost: ~$1 for typical usage.** All 4 models accessed through a single OpenRouter API — one integration, four capabilities.

### 2. BRVM data layer — no public API, custom scrapers

The Bourse Régionale d'Abidjan has no public JSON API. I wrote **custom scrapers** against `brvm.org` and `sikafinance.com`, with:
- rate limiting to respect the source sites
- a cache layer to avoid re-scraping the same session's data
- output normalization so BRVM stocks feed the **same** 5-dimension scoring pipeline as global markets

Net effect: 47 African UEMOA stocks get first-class treatment alongside US/Europe/Asia.

### 3. Multi-currency portfolio without FX friction

Users can hold USD and XOF positions in the same virtual portfolio — the system deliberately **does not** convert between them. That reflects how UEMOA investors actually think (spendable XOF vs global exposure USD), and avoids introducing FX-timing noise into performance tracking.

### 4. Custom SVG charts (no chart library)

All charts are custom SVG React components — smaller bundle, exact control over styling for the dark/light theme, no runtime dependency to keep secure. 25+ reusable components form the design system.

### 5. Scheduled data pipeline

APScheduler orchestrates periodic data pulls (prices, fundamentals, news) with backoff on failure. Alembic tracks every schema migration for safe deploys on Render.

---

## Screenshots

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/05-compare.png" width="270" /></td>
    <td><img src="./screenshots/06-backtest.png" width="270" /></td>
    <td><img src="./screenshots/07-alerts.png" width="270" /></td>
  </tr>
</table>

</div>

---

## Getting Started

### Prerequisites
- Python 3.11+
- Node.js 18+
- PostgreSQL 15+ (or a Neon connection string)
- OpenRouter API key

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate      # or .\venv\Scripts\activate on Windows
pip install -r requirements.txt

cp .env.example .env
alembic upgrade head

uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Required environment

```env
# Backend
DATABASE_URL=postgresql://...
JWT_SECRET=
OPENROUTER_API_KEY=
SMTP_HOST=
SMTP_USER=
SMTP_PASSWORD=

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## Project Structure

```
bourseiq/
├── backend/                         # FastAPI async
│   ├── app/
│   │   ├── main.py                  # FastAPI entrypoint
│   │   ├── api/                     # 34 REST endpoints
│   │   │   ├── auth.py
│   │   │   ├── watchlist.py
│   │   │   ├── portfolio.py
│   │   │   ├── discovery.py
│   │   │   ├── backtest.py
│   │   │   ├── ai.py                # Q&A, synthesis, PDF
│   │   │   └── admin.py
│   │   ├── models/                  # SQLAlchemy 2.0
│   │   ├── services/
│   │   │   ├── scoring/             # 5-dim engine + composites
│   │   │   ├── data/
│   │   │   │   ├── yfinance.py
│   │   │   │   └── brvm/            # custom scrapers
│   │   │   ├── ai/
│   │   │   │   └── router.py        # OpenRouter task routing
│   │   │   └── scheduler.py         # APScheduler jobs
│   │   ├── middleware/
│   │   │   └── ratelimit.py
│   │   └── config.py                # env validation on startup
│   ├── alembic/                     # migrations
│   └── requirements.txt
│
└── frontend/                        # Next.js 14 App Router
    ├── app/
    │   ├── page.tsx                 # discovery home
    │   ├── companies/[symbol]/      # stock detail
    │   ├── brvm/                    # BRVM dashboard
    │   ├── portfolio/               # virtual portfolio
    │   ├── watchlist/
    │   ├── compare/                 # side-by-side
    │   └── backtest/
    ├── components/                  # 25+ reusable React components
    │   ├── charts/                  # custom SVG
    │   ├── scoring/                 # 5-dim visual
    │   └── ...
    └── lib/
        └── api.ts                   # typed API client
```

---

## AI cost breakdown (typical month)

| Task | Model | ~Monthly cost |
|---|---|---|
| Narrative synthesis (high volume) | Gemini 2.5 Flash | ~$0.30 |
| Q&A analyst | Claude Haiku 4.5 | ~$0.20 |
| Macro view + PDF | Claude Sonnet 4.6 | ~$0.30 |
| Cited web research | Perplexity Sonar Pro | ~$0.20 |
| **Total** | | **~$1.00** |

Reference numbers, not billed averages — actual cost scales with usage.

---

## Roadmap

- [ ] Additional African stock exchanges (BVMAC, NGX)
- [ ] User-defined scoring weights
- [ ] Options / derivatives data
- [ ] Mobile app (React Native, reusing existing API)

---

## Author

**Kennedy MERRELOSE** — Full-Stack Developer

- Portfolio: [kennedymerrelose.vercel.app](https://kennedymerrelose.vercel.app)
- Upwork: [Top Rated, 100% Job Success, $5K+ earned](https://www.upwork.com/freelancers/~01fd4e5b112fcd6443)
- LinkedIn: [Kennedy MERRELOSE](https://www.linkedin.com/in/kennedy-merrelose-165092283)
- GitHub: [@MERRELOSE](https://github.com/MERRELOSE)
- Email: kennedymerrelose@gmail.com

---

<sub>Full-stack Python + TypeScript, with structured multi-LLM AI integration. Global markets + African BRVM in one place.</sub>
