<div align="center">

# Shopify Multi-Store Hub

**Connects multiple Shopify stores in real-time, centralizing products, orders, and inventory data into a clean Filament dashboard.**

![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![Filament](https://img.shields.io/badge/Filament-F59E0B?style=for-the-badge&logo=laravel&logoColor=white)
![Shopify](https://img.shields.io/badge/Shopify_API-7AB55C?style=for-the-badge&logo=shopify&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=websocket&logoColor=white)

</div>

---

## Overview

Built for a client managing **multiple Shopify stores simultaneously**, this application connects to the Shopify API to pull real-time data from all connected shops and centralizes it into a single, clean dashboard built with **Laravel Filament**.

Store owners can monitor products, orders, and inventory across **all their shops from one interface** — without manually switching between Shopify admin panels.

> **The hard part isn't connecting one store.** It's handling rate limits across N stores at the same time, keeping data fresh, and pushing updates to the UI the moment they happen on any store. That's what this project solves.

---

## Demo

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/01-stores-overview.png" width="400" alt="Multi-store overview" /></td>
    <td><img src="./screenshots/02-orders.png" width="400" alt="Centralized orders" /></td>
  </tr>
  <tr>
    <td><img src="./screenshots/03-products.png" width="400" alt="Products across stores" /></td>
    <td><img src="./screenshots/04-inventory.png" width="400" alt="Inventory monitoring" /></td>
  </tr>
</table>

</div>

---

## Key Features

- 🔌 **Real-time multi-store Shopify API integration**
- 🎛 **Centralized dashboard** built with Laravel Filament
- 📦 **Products, orders, and inventory monitoring** across all connected stores
- 🔐 **Admin authentication** with role-based permissions
- 🌓 **Dark / Light mode toggle**
- 🔄 **Automatic data sync** with configurable intervals
- ⚡ **Live updates** via WebSocket — orders appear instantly on the dashboard
- 📊 **Aggregated analytics** across stores

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Laravel 10+ |
| Admin UI | Filament 3 |
| Database | MySQL 8 |
| Queue | Redis + Laravel Horizon |
| Real-time | Laravel Reverb / WebSocket |
| API client | Custom Shopify GraphQL client with rate-limit handling |
| Auth | Laravel + Filament (role-based) |

---

## Architecture

```
                ┌──────────────────────────────────────────┐
                │           Connected Shopify Stores       │
                │                                          │
                │   ┌────────┐  ┌────────┐  ┌────────┐     │
                │   │Store A │  │Store B │  │Store C │     │
                │   └───┬────┘  └───┬────┘  └───┬────┘     │
                └───────┼───────────┼───────────┼──────────┘
                        │ webhooks  │ webhooks  │
                        ▼           ▼           ▼
                ┌──────────────────────────────────────────┐
                │           Laravel Backend                │
                │                                          │
                │  ┌──────────┐    ┌─────────────────────┐ │
                │  │ Webhook  │───▶│  Sync Job (Redis)   │ │
                │  │ Endpoint │    │  - Rate-limit aware │ │
                │  └──────────┘    │  - Exp. backoff     │ │
                │                  │  - Batch requests   │ │
                │  ┌──────────┐    └──────────┬──────────┘ │
                │  │ Scheduler│───────────────┘            │
                │  │ (poll)   │                            │
                │  └──────────┘                            │
                │                                          │
                │  ┌──────────────┐    ┌─────────────────┐ │
                │  │   MySQL      │    │   WebSocket     │ │
                │  │  - stores    │───▶│   broadcast     │ │
                │  │  - products  │    │                 │ │
                │  │  - orders    │    └────────┬────────┘ │
                │  │  - inventory │             │          │
                │  └──────────────┘             │          │
                └───────────────────────────────┼──────────┘
                                                ▼
                                       ┌────────────────┐
                                       │ Filament Admin │
                                       │  - live tables │
                                       │  - analytics   │
                                       │  - dark mode   │
                                       └────────────────┘
```

---

## Technical Highlights

### 1. Rate-limit-aware Shopify client

Shopify enforces strict API limits (40 requests/app/store with leaky-bucket replenishment). The hub talks to N stores simultaneously, so the client implements:

- **per-store leaky bucket tracking** based on the `X-Shopify-Shop-Api-Call-Limit` response header
- **exponential backoff with jitter** on `429 Too Many Requests`
- **intelligent batching** of GraphQL queries so a single round-trip pulls multiple resources

```php
ShopifyClient::for($store)
    ->withRateLimit()
    ->graphql($query);
```

### 2. Real-time order notifications

When Shopify fires an `orders/create` webhook, the flow is:

1. Webhook endpoint validates HMAC signature
2. Job dispatched to Redis queue
3. Job upserts the order in MySQL
4. WebSocket broadcasts `OrderCreated` to subscribed dashboards
5. Filament table updates without a page reload

Result: new orders show up **within ~1s** of being placed on any connected store.

### 3. Idempotent sync

Both webhook-driven and polling-driven syncs use the Shopify `id` as the upsert key. Reprocessing the same event is safe — never creates duplicates, never overwrites local edits flagged with `is_locally_modified`.

### 4. Horizontal scaling via Redis pub/sub

WebSocket connections are stateless. Multiple app instances broadcast via Redis pub/sub, so you can scale the dashboard horizontally without sticky sessions.

---

## Screenshots

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/05-store-detail.png" width="270" /></td>
    <td><img src="./screenshots/06-analytics.png" width="270" /></td>
    <td><img src="./screenshots/07-settings.png" width="270" /></td>
  </tr>
</table>

</div>

---

## Getting Started

> Source not public — this is a client project. Setup notes below are for reference.

### Prerequisites
- PHP 8.2+
- Composer
- MySQL 8+
- Redis 7+
- A Shopify Partner account + connected stores
- Custom Shopify app credentials (API key + secret)

### Installation

```bash
# Install
composer install
cp .env.example .env
php artisan key:generate

# Configure DB + Redis + Shopify credentials in .env
php artisan migrate

# Create the first admin user
php artisan make:filament-user

# Start the API + admin
php artisan serve

# Start the queue worker (handles syncs + webhooks)
php artisan horizon

# Start the WebSocket server (for live updates)
php artisan reverb:start
```

### Required environment

```env
SHOPIFY_API_KEY=
SHOPIFY_API_SECRET=
SHOPIFY_SCOPES=read_products,read_orders,read_inventory
SHOPIFY_WEBHOOK_SECRET=

REDIS_HOST=127.0.0.1
REVERB_APP_ID=
REVERB_APP_KEY=
REVERB_APP_SECRET=
```

### Connecting a store

In the Filament admin → **Stores** → **Add store** → OAuth redirect to Shopify → done. The hub registers webhooks automatically.

---

## Project Structure

```
shopify-hub/
├── app/
│   ├── Filament/
│   │   ├── Resources/             # Stores, Products, Orders, Inventory
│   │   └── Widgets/               # Aggregated analytics
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── ShopifyWebhookController.php
│   │   └── Middleware/
│   │       └── VerifyShopifyWebhook.php
│   ├── Jobs/
│   │   ├── SyncProductsJob.php
│   │   ├── SyncOrdersJob.php
│   │   └── SyncInventoryJob.php
│   ├── Services/
│   │   └── Shopify/
│   │       ├── ShopifyClient.php
│   │       ├── RateLimiter.php
│   │       └── WebhookRegistrar.php
│   └── Models/
└── database/
    └── migrations/
```

---

## Roadmap

- [ ] WooCommerce adapter (same dashboard, multiple platforms)
- [ ] Low-stock alerts via email / WhatsApp
- [ ] Cross-store discount campaigns
- [ ] Revenue forecasting

---

## Author

**Kennedy MERRELOSE** — Full-Stack Developer

- Portfolio: [kennedymerrelose.vercel.app](https://kennedymerrelose.vercel.app)
- Upwork: [Top Rated, 100% Job Success](https://www.upwork.com/freelancers/~01fd4e5b112fcd6443)
- GitHub: [@MERRELOSE](https://github.com/MERRELOSE)
- Email: kennedymerrelose@gmail.com

---

<sub>Client project — built to handle the messy reality of multi-store Shopify operations.</sub>
