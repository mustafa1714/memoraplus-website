# FilterChips
Client-side filtering on the Projects page by location, type and status — one choice per group, no search box.

**Consumer provides:** a container with `data-mp-filters="<CSS selector of the grid wrapper>"`; one `<div role="group" data-mp-filter-group="location|type|status" aria-labelledby>` per filter with `<button type="button" class="mp-chip" data-mp-chip data-value="…" aria-pressed>` chips (the «الكل» chip has `data-value=""`); an optional live status line `<p data-mp-filter-status aria-live="polite">`; an optional empty message `[data-mp-filter-empty]` inside the grid wrapper. Values must match the cards' `data-location`, `data-type`, `data-status`.

**Panel variant:** add `mp-filters--panel` to put the filters on a raised white card (`surface-white`, `border-hairline`, `radius-md`, `shadow-card`) — on the Projects page it overlaps the bottom of the PhotoHero banner (the overlap margin belongs to the page layout).

**States:** default `border-control`; hover `brand-maroon` outline; selected `brand-maroon` fill, `on-maroon` text and a ✓ icon (never colour alone). The draft values shown here (الجانب الأوروبي/الآسيوي، سكني/تجاري/استثماري، جاهز/قيد الإنشاء) are placeholders until real project data defines the lists.
