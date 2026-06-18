<div align="center">

# Tourism Booking Platform

**Full-stack web application for booking tourist site visits and participating in cultural events.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

---

## Overview

A comprehensive tourism platform that enables users to **discover, book, and pay** for tourist site visits and cultural events.

The app combines a public-facing booking interface built with **React** and a robust **Laravel** backend handling payment processing, reservation management, and event scheduling. An admin dashboard provides complete control over sites, events, guides, and booking analytics.

> **Built for a context where standard payment gateways aren't always available** — the system was designed around a local payment integration with proper conflict resolution for limited-capacity tours.

---

## Demo

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/01-home.png" width="400" alt="Home page" /></td>
    <td><img src="./screenshots/02-booking.png" width="400" alt="Booking flow" /></td>
  </tr>
  <tr>
    <td><img src="./screenshots/03-events.png" width="400" alt="Event calendar" /></td>
    <td><img src="./screenshots/04-admin.png" width="400" alt="Admin dashboard" /></td>
  </tr>
</table>

</div>

---

## Key Features

### For visitors
- 🗓 **Online booking** for tourist sites with real-time availability
- 🎭 **Event calendar** with cultural activities and guided tours
- 💳 **Integrated payment processing**
- ✉️ **Booking confirmation** with email notifications
- ⭐ **User reviews and ratings**
- 📱 **Mobile-first responsive design** for on-the-go booking

### For administrators
- 🏛 **Manage sites** — add, edit, archive tourist destinations
- 🎪 **Manage events** — schedule activities with capacity limits
- 👤 **Manage guides** — assign guides to tours and events
- 📊 **Booking analytics** — track reservations, revenue, popular sites
- 🔐 **Role-based access control**

---

## Tech Stack

### Frontend
- **React** — component-based booking interface
- **React Router** — client-side routing
- **Axios** — API communication
- **Tailwind CSS** — utility-first styling

### Backend
- **Laravel** — REST API, business logic, payment integration
- **MySQL** — relational database
- **Laravel Sanctum** — token-based authentication
- **Laravel Mail** — booking confirmation emails

---

## Architecture

```
┌─────────────────┐         ┌──────────────────┐         ┌────────────────┐
│   React SPA     │◀───────▶│   Laravel API    │◀───────▶│     MySQL      │
│                 │  REST   │                  │         │                │
│  - Booking flow │         │  - Auth          │         │  - sites       │
│  - Event browse │         │  - Reservations  │         │  - events      │
│  - Reviews      │         │  - Payments      │         │  - bookings    │
│  - Admin panel  │         │  - Notifications │         │  - users       │
└─────────────────┘         └────────┬─────────┘         └────────────────┘
                                     │
                                     ├──▶  Payment gateway
                                     └──▶  Email service
```

---

## Technical Highlights

### 1. Booking conflict resolution

Guided tours have **limited capacity**. To prevent double-bookings under concurrent requests, the booking flow uses **database-level locks** (`SELECT ... FOR UPDATE`) inside a transaction, and confirmation flows are queued to avoid race conditions during high-traffic windows (e.g. weekend tour openings).

### 2. Payment integration in a constrained market

Standard global gateways aren't always available in this context, so the payment layer is built as a **service abstraction** that can switch providers without touching booking logic. The current implementation handles webhook verification, refund flows, and reconciliation.

### 3. Capacity-aware availability

Availability checks aren't a naive "is the date free?" — they account for:
- maximum capacity per tour
- minimum group size for paid guides
- guide assignment conflicts (a guide can't lead two tours at once)
- buffer time between tours at the same site

### 4. Email notifications, decoupled

All emails (booking confirmation, reminders, cancellation refunds) are **queued** so the user response time isn't blocked by SMTP latency.

---

## Screenshots

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/05-site-detail.png" width="270" /></td>
    <td><img src="./screenshots/06-payment.png" width="270" /></td>
    <td><img src="./screenshots/07-confirmation.png" width="270" /></td>
  </tr>
</table>

</div>

---

## Getting Started

### Prerequisites
- PHP 8.1+
- Composer
- Node.js 18+
- MySQL 8+

### Backend setup

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate

# Configure DB credentials in .env, then:
php artisan migrate --seed
php artisan storage:link

# Start the API
php artisan serve

# (Optional) Start the queue worker for emails
php artisan queue:work
```

### Frontend setup

```bash
cd frontend
npm install

# Point to your local API
echo "VITE_API_URL=http://localhost:8000/api" > .env

npm run dev
```

App will be available at `http://localhost:5173`.

---

## Project Structure

```
tourism-booking/
├── backend/                       # Laravel API
│   ├── app/
│   │   ├── Http/Controllers/      # API endpoints
│   │   ├── Models/                # Eloquent models
│   │   ├── Services/
│   │   │   ├── BookingService.php # Conflict resolution, capacity
│   │   │   └── PaymentService.php # Gateway abstraction
│   │   └── Mail/                  # Email templates
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   └── routes/api.php
│
└── frontend/                      # React SPA
    ├── src/
    │   ├── pages/                 # Route components
    │   ├── components/            # Shared UI
    │   ├── hooks/                 # API hooks
    │   └── services/api.js
    └── vite.config.js
```

---

## Roadmap

- [ ] Multi-language support (FR / EN)
- [ ] Tour guide mobile companion app
- [ ] Loyalty points for returning visitors
- [ ] WhatsApp booking notifications

---

## Author

**Kennedy MERRELOSE** — Full-Stack Developer

- Portfolio: [kennedymerrelose.vercel.app](https://kennedymerrelose.vercel.app)
- Upwork: [Top Rated, 100% Job Success](https://www.upwork.com/freelancers/~01fd4e5b112fcd6443)
- GitHub: [@MERRELOSE](https://github.com/MERRELOSE)
- Email: kennedymerrelose@gmail.com

---

<sub>Made with Laravel & React — focused on reliability for real-world bookings.</sub>
