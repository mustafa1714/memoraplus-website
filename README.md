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

## Content status
- Project listings are **fictional sample data** and every stock photo/video is temporary — both are marked «تجريبي» / «DEMO» on the site.
- Stock media sources and licences: [`website/public/media/CREDITS.md`](website/public/media/CREDITS.md) (Unsplash License / Pexels License). They are included only to demonstrate the design and are not licensed for redistribution as a standalone collection.
- Fonts: IBM Plex Sans Arabic / IBM Plex Sans, SIL Open Font License (`website/public/fonts/LICENSE-OFL.txt`).
- The Memora Plus name and logos belong to Memora Plus.
