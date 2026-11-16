import { Fragment } from "react";
import { CalendarClock, Code, FileCheck2, Gauge, KeyRound, Megaphone, MousePointerClick, Repeat } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { HomeHero } from "@/components/home/hero";
import { ServiceStack } from "@/components/home/service-stack";
import { TextArc } from "@/components/home/text-arc";
import { ZoomTiles } from "@/components/home/zoom-tiles";
import { Process } from "@/components/home/process";
import { Showcase } from "@/components/home/showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { Polaroid } from "@/components/polaroid";
import { TornEdge } from "@/components/torn-edge";
import { CountUp, VelocityMarquee } from "@/components/motion/interactive";
import { LineReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Sparkle } from "@/components/motion/doodles";
import { Accent, ButtonLink, Container, Eyebrow } from "@/components/ui";
import { techStack } from "@/lib/site";

const pains = [
  { icon: MousePointerClick, t: "A website that doesn't sell", d: "Visitors arrive, look around and leave without enquiring." },
  { icon: CalendarClock, t: "Agencies that overpromise", d: "Blown budgets, missed deadlines and radio silence after launch." },
  { icon: Repeat, t: "Manual work everywhere", d: "Your team copies data between spreadsheets and systems all day." },
  { icon: Megaphone, t: "Marketing in the dark", d: "You're spending money but can't see what's actually working." },
];

const promises = [
  { icon: FileCheck2, value: 48, suffix: "h", label: "From strategy call to written proposal" },
  { icon: KeyRound, value: 100, suffix: "%", label: "Of the code, designs and accounts are yours" },
  { icon: Gauge, value: 90, suffix: "+", label: "PageSpeed score we build every site to hit" },
  { icon: Code, value: 1, suffix: "", label: "Team for strategy, design, build and growth" },
];

export default function Home() {
  return (
    <PageTransition>
      <HomeHero />

      {/* Tech stack marquee */}
      <section className="border-b border-line bg-paper py-8" aria-label="Technologies we work with">
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap font-display text-xl font-bold text-ink/35">
                {t}
                <Sparkle className="size-3 text-cobalt/40" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial statement + polaroids */}
      <section className="grain relative overflow-hidden bg-paper py-24 sm:py-36">
        <Container className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Why we exist</Eyebrow>
            <LineReveal
              as="h2"
              inView
              className="mt-6 font-display text-[clamp(2rem,4.6vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.03em]"
              lines={[
                "At Desired, we believe",
                <Fragment key="l0">a website is <Accent>more than a brochure.</Accent></Fragment>,
                <Fragment key="l1">It&apos;s your best salesperson<span className="text-cobalt">*</span></Fragment>,
              ]}
            />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
                We start with your business goals, design and build the right solution, then keep improving it once it&apos;s live.
                Strategy, design, development and growth, all under one roof.
              </p>
              <p className="mt-4 font-serif text-lg italic text-muted">*one that works 24/7 and never calls in sick.</p>
            </Reveal>
          </div>
          <div className="relative h-[420px] lg:col-span-5">
            <Reveal className="absolute left-0 top-0 w-[58%]" delay={0.1}>
              <Polaroid src="/photos/whiteboard-duo.jpg" alt="Two team members sketching ideas on a whiteboard" caption="Discovery day" rotate={-5} />
            </Reveal>
            <Reveal className="absolute right-0 top-20 w-[52%]" delay={0.25}>
              <Polaroid src="/photos/workspace-code.jpg" alt="Laptop with code beside a plant and mug" caption="Build week" rotate={4} />
            </Reveal>
            <Reveal className="absolute bottom-0 left-[18%] w-[46%]" delay={0.4}>
              <Polaroid src="/photos/client-meeting.jpg" alt="Two people discussing a project at a laptop" caption="Launch!" rotate={-2} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Pain points */}
      <section className="relative bg-ink py-24 text-white sm:py-32">
        <TornEdge position="top" seed={3} className="text-ink" />
        <Container>
          <div className="max-w-3xl">
            <Eyebrow tone="light">Sound familiar?</Eyebrow>
            <LineReveal
              as="h2"
              inView
              lines={["Is your digital presence", <Fragment key="l2">holding you <Accent>back?</Accent></Fragment>]}
              className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] sm:text-6xl"
            />
          </div>
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pains.map(({ icon: Icon, t, d }) => (
              <StaggerItem key={t}>
                <div className="group h-full rounded-3xl bg-ink-2 p-7 ring-1 ring-line-dark transition-colors duration-500 hover:bg-ink-3">
                  <Icon className="size-7 text-lime transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
                  <h3 className="mt-8 font-display text-xl font-bold">{t}</h3>
                  <p className="mt-2 text-white/60">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-14">
            <p className="font-serif text-2xl italic text-white/80 sm:text-3xl">
              You need more than a developer. You need a partner who&apos;s invested in your <span className="text-lime">results.</span>
            </p>
          </Reveal>
        </Container>
        <TornEdge position="bottom" seed={11} className="text-ink" />
      </section>

      <ServiceStack />

      <TextArc />

      <ZoomTiles />

      <Process />

      {/* Promises (stats we can stand behind) */}
      <section className="bg-cobalt py-20 text-white">
        <Container>
          <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map(({ icon: Icon, value, suffix, label }) => (
              <StaggerItem key={label}>
                <Icon className="size-6 text-lime" />
                <p className="mt-4 font-display text-6xl font-extrabold tracking-tight">
                  <CountUp to={value} suffix={suffix} />
                </p>
                <p className="mt-2 max-w-[16rem] text-white/75">{label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <Showcase />

      {/* Velocity marquee */}
      <section className="overflow-hidden bg-paper py-10 sm:py-16">
        <VelocityMarquee>
          <span className="px-6 font-display text-[clamp(4rem,12vw,11rem)] font-extrabold leading-none tracking-[-0.05em]">
            Designed. Built. <Accent>Grown.</Accent>
          </span>
          <Sparkle className="mx-4 size-16 text-cobalt" />
        </VelocityMarquee>
      </section>

      <Testimonials />

      {/* Lead magnet */}
      <section className="bg-paper pb-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] bg-lime p-8 sm:p-14">
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em]">Free website audit</p>
                  <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
                    Is your website leaving <Accent>money</Accent> on the table?
                  </h2>
                  <p className="mt-5 max-w-xl text-lg text-ink/75">
                    We&apos;ll review your speed, SEO, mobile experience and conversion points, then send you a prioritised list of fixes within 2 business days.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <ButtonLink href="/contact" size="lg" variant="primary">Get my free audit</ButtonLink>
                </div>
              </div>
              <Sparkle className="absolute -right-6 -top-6 size-32 text-ink/10" />
            </div>
          </Reveal>
        </Container>
      </section>

      <Faq />
      <CtaBand />
    </PageTransition>
  );
}
