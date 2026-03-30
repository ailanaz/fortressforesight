# FortressForesight

Protect what protects you.

FortressForesight is a home readiness, records, and recovery support app for pre-homebuyers, homebuyers, and homeowners.

## Tech Stack

- React (PWA, installable to the home screen)
- Firebase Authentication, Firestore, and Cloud Storage
- FEMA flood map data/services
- NOAA weather and storm data
- Google Maps / geocoding
- Capacitor for iOS and Android app packaging

## Getting Started

```bash
npm install
npm start
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the required credentials.

Never commit `.env`.

## Deployment

- Web app: GitHub Pages via GitHub Actions
- Primary domain: `fortressforesight.app`
- DNS: Namecheap
- Backend services: Firebase
- Mobile: Capacitor for the iOS App Store and Google Play

## Status

Initial scaffold, in development.
