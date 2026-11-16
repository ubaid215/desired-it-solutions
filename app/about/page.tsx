import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import { Check, X } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Testimonials } from "@/components/sections/testimonials";
import { MaskReveal } from "@/components/motion/mask-reveal";
import { LineReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { VelocityMarquee } from "@/components/motion/interactive";
import { Sparkle } from "@/components/motion/doodles";
import { Polaroid } from "@/components/polaroid";
import { TornEdge } from "@/components/torn-edge";
import { Accent, ButtonLink, Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us | Digital Agency & Software Development Team",
  description:
    "Meet Desired IT Solutions, a digital services team helping Australian businesses grow with websites, apps, software and marketing that deliver results.",
};

const values = [
  { t: "Outcomes over output", d: "We judge success by your results, not by the number of features shipped." },
  { t: "Radical transparency", d: "Clear quotes, honest timelines and weekly updates. If there's a problem, you'll hear it from us first." },
  { t: "Craft matters", d: "Clean code, thoughtful design and attention to detail are non-negotiable." },
  { t: "Partnership, not projects", d: "We'd rather build a ten-year relationship than a ten-week job." },
  { t: "Always learning", d: "From AI to the latest frameworks, we stay ahead so you don't have to." },
];

const compare = [
  ["Vague estimates that keep growing", "Fixed-price quotes with clear scope"],
  ["Disappears after launch", "Ongoing care, support and growth"],
  ["Looks good, doesn't convert", "Designed around leads, sales and results"],
  ["Locks you into their platform", "You own all code, designs and accounts"],
  ["Multiple agencies to juggle", "One team, end to end"],
  ["Jargon and black boxes", "Plain English and weekly demos"],
];


export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="About Desired IT Solutions"
        lines={["We're the digital partner", <Fragment key="a">we wish every business <Accent>had.</Accent></Fragment>]}
        sub="We combine strategy, design, engineering and marketing to build digital products that solve real problems, and we treat every project as if it were our own business on the line."
      >
        <ButtonLink href="/contact" size="lg">Book a free strategy call</ButtonLink>
      </PageHero>

      <section className="bg-ink pb-24">
        <Container>
          <MaskReveal src="/photos/team-collab.jpg" alt="Our team collaborating around laptops" className="aspect-[4/3] sm:aspect-[21/9]" />
        </Container>
      </section>

      {/* Story */}
      <section className="grain relative bg-paper py-24 sm:py-32">
        <TornEdge position="top" seed={5} className="text-paper" />
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Why we started</Eyebrow>
            <LineReveal
              as="h2"
              inView
              className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl"
              lines={["Too many businesses", <Fragment key="b">were <Accent>burned</Accent> by agencies.</Fragment>]}
            />
            <Reveal delay={0.15} className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Desired IT Solutions began with a simple observation. Businesses were getting beautiful websites that didn&apos;t
                generate leads, software projects that ran months over schedule, and developers who vanished the day after launch.
              </p>
              <p>
                We set out to do things differently. We start with business outcomes rather than technology, quote honestly,
                communicate constantly and stay for the long haul. That&apos;s still how we work today.
              </p>
            </Reveal>
            <Reveal delay={0.25} className="mt-10 rounded-3xl bg-white p-8 ring-1 ring-ink/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">Our mission</p>
              <p className="mt-3 font-display text-2xl font-bold leading-snug tracking-tight">
                To help Australian businesses grow by turning great ideas into digital products that are beautifully designed,
                solidly engineered and <Accent>measured by real results.</Accent>
              </p>
            </Reveal>
          </div>
          <div className="relative min-h-[460px] lg:col-span-5">
            <Reveal className="absolute right-4 top-0 w-[62%]">
              <Polaroid src="/photos/sticky-notes.jpg" alt="Designer arranging sticky notes" caption="Mapping journeys" rotate={4} />
            </Reveal>
            <Reveal delay={0.2} className="absolute left-0 top-44 w-[56%]">
              <Polaroid src="/photos/design-collab.jpg" alt="Two colleagues reviewing a design on a laptop" caption="Design review" rotate={-4} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-ink py-24 text-white sm:py-32">
        <Container>
          <Eyebrow tone="light">How we work</Eyebrow>
          <LineReveal
            as="h2"
            inView
            className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] sm:text-6xl"
            lines={[<Fragment key="c">Values we <Accent>actually</Accent> live by</Fragment>]}
          />
          <Stagger className="mt-14 divide-y divide-line-dark border-y border-line-dark">
            {values.map((v, i) => (
              <StaggerItem key={v.t}>
                <div className="group grid items-baseline gap-4 py-8 transition-colors sm:grid-cols-12">
                  <span className="font-mono text-sm text-lime sm:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl font-bold tracking-tight transition-transform duration-500 ease-out-quint group-hover:translate-x-2 sm:col-span-5 sm:text-3xl">
                    {v.t}
                  </h3>
                  <p className="text-white/60 sm:col-span-6">{v.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Comparison */}
      <section className="grain bg-paper py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What makes us different</Eyebrow>
            <LineReveal
              as="h2"
              inView
              className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl"
              lines={[<Fragment key="d">Not your <Accent>typical</Accent> agency</Fragment>]}
            />
          </div>
          <Reveal className="mt-12 overflow-hidden rounded-[28px] ring-1 ring-ink/10">
            <div className="grid grid-cols-2 bg-white text-sm font-semibold uppercase tracking-wider">
              <div className="p-5 text-muted sm:p-6">Typical agency</div>
              <div className="bg-cobalt p-5 text-white sm:p-6">Desired IT Solutions</div>
            </div>
            {compare.map(([a, b]) => (
              <div key={a} className="grid grid-cols-2 border-t border-line bg-white">
                <div className="flex gap-3 p-5 text-muted sm:p-6">
                  <X className="mt-0.5 size-4 shrink-0 text-red-500" /> {a}
                </div>
                <div className="flex gap-3 bg-cobalt-100/60 p-5 font-medium sm:p-6">
                  <Check className="mt-0.5 size-4 shrink-0 text-cobalt" /> {b}
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>


      <section className="overflow-hidden bg-paper py-10">
        <VelocityMarquee baseVelocity={2}>
          <span className="px-6 font-display text-[clamp(3.5rem,10vw,9rem)] font-extrabold leading-none tracking-[-0.05em]">
            Proudly <Accent>Canberra</Accent>-based
          </span>
          <Sparkle className="mx-4 size-14 text-cobalt" />
        </VelocityMarquee>
      </section>

      {/* Local */}
      <section className="bg-paper pb-24">
        <Container>
          <MaskReveal src="/photos/sydney-harbour.jpg" alt="Aerial view of an Australian harbour city" className="aspect-[4/5] sm:aspect-[21/9]">
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-xl p-8 text-white sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">Proudly local</p>
              <p className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Based in Canberra, working with businesses <Accent>across Australia.</Accent>
              </p>
            </div>
          </MaskReveal>
        </Container>
      </section>

      <Testimonials />
      <CtaBand
        title={["Let's build something", <Fragment key="f">great <Accent>together.</Accent></Fragment>]}
        body="Tell us what you're working on. If we're the right fit, we'll show you exactly how we'd approach it. If we're not, we'll point you in the right direction."
      />
    </PageTransition>
  );
}
