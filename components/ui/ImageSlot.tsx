import Image from "next/image";
import { cn } from "@/lib/cn";
import { hasImage, imageSrc, type ImageDef } from "@/lib/images";

/**
 * يعرض أول ملف موجود من `files` داخل public/images/fawaz،
 * وإلا يعرض Placeholder واضحًا باسم الملف المتوقع (أو لا شيء مع hideIfMissing).
 * لا صور بديلة لأشخاص آخرين.
 */
export function ImageSlot({
  image,
  alt,
  className,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  tone = "navy",
  hideIfMissing = false,
}: {
  image: ImageDef;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  tone?: "navy" | "sand";
  hideIfMissing?: boolean;
}) {
  if (hasImage(image)) {
    return (
      <div className={cn("group relative overflow-hidden", className)}>
        <Image
          src={imageSrc(image)}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: image.fit ?? "cover", objectPosition: image.position ?? "center" }}
          className="transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    );
  }
  if (hideIfMissing) return null;
  const dark = tone === "navy";
  return (
    <div
      role="img"
      aria-label={`${alt} — الصورة قيد الإضافة`}
      className={cn(
        "relative flex flex-col items-center justify-end overflow-hidden p-6 text-center",
        dark ? "bg-navy text-ivory" : "bg-sand text-navy",
        className,
      )}
    >
      <div className="grain absolute inset-0" aria-hidden />
      <div aria-hidden className={cn("absolute inset-4 border", dark ? "border-gold-soft/30" : "border-gold/30")} />
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-[22%] select-none text-[9rem] font-bold leading-none opacity-90 sm:text-[11rem]",
          dark ? "text-gold-soft/90" : "text-gold/80",
        )}
      >
        ف
      </span>
      <div className="relative mb-2 space-y-2">
        <span className="block text-sm opacity-85">{alt}</span>
        <span dir="ltr" className={cn("inline-block rounded-full border px-3 py-1 text-xs", dark ? "border-ivory/30 text-ivory/70" : "border-navy/30 text-navy/70")}>
          {image.file}
        </span>
      </div>
    </div>
  );
}
