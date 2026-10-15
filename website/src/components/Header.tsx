"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/content/site";
import { DICT, BRAND_NAME } from "@/content/site";
import { href, whatsappUrl } from "@/lib/utils";
import { Icon } from "./Icon";
import { LanguageSwitch, type PageKey } from "./LanguageSwitch";

export function Header({ lang, page }: { lang: Locale; page: PageKey }) {
  const t = DICT[lang];
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { key: "home", label: t.nav.home, url: href.home(lang), current: page === "home" },
    { key: "about", label: t.nav.about, url: href.section(lang, "about"), current: false },
    { key: "services", label: t.nav.services, url: href.section(lang, "services"), current: false },
    { key: "projects", label: t.nav.projects, url: href.projects(lang), current: page === "projects" },
    { key: "contact", label: t.nav.contact, url: href.section(lang, "contact"), current: false },
  ];

  const list = (
    <ul className="mp-header__list">
      {links.map((l) => (
        <li key={l.key}>
          <a className="mp-header__link" href={l.url} aria-current={l.current ? "page" : undefined} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
  const wa = whatsappUrl(t.whatsappMessage);

  return (
    <header className={`mp-header${compact ? " is-compact" : ""}${open ? " is-open" : ""}`}>
      <div className="mp-container">
        <div className="mp-header__inner">
          <a className="mp-header__brand" href={href.home(lang)} aria-label={`Memora Plus — ${BRAND_NAME.ar}${lang === "ar" ? "،" : ","} ${t.nav.home}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mp-header__logo" src="/brand/memora-plus-logo-01-trimmed.webp" alt="Memora Plus — ميمورا بلس" width={75} height={56} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mp-header__mark" src="/brand/memora-plus-icon-01.webp" alt="" width={36} height={40} />
          </a>
          <nav className="mp-header__nav" aria-label={t.nav.mainNav}>{list}</nav>
          <div className="mp-header__actions">
            <div className="mp-header__lang"><LanguageSwitch lang={lang} page={page} label={t.nav.language} /></div>
            <a className="mp-btn mp-btn--whatsapp mp-btn--sm mp-header__cta" href={wa} target="_blank" rel="noopener">
              <Icon name="whatsapp-chat" />{t.cta.whatsapp}
            </a>
            <button
              ref={toggleRef}
              className="mp-header__toggle"
              type="button"
              aria-expanded={open}
              aria-controls="mp-menu"
              aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
              onClick={() => setOpen((o) => !o)}
            >
              <Icon name="menu" /><Icon name="close" />
            </button>
          </div>
        </div>
        <div className="mp-header__panel" id="mp-menu">
          <nav aria-label={t.nav.mainNav}>{list}</nav>
          <a className="mp-btn mp-btn--whatsapp" href={wa} target="_blank" rel="noopener"><Icon name="whatsapp-chat" />{t.cta.whatsapp}</a>
          <LanguageSwitch lang={lang} page={page} label={t.nav.language} />
        </div>
      </div>
    </header>
  );
}
