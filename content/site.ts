/**
 * المصدر الوحيد لبيانات الموقع وروابط التواصل.
 * لا تكرّر هذه القيم داخل المكوّنات.
 */
export const site = {
  name: "فواز الفخري",
  fullName: "فواز أبوبكر علي الفخري",
  title: "فواز الفخري | مدرب التفكير والموهبة والتطوير القيادي",
  titleTemplate: "%s | فواز الفخري",
  description:
    "الموقع الرسمي للمدرب والمستشار فواز الفخري، متخصص في التفكير والقيادة والتخطيط الاستراتيجي والتطوير المؤسسي وتصميم البرامج التدريبية.",
  descriptor: "التفكير • القيادة • التخطيط • التطوير",
  shortDescriptor: "التفكير • القيادة • التخطيط",
  role: "مدرب التفكير والموهبة والتطوير القيادي",
  roleShort: "مدرب ومستشار في التفكير والقيادة والتخطيط والتطوير المؤسسي",
  roleLong:
    "مدرب التفكير والموهبة والتطوير القيادي ومستشار التخطيط والتطوير المؤسسي",
  location: "سيئون – حضرموت – اليمن",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  keywords: [
    "فواز الفخري",
    "مدرب فواز الفخري",
    "مدرب قيادة",
    "مدرب تفكير",
    "التخطيط الاستراتيجي",
    "التطوير القيادي",
    "التدريب المؤسسي",
    "حضرموت",
    "اليمن",
  ],
  contact: {
    email: "fawazfakhry@gmail.com",
    phones: [
      { label: "+967 777 375 326", tel: "+967777375326" },
      { label: "+967 712 680 631", tel: "+967712680631" },
    ],
    whatsapp: "https://wa.me/967777375326",
  },
  /** أضف هنا YouTube / LinkedIn / Instagram / X عند توفّر الروابط الرسمية. */
  social: [
    {
      id: "facebook",
      label: "فيسبوك",
      href: "https://www.facebook.com/fawazfakhri/",
    },
  ] as { id: "facebook" | "youtube" | "linkedin" | "instagram" | "x"; label: string; href: string }[],
} as const;

export const links = {
  requestProgram: "/contact?type=program",
  requestInstitutional: "/contact?type=institutional",
  requestConsulting: "/contact?type=consulting",
  contact: "/contact",
  mailto: `mailto:${site.contact.email}`,
};

export const nav = [
  { label: "الرئيسية", href: "/" },
  { label: "عن فواز", href: "/about" },
  { label: "مجالات التدريب", href: "/training" },
  { label: "الاستشارات", href: "/consulting" },
  { label: "للمؤسسات", href: "/organizations" },
  { label: "المعرفة", href: "/knowledge" },
  { label: "تواصل", href: "/contact" },
];

export const footerNav = [
  { label: "عن فواز", href: "/about" },
  { label: "مجالات التدريب", href: "/training" },
  { label: "الاستشارات", href: "/consulting" },
  { label: "المؤسسات", href: "/organizations" },
  { label: "المعرفة", href: "/knowledge" },
  { label: "تواصل", href: "/contact" },
];

export const legalNav = [
  { label: "سياسة الخصوصية", href: "/privacy" },
  { label: "الشروط والأحكام", href: "/terms" },
];
