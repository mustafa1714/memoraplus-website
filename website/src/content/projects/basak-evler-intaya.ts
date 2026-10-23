import { t, type Project } from "./types";

// Source: Drive › Landing Page › BAŞAK EVLER INTAYA (Google Doc 1XTos7Zr3eZ0g7fsSdtLMKf5676nr3WR12JirtRrOc0E)
export const basakEvlerIntaya: Project = {
  slug: "basak-evler-intaya",
  name: t("BAŞAK EVLER INTAYA", "BAŞAK EVLER INTAYA", "BAŞAK EVLER INTAYA"),
  district: t("باغجلار", "Bağcılar", "Bağcılar"),
  side: "europe",
  type: "residential",
  status: null,
  area: "bagcilar",
  sourceDoc: "1XTos7Zr3eZ0g7fsSdtLMKf5676nr3WR12JirtRrOc0E",
  tagline: t("فرصتك لاختيار شقتك في إسطنبول تبدأ من 160 ألف دولار", "Your chance to choose your apartment in Istanbul, from $160,000", "İstanbul'da dairenizi seçme fırsatı 160.000 dolardan başlıyor"),
  chips: [
    t("مناسب للجنسية التركية", "Suitable for Turkish citizenship", "Türk vatandaşlığına uygun"),
    t("مناسب للإقامة العقارية", "Suitable for property-based residence", "Gayrimenkul ikametine uygun"),
    t("أسعار تبدأ من 160,000 دولار", "Prices from $160,000", "160.000 dolardan başlayan fiyatlar"),
  ],
  intro: [
    t(
      "يقدم لك مشروع BAŞAK EVLER INTAYA في منطقة باغجلار مجموعة متنوعة من الشقق السكنية، بمساحات تبدأ من 61 م²، وأسعار تبدأ من 160,000 دولار وفق قائمة الأسعار المتاحة.",
      "BAŞAK EVLER INTAYA in Bağcılar offers a varied range of apartments, with sizes from 61 m² and prices from $160,000 according to the available price list.",
      "Bağcılar'daki BAŞAK EVLER INTAYA projesi, 61 m²'den başlayan büyüklüklerde ve mevcut fiyat listesine göre 160.000 dolardan başlayan fiyatlarla çeşitli daire seçenekleri sunar.",
    ),
    t(
      "سواء كنت تبحث عن شقة للسكن أو ترغب في دراسة فرصة للتملك العقاري في تركيا، يمكنك الاختيار من بين عدة أنماط سكنية، ضمن مشروع يضم 619 شقة ومرافق تلبي احتياجات الحياة اليومية.",
      "Whether you are looking for a home or considering property ownership in Türkiye, you can choose from several layouts in a project of 619 apartments with facilities for everyday life.",
      "İster oturmak için bir daire arıyor olun ister Türkiye'de mülk edinmeyi değerlendirin; 619 daireden oluşan ve günlük yaşam ihtiyaçlarını karşılayan olanaklara sahip bu projede farklı daire tipleri arasından seçim yapabilirsiniz.",
    ),
  ],
  priceFrom: { amount: 160000, currency: "USD" },
  cardFacts: [
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("619", "619", "619") },
    { label: t("الأنماط", "Layouts", "Daire tipleri"), value: t("1+1 – 3+1", "1+1 – 3+1", "1+1 – 3+1") },
  ],
  facts: [
    { label: t("الموقع", "Location", "Konum"), value: t("باغجلار، إسطنبول الأوروبية", "Bağcılar, European Istanbul", "Bağcılar, İstanbul Avrupa Yakası") },
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("619 شقة", "619 apartments", "619 daire") },
    { label: t("أنماط الشقق", "Layouts", "Daire tipleri"), value: t("من 1+1 إلى 3+1، بالإضافة إلى شقق 2+1 دوبلكس", "1+1 to 3+1, plus 2+1 duplex", "1+1'den 3+1'e, ayrıca 2+1 dubleks") },
    { label: t("المساحات", "Sizes", "Büyüklükler"), value: t("تبدأ من 61 م²", "From 61 m²", "61 m²'den başlayan") },
    { label: t("الأسعار", "Prices", "Fiyatlar"), value: t("تبدأ من 160,000 دولار", "From $160,000", "160.000 dolardan başlayan") },
  ],
  highlights: {
    title: t("لماذا تختار BAŞAK EVLER INTAYA؟", "Why BAŞAK EVLER INTAYA?", "Neden BAŞAK EVLER INTAYA?"),
    items: [
      t("مناسب للجنسية التركية وفق بيانات المشروع، مع ضرورة استيفاء الشروط القانونية.", "Suitable for Turkish citizenship according to the project data, subject to meeting the legal requirements.", "Proje verilerine göre Türk vatandaşlığına uygun; yasal şartların karşılanması gerekir."),
      t("مناسب للإقامة العقارية وفق بيانات المشروع، مع مراعاة شروط الأهلية الرسمية.", "Suitable for property-based residence according to the project data, subject to the official eligibility conditions.", "Proje verilerine göre gayrimenkul ikametine uygun; resmî uygunluk şartlarına tabidir."),
      t("أسعار تبدأ من 160,000 دولار وفق قائمة الأسعار المتاحة.", "Prices from $160,000 according to the available price list.", "Mevcut fiyat listesine göre 160.000 dolardan başlayan fiyatlar."),
      t("أنماط سكنية متنوعة من 1+1 إلى 3+1، بالإضافة إلى شقق 2+1 دوبلكس.", "Layouts from 1+1 to 3+1, plus 2+1 duplex apartments.", "1+1'den 3+1'e farklı daire tipleri ve 2+1 dubleks daireler."),
      t("موقع في باغجلار بالقرب من محاور الطرق والخدمات.", "A location in Bağcılar close to main roads and services.", "Ana yollara ve hizmetlere yakın Bağcılar konumu."),
      t("مرافق متكاملة تشمل المسبح الخارجي، والنادي الرياضي، والساونا، والحمام التركي.", "Full facilities including an outdoor pool, gym, sauna and Turkish bath.", "Açık havuz, spor salonu, sauna ve Türk hamamı dahil kapsamlı olanaklar."),
      t("مساحات متنوعة تناسب الأفراد والأزواج والعائلات.", "Sizes that suit individuals, couples and families.", "Bireyler, çiftler ve ailelere uygun farklı büyüklükler."),
    ],
  },
  units: {
    rows: [
      { type: t("1+1", "1+1", "1+1"), area: t("61 – 116 م²", "61 – 116 m²", "61 – 116 m²"), price: t("160,000 – 310,000 دولار", "$160,000 – 310,000", "160.000 – 310.000 $") },
      { type: t("2+1", "2+1", "2+1"), area: t("122 – 165 م²", "122 – 165 m²", "122 – 165 m²"), price: t("240,000 – 470,000 دولار", "$240,000 – 470,000", "240.000 – 470.000 $") },
      { type: t("2+1 دوبلكس", "2+1 duplex", "2+1 dubleks"), area: t("165 م²", "165 m²", "165 m²"), price: t("240,000 – 470,000 دولار وفق القائمة المتاحة", "$240,000 – 470,000 per the available list", "Mevcut listeye göre 240.000 – 470.000 $") },
      { type: t("3+1", "3+1", "3+1"), area: t("160 – 260 م²", "160 – 260 m²", "160 – 260 m²"), price: t("411,000 – 800,000 دولار", "$411,000 – 800,000", "411.000 – 800.000 $") },
    ],
    note: t("الأسعار المذكورة استرشادية وفق قائمة مؤرخة في 11 يوليو 2026.", "Prices are indicative, per a price list dated 11 July 2026.", "Belirtilen fiyatlar 11 Temmuz 2026 tarihli listeye göre yol göstericidir."),
  },
  location: {
    title: t("أبرز الوجهات المحيطة", "Nearby destinations", "Çevredeki önemli noktalar"),
    items: [
      t("الطريق السريع TEM ومحور Basın Ekspres: سهولة الوصول إلى محاور الحركة الرئيسية في إسطنبول الأوروبية.", "TEM motorway and Basın Ekspres: easy access to the main routes of European Istanbul.", "TEM otoyolu ve Basın Ekspres: Avrupa Yakası'nın ana ulaşım akslarına kolay erişim."),
      t("مول أوف إسطنبول: نحو 12 دقيقة بالسيارة وفق البيانات المقدمة.", "Mall of Istanbul: about 12 minutes by car, per the data provided.", "Mall of İstanbul: verilen bilgilere göre araçla yaklaşık 12 dakika."),
      t("ستار سيتي أوتلت: نحو 15 دقيقة بالسيارة.", "Starcity Outlet: about 15 minutes by car.", "Starcity Outlet: araçla yaklaşık 15 dakika."),
      t("المدارس والمساجد: مرافق قريبة من المشروع.", "Schools and mosques close to the project.", "Projeye yakın okullar ve camiler."),
      t("المؤسسات الصحية والتعليمية: خيارات متعددة في المناطق المحيطة.", "Health and education institutions in the surrounding areas.", "Çevrede çok sayıda sağlık ve eğitim kurumu."),
      t("مطار إسطنبول الدولي: نحو 30–40 دقيقة بالسيارة.", "Istanbul Airport: about 30–40 minutes by car.", "İstanbul Havalimanı: araçla yaklaşık 30–40 dakika."),
    ],
  },
  amenities: [
    {
      items: [
        t("مسبح خارجي.", "Outdoor pool.", "Açık yüzme havuzu."),
        t("صالة لياقة بدنية.", "Fitness centre.", "Fitness salonu."),
        t("حمام تركي وساونا.", "Turkish bath and sauna.", "Türk hamamı ve sauna."),
        t("مساحات خضراء.", "Green spaces.", "Yeşil alanlar."),
        t("مجالس خارجية.", "Outdoor seating areas.", "Açık oturma alanları."),
        t("مواقف سيارات مغلقة.", "Covered parking.", "Kapalı otopark."),
        t("حراسة على مدار 24 ساعة.", "24-hour security.", "24 saat güvenlik."),
        t("كاميرات مراقبة.", "Security cameras.", "Güvenlik kameraları."),
        t("مكتبة وغرفة اجتماعات.", "Library and meeting room.", "Kütüphane ve toplantı odası."),
        t("محطة لشحن السيارات الكهربائية.", "Electric-vehicle charging station.", "Elektrikli araç şarj istasyonu."),
        t("إطلالات على المدينة.", "City views.", "Şehir manzarası."),
      ],
    },
  ],
  ownership: [
    t("وتشير بيانات المشروع إلى مراعاة مقاومة الزلازل في التصميم الإنشائي.", "The project data states that earthquake resistance was considered in the structural design.", "Proje verilerine göre yapısal tasarımda depreme dayanıklılık gözetilmiştir."),
  ],
};
