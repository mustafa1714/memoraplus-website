import { t, type Project } from "./types";

// Source: Drive › Landing Page › Büyükyalı İstanbul (Google Doc 1c8Vcbe-wwm9RrbSD-jPK5BW5nfUARpbMa33naF2clfI)
export const buyukyali: Project = {
  slug: "buyukyali-istanbul",
  name: t("Büyükyalı Istanbul", "Büyükyalı Istanbul", "Büyükyalı İstanbul"),
  district: t("كازلي تشيشمة – زيتين بورنو", "Kazlıçeşme – Zeytinburnu", "Kazlıçeşme – Zeytinburnu"),
  side: "europe",
  type: "residential",
  status: "ready",
  area: "zeytinburnu",
  sourceDoc: "1c8Vcbe-wwm9RrbSD-jPK5BW5nfUARpbMa33naF2clfI",
  featured: true,
  tagline: t("عِش على ساحل بحر مرمرة، بالقرب من جزر الأمراء والمعالم التاريخية لإسطنبول", "Live on the Sea of Marmara coast, near the Princes' Islands and Istanbul's historic landmarks", "Marmara Denizi kıyısında, Adalar'a ve İstanbul'un tarihî mekânlarına yakın yaşayın"),
  intro: [
    t(
      "مشروع ساحلي مكتمل في قلب زيتين بورنو، وخيارات سكنية متنوعة من الشقق إلى البنتهاوس، مع وحدات جاهزة للتسليم وفق التوافر.",
      "A completed waterfront project in the heart of Zeytinburnu, with homes ranging from apartments to penthouses and units ready to move in, subject to availability.",
      "Zeytinburnu'nun kalbinde tamamlanmış bir sahil projesi; daireden çatı katına farklı konut seçenekleri ve stok durumuna göre teslime hazır birimler.",
    ),
    t(
      "يقع مشروع Büyükyalı Istanbul في منطقة Kazlıçeşme – زيتين بورنو على الساحل الأوروبي لإسطنبول، حيث يلتقي المشهد البحري بروح المدينة التاريخية. يمتد المشروع على مساحة واسعة تضم مباني سكنية ومرافق متنوعة، ويقدّم مفهومًا للحياة الساحلية يجمع بين الخصوصية، والتصميم المعماري، والمساحات المفتوحة، والخدمات اليومية.",
      "Büyükyalı Istanbul sits in Kazlıçeşme – Zeytinburnu on Istanbul's European coast, where the sea meets the spirit of the historic city. The large site combines residential buildings and varied facilities in a coastal lifestyle of privacy, architecture, open space and everyday services.",
      "Büyükyalı İstanbul, İstanbul'un Avrupa kıyısında Kazlıçeşme – Zeytinburnu'nda, deniz manzarasının tarihî şehrin ruhuyla buluştuğu yerde yer alır. Geniş bir alana yayılan proje; mahremiyet, mimari, açık alanlar ve günlük hizmetleri bir araya getiren bir sahil yaşamı sunar.",
    ),
    t(
      "تتنوع الخيارات السكنية بين شقق بمخططات مختلفة ووحدات بنتهاوس، بمساحات معلنة تبدأ من 74 م² وتصل إلى 552 م²، بحسب نوع الوحدة وتوافرها.",
      "Homes range from apartments in different layouts to penthouses, with stated sizes from 74 m² to 552 m² depending on the unit type and availability.",
      "Konut seçenekleri farklı planlardaki dairelerden çatı katlarına uzanır; açıklanan büyüklükler birim tipine ve stoka göre 74 m²'den 552 m²'ye kadardır.",
    ),
  ],
  priceFrom: { amount: 1079000, currency: "USD" },
  cardFacts: [
    { label: t("الوحدات", "Units", "Birim sayısı"), value: t("1,540", "1,540", "1.540") },
    { label: t("نسبة الاكتمال", "Completion", "Tamamlanma"), value: t("100%", "100%", "%100") },
  ],
  facts: [
    { label: t("مساحة المشروع المعلنة", "Stated project area", "Açıklanan proje alanı"), value: t("110,000 م²", "110,000 m²", "110.000 m²") },
    { label: t("المباني", "Buildings", "Binalar"), value: t("15 مبنى", "15 buildings", "15 bina") },
    { label: t("الوحدات", "Units", "Birim sayısı"), value: t("1,540 وحدة", "1,540 units", "1.540 birim") },
    { label: t("نسبة الاكتمال المعلنة", "Stated completion", "Açıklanan tamamlanma"), value: t("100%", "100%", "%100") },
    { label: t("الموقع", "Location", "Konum"), value: t("كازلي تشيشمة، زيتين بورنو، إسطنبول الأوروبية", "Kazlıçeşme, Zeytinburnu, European Istanbul", "Kazlıçeşme, Zeytinburnu, İstanbul Avrupa Yakası") },
    { label: t("المطوّرون", "Developers", "Geliştiriciler"), value: t("شراكة تضم Özak GYO وYenigün İnşaat وZiylan Gayrimenkul", "A partnership of Özak GYO, Yenigün İnşaat and Ziylan Gayrimenkul", "Özak GYO, Yenigün İnşaat ve Ziylan Gayrimenkul ortaklığı") },
    { label: t("الحالة", "Status", "Durum"), value: t("مكتمل وفق البيانات المقدمة", "Completed, per the data provided", "Verilen bilgilere göre tamamlandı") },
    { label: t("أنواع الوحدات", "Unit types", "Birim tipleri"), value: t("شقق وخيارات بنتهاوس وأنواع أخرى بحسب التوافر", "Apartments, penthouses and other types depending on availability", "Stok durumuna göre daireler, çatı katları ve diğer tipler") },
    { label: t("المساحات المعلنة", "Stated sizes", "Açıklanan büyüklükler"), value: t("من 74 م² إلى 552 م²", "74 m² to 552 m²", "74 m² – 552 m²") },
    { label: t("نوع الملكية", "Title type", "Mülkiyet türü"), value: t("يُؤكد من سند الوحدة المحددة", "To be confirmed from the specific unit's title deed", "Seçilen birimin tapusundan teyit edilir") },
  ],
  units: {
    rows: [
      { type: t("2+1", "2+1", "2+1"), area: t("134 – 312 م²", "134 – 312 m²", "134 – 312 m²"), price: t("1,079,000 – 1,740,000 دولار", "$1,079,000 – 1,740,000", "1.079.000 – 1.740.000 $") },
      { type: t("3+1", "3+1", "3+1"), area: t("175 – 344 م²", "175 – 344 m²", "175 – 344 m²"), price: t("1,491,000 – 2,549,000 دولار", "$1,491,000 – 2,549,000", "1.491.000 – 2.549.000 $") },
      { type: t("4+1", "4+1", "4+1"), area: t("227 – 517 م²", "227 – 517 m²", "227 – 517 m²"), price: t("2,192,000 – 3,859,000 دولار", "$2,192,000 – 3,859,000", "2.192.000 – 3.859.000 $") },
      { type: t("فلل / لوفت", "Villas / loft", "Villa / loft"), area: t("376 – 426 م²", "376 – 426 m²", "376 – 426 m²"), price: t("2,433,000 – 3,603,000 دولار", "$2,433,000 – 3,603,000", "2.433.000 – 3.603.000 $") },
    ],
    note: t("الأسعار وفق القائمة المقدمة بتاريخ 09/09/2026، مع اختلاف المساحات والإطلالات والأسعار بحسب الوحدة.", "Prices per the list provided on 09/09/2026; sizes, views and prices vary by unit.", "Fiyatlar 09/09/2026 tarihli listeye göredir; büyüklük, manzara ve fiyat birime göre değişir."),
  },
  payment: {
    items: [
      t("خيارات الدفع: تُراجع وفق العرض الحالي.", "Payment options: reviewed according to the current offer.", "Ödeme seçenekleri: güncel teklife göre belirlenir."),
      t("الخصم النقدي: خصم 10% وفق العرض المقدم، بعد التأكيد.", "Cash discount: 10% per the offer provided, once confirmed.", "Peşin indirimi: teyit sonrası, verilen teklife göre %10."),
      t("الضرائب ورسوم الطابو: تُحدد بالتفصيل في عرض السعر النهائي.", "Taxes and title-deed fees: detailed in the final price offer.", "Vergiler ve tapu harçları: nihai fiyat teklifinde ayrıntılı olarak belirtilir."),
    ],
  },
  sections: [
    {
      title: t("Fişekhane | الثقافة والتسوق على بُعد خطوات", "Fişekhane | culture and shopping steps away", "Fişekhane | kültür ve alışveriş birkaç adım ötede"),
      paragraphs: [
        t(
          "تُعد Fişekhane من أبرز العناصر التي تمنح Büyükyalı طابعًا مختلفًا؛ إذ أُعيد توظيف مبانٍ تاريخية ذات جذور صناعية عثمانية لتصبح وجهة تجمع الثقافة وفنون الطعام والأنشطة الاجتماعية.",
          "Fişekhane is one of the things that sets Büyükyalı apart: historic buildings with Ottoman industrial roots have been repurposed into a destination for culture, food and social life.",
          "Fişekhane, Büyükyalı'yı farklı kılan en önemli unsurlardandır: Osmanlı sanayi mirasına sahip tarihî yapılar yeniden işlevlendirilerek kültür, gastronomi ve sosyal yaşamı buluşturan bir mekâna dönüştürülmüştür.",
        ),
      ],
      items: [
        t("مطاعم ومقاهٍ متنوعة.", "A variety of restaurants and cafés.", "Çeşitli restoran ve kafeler."),
        t("متاجر وتجارب تسوق.", "Shops and shopping experiences.", "Mağazalar ve alışveriş deneyimleri."),
        t("فعاليات ثقافية وفنية.", "Cultural and arts events.", "Kültür ve sanat etkinlikleri."),
        t("عروض وأنشطة ترفيهية وفق البرنامج المتاح.", "Shows and entertainment, according to the programme.", "Programa göre gösteri ve eğlence etkinlikleri."),
        t("مساحات اجتماعية ضمن مبانٍ تاريخية أعيد ترميمها.", "Social spaces in restored historic buildings.", "Restore edilmiş tarihî yapılarda sosyal alanlar."),
      ],
    },
  ],
  highlights: {
    title: t("لماذا Büyükyalı Istanbul؟", "Why Büyükyalı Istanbul?", "Neden Büyükyalı İstanbul?"),
    items: [
      t("فرصة للتقدم للجنسية التركية: عند استيفاء قيمة العقار وشروط الجنسية المعمول بها.", "A route to Turkish citizenship: when the property value and current citizenship conditions are met.", "Türk vatandaşlığına başvuru fırsatı: mülk değeri ve yürürlükteki vatandaşlık şartları karşılandığında."),
      t("إمكانية التقدم للإقامة العقارية: وفقًا لشروط الإقامة ونوع العقار وأهليته القانونية.", "Property-based residence: according to residence conditions, property type and legal eligibility.", "Gayrimenkul ikameti imkânı: ikamet şartlarına, mülk türüne ve hukuki uygunluğuna göre."),
      t("جاهز للسكن: مشروع مكتمل بنسبة 100%.", "Ready to live in: 100% complete.", "Oturuma hazır: %100 tamamlanmış proje."),
      t("موقع استراتيجي: في زيتون بورنو، على ساحل بحر مرمرة، بجوار محطة مرمراي كازلي تشيشمة.", "Strategic location: in Zeytinburnu on the Sea of Marmara, next to Kazlıçeşme Marmaray station.", "Stratejik konum: Zeytinburnu'nda, Marmara Denizi kıyısında, Kazlıçeşme Marmaray istasyonunun yanında."),
      t("حياة متكاملة: مرافق رياضية وترفيهية، ومساحات خضراء، ومطاعم ومقاهٍ ومركز ثقافي وتجاري داخل المشروع.", "Complete living: sports and leisure facilities, green spaces, restaurants, cafés and a cultural and commercial centre on site.", "Bütünleşik yaşam: spor ve eğlence olanakları, yeşil alanlar, restoran ve kafeler ile proje içinde kültür ve ticaret merkezi."),
      t("خيارات سكنية متنوعة: شقق بمساحات وأنماط مختلفة تناسب احتياجات السكن والاستثمار.", "Varied homes: apartments of different sizes and layouts for living or investment.", "Farklı konut seçenekleri: oturum ve yatırım ihtiyaçlarına uygun farklı büyüklük ve tiplerde daireler."),
    ],
  },
  location: {
    title: t("على ساحل مرمرة… وبالقرب من أهم وجهات إسطنبول", "On the Marmara coast, close to Istanbul's key destinations", "Marmara kıyısında, İstanbul'un önemli noktalarına yakın"),
    items: [
      t("محطة Kazlıçeşme – Marmaray: بالقرب من المشروع، مع اتصال بمناطق على الجانبين الأوروبي والآسيوي.", "Kazlıçeşme Marmaray station: near the project, connecting the European and Asian sides.", "Kazlıçeşme – Marmaray istasyonu: projeye yakın; Avrupa ve Anadolu yakalarına bağlantı."),
      t("نفق أوراسيا: يسهّل التنقل بالسيارة بين إسطنبول الأوروبية والآسيوية.", "Eurasia Tunnel: easy driving between European and Asian Istanbul.", "Avrasya Tüneli: Avrupa ve Anadolu yakaları arasında araçla kolay ulaşım."),
      t("شبه الجزيرة التاريخية: بالقرب من الفاتح وسلطان أحمد والأسواق والمعالم التاريخية.", "Historic peninsula: close to Fatih, Sultanahmet, the bazaars and historic landmarks.", "Tarihî yarımada: Fatih, Sultanahmet, çarşılar ve tarihî mekânlara yakın."),
      t("ميدان تقسيم: يمكن الوصول إليه بالسيارة أو عبر شبكة النقل، بحسب المسار وحالة المرور.", "Taksim Square: reachable by car or public transport, depending on route and traffic.", "Taksim Meydanı: güzergâha ve trafiğe göre araçla veya toplu taşımayla ulaşılabilir."),
      t("الواجهة البحرية: للاستمتاع بالمشي والأنشطة الخارجية على ساحل بحر مرمرة.", "The waterfront: walks and outdoor activities on the Marmara coast.", "Sahil şeridi: Marmara kıyısında yürüyüş ve açık hava etkinlikleri."),
    ],
  },
  amenities: [
    { title: t("الرياضة والترفيه", "Sports and leisure", "Spor ve eğlence"), items: [t("مسبح داخلي ومسبح خارجي.", "Indoor and outdoor pools.", "Kapalı ve açık havuz."), t("صالة لياقة بدنية.", "Fitness centre.", "Fitness salonu."), t("ساونا.", "Sauna.", "Sauna."), t("ملعب كرة قدم.", "Football pitch.", "Futbol sahası."), t("ملعب كرة سلة.", "Basketball court.", "Basketbol sahası."), t("طاولات بينغ بونغ.", "Table tennis.", "Masa tenisi.")] },
    { title: t("للعائلة والحياة اليومية", "Family and everyday life", "Aile ve günlük yaşam"), items: [t("مناطق مخصصة للأطفال.", "Children's areas.", "Çocuk alanları."), t("مسارات للمشي.", "Walking paths.", "Yürüyüş yolları."), t("مساحات خضراء ومناطق مفتوحة.", "Green and open spaces.", "Yeşil ve açık alanlar."), t("مرافق للجلوس والاسترخاء.", "Seating and relaxation areas.", "Oturma ve dinlenme alanları.")] },
    { title: t("الخدمات", "Services", "Hizmetler"), items: [t("مطاعم ومقاهٍ ضمن الوجهة التجارية والثقافية.", "Restaurants and cafés within the commercial and cultural destination.", "Ticari ve kültürel alanda restoran ve kafeler."), t("استقبال وخدمات للمقيمين وفق نظام المشروع.", "Reception and resident services per the project's rules.", "Proje düzenine göre resepsiyon ve sakin hizmetleri."), t("مواقف سيارات.", "Parking.", "Otopark.")] },
    { title: t("الأمن", "Security", "Güvenlik"), items: [t("حراسة على مدار الساعة.", "24-hour security.", "24 saat güvenlik."), t("كاميرات مراقبة.", "Security cameras.", "Güvenlik kameraları.")] },
  ],
};

// Source: Drive › Landing Page › Topkai 29 (Google Doc 1nswaHBNJcqG5HxmAim0w4WLBRAL7gNPyd_fkUVwQyTE)
export const topkapi29: Project = {
  slug: "topkapi-29",
  name: t("Topkapı 29", "Topkapı 29", "Topkapı 29"),
  district: t("زيتون بورنو", "Zeytinburnu", "Zeytinburnu"),
  side: "europe",
  type: "residential",
  status: "mixed",
  area: "zeytinburnu",
  sourceDoc: "1nswaHBNJcqG5HxmAim0w4WLBRAL7gNPyd_fkUVwQyTE",
  tagline: t("استثمار في قلب إسطنبول… وملكية مؤهلة للجنسية التركية", "An investment in the heart of Istanbul, with ownership eligible for Turkish citizenship", "İstanbul'un kalbinde yatırım ve Türk vatandaşlığına uygun mülkiyet"),
  chips: [
    t("موقع مركزي في زيتون بورنو", "Central location in Zeytinburnu", "Zeytinburnu'nda merkezi konum"),
    t("مشروع واسع النطاق", "A large-scale project", "Büyük ölçekli proje"),

  ],
  intro: [
    t(
      "إذا كنت تبحث عن عقار في موقع استراتيجي بإسطنبول الأوروبية، يجمع بين سهولة الوصول إلى شبكة المواصلات وتنوع الخيارات السكنية وإمكانية التقدّم للجنسية التركية، فإن Topkapı 29 يستحق أن يكون ضمن خياراتك الاستثمارية.",
      "If you are looking for property in a strategic location in European Istanbul — with easy access to transport, a wide choice of homes and the possibility of applying for Turkish citizenship — Topkapı 29 deserves a place on your list.",
      "İstanbul Avrupa Yakası'nda ulaşıma kolay erişimi, farklı konut seçeneklerini ve Türk vatandaşlığına başvuru imkânını bir araya getiren stratejik bir konumda gayrimenkul arıyorsanız, Topkapı 29 yatırım seçenekleriniz arasında olmayı hak ediyor.",
    ),
  ],
  priceFrom: { amount: 330000, currency: "USD" },
  cardFacts: [
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("1,441", "1,441", "1.441") },
    { label: t("نسبة الإنجاز", "Completion", "Tamamlanma"), value: t("70%", "70%", "%70") },
  ],
  facts: [
    { label: t("الموقع", "Location", "Konum"), value: t("زيتون بورنو – إسطنبول الأوروبية", "Zeytinburnu – European Istanbul", "Zeytinburnu – İstanbul Avrupa Yakası") },
    { label: t("مساحة المشروع", "Project area", "Proje alanı"), value: t("79,000 م²", "79,000 m²", "79.000 m²") },
    { label: t("المباني", "Buildings", "Binalar"), value: t("16 مبنى", "16 buildings", "16 bina") },
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("1,441 شقة", "1,441 apartments", "1.441 daire") },
    { label: t("الأنماط", "Layouts", "Daire tipleri"), value: t("من 1+1 إلى 5+1", "1+1 to 5+1", "1+1'den 5+1'e") },
    { label: t("الشركة الإنشائية", "Construction company", "Yapımcı firma"), value: t("Ak Zirve", "Ak Zirve", "Ak Zirve") },
    { label: t("شركة التسويق", "Marketing company", "Pazarlama firması"), value: t("IP Pazarlama", "IP Pazarlama", "IP Pazarlama") },
    { label: t("حالة المشروع", "Status", "Proje durumu"), value: t("مراحل جاهزة وأخرى قيد الإنشاء", "Ready phases and phases under construction", "Hazır ve inşaat hâlindeki etaplar") },
    { label: t("نسبة الإنجاز المعلنة", "Stated completion", "Açıklanan tamamlanma"), value: t("70%", "70%", "%70") },
    { label: t("التسليم المتوقع للمراحل قيد الإنشاء", "Expected delivery of phases under construction", "İnşaat hâlindeki etaplar için tahmini teslim"), value: t("1 سبتمبر 2027", "1 September 2027", "1 Eylül 2027") },
    { label: t("نوع الطابو", "Title deed", "Tapu türü"), value: t("ارتفاق (Kat İrtifakı)", "Kat İrtifakı (construction servitude)", "Kat İrtifakı") },
  ],
  units: {
    rows: [
      { type: t("1+1", "1+1", "1+1"), area: t("68 – 94 م²", "68 – 94 m²", "68 – 94 m²"), price: t("330,000 – 930,000 دولار", "$330,000 – 930,000", "330.000 – 930.000 $") },
      { type: t("2+1", "2+1", "2+1"), area: t("145 م²", "145 m²", "145 m²"), price: t("660,000 – 1,330,000 دولار", "$660,000 – 1,330,000", "660.000 – 1.330.000 $") },
      { type: t("3+1", "3+1", "3+1"), area: t("186 – 216 م²", "186 – 216 m²", "186 – 216 m²"), price: t("885,000 – 1,530,000 دولار", "$885,000 – 1,530,000", "885.000 – 1.530.000 $") },
      { type: t("4+1", "4+1", "4+1"), area: t("209 – 287 م²", "209 – 287 m²", "209 – 287 m²"), price: t("1,120,000 – 1,650,000 دولار", "$1,120,000 – 1,650,000", "1.120.000 – 1.650.000 $") },
      { type: t("4.5+1", "4.5+1", "4.5+1"), area: t("239 – 258 م²", "239 – 258 m²", "239 – 258 m²"), price: t("1,285,000 – 1,570,000 دولار", "$1,285,000 – 1,570,000", "1.285.000 – 1.570.000 $") },
    ],
    note: t("الأسعار وفق القائمة المؤرخة 28 أغسطس 2026، وتخضع للتحديث حسب نوع الوحدة وموقعها ومرحلة المشروع.", "Prices per the list dated 28 August 2026; subject to updates by unit type, position and project phase.", "Fiyatlar 28 Ağustos 2026 tarihli listeye göredir; birim tipi, konumu ve proje etabına göre güncellenebilir."),
  },
  highlights: {
    title: t("لماذا Topkapı 29؟", "Why Topkapı 29?", "Neden Topkapı 29?"),
    items: [
      t("موقع مركزي: في منطقة زيتون بورنو، بالقرب من محور E-5 وشبكة مواصلات إسطنبول.", "Central location: in Zeytinburnu, near the E-5 and Istanbul's transport network.", "Merkezi konum: Zeytinburnu'nda, E-5'e ve İstanbul ulaşım ağına yakın."),
      t("مشروع واسع النطاق: يمتد على 79,000 م² ويضم 16 مبنى و1,441 شقة.", "Large-scale: 79,000 m² with 16 buildings and 1,441 apartments.", "Büyük ölçekli: 79.000 m², 16 bina ve 1.441 daire."),
      t("خيارات سكنية متنوعة: من شقق 1+1 إلى 5+1.", "Varied homes: from 1+1 to 5+1.", "Farklı konut seçenekleri: 1+1'den 5+1'e."),
      t("مراحل متعددة: وحدات جاهزة وأخرى قيد الإنشاء.", "Several phases: ready units and units under construction.", "Birden fazla etap: hazır ve inşaat hâlindeki daireler."),
      t("فرصة للجنسية التركية: وفق قيمة العقار وشروط الجنسية السارية.", "A route to Turkish citizenship: depending on the property value and current conditions.", "Türk vatandaşlığı fırsatı: mülk değerine ve yürürlükteki şartlara göre."),
      t("خصم نقدي: يصل إلى 10% وفق شروط العرض.", "Cash discount: up to 10% under the offer terms.", "Peşin indirimi: teklif koşullarına göre %10'a kadar."),
      t("الطابو: إمكانية التسليم الفوري وفق بيانات الوحدات المتاحة.", "Title deed: immediate handover possible, per the available units' data.", "Tapu: mevcut daire verilerine göre hemen teslim imkânı."),
    ],
  },
  payment: {
    items: [
      t("طريقة الدفع: نقدًا.", "Payment method: cash.", "Ödeme şekli: peşin."),
      t("الخصم النقدي: يصل إلى 10% وفق شروط العرض.", "Cash discount: up to 10% under the offer terms.", "Peşin indirimi: teklif koşullarına göre %10'a kadar."),
      t("التقسيط: غير متوفر حاليًا وفق البيانات المقدمة.", "Instalments: not currently available, per the data provided.", "Taksit: verilen bilgilere göre şu anda mevcut değil."),
      t("الضريبة: 1% غير مشمولة وفق البيانات المقدمة.", "Tax: 1%, not included, per the data provided.", "Vergi: verilen bilgilere göre %1, fiyata dahil değil."),
      t("مصاريف الطابو: مناصفة مع العميل وفق العرض.", "Title-deed fees: shared with the client, per the offer.", "Tapu masrafları: teklife göre müşteriyle yarı yarıya."),
    ],
  },
  location: {
    items: [
      t("E-5: محور رئيسي للحركة في إسطنبول.", "E-5: a main traffic artery of Istanbul.", "E-5: İstanbul'un ana trafik aksı."),
      t("محطة ترام Merkez Efendi: نحو 500 متر وفق البيانات المتاحة.", "Merkez Efendi tram stop: about 500 m, per the available data.", "Merkez Efendi tramvay durağı: mevcut verilere göre yaklaşık 500 metre."),
      t("محطة مترو Merter: نحو كيلومتر واحد.", "Merter metro station: about 1 km.", "Merter metro istasyonu: yaklaşık 1 km."),
      t("محطات الحافلات: على مسافة قريبة من المشروع.", "Bus stops close to the project.", "Otobüs durakları: projeye yakın mesafede."),
      t("Marmara Forum: نحو 3 كم.", "Marmara Forum: about 3 km.", "Marmara Forum: yaklaşık 3 km."),
      t("Kale Outlet Center: نحو 3 كم.", "Kale Outlet Center: about 3 km.", "Kale Outlet Center: yaklaşık 3 km."),
      t("مطار إسطنبول الدولي: نحو 40 دقيقة بالسيارة، بحسب حركة المرور.", "Istanbul Airport: about 40 minutes by car, depending on traffic.", "İstanbul Havalimanı: trafiğe bağlı olarak araçla yaklaşık 40 dakika."),
    ],
  },
  amenities: [
    {
      items: [
        t("مساحات خضراء ومناطق مخصصة للاسترخاء.", "Green spaces and relaxation areas.", "Yeşil alanlar ve dinlenme alanları."),
        t("مرافق اجتماعية وترفيهية.", "Social and leisure facilities.", "Sosyal ve eğlence olanakları."),
        t("مناطق تجارية وتسوق ضمن المخطط العام للمشروع.", "Commercial and shopping areas within the master plan.", "Proje genel planında ticari ve alışveriş alanları."),
        t("سهولة الوصول إلى الجامعات والمراكز الطبية والتجارية المحيطة.", "Easy access to nearby universities, medical and commercial centres.", "Çevredeki üniversitelere, sağlık ve ticaret merkezlerine kolay erişim."),
        t("شبكة مواصلات متنوعة بالقرب من المشروع.", "A varied transport network near the project.", "Projeye yakın çeşitli ulaşım ağı."),
      ],
    },
  ],
  ownership: [
    t("المشروع مُدرج ضمن الخيارات المناسبة لدراسة التملّك بهدف التقدّم للجنسية التركية.", "The project is listed among the options suitable for buying with a view to applying for Turkish citizenship.", "Proje, Türk vatandaşlığı başvurusu amacıyla mülk edinmeye uygun seçenekler arasında yer almaktadır."),
  ],
};

// Source: Drive › Landing Page › مشروع Yedi Mavi (Google Doc 11eyqe_dzrPQyWjgC6sawZUu_QSKzrohNc-pEC5u0TlY)
export const yediMavi: Project = {
  slug: "yedi-mavi",
  name: t("YEDİ MAVİ", "YEDİ MAVİ", "YEDİ MAVİ"),
  district: t("زيتون بورنو", "Zeytinburnu", "Zeytinburnu"),
  side: "europe",
  type: "residential",
  status: "ready",
  area: "zeytinburnu",
  sourceDoc: "11eyqe_dzrPQyWjgC6sawZUu_QSKzrohNc-pEC5u0TlY",
  featured: true,
  tagline: t("استثمر في إطلالة استثنائية على بحر إسطنبول", "Invest in an exceptional view of Istanbul's sea", "İstanbul denizine eşsiz bir manzaraya yatırım yapın"),
  intro: [
    t(
      "اكتشف تجربة سكنية تجمع بين فخامة التصميم، والإطلالات البحرية، والموقع الاستراتيجي في منطقة زيتون بورنو، إحدى المناطق الساحلية المميزة في القسم الأوروبي من إسطنبول.",
      "Discover a home that combines refined design, sea views and a strategic location in Zeytinburnu, one of the distinctive coastal districts of European Istanbul.",
      "Zarif tasarımı, deniz manzarasını ve İstanbul Avrupa Yakası'nın seçkin sahil bölgelerinden Zeytinburnu'ndaki stratejik konumu bir araya getiren bir yaşamı keşfedin.",
    ),
    t(
      "يقدم مشروع YEDİ MAVİ مفهومًا متكاملًا للحياة العصرية، ضمن مجمع سكني يضم خيارات متنوعة من الشقق الفاخرة ومرافق متكاملة، ليمنحك فرصة التملك في مشروع جاهز للتسليم، سواء كنت تبحث عن منزل راقٍ لعائلتك أو عقار مميز ضمن محفظتك الاستثمارية.",
      "YEDİ MAVİ offers a complete modern lifestyle in a complex of luxury apartments with full facilities — a chance to own in a ready-to-move-in project, whether you want a fine family home or a distinctive property for your portfolio.",
      "YEDİ MAVİ, lüks daire seçenekleri ve kapsamlı olanaklarıyla bütünleşik bir modern yaşam sunar; ister aileniz için seçkin bir ev ister portföyünüz için özel bir mülk arayın, teslime hazır bir projede mülk edinme fırsatı.",
    ),
  ],
  priceFrom: { amount: 1020000, currency: "USD" },
  cardFacts: [
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("684", "684", "684") },
    { label: t("الإطلالات", "Views", "Manzara"), value: t("بحرية ومدينة", "Sea and city", "Deniz ve şehir") },
  ],
  facts: [
    { label: t("الموقع", "Location", "Konum"), value: t("زيتون بورنو – إسطنبول الأوروبية", "Zeytinburnu – European Istanbul", "Zeytinburnu – İstanbul Avrupa Yakası") },
    { label: t("مساحة المشروع", "Project area", "Proje alanı"), value: t("63,500 م²", "63,500 m²", "63.500 m²") },
    { label: t("عدد الأبنية", "Buildings", "Bina sayısı"), value: t("7 أبنية", "7 buildings", "7 bina") },
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("684 شقة", "684 apartments", "684 daire") },
    { label: t("حالة المشروع", "Status", "Proje durumu"), value: t("جاهز للتسليم", "Ready to move in", "Teslime hazır") },
    { label: t("الشركة الإنشائية", "Construction company", "Yapımcı firma"), value: t("Kalkavan Yapı", "Kalkavan Yapı", "Kalkavan Yapı") },
    { label: t("نوع الطابو", "Title deed", "Tapu türü"), value: t("ملكية", "Freehold (kat mülkiyeti)", "Kat mülkiyeti") },
    { label: t("الإطلالات", "Views", "Manzara"), value: t("بحرية وإطلالات على المدينة", "Sea and city views", "Deniz ve şehir manzarası") },
  ],
  units: {
    rows: [
      { type: t("2+1", "2+1", "2+1"), area: t("137 – 165 م²", "137 – 165 m²", "137 – 165 m²") },
      { type: t("3+1", "3+1", "3+1"), area: t("143 – 206 م²", "143 – 206 m²", "143 – 206 m²") },
      { type: t("3+1 دوبلكس", "3+1 duplex", "3+1 dubleks"), area: t("210 – 259 م²", "210 – 259 m²", "210 – 259 m²") },
      { type: t("3.5+1", "3.5+1", "3.5+1"), area: t("160 – 220 م²", "160 – 220 m²", "160 – 220 m²") },
      { type: t("4+1", "4+1", "4+1"), area: t("223 – 392 م²", "223 – 392 m²", "223 – 392 m²") },
      { type: t("4+1 دوبلكس", "4+1 duplex", "4+1 dubleks"), area: t("314 م²", "314 m²", "314 m²") },
      { type: t("4.5+1", "4.5+1", "4.5+1"), area: t("263 – 347 م²", "263 – 347 m²", "263 – 347 m²") },
    ],
    note: t("تبدأ الأسعار المسجلة في قائمة الوحدات من 1,020,000 دولار أمريكي، مع اختلاف الأسعار حسب نوع الشقة ومساحتها وتوافرها.", "Listed prices start from US$1,020,000 and vary by layout, size and availability.", "Daire listesindeki fiyatlar 1.020.000 ABD dolarından başlar; daire tipi, büyüklüğü ve stok durumuna göre değişir."),
  },
  payment: {
    items: [
      t("دفعة أولى تبدأ من 50%.", "Down payment from 50%.", "%50'den başlayan peşinat."),
      t("تقسيط يصل إلى 18 شهرًا، وفق الخطة المتاحة.", "Instalments of up to 18 months, per the available plan.", "Mevcut plana göre 18 aya kadar taksit."),
      t("حسم نقدي مسجل بنسبة 10%، وفق شروط المطور.", "Listed cash discount of 10%, under the developer's terms.", "Geliştiricinin koşullarına göre %10 peşin indirimi."),
    ],
  },
  highlights: {
    title: t("لماذا تختار YEDİ MAVİ؟", "Why YEDİ MAVİ?", "Neden YEDİ MAVİ?"),
    items: [
      t("موقع ساحلي مميز: استمتع بموقع قريب من ساحل البحر، مع سهولة الوصول إلى عدد من الوجهات الحيوية في إسطنبول.", "A distinctive coastal location close to the sea, with easy access to many key places in Istanbul.", "Seçkin sahil konumu: denize yakın, İstanbul'un pek çok önemli noktasına kolay erişim."),
      t("مشروع جاهز للتسليم: امتلك عقارك دون انتظار انتهاء أعمال البناء، مع إمكانية معاينة الخيارات المتاحة قبل اتخاذ قرار الشراء.", "Ready to move in: own without waiting for construction, and view the available options before deciding.", "Teslime hazır: inşaatın bitmesini beklemeden mülk sahibi olun; karar vermeden önce seçenekleri yerinde görün."),
      t("خيارات سكنية متنوعة: شقق بمساحات وأنماط مختلفة، من الشقق العائلية إلى الوحدات الأكبر والدوبلكس.", "Varied homes: from family apartments to larger units and duplexes.", "Farklı konut seçenekleri: aile dairelerinden daha büyük birimlere ve dublekslere."),
      t("حياة متكاملة: مجموعة واسعة من المرافق الترفيهية والخدمية.", "Complete living: a wide range of leisure and service facilities.", "Bütünleşik yaşam: geniş eğlence ve hizmet olanakları."),
      t("فرصة للتملك والاستثمار: يجمع المشروع بين الموقع الساحلي، والمساحات السكنية الواسعة، وجاهزية التسليم.", "Ownership and investment: a coastal location, spacious homes and ready delivery.", "Mülk edinme ve yatırım fırsatı: sahil konumu, geniş daireler ve teslime hazır olma bir arada."),
    ],
  },
  amenities: [
    { title: t("المرافق الرياضية والترفيهية", "Sports and leisure", "Spor ve eğlence"), items: [t("صالة لياقة بدنية.", "Fitness centre.", "Fitness salonu."), t("مسبح داخلي ومسبح خارجي.", "Indoor and outdoor pools.", "Kapalı ve açık havuz."), t("مسبح مخصص للأطفال.", "Children's pool.", "Çocuk havuzu."), t("غرفة ألعاب وطاولات بينغ بونغ.", "Games room and table tennis.", "Oyun odası ve masa tenisi."), t("ملعب للأطفال.", "Children's playground.", "Çocuk oyun alanı.")] },
    { title: t("المساحات الخارجية", "Outdoor spaces", "Açık alanlar"), items: [t("مساحات خضراء.", "Green spaces.", "Yeşil alanlar."), t("مسارات للمشي.", "Walking paths.", "Yürüyüş yolları."), t("مجالس وجلسات خارجية.", "Outdoor seating.", "Açık oturma alanları."), t("مساحات مائية.", "Water features.", "Su öğeleri.")] },
    { title: t("الخدمات والأمن", "Services and security", "Hizmetler ve güvenlik"), items: [t("حراسة على مدار الساعة.", "24-hour security.", "24 saat güvenlik."), t("كاميرات مراقبة.", "Security cameras.", "Güvenlik kameraları."), t("مواقف سيارات داخلية وخارجية.", "Indoor and outdoor parking.", "Kapalı ve açık otopark."), t("مصاعد.", "Lifts.", "Asansörler."), t("قسم استقبال.", "Reception.", "Resepsiyon.")] },
    { title: t("الخدمات التجارية", "Commercial services", "Ticari hizmetler"), items: [t("مطاعم ومقاهٍ.", "Restaurants and cafés.", "Restoran ve kafeler."), t("محلات تجارية.", "Shops.", "Dükkânlar."), t("مركز تجاري.", "Shopping centre.", "Alışveriş merkezi.")] },
  ],
  location: {
    items: [
      t("ساحل البحر والكورنيش: نحو دقيقة واحدة مشيًا.", "Seafront promenade: about one minute on foot.", "Sahil ve kordon: yürüyerek yaklaşık bir dakika."),
      t("محطة مرمراي: نحو 3 دقائق، وفق البيانات المتاحة.", "Marmaray station: about 3 minutes, per the available data.", "Marmaray istasyonu: mevcut verilere göre yaklaşık 3 dakika."),
      t("نفق أوراسيا: نحو 2 كم.", "Eurasia Tunnel: about 2 km.", "Avrasya Tüneli: yaklaşık 2 km."),
      t("أتاكوي مارينا: نحو 2 كم.", "Ataköy Marina: about 2 km.", "Ataköy Marina: yaklaşık 2 km."),
      t("تقسيم: نحو 10 كم.", "Taksim: about 10 km.", "Taksim: yaklaşık 10 km."),
      t("مطار إسطنبول الدولي: نحو 45 دقيقة بالسيارة.", "Istanbul Airport: about 45 minutes by car.", "İstanbul Havalimanı: araçla yaklaşık 45 dakika."),
    ],
  },
  ownership: [
    t("وفق البيانات المقدمة، يُصنف مشروع YEDİ MAVİ ضمن المشاريع المناسبة للإقامة العقارية والجنسية التركية.", "According to the data provided, YEDİ MAVİ is classed among the projects suitable for property-based residence and Turkish citizenship.", "Verilen bilgilere göre YEDİ MAVİ, gayrimenkul ikameti ve Türk vatandaşlığına uygun projeler arasında yer almaktadır."),
  ],
};
