"use client";

import Image from "next/image";
import { useRef , Fragment } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CheckCircle2, Gauge, MessageSquare } from "lucide-react";
import { LineReveal, Reveal } from "../motion/reveal";
import { Underline } from "../motion/doodles";
import { Magnetic } from "../motion/interactive";
import { Accent, ButtonLink, Container } from "../ui";

function GridBackdrop() {
  const cols = Array.from({ length: 13 }, (_, i) => i * 120);
  const rows = Array.from({ length: 8 }, (_, i) => i * 120);
  return (
    <svg className="absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="fade" cx="50%" cy="30%" r="70%">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="m">
          <rect width="1440" height="900" fill="url(#fade)" />
        </mask>
      </defs>
      <g mask="url(#m)">
        {cols.map((x) => (
          <line key={`c${x}`} x1={x} y1="0" x2={x} y2="900" stroke="#fff" strokeOpacity="0.06" />
        ))}
        {rows.map((y) => (
          <line key={`r${y}`} x1="0" y1={y} x2="1440" y2={y} stroke="#fff" strokeOpacity="0.06" />
        ))}
        {[240, 720, 1080].map((x, i) => (
          <line key={`p${x}`} x1={x} y1="0" x2={x} y2="900" stroke="#D4FF3A" strokeWidth="1.5" className="grid-pulse" style={{ animationDelay: `${i * 2.1}s` }} />
        ))}
        {[240, 480].map((y, i) => (
          <line key={`q${y}`} x1="0" y1={y} x2="1440" y2={y} stroke="#2B4BFF" strokeWidth="1.5" className="grid-pulse" style={{ animationDelay: `${i * 3 + 1}s` }} />
        ))}
      </g>
    </svg>
  );
}

function FloatCard({ children, className, delay }: { children: React.ReactNode; className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-10 rounded-2xl bg-white/95 p-3.5 text-ink shadow-[0_20px_50px_-15px_rgba(0,0,0,0.45)] ring-1 ring-black/5 backdrop-blur ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const radius = useTransform(scrollYProgress, [0, 1], [28, 48]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="noise relative isolate overflow-hidden bg-ink pb-16 pt-36 text-white sm:pt-44">
      <GridBackdrop />
      <Container>
        <div className="max-w-5xl">
          <Reveal y={10}>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-lime" />
                <span className="relative inline-flex size-2 rounded-full bg-lime" />
              </span>
              Digital solutions for Australian businesses
            </p>
          </Reveal>
          <LineReveal
            delay={0.1}
            className="mt-7 font-display text-[clamp(2.75rem,8vw,6.75rem)] font-extrabold leading-[0.95] tracking-[-0.045em]"
            lines={[
              "We build digital",
              <Fragment key="l0">
                products that{" "}
                <span className="relative inline-block text-lime">
                  <Accent>grow</Accent>
                  <Underline className="absolute -bottom-[0.12em] left-0 h-[0.22em] w-full text-cobalt" delay={1} />
                </span>
              </Fragment>,
              "your business.",
            ]}
          />
          <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
            <Reveal delay={0.5} className="md:col-span-6">
              <p className="text-lg leading-relaxed text-white/70">
                We design, develop and market high-performing websites, apps and software for Australian businesses,
                with fixed-price quotes, on-time delivery and a team that sticks around after launch.
              </p>
            </Reveal>
            <Reveal delay={0.6} className="flex flex-wrap gap-3 md:col-span-6 md:justify-end">
              <Magnetic>
                <ButtonLink href="/contact" size="lg">Book a free strategy call</ButtonLink>
              </Magnetic>
              <ButtonLink href="#work" variant="outline-light" size="lg">See our work</ButtonLink>
            </Reveal>
          </div>
        </div>
      </Container>

      <Container className="mt-16">
        <motion.div style={{ scale, borderRadius: radius, y }} className="relative mx-auto origin-top overflow-hidden">
          <div className="relative aspect-[16/10] w-full sm:aspect-[16/8]">
            <Image
              src="/photos/hero-laptop-code.jpg"
              alt="A developer's laptop with code on screen on a busy desk"
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/10" />
          </div>
          <FloatCard className="left-4 top-4 sm:left-8 sm:top-8" delay={1.1}>
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-cobalt-100 text-cobalt"><MessageSquare className="size-4" /></span>
              <div>
                <p className="text-xs text-muted">New enquiry</p>
                <p className="text-sm font-semibold">&ldquo;Can we book a call this week?&rdquo;</p>
              </div>
            </div>
          </FloatCard>
          <FloatCard className="bottom-4 right-4 hidden sm:bottom-8 sm:right-8 sm:block" delay={1.3}>
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-lime text-ink"><Gauge className="size-4" /></span>
              <div>
                <p className="text-xs text-muted">Lighthouse performance</p>
                <p className="font-display text-xl font-extrabold">98<span className="text-sm text-muted">/100</span></p>
              </div>
            </div>
          </FloatCard>
          <FloatCard className="bottom-8 left-8 hidden md:block" delay={1.5}>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <CheckCircle2 className="size-4 text-emerald-600" /> Deployed to production
            </div>
          </FloatCard>
        </motion.div>
      </Container>

      <Container className="mt-14">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/60">
          {["Fixed-price quotes", "You own the code", "Canberra-based team", "Support after launch"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-lime" /> {t}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
