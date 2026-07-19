<div align="center">

# Tourism Booking Platform

**Web app to book tourist site visits and cultural events. React frontend, Laravel backend, integrated payments.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

---

## Overview

A booking platform where users discover, book, and pay for tourist site visits and cultural events. React frontend, Laravel backend handling payments, reservations, and event scheduling. An admin dashboard on top for managing sites, events, guides, and analytics.

Built for a context where standard global payment gateways are not always available, so the payment layer is a service abstraction that can swap providers without touching booking logic.

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

## Key features

### For visitors
- Online booking for tourist sites with real-time availability
- Event calendar with cultural activities and guided tours
- Integrated payment processing
- Booking confirmation by email
- User reviews and ratings
- Mobile-first responsive design

### For administrators
- Manage sites: add, edit, archive tourist destinations
- Manage events: schedule activities with capacity limits
- Manage guides: assign guides to tours and events
- Booking analytics: track reservations, revenue, popular sites
- Role-based access control

---

## Tech stack

### Frontend
- React with React Router
- Axios for API calls
- Tailwind CSS

### Backend
- Laravel: REST API, business logic, payment integration
- MySQL
- Laravel Sanctum for token-based auth
- Laravel Mail for booking confirmations

---

## Architecture

```
┌─────────────────┐         ┌──────────────────┐         ┌────────────────┐
│   React SPA     │◀───────▶│   Laravel API    │◀───────▶│     MySQL      │
│                 │  REST   │                  │         │                │
│  Booking flow   │         │  Auth            │         │  sites         │
│  Event browse   │         │  Reservations    │         │  events        │
│  Reviews        │         │  Payments        │         │  bookings      │
│  Admin panel    │         │  Notifications   │         │  users         │
└─────────────────┘         └────────┬─────────┘         └────────────────┘
                                     │
                                     ├──▶  Payment gateway
                                     └──▶  Email service
```

---

## Technical notes

### Booking conflict resolution

Guided tours have limited capacity. To avoid double-bookings under concurrent requests, the booking flow uses database-level locks (`SELECT ... FOR UPDATE`) inside a transaction, and confirmation flows are queued to prevent race conditions during high-traffic windows (like weekend tour openings).

### Payment integration in a constrained market

Standard global gateways aren't reliable everywhere, so the payment layer is built as a service abstraction. That lets me switch providers without touching booking logic. Handles webhook verification, refund flows, and reconciliation.

### Capacity-aware availability

Availability checks aren't a naive "is the date free?". They account for:
- maximum capacity per tour
- minimum group size for paid guides
- guide assignment conflicts (a guide can't lead two tours at once)
- buffer time between tours at the same site

### Emails decoupled from the request cycle

All emails (booking confirmation, reminders, cancellation refunds) are queued so user response time isn't blocked by SMTP latency.

---

## More screenshots

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

## Getting started

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

App will be at `http://localhost:5173`.

---

## Project structure

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

- Multi-language support (FR / EN)
- Tour guide mobile companion app
- Loyalty points for returning visitors
- WhatsApp booking notifications

---

## Author

**Kennedy MERRELOSE**, Full-Stack Developer

- Portfolio: [kennedymerrelose.vercel.app](https://kennedymerrelose.vercel.app)
- Upwork: [Top Rated, 100% Job Success, $5K+ earned](https://www.upwork.com/freelancers/~01fd4e5b112fcd6443)
- GitHub: [@MERRELOSE](https://github.com/MERRELOSE)
- Email: kennedymerrelose@gmail.com
