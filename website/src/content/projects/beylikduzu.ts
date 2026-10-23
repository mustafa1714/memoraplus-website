import { t, type Project } from "./types";

// Source: Drive › Landing Page › Deniz istanbul (Google Doc 1DcpRb65YGzTz8oLBcq6ANZowBHEVQtEpvNuvZncylNM)
export const denizIstanbul: Project = {
  slug: "deniz-istanbul",
  name: t("Deniz Istanbul", "Deniz Istanbul", "Deniz İstanbul"),
  district: t("بيليك دوزو", "Beylikdüzü", "Beylikdüzü"),
  side: "europe",
  type: "residential",
  status: "mixed",
  area: "beylikduzu",
  sourceDoc: "1DcpRb65YGzTz8oLBcq6ANZowBHEVQtEpvNuvZncylNM",
  tagline: t("إطلالة بحرية… ومساحة تختارها كما تريد", "A sea view, and the space you choose", "Deniz manzarası ve dilediğiniz gibi seçeceğiniz bir alan"),
  chips: [
    t("شقق وفلل وتربلكس", "Apartments, villas and triplexes", "Daire, villa ve tripleks"),
    t("مناسب للجنسية التركية", "Suitable for Turkish citizenship", "Türk vatandaşlığına uygun"),
    t("مناسب للإقامة العقارية", "Suitable for property-based residence", "Gayrimenkul ikametine uygun"),
    t("تقسيط حتى 36 شهرًا", "Instalments up to 36 months", "36 aya kadar taksit"),
  ],
  intro: [
    t(
      "تخيّل أن تختار منزلك بإطلالة على البحر أو المدينة، ضمن مجمع سكني متكامل يجمع بين المساحات الواسعة والمرافق المتنوعة، في منطقة بيليك دوزو ضمن القسم الأوروبي من إسطنبول.",
      "Imagine choosing a home with a sea or city view in a complete residential complex of generous spaces and varied facilities, in Beylikdüzü on the European side of Istanbul.",
      "İstanbul Avrupa Yakası'nda Beylikdüzü'nde, geniş alanları ve çeşitli olanakları bir araya getiren bir sitede deniz ya da şehir manzaralı evinizi seçtiğinizi düşünün.",
    ),
    t(
      "يقدم مشروع Deniz Istanbul خيارات سكنية متعددة تناسب احتياجات العائلات المختلفة، من الشقق ذات المساحات العملية إلى الوحدات الأكبر والفلل والتربلكس، ضمن مشروع ضخم تطوره Keleşoğlu Holding.",
      "Deniz Istanbul offers many choices for different families — from practical apartments to larger units, villas and triplexes — in a large project developed by Keleşoğlu Holding.",
      "Deniz İstanbul, pratik dairelerden daha büyük birimlere, villalara ve triplekslere kadar farklı ailelerin ihtiyaçlarına uygun pek çok seçeneği Keleşoğlu Holding'in geliştirdiği büyük bir projede sunar.",
    ),
  ],
  priceFrom: { amount: 428000, currency: "USD" },
  cardFacts: [
    { label: t("الوحدات", "Units", "Birim sayısı"), value: t("5,100", "5,100", "5.100") },
    { label: t("نسبة الإنجاز", "Completion", "Tamamlanma"), value: t("60%", "60%", "%60") },
  ],
  facts: [
    { label: t("اسم المشروع", "Project", "Proje adı"), value: t("Deniz Istanbul", "Deniz Istanbul", "Deniz İstanbul") },
    { label: t("المطور والشركة المسؤولة", "Developer", "Geliştirici"), value: t("Keleşoğlu Holding", "Keleşoğlu Holding", "Keleşoğlu Holding") },
    { label: t("الموقع", "Location", "Konum"), value: t("بيليك دوزو، إسطنبول الأوروبية", "Beylikdüzü, European Istanbul", "Beylikdüzü, İstanbul Avrupa Yakası") },
    { label: t("مساحة المشروع", "Project area", "Proje alanı"), value: t("150,000 م² وفق البيانات المقدمة", "150,000 m², per the data provided", "Verilen bilgilere göre 150.000 m²") },
    { label: t("عدد الأبنية", "Buildings", "Bina sayısı"), value: t("200 وفق البيانات المقدمة", "200, per the data provided", "Verilen bilgilere göre 200") },
    { label: t("عدد الوحدات", "Units", "Birim sayısı"), value: t("5,100 وحدة", "5,100 units", "5.100 birim") },
    { label: t("أنواع الوحدات", "Unit types", "Birim tipleri"), value: t("شقق وفلل، مع توفر وحدات تربلكس", "Apartments and villas, with triplex units", "Daireler ve villalar, tripleks birimlerle") },
    { label: t("أنواع الشقق المسعّرة", "Priced layouts", "Fiyatlı daire tipleri"), value: t("2+1، 3+1، 4+1", "2+1, 3+1, 4+1", "2+1, 3+1, 4+1") },
    { label: t("المساحات المذكورة", "Stated sizes", "Belirtilen büyüklükler"), value: t("من 108 إلى 275 م² وفق البيانات العامة للمشروع", "108 to 275 m², per the general project data", "Proje genel verilerine göre 108 – 275 m²") },
    { label: t("نسبة المساحة الصافية", "Net-to-gross ratio", "Net alan oranı"), value: t("70%", "70%", "%70") },
    { label: t("حالة المشروع", "Status", "Proje durumu"), value: t("مراحل جاهزة وأخرى قيد الإنشاء", "Ready phases and phases under construction", "Hazır ve inşaat hâlindeki etaplar") },
    { label: t("نسبة الإنجاز المذكورة", "Stated completion", "Belirtilen tamamlanma"), value: t("60%", "60%", "%60") },
    { label: t("نوع الطابو", "Title deed", "Tapu türü"), value: t("ارتفاق وملكية، بحسب الوحدة", "Kat İrtifakı or freehold, depending on the unit", "Birime göre kat irtifakı veya kat mülkiyeti") },
  ],
  units: {
    rows: [
      { type: t("2+1", "2+1", "2+1"), area: t("من 108 إلى 140 م²", "108 to 140 m²", "108 – 140 m²"), price: t("428,000 دولار", "$428,000", "428.000 $") },
      { type: t("3+1", "3+1", "3+1"), area: t("122 م²", "122 m²", "122 m²"), price: t("588,000 دولار", "$588,000", "588.000 $") },
      { type: t("4+1", "4+1", "4+1"), area: t("149 م²", "149 m²", "149 m²"), price: t("792,000 دولار", "$792,000", "792.000 $") },
    ],
    note: t("كما تتوفر في المشروع خيارات من الفلل والتربلكس وفق البيانات المقدمة.", "Villas and triplexes are also available, per the data provided.", "Verilen bilgilere göre projede villa ve tripleks seçenekleri de mevcuttur."),
  },
  highlights: {
    title: t("لماذا تختار Deniz Istanbul؟", "Why Deniz Istanbul?", "Neden Deniz İstanbul?"),
    items: [
      t("إطلالات بحرية وإطلالات على المدينة بحسب موقع الوحدة وتصميمها.", "Sea and city views depending on the unit's position and design.", "Birimin konumuna ve tasarımına göre deniz ve şehir manzarası."),
      t("تنوع سكني: شقق بمساحات مختلفة، إلى جانب خيارات من الفلل والتربلكس.", "Variety: apartments of different sizes plus villas and triplexes.", "Konut çeşitliliği: farklı büyüklükte daireler, villa ve tripleks seçenekleri."),
      t("مجمع متكامل المرافق يشمل المسابح والملاعب والمساحات الخضراء والمحال التجارية.", "A fully equipped complex with pools, courts, green spaces and shops.", "Havuzlar, sahalar, yeşil alanlar ve dükkânlarla donatılmış bir site."),
      t("خيارات تقسيط مرنة: تبدأ الدفعة الأولى من 40%، مع إمكانية التقسيط حتى 36 شهرًا وفق خطة الدفع والوحدة المتاحة.", "Flexible instalments: down payment from 40% and up to 36 months, depending on the plan and unit.", "Esnek taksit: %40'tan başlayan peşinat ve ödeme planına ve birime göre 36 aya kadar taksit."),
      t("مناسب للتقديم على الجنسية التركية والإقامة العقارية.", "Suitable for Turkish citizenship and property-based residence applications.", "Türk vatandaşlığı ve gayrimenkul ikameti başvurusuna uygun."),
    ],
  },
  payment: {
    items: [
      t("الدفعة الأولى: تبدأ من 40%.", "Down payment: from 40%.", "Peşinat: %40'tan başlar."),
      t("مدة التقسيط: تصل إلى 36 شهرًا وفق الخطة المعتمدة.", "Instalment period: up to 36 months under the approved plan.", "Taksit süresi: onaylı plana göre 36 aya kadar."),
      t("خصم الدفع النقدي: 5% وفق البيانات المقدمة.", "Cash discount: 5%, per the data provided.", "Peşin indirimi: verilen bilgilere göre %5."),
      t("الضمان: من الشركة الإنشائية.", "Guarantee: from the construction company.", "Garanti: inşaat şirketinden."),
      t("مصاريف الطابو: مناصفة مع العميل وفق البيانات المقدمة.", "Title-deed fees: shared with the client, per the data provided.", "Tapu masrafları: verilen bilgilere göre müşteriyle yarı yarıya."),
      t("الضريبة: مذكور أنها مشمولة بالسعر، ويجب تأكيد ذلك في عرض السعر النهائي.", "Tax: stated as included in the price; to be confirmed in the final offer.", "Vergi: fiyata dahil olduğu belirtilmiştir; nihai teklifte teyit edilmelidir."),
      t("ضمان التأجير: غير متوفر وفق البيانات المقدمة.", "Rental guarantee: not available, per the data provided.", "Kira garantisi: verilen bilgilere göre mevcut değil."),
    ],
  },
  location: {
    title: t("موقع في بيليك دوزو يجمع بين البحر والمدينة", "A Beylikdüzü location between sea and city", "Deniz ile şehri buluşturan Beylikdüzü konumu"),
    items: [
      t("بيليك دوزو – Beylikdüzü: منطقة سكنية في إسطنبول الأوروبية.", "Beylikdüzü: a residential district of European Istanbul.", "Beylikdüzü: İstanbul Avrupa Yakası'nda bir yerleşim bölgesi."),
      t("الإطلالات: خيارات بحرية وإطلالات على المدينة بحسب الوحدة.", "Views: sea or city, depending on the unit.", "Manzara: birime göre deniz veya şehir."),
      t("الخدمات المحيطة: سهولة الوصول إلى مجموعة من المرافق والخدمات في المنطقة.", "Nearby services: easy access to facilities and services in the area.", "Çevredeki hizmetler: bölgedeki olanak ve hizmetlere kolay erişim."),
      t("شبكة الطرق: إمكانية الوصول إلى محاور التنقل الرئيسية في إسطنبول الأوروبية.", "Road network: access to the main routes of European Istanbul.", "Yol ağı: İstanbul Avrupa Yakası'nın ana ulaşım akslarına erişim."),
    ],
  },
  amenities: [
    { title: t("الرياضة والاسترخاء", "Sports and relaxation", "Spor ve dinlenme"), items: [t("مسابح داخلية وخارجية.", "Indoor and outdoor pools.", "Kapalı ve açık havuzlar."), t("نادٍ رياضي.", "Sports club.", "Spor kulübü."), t("حمام تركي.", "Turkish bath.", "Türk hamamı."), t("ساونا وغرفة بخار.", "Sauna and steam room.", "Sauna ve buhar odası."), t("غرفة مساج.", "Massage room.", "Masaj odası.")] },
    { title: t("المساحات الخارجية والعائلية", "Outdoor and family", "Açık alanlar ve aile"), items: [t("مساحات خضراء ومسارات للمشي.", "Green spaces and walking paths.", "Yeşil alanlar ve yürüyüş yolları."), t("ملاعب للأطفال ومسبح للأطفال.", "Children's playgrounds and pool.", "Çocuk oyun alanları ve çocuk havuzu."), t("ملاعب كرة قدم وكرة سلة وكرة طائرة.", "Football, basketball and volleyball courts.", "Futbol, basketbol ve voleybol sahaları."), t("جلسات خارجية.", "Outdoor seating.", "Açık oturma alanları.")] },
    { title: t("الخدمات اليومية", "Everyday services", "Günlük hizmetler"), items: [t("مواقف سيارات مغلقة ومفتوحة.", "Covered and open parking.", "Kapalı ve açık otopark."), t("حراسة على مدار 24 ساعة.", "24-hour security.", "24 saat güvenlik."), t("كاميرات مراقبة.", "Security cameras.", "Güvenlik kameraları."), t("استقبال ومصاعد.", "Reception and lifts.", "Resepsiyon ve asansörler."), t("مقهى ومطعم.", "Café and restaurant.", "Kafe ve restoran."), t("محلات تجارية.", "Shops.", "Dükkânlar."), t("مدرسة دولية وصيدلية وفق بيانات المشروع.", "International school and pharmacy, per the project data.", "Proje verilerine göre uluslararası okul ve eczane.")] },
  ],
};

// Source: Drive › Landing Page › Referans beylikduzu (Google Doc 1XgR6y4wivQSr64GSbs5v9Og4KVNvFgC6Ui9SFhJuIMQ)
export const referansBeylikduzu: Project = {
  slug: "referans-beylikduzu",
  name: t("Referans Beylikdüzü", "Referans Beylikdüzü", "Referans Beylikdüzü"),
  district: t("ياكوبلو – بيليك دوزو", "Yakuplu – Beylikdüzü", "Yakuplu – Beylikdüzü"),
  side: "europe",
  type: "residential",
  status: "ready",
  area: "beylikduzu",
  sourceDoc: "1XgR6y4wivQSr64GSbs5v9Og4KVNvFgC6Ui9SFhJuIMQ",
  featured: true,
  tagline: t("مساحة أكبر لحياتك… وخيارات أوسع لتملّك عقارك في اسطنبول", "More space for your life, and wider choices to own in Istanbul", "Yaşamınız için daha fazla alan, İstanbul'da mülk edinmek için daha geniş seçenekler"),
  chips: [

    t("مناسب للجنسية التركية", "Suitable for Turkish citizenship", "Türk vatandaşlığına uygun"),
    t("مناسب للإقامة العقارية", "Suitable for property-based residence", "Gayrimenkul ikametine uygun"),
    t("تقسيط حتى 48 شهرًا", "Instalments up to 48 months", "48 aya kadar taksit"),
  ],
  intro: [
    t(
      "يقدم لك مشروع Referans Beylikdüzü مفهومًا سكنيًا يجمع بين المساحات الرحبة، وتنوع أنماط الشقق، والمرافق التي تلبي احتياجات الحياة اليومية، في منطقة ياكوبلو – بيليك دوزو ضمن القسم الأوروبي من إسطنبول.",
      "Referans Beylikdüzü brings together generous space, a wide range of layouts and facilities for everyday life, in Yakuplu – Beylikdüzü on the European side of Istanbul.",
      "Referans Beylikdüzü; geniş alanları, farklı daire tiplerini ve günlük yaşamın ihtiyaçlarını karşılayan olanakları İstanbul Avrupa Yakası'nda Yakuplu – Beylikdüzü'nde bir araya getiriyor.",
    ),
    t(
      "الأسعار تبدأ من حوالي 370,000 دولار لشقق 2+1، مع إمكانية التقسيط وفق الشروط المتاحة. المشروع مكتمل بنسبة 100% وفق البيانات المقدمة، ما يتيح لك معاينة الخيارات المتاحة ودراسة قرار الشراء على أساس واضح.",
      "Prices start from about $370,000 for 2+1 apartments, with instalments available under the current terms. The project is 100% complete per the data provided, so you can view the available options and decide on a clear basis.",
      "2+1 dairelerde fiyatlar yaklaşık 370.000 dolardan başlar; mevcut koşullara göre taksit imkânı vardır. Verilen bilgilere göre proje %100 tamamlanmıştır; mevcut seçenekleri yerinde görerek net bir temelde karar verebilirsiniz.",
    ),
  ],
  priceFrom: { amount: 370000, currency: "USD" },
  cardFacts: [
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("709", "709", "709") },
    { label: t("الأنماط", "Layouts", "Daire tipleri"), value: t("2+1 – 5+1", "2+1 – 5+1", "2+1 – 5+1") },
  ],
  facts: [
    { label: t("اسم المشروع", "Project", "Proje adı"), value: t("Referans Beylikdüzü", "Referans Beylikdüzü", "Referans Beylikdüzü") },
    { label: t("المطور العقاري", "Developer", "Geliştirici"), value: t("Kiler GYO", "Kiler GYO", "Kiler GYO") },
    { label: t("الموقع", "Location", "Konum"), value: t("ياكوبلو – بيليك دوزو، إسطنبول الأوروبية", "Yakuplu – Beylikdüzü, European Istanbul", "Yakuplu – Beylikdüzü, İstanbul Avrupa Yakası") },
    { label: t("مساحة المشروع", "Project area", "Proje alanı"), value: t("32,000 م²", "32,000 m²", "32.000 m²") },
    { label: t("عدد الأبنية", "Buildings", "Bina sayısı"), value: t("8 أبنية سكنية", "8 residential buildings", "8 konut binası") },
    { label: t("عدد الشقق", "Apartments", "Daire sayısı"), value: t("709 شقق", "709 apartments", "709 daire") },
    { label: t("أنماط الشقق", "Layouts", "Daire tipleri"), value: t("من 2+1 إلى 5+1، بما فيها خيارات 3.5+1 و4.5+1", "2+1 to 5+1, including 3.5+1 and 4.5+1", "3,5+1 ve 4,5+1 dahil 2+1'den 5+1'e") },
    { label: t("المساحات", "Sizes", "Büyüklükler"), value: t("تبدأ من 124 م² وتصل إلى أكثر من 300 م²", "From 124 m² to over 300 m²", "124 m²'den 300 m²'nin üzerine") },
    { label: t("أنواع الوحدات", "Unit types", "Birim tipleri"), value: t("شقق عادية ودوبلكس", "Standard apartments and duplexes", "Standart daireler ve dubleksler") },
    { label: t("حالة المشروع", "Status", "Proje durumu"), value: t("جاهز للتسليم", "Ready to move in", "Teslime hazır") },
    { label: t("نسبة الإنجاز", "Completion", "Tamamlanma"), value: t("100% وفق البيانات المقدمة", "100%, per the data provided", "Verilen bilgilere göre %100") },
  ],
  units: {
    rows: [
      { type: t("2+1", "2+1", "2+1"), price: t("تبدأ من حوالي 370,000 دولار", "From about $370,000", "Yaklaşık 370.000 $'dan başlar") },
      { type: t("3+1", "3+1", "3+1") },
      { type: t("3.5+1", "3.5+1", "3,5+1") },
      { type: t("4+1", "4+1", "4+1") },
      { type: t("4.5+1", "4.5+1", "4,5+1") },
      { type: t("5+1", "5+1", "5+1"), price: t("بعض الشقق تصل أسعارها إلى حوالي 699,000 دولار", "Some apartments up to about $699,000", "Bazı dairelerde yaklaşık 699.000 $'a kadar") },
      { type: t("دوبلكس", "Duplex", "Dubleks") },
    ],
    note: t("تبدأ المساحات من 124 م²، وتصل إلى أكثر من 300 م² بحسب نوع الوحدة وتصميمها.", "Sizes start at 124 m² and reach over 300 m², depending on the unit type and design.", "Büyüklükler birim tipine ve tasarımına göre 124 m²'den başlar ve 300 m²'nin üzerine çıkar."),
  },
  payment: {
    items: [
      t("الدفعة الأولى: تبدأ من 35% وفق الخطة المتاحة.", "Down payment: from 35% under the available plan.", "Peşinat: mevcut plana göre %35'ten başlar."),
      t("فترة التقسيط: تصل إلى 48 شهرًا وفق الشروط المعتمدة.", "Instalment period: up to 48 months under the approved terms.", "Taksit süresi: onaylı koşullara göre 48 aya kadar."),
    ],
  },
  location: {
    title: t("موقع يجمع بين الساحل والخدمات وسهولة التنقل", "Coast, services and easy travel", "Sahil, hizmetler ve kolay ulaşım bir arada"),
    items: [
      t("طريق E-5 وعقدة المواصلات: نحو 2 كم وفق البيانات المقدمة.", "E-5 and transport hub: about 2 km, per the data provided.", "E-5 ve ulaşım kavşağı: verilen bilgilere göre yaklaşık 2 km."),
      t("West Istanbul Marina والساحل: نحو 4 كم، أو قرابة 8 دقائق بالسيارة.", "West Istanbul Marina and the coast: about 4 km, or about 8 minutes by car.", "West İstanbul Marina ve sahil: yaklaşık 4 km veya araçla yaklaşık 8 dakika."),
      t("Marmara Park: نحو 5 دقائق بالسيارة.", "Marmara Park: about 5 minutes by car.", "Marmara Park: araçla yaklaşık 5 dakika."),
      t("مطار إسطنبول الدولي: نحو 45 دقيقة بالسيارة.", "Istanbul Airport: about 45 minutes by car.", "İstanbul Havalimanı: araçla yaklaşık 45 dakika."),
    ],
  },
  amenities: [
    { title: t("الرياضة والاسترخاء", "Sports and relaxation", "Spor ve dinlenme"), items: [t("مسبح داخلي ومسبح خارجي.", "Indoor and outdoor pools.", "Kapalı ve açık havuz."), t("صالة رياضية.", "Gym.", "Spor salonu."), t("حمام تركي.", "Turkish bath.", "Türk hamamı."), t("ساونا وغرفة بخار.", "Sauna and steam room.", "Sauna ve buhar odası.")] },
    { title: t("المساحات الخارجية والعائلية", "Outdoor and family", "Açık alanlar ve aile"), items: [t("مساحات خضراء ومسارات للمشي.", "Green spaces and walking paths.", "Yeşil alanlar ve yürüyüş yolları."), t("ملعب للأطفال.", "Children's playground.", "Çocuk oyun alanı."), t("ملعب لكرة السلة.", "Basketball court.", "Basketbol sahası."), t("مساحات مائية ومجالس خارجية.", "Water features and outdoor seating.", "Su öğeleri ve açık oturma alanları.")] },
    { title: t("الخدمات والراحة", "Services and comfort", "Hizmetler ve konfor"), items: [t("مواقف سيارات مغلقة.", "Covered parking.", "Kapalı otopark."), t("استقبال وحراسة على مدار 24 ساعة.", "24-hour reception and security.", "24 saat resepsiyon ve güvenlik."), t("نظام مراقبة بالكاميرات.", "Camera surveillance.", "Kamera sistemi."), t("مقهى ومطعم.", "Café and restaurant.", "Kafe ve restoran.")] },
  ],
  highlights: {
    title: t("لماذا تختار Referans Beylikdüzü؟", "Why Referans Beylikdüzü?", "Neden Referans Beylikdüzü?"),
    items: [
      t("مشروع جاهز للتسليم، مكتمل بنسبة 100% وفق البيانات المقدمة.", "Ready to move in — 100% complete per the data provided.", "Teslime hazır — verilen bilgilere göre %100 tamamlandı."),
      t("مساحات تناسب العائلات: من 2+1 إلى 5+1، مع خيارات دوبلكس.", "Family-sized homes: 2+1 to 5+1, with duplexes.", "Ailelere uygun alanlar: dubleks seçenekleriyle 2+1'den 5+1'e."),
      t("موقع قريب من الساحل ومناطق التسوق والطرق الرئيسية في إسطنبول الأوروبية.", "Close to the coast, shopping and main roads of European Istanbul.", "Sahile, alışveriş bölgelerine ve İstanbul Avrupa Yakası'nın ana yollarına yakın."),
      t("مرافق متكاملة: من المسابح إلى المساحات الخضراء ومناطق الأطفال.", "Complete facilities, from pools to green spaces and children's areas.", "Havuzlardan yeşil alanlara ve çocuk alanlarına kapsamlı olanaklar."),
      t("خيارات دفع مرنة: دفعة أولى تبدأ من 35% وفترات تصل إلى 48 شهرًا، وفق خطة الدفع والوحدات المؤهلة.", "Flexible payment: down payment from 35% and up to 48 months, depending on the plan and eligible units.", "Esnek ödeme: ödeme planına ve uygun birimlere göre %35'ten başlayan peşinat ve 48 aya kadar vade."),
    ],
  },
};
