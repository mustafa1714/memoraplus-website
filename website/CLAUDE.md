# Memora Plus website — rules for Claude Code

Static two-page marketing site (Landing + Projects) for Memora Plus, a real-estate marketing company in Istanbul. Next.js 15 (App Router) with `output: "export"` → plain static files in `out/`.

## Sources of truth — read before changing anything
1. `../design-system/project/README.md` — brand book (colours, type, spacing, imagery, motion, logo, a11y). Approved.
2. `../design-system/project/decisions.md` — what the client approved vs. professional choices vs. still missing.
3. `src/content/site.ts` — company copy. Arabic strings marked APPROVED are verbatim client copy: **never edit or "improve" them**. EN/TR are draft translations pending client review.
4. `src/content/projects.ts` — **draft, fictional** project data. Replace with real data when the client supplies it; keep the `draft` flag until then.

## Hard rules
- Use design tokens only (`var(--…)` from `src/styles/tokens.css`). No raw colours, sizes or shadows in new CSS.
- `src/styles/components.css` mirrors the design system's `bundle.css`. Change it in the design system first, then copy it here.
- RTL-first: logical CSS properties only (`inline`/`block`). Arabic is the default locale; never letter-space Arabic.
- No gold text on light grounds; `whatsapp` green only for WhatsApp actions.
- Never invent company facts: no statistics, testimonials, awards, partner logos, addresses, emails. If something is missing, leave it out and ask.
- WhatsApp is the primary conversion path: every page keeps the header CTA, the floating button and per-project enquiry links.
- Tracking (GA / Meta Pixel) loads only after cookie consent (`CookieBanner.tsx`).
- Keep it static: no API routes, no server actions, no `next/image` optimisation (images are `unoptimized`).
- Fonts are self-hosted IBM Plex Sans Arabic / IBM Plex Sans (`public/fonts`, OFL). Do not add Google Fonts requests.
- Do not modify files outside this folder (company originals live in `../VID`, `../*.docx`).

## Commands
- `npm install` · `npm run dev` (http://localhost:3000/ar/) · `npm run build` (writes `out/`) · `npm start` (serves `out/`).
