import { t, type Project } from "./types";

const areaLabel = t("المساحات", "Sizes", "Büyüklükler");

// Source: Drive › Landing Page › BİZİM EVLER 10 (Google Doc 1vMHanDMH47J2rau35Cdlgy0q5NJJ3MHx3CwhK3qQD2g)
export const bizimEvler10: Project = {
  slug: "bizim-evler-10",
  name: t("Bizim Evler 10", "Bizim Evler 10", "Bizim Evler 10"),
  district: t("إسبارتا كوله – افجيلار", "Ispartakule – Avcılar", "Ispartakule – Avcılar"),
  side: "europe",
  type: "residential",
  status: null,
  area: "ispartakule",
  sourceDoc: "1vMHanDMH47J2rau35Cdlgy0q5NJJ3MHx3CwhK3qQD2g",
  tagline: t("بيتك الذي يجمع العائلة… واستثمارك الذي يستحق الاختيار", "A home that brings the family together, and an investment worth choosing", "Aileyi bir araya getiren eviniz, seçmeye değer yatırımınız"),
  intro: [
    t("حياة عائلية راقية في قلب إسبارتا كوله – افجيلار، اسطنبول.", "Refined family living in the heart of Ispartakule – Avcılar, Istanbul.", "İstanbul Ispartakule – Avcılar'ın kalbinde seçkin aile yaşamı."),
    t(
      "اكتشف مفهومًا مختلفًا للحياة السكنية، حيث تتسع المساحات الخضراء لتمنحك الهدوء، وتتكامل المرافق لتجعل تفاصيل يومك أكثر راحة، ويمنحك الموقع سهولة الوصول إلى أهم الطرق والمراكز الحيوية في إسطنبول. في Bizim Evler 10، تبدأ حكاية منزل يجمع بين الراحة العائلية والقيمة العقارية.",
      "Discover a different kind of residential living: wide green spaces for calm, facilities that make every day easier, and a location with easy access to Istanbul's main roads and centres. At Bizim Evler 10, a home combines family comfort with property value.",
      "Geniş yeşil alanların huzur verdiği, olanakların gününüzü kolaylaştırdığı ve konumun İstanbul'un önemli yollarına ve merkezlerine kolay erişim sağladığı farklı bir yaşam anlayışını keşfedin. Bizim Evler 10'da aile konforu ile gayrimenkul değeri bir arada.",
    ),
    t(
      "يمتد المشروع على مساحة إجمالية تتراوح بين 52,000 و56,000 متر مربع، مع تخصيص نحو 80% للمساحات الخضراء، ليقدم بيئة سكنية تجمع بين الطبيعة والخصوصية والراحة.",
      "The project covers a total area of 52,000–56,000 m², with about 80% set aside for green space, creating a setting that combines nature, privacy and comfort.",
      "Proje 52.000–56.000 m²'lik toplam alana yayılıyor ve alanın yaklaşık %80'i yeşil alanlara ayrılarak doğa, mahremiyet ve konforu bir araya getiriyor.",
    ),
  ],
  cardFacts: [
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("558–560", "558–560", "558–560") },
    { label: t("الأنماط", "Layouts", "Daire tipleri"), value: t("2+1 – 4+1", "2+1 – 4+1", "2+1 – 4+1") },
  ],
  facts: [
    { label: t("الموقع", "Location", "Konum"), value: t("إسبارتا كوله – افجيلار، إسطنبول", "Ispartakule – Avcılar, Istanbul", "Ispartakule – Avcılar, İstanbul") },
    { label: t("المساحة الإجمالية", "Total area", "Toplam alan"), value: t("بين 52,000 و56,000 م²", "52,000–56,000 m²", "52.000–56.000 m²") },
    { label: t("المساحات الخضراء", "Green space", "Yeşil alan"), value: t("نحو 80%", "About 80%", "Yaklaşık %80") },
    { label: t("الأبنية", "Buildings", "Binalar"), value: t("6 مبانٍ سكنية بارتفاعات تتراوح بين 13 و19 طابقًا", "6 residential buildings of 13–19 floors", "13–19 katlı 6 konut binası") },
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("نحو 558–560 شقة وفق البيانات المتاحة", "About 558–560 apartments, per the available data", "Mevcut verilere göre yaklaşık 558–560 daire") },
    { label: t("أنماط الشقق", "Layouts", "Daire tipleri"), value: t("2+1، 3+1، 4+1", "2+1, 3+1, 4+1", "2+1, 3+1, 4+1") },
    { label: t("مواقف السيارات", "Parking", "Otopark"), value: t("موقف سيارة خاص لكل شقة، وفق بيانات المشروع", "A private parking space per apartment, per the project data", "Proje verilerine göre her daireye özel otopark") },
  ],
  amenities: [
    { items: [t("مسبح داخلي.", "Indoor pool.", "Kapalı yüzme havuzu."), t("ساونا للاسترخاء.", "Sauna.", "Sauna."), t("حمام تركي.", "Turkish bath.", "Türk hamamı."), t("صالة رياضية.", "Gym.", "Spor salonu."), t("مساحات خضراء واسعة.", "Large green spaces.", "Geniş yeşil alanlar.")] },
  ],
  location: {
    title: t("المسافات التقريبية وفق بيانات المشروع", "Approximate distances, per the project data", "Proje verilerine göre yaklaşık mesafeler"),
    items: [
      t("محطة مترو إسبارتا كوله: 5 دقائق.", "Ispartakule metro station: 5 minutes.", "Ispartakule metro istasyonu: 5 dakika."),
      t("مول أوف اسطنبول: 10 دقائق.", "Mall of Istanbul: 10 minutes.", "Mall of İstanbul: 10 dakika."),
      t("مطار إسطنبول: 20 دقيقة.", "Istanbul Airport: 20 minutes.", "İstanbul Havalimanı: 20 dakika."),
      t("محطة مارماراي: 20 دقيقة.", "Marmaray station: 20 minutes.", "Marmaray istasyonu: 20 dakika."),
      t("طريق TEM السريع: 1.5 كم.", "TEM motorway: 1.5 km.", "TEM otoyolu: 1,5 km."),
      t("بالقرب من مسار مشروع قناة إسطنبول المخطط له.", "Close to the planned Kanal Istanbul route.", "Planlanan Kanal İstanbul güzergâhına yakın."),
    ],
  },
};

// Source: Drive › Landing Page › مشروع Bizim Evler 11 (Google Doc 19eR25YrJ_sSYQNA0HCR7sYkpZ7yenOlxpW-el9b0U6Q)
export const bizimEvler11: Project = {
  slug: "bizim-evler-11",
  name: t("Bizim Evler 11", "Bizim Evler 11", "Bizim Evler 11"),
  district: t("إسبارتا كول", "Ispartakule", "Ispartakule"),
  side: "europe",
  type: "residential",
  status: "ready",
  area: "ispartakule",
  sourceDoc: "19eR25YrJ_sSYQNA0HCR7sYkpZ7yenOlxpW-el9b0U6Q",
  tagline: t("شقق عائلية واسعة في إسطنبول بإطلالات مميزة وفرصة التقديم على الجنسية التركية", "Spacious family apartments in Istanbul with fine views and a route to Turkish citizenship", "İstanbul'da özel manzaralı geniş aile daireleri ve Türk vatandaşlığına başvuru imkânı"),
  chips: [
    t("مناسب للتقديم على الجنسية التركية وفق الشروط القانونية", "Suitable for a Turkish citizenship application, subject to the legal requirements", "Yasal şartlara göre Türk vatandaşlığı başvurusuna uygun"),
  ],
  intro: [
    t(
      "تملّك شقتك ضمن مجمع سكني متكامل الخدمات، بمساحات تصل إلى 226 م²، وإطلالات على البحيرة والمدينة لبعض الوحدات، مع خيارات دفع نقدي بخصم يصل إلى 15% أو تقسيط حتى 36 شهرًا وفق شروط العرض.",
      "Own an apartment in a fully serviced residential complex, with sizes up to 226 m² and lake and city views from some units, paying cash with a discount of up to 15% or in instalments of up to 36 months under the offer terms.",
      "Tüm hizmetleriyle donatılmış bir sitede, 226 m²'ye varan büyüklükte ve bazı dairelerde göl ve şehir manzaralı dairenizi edinin; teklif koşullarına göre %15'e varan peşin indirimi ya da 36 aya kadar taksit seçenekleriyle.",
    ),
    t(
      "يوفّر المشروع خيارات من الشقق بمخططات 2+1 و3+1 و4+1، بمساحات تتراوح بين 133 و226 م² وفق قائمة الأسعار المتاحة.",
      "The project offers 2+1, 3+1 and 4+1 layouts from 133 to 226 m², according to the available price list.",
      "Proje, mevcut fiyat listesine göre 133 ile 226 m² arasında 2+1, 3+1 ve 4+1 daire seçenekleri sunar.",
    ),
  ],
  priceFrom: { amount: 18019000, currency: "TRY" },
  cardFacts: [
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("582", "582", "582") },
    { label: t("المساحات", "Sizes", "Büyüklükler"), value: t("133 – 226 م²", "133 – 226 m²", "133 – 226 m²") },
  ],
  facts: [
    { label: t("الموقع", "Location", "Konum"), value: t("إسبارتا كول، إسطنبول الأوروبية", "Ispartakule, European Istanbul", "Ispartakule, İstanbul Avrupa Yakası") },
    { label: t("المطوّر العقاري", "Developer", "Geliştirici"), value: t("İhlas Yapı", "İhlas Yapı", "İhlas Yapı") },
    { label: t("مساحة أرض المشروع", "Land area", "Arsa alanı"), value: t("52,000 م²", "52,000 m²", "52.000 m²") },
    { label: t("عدد الأبنية", "Buildings", "Bina sayısı"), value: t("6 أبنية", "6 buildings", "6 bina") },
    { label: t("إجمالي الشقق", "Apartments", "Toplam daire"), value: t("582 شقة", "582 apartments", "582 daire") },
    { label: t("حالة المشروع", "Status", "Proje durumu"), value: t("جاهز للتسليم", "Ready to move in", "Teslime hazır") },
    { label: t("أنواع الشقق", "Layouts", "Daire tipleri"), value: t("2+1، 3+1، 4+1", "2+1, 3+1, 4+1", "2+1, 3+1, 4+1") },
    { label: areaLabel, value: t("من 133 إلى 226 م² حسب نوع الشقة", "133 to 226 m² depending on the layout", "Daire tipine göre 133 – 226 m²") },
    { label: t("الإطلالات", "Views", "Manzara"), value: t("المدينة والبحيرة، بحسب الوحدة", "City and lake, depending on the unit", "Daireye göre şehir ve göl") },
    { label: t("نوع الطابو", "Title deed", "Tapu türü"), value: t("ارتفاق (Kat İrtifakı)", "Kat İrtifakı (construction servitude)", "Kat İrtifakı") },
    { label: t("الجنسية التركية", "Turkish citizenship", "Türk vatandaşlığı"), value: t("مناسب للتقديم وفق الشروط القانونية", "Suitable for an application, subject to the legal requirements", "Yasal şartlara göre başvuruya uygun") },
    { label: t("الإقامة العقارية", "Property-based residence", "Gayrimenkul ikameti"), value: t("غير مناسب وفق البيانات المتاحة", "Not suitable, per the available data", "Mevcut verilere göre uygun değil") },
  ],
  units: {
    rows: [
      { type: t("2+1", "2+1", "2+1"), area: t("133 – 136 م²", "133 – 136 m²", "133 – 136 m²"), price: t("18,019,000 – 19,505,000 ليرة تركية", "TRY 18,019,000 – 19,505,000", "18.019.000 – 19.505.000 TL") },
      { type: t("3+1", "3+1", "3+1"), area: t("169 – 173 م²", "169 – 173 m²", "169 – 173 m²"), price: t("20,532,000 – 25,795,000 ليرة تركية", "TRY 20,532,000 – 25,795,000", "20.532.000 – 25.795.000 TL") },
      { type: t("4+1", "4+1", "4+1"), area: t("221 – 226 م²", "221 – 226 m²", "221 – 226 m²"), price: t("29,288,000 – 35,081,000 ليرة تركية", "TRY 29,288,000 – 35,081,000", "29.288.000 – 35.081.000 TL") },
    ],
    note: t("الأسعار وفق القائمة المحدّثة بتاريخ 29 يوليو 2026، وهي قابلة للتغيير بحسب الوحدات المتاحة وشروط البيع.", "Prices per the list updated on 29 July 2026; they may change with available units and sale terms.", "Fiyatlar 29 Temmuz 2026'da güncellenen listeye göredir; mevcut dairelere ve satış koşullarına göre değişebilir."),
  },
  payment: {
    items: [
      t("خصم نقدي يصل إلى 15% وفق شروط العرض.", "Cash discount of up to 15% under the offer terms.", "Teklif koşullarına göre %15'e varan peşin indirimi."),
      t("دفعة أولى تبدأ من 50% للتقسيط.", "Down payment from 50% for instalments.", "Taksitli alımda %50'den başlayan peşinat."),
      t("إمكانية التقسيط حتى 36 شهرًا وفق شروط البيع.", "Instalments of up to 36 months under the sale terms.", "Satış koşullarına göre 36 aya kadar taksit."),
    ],
  },
  amenities: [
    {
      items: [
        t("مسبح داخلي ومسبح مخصص للنساء.", "Indoor pool and a women-only pool.", "Kapalı havuz ve kadınlara özel havuz."),
        t("صالة لياقة بدنية.", "Fitness centre.", "Fitness salonu."),
        t("حمام تركي وساونا وغرفة بخار.", "Turkish bath, sauna and steam room.", "Türk hamamı, sauna ve buhar odası."),
        t("مساحات خضراء ومسارات للمشي.", "Green spaces and walking paths.", "Yeşil alanlar ve yürüyüş yolları."),
        t("ملعب للأطفال.", "Children's playground.", "Çocuk oyun alanı."),
        t("ملاعب تنس وكرة قدم وكرة سلة.", "Tennis, football and basketball courts.", "Tenis, futbol ve basketbol sahaları."),
        t("مواقف سيارات داخلية وخارجية.", "Indoor and outdoor parking.", "Kapalı ve açık otopark."),
        t("حراسة على مدار الساعة وكاميرات مراقبة.", "24-hour security and cameras.", "24 saat güvenlik ve kameralar."),
        t("استقبال ومصاعد.", "Reception and lifts.", "Resepsiyon ve asansörler."),
        t("مجالس خارجية.", "Outdoor seating areas.", "Açık oturma alanları."),
        t("إطلالات على المدينة والبحيرة لبعض الوحدات.", "City and lake views from some units.", "Bazı dairelerde şehir ve göl manzarası."),
      ],
    },
  ],
  location: {
    items: [
      t("طريق TEM (E80): نحو 1–3 دقائق بالسيارة وفق بيانات الموقع.", "TEM (E80) motorway: about 1–3 minutes by car, per the location data.", "TEM (E80): konum verilerine göre araçla yaklaşık 1–3 dakika."),
      t("مول أوف إسطنبول: نحو 10 دقائق بالسيارة.", "Mall of Istanbul: about 10 minutes by car.", "Mall of İstanbul: araçla yaklaşık 10 dakika."),
      t("مطار إسطنبول الدولي: نحو 40 دقيقة بالسيارة.", "Istanbul Airport: about 40 minutes by car.", "İstanbul Havalimanı: araçla yaklaşık 40 dakika."),
      t("قناة إسطنبول المخططة: يبعد الموقع عنها نحو كيلومتر واحد تقريبًا.", "Planned Kanal Istanbul: about one kilometre away.", "Planlanan Kanal İstanbul: yaklaşık bir kilometre uzaklıkta."),
      t("المترو والقطار: توجد خطط لتطوير شبكة النقل في المنطقة؛ يُنصح بالتحقق من المحطات العاملة حاليًا قبل الشراء.", "Metro and rail: there are plans to expand transport in the area; check which stations currently operate before buying.", "Metro ve tren: bölgede ulaşım ağını geliştirme planları var; satın almadan önce şu anda çalışan istasyonları kontrol etmeniz önerilir."),
      t("أوقات الوصول تقديرية وتتغير بحسب حركة المرور ونقطة الانطلاق.", "Travel times are estimates and vary with traffic and starting point.", "Ulaşım süreleri tahminidir; trafiğe ve çıkış noktasına göre değişir."),
    ],
  },
  highlights: {
    title: t("لماذا تختار Bizim Evler 11؟", "Why Bizim Evler 11?", "Neden Bizim Evler 11?"),
    items: [
      t("شقق عائلية بمساحات متنوعة تصل إلى 226 م².", "Family apartments in a range of sizes up to 226 m².", "226 m²'ye varan farklı büyüklükte aile daireleri."),
      t("مشروع جاهز للتسليم.", "Ready to move in.", "Teslime hazır proje."),
      t("مرافق رياضية وترفيهية متكاملة.", "Complete sports and leisure facilities.", "Kapsamlı spor ve eğlence olanakları."),
      t("موقع قريب من طريق TEM ومراكز التسوق.", "Close to the TEM motorway and shopping centres.", "TEM otoyoluna ve alışveriş merkezlerine yakın konum."),
      t("خيارات دفع نقدا وتقسيط وفق شروط العرض.", "Cash and instalment options under the offer terms.", "Teklif koşullarına göre peşin ve taksit seçenekleri."),
      t("إمكانية التقديم على الجنسية التركية عند استيفاء الشروط القانونية.", "A Turkish citizenship application is possible when the legal requirements are met.", "Yasal şartlar karşılandığında Türk vatandaşlığına başvuru imkânı."),
    ],
  },
  ownership: [
    t(
      "يُدرج المشروع ضمن الخيارات المناسبة للتقديم على الجنسية التركية وفق البيانات المتاحة، مع ضرورة التحقق من أهلية الوحدة المختارة واستيفاء قيمة العقار والشروط القانونية السارية قبل إتمام عملية الشراء. كما يُنصح بمراجعة مستندات الطابو والتقييم العقاري والرسوم والضرائب المرتبطة بالمعاملة.",
      "According to the available data, the project is among the options suitable for a Turkish citizenship application; the eligibility of the chosen unit, the property value and the current legal conditions must be verified before completing the purchase. Reviewing the title deed, valuation report, fees and taxes is also recommended.",
      "Mevcut verilere göre proje, Türk vatandaşlığı başvurusuna uygun seçenekler arasındadır; satın almayı tamamlamadan önce seçilen dairenin uygunluğu, mülk değeri ve yürürlükteki yasal şartlar doğrulanmalıdır. Tapu belgeleri, ekspertiz raporu, harç ve vergilerin de incelenmesi önerilir.",
    ),
  ],
};

// Source: Drive › Landing Page › Bizim Evler 12 (Google Doc 17pWAcfrIW7RlAfvgDhJPUHmn2giR24T_hhoeL77BFe4)
export const bizimEvler12: Project = {
  slug: "bizim-evler-12",
  name: t("Bizim Evler 12", "Bizim Evler 12", "Bizim Evler 12"),
  district: t("افجيلار", "Avcılar", "Avcılar"),
  side: "europe",
  type: "residential",
  status: "construction",
  area: "ispartakule",
  sourceDoc: "17pWAcfrIW7RlAfvgDhJPUHmn2giR24T_hhoeL77BFe4",
  tagline: t("استثمر في إسطنبول الأوروبية: تملّك عقاري وفرصة للحصول على الجنسية التركية", "Invest in European Istanbul: property ownership and a route to Turkish citizenship", "İstanbul Avrupa Yakası'na yatırım yapın: mülk edinme ve Türk vatandaşlığı fırsatı"),
  chips: [
    t("شقق بمساحات تصل إلى 216 م²", "Apartments up to 216 m²", "216 m²'ye varan daireler"),
    t("دفعة أولى تبدأ من 50%", "Down payment from 50%", "%50'den başlayan peşinat"),
    t("خصم نقدي يصل إلى 10% وفق شروط العرض", "Cash discount of up to 10% under the offer terms", "Teklif koşullarına göre %10'a varan peşin indirimi"),
  ],
  intro: [
    t(
      "اكتشف مشروعًا سكنيًا في منطقة افجلار، يجمع بين المساحات الواسعة والتقنيات الذكية وخيارات التملّك المرنة، مع إمكانية التقدّم للحصول على الجنسية التركية وفق الشروط القانونية المعتمدة.",
      "Discover a residential project in Avcılar that combines generous space, smart technology and flexible ownership options, with the possibility of applying for Turkish citizenship under the applicable legal conditions.",
      "Avcılar'da geniş alanları, akıllı teknolojileri ve esnek mülk edinme seçeneklerini bir araya getiren, yürürlükteki yasal şartlara göre Türk vatandaşlığına başvuru imkânı sunan bir konut projesini keşfedin.",
    ),
    t(
      "على مساحة أرض تبلغ 43,000 م²، يتكوّن المشروع من 7 أبنية تضم 473 شقة، بتصاميم عصرية ومساحات متنوعة تناسب العائلات والباحثين عن فرص التملّك العقاري في إسطنبول.",
      "On 43,000 m² of land, the project has 7 buildings with 473 apartments in modern designs and a range of sizes for families and buyers looking to own property in Istanbul.",
      "43.000 m² arazi üzerinde 7 binadan ve 473 daireden oluşan proje, aileler ve İstanbul'da mülk edinmek isteyenler için modern tasarımlar ve farklı büyüklükler sunar.",
    ),
    t(
      "تجمع الوحدات بين الراحة والتقنيات الحديثة، مع نظام المنزل الذكي والتدفئة الأرضية ومرافق خدمية، إضافة إلى إطلالات على البحر والمدينة والبحيرة بحسب موقع الوحدة واتجاهها.",
      "The units combine comfort with modern technology — a smart-home system, underfloor heating and service facilities — with sea, city and lake views depending on the unit's position and orientation.",
      "Daireler; akıllı ev sistemi, yerden ısıtma ve hizmet olanaklarıyla konforu modern teknolojiyle buluşturur; dairenin konumu ve yönüne göre deniz, şehir ve göl manzarası sunar.",
    ),
  ],
  priceFrom: { amount: 16922000, currency: "TRY" },
  cardFacts: [
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("473", "473", "473") },
    { label: t("التسليم المتوقع", "Expected delivery", "Tahmini teslim"), value: t("1 ديسمبر 2028", "1 December 2028", "1 Aralık 2028") },
  ],
  facts: [
    { label: t("الموقع", "Location", "Konum"), value: t("افجيلار، اسطنبول الأوروبية", "Avcılar, European Istanbul", "Avcılar, İstanbul Avrupa Yakası") },
    { label: t("مساحة الأرض", "Land area", "Arsa alanı"), value: t("43,000 م²", "43,000 m²", "43.000 m²") },
    { label: t("عدد الأبنية", "Buildings", "Bina sayısı"), value: t("7", "7", "7") },
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("473", "473", "473") },
    { label: t("أنماط الشقق", "Layouts", "Daire tipleri"), value: t("2+1، 3+1، 4+1", "2+1, 3+1, 4+1", "2+1, 3+1, 4+1") },
    { label: areaLabel, value: t("من 126 إلى 216 م²", "126 to 216 m²", "126 – 216 m²") },
    { label: t("حالة المشروع", "Status", "Proje durumu"), value: t("قيد الإنشاء", "Under construction", "İnşaat hâlinde") },
    { label: t("التسليم المتوقع", "Expected delivery", "Tahmini teslim"), value: t("1 ديسمبر 2028", "1 December 2028", "1 Aralık 2028") },
    { label: t("نوع الطابو", "Title deed", "Tapu türü"), value: t("ارتفاق (Kat İrtifakı)", "Kat İrtifakı (construction servitude)", "Kat İrtifakı") },
  ],
  units: {
    rows: [
      { type: t("2+1", "2+1", "2+1"), area: t("126 – 136 م²", "126 – 136 m²", "126 – 136 m²"), price: t("16,922,000 – 20,686,000 ليرة تركية", "TRY 16,922,000 – 20,686,000", "16.922.000 – 20.686.000 TL") },
      { type: t("3+1", "3+1", "3+1"), area: t("165 – 177 م²", "165 – 177 m²", "165 – 177 m²"), price: t("17,240,000 – 28,521,000 ليرة تركية", "TRY 17,240,000 – 28,521,000", "17.240.000 – 28.521.000 TL") },
      { type: t("4+1", "4+1", "4+1"), area: t("216 م²", "216 m²", "216 m²"), price: t("26,031,000 – 36,849,000 ليرة تركية", "TRY 26,031,000 – 36,849,000", "26.031.000 – 36.849.000 TL") },
    ],
    note: t("الأسعار وفق القائمة المحدّثة بتاريخ 29 يوليو 2026، وقابلة للتغيير بحسب الوحدات المتاحة. يُرجى تأكيد السعر النهائي قبل الشراء.", "Prices per the list updated on 29 July 2026 and subject to change with available units. Please confirm the final price before buying.", "Fiyatlar 29 Temmuz 2026'da güncellenen listeye göredir ve mevcut dairelere göre değişebilir. Lütfen satın almadan önce nihai fiyatı teyit edin."),
  },
  payment: {
    items: [
      t("دفعة أولى تبدأ من 50%.", "Down payment from 50%.", "%50'den başlayan peşinat."),
      t("إمكانية التقسيط وفق خطة الدفع المعتمدة.", "Instalments under the approved payment plan.", "Onaylı ödeme planına göre taksit imkânı."),
      t("خصم نقدي يصل إلى 10% وفق شروط العرض.", "Cash discount of up to 10% under the offer terms.", "Teklif koşullarına göre %10'a varan peşin indirimi."),
      t("ضمانة من الشركة الإنشائية وفق بيانات المشروع.", "Guarantee from the construction company, per the project data.", "Proje verilerine göre inşaat şirketi garantisi."),
      t("تختلف مدة التقسيط المتاحة بحسب العرض؛ لذا يُرجى التواصل معنا لتأكيد الشروط الحالية.", "The instalment period depends on the offer; please contact us to confirm the current terms.", "Taksit süresi teklife göre değişir; güncel koşulları teyit etmek için bizimle iletişime geçin."),
    ],
  },
  amenities: [
    {
      items: [
        t("نظام المنزل الذكي.", "Smart-home system.", "Akıllı ev sistemi."),
        t("تدفئة أرضية.", "Underfloor heating.", "Yerden ısıtma."),
        t("مواقف سيارات داخلية وخارجية.", "Indoor and outdoor parking.", "Kapalı ve açık otopark."),
        t("مساحات خضراء ومسارات للمشي.", "Green spaces and walking paths.", "Yeşil alanlar ve yürüyüş yolları."),
        t("صالة لياقة بدنية.", "Fitness centre.", "Fitness salonu."),
        t("حراسة على مدار الساعة وكاميرات مراقبة.", "24-hour security and cameras.", "24 saat güvenlik ve kameralar."),
        t("أنظمة عزل في المباني.", "Building insulation systems.", "Binalarda yalıtım sistemleri."),
        t("تصميم إنشائي موصوف بأنه مقاوم للزلازل وفق بيانات المشروع.", "A structural design described as earthquake-resistant, per the project data.", "Proje verilerine göre depreme dayanıklı olarak tanımlanan yapısal tasarım."),
      ],
    },
  ],
  location: {
    items: [
      t("طريق TEM: سهولة الوصول إلى الطريق السريع.", "TEM: easy access to the motorway.", "TEM: otoyola kolay erişim."),
      t("مطار إسطنبول الدولي: نحو 40 دقيقة بالسيارة وفق بيانات الموقع، بحسب حركة المرور.", "Istanbul Airport: about 40 minutes by car per the location data, depending on traffic.", "İstanbul Havalimanı: konum verilerine göre trafiğe bağlı olarak araçla yaklaşık 40 dakika."),
      t("قناة إسطنبول المخطط لها: يقع المشروع بالقرب من المنطقة المخطط لها.", "Planned Kanal Istanbul: the project is close to the planned area.", "Planlanan Kanal İstanbul: proje planlanan alana yakındır."),
      t("المسافات وأوقات الوصول تقديرية، ويجب التحقق من الموقع الفعلي قبل اتخاذ قرار الشراء.", "Distances and travel times are estimates; verify the actual location before deciding to buy.", "Mesafeler ve süreler tahminidir; satın alma kararından önce gerçek konum doğrulanmalıdır."),
    ],
  },
  ownership: [
    t(
      "وفق بيانات المشروع، يمكن بحث أهلية الوحدات للتقدّم للجنسية التركية أو الإقامة العقارية. ويعتمد ذلك على قيمة العقار وشروط البرنامج القانوني الساري ووضع المشتري والعقار؛ لذلك يجب التحقق من الأهلية قبل توقيع العقد.",
      "According to the project data, units can be assessed for Turkish citizenship or property-based residence. This depends on the property value, the applicable legal programme and the situation of the buyer and the property, so eligibility must be verified before signing.",
      "Proje verilerine göre dairelerin Türk vatandaşlığı veya gayrimenkul ikameti için uygunluğu incelenebilir. Bu; mülk değerine, yürürlükteki yasal programın şartlarına ve alıcı ile mülkün durumuna bağlıdır; bu nedenle sözleşmeden önce uygunluk doğrulanmalıdır.",
    ),
  ],
};

