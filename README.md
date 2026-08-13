# DailyWala Marketing Site

Static-export Next.js site for `www.dailywala.in`.

## Scripts

- `npm run dev` starts local development.
- `npm run build` creates the static export in `out/`.

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
