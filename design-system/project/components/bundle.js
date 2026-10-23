/* @ds-bundle: {"format":4,"namespace":"MemoraPlus","components":[{"name":"Button"},{"name":"SectionHeading"},{"name":"Header"},{"name":"LanguageSwitch"},{"name":"ProjectCard"},{"name":"FilterChips"},{"name":"WhatsAppFloat"},{"name":"VideoEmbed"},{"name":"Footer"},{"name":"CookieBanner"}]} */
/* Memora Plus — vanilla JS helpers (no framework, no network). Progressive enhancement: every link works without it. */
(function () {
  "use strict";

  var PHONE = "905312450579";
  var DEFAULT_MESSAGE = "مرحباً ميمورا بلس، أرغب بمعرفة المزيد عن مشاريعكم.";
  var CONSENT_KEY = "mp-consent-v1";

  var ICONS = {
    "whatsapp-chat": '<path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.3 18.5z"/><path d="M9 9.5c.3 1.8 1.7 3.3 3.5 3.8l1-1 1.7.8-.4 1.4c-3 .2-6-2.7-5.9-5.8l1.4-.4.8 1.7z"/>',
    phone: '<path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2 4 1.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>',
    pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
    calendar: '<rect x="4" y="5.5" width="16" height="14.5" rx="2"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>',
    building: '<path d="M4.5 20.5V8l7.5-4.5L19.5 8v12.5"/><path d="M9 20.5v-6h6v6M8.5 10.5h1M14.5 10.5h1M3 20.5h18"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    play: '<path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 3.6 5.4 3.6 8.5s-1.1 5.9-3.6 8.5c-2.5-2.6-3.6-5.4-3.6-8.5s1.1-5.9 3.6-8.5z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>'
  };

  function icon(name, extraClass) {
    var body = ICONS[name] || "";
    var cls = "mp-icon mp-icon--" + name + (extraClass ? " " + extraClass : "");
    return '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + body + "</svg>";
  }

  function whatsappUrl(message) {
    return "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(message || DEFAULT_MESSAGE);
  }

  function projectMessage(projectName) {
    return "مرحباً ميمورا بلس، أرغب بمعرفة تفاصيل مشروع: " + projectName;
  }

  function formatPrice(value, lang) {
    var n = Number(value);
    if (!isFinite(n)) return String(value);
    return "$" + n.toLocaleString(lang === "tr" ? "tr-TR" : "en-US", { maximumFractionDigits: 0 });
  }

  function reducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function store(key, value) {
    try {
      if (value === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, value);
    } catch (e) { /* storage unavailable: behave as first visit */ }
    return null;
  }

  /* ---------- Header: compact on scroll + mobile menu ---------- */
  function initHeader(el, opts) {
    if (!el || el.__mpHeader) return;
    el.__mpHeader = true;
    opts = opts || {};
    var threshold = opts.threshold == null ? 24 : opts.threshold;
    var scroller = opts.scroller || window;
    function y() { return scroller === window ? window.scrollY : scroller.scrollTop; }
    function update() { el.classList.toggle("is-compact", y() > threshold); }
    if (!opts.static) { scroller.addEventListener("scroll", update, { passive: true }); update(); }

    var toggle = el.querySelector("[data-mp-menu-toggle]");
    var panel = el.querySelector("[data-mp-menu-panel]");
    if (toggle && panel) {
      function setOpen(open) {
        el.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? toggle.dataset.labelClose || "إغلاق القائمة" : toggle.dataset.labelOpen || "فتح القائمة");
      }
      toggle.addEventListener("click", function () { setOpen(!el.classList.contains("is-open")); });
      el.addEventListener("keydown", function (e) { if (e.key === "Escape" && el.classList.contains("is-open")) { setOpen(false); toggle.focus(); } });
      panel.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    }
  }

  /* ---------- Filter chips: single choice per group, filters [data-mp-card] ---------- */
  function initFilters(el) {
    if (!el || el.__mpFilters) return;
    el.__mpFilters = true;
    var target = document.querySelector(el.getAttribute("data-mp-filters") || "") || el.parentElement;
    var status = el.querySelector("[data-mp-filter-status]");
    var empty = target && target.querySelector("[data-mp-filter-empty]");
    var state = {};

    function apply() {
      var cards = target ? target.querySelectorAll("[data-mp-card]") : [];
      var shown = 0;
      Array.prototype.forEach.call(cards, function (card) {
        var ok = Object.keys(state).every(function (k) { return !state[k] || card.getAttribute("data-" + k) === state[k]; });
        card.hidden = !ok;
        var item = card.closest("li");
        if (item) item.hidden = !ok;
        if (ok) shown++;
      });
      if (status) status.textContent = (status.dataset.template || "عدد المشاريع المعروضة: {n}").replace("{n}", shown);
      if (empty) empty.hidden = shown !== 0;
    }

    el.addEventListener("click", function (e) {
      var chip = e.target.closest("[data-mp-chip]");
      if (!chip || !el.contains(chip)) return;
      var group = chip.closest("[data-mp-filter-group]");
      var key = group.getAttribute("data-mp-filter-group");
      Array.prototype.forEach.call(group.querySelectorAll("[data-mp-chip]"), function (c) { c.setAttribute("aria-pressed", c === chip ? "true" : "false"); });
      state[key] = chip.getAttribute("data-value") || "";
      apply();
    });
    apply();
  }

  /* ---------- Video: load YouTube (or a local clip) only on click ---------- */
  function initVideo(el) {
    if (!el || el.__mpVideo) return;
    el.__mpVideo = true;
    var btn = el.querySelector("[data-mp-video-play]");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var id = el.getAttribute("data-youtube-id");
      var src = el.getAttribute("data-video-src");
      // A local clip (e.g. temporary licensed stock footage) plays when there is no YouTube ID; the demo badge stays.
      if (src && (!id || el.hasAttribute("data-demo"))) {
        var video = document.createElement("video");
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true;
        video.preload = "metadata";
        if (el.getAttribute("data-poster")) video.poster = el.getAttribute("data-poster");
        video.setAttribute("aria-label", el.getAttribute("data-title") || "فيديو");
        Array.prototype.slice.call(el.children).forEach(function (c) { if (!c.classList.contains("mp-demo-badge")) el.removeChild(c); });
        el.insertBefore(video, el.firstChild);
        video.focus();
        return;
      }
      if (!id || el.hasAttribute("data-demo")) {
        var note = el.querySelector("[data-mp-video-note]");
        if (note) note.textContent = "معاينة: سيُحمَّل فيديو YouTube هنا عند توفّر الرابط.";
        return;
      }
      var frame = document.createElement("iframe");
      frame.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) + "?autoplay=1&rel=0";
      frame.title = el.getAttribute("data-title") || "فيديو";
      frame.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
      frame.allowFullscreen = true;
      el.innerHTML = "";
      el.appendChild(frame);
      frame.focus();
    });
  }

  /* ---------- Cookie consent ---------- */
  function initCookieBanner(el, opts) {
    if (!el || el.__mpCookie) return;
    el.__mpCookie = true;
    opts = opts || {};
    function emit(analytics) {
      document.dispatchEvent(new CustomEvent("mp:consent", { detail: { analytics: analytics } }));
    }
    var saved = opts.ignoreSaved ? null : store(CONSENT_KEY);
    if (saved === "accepted" || saved === "rejected") {
      el.hidden = true;
      emit(saved === "accepted");
      return;
    }
    el.hidden = false;
    el.addEventListener("click", function (e) {
      var b = e.target.closest("[data-mp-consent]");
      if (!b) return;
      var accepted = b.getAttribute("data-mp-consent") === "accept";
      if (!opts.ignoreSaved) store(CONSENT_KEY, accepted ? "accepted" : "rejected");
      emit(accepted);
      if (opts.onChoice) opts.onChoice(accepted); else el.hidden = true;
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal(root) {
    root = root || document;
    var items = root.querySelectorAll("[data-mp-reveal]:not(.is-visible)");
    if (!("IntersectionObserver" in window) || reducedMotion()) {
      Array.prototype.forEach.call(items, function (i) { i.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    Array.prototype.forEach.call(items, function (i) { io.observe(i); });
  }

  /* ---------- Icons: replace <span data-mp-icon="name"> placeholders ---------- */
  function renderIcons(root) {
    root = root || document;
    Array.prototype.forEach.call(root.querySelectorAll("[data-mp-icon]"), function (span) {
      span.outerHTML = icon(span.getAttribute("data-mp-icon"), span.getAttribute("data-class") || "");
    });
  }

  /* ---------- WhatsApp links: <a data-mp-whatsapp="message"> ---------- */
  function wireWhatsApp(root) {
    root = root || document;
    Array.prototype.forEach.call(root.querySelectorAll("[data-mp-whatsapp]"), function (a) {
      var project = a.getAttribute("data-project");
      var msg = a.getAttribute("data-mp-whatsapp") || (project ? projectMessage(project) : DEFAULT_MESSAGE);
      a.href = whatsappUrl(msg);
      a.target = "_blank";
      a.rel = "noopener";
    });
  }

  function initAll(root) {
    root = root || document;
    document.documentElement.classList.remove("mp-no-js");
    renderIcons(root);
    wireWhatsApp(root);
    Array.prototype.forEach.call(root.querySelectorAll("[data-mp-header]"), function (e) { initHeader(e); });
    Array.prototype.forEach.call(root.querySelectorAll("[data-mp-filters]"), initFilters);
    Array.prototype.forEach.call(root.querySelectorAll("[data-mp-video]"), initVideo);
    Array.prototype.forEach.call(root.querySelectorAll("[data-mp-cookie]"), function (e) { initCookieBanner(e); });
    initReveal(root);
  }

  window.MemoraPlus = {
    PHONE: PHONE,
    icons: Object.keys(ICONS),
    icon: icon,
    whatsappUrl: whatsappUrl,
    projectMessage: projectMessage,
    formatPrice: formatPrice,
    renderIcons: renderIcons,
    wireWhatsApp: wireWhatsApp,
    initHeader: initHeader,
    initFilters: initFilters,
    initVideo: initVideo,
    initCookieBanner: initCookieBanner,
    initReveal: initReveal,
    initAll: initAll
  };
})();
