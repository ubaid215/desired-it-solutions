"use client";

import { useActionState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Check } from "@/components/motion/doodles";
import { site } from "@/lib/site";
import { submitEnquiry, type EnquiryState } from "./actions";

const serviceOptions = ["Website", "E-commerce", "Custom software", "Mobile app", "UI/UX & branding", "SEO & marketing", "AI & automation", "Not sure yet"];

const field =
  "w-full rounded-2xl bg-white px-4 py-3.5 text-ink ring-1 ring-ink/10 outline-none transition focus:ring-2 focus:ring-cobalt aria-[invalid=true]:ring-red-500";

export function ContactForm() {
  const [state, action, pending] = useActionState<EnquiryState, FormData>(submitEnquiry, { ok: false, message: "" });
  const err = state.errors ?? {};

  return (
    <AnimatePresence mode="wait">
      {state.ok ? (
        <motion.div
          key="ok"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[28px] bg-white p-10 text-center ring-1 ring-ink/5"
          role="status"
        >
          <Check className="mx-auto size-16 text-cobalt" />
          <h2 className="mt-6 font-display text-3xl font-bold">Thanks, {state.firstName}!</h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Your project details are with us. One of our team will be in touch within one business day to book your free strategy call.
            Need help right now? Call {site.phone}.
          </p>
        </motion.div>
      ) : (
        <motion.form key="form" action={action} noValidate className="rounded-[28px] bg-white/60 p-6 ring-1 ring-ink/5 sm:p-10">
          <h2 className="font-display text-2xl font-bold">Tell us about your project</h2>
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Leave this field empty
              <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              { n: "name", l: "Full name", t: "text", ac: "name", req: true },
              { n: "business", l: "Business name", t: "text", ac: "organization", req: true },
              { n: "email", l: "Email", t: "email", ac: "email", req: true },
              { n: "phone", l: "Phone", t: "tel", ac: "tel", req: false },
            ].map((f) => (
              <label key={f.n} className="block text-sm font-medium">
                {f.l} {f.req && <span className="text-cobalt">*</span>}
                <input
                  name={f.n}
                  type={f.t}
                  autoComplete={f.ac}
                  required={f.req}
                  aria-invalid={err[f.n] ? true : undefined}
                  className={`${field} mt-2`}
                />
                {err[f.n] && <span className="mt-1.5 block text-sm text-red-600">{err[f.n]}</span>}
              </label>
            ))}
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium">What do you need?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {serviceOptions.map((s) => (
                <label key={s} className="cursor-pointer">
                  <input type="checkbox" name="services" value={s} className="peer sr-only" />
                  <span className="block rounded-full bg-white px-4 py-2 text-sm ring-1 ring-ink/10 transition peer-checked:scale-105 peer-checked:bg-ink peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-cobalt">
                    {s}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Estimated budget
              <select name="budget" className={`${field} mt-2`} defaultValue="">
                <option value="" disabled>Select a range</option>
                <option>Under $5k</option>
                <option>$5k–$15k</option>
                <option>$15k–$50k</option>
                <option>$50k+</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="block text-sm font-medium">
              Ideal timeline
              <select name="timeline" className={`${field} mt-2`} defaultValue="">
                <option value="" disabled>Select a timeline</option>
                <option>ASAP</option>
                <option>1–3 months</option>
                <option>3–6 months</option>
                <option>Just exploring</option>
              </select>
            </label>
          </div>

          <label className="mt-6 block text-sm font-medium">
            Tell us about your project
            <textarea
              name="message"
              rows={5}
              placeholder="We need a new website that brings in more quote requests and connects to our CRM."
              className={`${field} mt-2 resize-y`}
            />
          </label>

          {state.message && !state.ok && <p className="mt-4 text-sm text-red-600" role="alert">{state.message}</p>}

          <button
            type="submit"
            disabled={pending}
            className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-cobalt py-4 pl-7 pr-5 font-semibold text-white transition-colors hover:bg-cobalt-600 disabled:opacity-70"
          >
            {pending ? "Sending…" : "Book my free strategy call"}
            {pending ? <Loader2 className="size-5 animate-spin" /> : <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
          </button>
          <p className="mt-4 text-sm text-muted">
            No obligation, no hard sell. We&apos;ll reply within one business day. Your details are kept private.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
