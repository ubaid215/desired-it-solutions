import type { Metadata } from "next";
import { Fragment } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { PageHero } from "@/components/sections/page-hero";
import { MaskReveal } from "@/components/motion/mask-reveal";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accent, Container, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Strategy Call",
  description:
    "Ready to start your website, app or software project? Book a free strategy call with Desired IT Solutions and get a clear roadmap and fixed-price estimate.",
};

const steps = [
  { t: "We reply quickly", d: "A real person responds within one business day." },
  { t: "Free strategy call", d: "In 30 minutes, we unpack your goals, challenges and ideas." },
  { t: "Roadmap and estimate", d: "A clear plan with approach, timeline and a fixed-price estimate." },
  { t: "You decide", d: "No pressure. When you're ready, we kick off." },
];

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Contact"
        lines={["Let's talk about", <Fragment key="a">your next <Accent>project.</Accent></Fragment>]}
        sub="Tell us what you're working on. We'll reply within one business day with next steps, and your free strategy call is on us."
      />

      <section className="grain bg-paper py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
          <aside className="space-y-6 lg:col-span-4">
            <Reveal className="rounded-[28px] bg-ink p-8 text-white">
              <h2 className="font-display text-xl font-bold">Prefer to talk directly?</h2>
              <ul className="mt-6 space-y-4 text-white/80">
                <li><a href={site.phoneHref} className="flex gap-3 hover:text-lime"><Phone className="size-5 text-lime" />{site.phone}</a></li>
                <li><a href={`mailto:${site.email}`} className="flex gap-3 break-all hover:text-lime"><Mail className="size-5 shrink-0 text-lime" />{site.email}</a></li>
                <li className="flex gap-3"><MapPin className="size-5 shrink-0 text-lime" />{site.address}</li>
              </ul>
              <p className="mt-6 border-t border-line-dark pt-6 text-sm text-white/60">
                Existing client? Email <a href={`mailto:${site.supportEmail}`} className="text-lime">{site.supportEmail}</a> for care-plan support.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-[28px] bg-white p-8 ring-1 ring-ink/5">
              <ul className="space-y-3 text-sm font-medium">
                {["Fixed-price, transparent quotes", "You own all code and designs", "Support long after launch", "Canberra-based team"].map((t) => (
                  <li key={t} className="flex items-center gap-3"><span className="size-2 rounded-full bg-cobalt" />{t}</li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </Container>
      </section>

      <section className="bg-paper-2 py-24">
        <Container>
          <Eyebrow>What happens next</Eyebrow>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <StaggerItem key={s.t} className="rounded-[24px] bg-white p-7 ring-1 ring-ink/5">
                <span className="font-mono text-sm text-cobalt">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted">{s.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-paper pb-24 pt-4">
        <Container>
          <MaskReveal src="/photos/sydney-city.jpg" alt="Australian city skyline" className="aspect-[4/5] sm:aspect-[21/9]">
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white sm:p-12">
              <p className="flex items-center gap-2 text-sm text-lime"><MapPin className="size-4" /> {site.address}</p>
              <p className="mt-2 font-display text-3xl font-bold">Based in Canberra, working <Accent>Australia-wide.</Accent></p>
            </div>
          </MaskReveal>
        </Container>
      </section>
    </PageTransition>
  );
}
