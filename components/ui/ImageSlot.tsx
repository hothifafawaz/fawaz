import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { cn } from "@/lib/cn";

const DIR = path.join(process.cwd(), "public/images/fawaz");

/**
 * يعرض أول ملف موجود من `files` داخل public/images/fawaz،
 * وإلا يعرض Placeholder واضحًا باسم الملف المتوقع. لا صور بديلة لأشخاص آخرين.
 */
export function ImageSlot({
  files,
  alt,
  placeholderName,
  className,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  tone = "navy",
}: {
  files: string[];
  alt: string;
  placeholderName: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  tone?: "navy" | "sand";
}) {
  const found = files.find((f) => fs.existsSync(path.join(DIR, f)));
  if (found) {
    return (
      <div className={cn("group relative overflow-hidden", className)}>
        <Image
          src={`/images/fawaz/${found}`}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    );
  }
  const dark = tone === "navy";
  return (
    <div
      role="img"
      aria-label={`${alt} — صورة قيد الإضافة`}
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden text-center",
        dark ? "bg-navy text-ivory" : "bg-sand text-navy",
        className,
      )}
    >
      <div className="grain absolute inset-0" aria-hidden />
      <span aria-hidden className={cn("relative text-7xl font-bold leading-none sm:text-8xl", dark ? "text-gold-soft" : "text-gold")}>ف</span>
      <span className="relative text-sm opacity-80">{alt}</span>
      <span dir="ltr" className="relative rounded-full border border-current/30 px-3 py-1 text-xs opacity-70">
        {placeholderName}
      </span>
    </div>
  );
}
