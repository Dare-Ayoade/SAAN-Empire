<<<<<<< HEAD
# Saan Empire — Website (lean version)

Just the site. No Supabase, no Stripe, no registration/checkout backend —
those were removed. This is the homepage only, built in Next.js (React +
routing, no extra services).

## Run it

```
npm install
npm run dev
```

Open http://localhost:3000

## .gitignore matters

Before you `git add .`, confirm `.gitignore` includes `node_modules` —
that folder has tens of thousands of files and should never be pushed to
GitHub. If your last push said "too many files," this was almost
certainly why, regardless of which packages are installed.

## What's not here (on purpose)

- Registration / login — not built yet
- Payment checkout — not built yet, will connect to Square once you have
  API credentials, per the meeting spec
- Booking — will embed JotForm once that's ready

The membership tier builder on the homepage still works visually (click
to select, price updates), but the "Continue to Checkout" button is a
placeholder alert until Square is wired in.
=======
# SAAN-Empire
>>>>>>> 0353a11d50d0934dc3542f898b003e64fd3b7c94
