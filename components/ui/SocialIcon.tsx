import { Globe } from "lucide-react";

/** أيقونات العلامات التجارية ليست ضمن Lucide، فنستخدم SVG بسيطًا. أضف أيقونات الشبكات الأخرى هنا. */
export function SocialIcon({ id, className }: { id: string; className?: string }) {
  if (id === "facebook") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" />
      </svg>
    );
  }
  return <Globe aria-hidden className={className} />;
}
