import type { Metadata } from "next";
import { LOCALES, LOCALE_META, type Locale } from "@/content/site";
import { SITE_URL } from "./utils";

/** Open Graph expects language_TERRITORY. */
const OG_LOCALE: Record<Locale, string> = { ar: "ar_AR", en: "en_US", tr: "tr_TR" };

export function pageMetadata(lang: Locale, path: "" | "projects/", title: string, description: string): Metadata {
  const openGraph: Metadata["openGraph"] = {
    title,
    description,
    siteName: "Memora Plus",
    locale: OG_LOCALE[lang],
    alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
    type: "website",
  };
  // The share image is a square icon, so use the small card rather than summary_large_image.
  const twitter: Metadata["twitter"] = { card: "summary", title, description };
  if (!SITE_URL) return { title, description, openGraph, twitter };

  const languages: Record<string, string> = {};
  LOCALES.forEach((l) => { languages[LOCALE_META[l].htmlLang] = `${SITE_URL}/${l}/${path}`; });
  languages["x-default"] = `${SITE_URL}/ar/${path}`;
  const image = { url: "/icon-512.png", width: 512, height: 512 };
  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `${SITE_URL}/${lang}/${path}`, languages },
    openGraph: { ...openGraph, url: `${SITE_URL}/${lang}/${path}`, images: [image] },
    twitter: { ...twitter, images: [image.url] },
  };
}
