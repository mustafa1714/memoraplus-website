"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DICT, LOCALE_META, type Locale } from "@/content/site";
import type { MediaImage } from "@/content/projects/media";
import { srcSet, variant } from "@/content/projects/media-utils";
import { Icon } from "./Icon";

/**
 * Grid of the project's own images; each opens a full-screen <dialog> viewer.
 * Keyboard: Esc closes (native), ←/→ move in reading direction; focus returns to the opening thumbnail.
 */
export function ProjectGallery({ images, name, lang, variantName = "gallery" }: { images: MediaImage[]; name: string; lang: Locale; variantName?: "gallery" | "plans" }) {
  const t = DICT[lang].projects.detail;
  const rtl = LOCALE_META[lang].dir === "rtl";
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const [index, setIndex] = useState(0);
  const n = images.length;

  const open = (i: number, el: HTMLButtonElement) => {
    openerRef.current = el;
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const step = useCallback((d: number) => setIndex((i) => (i + d + n) % n), [n]);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onClose = () => openerRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
    };
    dlg.addEventListener("close", onClose);
    dlg.addEventListener("keydown", onKey);
    return () => { dlg.removeEventListener("close", onClose); dlg.removeEventListener("keydown", onKey); };
  }, [rtl, step]);

  const current = images[index];
  return (
    <>
      <ul className={`mp-gallery mp-gallery--${variantName}${n === 1 ? " mp-gallery--single" : ""}`}>
        {images.map((img, i) => (
          <li key={img.src} className="mp-gallery__item">
            <button type="button" className="mp-gallery__btn" aria-label={t.open(i + 1, n)} onClick={(e) => open(i, e.currentTarget)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={variant(img, 640)} srcSet={srcSet(img)} sizes={i === 0 && n > 2 ? "(min-width: 1024px) 760px, 100vw" : "(min-width: 1024px) 380px, 50vw"} alt={t.photo(name, i + 1, n)} loading="lazy" decoding="async" width={img.w} height={img.h} />
            </button>
          </li>
        ))}
      </ul>
      <dialog ref={dialogRef} className="mp-lightbox" aria-label={t.photo(name, index + 1, n)} onClick={(e) => { if (e.target === dialogRef.current) dialogRef.current?.close(); }}>
        <div className="mp-lightbox__bar">
          <span className="mp-lightbox__count mp-ltr">{t.counter(index + 1, n)}</span>
          <form method="dialog"><button className="mp-lightbox__btn" type="submit" aria-label={t.close}><Icon name="close" /></button></form>
        </div>
        {current && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="mp-lightbox__img" src={variant(current, 1920)} alt={t.photo(name, index + 1, n)} width={current.w} height={current.h} />
        )}
        {n > 1 && (
          <div className="mp-lightbox__nav">
            <button className="mp-lightbox__btn" type="button" aria-label={t.prev} onClick={() => step(-1)}><Icon name="arrow" className="mp-lightbox__prev" dir /></button>
            <button className="mp-lightbox__btn" type="button" aria-label={t.next} onClick={() => step(1)}><Icon name="arrow" dir /></button>
          </div>
        )}
      </dialog>
    </>
  );
}
