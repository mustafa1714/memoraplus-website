# CookieBanner
Consent prompt shown on first visit; Google Analytics and Meta Pixel load only after «قبول».

**Consumer provides:** `<section class="mp-cookie mp-dark" data-mp-cookie role="region" aria-labelledby>` with a title, one short paragraph linking to the privacy policy, and two equally weighted buttons `data-mp-consent="accept"` / `data-mp-consent="reject"`. `MemoraPlus.initCookieBanner()` remembers the choice in `localStorage` (`mp-consent-v1`), hides the banner, and dispatches `document` event `mp:consent` with `detail.analytics` — load the tracking scripts only inside that listener.

**Rules:** reject is as easy as accept (same size, no hidden option); no tracking before a choice; `surface-dark` ground, `radius-lg`, `shadow-float`, `z-overlay`. The privacy-policy page and final wording are still to be supplied (legal review recommended).
