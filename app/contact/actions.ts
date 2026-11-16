"use server";

export type EnquiryState = { ok: boolean; message: string; errors?: Record<string, string>; firstName?: string };

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/** Validates the project enquiry. TODO: deliver via email (e.g. Resend) or a CRM. Currently only logs it. */
export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const data = {
    name: get("name"),
    business: get("business"),
    email: get("email"),
    phone: get("phone"),
    services: formData.getAll("services").map(String),
    budget: get("budget"),
    timeline: get("timeline"),
    message: get("message"),
  };

  const errors: Record<string, string> = {};
  if (!data.name) errors.name = "Enter your name.";
  if (!data.business) errors.business = "Enter your business name.";
  if (!isEmail(data.email)) errors.email = "Enter a valid email address.";
  if (Object.keys(errors).length) return { ok: false, message: "Check the highlighted fields.", errors };

  console.log("[enquiry]", data);
  return { ok: true, message: "Sent", firstName: data.name.split(" ")[0] };
}
