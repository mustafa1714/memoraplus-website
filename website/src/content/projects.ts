import type { Locale } from "./site";

/**
 * DRAFT PROJECT DATA — realistic sample data for layout and review only.
 * Districts are real Istanbul districts and prices sit in plausible market ranges,
 * but every project name, price and payment plan here is FICTIONAL.
 * Replace this file with the client's real project data before launch
 * (and set `draft: false` per project once it is real).
 */

export type ProjectType = "residential" | "commercial" | "investment";
export type ProjectStatus = "ready" | "construction";
export type Side = "europe" | "asia";

export type Project = {
  id: string;
  name: Record<Locale, string>;
  district: Record<Locale, string>;
  side: Side;
  type: ProjectType;
  status: ProjectStatus;
  /** USD */
  priceFrom: number;
  downPaymentPct: number;
  installmentMonths: number;
  /** Year, or null when ready for immediate delivery */
  delivery: number | null;
  units: Record<Locale, string>;
  /** Path under /public ending in -800.webp (a -480.webp sibling is used for small screens). null → design-system placeholder. */
  image: string | null;
  imageAlt?: Record<Locale, string>;
  featured: boolean;
  draft: boolean;
};

const r = (ar: string, en: string, tr: string): Record<Locale, string> => ({ ar, en, tr });

export const PROJECTS: Project[] = [
  {
    id: "basaksehir-garden",
    name: r("باشاك شهير غاردن", "Başakşehir Garden", "Başakşehir Garden"),
    district: r("باشاك شهير", "Başakşehir", "Başakşehir"),
    side: "europe", type: "residential", status: "construction",
    priceFrom: 215000, downPaymentPct: 35, installmentMonths: 24, delivery: 2027,
    units: r("من 1+1 إلى 4+1", "1+1 – 4+1", "1+1 – 4+1"),
    image: "/media/projects/basaksehir-garden-800.webp", imageAlt: r("صورة توضيحية: مبنى سكني أبيض بشرفات", "Illustrative photo: white residential building with balconies", "Temsilî görsel: balkonlu beyaz konut binası"),
    featured: true, draft: true,
  },
  {
    id: "uskudar-bosphorus-view",
    name: r("أسكودار بوسفور فيو", "Üsküdar Bosphorus View", "Üsküdar Boğaz Manzara"),
    district: r("أسكودار", "Üsküdar", "Üsküdar"),
    side: "asia", type: "residential", status: "ready",
    priceFrom: 520000, downPaymentPct: 50, installmentMonths: 12, delivery: null,
    units: r("من 2+1 إلى 4+1", "2+1 – 4+1", "2+1 – 4+1"),
    image: "/media/projects/uskudar-bosphorus-view-800.webp", imageAlt: r("صورة توضيحية: واجهة مبنى سكني حديث", "Illustrative photo: modern residential facade", "Temsilî görsel: modern konut cephesi"),
    featured: true, draft: true,
  },
  {
    id: "esenyurt-park-suites",
    name: r("إسنيورت بارك سويتس", "Esenyurt Park Suites", "Esenyurt Park Suites"),
    district: r("إسنيورت", "Esenyurt", "Esenyurt"),
    side: "europe", type: "investment", status: "ready",
    priceFrom: 98000, downPaymentPct: 40, installmentMonths: 18, delivery: null,
    units: r("من ستوديو إلى 2+1", "Studio – 2+1", "Stüdyo – 2+1"),
    image: "/media/projects/esenyurt-park-suites-800.webp", imageAlt: r("صورة توضيحية: برج سكني بشرفات زجاجية", "Illustrative photo: residential tower with glass balconies", "Temsilî görsel: cam balkonlu konut kulesi"),
    featured: true, draft: true,
  },
  {
    id: "kagithane-central",
    name: r("كاغيت هانه سنترال ريزيدنس", "Kağıthane Central Residence", "Kağıthane Central Rezidans"),
    district: r("كاغيت هانه", "Kağıthane", "Kağıthane"),
    side: "europe", type: "residential", status: "ready",
    priceFrom: 365000, downPaymentPct: 50, installmentMonths: 12, delivery: null,
    units: r("من 1+1 إلى 3+1", "1+1 – 3+1", "1+1 – 3+1"),
    image: "/media/projects/kagithane-central-800.webp", imageAlt: r("صورة توضيحية: مبنى سكني حديث تحت سماء صافية", "Illustrative photo: modern apartment building under a clear sky", "Temsilî görsel: açık gökyüzü altında modern apartman"),
    featured: false, draft: true,
  },
  {
    id: "atasehir-business-hub",
    name: r("أتاشهير بزنس هب", "Ataşehir Business Hub", "Ataşehir İş Merkezi"),
    district: r("أتاشهير", "Ataşehir", "Ataşehir"),
    side: "asia", type: "commercial", status: "construction",
    priceFrom: 285000, downPaymentPct: 40, installmentMonths: 24, delivery: 2027,
    units: r("مكاتب ومحلات", "Offices & shops", "Ofis ve dükkânlar"),
    image: "/media/projects/atasehir-business-hub-800.webp", imageAlt: r("صورة توضيحية: برج مكاتب حديث", "Illustrative photo: modern office tower", "Temsilî görsel: modern ofis kulesi"),
    featured: false, draft: true,
  },
  {
    id: "beylikduzu-marina-life",
    name: r("بيليك دوزو مارينا لايف", "Beylikdüzü Marina Life", "Beylikdüzü Marina Life"),
    district: r("بيليك دوزو", "Beylikdüzü", "Beylikdüzü"),
    side: "europe", type: "residential", status: "construction",
    priceFrom: 145000, downPaymentPct: 30, installmentMonths: 36, delivery: 2027,
    units: r("من 1+1 إلى 3+1", "1+1 – 3+1", "1+1 – 3+1"),
    image: "/media/projects/beylikduzu-marina-life-800.webp", imageAlt: r("صورة توضيحية: مجمع سكني بواجهة منحنية", "Illustrative photo: residential complex with a curved facade", "Temsilî görsel: kavisli cepheli konut kompleksi"),
    featured: false, draft: true,
  },
  {
    id: "kartal-seaside",
    name: r("كارتال سي سايد ريزيدنس", "Kartal Seaside Residence", "Kartal Sahil Rezidans"),
    district: r("كارتال", "Kartal", "Kartal"),
    side: "asia", type: "residential", status: "construction",
    priceFrom: 240000, downPaymentPct: 35, installmentMonths: 30, delivery: 2028,
    units: r("من 1+1 إلى 3+1", "1+1 – 3+1", "1+1 – 3+1"),
    image: "/media/projects/kartal-seaside-800.webp", imageAlt: r("صورة توضيحية: مسكن عصري بمسبح", "Illustrative photo: contemporary residence with a pool", "Temsilî görsel: havuzlu çağdaş konut"),
    featured: false, draft: true,
  },
  {
    id: "sariyer-forest-villas",
    name: r("صارير فورست فيلاز", "Sarıyer Forest Villas", "Sarıyer Orman Villaları"),
    district: r("صارير", "Sarıyer", "Sarıyer"),
    side: "europe", type: "residential", status: "construction",
    priceFrom: 890000, downPaymentPct: 50, installmentMonths: 24, delivery: 2028,
    units: r("فلل من 4+1 إلى 5+1", "Villas 4+1 – 5+1", "Villa 4+1 – 5+1"),
    image: "/media/projects/sariyer-forest-villas-800.webp", imageAlt: r("صورة توضيحية: فيلا حديثة بمسبح وحديقة", "Illustrative photo: modern villa with pool and garden", "Temsilî görsel: havuzlu ve bahçeli modern villa"),
    featured: false, draft: true,
  },
  {
    id: "pendik-smart-invest",
    name: r("بنديك سمارت إنفست", "Pendik Smart Invest", "Pendik Smart Invest"),
    district: r("بنديك", "Pendik", "Pendik"),
    side: "asia", type: "investment", status: "ready",
    priceFrom: 135000, downPaymentPct: 45, installmentMonths: 18, delivery: null,
    units: r("من 1+1 إلى 2+1", "1+1 – 2+1", "1+1 – 2+1"),
    image: "/media/projects/pendik-smart-invest-800.webp", imageAlt: r("صورة توضيحية: مبنى سكني أبيض حديث", "Illustrative photo: modern white apartment building", "Temsilî görsel: modern beyaz apartman"),
    featured: false, draft: true,
  },
  {
    id: "mecidiyekoy-office-park",
    name: r("مجيدية كوي أوفيس بارك", "Mecidiyeköy Office Park", "Mecidiyeköy Ofis Park"),
    district: r("شيشلي", "Şişli", "Şişli"),
    side: "europe", type: "commercial", status: "ready",
    priceFrom: 410000, downPaymentPct: 50, installmentMonths: 12, delivery: null,
    units: r("مكاتب", "Offices", "Ofisler"),
    image: "/media/projects/mecidiyekoy-office-park-800.webp", imageAlt: r("صورة توضيحية: مبانٍ مكتبية زجاجية", "Illustrative photo: glass office buildings", "Temsilî görsel: cam ofis binaları"),
    featured: false, draft: true,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
