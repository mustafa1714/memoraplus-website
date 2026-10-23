# التنفيذ التقني

الموقع ثابت بالكامل: **HTML دلالي + CSS حديث + JavaScript حديث (ES2020+، بلا أطر عمل ولا مرحلة بناء إلزامية)**. المكوّنات في هذا النظام مكتوبة بهذه الطريقة نفسها، فانقلها كما هي.

## بنية الملفات المقترحة

```
site/
  ar/index.html            ← الرئيسية (العربية، افتراضية)
  ar/projects.html         ← المشاريع
  en/…  tr/…               ← اللغتان الأخريان بالبنية نفسها
  assets/css/tokens.css    ← من tokens.json (مولَّد في هذا النظام)
  assets/css/components.css← نسخة bundle.css
  assets/js/memora.js      ← نسخة bundle.js (يكشف window.MemoraPlus)
  assets/js/main.js        ← تهيئة الصفحة (type="module")
  assets/img/logo/…        ← الشعارات المقصوصة
  data/projects.json       ← بيانات المشاريع (تجريبية الآن)
```

## القواعد

1. **رموز التصميم فقط:** كل لون ومسافة وزاوية وظل يأتي من `var(--…)` في `tokens.css`. لا قيم خام في CSS الصفحات.
2. **RTL أولاً:** `<html lang="ar" dir="rtl">`. استخدم الخصائص المنطقية فقط (`inline`/`block`). للإنجليزية والتركية `dir="ltr"` — لا CSS منفصل.
3. **الخطوط:**
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap">
   ```
   يمكن لاحقاً استضافتها ذاتياً (WOFF2) لتسريع التحميل وتقليل الاتصال بطرف ثالث.
4. **JavaScript تحسين تدريجي:** كل المحتوى والروابط تعمل دونه (روابط واتساب `https://wa.me/905312450579?text=…` عادية). الـ JS يضيف: الهيدر المضغوط، قائمة الجوال، الفلترة، تحميل الفيديو، شريط الموافقة، الظهور الناعم.
   ```html
   <script src="/assets/js/memora.js" defer></script>
   <script type="module" src="/assets/js/main.js"></script>
   ```
   ```js
   // main.js
   MemoraPlus.initAll(); // يهيّئ كل [data-mp-*] في الصفحة
   ```
5. **بيانات المشاريع:** في `data/projects.json`. للأداء وSEO اكتب البطاقات في HTML مباشرة (أو ولّدها بسكربت بسيط وقت البناء)، ولا تعتمد على `fetch` لعرضها. حقول كل مشروع:
   `id, name, location, district, type, status, priceFrom, downPayment, installmentMonths, delivery, image, imageAlt, draft`.
6. **التتبّع:** لا تحمّل Google Analytics ولا Meta Pixel قبل الموافقة. `CookieBanner` يطلق الحدث `mp:consent` بـ `{detail:{analytics:true|false}}` ويحفظ الاختيار؛ حمّل السكربتات داخل مستمع هذا الحدث فقط.
7. **الفيديو:** `VideoEmbed` يعرض صورة وزر تشغيل، ولا يحمّل `youtube-nocookie.com` إلا عند الضغط.
8. **الخريطة:** ضع خريطة Google داخل `iframe` بـ `loading="lazy"`، أو صورة ثابتة برابط إلى الخريطة عند غياب الموافقة.
9. **الأداء:** صور WebP/AVIF بأبعاد صريحة، `loading="lazy"` لما تحت أول شاشة، `fetchpriority="high"` لصورة البطل. هدف Lighthouse ≥ 90 في الأداء وإمكانية الوصول وSEO.
10. **SEO:** `hreflang` بين ar/en/tr، `<title>` و`description` لكل صفحة ولغة، بيانات منظمة `RealEstateAgent` بالبيانات المتوفرة فقط.
11. **المتصفحات:** آخر نسختين من Chrome وSafari وFirefox وEdge، وSafari على iOS. المكوّنات تستخدم Container Queries و`:focus-visible` و`IntersectionObserver` (مدعومة في كلها).

## واجهة `window.MemoraPlus`

| الدالة | الوظيفة |
|---|---|
| `initAll(root?)` | يهيّئ كل المكوّنات المعلَّمة بـ `data-mp-*` |
| `initHeader(el)` | الهيدر المضغوط بعد التمرير + قائمة الجوال |
| `initFilters(el)` | فلترة البطاقات حسب `data-location`، `data-type`، `data-status` |
| `initVideo(el)` | تحميل فيديو YouTube عند الضغط |
| `initCookieBanner(el)` | الموافقة على ملفات الارتباط |
| `initReveal(root?)` | الظهور الناعم للعناصر `[data-mp-reveal]` |
| `whatsappUrl(message?)` | رابط واتساب برسالة جاهزة |
| `formatPrice(n, lang?)` | `$250,000` |
| `icon(name)` | SVG أيقونة خطية |
| `PHONE` | `905312450579` |
