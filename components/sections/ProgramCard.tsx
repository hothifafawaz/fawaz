import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPillar, type Program } from "@/content/programs";

export function ProgramCard({ program, index }: { program: Program; index?: number }) {
  return (
    <Link
      href={`/training/${program.slug}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-sand-dark bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-xl hover:shadow-navy/10"
    >
      <div>
        <div className="flex items-center justify-between text-sm">
          {index !== undefined && <span className="ltr-num font-bold text-gold">{String(index + 1).padStart(2, "0")}</span>}
          <span className="text-muted">{getPillar(program.pillar)?.title}</span>
        </div>
        <h3 className="mt-6 text-2xl font-bold text-navy">{program.title}</h3>
        <p className="mt-3 leading-loose text-muted">{program.summary}</p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 font-semibold text-navy group-hover:text-gold">
        تفاصيل البرنامج
        <ArrowLeft aria-hidden className="size-4 transition-transform group-hover:-translate-x-1" />
      </span>
    </Link>
  );
}
