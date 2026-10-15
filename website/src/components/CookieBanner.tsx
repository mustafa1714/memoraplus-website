"use client";

import { useEffect, useState } from "react";

const KEY = "mp-consent-v1";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

function loadTracking() {
  if (typeof window === "undefined" || (window as unknown as { __mpTracking?: boolean }).__mpTracking) return;
  (window as unknown as { __mpTracking?: boolean }).__mpTracking = true;
  if (GA_ID) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
    document.head.appendChild(s);
    const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
    w.dataLayer = w.dataLayer || [];
    w.gtag = function gtag() { w.dataLayer.push(arguments); };
    w.gtag("js", new Date());
    w.gtag("config", GA_ID, { anonymize_ip: true });
  }
  if (PIXEL_ID) {
    // Standard Meta Pixel bootstrap, typed loosely.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (!w.fbq) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const n: any = function (...args: unknown[]) { if (n.callMethod) n.callMethod(...args); else n.queue.push(args); };
      n.queue = []; n.loaded = true; n.version = "2.0"; n.push = n;
      w.fbq = n; w._fbq = n;
      const s = document.createElement("script");
      s.async = true; s.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(s);
    }
    w.fbq("init", PIXEL_ID);
    w.fbq("track", "PageView");
  }
}

export function CookieBanner({ t, policyHref }: { t: { title: string; text: string; accept: string; reject: string; policy: string }; policyHref?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(KEY); } catch { /* storage blocked */ }
    if (saved === "accepted") loadTracking();
    else if (saved !== "rejected") setVisible(true);
  }, []);

  const choose = (accepted: boolean) => {
    try { localStorage.setItem(KEY, accepted ? "accepted" : "rejected"); } catch { /* ignore */ }
    document.dispatchEvent(new CustomEvent("mp:consent", { detail: { analytics: accepted } }));
    if (accepted) loadTracking();
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <section className="mp-cookie mp-dark" role="region" aria-labelledby="mp-cookie-title">
      <h2 className="mp-cookie__title" id="mp-cookie-title">{t.title}</h2>
      <p className="mp-cookie__text">
        {t.text}{policyHref ? <> <a href={policyHref}>{t.policy}</a></> : null}
      </p>
      <div className="mp-cookie__actions">
        <button className="mp-btn mp-btn--accept" type="button" onClick={() => choose(true)}>{t.accept}</button>
        <button className="mp-btn mp-btn--outline" type="button" onClick={() => choose(false)}>{t.reject}</button>
      </div>
    </section>
  );
}
