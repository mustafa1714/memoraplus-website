import { t, type Project } from "./types";

// Source: Drive › Landing Page › Başakşehir Avrasya Konutları Cadde (Google Doc 1TbKGm5NCcVfAf4L4gKIHt4skm1xLqb9QnU-L-fbtU9o)
export const basaksehirAvrasya: Project = {
  slug: "basaksehir-avrasya-konutlari-cadde",
  name: t("Başakşehir Avrasya Konutları Cadde", "Başakşehir Avrasya Konutları Cadde", "Başakşehir Avrasya Konutları Cadde"),
  district: t("إيكيتلي – باشاك شهير", "İkitelli – Başakşehir", "İkitelli – Başakşehir"),
  side: "europe",
  type: "residential",
  status: null,
  area: "basaksehir",
  sourceDoc: "1TbKGm5NCcVfAf4L4gKIHt4skm1xLqb9QnU-L-fbtU9o",
  tagline: t("استثمارك في باشاك شهير… بثقة الشراكة الحكومية", "Your investment in Başakşehir, backed by a public-sector partnership", "Başakşehir'deki yatırımınız, kamu ortaklığının güveniyle"),
  intro: [
    t(
      "في منطقة باشاك شهير (Başakşehir)، إحدى المناطق الحديثة والمتنامية في إسطنبول الأوروبية، يأتي مشروع Başakşehir Avrasya Konutları Cadde بشراكة تجمع بين Emlak Konut GYO، إحدى أكبر شركات التطوير والاستثمار العقاري ذات الصلة بالقطاع الحكومي في تركيا، وشركة Fuzul GYO العقارية.",
      "In Başakşehir, one of the modern, growing districts of European Istanbul, Başakşehir Avrasya Konutları Cadde is a partnership between Emlak Konut GYO — one of Türkiye's largest public-sector-linked real estate developers and investors — and Fuzul GYO.",
      "İstanbul Avrupa Yakası'nın modern ve gelişen bölgelerinden Başakşehir'de yer alan Başakşehir Avrasya Konutları Cadde, Türkiye'nin kamuyla bağlantılı en büyük gayrimenkul geliştirme ve yatırım şirketlerinden Emlak Konut GYO ile Fuzul GYO'nun ortaklığıyla hayata geçiyor.",
    ),
    t(
      "يمثل المشروع فرصة للراغبين في التملّك ضمن مجمع سكني يجمع بين الشقق العصرية، والمحلات التجارية، والمرافق الاجتماعية، وموقع قريب من المراكز الطبية وشبكات النقل والطرق الرئيسية.",
      "It offers buyers a residential complex that combines modern apartments, shops and social facilities, close to medical centres, transport networks and main roads.",
      "Proje; modern daireleri, ticari birimleri ve sosyal olanakları bir araya getiren, sağlık merkezlerine, ulaşım ağlarına ve ana yollara yakın bir sitede mülk edinme fırsatı sunuyor.",
    ),
    t(
      "يمتد المشروع على أرض تبلغ مساحتها نحو 22,310 م²، ويضم وحدات سكنية وتجارية ضمن تصميم معماري يراعي احتياجات الحياة العائلية العصرية.",
      "The project stands on about 22,310 m² of land and includes residential and commercial units in an architectural design that considers the needs of modern family life.",
      "Yaklaşık 22.310 m² arazi üzerine kurulu proje, modern aile yaşamının ihtiyaçlarını gözeten bir mimariyle konut ve ticari birimlerden oluşuyor.",
    ),
  ],
  cardFacts: [
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("427", "427", "427") },
    { label: t("الأنماط", "Layouts", "Daire tipleri"), value: t("1+1 – 4+1", "1+1 – 4+1", "1+1 – 4+1") },
  ],
  facts: [
    { label: t("الموقع", "Location", "Konum"), value: t("إيكيتلي – باشاك شهير، القسم الأوروبي من إسطنبول", "İkitelli – Başakşehir, European Istanbul", "İkitelli – Başakşehir, İstanbul Avrupa Yakası") },
    { label: t("الشراكة", "Partnership", "Ortaklık"), value: t("Emlak Konut GYO وFuzul GYO", "Emlak Konut GYO and Fuzul GYO", "Emlak Konut GYO ve Fuzul GYO") },
    { label: t("مساحة الأرض", "Land area", "Arsa alanı"), value: t("22,310 م² تقريبًا", "About 22,310 m²", "Yaklaşık 22.310 m²") },
    { label: t("عدد الأبنية", "Buildings", "Bina sayısı"), value: t("6 أبنية سكنية", "6 residential buildings", "6 konut binası") },
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("427 شقة", "427 apartments", "427 daire") },
    { label: t("الوحدات التجارية", "Commercial units", "Ticari birimler"), value: t("25 محلًا تجاريًا", "25 shops", "25 dükkân") },
    { label: t("ارتفاعات الأبنية", "Building heights", "Bina yükseklikleri"), value: t("أرضي + 9 طوابق وفق البيانات التعريفية للمشروع", "Ground + 9 floors, per the project data sheet", "Proje tanıtım verilerine göre zemin + 9 kat") },
    { label: t("أنماط الشقق", "Layouts", "Daire tipleri"), value: t("1+1، 2+1، 3+1، 4+1", "1+1, 2+1, 3+1, 4+1", "1+1, 2+1, 3+1, 4+1") },
  ],
  units: {
    rows: [
      { type: t("1+1", "1+1", "1+1"), area: t("تبدأ من 56 م² تقريبًا", "From about 56 m²", "Yaklaşık 56 m²'den başlayan") },
      { type: t("2+1", "2+1", "2+1"), area: t("76 – 109 م²", "76 – 109 m²", "76 – 109 m²") },
      { type: t("3+1", "3+1", "3+1"), area: t("116 – 148 م²", "116 – 148 m²", "116 – 148 m²") },
      { type: t("4+1", "4+1", "4+1"), area: t("171 – 192 م²", "171 – 192 m²", "171 – 192 m²") },
    ],
  },
  sections: [
    {
      title: t("عرض تملّك خاص: شقتان 2+1", "Special offer: two 2+1 apartments", "Özel teklif: iki adet 2+1 daire"),
      paragraphs: [
        t(
          "تتوفر، وفق عرض الأسعار المقدم بتاريخ 5 أغسطس 2026، باقة تضم شقتين من نمط 2+1، بإجمالي سعر نقدي قدره 426,800 دولار أمريكي قبل إضافة الضريبة ورسوم الطابو.",
          "According to the price offer dated 5 August 2026, a package of two 2+1 apartments is available at a total cash price of US$426,800 before tax and title-deed fees.",
          "5 Ağustos 2026 tarihli fiyat teklifine göre, vergi ve tapu harçları hariç toplam 426.800 ABD doları peşin fiyatla iki adet 2+1 daireden oluşan bir paket mevcuttur.",
        ),
      ],
      rows: [
        { label: t("الشقة الأولى", "First apartment", "Birinci daire"), value: t("B1-68 · 2+1A · الطابق التاسع · شرقي · إجمالي 75.83 م² · صافي 55.75 م² · 213,400 دولار", "B1-68 · 2+1A · 9th floor · east · gross 75.83 m² · net 55.75 m² · $213,400", "B1-68 · 2+1A · 9. kat · doğu · brüt 75,83 m² · net 55,75 m² · 213.400 $") },
        { label: t("الشقة الثانية", "Second apartment", "İkinci daire"), value: t("B2-13 · 2+1A · الطابق الثاني · جنوب شرقي · إجمالي 75.83 م² · صافي 55.75 م² · 213,400 دولار", "B2-13 · 2+1A · 2nd floor · south-east · gross 75.83 m² · net 55.75 m² · $213,400", "B2-13 · 2+1A · 2. kat · güneydoğu · brüt 75,83 m² · net 55,75 m² · 213.400 $") },
        { label: t("إجمالي المساحة الإجمالية", "Total gross area", "Toplam brüt alan"), value: t("151.66 م²", "151.66 m²", "151,66 m²") },
        { label: t("إجمالي المساحة الصافية", "Total net area", "Toplam net alan"), value: t("111.50 م²", "111.50 m²", "111,50 m²") },
        { label: t("السعر النقدي للشقتين", "Cash price for both", "İki dairenin peşin fiyatı"), value: t("426,800 دولار", "$426,800", "426.800 $") },
        { label: t("الضريبة ورسوم الطابو وفق العرض", "Tax and title-deed fees per the offer", "Teklife göre vergi ve tapu harçları"), value: t("12,804 دولار", "$12,804", "12.804 $") },
        { label: t("الإجمالي المطلوب وفق العرض", "Total per the offer", "Teklife göre toplam"), value: t("439,604 دولار", "$439,604", "439.604 $") },
      ],
      items: [
        t("شراء شقتين 2+1 ضمن باقة واحدة.", "Two 2+1 apartments in one package.", "Tek pakette iki adet 2+1 daire."),
        t("سعر الباقة يبدأ من 420,000 دولار أمريكي وفق العرض المعلن، مع اختلاف السعر بحسب الوحدات.", "Package prices from US$420,000 per the published offer; the price varies by unit.", "Açıklanan teklife göre paket fiyatı 420.000 ABD dolarından başlar; fiyat daireye göre değişir."),
        t("خدمات قانونية مجانية وفق شروط العرض.", "Free legal services under the offer terms.", "Teklif koşullarına göre ücretsiz hukuki hizmet."),
        t("الطابو جاهز في بيانات العرض.", "Title deed ready, per the offer data.", "Teklif verilerine göre tapu hazır."),
      ],
    },
    {
      title: t("ميزة استثمارية مهمة: الشراكة مع Emlak Konut GYO", "A key strength: the partnership with Emlak Konut GYO", "Önemli bir avantaj: Emlak Konut GYO ortaklığı"),
      paragraphs: [
        t(
          "تُعد Emlak Konut GYO من أكبر مؤسسات التطوير والاستثمار العقاري المرتبطة بالقطاع الحكومي في تركيا، وهي الجهة المالكة للأرض وفق البيانات الرسمية للمشروع، فيما تشارك Fuzul GYO في تطوير المشروع وفق نموذج تقاسم الإيرادات.",
          "Emlak Konut GYO is one of Türkiye's largest public-sector-linked real estate development and investment institutions and, according to the official project data, owns the land, while Fuzul GYO develops the project under a revenue-sharing model.",
          "Emlak Konut GYO, Türkiye'nin kamuyla bağlantılı en büyük gayrimenkul geliştirme ve yatırım kuruluşlarındandır ve resmî proje verilerine göre arsanın sahibidir; Fuzul GYO ise projeyi hasılat paylaşımı modeliyle geliştirmektedir.",
        ),
        t("تمنح هذه الشراكة المشروع قيمة مؤسسية مهمة عند دراسة قرار التملّك.", "This partnership gives the project significant institutional value when considering a purchase.", "Bu ortaklık, satın alma kararında projeye önemli bir kurumsal değer katar."),
      ],
    },
  ],
  location: {
    title: t("أبرز المعالم المحيطة", "Nearby landmarks", "Çevredeki önemli noktalar"),
    items: [
      t("مستشفى باشاك شهير تشام وساكورا: نحو 5 دقائق بالسيارة.", "Başakşehir Çam and Sakura City Hospital: about 5 minutes by car.", "Başakşehir Çam ve Sakura Şehir Hastanesi: araçla yaklaşık 5 dakika."),
      t("محطة المترو: نحو 6 دقائق.", "Metro station: about 6 minutes.", "Metro istasyonu: yaklaşık 6 dakika."),
      t("محطة الحافلات: نحو دقيقتين سيرًا على الأقدام.", "Bus stop: about 2 minutes on foot.", "Otobüs durağı: yürüyerek yaklaşık 2 dakika."),
      t("مطار إسطنبول الدولي: نحو 25 دقيقة بالسيارة.", "Istanbul Airport: about 25 minutes by car.", "İstanbul Havalimanı: araçla yaklaşık 25 dakika."),
      t("مول أوف إسطنبول: نحو 15 دقيقة بالسيارة.", "Mall of Istanbul: about 15 minutes by car.", "Mall of İstanbul: araçla yaklaşık 15 dakika."),
      t("الطرق السريعة TEM وO-7: إمكانية الوصول إليها عبر محاور الطرق المحيطة.", "TEM and O-7 motorways: reachable via the surrounding roads.", "TEM ve O-7 otoyolları: çevre yollar üzerinden erişilebilir."),
    ],
  },
  amenities: [
    { title: t("المرافق الرياضية والصحية", "Sports and wellness", "Spor ve sağlık"), items: [t("مسبح داخلي.", "Indoor pool.", "Kapalı yüzme havuzu."), t("مركز لياقة بدنية مجهز.", "Equipped fitness centre.", "Donanımlı fitness merkezi."), t("حمام تركي.", "Turkish bath.", "Türk hamamı."), t("غرف ساونا.", "Sauna rooms.", "Sauna odaları."), t("غرف بخار.", "Steam rooms.", "Buhar odaları.")] },
    { title: t("المساحات الخارجية والترفيهية", "Outdoor and leisure", "Açık alanlar ve eğlence"), items: [t("مساحات خضراء وحدائق منسقة.", "Green spaces and landscaped gardens.", "Yeşil alanlar ve peyzajlı bahçeler."), t("مسارات للمشي والجري.", "Walking and running paths.", "Yürüyüş ve koşu yolları."), t("مناطق ألعاب مخصصة للأطفال.", "Children's play areas.", "Çocuk oyun alanları."), t("مساحات مشتركة للاسترخاء وقضاء الوقت مع العائلة.", "Shared spaces to relax and spend time with family.", "Dinlenme ve aileyle vakit geçirme için ortak alanlar.")] },
    { title: t("الأمان والخدمات", "Security and services", "Güvenlik ve hizmetler"), items: [t("نظام أمني ومراقبة بالكاميرات على مدار الساعة.", "24-hour security and camera surveillance.", "24 saat güvenlik ve kamera sistemi."), t("مواقف سيارات مغلقة تحت الأرض، وفق البيانات المقدمة.", "Covered underground parking, per the data provided.", "Verilen bilgilere göre kapalı yeraltı otoparkı."), t("25 وحدة تجارية تضم محلات وأنشطة خدمية وفق طبيعة الوحدات المعتمدة.", "25 commercial units with shops and services, according to the approved units.", "Onaylı birimlere göre dükkân ve hizmet işletmelerinden oluşan 25 ticari birim.")] },
  ],
  ownership: [
    t(
      "تتيح القوانين التركية للأجانب إمكانية التقدم للحصول على الجنسية التركية عن طريق الاستثمار العقاري بقيمة مؤهلة لا تقل عن 400,000 دولار أمريكي، مع استيفاء الشروط القانونية، بما فيها توثيق القيمة المؤهلة وقيد عدم بيع العقار لمدة ثلاث سنوات والحصول على الموافقات المطلوبة. يقدم المشروع خيارات سكنية متنوعة، ويمكن دراسة أهلية الوحدات المتاحة لهذا المسار قبل إتمام الشراء.",
      "Turkish law allows foreigners to apply for Turkish citizenship through a real estate investment with a qualifying value of at least US$400,000, subject to the legal requirements — including documenting the qualifying value, a three-year no-sale restriction and the required approvals. The eligibility of available units for this route can be reviewed before completing the purchase.",
      "Türk mevzuatı, yabancıların en az 400.000 ABD doları değerinde uygun bir gayrimenkul yatırımıyla Türk vatandaşlığına başvurmasına izin verir; uygun değerin belgelenmesi, üç yıl satmama şerhi ve gerekli onaylar dahil yasal şartların karşılanması gerekir. Mevcut dairelerin bu yola uygunluğu satın almadan önce incelenebilir.",
    ),
    t(
      "يمكن للأجانب الذين يمتلكون عقارًا سكنيًا في تركيا التقدم بطلب للحصول على إقامة قصيرة الأجل على أساس التملّك العقاري، وفقًا للشروط المعمول بها لدى إدارة الهجرة التركية، وتعتمد إمكانية الحصول على الإقامة على طبيعة العقار وموقعه واستخدامه السكني، إضافة إلى استيفاء متطلبات الطلب والوضع القانوني للمتقدم.",
      "Foreigners who own residential property in Türkiye can apply for a short-term residence permit based on ownership, under the rules of the Turkish migration authority. Eligibility depends on the property's nature, location and residential use, as well as the application requirements and the applicant's legal status.",
      "Türkiye'de konut sahibi olan yabancılar, Göç İdaresi'nin şartlarına göre mülkiyete dayalı kısa dönem ikamet izni için başvurabilir. İkamet imkânı; mülkün niteliğine, konumuna ve konut olarak kullanımına, ayrıca başvuru şartlarına ve başvuranın hukuki durumuna bağlıdır.",
    ),
  ],
};
