# Dailywala Marketing Site

Next.js marketing site for `www.dailywala.in`.

## Scripts

- `npm run dev` starts local development.
- `npm run build` creates the production Next.js build, including the standalone output used by OpenNext/Cloudflare.
- `npm run cf:build` creates `.open-next/worker.js` for Cloudflare Workers.
- `npm run deploy` builds the OpenNext bundle and deploys it with the OpenNext Cloudflare adapter.

## Cloudflare Workers Builds

Use these build settings for the connected Git repository:

- Build command: leave empty
- Deploy command: `npx wrangler deploy`
- Root directory: project root

The OpenNext config is intentionally named `open-next.cloudflare.config.ts` instead of `open-next.config.ts`.
Wrangler 4.122 auto-delegates root `open-next.config.ts` projects to `opennextjs-cloudflare deploy` before
running the custom build hook. The custom build in `wrangler.jsonc` runs `npm run cf:build`, then Wrangler deploys
the generated `.open-next/worker.js`.

## Pages

- `/` home page
- `/services/` services offered
- `/contact/` contact page
- `/open/?role=customer` and `/open/?role=worker` app coming-soon pages

## Contact Form Email

The contact form posts to `/api/contact/` and sends through Gmail SMTP with Nodemailer, matching the Jnanam website's delivery path. Configure these as encrypted secrets under the deployed Worker's **Settings > Variables and Secrets**:

- `GMAIL_USER`: the Google Workspace sender, normally `contact@dailywala.in`
- `GMAIL_APP_PASSWORD`: a Google App Password for that account (store as a secret)
- `CONTACT_TO_EMAIL`: the receiving address, normally `contact@dailywala.in`

Google 2-Step Verification must be enabled before creating an App Password. The visitor's email is used only as the message `Reply-To` address. `keep_vars` is enabled in `wrangler.jsonc` so Git deployments preserve dashboard-managed secrets.

## Future App-Link Production Checklist

The site currently keeps Android, iOS, and app-navigation entry points on a coming-soon page. Before enabling production deep links:

- Add an Expo/native scheme such as `dailywala` in the mobile app config.
- Add Android intent filters for `https://www.dailywala.in/open/`.
- Add iOS associated domains for `applinks:www.dailywala.in`.
- Publish `/.well-known/assetlinks.json` after the Android signing certificate fingerprint is known.
- Publish `/.well-known/apple-app-site-association` after the Apple Team ID and Bundle ID are finalized.
- Add verified Play Store and App Store URLs once the public listings are live.
- Replace the coming-soon behavior in `app/open/` only after both destination links are ready.
