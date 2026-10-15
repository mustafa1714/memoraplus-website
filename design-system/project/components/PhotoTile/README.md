# PhotoTile
A service or category tile: photograph on top, gold-ruled text block below — used for the three services (فرص استثمارية · عقارات سكنية · عقارات تجارية).

**Consumer provides:** `<li class="mp-tile">` (add `mp-tile--featured` for the highlighted service — investment) containing `.mp-tile__media` with an `<img alt="" loading="lazy" width height>` (+ `mp-demo-badge mp-media-badge` while the photo is stock) and `.mp-tile__body` with an optional `mp-badge mp-badge--status mp-tile__badge` («مجال تركيزنا»), `h3.mp-tile__title` and `p.mp-tile__text`. Lay tiles out in the page's own grid (1 column, 3 from 768px).

**Ratios:** 16:10 on phones, 4:5 from 768px (`object-fit: cover`). **Motion:** lifts 2px with `shadow-card-hover`; disabled under reduced motion.

**Don't:** put text over the photo, use generic icon sets instead of photography, or imply the photo shows a Memora Plus project.
