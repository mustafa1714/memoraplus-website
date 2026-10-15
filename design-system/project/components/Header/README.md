# Header
Sticky site header: full logo at the top of the page, compact header with the icon mark after scrolling, full navigation from 1024px and a menu panel below it.

**Consumer provides:** the five links (الرئيسية، من نحن، خدماتنا، المشاريع، تواصل معنا) with `aria-current="page"` on the current page, the language switch links for the same page in each language, and the WhatsApp CTA. Mark the root with `data-mp-header`; `MemoraPlus.initAll()` (or `initHeader(el)`) adds `is-compact` after 24px of scroll and wires the menu toggle (`aria-expanded`, Escape closes).

**Logos:** `memora-plus-logo-01-trimmed.webp` at 56px high; `memora-plus-icon-01.webp` at 40px in the compact state. Never shrink the full logo below 48px.

**Layout:** responds to its own width (container query), so it behaves the same in a page and in a narrow preview. Height `header-height` → `header-height-compact`; ground `surface-white`; `shadow-header` once compact.

**Don't:** transparent header over the hero (logo legibility), more than five links, a second CTA.
