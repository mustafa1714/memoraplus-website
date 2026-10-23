/**
 * Company content.
 *
 * SOURCE OF TRUTH: the client questionnaire + decisions approved on 13 Oct 2026
 * (see design-system/project/decisions.md).
 *  - Arabic (`ar`) strings marked APPROVED are verbatim client copy. Do not edit without client approval.
 *  - English (`en`) and Turkish (`tr`) are DRAFT translations pending client review.
 *  - Short UI labels (buttons, section kickers) are proposals for review by the content owner (Abdulmonem).
 *  - Never add statistics, testimonials, awards, partner logos or claims that are not listed here.
 */

export const LOCALES = ["ar", "en", "tr"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ar";

export const LOCALE_META: Record<Locale, { dir: "rtl" | "ltr"; label: string; short: string; htmlLang: string }> = {
  ar: { dir: "rtl", label: "العربية", short: "AR", htmlLang: "ar" },
  en: { dir: "ltr", label: "English", short: "EN", htmlLang: "en" },
  tr: { dir: "ltr", label: "Türkçe", short: "TR", htmlLang: "tr" },
};

export function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v);
}

/** Approved contact data (questionnaire). */
export const CONTACT = {
  phoneE164: "+905312450579",
  phoneDisplay: "+90 531 245 05 79",
  whatsapp: "905312450579",
  city: { ar: "إسطنبول، تركيا", en: "Istanbul, Türkiye", tr: "İstanbul, Türkiye" } as Record<Locale, string>,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Istanbul%2C%20T%C3%BCrkiye",
  social: [
    { name: "Instagram", url: "https://www.instagram.com/plusmemora/" },
    { name: "Facebook", url: "https://www.facebook.com/share/18KzYmASVj/?mibextid=wwXIfr" },
    { name: "YouTube", url: "https://www.youtube.com/@MemoraPlus" },
  ],
  youtubeChannel: "https://www.youtube.com/@MemoraPlus",
  /** Intro video ID — not supplied yet. Set it to switch the video section to the click-to-play player. */
  introVideoId: null as string | null,
};

export const BRAND_NAME = { ar: "ميمورا بلس", en: "Memora Plus", tr: "Memora Plus" } as Record<Locale, string>;

type Dict = {
  meta: { title: string; description: string; projectsTitle: string; projectsDescription: string };
  nav: { home: string; about: string; services: string; projects: string; contact: string; skip: string; menuOpen: string; menuClose: string; mainNav: string; language: string };
  cta: { whatsapp: string; whatsappShort: string; call: string; explore: string; allProjects: string; enquire: string; callAbout: (n: string) => string };
  whatsappMessage: string;
  whatsappProjectMessage: (name: string) => string;
  hero: { eyebrow: string; title: string; lead: string };
  about: { eyebrow: string; title: string; body: string; promiseLabel: string; promise: string };
  services: { eyebrow: string; title: string; lead: string; main: { title: string; body: string }; items: { key: string; title: string; body: string }[]; highlightLabel: string };
  why: { eyebrow: string; title: string; points: string[] };
  featured: { eyebrow: string; title: string; lead: string };
  video: { eyebrow: string; title: string; lead: string; play: string; channel: string };
  contact: { eyebrow: string; title: string; lead: string; whatsapp: string; phone: string; location: string; openMap: string; follow: string };
  footer: { quickLinks: string; contact: string; rights: string; social: string };
  /** Homepage strip from the company's marketing doc ("Memora Plus | رؤيتك للاستثمار العقاري في تركيا", Drive › Landing Page). */
  marketing: { intro: string; points: string[] };
  projects: {
    eyebrow: string; title: string; lead: string;
    filters: { location: string; type: string; status: string; all: string; europe: string; asia: string; residential: string; commercial: string; investment: string; ready: string; construction: string; mixed: string };
    count: (n: number) => string; empty: string;
    card: { from: string; view: (name: string) => string; image: string };
    typeLabel: Record<"residential" | "commercial" | "investment", string>;
    statusLabel: Record<"ready" | "construction" | "mixed", string>;
    sideLabel: Record<"europe" | "asia", string>;
    /** Project detail page labels. */
    detail: {
      metaTitle: (name: string) => string; back: string; overview: string; facts: string; units: string;
      unitType: string; area: string; price: string; count: string; payment: string; amenities: string;
      location: string; openMap: string; ownership: string; gallery: string; plans: string; sitePlan: string;
      photo: (name: string, i: number, n: number) => string; open: (i: number, n: number) => string; close: string; prev: string; next: string;
      counter: (i: number, n: number) => string; noPhotos: string; contactTitle: string; contactLead: string; related: string; status: string; figures: string;
    };
  };
  cookie: { title: string; text: string; accept: string; reject: string; policy: string };
  /** 404 page — DRAFT UI copy (all languages) for review by the content owner. */
  notFound: { title: string; lead: string; home: string; homeIn: string };
  demo: { videoPlay: string };
};

export const DICT: Record<Locale, Dict> = {
  /* ------------------------------------------------------------------ AR */
  ar: {
    meta: {
      title: "ميمورا بلس | رؤيتك للاستثمار العقاري في تركيا", // from the company's marketing doc
      // APPROVED tagline
      description: "الخيار الأول للراغبين في التملك والاستثمار العقاري في تركيا. فرص سكنية وتجارية واستثمارية في إسطنبول.",
      projectsTitle: "المشاريع العقارية | ميمورا بلس",
      projectsDescription: "استكشف المشاريع السكنية والتجارية والاستثمارية التي تسوّق لها ميمورا بلس في إسطنبول.",
    },
    nav: { home: "الرئيسية", about: "من نحن", services: "خدماتنا", projects: "المشاريع", contact: "تواصل معنا", skip: "تخطَّ إلى المحتوى", menuOpen: "فتح القائمة", menuClose: "إغلاق القائمة", mainNav: "القائمة الرئيسية", language: "اللغة" },
    cta: { whatsapp: "تواصل عبر واتساب", whatsappShort: "واتساب", call: "اتصل بنا", explore: "استكشف المشاريع", allProjects: "عرض جميع المشاريع", enquire: "استفسر عبر واتساب", callAbout: (n) => `اتصل بنا بخصوص ${n}` },
    whatsappMessage: "مرحباً ميمورا بلس، أرغب بمعرفة المزيد عن مشاريعكم.",
    whatsappProjectMessage: (n) => `مرحباً ميمورا بلس، أرغب بمعرفة تفاصيل مشروع: ${n}`,
    hero: {
      eyebrow: "نرافقك في رحلة تملّك العقارات في تركيا", // company marketing doc
      title: "الخيار الأول للراغبين في التملك والاستثمار العقاري في تركيا", // APPROVED tagline
      // APPROVED "first 10 seconds" message
      lead: "نسعى إلى تمكين عملائنا من اتخاذ قرارات عقارية واستثمارية ناجحة، عبر تقديم استشارات متخصصة، وفرص عقارية موثوقة، وخدمة متكاملة ترافقهم في جميع مراحل الشراء، لتحقيق تجربة آمنة وقيمة استثمارية مستدامة",
    },
    about: {
      eyebrow: "من نحن",
      title: "شريكك في اكتشاف الفرص العقارية في تركيا", // company marketing doc
      // APPROVED company bio
      body: "Memora Plus هي شركة رائدة في مجال التسويق والاستشارات العقارية في تركيا، متخصصة في تقديم أفضل الفرص السكنية والتجارية والاستثمارية، مع خبرة واسعة في سوق إسطنبول العقاري. نساعد عملاءنا على اختيار العقار المناسب وفق احتياجاتهم وأهدافهم، من خلال استشارات احترافية وشراكات مع كبرى شركات التطوير العقاري في تركيا، لنضمن لهم تجربة شراء آمنة وفرصًا استثمارية واعدة تحقق أفضل قيمة وعائد.",
      promiseLabel: "وعدنا",
      promise: "سرعة التنفيذ وإجراءات مضمونة وأسعار معقولة", // APPROVED
    },
    services: {
      eyebrow: "خدماتنا",
      title: "التسويق العقاري",
      lead: "نساعد عملاءنا على اختيار العقار المناسب وفق احتياجاتهم وأهدافهم.", // from APPROVED bio
      // company marketing doc
      main: { title: "التسويق العقاري", body: "مرافقة احترافية من اختيار العقار حتى استكمال إجراءات الشراء، مع توجيهك للتعرّف على المسارات المتاحة للجنسية التركية والإقامة العقارية." },
      items: [
        { key: "investment", title: "فرص استثمارية", body: "فرص عقارية موثوقة في إسطنبول تحقق أفضل قيمة وعائد." },
        { key: "residential", title: "عقارات سكنية", body: "وحدات سكنية تناسب احتياجات العائلات والأفراد." },
        { key: "commercial", title: "عقارات تجارية", body: "مكاتب ومحلات تجارية في مواقع حيوية." },
      ],
      highlightLabel: "مجال تركيزنا",
    },
    why: {
      eyebrow: "لماذا ميمورا بلس",
      title: "ما يميّزنا",
      // APPROVED differentiators
      points: [
        "سهولة التواصل على مدار الساعة",
        "خبرة في القوانين وإجراءات الاستثمار",
        "سرعة في تخليص الإجراءات ودقة في المواعيد",
        "أسعار للوحدات السكنية والفرص الاستثمارية أقل من السوق",
        "جودة المشاريع التي نسوّق لها",
      ],
    },
    featured: { eyebrow: "المشاريع", title: "مشاريع مختارة", lead: "نماذج من المشاريع التي نسوّق لها في إسطنبول." },
    video: { eyebrow: "شاهدوا", title: "تعرّفوا على ميمورا بلس", lead: "تابعوا أحدث المشاريع والجولات على قناتنا.", play: "شاهد الفيديو التعريفي", channel: "شاهدوا قناتنا على YouTube" },
    // title/lead: company marketing doc
    contact: { eyebrow: "تواصل معنا", title: "تواصل معنا واكتشف خياراتك", lead: "تواصل معنا، واجعل خطوتك القادمة أكثر وعيًا وثقة.", whatsapp: "واتساب", phone: "الهاتف", location: "الموقع", openMap: "افتح على خرائط Google", follow: "تابعونا" },
    footer: { quickLinks: "روابط سريعة", contact: "تواصل معنا", rights: "جميع الحقوق محفوظة.", social: "حساباتنا" },
    marketing: {
      intro: "سواء كنت تبحث عن منزل راقٍ لعائلتك أو فرصة استثمارية مدروسة.",
      points: ["مواقع مميزة في تركيا", "خيارات متنوعة تناسب احتياجاتك وميزانيتك", "مرافقة احترافية خلال رحلة اختيار العقار", "التعرّف على خيارات الجنسية التركية والإقامة العقارية"],
    },
    projects: {
      eyebrow: "المشاريع",
      title: "مشاريعنا العقارية",
      lead: "استكشفوا المشاريع السكنية والتجارية في إسطنبول، وتواصلوا معنا عبر واتساب لمعرفة التفاصيل.",
      filters: { location: "الموقع", type: "النوع", status: "الحالة", all: "الكل", europe: "الجانب الأوروبي", asia: "الجانب الآسيوي", residential: "سكني", commercial: "تجاري", investment: "فرص استثمارية", ready: "جاهز للتسليم", construction: "قيد الإنشاء", mixed: "جاهز وقيد الإنشاء" },
      count: (n) => `عدد المشاريع المعروضة: ${n}`,
      empty: "لا توجد مشاريع مطابقة. جرّبوا اختياراً آخر أو تواصلوا معنا عبر واتساب.",
      card: { from: "يبدأ من", view: (n) => `تفاصيل مشروع ${n}`, image: "صورة المشروع" },
      typeLabel: { residential: "مشروع سكني", commercial: "مشروع تجاري", investment: "مشروع عام · فرصة استثمارية" },
      statusLabel: { ready: "جاهز للتسليم", construction: "قيد الإنشاء", mixed: "مراحل جاهزة وأخرى قيد الإنشاء" },
      sideLabel: { europe: "الجانب الأوروبي", asia: "الجانب الآسيوي" },
      detail: {
        metaTitle: (n) => `${n} | مشاريع ميمورا بلس`, back: "جميع المشاريع", overview: "نبذة عن المشروع", facts: "معلومات المشروع", units: "الوحدات والمساحات والأسعار",
        unitType: "النوع", area: "المساحة", price: "السعر", count: "عدد الوحدات", payment: "خيارات الدفع", amenities: "المرافق والخدمات",
        location: "الموقع والمواصلات", openMap: "افتح الموقع على خرائط Google", ownership: "التملّك والجنسية والإقامة", gallery: "صور المشروع", plans: "المخططات", sitePlan: "المخطط العام للمشروع",
        photo: (n, i, c) => `${n} — صورة ${i} من ${c}`, open: (i, c) => `تكبير الصورة ${i} من ${c}`, close: "إغلاق", prev: "الصورة السابقة", next: "الصورة التالية",
        counter: (i, c) => `${i} / ${c}`, noPhotos: "صور المشروع متاحة عند التواصل معنا", contactTitle: "اطلب تفاصيل المشروع", contactLead: "تواصل مع Memora Plus للحصول على الأسعار الحالية والوحدات المتاحة وخيارات الدفع.", related: "مشاريع أخرى في المنطقة", status: "الحالة", figures: "أرقام وحقائق",
      },
    },
    cookie: { title: "ملفات الارتباط", text: "نستخدم ملفات الارتباط لتحليل الزيارات وتحسين تجربتكم. لن نفعّلها إلا بموافقتكم.", accept: "قبول", reject: "رفض", policy: "سياسة الخصوصية" },
    notFound: { title: "الصفحة غير موجودة", lead: "ربما تغيّر الرابط أو لم تعد الصفحة متاحة. عودوا إلى الرئيسية أو تواصلوا معنا عبر واتساب.", home: "العودة إلى الرئيسية", homeIn: "الصفحة الرئيسية بالعربية" },
    demo: { videoPlay: "شاهد الفيديو" },
  },

  /* ------------------------------------------------------------------ EN (DRAFT translation) */
  en: {
    meta: {
      title: "Memora Plus | Your vision for real estate investment in Türkiye",
      description: "The first choice for owning and investing in real estate in Türkiye. Residential, commercial and investment opportunities in Istanbul.",
      projectsTitle: "Real Estate Projects | Memora Plus",
      projectsDescription: "Explore the residential, commercial and investment projects marketed by Memora Plus in Istanbul.",
    },
    nav: { home: "Home", about: "About", services: "Services", projects: "Projects", contact: "Contact", skip: "Skip to content", menuOpen: "Open menu", menuClose: "Close menu", mainNav: "Main navigation", language: "Language" },
    cta: { whatsapp: "Chat on WhatsApp", whatsappShort: "WhatsApp", call: "Call us", explore: "Explore projects", allProjects: "View all projects", enquire: "Ask on WhatsApp", callAbout: (n) => `Call us about ${n}` },
    whatsappMessage: "Hello Memora Plus, I would like to know more about your projects.",
    whatsappProjectMessage: (n) => `Hello Memora Plus, I would like details about the project: ${n}`,
    hero: {
      eyebrow: "We guide you through owning property in Türkiye",
      title: "The first choice for owning and investing in real estate in Türkiye",
      lead: "We empower our clients to make successful property and investment decisions through specialist advice, trusted real estate opportunities and a complete service that supports them at every stage of the purchase — for a safe experience and lasting investment value.",
    },
    about: {
      eyebrow: "About us",
      title: "Your partner in discovering real estate opportunities in Türkiye",
      body: "Memora Plus is a leading real estate marketing and consultancy company in Türkiye, specialising in the best residential, commercial and investment opportunities, with extensive experience in Istanbul's property market. We help our clients choose the right property for their needs and goals through professional advice and partnerships with Türkiye's major developers, ensuring a safe buying experience and promising investment opportunities that deliver the best value and return.",
      promiseLabel: "Our promise",
      promise: "Fast execution, guaranteed procedures and fair prices",
    },
    services: {
      eyebrow: "Services",
      title: "Real estate marketing",
      lead: "We help our clients choose the right property for their needs and goals.",
      main: { title: "Real estate marketing", body: "Professional support from choosing a property to completing the purchase, with guidance on the available routes to Turkish citizenship and property-based residence." },
      items: [
        { key: "investment", title: "Investment opportunities", body: "Trusted property opportunities in Istanbul for the best value and return." },
        { key: "residential", title: "Residential property", body: "Homes that suit the needs of families and individuals." },
        { key: "commercial", title: "Commercial property", body: "Offices and retail units in prime locations." },
      ],
      highlightLabel: "Our focus",
    },
    why: {
      eyebrow: "Why Memora Plus",
      title: "What sets us apart",
      points: [
        "Easy to reach, around the clock",
        "Expertise in investment law and procedures",
        "Fast paperwork and punctual appointments",
        "Below-market prices on homes and investment opportunities",
        "Quality projects we stand behind",
      ],
    },
    featured: { eyebrow: "Projects", title: "Selected projects", lead: "A selection of the projects we market in Istanbul." },
    video: { eyebrow: "Watch", title: "Get to know Memora Plus", lead: "Follow our latest projects and tours on our channel.", play: "Watch the intro video", channel: "Watch our YouTube channel" },
    contact: { eyebrow: "Contact", title: "Contact us and discover your options", lead: "Contact us, and make your next step better informed and more confident.", whatsapp: "WhatsApp", phone: "Phone", location: "Location", openMap: "Open in Google Maps", follow: "Follow us" },
    footer: { quickLinks: "Quick links", contact: "Contact", rights: "All rights reserved.", social: "Our accounts" },
    marketing: {
      intro: "Whether you are looking for a fine home for your family or a well-considered investment.",
      points: ["Distinguished locations in Türkiye", "A range of options for your needs and budget", "Professional support while you choose a property", "Guidance on Turkish citizenship and property-based residence"],
    },
    projects: {
      eyebrow: "Projects",
      title: "Our real estate projects",
      lead: "Explore residential and commercial projects in Istanbul, and contact us on WhatsApp for details.",
      filters: { location: "Location", type: "Type", status: "Status", all: "All", europe: "European side", asia: "Asian side", residential: "Residential", commercial: "Commercial", investment: "Investment opportunities", ready: "Ready", construction: "Under construction", mixed: "Ready + under construction" },
      count: (n) => `Projects shown: ${n}`,
      empty: "No matching projects. Try another option or contact us on WhatsApp.",
      card: { from: "From", view: (n) => `${n} details`, image: "Project image" },
      typeLabel: { residential: "Residential project", commercial: "Commercial project", investment: "General project · investment opportunity" },
      statusLabel: { ready: "Ready to move in", construction: "Under construction", mixed: "Ready phases + under construction" },
      sideLabel: { europe: "European side", asia: "Asian side" },
      detail: {
        metaTitle: (n) => `${n} | Memora Plus projects`, back: "All projects", overview: "About the project", facts: "Project information", units: "Units, sizes and prices",
        unitType: "Type", area: "Size", price: "Price", count: "Units", payment: "Payment options", amenities: "Facilities and services",
        location: "Location and transport", openMap: "Open the location in Google Maps", ownership: "Ownership, citizenship and residence", gallery: "Project photos", plans: "Plans", sitePlan: "Project site plan",
        photo: (n, i, c) => `${n} — photo ${i} of ${c}`, open: (i, c) => `Enlarge photo ${i} of ${c}`, close: "Close", prev: "Previous photo", next: "Next photo",
        counter: (i, c) => `${i} / ${c}`, noPhotos: "Project photos are available on request", contactTitle: "Ask for project details", contactLead: "Contact Memora Plus for current prices, available units and payment options.", related: "Other projects in the area", status: "Status", figures: "Key figures",
      },
    },
    cookie: { title: "Cookies", text: "We use cookies to analyse traffic and improve your experience. We only enable them with your consent.", accept: "Accept", reject: "Reject", policy: "Privacy policy" },
    notFound: { title: "Page not found", lead: "The link may have changed or the page is no longer available. Go back to the homepage or contact us on WhatsApp.", home: "Back to the homepage", homeIn: "English homepage" },
    demo: { videoPlay: "Play the video" },
  },

  /* ------------------------------------------------------------------ TR (DRAFT translation) */
  tr: {
    meta: {
      title: "Memora Plus | Türkiye'de gayrimenkul yatırımı vizyonunuz",
      description: "Türkiye'de mülk sahibi olmak ve gayrimenkule yatırım yapmak isteyenlerin ilk tercihi. İstanbul'da konut, ticari ve yatırım fırsatları.",
      projectsTitle: "Gayrimenkul Projeleri | Memora Plus",
      projectsDescription: "Memora Plus'ın İstanbul'da pazarladığı konut, ticari ve yatırım projelerini keşfedin.",
    },
    nav: { home: "Ana Sayfa", about: "Hakkımızda", services: "Hizmetlerimiz", projects: "Projeler", contact: "İletişim", skip: "İçeriğe geç", menuOpen: "Menüyü aç", menuClose: "Menüyü kapat", mainNav: "Ana menü", language: "Dil" },
    cta: { whatsapp: "WhatsApp'tan yazın", whatsappShort: "WhatsApp", call: "Bizi arayın", explore: "Projeleri keşfedin", allProjects: "Tüm projeleri görün", enquire: "WhatsApp'tan sorun", callAbout: (n) => `${n} hakkında bizi arayın` },
    whatsappMessage: "Merhaba Memora Plus, projeleriniz hakkında daha fazla bilgi almak istiyorum.",
    whatsappProjectMessage: (n) => `Merhaba Memora Plus, şu proje hakkında bilgi almak istiyorum: ${n}`,
    hero: {
      eyebrow: "Türkiye'de mülk edinme yolculuğunuzda yanınızdayız",
      title: "Türkiye'de mülk edinmek ve gayrimenkule yatırım yapmak isteyenlerin ilk tercihi",
      lead: "Uzman danışmanlık, güvenilir gayrimenkul fırsatları ve satın alma sürecinin her aşamasında yanlarında olan bütünleşik bir hizmetle müşterilerimizin başarılı gayrimenkul ve yatırım kararları vermesini sağlıyor; güvenli bir deneyim ve kalıcı yatırım değeri sunuyoruz.",
    },
    about: {
      eyebrow: "Hakkımızda",
      title: "Türkiye'de gayrimenkul fırsatlarını keşfetmede ortağınız",
      body: "Memora Plus, Türkiye'de gayrimenkul pazarlama ve danışmanlık alanında öncü bir şirkettir; en iyi konut, ticari ve yatırım fırsatlarını sunmada uzmanlaşmış olup İstanbul gayrimenkul piyasasında geniş deneyime sahiptir. Profesyonel danışmanlık ve Türkiye'nin önde gelen geliştiricileriyle kurduğumuz ortaklıklar sayesinde müşterilerimizin ihtiyaç ve hedeflerine uygun gayrimenkulü seçmelerine yardımcı oluyor; güvenli bir satın alma deneyimi ve en iyi değeri ve getiriyi sağlayan umut vadeden yatırım fırsatları sunuyoruz.",
      promiseLabel: "Sözümüz",
      promise: "Hızlı uygulama, güvenceli işlemler ve makul fiyatlar",
    },
    services: {
      eyebrow: "Hizmetlerimiz",
      title: "Gayrimenkul pazarlama",
      lead: "Müşterilerimizin ihtiyaç ve hedeflerine uygun gayrimenkulü seçmelerine yardımcı oluyoruz.",
      main: { title: "Gayrimenkul pazarlama", body: "Gayrimenkul seçiminden satın alma işlemlerinin tamamlanmasına kadar profesyonel destek; Türk vatandaşlığı ve gayrimenkul ikameti yolları hakkında yönlendirme." },
      items: [
        { key: "investment", title: "Yatırım fırsatları", body: "İstanbul'da en iyi değeri ve getiriyi sunan güvenilir fırsatlar." },
        { key: "residential", title: "Konut", body: "Aileler ve bireylerin ihtiyaçlarına uygun konutlar." },
        { key: "commercial", title: "Ticari gayrimenkul", body: "Merkezi konumlarda ofis ve dükkânlar." },
      ],
      highlightLabel: "Odak alanımız",
    },
    why: {
      eyebrow: "Neden Memora Plus",
      title: "Bizi farklı kılanlar",
      points: [
        "7/24 kolay iletişim",
        "Yatırım mevzuatı ve işlemlerinde uzmanlık",
        "Hızlı işlem takibi ve randevulara bağlılık",
        "Konut ve yatırım fırsatlarında piyasanın altında fiyatlar",
        "Pazarladığımız projelerin kalitesi",
      ],
    },
    featured: { eyebrow: "Projeler", title: "Seçkin projeler", lead: "İstanbul'da pazarladığımız projelerden bir seçki." },
    video: { eyebrow: "İzleyin", title: "Memora Plus'ı tanıyın", lead: "En yeni projelerimizi ve turlarımızı kanalımızdan takip edin.", play: "Tanıtım videosunu izleyin", channel: "YouTube kanalımızı izleyin" },
    contact: { eyebrow: "İletişim", title: "Bize ulaşın, seçeneklerinizi keşfedin", lead: "Bize ulaşın; bir sonraki adımınızı daha bilinçli ve güvenle atın.", whatsapp: "WhatsApp", phone: "Telefon", location: "Konum", openMap: "Google Haritalar'da aç", follow: "Bizi takip edin" },
    footer: { quickLinks: "Hızlı bağlantılar", contact: "İletişim", rights: "Tüm hakları saklıdır.", social: "Hesaplarımız" },
    marketing: {
      intro: "İster aileniz için seçkin bir ev, ister iyi düşünülmüş bir yatırım fırsatı arayın.",
      points: ["Türkiye'de seçkin konumlar", "İhtiyacınıza ve bütçenize uygun çeşitli seçenekler", "Gayrimenkul seçim sürecinde profesyonel destek", "Türk vatandaşlığı ve gayrimenkul ikameti seçenekleri hakkında bilgi"],
    },
    projects: {
      eyebrow: "Projeler",
      title: "Gayrimenkul projelerimiz",
      lead: "İstanbul'daki konut ve ticari projeleri keşfedin; ayrıntılar için bize WhatsApp'tan ulaşın.",
      filters: { location: "Konum", type: "Tür", status: "Durum", all: "Tümü", europe: "Avrupa Yakası", asia: "Anadolu Yakası", residential: "Konut", commercial: "Ticari", investment: "Yatırım fırsatları", ready: "Teslime hazır", construction: "İnşaat hâlinde", mixed: "Hazır + inşaat hâlinde" },
      count: (n) => `Gösterilen proje: ${n}`,
      empty: "Eşleşen proje yok. Başka bir seçenek deneyin veya bize WhatsApp'tan ulaşın.",
      card: { from: "Başlangıç", view: (n) => `${n} ayrıntıları`, image: "Proje görseli" },
      typeLabel: { residential: "Konut projesi", commercial: "Ticari proje", investment: "Genel proje · yatırım fırsatı" },
      statusLabel: { ready: "Teslime hazır", construction: "İnşaat hâlinde", mixed: "Hazır ve inşaat hâlindeki etaplar" },
      sideLabel: { europe: "Avrupa Yakası", asia: "Anadolu Yakası" },
      detail: {
        metaTitle: (n) => `${n} | Memora Plus projeleri`, back: "Tüm projeler", overview: "Proje hakkında", facts: "Proje bilgileri", units: "Birimler, büyüklükler ve fiyatlar",
        unitType: "Tip", area: "Büyüklük", price: "Fiyat", count: "Birim sayısı", payment: "Ödeme seçenekleri", amenities: "Olanaklar ve hizmetler",
        location: "Konum ve ulaşım", openMap: "Konumu Google Haritalar'da açın", ownership: "Mülkiyet, vatandaşlık ve ikamet", gallery: "Proje görselleri", plans: "Planlar", sitePlan: "Proje vaziyet planı",
        photo: (n, i, c) => `${n} — ${c} görselden ${i}.`, open: (i, c) => `${c} görselden ${i}. görseli büyütün`, close: "Kapat", prev: "Önceki görsel", next: "Sonraki görsel",
        counter: (i, c) => `${i} / ${c}`, noPhotos: "Proje görselleri talep üzerine paylaşılır", contactTitle: "Proje ayrıntılarını isteyin", contactLead: "Güncel fiyatlar, mevcut birimler ve ödeme seçenekleri için Memora Plus ile iletişime geçin.", related: "Bölgedeki diğer projeler", status: "Durum", figures: "Rakamlar ve bilgiler",
      },
    },
    cookie: { title: "Çerezler", text: "Ziyaretleri analiz etmek ve deneyiminizi iyileştirmek için çerez kullanıyoruz. Yalnızca onayınızla etkinleştiririz.", accept: "Kabul et", reject: "Reddet", policy: "Gizlilik politikası" },
    notFound: { title: "Sayfa bulunamadı", lead: "Bağlantı değişmiş ya da sayfa artık mevcut olmayabilir. Ana sayfaya dönün veya bize WhatsApp'tan ulaşın.", home: "Ana sayfaya dön", homeIn: "Türkçe ana sayfa" },
    demo: { videoPlay: "Videoyu izleyin" },
  },
};
