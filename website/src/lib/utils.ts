import { CONTACT, type Locale } from "@/content/site";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** "$250,000" — USD, western digits in every language (design-system decision). */
export function formatPrice(value: number, lang: Locale): string {
  return "$" + value.toLocaleString(lang === "tr" ? "tr-TR" : "en-US", { maximumFractionDigits: 0 });
}

export const href = {
  home: (l: Locale) => `/${l}/`,
  projects: (l: Locale) => `/${l}/projects/`,
  section: (l: Locale, id: string) => `/${l}/#${id}`,
};

/** Production origin, or null when NEXT_PUBLIC_SITE_URL is unset — absolute-URL metadata is then omitted rather than pointing at a placeholder. */
export const SITE_URL: string | null = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") || null;
