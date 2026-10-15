# ProjectCard
One project in the projects grid: image, status, type, name, location, starting price, payment plan, delivery and a WhatsApp enquiry that names the project.

**Consumer provides (per project):** image (4:3, WebP, `alt` describing the building) or the placeholder until real photos arrive; status label (قيد الإنشاء / جاهز للتسليم); type (شقق سكنية / وحدات تجارية / فرصة استثمارية); name; location; `priceFrom` in USD formatted with `MemoraPlus.formatPrice()`; down payment; instalment months; delivery; a `<span class="mp-demo-badge">تجريبي</span>` (DemoBadge; «DEMO» in en/tr) in `.mp-card__badges` while the data or photo is not real — it replaces the older `mp-badge--draft`. Stock photos: `srcset` 480w/800w with `sizes`, `loading="lazy"`, and an `alt` that describes the photo as illustrative («صورة توضيحية: …»), never as the project itself. Wrap cards in `<ul class="mp-grid__list">` inside `.mp-grid`; each `<article>` carries `data-mp-card data-location data-type data-status` for `FilterChips`.

**WhatsApp:** the enquiry button uses `data-mp-whatsapp data-project="<name>"` → message «مرحباً ميمورا بلس، أرغب بمعرفة تفاصيل مشروع: <name>». The phone button is icon-only and must keep its `aria-label`.

**Grid:** 1 column, 2 from 640px, 3 from 960px of grid width; gap `space-6`. **Motion:** lifts 2px with `shadow-card-hover`; disabled under reduced motion.

**Don't:** put text inside images, show ratings or review counts, mark a project «مميز» without client data, or remove the draft badge before real data replaces it.
