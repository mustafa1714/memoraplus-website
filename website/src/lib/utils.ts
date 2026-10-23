import { CONTACT, type Locale } from "@/content/site";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** "$250,000" / "₺18,019,000" — the currency the company's source states (never converted), western digits in every language. */
export function formatMoney(m: { amount: number; currency: "USD" | "TRY" }, lang: Locale): string {
  const n = m.amount.toLocaleString(lang === "tr" ? "tr-TR" : "en-US", { maximumFractionDigits: 0 });
  return (m.currency === "USD" ? "$" : "₺") + n;
}

export const href = {
  home: (l: Locale) => `/${l}/`,
  projects: (l: Locale) => `/${l}/projects/`,
  project: (l: Locale, slug: string) => `/${l}/projects/${slug}/`,
  section: (l: Locale, id: string) => `/${l}/#${id}`,
};

/** Production origin, or null when NEXT_PUBLIC_SITE_URL is unset — absolute-URL metadata is then omitted rather than pointing at a placeholder. */
export const SITE_URL: string | null = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") || null;
