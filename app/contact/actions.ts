"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";

export type EnquiryState = { ok: boolean; message: string; errors?: Record<string, string>; firstName?: string };

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const esc = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Where enquiries are delivered, and the verified-domain address they're sent from. */
const TO = process.env.CONTACT_TO_EMAIL || site.email;
const FROM = process.env.CONTACT_FROM_EMAIL || `Desired IT Solutions <enquiries@desireditsolutions.com.au>`;

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim().slice(0, 5000);
  const data = {
    name: get("name"),
    business: get("business"),
    email: get("email"),
    phone: get("phone"),
    services: formData.getAll("services").map((s) => String(s).slice(0, 60)),
    budget: get("budget"),
    timeline: get("timeline"),
    message: get("message"),
  };

  // Honeypot: real people never fill this hidden field; bots usually do.
  if (get("company_website")) return { ok: true, message: "Sent", firstName: data.name.split(" ")[0] };

  const errors: Record<string, string> = {};
  if (!data.name) errors.name = "Enter your name.";
  if (!data.business) errors.business = "Enter your business name.";
  if (!isEmail(data.email)) errors.email = "Enter a valid email address.";
  if (Object.keys(errors).length) return { ok: false, message: "Check the highlighted fields.", errors };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[enquiry] RESEND_API_KEY is not set, so the enquiry was NOT emailed:", data);
    return { ok: false, message: `We couldn't send your enquiry right now. Please email us at ${site.email} or call ${site.phone}.` };
  }

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Business", data.business],
    ["Email", data.email],
    ["Phone", data.phone || "-"],
    ["Services", data.services.join(", ") || "-"],
    ["Budget", data.budget || "-"],
    ["Timeline", data.timeline || "-"],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#0e1116;max-width:600px">
      <h2 style="margin:0 0 16px">New website enquiry</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="border-bottom:1px solid #e4e4de;color:#5b616e;width:120px">${k}</td><td style="border-bottom:1px solid #e4e4de">${esc(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 8px">Project details</h3>
      <p style="white-space:pre-wrap;margin:0">${esc(data.message || "-")}</p>
      <p style="margin-top:24px;color:#5b616e;font-size:13px">Hit reply to respond directly to ${esc(data.name)}.</p>
    </div>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nProject details:\n${data.message || "-"}`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: data.email,
    subject: `New enquiry: ${data.name} (${data.business})`,
    html,
    text,
  });

  if (error) {
    console.error("[enquiry] Resend failed:", error, data);
    return { ok: false, message: `Something went wrong sending your enquiry. Please email us at ${site.email} or call ${site.phone}.` };
  }

  // Confirmation to the customer. Failure here shouldn't fail the enquiry.
  await resend.emails
    .send({
      from: FROM,
      to: [data.email],
      replyTo: TO,
      subject: "Thanks, we've received your enquiry",
      text: `Hi ${data.name.split(" ")[0]},\n\nThanks for getting in touch with ${site.name}. We've received your project details and one of our team will reply within one business day to book your free strategy call.\n\nIf it's urgent, call us on ${site.phone}.\n\nThe ${site.name} team\n${site.url}`,
    })
    .catch((e) => console.error("[enquiry] confirmation email failed:", e));

  return { ok: true, message: "Sent", firstName: data.name.split(" ")[0] };
}
