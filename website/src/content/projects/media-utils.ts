// Image helpers kept apart from the project data so client components can import them without bundling every project.
import type { MediaImage } from "./media";
import type { Project } from "./types";

/** `srcset` string for a media image. */
export function srcSet(img: MediaImage): string {
  return img.widths.map((w) => `${img.src}-${w}.webp ${w}w`).join(", ");
}

/** Smallest variant at least `min` px wide (or the largest available). */
export function variant(img: MediaImage, min: number): string {
  const w = img.widths.find((x) => x >= min) ?? img.widths[img.widths.length - 1];
  return `${img.src}-${w}.webp`;
}

/** The fields a project card needs (keeps the client payload small). */
export type CardProject = Pick<Project, "slug" | "name" | "district" | "side" | "type" | "status" | "priceFrom" | "cardFacts"> & { cover: MediaImage | null };
