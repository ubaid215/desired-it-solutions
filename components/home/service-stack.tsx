"use client";

import Image from "next/image";
import Link from "next/link";
import { useState , Fragment } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Hand } from "lucide-react";
import { services } from "@/lib/site";
import { Accent, ButtonLink, Container, Eyebrow } from "../ui";
import { LineReveal, Reveal } from "../motion/reveal";

/** Split panel + draggable card stack of services (reference effect #7). */
export function ServiceStack() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const n = services.length;
  const go = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + n) % n);
  };

  return (
    <section className="grain overflow-hidden bg-paper-2 py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>What we do</Eyebrow>
          <LineReveal
            as="h2"
            inView
            lines={["Everything you need", <Fragment key="l0">to grow <Accent>online.</Accent></Fragment>]}
            className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Whether you need a new website, a custom platform or more customers, we&apos;ve got the expertise in-house.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {services.map((s, i) => (
                <li key={s.slug}>
                  <button
                    type="button"
                    onClick={() => {
                      setDir(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                      i === index ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-ink/10 hover:ring-ink/30"
                    }`}
                  >
                    {s.short}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.35} className="mt-10">
            <ButtonLink href="/services" variant="outline-dark">Explore all services</ButtonLink>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md sm:aspect-[5/5]">
            {[2, 1].map((depth) => {
              const s = services[(index + depth) % n];
              return (
                <div
                  key={`bg-${depth}`}
                  className="absolute inset-0 rounded-[28px] bg-white ring-1 ring-ink/5 transition-transform duration-500"
                  style={{ transform: `translateY(${depth * -18}px) scale(${1 - depth * 0.05}) rotate(${depth * 2}deg)` }}
                  aria-hidden="true"
                >
                  <p className="p-6 font-display text-lg font-bold opacity-30">{s.name}</p>
                </div>
              );
            })}
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
              {(() => {
                const s = services[index];
                const Icon = s.icon;
                return (
                  <motion.article
                    key={s.slug}
                    custom={dir}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -90) go(1);
                      else if (info.offset.x > 90) go(-1);
                    }}
                    initial={{ opacity: 0, x: dir * 120, rotate: dir * 6 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, x: dir * -220, rotate: dir * -10 }}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    whileTap={{ cursor: "grabbing" }}
                    className="absolute inset-0 flex cursor-grab touch-pan-y flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_30px_60px_-25px_rgba(14,17,22,0.35)] ring-1 ring-ink/5"
                  >
                    <div className="relative h-1/2 shrink-0">
                      <Image src={s.image} alt="" fill sizes="(min-width: 1024px) 448px, 90vw" className="pointer-events-none object-cover" draggable={false} />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur">
                        {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                      </span>
                      <span className="absolute right-4 top-4 rounded-full bg-lime px-3 py-1 text-xs font-semibold">{s.timeline}</span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-xl bg-cobalt-100 text-cobalt">
                          <Icon className="size-5" />
                        </span>
                        <h3 className="font-display text-xl font-bold tracking-tight">{s.name}</h3>
                      </div>
                      <p className="mt-3 text-muted">{s.tagline}</p>
                      <Link
                        href={`/services#${s.slug}`}
                        className="group mt-auto inline-flex items-center gap-1.5 self-start text-sm font-semibold text-cobalt"
                      >
                        Learn more <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </motion.article>
                );
              })()}
            </AnimatePresence>
          </div>
          <div className="mx-auto mt-8 flex max-w-md items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-muted">
              <Hand className="size-4" /> Drag to explore
            </span>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(-1)} aria-label="Previous service" className="grid size-11 place-items-center rounded-full bg-white ring-1 ring-ink/10 transition hover:bg-ink hover:text-white">
                <ArrowLeft className="size-4" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next service" className="grid size-11 place-items-center rounded-full bg-ink text-white transition hover:bg-cobalt">
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
