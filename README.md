# الموقع الرسمي — فواز الفخري

Next.js (App Router) + TypeScript + Tailwind CSS 4 + Framer Motion. عربي RTL فقط.

```bash
npm install
npm run dev        # تطوير
npm run lint && npm run typecheck && npm run build
```

## أين أعدّل المحتوى؟
كل النصوص والبيانات في `content/` (لا تُكتب داخل JSX):
`site.ts` (التواصل/الروابط/التنقل — مصدر وحيد) · `fawaz.ts` · `programs.ts` · `organizations.ts` · `methodologies.ts` · `knowledge.ts` · `faq.ts`.

## الصور
ضع الملفات في `public/images/fawaz/` وستظهر تلقائيًا دون تعديل الكود (تُعرض Placeholder حتى ذلك الحين). الصيغة المفضلة WebP، وجودة 80–85.

| الملف | أين يظهر | النسبة | المقاس المقترح |
|---|---|---|---|
| `hero.webp` | الهيرو (الرئيسية) | 4:5 عمودي | 1600×2000 |
| `portrait-01.webp` | قسم «عن فواز» في الرئيسية | 4:5 | 1200×1500 |
| `portrait-02.webp` | صفحة `/about` | 4:5 | 1200×1500 |
| `training-01.webp` | معرض `/about` | 4:3 | 1800×1350 |
| `training-02.webp` | معرض `/about` | 4:3 | 1800×1350 |
| `speaking-01.webp` | معرض `/about` | 4:3 | 1800×1350 |
| `consulting-01.webp` | صفحة `/consulting` | 16:9 | 1920×1080 |

المعرض في `/about` وصورة الاستشارات يُخفيان إن لم توجد الملفات. لا تستخدم صور أشخاص آخرين.

## ملاحظات قبل الإطلاق
- آراء المتدربين: `testimonials` في `fawaz.ts` بحالة `testimonial_pending` ولا تُعرض.
- المقالات في `knowledge.ts` صياغات أولية تحتاج مراجعة فواز قبل النشر.
- صفحتا الخصوصية والشروط صيغة أولية.
- **نموذج التواصل تنفيذ مؤقت:** يفتح رسالة بريد جاهزة (mailto) من جهاز الزائر ولا يملك خادمًا ولا يحفظ الطلبات. اربطه بخدمة إرسال (مثل Route Handler مع مزوّد بريد) قبل الاعتماد عليه.
- اضبط `NEXT_PUBLIC_SITE_URL` لنطاق الموقع (sitemap وSchema).
