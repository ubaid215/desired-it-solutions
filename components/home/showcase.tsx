"use client";

import Image from "next/image";
import { useRef , Fragment } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BrowserMock, concepts, type ConceptKey } from "../concept-mock";
import { Accent, Container, Eyebrow } from "../ui";
import { LineReveal } from "../motion/reveal";
import { CircleScribble } from "../motion/doodles";

function ConceptCard({ k, className = "" }: { k: ConceptKey; className?: string }) {
  const c = concepts[k];
  return (
    <article className={`group relative overflow-hidden rounded-[24px] p-5 ${className}`} style={{ background: c.bg, color: c.fg }}>
      <div className="flex items-start justify-between">
        <div>
          <span className="rounded-full bg-black/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider">Concept</span>
          <h3 className="mt-3 font-display text-xl font-bold">{c.name}</h3>
          <p className="text-sm opacity-70">{c.type}</p>
        </div>
        <span className="grid size-10 place-items-center rounded-full bg-black/10 transition-transform duration-500 group-hover:rotate-45">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <div className="mt-6 transition-transform duration-700 ease-out-quint group-hover:-translate-y-2 group-hover:scale-[1.02]">
        <BrowserMock concept={k} />
      </div>
    </article>
  );
}

/**
 * Bento grid where the featured concept expands to full-bleed on scroll (reference effect #9).
 * Pinned on desktop; stacked on mobile.
 */
export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const top = useTransform(p, [0.1, 0.7], [16, 0]);
  const side = useTransform(p, [0.1, 0.7], [30, 0]);
  const bottom = useTransform(p, [0.1, 0.7], [16, 0]);
  const radius = useTransform(p, [0.1, 0.7], [28, 0]);
  const clip = useMotionTemplate`inset(${top}% ${side}% ${bottom}% ${side}% round ${radius}px)`;
  const others = useTransform(p, [0.05, 0.35], [1, 0]);
  const mockWidth = useTransform(p, [0.1, 0.7], ["34vw", "62vw"]);
  const copyOpacity = useTransform(p, [0.6, 0.8], [0, 1]);
  const featured = concepts.fieldpro;

  return (
    <section id="work" className="scroll-mt-24 bg-paper">
      <Container className="pb-12 pt-24 sm:pt-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Featured concepts</Eyebrow>
            <LineReveal
              as="h2"
              inView
              lines={[
                <Fragment key="l0">
                  Work built for{" "}
                  <span className="relative inline-block">
                    <Accent>results</Accent>
                    <CircleScribble className="absolute -inset-x-4 -inset-y-2 h-[130%] w-[calc(100%+2rem)] text-cobalt" />
                  </span>
                </Fragment>,
              ]}
              className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] sm:text-6xl"
            />
          </div>
          <p className="max-w-sm text-muted">
            Concept projects that show how we approach strategy, design and build. Client case studies are coming soon.
          </p>
        </div>
      </Container>

      <div ref={ref} className="relative hidden h-[260vh] md:block">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ opacity: others }} className="absolute inset-0 mx-auto grid max-w-7xl grid-cols-12 gap-4 px-8 py-[8vh]">
            <ConceptCard k="harbour" className="col-span-3 self-stretch" />
            <div className="col-span-6" />
            <ConceptCard k="kinetic" className="col-span-3 self-stretch" />
          </motion.div>

          <motion.div style={{ clipPath: clip }} className="absolute inset-0" >
            <Image src="/photos/svc-apps.jpg" alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0" style={{ background: `${featured.bg}d9` }} />
            <div className="absolute inset-0 grid place-items-center p-8">
              <motion.div style={{ width: mockWidth }} className="max-w-5xl">
                <BrowserMock concept="fieldpro" />
              </motion.div>
            </div>
            <motion.div style={{ opacity: copyOpacity }} className="absolute bottom-10 left-10 max-w-md text-white">
              <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider">Concept · {featured.type}</span>
              <p className="mt-4 font-display text-4xl font-bold tracking-tight">{featured.name}</p>
              <p className="mt-2 text-white/75">{featured.blurb}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Container className="grid gap-4 pb-20 md:hidden">
        <ConceptCard k="fieldpro" />
        <ConceptCard k="harbour" />
        <ConceptCard k="kinetic" />
      </Container>
    </section>
  );
}
