# الأفق الملكي · Royal Horizon

نظام هوية بصرية كامل لشركة سياحة سعودية، مبني بـ CSS و SVG و React/Vue قابل للتعديل بالكامل عن طريق الكود.

## هيكلة الملفات

```
royal-horizon-brand/
├── index.html                        صفحة عرض كاملة للهوية (Demo)
├── tailwind.config.js                إعدادات Tailwind مع ألوان البراند
├── package.json                      تبعيات المشروع
├── manifest.webmanifest              PWA manifest
└── src/
    ├── styles/
    │   ├── tokens.css                المتغيرات: الألوان، الخطوط، المسافات
    │   ├── typography.css            استيراد خطوط Google + قواعد الكتابة
    │   ├── base.css                  إعادة الضبط (reset) + body
    │   └── components.css            مكونات (زر، بطاقة، إلخ)
    ├── assets/
    │   ├── logo-icon.svg             أيقونة للـ favicon والتطبيقات
    │   ├── logo-monogram.svg         الشعار الرئيسي (H + شروق + نجمة)
    │   ├── logo-lockup-horizontal.svg  شعار أفقي بالعربي والإنجليزي
    │   ├── logo-lockup-stacked.svg   شعار عمودي
    │   ├── favicon.svg               فافيكون 32×32
    │   └── apple-touch-icon.svg      أيقونة iOS 180×180
    └── components/
        ├── Logo.jsx                  مكوّن React
        └── Logo.vue                  مكوّن Vue
```

## التشغيل السريع

1. افتح `index.html` مباشرة في المتصفح لمعاينة الهوية كاملة.
2. للمشاريع الحقيقية، اربط `tokens.css` + `typography.css` + `base.css` في أعلى ملف الستايل عندك.
3. استورد ملفات الـ SVG كأصول (assets) أو استخدم مكوّنات React/Vue الجاهزة.

## الألوان

| التوكن | Hex | الاستخدام |
|---|---|---|
| `--rh-lavender-600` | `#6B4FB8` | اللون الأساسي |
| `--rh-lavender-800` | `#3D2A6B` | عناوين، نص داكن |
| `--rh-lavender-900` | `#2D1E5C` | خلفية الوضع الداكن |
| `--rh-bronze` | `#B07A3D` | لون CTA دافئ |
| `--rh-cream` | `#F8F3EA` | خلفية دافئة محايدة |

تفاصيل كاملة في `src/styles/tokens.css`.

## الخطوط

- **Tajawal** للنصوص العربية (body + UI)
- **DM Sans** للنصوص الإنجليزية (body + UI)
- **Fraunces** للعناوين الكبيرة (Editorial)

كلها من Google Fonts ومستوردة في `src/styles/typography.css`.

## الترخيص

استخدم الكود بحرية لمشروعك. خطوط Google Fonts تحت ترخيص SIL Open Font License.
