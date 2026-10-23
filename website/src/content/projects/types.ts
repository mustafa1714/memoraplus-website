import type { Locale } from "../site";

/** Text in the three site languages. Arabic is the company's source copy (Google Drive "Landing Page" folder); EN/TR are draft translations pending review. */
export type L = Record<Locale, string>;

export type Side = "europe" | "asia";
/** "investment" = a general project / area investment opportunity (e.g. Kanal İstanbul & Yenişehir): no units, prices or payment plans. */
export type ProjectType = "residential" | "commercial" | "investment";
/** "mixed" = ready phases + phases under construction. null = status not stated in the source material. */
export type ProjectStatus = "ready" | "construction" | "mixed";
export type Money = { amount: number; currency: "USD" | "TRY" };

export type Row = { label: L; value: L };
export type Group = { title?: L; items: L[] };
/** A table of unit types; each row may omit columns the source doesn't give. */
export type UnitTable = { rows: { type: L; area?: L; price?: L; count?: L }[]; note?: L };
export type Section = { title: L; paragraphs?: L[]; items?: L[]; rows?: Row[] };

export type Project = {
  slug: string;
  /** Official project name — written the same way in every language unless the source gives a translation. */
  name: L;
  district: L;
  side: Side;
  type: ProjectType;
  status: ProjectStatus | null;
  /** Neighbourhood group for "related projects" (same area of Istanbul). */
  area: string;
  /** Google Drive doc the copy comes from. */
  sourceDoc: string;
  /** Short line under the name (hero + metadata description). */
  tagline: L;
  intro: L[];
  /** Short claims shown as chips in the hero, verbatim from the source. */
  chips?: L[];
  /** Starting price shown on the card, only when the source states one. */
  priceFrom?: Money;
  /** Up to three short facts for the card. */
  cardFacts: Row[];
  facts: Row[];
  highlights?: Group;
  units?: UnitTable;
  sections?: Section[];
  payment?: Group;
  amenities?: Group[];
  location?: Group;
  ownership?: L[];
  /** Google Maps search text when name + district would be unclear. */
  mapQuery?: string;
  /** Index of the cover image in the gallery (default 0). */
  cover?: number;
  featured?: boolean;
};

export const t = (ar: string, en: string, tr: string): L => ({ ar, en, tr });
