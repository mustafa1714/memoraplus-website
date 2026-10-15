# Memora Plus — Design System (نسخة محلية كاملة)

هذه نسخة كاملة من نظام التصميم المنشور على Claude Design باسم **Memora Plus** (المشروع `a292121f-f885-4517-bd41-c9d754f7f66f`، نُشر في 15 أكتوبر 2026). أي تعديل يُجرى على النسخة المنشورة يجب أن يُنقل إلى هنا، والعكس.

**بنية النسخة المنشورة:** محتوى `project/` في جذر المشروع (عدا `design-system.json`)، مع الشعارات بصيغة WebP في `assets/Logos/` و`tokens.css` (من `dist/`) في الجذر.

| المجلد | المحتوى |
|---|---|
| `project/` | مصدر النظام كما هو منشور: `README.md` (دليل العلامة)، `decisions.md` (سجل القرارات)، `implementation.md` (التنفيذ التقني)، `tokens.json`، `components/` (bundle.css، bundle.js، index.d.ts، ومجلد لكل مكوّن فيه README ومعاينة) |
| `dist/tokens.css` | متغيرات CSS المولَّدة من `tokens.json` — استخدمها مباشرة في الموقع |
| `assets/logo/` | الشعارات المقصوصة والرمز وحده (PNG + WebP). الأصول الأصلية في `../VID/logos/logo/` لم تُعدَّل |
| `fonts/` | IBM Plex Sans Arabic + IBM Plex Sans بصيغة WOFF2 مع `fonts.css` للاستضافة الذاتية (ترخيص OFL في `LICENSE-OFL.txt`) |
| `preview/` | معاينات محلية — افتح `preview/index.html` في المتصفح |

ملاحظة: معاينات `project/components/*/preview.html` مقتطفات لبيئة Claude Design (شعاراتها بمسار نسبي `../../assets/Logos/…` كما في النسخة المنشورة)؛ استخدم `preview/` للعرض المحلي.
