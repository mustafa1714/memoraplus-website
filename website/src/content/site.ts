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
  phoneE164: "+905436227764",
  phoneDisplay: "+90 543 622 77 64",
  whatsapp: "905436227764",
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
  projects: {
    eyebrow: string; title: string; lead: string; draftNote: string;
    filters: { location: string; type: string; status: string; all: string; europe: string; asia: string; residential: string; commercial: string; investment: string; ready: string; construction: string };
    count: (n: number) => string; empty: string;
    card: { from: string; down: string; installments: string; months: (n: number) => string; delivery: string; immediate: string; draft: string; rooms: string; image: string };
    typeLabel: Record<"residential" | "commercial" | "investment", string>;
    statusLabel: Record<"ready" | "construction", string>;
    sideLabel: Record<"europe" | "asia", string>;
  };
  cookie: { title: string; text: string; accept: string; reject: string; policy: string };
  /** 404 page — DRAFT UI copy (all languages) for review by the content owner. */
  notFound: { title: string; lead: string; home: string; homeIn: string };
  /** Labels for temporary stock media and sample data (see public/media/CREDITS.md). */
  demo: { badge: string; videoPlay: string; videoNote: string };
};

export const DICT: Record<Locale, Dict> = {
  /* ------------------------------------------------------------------ AR */
  ar: {
    meta: {
      title: "ميمورا بلس | التسويق والاستثمار العقاري في تركيا",
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
      eyebrow: "ميمورا بلس · التسويق العقاري في إسطنبول",
      title: "الخيار الأول للراغبين في التملك والاستثمار العقاري في تركيا", // APPROVED tagline
      // APPROVED "first 10 seconds" message
      lead: "نسعى إلى تمكين عملائنا من اتخاذ قرارات عقارية واستثمارية ناجحة، عبر تقديم استشارات متخصصة، وفرص عقارية موثوقة، وخدمة متكاملة ترافقهم في جميع مراحل الشراء، لتحقيق تجربة آمنة وقيمة استثمارية مستدامة",
    },
    about: {
      eyebrow: "من نحن",
      title: "شريككم في سوق إسطنبول العقاري",
      // APPROVED company bio
      body: "Memora Plus هي شركة رائدة في مجال التسويق والاستشارات العقارية في تركيا، متخصصة في تقديم أفضل الفرص السكنية والتجارية والاستثمارية، مع خبرة واسعة في سوق إسطنبول العقاري. نساعد عملاءنا على اختيار العقار المناسب وفق احتياجاتهم وأهدافهم، من خلال استشارات احترافية وشراكات مع كبرى شركات التطوير العقاري في تركيا، لنضمن لهم تجربة شراء آمنة وفرصًا استثمارية واعدة تحقق أفضل قيمة وعائد.",
      promiseLabel: "وعدنا",
      promise: "سرعة التنفيذ وإجراءات مضمونة وأسعار معقولة", // APPROVED
    },
    services: {
      eyebrow: "خدماتنا",
      title: "التسويق العقاري",
      lead: "نساعد عملاءنا على اختيار العقار المناسب وفق احتياجاتهم وأهدافهم.", // from APPROVED bio
      main: { title: "التسويق العقاري", body: "نسوّق لمشاريع مختارة بالشراكة مع كبرى شركات التطوير العقاري في تركيا، ونرافق العميل في جميع مراحل الشراء." },
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
    contact: { eyebrow: "تواصل معنا", title: "نحن بانتظار رسالتكم", lead: "تواصلوا معنا مباشرة عبر واتساب أو بالهاتف على مدار الساعة.", whatsapp: "واتساب", phone: "الهاتف", location: "الموقع", openMap: "افتح على خرائط Google", follow: "تابعونا" },
    footer: { quickLinks: "روابط سريعة", contact: "تواصل معنا", rights: "جميع الحقوق محفوظة.", social: "حساباتنا" },
    projects: {
      eyebrow: "المشاريع",
      title: "مشاريعنا العقارية",
      lead: "استكشفوا المشاريع السكنية والتجارية والاستثمارية في إسطنبول، وتواصلوا معنا عبر واتساب لمعرفة التفاصيل.",
      draftNote: "البيانات المعروضة تجريبية لأغراض العرض، وسيتم استبدالها بالبيانات الحقيقية.",
      filters: { location: "الموقع", type: "النوع", status: "الحالة", all: "الكل", europe: "الجانب الأوروبي", asia: "الجانب الآسيوي", residential: "سكني", commercial: "تجاري", investment: "استثماري", ready: "جاهز للتسليم", construction: "قيد الإنشاء" },
      count: (n) => `عدد المشاريع المعروضة: ${n}`,
      empty: "لا توجد مشاريع مطابقة. جرّبوا اختياراً آخر أو تواصلوا معنا عبر واتساب.",
      card: { from: "يبدأ من", down: "الدفعة الأولى", installments: "الأقساط", months: (n) => `${n} شهراً`, delivery: "التسليم", immediate: "فوري", draft: "تجريبي", rooms: "الوحدات", image: "صورة المشروع" },
      typeLabel: { residential: "شقق سكنية", commercial: "وحدات تجارية", investment: "فرصة استثمارية" },
      statusLabel: { ready: "جاهز للتسليم", construction: "قيد الإنشاء" },
      sideLabel: { europe: "الجانب الأوروبي", asia: "الجانب الآسيوي" },
    },
    cookie: { title: "ملفات الارتباط", text: "نستخدم ملفات الارتباط لتحليل الزيارات وتحسين تجربتكم. لن نفعّلها إلا بموافقتكم.", accept: "قبول", reject: "رفض", policy: "سياسة الخصوصية" },
    notFound: { title: "الصفحة غير موجودة", lead: "ربما تغيّر الرابط أو لم تعد الصفحة متاحة. عودوا إلى الرئيسية أو تواصلوا معنا عبر واتساب.", home: "العودة إلى الرئيسية", homeIn: "الصفحة الرئيسية بالعربية" },
    demo: { badge: "تجريبي", videoPlay: "شاهد المقطع التوضيحي", videoNote: "مقطع توضيحي مؤقت، سيُستبدل بالفيديو التعريفي لميمورا بلس." },
  },

  /* ------------------------------------------------------------------ EN (DRAFT translation) */
  en: {
    meta: {
      title: "Memora Plus | Real Estate Marketing & Investment in Türkiye",
      description: "The first choice for owning and investing in real estate in Türkiye. Residential, commercial and investment opportunities in Istanbul.",
      projectsTitle: "Real Estate Projects | Memora Plus",
      projectsDescription: "Explore the residential, commercial and investment projects marketed by Memora Plus in Istanbul.",
    },
    nav: { home: "Home", about: "About", services: "Services", projects: "Projects", contact: "Contact", skip: "Skip to content", menuOpen: "Open menu", menuClose: "Close menu", mainNav: "Main navigation", language: "Language" },
    cta: { whatsapp: "Chat on WhatsApp", whatsappShort: "WhatsApp", call: "Call us", explore: "Explore projects", allProjects: "View all projects", enquire: "Ask on WhatsApp", callAbout: (n) => `Call us about ${n}` },
    whatsappMessage: "Hello Memora Plus, I would like to know more about your projects.",
    whatsappProjectMessage: (n) => `Hello Memora Plus, I would like details about the project: ${n}`,
    hero: {
      eyebrow: "Memora Plus · Real estate marketing in Istanbul",
      title: "The first choice for owning and investing in real estate in Türkiye",
      lead: "We empower our clients to make successful property and investment decisions through specialist advice, trusted real estate opportunities and a complete service that supports them at every stage of the purchase — for a safe experience and lasting investment value.",
    },
    about: {
      eyebrow: "About us",
      title: "Your partner in Istanbul's property market",
      body: "Memora Plus is a leading real estate marketing and consultancy company in Türkiye, specialising in the best residential, commercial and investment opportunities, with extensive experience in Istanbul's property market. We help our clients choose the right property for their needs and goals through professional advice and partnerships with Türkiye's major developers, ensuring a safe buying experience and promising investment opportunities that deliver the best value and return.",
      promiseLabel: "Our promise",
      promise: "Fast execution, guaranteed procedures and fair prices",
    },
    services: {
      eyebrow: "Services",
      title: "Real estate marketing",
      lead: "We help our clients choose the right property for their needs and goals.",
      main: { title: "Real estate marketing", body: "We market selected projects in partnership with Türkiye's major developers and support clients through every stage of the purchase." },
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
    contact: { eyebrow: "Contact", title: "We look forward to hearing from you", lead: "Reach us directly on WhatsApp or by phone, around the clock.", whatsapp: "WhatsApp", phone: "Phone", location: "Location", openMap: "Open in Google Maps", follow: "Follow us" },
    footer: { quickLinks: "Quick links", contact: "Contact", rights: "All rights reserved.", social: "Our accounts" },
    projects: {
      eyebrow: "Projects",
      title: "Our real estate projects",
      lead: "Explore residential, commercial and investment projects in Istanbul, and contact us on WhatsApp for details.",
      draftNote: "The data shown is sample data for presentation and will be replaced with real project data.",
      filters: { location: "Location", type: "Type", status: "Status", all: "All", europe: "European side", asia: "Asian side", residential: "Residential", commercial: "Commercial", investment: "Investment", ready: "Ready", construction: "Under construction" },
      count: (n) => `Projects shown: ${n}`,
      empty: "No matching projects. Try another option or contact us on WhatsApp.",
      card: { from: "From", down: "Down payment", installments: "Instalments", months: (n) => `${n} months`, delivery: "Delivery", immediate: "Immediate", draft: "DEMO", rooms: "Units", image: "Project image" },
      typeLabel: { residential: "Apartments", commercial: "Commercial units", investment: "Investment opportunity" },
      statusLabel: { ready: "Ready to move in", construction: "Under construction" },
      sideLabel: { europe: "European side", asia: "Asian side" },
    },
    cookie: { title: "Cookies", text: "We use cookies to analyse traffic and improve your experience. We only enable them with your consent.", accept: "Accept", reject: "Reject", policy: "Privacy policy" },
    notFound: { title: "Page not found", lead: "The link may have changed or the page is no longer available. Go back to the homepage or contact us on WhatsApp.", home: "Back to the homepage", homeIn: "English homepage" },
    demo: { badge: "DEMO", videoPlay: "Play the demo clip", videoNote: "Temporary demo clip, to be replaced with the Memora Plus intro video." },
  },

  /* ------------------------------------------------------------------ TR (DRAFT translation) */
  tr: {
    meta: {
      title: "Memora Plus | Türkiye'de Gayrimenkul Pazarlama ve Yatırım",
      description: "Türkiye'de mülk sahibi olmak ve gayrimenkule yatırım yapmak isteyenlerin ilk tercihi. İstanbul'da konut, ticari ve yatırım fırsatları.",
      projectsTitle: "Gayrimenkul Projeleri | Memora Plus",
      projectsDescription: "Memora Plus'ın İstanbul'da pazarladığı konut, ticari ve yatırım projelerini keşfedin.",
    },
    nav: { home: "Ana Sayfa", about: "Hakkımızda", services: "Hizmetlerimiz", projects: "Projeler", contact: "İletişim", skip: "İçeriğe geç", menuOpen: "Menüyü aç", menuClose: "Menüyü kapat", mainNav: "Ana menü", language: "Dil" },
    cta: { whatsapp: "WhatsApp'tan yazın", whatsappShort: "WhatsApp", call: "Bizi arayın", explore: "Projeleri keşfedin", allProjects: "Tüm projeleri görün", enquire: "WhatsApp'tan sorun", callAbout: (n) => `${n} hakkında bizi arayın` },
    whatsappMessage: "Merhaba Memora Plus, projeleriniz hakkında daha fazla bilgi almak istiyorum.",
    whatsappProjectMessage: (n) => `Merhaba Memora Plus, şu proje hakkında bilgi almak istiyorum: ${n}`,
    hero: {
      eyebrow: "Memora Plus · İstanbul'da gayrimenkul pazarlama",
      title: "Türkiye'de mülk edinmek ve gayrimenkule yatırım yapmak isteyenlerin ilk tercihi",
      lead: "Uzman danışmanlık, güvenilir gayrimenkul fırsatları ve satın alma sürecinin her aşamasında yanlarında olan bütünleşik bir hizmetle müşterilerimizin başarılı gayrimenkul ve yatırım kararları vermesini sağlıyor; güvenli bir deneyim ve kalıcı yatırım değeri sunuyoruz.",
    },
    about: {
      eyebrow: "Hakkımızda",
      title: "İstanbul gayrimenkul piyasasındaki ortağınız",
      body: "Memora Plus, Türkiye'de gayrimenkul pazarlama ve danışmanlık alanında öncü bir şirkettir; en iyi konut, ticari ve yatırım fırsatlarını sunmada uzmanlaşmış olup İstanbul gayrimenkul piyasasında geniş deneyime sahiptir. Profesyonel danışmanlık ve Türkiye'nin önde gelen geliştiricileriyle kurduğumuz ortaklıklar sayesinde müşterilerimizin ihtiyaç ve hedeflerine uygun gayrimenkulü seçmelerine yardımcı oluyor; güvenli bir satın alma deneyimi ve en iyi değeri ve getiriyi sağlayan umut vadeden yatırım fırsatları sunuyoruz.",
      promiseLabel: "Sözümüz",
      promise: "Hızlı uygulama, güvenceli işlemler ve makul fiyatlar",
    },
    services: {
      eyebrow: "Hizmetlerimiz",
      title: "Gayrimenkul pazarlama",
      lead: "Müşterilerimizin ihtiyaç ve hedeflerine uygun gayrimenkulü seçmelerine yardımcı oluyoruz.",
      main: { title: "Gayrimenkul pazarlama", body: "Türkiye'nin önde gelen geliştiricileriyle iş birliği içinde seçkin projeleri pazarlıyor, satın alma sürecinin her aşamasında yanınızda oluyoruz." },
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
    contact: { eyebrow: "İletişim", title: "Mesajınızı bekliyoruz", lead: "Bize 7/24 doğrudan WhatsApp veya telefonla ulaşın.", whatsapp: "WhatsApp", phone: "Telefon", location: "Konum", openMap: "Google Haritalar'da aç", follow: "Bizi takip edin" },
    footer: { quickLinks: "Hızlı bağlantılar", contact: "İletişim", rights: "Tüm hakları saklıdır.", social: "Hesaplarımız" },
    projects: {
      eyebrow: "Projeler",
      title: "Gayrimenkul projelerimiz",
      lead: "İstanbul'daki konut, ticari ve yatırım projelerini keşfedin; ayrıntılar için bize WhatsApp'tan ulaşın.",
      draftNote: "Gösterilen veriler sunum amaçlı örnek verilerdir ve gerçek proje verileriyle değiştirilecektir.",
      filters: { location: "Konum", type: "Tür", status: "Durum", all: "Tümü", europe: "Avrupa Yakası", asia: "Anadolu Yakası", residential: "Konut", commercial: "Ticari", investment: "Yatırım", ready: "Teslime hazır", construction: "İnşaat hâlinde" },
      count: (n) => `Gösterilen proje: ${n}`,
      empty: "Eşleşen proje yok. Başka bir seçenek deneyin veya bize WhatsApp'tan ulaşın.",
      card: { from: "Başlangıç", down: "Peşinat", installments: "Taksit", months: (n) => `${n} ay`, delivery: "Teslim", immediate: "Hemen", draft: "DEMO", rooms: "Daireler", image: "Proje görseli" },
      typeLabel: { residential: "Konut", commercial: "Ticari birimler", investment: "Yatırım fırsatı" },
      statusLabel: { ready: "Teslime hazır", construction: "İnşaat hâlinde" },
      sideLabel: { europe: "Avrupa Yakası", asia: "Anadolu Yakası" },
    },
    cookie: { title: "Çerezler", text: "Ziyaretleri analiz etmek ve deneyiminizi iyileştirmek için çerez kullanıyoruz. Yalnızca onayınızla etkinleştiririz.", accept: "Kabul et", reject: "Reddet", policy: "Gizlilik politikası" },
    notFound: { title: "Sayfa bulunamadı", lead: "Bağlantı değişmiş ya da sayfa artık mevcut olmayabilir. Ana sayfaya dönün veya bize WhatsApp'tan ulaşın.", home: "Ana sayfaya dön", homeIn: "Türkçe ana sayfa" },
    demo: { badge: "DEMO", videoPlay: "Tanıtım klibini oynatın", videoNote: "Geçici tanıtım klibi; Memora Plus tanıtım videosuyla değiştirilecektir." },
  },
};
