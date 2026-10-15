# DemoBadge
Marks content that is **temporary or unverified**: licensed stock photos and video standing in for the client's own media, and sample project data. Label: «تجريبي» (ar) / «DEMO» (en, tr).

**Consumer provides:** `<span class="mp-demo-badge">تجريبي</span>`. On a positioned media box (photo, video, PhotoHero, PhotoTile) add `mp-media-badge` to pin it to the top inline-end corner. Inside a ProjectCard it sits in `.mp-card__badges` next to the status badge (replaces the old `mp-badge--draft`).

**Rules:** always visible and next to the content it qualifies — never in a tooltip, footer note or metadata. Use it only where content is genuinely temporary; don't badge whole pages. Remove it as soon as real client media/data replaces the item. `brand-maroon` on `brand-cream` with a `brand-gold` hairline (≥7:1). Latin labels get `0.08em` tracking; Arabic never does.
