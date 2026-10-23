# WhatsAppFloat
The always-visible WhatsApp button, bottom inline-end corner of every page — the site's primary conversion path.

**Consumer provides:** one `<a class="mp-wa-float" data-mp-whatsapp href="https://wa.me/905312450579">` with the icon and a label span (`mp-wa-float__label`). Below 768px it collapses to a 56px circle and the label stays available to screen readers; add `mp-wa-float--keep-label` to keep the text, `mp-wa-float--compact` to collapse at every width.

**Rules:** `whatsapp` fill with `on-whatsapp` content (5.41:1), `shadow-float`, `z-float`. One per page; position mirrors automatically in LTR. Keep clear of the cookie banner (the banner sits above it on `z-overlay` until dismissed). No pulsing or bouncing animation.
