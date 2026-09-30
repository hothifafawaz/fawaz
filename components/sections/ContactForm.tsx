"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { site, requestTypes } from "@/content/site";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<"name" | "email" | "type" | "message", string>>;

const field =
  "mt-2 w-full rounded-xl border border-sand-dark bg-paper px-4 py-3 text-ink placeholder:text-muted/60 focus:border-navy";

function Err({ id, msg }: { id: string; msg?: string }) {
  return msg ? <p id={id} role="alert" className="mt-1 text-sm text-red-700">{msg}</p> : null;
}

export function ContactForm() {
  const params = useSearchParams();
  const initial = requestTypes.find((t) => t.value === params.get("type"))?.value ?? "";
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Errors = {};
    if (!v("name")) next.name = "يرجى كتابة الاسم.";
    if (!/^\S+@\S+\.\S+$/.test(v("email"))) next.email = "يرجى كتابة بريد إلكتروني صحيح.";
    if (!v("type")) next.type = "يرجى اختيار نوع الطلب.";
    if (v("message").length < 10) next.message = "يرجى وصف احتياجك في بضعة أسطر.";
    setErrors(next);
    if (Object.keys(next).length) {
      (e.currentTarget.querySelector("[aria-invalid=true]") as HTMLElement | null)?.focus();
      return;
    }
    const typeLabel = requestTypes.find((t) => t.value === v("type"))?.label ?? "";
    const body = [
      `الاسم: ${v("name")}`,
      `اسم الجهة: ${v("org")}`,
      `المسمى الوظيفي: ${v("role")}`,
      `البريد الإلكتروني: ${v("email")}`,
      `رقم الهاتف: ${v("phone")}`,
      `نوع الطلب: ${typeLabel}`,
      "",
      v("message"),
    ].join("\n");
    const subject = `طلب جديد: ${typeLabel} — ${v("name")}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-semibold text-navy">الاسم <span aria-hidden className="text-red-700">*</span></label>
          <input id="name" name="name" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} className={field} />
          <Err id="name-err" msg={errors.name} />
        </div>
        <div>
          <label htmlFor="org" className="font-semibold text-navy">اسم الجهة</label>
          <input id="org" name="org" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="role" className="font-semibold text-navy">المسمى الوظيفي</label>
          <input id="role" name="role" autoComplete="organization-title" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className="font-semibold text-navy">رقم الهاتف</label>
          <input id="phone" name="phone" type="tel" dir="ltr" autoComplete="tel" className={cn(field, "text-end")} />
        </div>
        <div>
          <label htmlFor="email" className="font-semibold text-navy">البريد الإلكتروني <span aria-hidden className="text-red-700">*</span></label>
          <input id="email" name="email" type="email" dir="ltr" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} className={cn(field, "text-end")} />
          <Err id="email-err" msg={errors.email} />
        </div>
        <div>
          <label htmlFor="type" className="font-semibold text-navy">نوع الطلب <span aria-hidden className="text-red-700">*</span></label>
          <select id="type" name="type" defaultValue={initial} required aria-invalid={!!errors.type} aria-describedby={errors.type ? "type-err" : undefined} className={field}>
            <option value="" disabled>اختر نوع الطلب</option>
            {requestTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
          <Err id="type-err" msg={errors.type} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="font-semibold text-navy">تفاصيل الاحتياج <span aria-hidden className="text-red-700">*</span></label>
        <textarea id="message" name="message" rows={6} required aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} className={field} />
        <Err id="message-err" msg={errors.message} />
      </div>
      <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-8 py-3 font-semibold text-ivory transition-colors hover:bg-navy-800">
        إرسال الطلب
      </button>
      {sent && (
        <p role="status" className="rounded-xl bg-sand p-4 text-navy">
          فُتح تطبيق البريد لديك ومعه رسالتك جاهزة للإرسال. إن لم يفتح، راسلنا مباشرة على{" "}
          <a href={`mailto:${site.contact.email}`} className="font-semibold underline"><span dir="ltr" className="ltr-num">{site.contact.email}</span></a>.
        </p>
      )}
    </form>
  );
}
