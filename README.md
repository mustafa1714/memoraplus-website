# Memora Plus — website & design system

Static marketing website for **Memora Plus** (ميمورا بلس), a real-estate marketing company in Istanbul, and the design system it is built on. Arabic (default, RTL), English and Turkish.

| Folder | Contents |
|---|---|
| [`website/`](website/) | Next.js 15 (App Router, `output: "export"`) — two pages, Landing + Projects, in `/ar/`, `/en/`, `/tr/`. Builds to plain static files. |
| [`design-system/`](design-system/) | Brand book, decisions log, tokens, vanilla components (`bundle.css` / `bundle.js`) and previews. `website/src/styles/components.css` mirrors `design-system/project/components/bundle.css`. |

## Run the website
```bash
cd website
npm ci
npm run dev      # http://localhost:3000/ar/
npm run build    # static site in website/out/
```
Set `NEXT_PUBLIC_SITE_URL` (see `website/.env.example`) before a production build; without it canonical/hreflang/Open Graph URLs are omitted on purpose.

## Deploy (Hostinger)
- Every push to `main` that touches `website/` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): `npm ci` + `npm run build` with `NEXT_PUBLIC_SITE_URL` from the repository variable (`https://memoraplus.net`), then commits `website/out/` to the **`deploy`** branch. It can also be run by hand (Actions > Deploy > Run workflow).
- Hostinger hPanel > Advanced > GIT pulls the `deploy` branch into `public_html` (auto-deployment webhook).
- `website/public/.htaccess` (copied into `out/`): HTTPS redirect, `/` to `/ar/`, custom 404, no-cache HTML, long cache for hashed JS/CSS and fonts.
- Roll back: revert the commit on `main` and push (or run the workflow on an older commit).

## Content status
- Projects are the company's real projects (Google Drive "Landing Page" folder); Arabic copy follows the source docs, EN/TR are draft translations.
- Stock media (hero, About, Services, video): [`website/public/media/CREDITS.md`](website/public/media/CREDITS.md) (Unsplash License / Pexels License). They are not licensed for redistribution as a standalone collection.
- Fonts: IBM Plex Sans Arabic / IBM Plex Sans, SIL Open Font License (`website/public/fonts/LICENSE-OFL.txt`).
- The Memora Plus name and logos belong to Memora Plus.
