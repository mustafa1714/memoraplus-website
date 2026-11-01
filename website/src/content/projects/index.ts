/**
 * The company's real projects, from the Google Drive "Landing Page" folder supplied by Memora Plus.
 * Arabic copy follows each project's Google Doc as written (figures are not altered); EN/TR are draft translations.
 * Images: PROJECT_MEDIA (generated from the Drive originals by process_images.py).
 * "قناة إسطنبول ومدينة يني شهير" is shown as a general project / investment opportunity (type "investment"), not a development for sale.
 */
import { basakEvlerIntaya } from "./basak-evler-intaya";
import { basaksehirAvrasya } from "./basaksehir-avrasya";
import { bizimEvler10, bizimEvler11, bizimEvler12 } from "./bizim-evler";
import { buyukyali, topkapi29, yediMavi } from "./zeytinburnu";
import { denizIstanbul, referansBeylikduzu } from "./beylikduzu";
import { maveraBoutique, referansPendik, bahcekentTim } from "./more";
import { kanalIstanbul } from "./kanal-istanbul";
import { PROJECT_MEDIA, type MediaImage } from "./media";
import type { Project } from "./types";
import type { CardProject } from "./media-utils";

export type { Project, ProjectStatus, ProjectType, Side, Money, L, Row, Group } from "./types";
export type { MediaImage } from "./media";

/** Display order: the general investment opportunity first, then ready projects, mixed, under construction, and status not stated. */
export const PROJECTS: Project[] = [
  kanalIstanbul,
  yediMavi,
  buyukyali,
  referansBeylikduzu,
  bizimEvler11,
  maveraBoutique,
  denizIstanbul,
  topkapi29,
  bizimEvler12,
  bahcekentTim,
  basakEvlerIntaya,
  basaksehirAvrasya,
  bizimEvler10,
  referansPendik,
];

/** Cover image index per project (chosen from the supplied gallery); projects not listed use their first image. */
const COVER: Record<string, number> = {
  "bizim-evler-10": 1,
  "mavera-boutique": 1,
  "yedi-mavi": 3,
  "bahcekent-tim": 3,
  "kanal-istanbul-yenisehir": 2,
};

/** Images supplied in a project's folder (Drive update of 30 Oct 2026 included). */
export function projectMedia(slug: string): { gallery: MediaImage[]; plans: MediaImage[] } {
  return PROJECT_MEDIA[slug] ?? { gallery: [], plans: [] };
}

export function projectCover(p: Project): MediaImage | null {
  const g = projectMedia(p.slug).gallery;
  return g.length ? g[Math.min(COVER[p.slug] ?? 0, g.length - 1)] : null;
}

export { srcSet, variant, type CardProject } from "./media-utils";

export function toCard(p: Project): CardProject {
  const { slug, name, district, side, type, status, priceFrom, cardFacts } = p;
  return { slug, name, district, side, type, status, priceFrom, cardFacts, cover: projectCover(p) };
}

export const projectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);
export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

/** Other projects in the same area of Istanbul. */
export function relatedProjects(p: Project, max = 3): Project[] {
  return PROJECTS.filter((x) => x.slug !== p.slug && x.area === p.area).slice(0, max);
}
