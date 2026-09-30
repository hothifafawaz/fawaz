import fs from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "public/images/fawaz");

export type ImageDef = {
  /** اسم الملف داخل public/images/fawaz — ثابت، استبدل الملف نفسه بالصورة الحقيقية */
  file: string;
  /** object-fit (cover أو contain) */
  fit?: "cover" | "contain";
  /** object-position — مثال: "50% 20%" لإبقاء الوجه داخل الإطار */
  position?: string;
};

/**
 * المسارات الثابتة لصور الموقع. لتعديل القص استخدم fit وposition هنا
 * دون لمس المكوّنات. الاستبدال: ضع الصورة الحقيقية بالاسم نفسه.
 */
export const images = {
  hero: { file: "hero.webp", fit: "cover", position: "50% 20%" },
  portrait1: { file: "portrait-01.webp", fit: "cover", position: "50% 25%" },
  training1: { file: "training-01.webp", fit: "cover", position: "50% 25%" },
  speaking1: { file: "speaking-01.webp", fit: "cover", position: "50% 40%" },
  consulting1: { file: "consulting-01.webp", fit: "cover", position: "50% 25%" },
} satisfies Record<string, ImageDef>;

export const imageSrc = (img: ImageDef) => `/images/fawaz/${img.file}`;

/** هل الملف موجود؟ (للمكوّنات الخادمية فقط) */
export function hasImage(img: ImageDef) {
  return fs.existsSync(path.join(DIR, img.file));
}
