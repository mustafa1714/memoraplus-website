# VideoEmbed
A 16:9 video frame that shows a poster and play button and loads YouTube (privacy-enhanced `youtube-nocookie.com`) only when clicked — for the intro video and project videos from the Memora Plus YouTube channel.

**Consumer provides:** `<div class="mp-video" data-mp-video data-youtube-id="<id>" data-title="<video title>">` containing a poster `<img class="mp-video__poster" alt="">` (or the navy placeholder until a poster exists), `.mp-video__scrim`, and a `<button data-mp-video-play>` with a visible label. `MemoraPlus.initVideo()` swaps in the iframe on click.

**Local demo clip:** until the client's video exists, a licensed local clip can stand in: add `data-video-src="<mp4>"` and `data-poster="<webp>"`, keep a `<span class="mp-demo-badge mp-media-badge">تجريبي</span>` inside the frame, and change the button label to say a demo plays («شاهد المقطع التوضيحي»). On click `initVideo()` swaps in `<video controls>` (the badge stays); `preload` stays off until then. A YouTube ID always takes priority.

**Rules:** never autoplay on load; poster images follow the photography rules; the label says what plays («شاهد الفيديو التعريفي»). The intro video and project video IDs are still to come from the client — the preview runs in demo mode.
