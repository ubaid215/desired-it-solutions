"use client";

import { useRef , Fragment } from "react";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { Accent, Container, Eyebrow } from "../ui";
import { LineReveal } from "../motion/reveal";

const steps = [
  { t: "Discover", d: "We dig into your goals, customers and competitors, and define what success looks like." },
  { t: "Design", d: "Wireframes and visual designs you approve, screen by screen, before we write any code." },
  { t: "Build", d: "Agile sprints with weekly demos, so you always know exactly where things stand." },
  { t: "Launch", d: "Thorough testing, a smooth go-live, and training for your team." },
  { t: "Grow", d: "We track performance, make improvements and support you whenever you need it." },
];

function Step({ i, p, step }: { i: number; p: MotionValue<number>; step: (typeof steps)[number] }) {
  const at = i / (steps.length - 1);
  const active = useTransform(p, [at - 0.08, at], [0, 1]);
  const bg = useTransform(active, [0, 1], ["#fafaf7", "#2b4bff"]);
  const color = useTransform(active, [0, 1], ["#0e1116", "#ffffff"]);
  const opacity = useTransform(active, [0, 1], [0.35, 1]);
  return (
    <li className="relative grid grid-cols-[56px_1fr] gap-6 pb-14 last:pb-0 sm:grid-cols-[72px_1fr]">
      <motion.span
        style={{ backgroundColor: bg, color }}
        className="relative z-10 grid size-14 place-items-center rounded-full font-display text-lg font-bold ring-1 ring-ink/15 sm:size-[72px] sm:text-xl"
      >
        {String(i + 1).padStart(2, "0")}
      </motion.span>
      <motion.div style={{ opacity }} className="pt-2 sm:pt-4">
        <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{step.t}</h3>
        <p className="mt-2 max-w-md text-muted">{step.d}</p>
      </motion.div>
    </li>
  );
}

/** Process steps joined by a line that draws as you scroll. */
export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 55%"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section className="grain bg-paper py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <Eyebrow>How we work</Eyebrow>
          <LineReveal
            as="h2"
            inView
            lines={["A proven process,", <Fragment key="l0">from first call to <Accent>launch</Accent></Fragment>, "and beyond."]}
            className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-5xl"
          />
          <p className="mt-6 max-w-sm text-lg text-muted">No black boxes. You see progress every week, and you approve every step.</p>
        </div>
        <ol ref={ref} className="relative lg:col-span-7">
          <svg className="absolute left-[27px] top-0 h-full w-1 sm:left-[35px]" preserveAspectRatio="none" viewBox="0 0 2 100" aria-hidden="true">
            <line x1="1" y1="0" x2="1" y2="100" stroke="#0e1116" strokeOpacity="0.12" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <motion.line x1="1" y1="0" x2="1" y2="100" stroke="#2b4bff" strokeWidth="3" vectorEffect="non-scaling-stroke" style={{ pathLength: p }} />
          </svg>
          {steps.map((s, i) => (
            <Step key={s.t} i={i} p={p} step={s} />
          ))}
        </ol>
      </Container>
    </section>
  );
}
