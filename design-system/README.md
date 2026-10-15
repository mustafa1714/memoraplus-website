# Memora Plus — Design System (نسخة محلية كاملة)

هذه نسخة كاملة من نظام التصميم المنشور على Claude Design باسم **Memora Plus**. أي تعديل يُجرى على النسخة المنشورة يجب أن يُنقل إلى هنا، والعكس.

| المجلد | المحتوى |
|---|---|
| `project/` | مصدر النظام كما هو منشور: `README.md` (دليل العلامة)، `decisions.md` (سجل القرارات)، `implementation.md` (التنفيذ التقني)، `tokens.json`، `components/` (bundle.css، bundle.js، index.d.ts، ومجلد لكل مكوّن فيه README ومعاينة) |
| `dist/tokens.css` | متغيرات CSS المولَّدة من `tokens.json` — استخدمها مباشرة في الموقع |
| `assets/logo/` | الشعارات المقصوصة والرمز وحده (PNG + WebP). الأصول الأصلية في `../VID/logos/logo/` لم تُعدَّل |
| `fonts/` | IBM Plex Sans Arabic + IBM Plex Sans بصيغة WOFF2 مع `fonts.css` للاستضافة الذاتية (ترخيص OFL في `LICENSE-OFL.txt`) |
| `preview/` | معاينات محلية — افتح `preview/index.html` في المتصفح |

ملاحظة: معاينات `project/components/*/preview.html` مكتوبة لبيئة Claude Design (روابط الشعارات `/_blob/…`)؛ استخدم `preview/` للعرض المحلي.
