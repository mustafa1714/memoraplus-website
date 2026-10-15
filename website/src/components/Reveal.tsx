"use client";

import { useEffect } from "react";

/** Adds .is-visible to [data-mp-reveal] elements once, when they scroll into view. */
export function Reveal() {
  useEffect(() => {
    document.documentElement.classList.remove("mp-no-js");
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-mp-reveal]:not(.is-visible)"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) { items.forEach((i) => i.classList.add("is-visible")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);
  return null;
}
