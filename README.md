# DailyWala Marketing Site

Next.js marketing site for `www.dailywala.in`.

## Scripts

- `npm run dev` starts local development.
- `npm run build` creates the production Next.js build, including the standalone output used by OpenNext/Cloudflare.
- `npm run cf:build` creates `.open-next/worker.js` for Cloudflare Workers.
- `npm run deploy` builds the OpenNext bundle and deploys it with the OpenNext Cloudflare adapter.

## Cloudflare Workers Builds

Use these build settings for the connected Git repository:

- Build command: leave empty
- Deploy command: `npm run deploy`
- Root directory: project root

Do not use `opennextjs-cloudflare deploy` by itself; it expects `.open-next/.build/open-next.config.edge.mjs`
to already exist from `opennextjs-cloudflare build`.

## Pages

- `/` home page
- `/services/` services offered
- `/contact/` contact page
- `/open/?role=customer` and `/open/?role=worker` app handoff pages

## Deep-Link Production Checklist

The site already centralizes app links in `app/siteConfig.ts`.

Before production deep links can fully open installed Android/iOS apps:

- Add an Expo/native scheme such as `dailywala` in the mobile app config.
- Add Android intent filters for `https://www.dailywala.in/open/`.
- Add iOS associated domains for `applinks:www.dailywala.in`.
- Publish `/.well-known/assetlinks.json` after the Android signing certificate fingerprint is known.
- Publish `/.well-known/apple-app-site-association` after the Apple Team ID and Bundle ID are finalized.
- Fill Play Store and App Store URLs in `app/siteConfig.ts` once public listings are live.
