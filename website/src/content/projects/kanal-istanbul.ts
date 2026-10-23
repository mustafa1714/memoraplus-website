import { t, type Project } from "./types";

// Source: Drive › Landing Page › مشروع قناة إسطنبول المائية ومدينة يني شهير (Yenişehir) (Google Doc 1DGRUER1zF6ohwTf_rPHf6YsBPPof-n3ajG1GmgWDrp0).
// Shown as a general project / investment opportunity at the company's request (23 Oct 2026). Wording follows the doc; no images supplied.
export const kanalIstanbul: Project = {
  slug: "kanal-istanbul-yenisehir",
  name: t("قناة إسطنبول ومدينة يني شهير", "Kanal Istanbul & Yenişehir", "Kanal İstanbul ve Yenişehir"),
  district: t("أرناؤوط كوي وما حولها", "Arnavutköy and surroundings", "Arnavutköy ve çevresi"),
  side: "europe",
  type: "investment",
  status: null,
  area: "kanal",
  mapQuery: "Kanal İstanbul, Arnavutköy, İstanbul",
  sourceDoc: "1DGRUER1zF6ohwTf_rPHf6YsBPPof-n3ajG1GmgWDrp0",
  tagline: t(
    "يمثل مشروع قناة إسطنبول المائية ومدينة يني شهير معاً أضخم تطلّع استثماري وعمراني في تاريخ تركيا الحديث.",
    "Together, the Kanal Istanbul waterway and the city of Yenişehir represent the largest investment and urban ambition in modern Turkish history.",
    "Kanal İstanbul su yolu ve Yenişehir şehri birlikte, modern Türkiye tarihinin en büyük yatırım ve kentsel hedefini temsil ediyor.",
  ),
  chips: [
    t("مشروع عام", "General project", "Genel proje"),
    t("فرصة للاستثمار العقاري", "Real estate investment opportunity", "Gayrimenkul yatırım fırsatı"),
  ],
  intro: [
    t(
      "قناة إسطنبول ممر مائي اصطناعي يجري التخطيط له وشقّه في الجانب الأوروبي من المدينة، ليكون بديلاً استراتيجياً لمضيق البوسفور الطبيعي.",
      "Kanal Istanbul is an artificial waterway being planned and dug on the European side of the city as a strategic alternative to the natural Bosphorus strait.",
      "Kanal İstanbul, şehrin Avrupa Yakası'nda planlanan ve açılmakta olan, doğal İstanbul Boğazı'na stratejik bir alternatif olacak yapay bir su yoludur.",
    ),
    t(
      "يني شهير هي الحاضنة العمرانية الضخمة التي يجري تأسيسها على جانبي القناة. صُممت لتكون مدينة ذكية حديثة تستوعب نحو 500 ألف نسمة، وتخفف الكثافة السكانية عن مركز إسطنبول القديم.",
      "Yenişehir is the large urban setting being founded on both banks of the canal — designed as a modern smart city for about 500,000 people that eases population density in old central Istanbul.",
      "Yenişehir, kanalın iki yakasında kurulmakta olan büyük kentsel alandır; yaklaşık 500 bin kişiyi barındıracak ve eski İstanbul merkezindeki nüfus yoğunluğunu azaltacak modern bir akıllı şehir olarak tasarlanmıştır.",
    ),
  ],
  cardFacts: [
    { label: t("طول القناة", "Canal length", "Kanal uzunluğu"), value: t("45 كيلومتراً", "45 km", "45 km") },
    { label: t("مساحة يني شهير", "Yenişehir area", "Yenişehir alanı"), value: t("453 مليون م²", "453 million m²", "453 milyon m²") },
  ],
  facts: [
    { label: t("الطول", "Length", "Uzunluk"), value: t("45 كيلومتراً", "45 km", "45 km") },
    { label: t("العمق", "Depth", "Derinlik"), value: t("20.75 – 25 متراً", "20.75 – 25 m", "20,75 – 25 m") },
    { label: t("العرض عند السطح", "Surface width", "Yüzey genişliği"), value: t("275 – 360 متراً", "275 – 360 m", "275 – 360 m") },
    { label: t("الطاقة الاستيعابية", "Capacity", "Kapasite"), value: t("حوالي 160 سفينة يومياً", "About 160 ships a day", "Günde yaklaşık 160 gemi") },
    { label: t("الافتتاح المستهدف", "Target opening", "Hedeflenen açılış"), value: t("بالكامل بحلول 2029 – 2030", "Fully by 2029 – 2030", "Tamamen 2029 – 2030'a kadar") },
    { label: t("مساحة يني شهير", "Yenişehir area", "Yenişehir alanı"), value: t("453 مليون متر مربع", "453 million m²", "453 milyon m²") },
    { label: t("السكان المستهدفون", "Planned population", "Hedeflenen nüfus"), value: t("نحو 500 ألف نسمة", "About 500,000 people", "Yaklaşık 500 bin kişi") },
  ],
  sections: [
    {
      title: t("أولاً: قناة إسطنبول الجديدة (مشروع القرن)", "First: the new Kanal Istanbul (the project of the century)", "Birincisi: yeni Kanal İstanbul (yüzyılın projesi)"),
      paragraphs: [
        t(
          "المسار الجغرافي: تبدأ القناة جنوباً من بحيرة كوتشوك تشكمجه (على بحر مرمرة)، وتمر بمقاطعة سازلي ديري، ثم تتجه شمالاً عبر منطقة أرناؤوط كوي لتنتهي عند البحر الأسود.",
          "Route: the canal starts in the south at Lake Küçükçekmece (on the Sea of Marmara), passes through Sazlıdere, then heads north through Arnavutköy to end at the Black Sea.",
          "Güzergâh: kanal güneyde Küçükçekmece Gölü'nden (Marmara Denizi) başlar, Sazlıdere'den geçer, ardından kuzeye Arnavutköy üzerinden ilerleyerek Karadeniz'de son bulur.",
        ),
        t(
          "الوضع الحالي والافتتاح: انطلق المشروع رسمياً بوضع حجر الأساس لأول جسور هي (جسر ساز يدري)، ومن المستهدف افتتاحه بالكامل بحلول 2029 – 2030.",
          "Current status: the project officially started with the foundation stone of its first bridge (Sazlıdere Bridge), and it is targeted to open fully by 2029 – 2030.",
          "Mevcut durum: proje, ilk köprüsünün (Sazlıdere Köprüsü) temel atmasıyla resmen başladı; tamamen 2029 – 2030'a kadar açılması hedefleniyor.",
        ),
      ],
      items: [
        t("الهدف: تخفيف الضغط الملاحي الهائل عن مضيق البوسفور.", "Aim: relieve the heavy shipping pressure on the Bosphorus.", "Amaç: İstanbul Boğazı üzerindeki yoğun deniz trafiği baskısını azaltmak."),
        t("الهدف: تقليل فترات انتظار السفن الشاحنة.", "Aim: reduce waiting times for cargo ships.", "Amaç: yük gemilerinin bekleme sürelerini kısaltmak."),
        t("الهدف: تجنب مخاطر ناقلات النفط والمواد الخطرة وسط المناطق السكنية المكتظة.", "Aim: avoid the risks of oil and hazardous-cargo tankers passing through crowded residential areas.", "Amaç: petrol ve tehlikeli madde tankerlerinin kalabalık yerleşim alanlarından geçişinin risklerini önlemek."),
      ],
    },
    {
      title: t("ثانياً: أراضي «يني شهير» (المدينة الجديدة)", "Second: the Yenişehir lands (the new city)", "İkincisi: Yenişehir arazileri (yeni şehir)"),
      paragraphs: [
        t(
          "الموقع والمساحة: المساحة 453 مليون متر مربع، أغلبها ضمن بلدية أرناؤوط كوي (الحصة الأكبر)، وتمس أطراف بلديات باشاك شهير وكوتشوك تشكمجة وافجلار.",
          "Location and area: 453 million m², mostly within Arnavutköy municipality (the largest share), touching the edges of Başakşehir, Küçükçekmece and Avcılar.",
          "Konum ve alan: 453 milyon m²; büyük bölümü Arnavutköy belediyesi sınırlarında, Başakşehir, Küçükçekmece ve Avcılar belediyelerinin kenarlarına da dokunuyor.",
        ),
        t("المخطط التنظيمي: المدينة مقسمة إلى عدة مراحل تنظيمية، وتشمل:", "Zoning plan: the city is divided into several planning phases, including:", "İmar planı: şehir birkaç imar etabına ayrılmıştır ve şunları içerir:"),
      ],
      items: [
        t("مناطق سكنية: بمستويات بناء منخفضة ومتوسطة الارتفاع، بطابع الفلل والمجمعات الحديثة لمقاومة الزلازل.", "Residential areas: low- and mid-rise buildings in the style of villas and modern complexes, for earthquake resistance.", "Konut alanları: depreme dayanıklılık için villa ve modern site tarzında az ve orta katlı yapılar."),
        t("مناطق تجارية: مراكز لوجستية عالمية، فنادق، وقاعات مؤتمرات كبرى.", "Commercial areas: global logistics centres, hotels and major conference halls.", "Ticari alanlar: küresel lojistik merkezleri, oteller ve büyük kongre salonları."),
        t("مساحات خضراء: حدائق ترفيهية شاسعة تحيط بضفاف القناة، لتشكل كورنيشاً بحرياً فخماً يضاهي البوسفور.", "Green spaces: vast leisure parks along the canal banks, forming a fine waterfront promenade to rival the Bosphorus.", "Yeşil alanlar: kanal kıyılarını çevreleyen geniş rekreasyon parkları; Boğaz'a rakip zarif bir sahil şeridi oluşturacak."),
      ],
    },
  ],
  highlights: {
    title: t("لماذا تُعد أراضي يني شهير فرصة استثمارية ذهبية؟", "Why are the Yenişehir lands a golden investment opportunity?", "Yenişehir arazileri neden altın bir yatırım fırsatı?"),
    items: [
      t(
        "الارتفاع المتلاحق للأسعار: مع صدور المخططات التنظيمية وبدء أعمال البنية التحتية، شهدت أسعار الأراضي في أرناؤوط كوي وباشاك شهير طفرات سعرية متتالية، وتُعد من الأعلى نمواً في قيمتها السوقية داخل تركيا.",
        "Rising prices: with the zoning plans issued and infrastructure work under way, land prices in Arnavutköy and Başakşehir have seen successive jumps and are among the fastest-growing in market value in Türkiye.",
        "Art arda yükselen fiyatlar: imar planlarının yayımlanması ve altyapı çalışmalarının başlamasıyla Arnavutköy ve Başakşehir'de arsa fiyatları art arda sıçramalar yaşadı; piyasa değeri Türkiye'de en hızlı artanlar arasında.",
      ),
      t(
        "تنوع التنظيم (الرخص): أراضٍ سكنية (İmar) جاهزة للبناء الفوري ضمن المخطط، وأراضٍ تجارية، وأراضٍ زراعية (Tarla) ينتظر المستثمرون تحويل تنظيمها لترتفع قيمتها أضعافاً.",
        "Zoning variety: residential land (İmar) ready for immediate building within the plan, commercial land, and agricultural land (Tarla) whose investors await rezoning for its value to multiply.",
        "İmar çeşitliliği: plan dahilinde hemen inşaata hazır konut arsaları (İmar), ticari arsalar ve imar değişikliğiyle değerinin katlanmasını bekleyen tarım arazileri (Tarla).",
      ),
      t(
        "الجنسية التركية والأمان القانوني: شراء هذه الأراضي صالح للتقديم على الجنسية التركية، بشرط استيفاء الحد الأدنى للتقييم العقاري وهو 400 ألف دولار. وتصدر السندات العقارية (الطابو) بشكل قانوني وآمن.",
        "Turkish citizenship and legal security: buying this land is valid for a Turkish citizenship application, provided the minimum valuation of US$400,000 is met. Title deeds (tapu) are issued legally and securely.",
        "Türk vatandaşlığı ve hukuki güvence: bu arazilerin satın alınması, 400 bin dolarlık asgari ekspertiz değerinin karşılanması şartıyla Türk vatandaşlığı başvurusu için geçerlidir. Tapular yasal ve güvenli şekilde düzenlenir.",
      ),
      t(
        "القرب من المشاريع العملاقة: تقع المنطقة مباشرة بجوار مطار إسطنبول الدولي الجديد وشبكة الطرق السريعة الدولية الحيوية، مثل (TEM) والطريق الشمالي الموازي، مما يجعلها المركز اللوجستي المستقبلي لأوروبا.",
        "Close to mega-projects: the area sits right next to the new Istanbul Airport and key international motorways such as the TEM and the parallel northern motorway, making it Europe's future logistics hub.",
        "Mega projelere yakınlık: bölge, yeni İstanbul Havalimanı'nın ve TEM ile paralel kuzey otoyolu gibi önemli uluslararası otoyolların hemen yanında yer alıyor; bu da onu Avrupa'nın gelecekteki lojistik merkezi yapıyor.",
      ),
    ],
  },
};
