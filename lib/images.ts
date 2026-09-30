import fs from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "public/images/fawaz");

/** هل يوجد أي ملف من القائمة داخل public/images/fawaz؟ (للمكوّنات الخادمية فقط) */
export function hasImage(files: string[]) {
  return files.some((f) => fs.existsSync(path.join(DIR, f)));
}

export const imageFiles = {
  hero: ["hero.webp", "fawaz-hero.jpg", "fawaz-hero.webp"],
  portrait1: ["portrait-01.webp"],
  portrait2: ["portrait-02.webp", "portrait-01.webp"],
  training1: ["training-01.webp"],
  training2: ["training-02.webp"],
  speaking1: ["speaking-01.webp"],
  consulting1: ["consulting-01.webp"],
};
