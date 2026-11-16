import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import { Briefcase, Building2, HardHat, HeartPulse, Rocket, ShoppingCart } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { ServiceNav } from "@/components/services/service-nav";
import { Check } from "@/components/motion/doodles";
import { LineReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accent, ButtonLink, Container, Eyebrow } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Services: Web Design, Apps, Software & SEO",
  description:
    "Website design, e-commerce, custom software, mobile apps, UI/UX, SEO, digital marketing and AI automation for Australian businesses. Get a fixed-price quote.",
};

const models = [
  { t: "Fixed-price projects", d: "A clear scope, timeline and price.", best: "Websites, stores and well-defined builds." },
  { t: "Dedicated team", d: "Your own designers and developers working as an extension of your team.", best: "Ongoing product development." },
  { t: "Monthly retainers", d: "Ongoing marketing, SEO, improvements and support.", best: "Steady, compounding growth." },
];

const industries = [
  { icon: Briefcase, t: "Professional services", d: "Websites and client portals that build trust and win work." },
  { icon: HeartPulse, t: "Health & allied health", d: "Online booking and privacy-conscious systems." },
  { icon: HardHat, t: "Construction & trades", d: "Lead-generating sites, quoting tools and job apps." },
  { icon: ShoppingCart, t: "Retail & e-commerce", d: "Stores with Australian payments and shipping." },
  { icon: Rocket, t: "Startups & tech", d: "MVPs and scalable platforms, built fast." },
  { icon: Building2, t: "Not-for-profits & education", d: "Accessible sites, donation and learning portals." },
];

const serviceFaqs = [
  {
    q: "Do you only work with Australian businesses?",
    a: "Our focus is Australian businesses, and we work in your time zone. Get in touch if you're based elsewhere and we'll talk it through.",
  },
  { q: "Can I choose just one service?", a: "Yes. Many clients start with a single project, like a new website or an automation, and grow from there." },
  { q: "Do you write the content too?", a: "We can. Our copywriters create conversion-focused content, or we can polish what you already have." },
  { q: "What do I need to get started?", a: "Just an idea and a goal. We'll guide you through the rest on a free strategy call." },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Our services"
        lines={["Everything you need to", <Fragment key="a">launch, run and <Accent>grow</Accent> online.</Fragment>]}
        sub="From your first website to complex custom platforms, we bring strategy, design, development and marketing together, so you get one team, one plan and real results."
      >
        <ButtonLink href="/contact" size="lg">Book a free strategy call</ButtonLink>
      </PageHero>

      <ServiceNav />

      <div className="grain bg-paper">
        {services.map((s, i) => {
          const Icon = s.icon;
          const flip = i % 2 === 1;
          return (
            <section key={s.slug} id={s.slug} className="scroll-mt-40 border-b border-line py-20 sm:py-28">
              <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                <Reveal className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[28px] bg-paper-3">
                    <Image
                      src={s.image}
                      alt={`${s.name} illustration photo`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out-quint group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-semibold backdrop-blur">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute bottom-5 right-5 rounded-2xl bg-lime px-4 py-2 text-sm font-semibold shadow-lg">
                      Typical timeline: {s.timeline}
                    </span>
                  </div>
                </Reveal>
                <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
                  <Reveal>
                    <span className="grid size-12 place-items-center rounded-2xl bg-cobalt text-white">
                      <Icon className="size-6" />
                    </span>
                  </Reveal>
                  <LineReveal
                    as="h2"
                    inView
                    lines={[s.name]}
                    className="mt-6 font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl"
                  />
                  <Reveal delay={0.1}>
                    <p className="mt-2 font-serif text-2xl italic text-cobalt">{s.tagline}</p>
                    <p className="mt-5 text-lg leading-relaxed text-muted">{s.intro}</p>
                  </Reveal>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {s.included.map((item, k) => (
                      <li key={item} className="flex gap-3 text-[15px]">
                        <Check className="mt-0.5 size-5 shrink-0 text-cobalt" delay={0.1 + k * 0.06} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-5">
                    <ButtonLink href="/contact">{s.cta}</ButtonLink>
                    <p className="max-w-xs text-sm text-muted">
                      <span className="font-semibold text-ink">Ideal for:</span> {s.idealFor}
                    </p>
                  </Reveal>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      {/* Engagement models */}
      <section className="bg-paper-2 py-24 sm:py-32">
        <Container>
          <Eyebrow>Engagement models</Eyebrow>
          <LineReveal
            as="h2"
            inView
            className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl"
            lines={[<Fragment key="b">Flexible ways to <Accent>work with us</Accent></Fragment>]}
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {models.map((m, i) => (
              <StaggerItem key={m.t}>
                <div className={`flex h-full flex-col rounded-[28px] p-8 ${i === 0 ? "bg-ink text-white" : "bg-white ring-1 ring-ink/5"}`}>
                  <span className={`font-mono text-sm ${i === 0 ? "text-lime" : "text-cobalt"}`}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 font-display text-2xl font-bold">{m.t}</h3>
                  <p className={`mt-3 ${i === 0 ? "text-white/70" : "text-muted"}`}>{m.d}</p>
                  <p className={`mt-auto pt-8 text-sm ${i === 0 ? "text-white/60" : "text-muted"}`}>
                    <span className={`font-semibold ${i === 0 ? "text-white" : "text-ink"}`}>Best for:</span> {m.best}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10">
            <ButtonLink href="/contact" variant="outline-dark">Find the right fit for me</ButtonLink>
          </Reveal>
        </Container>
      </section>

      {/* Industries */}
      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <Eyebrow>Industries</Eyebrow>
          <LineReveal
            as="h2"
            inView
            className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl"
            lines={[<Fragment key="c">Digital solutions for <Accent>every</Accent> industry</Fragment>]}
          />
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, t, d }) => (
              <StaggerItem key={t} className="group bg-white p-8 transition-colors duration-500 hover:bg-ink hover:text-white">
                <Icon className="size-7 text-cobalt transition-colors group-hover:text-lime" />
                <h3 className="mt-6 font-display text-xl font-bold">{t}</h3>
                <p className="mt-2 text-muted transition-colors group-hover:text-white/60">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <Faq items={serviceFaqs} />
      <CtaBand />
    </PageTransition>
  );
}
