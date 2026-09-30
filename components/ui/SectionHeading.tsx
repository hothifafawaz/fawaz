import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  text,
  light,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && (
        <p className={cn("mb-4 text-sm font-semibold", light ? "text-gold-soft" : "text-gold")}>
          <span aria-hidden className="ms-0 me-3 inline-block h-px w-8 bg-current align-middle" />
          {eyebrow}
        </p>
      )}
      <Tag className={cn("h2 whitespace-pre-line", light ? "text-ivory" : "text-navy")}>{title}</Tag>
      {text && (
        <p className={cn("mt-5 text-lg leading-loose", light ? "text-ivory/80" : "text-muted")}>{text}</p>
      )}
    </div>
  );
}
