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
ضع الملفات في `public/images/fawaz/` وستظهر تلقائيًا بدل الـPlaceholder:
`hero.webp` (أو `fawaz-hero.jpg`) · `portrait-01.webp` · `portrait-02.webp` · `training-01..03.webp` · `consulting.webp`.

## ملاحظات قبل الإطلاق
- آراء المتدربين: `testimonials` في `fawaz.ts` بحالة `testimonial_pending` ولا تُعرض.
- المقالات في `knowledge.ts` صياغات أولية تحتاج مراجعة فواز قبل النشر.
- صفحتا الخصوصية والشروط صيغة أولية.
- نموذج التواصل يفتح رسالة بريد (mailto) ولا يملك خادمًا؛ اربطه بخدمة إرسال عند الحاجة.
- اضبط `NEXT_PUBLIC_SITE_URL` لنطاق الموقع (sitemap وSchema).
