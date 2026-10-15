# Button
Buttons for every action; the primary action on any page is contacting Memora Plus on WhatsApp.

**Variants:** `mp-btn` (primary, `brand-maroon`), `mp-btn--secondary` (`brand-navy`), `mp-btn--outline` (`border-control`), `mp-btn--whatsapp` (`whatsapp`), `mp-btn--link` (text with a `brand-gold` underline). **Sizes:** default 48px, `mp-btn--sm` 44px. `mp-btn--block` fills its container.

**Consumer provides:** an `<a>` for navigation (WhatsApp, phone, pages) or a `<button type="button">` for in-page actions; the label; an optional `<span data-mp-icon="…">` before the label; `aria-label` when the button is icon-only.

**WhatsApp:** add `data-mp-whatsapp` (default message) or `data-mp-whatsapp="نص الرسالة"` / `data-project="اسم المشروع"`; `MemoraPlus.initAll()` writes the `wa.me` link. Keep a real `href="https://wa.me/905436227764"` so it works without JS.

**Do:** one primary or WhatsApp button per group. Use `whatsapp` only for WhatsApp. On dark grounds wrap in `.mp-dark` so the outline variant and focus ring switch.
**Don't:** gold-filled buttons with white text (fails contrast); more than two buttons side by side; disabled buttons for primary contact.
