<div align="center">

# SaaS Dashboard

**Enterprise-grade SaaS dashboard with multi-currency support, dark/light mode, advanced filters, and CSV export — built entirely with Laravel.**

![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Blade](https://img.shields.io/badge/Blade-F7522F?style=for-the-badge&logo=laravel&logoColor=white)

</div>

---

## Overview

A feature-rich SaaS dashboard template designed for businesses that need a **comprehensive admin panel with real-time data visualization**.

The dashboard supports multiple currencies with live conversion, advanced data filtering, and one-click CSV export. The UI adapts seamlessly between dark and light modes, with a fully responsive layout that works on all devices.

> **Why Laravel-only?** Building this without a heavy JS framework keeps the bundle tiny, server-rendered pages load instantly, and the entire stack (auth, currency conversion, exports, theming) stays in one consistent codebase.

---

## Demo

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/01-dashboard-light.png" width="400" alt="Dashboard light mode" /></td>
    <td><img src="./screenshots/02-dashboard-dark.png" width="400" alt="Dashboard dark mode" /></td>
  </tr>
  <tr>
    <td><img src="./screenshots/03-filters.png" width="400" alt="Advanced filters" /></td>
    <td><img src="./screenshots/04-currency.png" width="400" alt="Multi-currency" /></td>
  </tr>
</table>

</div>

---

## Key Features

- 💱 **Multi-currency support** with dynamic conversion — switch currency and all displayed values update instantly
- 🌓 **Dark / Light mode** with system preference detection and persistence
- 🔎 **Advanced filters** with real-time data updates
- 📤 **CSV export** for reports and analytics data
- 👤 **User profile management** with role-based access control
- 📊 **Responsive charts** and data visualization
- 🌐 **Multi-language support** (English / French)
- 📱 **Fully responsive** — works on mobile, tablet, desktop

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Laravel 10+ |
| Templating | Blade |
| Frontend | Vanilla JS + HTML5 + CSS3 |
| Database | MySQL |
| Auth | Laravel Breeze / Sanctum |
| Charts | Chart.js |
| Exports | Laravel Excel / native CSV |

No heavy JS framework. No SPA build pipeline. Just Laravel doing what it does best.

---

## Architecture

```
┌────────────────────────────────────────────────────────┐
│                  Laravel Application                   │
│                                                        │
│  ┌──────────┐    ┌──────────┐    ┌──────────────┐      │
│  │  Routes  │───▶│Middleware│───▶│ Controllers  │      │
│  └──────────┘    │  - Auth  │    └──────┬───────┘      │
│                  │  - Theme │           │              │
│                  │  - Locale│           ▼              │
│                  │  - Curr. │    ┌──────────────┐      │
│                  └──────────┘    │  Services    │      │
│                                  │              │      │
│                                  │ - Currency   │      │
│                                  │   Converter  │      │
│                                  │ - Exporter   │      │
│                                  │ - Filter     │      │
│                                  └──────┬───────┘      │
│                                         ▼              │
│                                  ┌──────────────┐      │
│                                  │ Blade Views  │      │
│                                  │  + Chart.js  │      │
│                                  └──────────────┘      │
└────────────────────────────────────────────────────────┘
                         │
                         ▼
                   ┌──────────┐
                   │  MySQL   │
                   └──────────┘
```

---

## Technical Highlights

### 1. Currency conversion middleware

The user's selected currency lives in the session. A middleware injects the active currency and an up-to-date exchange rate map into every view. Each money value passes through a `Money::convert()` helper at render time — **no preprocessing, no double conversion, no stale data**.

```php
// Example
{{ Money::convert($plan->price)->format() }}
// Displays "€19.99" or "$22.50" depending on user choice
```

### 2. Theme-aware design system

Every component in the dashboard is built with CSS custom properties:

```css
.card {
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
}
```

Switching themes flips a single `data-theme="dark"` attribute on `<html>` — no flicker, no reflow, persists via cookies.

### 3. Composable filter system

Filters are URL-driven (`?status=active&plan=pro&from=2025-01-01`), which means:
- the back button works as expected
- filtered views are shareable / bookmarkable
- the same Eloquent scope handles both the UI list and the CSV export

### 4. CSV export with the same query

The export endpoint reuses the exact same query builder as the on-screen table. **One source of truth** — if a filter works on screen, it works on export.

---

## Screenshots

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/05-profile.png" width="270" /></td>
    <td><img src="./screenshots/06-users.png" width="270" /></td>
    <td><img src="./screenshots/07-settings.png" width="270" /></td>
  </tr>
</table>

</div>

---

## Getting Started

### Prerequisites
- PHP 8.1+
- Composer
- MySQL 8+
- Node.js 18+ (for asset compilation only)

### Installation

```bash
# Clone
git clone https://github.com/MERRELOSE/Saas-Dashboard.git
cd Saas-Dashboard

# Install dependencies
composer install
npm install

# Environment
cp .env.example .env
php artisan key:generate

# Configure DB credentials in .env, then:
php artisan migrate --seed

# Build assets
npm run build

# Serve
php artisan serve
```

App will be available at `http://localhost:8000`.

### Default credentials (seeded)
- Email: `admin@example.com`
- Password: `password`

---

## Project Structure

```
saas-dashboard/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   └── Middleware/
│   │       ├── SetLocale.php
│   │       ├── SetCurrency.php
│   │       └── SetTheme.php
│   ├── Models/
│   ├── Services/
│   │   ├── CurrencyConverter.php
│   │   ├── CsvExporter.php
│   │   └── FilterBuilder.php
│   └── Support/
│       └── Money.php
├── resources/
│   ├── views/                # Blade templates
│   │   ├── layouts/
│   │   ├── components/
│   │   └── dashboard/
│   ├── js/                   # Vanilla JS modules
│   └── css/
└── database/
    ├── migrations/
    └── seeders/
```

---

## Configuration

### Supported currencies

Add or remove currencies in `config/currencies.php`:

```php
return [
    'USD' => ['symbol' => '$', 'name' => 'US Dollar'],
    'EUR' => ['symbol' => '€', 'name' => 'Euro'],
    'XOF' => ['symbol' => 'CFA', 'name' => 'West African CFA'],
    // ...
];
```

### Exchange rates

Rates are fetched from a configurable provider via a daily scheduled task:

```bash
php artisan schedule:work
```

---

## Roadmap

- [ ] WebSocket-driven real-time chart updates
- [ ] Customizable dashboard widgets (drag & drop)
- [ ] Audit log of admin actions
- [ ] 2FA via TOTP

---

## Author

**Kennedy MERRELOSE** — Full-Stack Developer

- Portfolio: [kennedymerrelose.vercel.app](https://kennedymerrelose.vercel.app)
- Upwork: [Top Rated, 100% Job Success](https://www.upwork.com/freelancers/~01fd4e5b112fcd6443)
- GitHub: [@MERRELOSE](https://github.com/MERRELOSE)
- Email: kennedymerrelose@gmail.com

---

<sub>Pure Laravel. No SPA overhead. Production-ready out of the box.</sub>
