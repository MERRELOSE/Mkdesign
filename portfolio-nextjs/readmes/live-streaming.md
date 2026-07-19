<div align="center">

# Live Streaming Platform

**Full live streaming system with real-time video broadcasting, live chat, and viewer invitations. Integrated into an existing Laravel application.**

![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![LiveKit](https://img.shields.io/badge/LiveKit-1F1F1F?style=for-the-badge&logo=livekit&logoColor=white)
![WebRTC](https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=webrtc&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=websocket&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)

</div>

---

## Overview

A full live streaming solution I integrated into an existing Laravel web application. Video broadcasting uses LiveKit over WebRTC. Chat and presence run on WebSockets.

Viewers can be invited to join a stream, interact via live chat, and hosts get full control over stream settings and participant management. Recording is supported with replay.

The challenge wasn't streaming itself, LiveKit handles WebRTC well. The hard part was bridging LiveKit infrastructure with a PHP-first Laravel app, keeping chat snappy under load, and giving hosts fine-grained access control.

---

## Demo

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/01-stream-host.png" width="400" alt="Host view" /></td>
    <td><img src="./screenshots/02-stream-viewer.png" width="400" alt="Viewer view" /></td>
  </tr>
  <tr>
    <td><img src="./screenshots/03-chat.png" width="400" alt="Live chat" /></td>
    <td><img src="./screenshots/04-invitations.png" width="400" alt="Viewer invitations" /></td>
  </tr>
</table>

</div>

---

## Key features

- Real-time video broadcasting via LiveKit WebRTC
- Live chat with WebSocket-driven messaging
- Viewer invitation system with per-stream access control
- Host controls for stream settings and participant management
- Stream recording with replay support
- Real-time viewer count and engagement metrics
- Mute / kick participants from the host panel
- Adaptive bitrate via LiveKit simulcast

---

## Tech stack

| Layer | Technology |
|---|---|
| Host application | Laravel 10+ |
| Video infrastructure | LiveKit (self-hosted or LiveKit Cloud) |
| Server SDK bridge | Custom PHP wrapper around LiveKit server SDK |
| Real-time messaging | WebSockets (Laravel Reverb / Pusher protocol) |
| Pub/sub scaling | Redis pub/sub |
| Recording storage | S3-compatible object storage |
| Frontend | LiveKit JS SDK + vanilla JS / Blade |

---

## Architecture

```
                    ┌─────────────────────────────────┐
                    │       Laravel Application       │
                    │                                 │
                    │  ┌──────────┐   ┌────────────┐  │
                    │  │  Routes  │──▶│Controllers │  │
                    │  └──────────┘   └─────┬──────┘  │
                    │                       │         │
                    │       ┌───────────────┴──────┐  │
                    │       ▼                      ▼  │
                    │  ┌─────────┐         ┌─────────┐│
                    │  │ LiveKit │         │  Chat   ││
                    │  │ Bridge  │         │  Hub    ││
                    │  │ (PHP)   │         │(Reverb) ││
                    │  └────┬────┘         └────┬────┘│
                    └───────┼───────────────────┼─────┘
                            │                   │
                            │ JWT room tokens   │ WS frames
                            ▼                   ▼
                    ┌─────────────┐     ┌─────────────┐
                    │   LiveKit   │     │   Redis     │
                    │   Server    │     │  pub/sub    │
                    │             │     │             │
                    │  WebRTC SFU │     │  multi-node │
                    └──────┬──────┘     │  fan-out    │
                           │            └──────┬──────┘
                  ┌────────┼────────┐          │
                  ▼        ▼        ▼          ▼
              ┌──────┐ ┌──────┐ ┌──────┐  ┌──────────┐
              │ Host │ │View 1│ │View N│  │  Chat    │
              └──────┘ └──────┘ └──────┘  │ Browsers │
                                          └──────────┘
```

---

## Technical notes

### PHP to LiveKit bridge

LiveKit's official server SDKs are Go, Node, and Python. There's no first-class PHP support. So the bridge generates JWT room tokens directly (HS256 with proper grants) and calls LiveKit's HTTP admin API for room management:

```php
$token = LiveKit::tokenFor($user)
    ->room($stream->room_id)
    ->canPublish($isHost)
    ->canSubscribe(true)
    ->ttl(60 * 60)
    ->sign();
```

That avoids a separate microservice and keeps everything in Laravel.

### Hundreds of concurrent chat messages without lag

Naive chat over standard WebSocket connections breaks at scale. Every message broadcast goes through every server instance individually. The fix: a single Redis pub/sub channel per stream. Each Laravel instance subscribes once, fans out to its local connections. Horizontal scaling is trivial.

### Access control per stream

Streams can be:
- Public: anyone with the link can join
- Invite-only: viewer email gets a unique signed URL with expiry
- Token-gated: paid streams require a valid purchase before token issuance

The same `JoinStream` policy gates every entry path (link, invitation, ticket purchase).

### Recording with metadata sync

When a host stops the stream, the recording is automatically:
1. uploaded to S3-compatible storage
2. transcoded if needed (LiveKit Egress)
3. linked back to the `streams` table with duration, file size, and a thumbnail

Replays use the same chat infrastructure with timestamps for "rewatch live chat" support.

---

## More screenshots

<div align="center">

<table>
  <tr>
    <td><img src="./screenshots/05-recording.png" width="270" /></td>
    <td><img src="./screenshots/06-analytics.png" width="270" /></td>
    <td><img src="./screenshots/07-settings.png" width="270" /></td>
  </tr>
</table>

</div>

---

## Getting started

> Source is not public, this is a private client project. Setup notes below describe the integration.

### Prerequisites
- PHP 8.1+
- Composer
- Redis 7+
- A LiveKit server (self-hosted or [LiveKit Cloud](https://livekit.io/))
- S3-compatible storage (AWS S3, Backblaze B2, MinIO)

### Installation

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate

# Start the API
php artisan serve

# Start the WebSocket server for chat
php artisan reverb:start

# Start the queue worker for recording uploads
php artisan queue:work
```

### Required environment

```env
LIVEKIT_HOST=https://your-livekit-server
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=

REVERB_APP_ID=
REVERB_APP_KEY=
REVERB_APP_SECRET=

S3_BUCKET=recordings
S3_REGION=auto
S3_ENDPOINT=
```

---

## Project structure

```
live-streaming/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── StreamController.php
│   │   │   ├── ChatController.php
│   │   │   └── InvitationController.php
│   │   └── Middleware/
│   │       └── EnsureStreamAccess.php
│   ├── Services/
│   │   ├── LiveKit/
│   │   │   ├── LiveKitBridge.php
│   │   │   ├── TokenBuilder.php
│   │   │   └── RoomAdmin.php
│   │   └── Chat/
│   │       └── ChatBroadcaster.php
│   ├── Models/
│   │   ├── Stream.php
│   │   ├── ChatMessage.php
│   │   └── Invitation.php
│   ├── Jobs/
│   │   └── ProcessRecordingJob.php
│   └── Policies/
│       └── StreamPolicy.php
└── resources/
    ├── views/
    │   └── streams/
    └── js/
        └── stream-client.js  # LiveKit JS SDK integration
```

---

## Roadmap

- Native mobile clients (React Native + LiveKit)
- Stream donations / tipping
- Co-host mode (multi-host streams)
- AI-powered moderation for chat

---

## Author

**Kennedy MERRELOSE**, Full-Stack Developer

- Portfolio: [kennedymerrelose.vercel.app](https://kennedymerrelose.vercel.app)
- Upwork: [Top Rated, 100% Job Success, $5K+ earned](https://www.upwork.com/freelancers/~01fd4e5b112fcd6443)
- GitHub: [@MERRELOSE](https://github.com/MERRELOSE)
- Email: kennedymerrelose@gmail.com
