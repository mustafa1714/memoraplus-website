# PhotoHero
Full-bleed photograph with a flat navy scrim and the page's main heading — the home hero (`--full`) and page banners such as Projects (`--banner`).

**Consumer provides:** `<section class="mp-photo-hero mp-photo-hero--full|--banner mp-dark">` containing `.mp-photo-hero__media` (one `<img alt="" fetchpriority="high">` with a `srcset` — not `<picture>`, see below), `.mp-photo-hero__scrim`, an optional `<span class="mp-demo-badge mp-media-badge">` while the photo is stock, and `.mp-container.mp-photo-hero__inner > .mp-photo-hero__panel`. Home: panel holds eyebrow, `h1.mp-photo-hero__title` (display 52/68, mobile 34/48), `hr.mp-heading__rule`, `p.mp-photo-hero__lead` and the CTAs (WhatsApp first). Banner: panel holds a `SectionHeading as="h1"`.

**Layout:** mobile — 72% navy scrim over the whole photo, text bottom-aligned (`--full` fills the first screen). Tablet+ — the photo shows under an 18% (`--full`) / 22% (`--banner`) wash and the text sits in a framed panel: 86% navy, `brand-gold` 3px inline-start rule, `radius-md`, `shadow-float`.

**Contrast:** cream text over 72% navy is ≥4.9:1 even above a pure-white pixel, and higher inside the 86% panel. Gold is decorative here (rule line) — eyebrows and leads on photographs are cream.

**Images:** WebP with a 4:5 crop for small screens plus 1280/1920 landscape in one `srcset` (`sizes="100vw"`). A `<source>` in `<picture>` would make frameworks that preload the high-priority `<img>` download two files.

**Don't:** use gradients, autoplay video, parallax or text inside the photograph; stack more than one PhotoHero per page.
