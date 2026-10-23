import { t, type Project } from "./types";

// Source: Drive › Landing Page › مشروع Mavera Boutique (Google Doc 1fjkLyXME-cxMtwVX3o_og8Iln7Sk-Ls-kJJBBgRVA5Q)
export const maveraBoutique: Project = {
  slug: "mavera-boutique",
  name: t("Mavera Boutique", "Mavera Boutique", "Mavera Boutique"),
  district: t("باشاك شهير", "Başakşehir", "Başakşehir"),
  side: "europe",
  type: "residential",
  status: "ready",
  area: "basaksehir",
  sourceDoc: "1fjkLyXME-cxMtwVX3o_og8Iln7Sk-Ls-kJJBBgRVA5Q",
  tagline: t("شقق عائلية واسعة في باشاك شهير تصل إلى 236 م² – إسطنبول | جاهزة للتسليم", "Spacious family apartments in Başakşehir of up to 236 m² – Istanbul | ready to move in", "Başakşehir'de 236 m²'ye varan geniş aile daireleri – İstanbul | teslime hazır"),
  chips: [t("مع فرصة التقديم على الجنسية التركية وفق الشروط القانونية", "With the possibility of a Turkish citizenship application, subject to the legal requirements", "Yasal şartlara göre Türk vatandaşlığına başvuru imkânıyla")],
  intro: [
    t(
      "يقدم مشروع Mavera Boutique من خلال Memora Plus خيارات سكنية عائلية في باشاك شهير، تجمع بين المساحات الواسعة والمرافق المتكاملة والموقع القريب من المترو والطرق الرئيسية.",
      "Through Memora Plus, Mavera Boutique offers family homes in Başakşehir that combine generous space, complete facilities and a location near the metro and main roads.",
      "Mavera Boutique, Memora Plus aracılığıyla Başakşehir'de geniş alanları, kapsamlı olanakları ve metroya ve ana yollara yakın konumu bir araya getiren aile konutları sunar.",
    ),
  ],
  priceFrom: { amount: 25100000, currency: "TRY" },
  cardFacts: [
    { label: t("الأنماط", "Layout", "Daire tipi"), value: t("4+1", "4+1", "4+1") },
    { label: t("المساحات", "Sizes", "Büyüklükler"), value: t("191 – 236 م²", "191 – 236 m²", "191 – 236 m²") },
  ],
  facts: [
    { label: t("الموقع", "Location", "Konum"), value: t("باشاك شهير – القسم الأوروبي من إسطنبول", "Başakşehir – European Istanbul", "Başakşehir – İstanbul Avrupa Yakası") },
    { label: t("المساحات", "Sizes", "Büyüklükler"), value: t("من 191 إلى 236 م²", "191 to 236 m²", "191 – 236 m²") },
    { label: t("توزيع الغرف", "Rooms", "Oda düzeni"), value: t("4 غرف وصالة (4+1)", "4 bedrooms and a living room (4+1)", "4 oda 1 salon (4+1)") },
    { label: t("عدد الحمامات", "Bathrooms", "Banyo sayısı"), value: t("حسب الوحدة المتاحة", "Depending on the available unit", "Mevcut daireye göre") },
    { label: t("الطابق والإطلالة", "Floor and view", "Kat ve manzara"), value: t("حسب الوحدة المتاحة", "Depending on the available unit", "Mevcut daireye göre") },
    { label: t("حالة المشروع", "Status", "Proje durumu"), value: t("جاهز للتسليم", "Ready to move in", "Teslime hazır") },
    { label: t("الأسعار المسجلة", "Listed prices", "Kayıtlı fiyatlar"), value: t("من 25,100,000 إلى 30,000,000 ليرة تركية", "TRY 25,100,000 to 30,000,000", "25.100.000 – 30.000.000 TL") },
    { label: t("الجنسية التركية", "Turkish citizenship", "Türk vatandaşlığı"), value: t("المشروع مسجل بأنه مناسب للجنسية، مع ضرورة التحقق من استيفاء الشروط القانونية الحالية", "Listed as suitable for citizenship; the current legal conditions must be verified", "Vatandaşlığa uygun olarak kayıtlı; güncel yasal şartların karşılandığı doğrulanmalıdır") },
  ],
  payment: {
    items: [
      t("نظام الدفع: نقدي أو بالتقسيط وفق شروط الشركة.", "Payment: cash or instalments under the company's terms.", "Ödeme: şirket koşullarına göre peşin veya taksitli."),
      t("الخصم النقدي المسجل: 10%.", "Listed cash discount: 10%.", "Kayıtlı peşin indirimi: %10."),
      t("التقسيط: دفعة أولى تبدأ من 50%، ولمدة تصل إلى 6 أشهر.", "Instalments: down payment from 50%, for up to 6 months.", "Taksit: %50'den başlayan peşinat, 6 aya kadar."),
    ],
  },
  amenities: [
    {
      items: [
        t("مسبح داخلي وصالة لياقة بدنية.", "Indoor pool and fitness centre.", "Kapalı havuz ve fitness salonu."),
        t("ساونا وحمام تركي.", "Sauna and Turkish bath.", "Sauna ve Türk hamamı."),
        t("مساحات خضراء ومسارات للمشي.", "Green spaces and walking paths.", "Yeşil alanlar ve yürüyüş yolları."),
        t("ملعب أطفال وملاعب رياضية.", "Children's playground and sports courts.", "Çocuk oyun alanı ve spor sahaları."),
        t("كراج مغلق للسيارات.", "Covered garage.", "Kapalı otopark."),
        t("حراسة على مدار 24 ساعة وكاميرات مراقبة.", "24-hour security and cameras.", "24 saat güvenlik ve kameralar."),
        t("حضانة أطفال وغرف تخزين.", "Nursery and storage rooms.", "Kreş ve depo odaları."),
      ],
    },
  ],
  location: {
    title: t("موقع استراتيجي", "A strategic location", "Stratejik konum"),
    items: [
      t("المترو: بالقرب من محطات المترو.", "Metro: close to metro stations.", "Metro: metro istasyonlarına yakın."),
      t("الطرق الرئيسية: سهولة الوصول إلى طريقي TEM وKuzey Marmara.", "Main roads: easy access to the TEM and Kuzey Marmara motorways.", "Ana yollar: TEM ve Kuzey Marmara otoyollarına kolay erişim."),
      t("المرافق الطبية: بالقرب من مدينة تشام وساكورا الطبية.", "Medical: close to Çam and Sakura City Hospital.", "Sağlık: Çam ve Sakura Şehir Hastanesi'ne yakın."),
      t("التسوق والترفيه: نحو 10 دقائق بالسيارة إلى مول إسطنبول.", "Shopping and leisure: about 10 minutes by car to Mall of Istanbul.", "Alışveriş ve eğlence: Mall of İstanbul'a araçla yaklaşık 10 dakika."),
      t("مطار إسطنبول: نحو 25 دقيقة بالسيارة.", "Istanbul Airport: about 25 minutes by car.", "İstanbul Havalimanı: araçla yaklaşık 25 dakika."),
    ],
  },
};

// Source: Drive › Landing Page › مشروع Referans Pendik (Google Doc 1I4_2KGQbMNzzycMDNyjt_MkIa4DTs690pZSSIpPeXnk). No images supplied.
export const referansPendik: Project = {
  slug: "referans-pendik",
  name: t("Referans Pendik", "Referans Pendik", "Referans Pendik"),
  district: t("بنديك", "Pendik", "Pendik"),
  side: "asia",
  type: "residential",
  status: null,
  area: "pendik",
  sourceDoc: "1I4_2KGQbMNzzycMDNyjt_MkIa4DTs690pZSSIpPeXnk",
  tagline: t("استثمارك في إسطنبول الآسيوية يبدأ من هنا", "Your investment in Asian Istanbul starts here", "Anadolu Yakası'ndaki yatırımınız burada başlıyor"),
  intro: [
    t("حياة متكاملة، موقع استراتيجي، وفرصة للتملّك في واحدة من مناطق إسطنبول الآسيوية.", "Complete living, a strategic location and a chance to own in one of Istanbul's Asian-side districts.", "Bütünleşik yaşam, stratejik konum ve İstanbul Anadolu Yakası'nda mülk edinme fırsatı."),
    t(
      "سواء كنت تبحث عن منزل عائلي يوفر لك ولعائلتك أسلوب حياة متكاملًا، أو ترغب في الاستثمار في سوق العقارات التركي، يمنحك المشروع خيارات متنوعة تساعدك على اختيار العقار المناسب لأهدافك.",
      "Whether you want a family home with a complete lifestyle or an investment in the Turkish property market, the project offers a range of options to suit your goals.",
      "İster aileniz için bütünleşik bir yaşam sunan bir ev arayın ister Türk gayrimenkul piyasasına yatırım yapmak isteyin, proje hedeflerinize uygun çeşitli seçenekler sunar.",
    ),
  ],
  cardFacts: [
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("686", "686", "686") },
    { label: t("المساحات", "Sizes", "Büyüklükler"), value: t("86 – 191 م²", "86 – 191 m²", "86 – 191 m²") },
  ],
  facts: [
    { label: t("الموقع", "Location", "Konum"), value: t("بنديك – القسم الآسيوي من إسطنبول", "Pendik – Asian Istanbul", "Pendik – İstanbul Anadolu Yakası") },
    { label: t("مساحة الأرض", "Land area", "Arsa alanı"), value: t("68,000 م²، وفق البيانات المتاحة", "68,000 m², per the available data", "Mevcut verilere göre 68.000 m²") },
    { label: t("عدد الأبنية", "Buildings", "Bina sayısı"), value: t("44 مبنى، وفق البيانات المتاحة", "44 buildings, per the available data", "Mevcut verilere göre 44 bina") },
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("686 شقة، وفق البيانات المتاحة", "686 apartments, per the available data", "Mevcut verilere göre 686 daire") },
    { label: t("أنماط الشقق", "Layouts", "Daire tipleri"), value: t("خيارات متنوعة من 2+1 إلى 4+1، وفق جدول الوحدات والأسعار", "2+1 to 4+1, per the units and prices table", "Birim ve fiyat tablosuna göre 2+1'den 4+1'e") },
    { label: t("المساحات", "Sizes", "Büyüklükler"), value: t("تتراوح بين 86 و191 م²، وفق البيانات السعرية المتاحة", "86 to 191 m², per the available price data", "Mevcut fiyat verilerine göre 86 – 191 m²") },
    { label: t("نسبة المساحة الصافية", "Net-to-gross ratio", "Net alan oranı"), value: t("70%، وفق البيانات المقدمة", "70%, per the data provided", "Verilen bilgilere göre %70") },
  ],
  units: {
    rows: [
      { type: t("2+1", "2+1", "2+1") },
      { type: t("2.5+1", "2.5+1", "2,5+1") },
      { type: t("3+1", "3+1", "3+1") },
      { type: t("3.5+1", "3.5+1", "3,5+1") },
      { type: t("4+1", "4+1", "4+1") },
    ],
  },
  amenities: [
    { title: t("المرافق الرياضية والصحية", "Sports and wellness", "Spor ve sağlık"), items: [t("مسبح داخلي.", "Indoor pool.", "Kapalı yüzme havuzu."), t("صالة لياقة بدنية مجهزة.", "Equipped fitness centre.", "Donanımlı fitness salonu."), t("مرافق المنتجع الصحي.", "Spa facilities.", "Spa olanakları."), t("ساونا ومرافق للاسترخاء.", "Sauna and relaxation facilities.", "Sauna ve dinlenme olanakları.")] },
    { title: t("المساحات الخضراء والترفيه", "Green spaces and leisure", "Yeşil alanlar ve eğlence"), items: [t("مساحات خضراء واسعة.", "Large green spaces.", "Geniş yeşil alanlar."), t("مسارات مخصصة للمشي.", "Walking paths.", "Yürüyüş yolları."), t("مساحات مائية تضفي طابعًا جماليًا على المشروع.", "Water features.", "Projeye estetik katan su öğeleri."), t("مناطق مخصصة للأطفال.", "Children's areas.", "Çocuk alanları."), t("مساحات مفتوحة للاسترخاء والاستمتاع بالأجواء الخارجية.", "Open spaces to relax outdoors.", "Açık havada dinlenme alanları.")] },
    { title: t("الخدمات والأمان", "Services and security", "Hizmetler ve güvenlik"), items: [t("حراسة أمنية على مدار 24 ساعة.", "24-hour security.", "24 saat güvenlik."), t("نظام مراقبة بالكاميرات.", "Camera surveillance.", "Kamera sistemi."), t("مواقف سيارات.", "Parking.", "Otopark."), t("ماركت ومحلات تجارية.", "Market and shops.", "Market ve dükkânlar."), t("تصميم إنشائي موصوف بأنه مقاوم للزلازل، وفق المعلومات المتاحة، مع ضرورة مراجعة الوثائق الفنية للمشروع.", "A structural design described as earthquake-resistant, per the available information; review the project's technical documents.", "Mevcut bilgilere göre depreme dayanıklı olarak tanımlanan yapısal tasarım; projenin teknik belgeleri incelenmelidir.")] },
  ],
  location: {
    title: t("موقع استراتيجي في إسطنبول الآسيوية", "A strategic location in Asian Istanbul", "İstanbul Anadolu Yakası'nda stratejik konum"),
    items: [
      t("إمكانية الوصول إلى مطار صبيحة كوكجن الدولي.", "Access to Sabiha Gökçen International Airport.", "Sabiha Gökçen Uluslararası Havalimanı'na erişim."),
      t("الاتصال بمحاور الطرق الرئيسية في الجانب الآسيوي.", "Connections to the main roads of the Asian side.", "Anadolu Yakası'nın ana yollarına bağlantı."),
      t("الوصول إلى وسائل النقل العام في المنطقة.", "Access to public transport in the area.", "Bölgedeki toplu taşımaya erişim."),
      t("القرب من المرافق التجارية والخدمية المحيطة بينديك.", "Close to the commercial and service facilities around Pendik.", "Pendik çevresindeki ticari ve hizmet olanaklarına yakınlık."),
      t("خيارات من الإطلالات البحرية وإطلالات المدينة وجزر الأميرات.", "Sea, city and Princes' Islands views.", "Deniz, şehir ve Adalar manzarası seçenekleri."),
    ],
  },
  highlights: {
    title: t("لماذا تدرس الاستثمار في المشروع؟", "Why consider investing in the project?", "Neden bu projeye yatırımı değerlendirmelisiniz?"),
    items: [
      t("تنوع أنماط الشقق والمساحات.", "A variety of layouts and sizes.", "Farklı daire tipleri ve büyüklükleri."),
      t("موقع ضمن منطقة حيوية في إسطنبول الآسيوية.", "A location in a lively area of Asian Istanbul.", "İstanbul Anadolu Yakası'nın canlı bir bölgesinde konum."),
      t("مرافق مشتركة تعزز جاذبية السكن.", "Shared facilities that add to the appeal of living there.", "Yaşamı daha cazip kılan ortak olanaklar."),
      t("إمكانية دراسة فرص التأجير وفق نوع الوحدة وسعر شرائها.", "Rental opportunities can be assessed by unit type and purchase price.", "Birim tipine ve alış fiyatına göre kiralama fırsatları incelenebilir."),
      t("خيارات دفع تشمل الدفع النقدي والتقسيط، وفق الخطط المتاحة.", "Cash and instalment options, under the available plans.", "Mevcut planlara göre peşin ve taksitli ödeme seçenekleri."),
      t("يعتمد العائد الاستثماري الفعلي على سعر الشراء والوحدة المختارة والطلب في السوق وتكاليف التملّك والتأجير.", "Actual returns depend on the purchase price, the unit, market demand and ownership and letting costs.", "Gerçek yatırım getirisi; alış fiyatına, seçilen birime, piyasa talebine ve sahiplik ile kiralama maliyetlerine bağlıdır."),
    ],
  },
  payment: {
    items: [
      t("الدفع النقدي: خصم معلن بنسبة 7%، وفق شروط خطة الدفع المعتمدة.", "Cash payment: published discount of 7%, under the approved payment plan.", "Peşin ödeme: onaylı ödeme planı koşullarına göre açıklanan %7 indirim."),
      t("التقسيط المباشر من المطوّر العقاري: دفعة أولى لا تقل عن 50%.", "Direct developer instalments: down payment of at least 50%.", "Geliştiriciden doğrudan taksit: en az %50 peşinat."),
      t("إمكانية التقسيط حتى 36 شهرًا.", "Instalments of up to 36 months.", "36 aya kadar taksit imkânı."),
      t("تشمل الخطة جميع الشقق وفق البيانات المتاحة.", "The plan covers all apartments, per the available data.", "Mevcut verilere göre plan tüm daireleri kapsar."),
    ],
  },
  ownership: [
    t(
      "مناسب للجنسية التركية عن طريق الاستثمار العقاري والإقامة العقارية في تركيا. يمكن للأجانب الذين يتملّكون عقارًا في تركيا التقدم بطلب للحصول على إقامة قصيرة الأجل على أساس التملّك العقاري، وفقًا للشروط والضوابط المعمول بها لدى الجهات المختصة.",
      "Suitable for Turkish citizenship by real estate investment and for property-based residence in Türkiye. Foreigners who own property in Türkiye can apply for a short-term residence permit based on ownership, under the rules of the competent authorities.",
      "Gayrimenkul yatırımı yoluyla Türk vatandaşlığına ve Türkiye'de gayrimenkul ikametine uygundur. Türkiye'de mülk sahibi olan yabancılar, yetkili makamların şartlarına göre mülkiyete dayalı kısa dönem ikamet izni için başvurabilir.",
    ),
  ],
};

// Source: Drive › Landing Page › مشروع باهتشة كينت تيم (Bahçekent TİM) (Google Doc 1VpE1v6QN3hmqMFJpuqjkauOGNjdg24OVynmjDatJaWA)
export const bahcekentTim: Project = {
  slug: "bahcekent-tim",
  name: t("Bahçekent TİM", "Bahçekent TİM", "Bahçekent TİM"),
  district: t("اسنيورت – هو شديري", "Esenyurt – Hoşdere", "Esenyurt – Hoşdere"),
  side: "europe",
  type: "commercial",
  status: "construction",
  area: "esenyurt",
  sourceDoc: "1VpE1v6QN3hmqMFJpuqjkauOGNjdg24OVynmjDatJaWA",
  tagline: t("استثمر في قلب إسطنبول التجاري واللوجستي", "Invest in Istanbul's commercial and logistics heart", "İstanbul'un ticaret ve lojistik kalbine yatırım yapın"),
  chips: [
    t("187 وحدة تجارية", "187 commercial units", "187 ticari birim"),
    t("6 أمتار ارتفاع السقف", "6 m ceiling height", "6 m tavan yüksekliği"),
    t("2.5 طن/م² قدرة تحمّل الأرضيات", "2.5 t/m² floor load", "2,5 ton/m² zemin taşıma kapasitesi"),
  ],
  intro: [
    t(
      "187 وحدة تجارية مصممة للأعمال والتخزين والإنتاج الخفيف، بمواصفات تشغيلية متقدمة وموقع استراتيجي بالقرب من كبرى الشركات، بأسعار تبدأ من 208,250 دولارًا. مساحات مرنة تجمع بين التخزين، وصالات العرض، والمكاتب، والإنتاج الخفيف، لتمنح أعمالك مساحة للنمو.",
      "187 commercial units designed for business, storage and light production, with advanced operating specifications and a strategic location near major companies, from $208,250. Flexible spaces combine storage, showrooms, offices and light production to give your business room to grow.",
      "İş, depolama ve hafif üretim için tasarlanmış, gelişmiş operasyonel özelliklere ve büyük şirketlere yakın stratejik bir konuma sahip, 208.250 dolardan başlayan fiyatlarla 187 ticari birim. Depolama, showroom, ofis ve hafif üretimi bir araya getiren esnek alanlar işinize büyüme alanı sağlar.",
    ),
    t(
      "يمتد المشروع على أرض تبلغ مساحتها 30,000 م²، بإجمالي مساحة بناء يصل إلى 90,000 م²، ويُطوَّر بالشراكة بين Hasanoğlu Şirketler Grubu وÇiftçi Modern Yapı، مع التركيز على توفير بنية تحتية تساعد الشركات على تنظيم عملياتها والاستفادة من المساحات بكفاءة.",
      "The project stands on 30,000 m² of land with up to 90,000 m² of built area and is developed by Hasanoğlu Şirketler Grubu and Çiftçi Modern Yapı, with infrastructure that helps companies organise operations and use space efficiently.",
      "30.000 m² arazi üzerinde 90.000 m²'ye varan toplam inşaat alanına sahip proje, Hasanoğlu Şirketler Grubu ve Çiftçi Modern Yapı ortaklığında geliştirilmekte olup şirketlerin operasyonlarını düzenlemesine ve alanı verimli kullanmasına yardımcı bir altyapı sunar.",
    ),
  ],
  priceFrom: { amount: 208250, currency: "USD" },
  cardFacts: [
    { label: t("الوحدات التجارية", "Commercial units", "Ticari birimler"), value: t("187", "187", "187") },
    { label: t("موعد التسليم المعلن", "Stated delivery", "Açıklanan teslim"), value: t("30 مارس 2030", "30 March 2030", "30 Mart 2030") },
  ],
  facts: [
    { label: t("الموقع", "Location", "Konum"), value: t("اسنيورت، ضمن نطاق هو شديري، على شارع مرسيدس وبالقرب من طريق TEM", "Esenyurt, Hoşdere area, on Mercedes Street near the TEM", "Esenyurt, Hoşdere bölgesi, Mercedes Caddesi üzerinde, TEM'e yakın") },
    { label: t("مساحة الأرض", "Land area", "Arsa alanı"), value: t("30,000 م²", "30,000 m²", "30.000 m²") },
    { label: t("إجمالي مساحة البناء", "Total built area", "Toplam inşaat alanı"), value: t("يصل إلى 90,000 م²", "Up to 90,000 m²", "90.000 m²'ye kadar") },
    { label: t("الوحدات", "Units", "Birimler"), value: t("187 وحدة تجارية", "187 commercial units", "187 ticari birim") },
    { label: t("المطوّرون", "Developers", "Geliştiriciler"), value: t("Hasanoğlu Şirketler Grubu وÇiftçi Modern Yapı", "Hasanoğlu Şirketler Grubu and Çiftçi Modern Yapı", "Hasanoğlu Şirketler Grubu ve Çiftçi Modern Yapı") },
    { label: t("ارتفاع السقف", "Ceiling height", "Tavan yüksekliği"), value: t("يصل إلى 6 أمتار", "Up to 6 m", "6 metreye kadar") },
    { label: t("قدرة تحمّل الأرضيات", "Floor load capacity", "Zemin taşıma kapasitesi"), value: t("تصل إلى 2.5 طن/م²، وفق المواصفات المقدمة", "Up to 2.5 t/m², per the specifications provided", "Verilen şartnameye göre 2,5 ton/m²'ye kadar") },
    { label: t("القدرة الكهربائية", "Electrical capacity", "Elektrik kapasitesi"), value: t("قدرة إجمالية معلنة تبلغ 7,263 كيلوواط", "Stated total capacity of 7,263 kW", "Açıklanan toplam kapasite 7.263 kW") },
    { label: t("التسليم", "Handover", "Teslim şekli"), value: t("نظام Shell & Core، دون تشطيبات داخلية مكتملة", "Shell & Core, without complete interior finishes", "Shell & Core; iç mekân bitişleri tamamlanmamış") },
    { label: t("موعد التسليم المعلن", "Stated delivery date", "Açıklanan teslim tarihi"), value: t("30 مارس 2030", "30 March 2030", "30 Mart 2030") },
  ],
  units: {
    rows: [
      { type: t("صغيرة", "Small", "Küçük"), area: t("119 – 250 م²", "119 – 250 m²", "119 – 250 m²"), count: t("57", "57", "57") },
      { type: t("متوسطة", "Medium", "Orta"), area: t("250 – 350 م²", "250 – 350 m²", "250 – 350 m²"), count: t("96", "96", "96") },
      { type: t("كبيرة", "Large", "Büyük"), area: t("300 – 500 م²", "300 – 500 m²", "300 – 500 m²"), count: t("27", "27", "27") },
      { type: t("عملاقة", "Extra large", "Çok büyük"), area: t("500 – 1,274 م²", "500 – 1,274 m²", "500 – 1.274 m²"), count: t("7", "7", "7") },
    ],
    note: t("أسعار البداية: من 208,250 دولارًا. الوحدات العملاقة قد تتجاوز أسعارها 2,229,500 دولار، وفق البيانات المقدمة.", "Starting prices: from $208,250. Extra-large units may exceed $2,229,500, per the data provided.", "Başlangıç fiyatları: 208.250 dolardan. Verilen bilgilere göre çok büyük birimlerin fiyatı 2.229.500 doları aşabilir."),
  },
  sections: [
    {
      title: t("مواصفات تناسب الاستخدامات التجارية والصناعية", "Specifications for commercial and industrial use", "Ticari ve endüstriyel kullanıma uygun özellikler"),
      items: [
        t("ارتفاع سقف يصل إلى 6 أمتار، يتيح دراسة حلول التخزين الرأسي أو إنشاء ميزانين وفق الموافقات الفنية.", "Ceiling height of up to 6 m, allowing vertical storage or a mezzanine subject to technical approvals.", "6 metreye varan tavan yüksekliği; teknik onaylara göre dikey depolama veya asma kat imkânı."),
        t("صُمّم المشروع لتسهيل حركة الشاحنات بين الطوابق والوصول إلى بوابات الشحن الخاصة بالوحدات.", "Designed for truck movement between floors and access to each unit's loading doors.", "Katlar arasında kamyon hareketini ve birimlerin yükleme kapılarına erişimi kolaylaştıracak şekilde tasarlandı."),
        t("تُسلَّم الوحدات بنظام Shell & Core، ما يتيح للمشتري تخطيط المساحة وتجهيزها بما يتوافق مع طبيعة نشاطه، مع الالتزام بالاشتراطات الفنية والتنظيمية.", "Units are delivered Shell & Core, so buyers can plan and fit out the space for their activity within technical and regulatory requirements.", "Birimler Shell & Core olarak teslim edilir; alıcı, teknik ve mevzuat şartlarına uyarak alanı faaliyetine göre planlayıp donatabilir."),
      ],
    },
    {
      title: t("كيف يمكنك الاستفادة من وحدتك؟", "How can you use your unit?", "Biriminizi nasıl değerlendirebilirsiniz?"),
      items: [
        t("شغّل نشاطك التجاري: مقر لشركتك أو صالة عرض أو مستودع أو ورشة للإنتاج الخفيف، بحسب الترخيص المعتمد لكل وحدة.", "Run your business: a head office, showroom, warehouse or light-production workshop, depending on each unit's licence.", "İşinizi yürütün: her birimin ruhsatına göre şirket merkezi, showroom, depo veya hafif üretim atölyesi."),
        t("وسّع أعمالك: تنظيم التخزين والتوزيع والعمليات التشغيلية ضمن موقع واحد.", "Grow your business: storage, distribution and operations in one place.", "İşinizi büyütün: depolama, dağıtım ve operasyonları tek bir yerde düzenleyin."),
        t("استثمر في العقار التجاري: امتلاك وحدة تجارية قد يتيح لك فرصة تأجيرها لشركة أو نشاط مناسب، وفق الطلب في السوق وشروط الاستخدام والتأجير.", "Invest in commercial property: a unit may be let to a suitable company, depending on market demand and the conditions of use and letting.", "Ticari gayrimenkule yatırım yapın: bir birim, piyasa talebine ve kullanım ile kiralama koşullarına göre uygun bir şirkete kiralanabilir."),
        t("وتعتمد الجدوى الاستثمارية على سعر الشراء، وتكاليف التجهيز والتشغيل، والطلب الفعلي على الإيجار، ومصاريف الملكية؛ لذلك يُنصح بتقييم كل وحدة بصورة مستقلة قبل اتخاذ القرار.", "Viability depends on the purchase price, fit-out and running costs, actual rental demand and ownership costs, so each unit should be assessed on its own.", "Yatırımın fizibilitesi; alış fiyatına, donatım ve işletme maliyetlerine, gerçek kira talebine ve sahiplik giderlerine bağlıdır; bu nedenle her birim ayrı değerlendirilmelidir."),
      ],
    },
  ],
  amenities: [
    { title: t("خدمات وبنية تحتية حديثة", "Modern services and infrastructure", "Modern hizmetler ve altyapı"), items: [t("أنظمة طاقة شمسية.", "Solar energy systems.", "Güneş enerjisi sistemleri."), t("نقاط شحن للسيارات الكهربائية.", "Electric-vehicle charging points.", "Elektrikli araç şarj noktaları."), t("نظام تكييف مركزي VRF.", "Central VRF air conditioning.", "Merkezi VRF klima sistemi."), t("حراسة وكاميرات مراقبة على مدار الساعة.", "24-hour security and cameras.", "24 saat güvenlik ve kameralar."), t("مولدات كهربائية احتياطية.", "Backup generators.", "Yedek jeneratörler.")] },
  ],
  location: {
    title: t("بالقرب من محاور النقل والشركات الكبرى", "Near transport links and major companies", "Ulaşım akslarına ve büyük şirketlere yakın"),
    items: [
      t("طريق E-80 / TEM: بالقرب من المشروع.", "E-80 / TEM: near the project.", "E-80 / TEM: projeye yakın."),
      t("مطار إسطنبول الدولي: نحو 35–45 كم، وفق المسار.", "Istanbul Airport: about 35–45 km, depending on the route.", "İstanbul Havalimanı: güzergâha göre yaklaşık 35–45 km."),
      t("Baykar Technology: ضمن نطاق الشركات المذكورة بالقرب من المشروع.", "Baykar Technology: among the companies mentioned near the project.", "Baykar Technology: projeye yakın olarak belirtilen şirketler arasında."),
      t("Mercedes-Benz: بالقرب من مرافق الشركة ومركزها البحثي المشار إليهما في بيانات المشروع.", "Mercedes-Benz: near the company's facilities and research centre mentioned in the project data.", "Mercedes-Benz: proje verilerinde belirtilen tesislerine ve Ar-Ge merkezine yakın."),
      t("Trendyol وBİM: بالقرب من مستودعات ومرافق لوجستية مرتبطة بهما وفق المعلومات المقدمة.", "Trendyol and BİM: near related warehouses and logistics facilities, per the information provided.", "Trendyol ve BİM: verilen bilgilere göre bunlara bağlı depo ve lojistik tesislerine yakın."),
    ],
  },
  payment: {
    items: [
      t("أسعار البداية: من 208,250 دولارًا.", "Starting prices: from $208,250.", "Başlangıç fiyatları: 208.250 dolardan."),
      t("خطة الدفع: تُحدّد وفق الخطة المعتمدة من المطوّر والوحدة المختارة.", "Payment plan: set by the developer's approved plan and the chosen unit.", "Ödeme planı: geliştiricinin onaylı planına ve seçilen birime göre belirlenir."),
      t("موعد التسليم المعلن في البيانات المقدمة هو 30 مارس 2030، ويجب تأكيده من العقد والمستندات الرسمية للمشروع.", "The stated delivery date is 30 March 2030; confirm it in the contract and official project documents.", "Verilen bilgilerde açıklanan teslim tarihi 30 Mart 2030'dur; sözleşme ve resmî proje belgelerinden teyit edilmelidir."),
    ],
  },
};
