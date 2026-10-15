# LanguageSwitch
Links between the Arabic, English and Turkish versions of the same page.

**Consumer provides:** three `<a>` elements pointing to the equivalent page in each language, each with `lang` and `hreflang`, and `aria-current="true"` on the current language. Each language name is written in its own language.

**Rules:** links, not a `<select>`; minimum 44×44px targets; current language in `brand-maroon` with a `brand-gold` underline. Pair with `<link rel="alternate" hreflang>` in each page's `<head>`. Inside `.mp-dark` it switches to `ink-on-dark-muted` / `accent-on-dark`.
