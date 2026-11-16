"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import { Container, Eyebrow } from "../ui";

/** Avatar-column testimonial switcher with crossfade (reference effect #10). */
export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((v) => (v + d + testimonials.length) % testimonials.length);

  return (
    <section className="grain bg-paper py-24 sm:py-32">
      <Container>
        <Eyebrow>What clients say</Eyebrow>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-12">
          <div className="relative min-h-[300px] lg:col-span-6">
            <Quote className="size-10 text-cobalt" />
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted">
                  <span className="font-semibold text-ink">{t.name}</span> · {t.role}, {t.place}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
            <div className="mt-8 flex items-center gap-4">
              <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="grid size-11 place-items-center rounded-full ring-1 ring-ink/15 transition hover:bg-ink hover:text-white">
                <ArrowLeft className="size-4" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="grid size-11 place-items-center rounded-full ring-1 ring-ink/15 transition hover:bg-ink hover:text-white">
                <ArrowRight className="size-4" />
              </button>
              <span className="ml-2 font-mono text-sm text-muted">
                {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5 lg:col-span-6 lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] bg-paper-3">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={t.image}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image src={t.image} alt={`Portrait of ${t.name}`} fill sizes="(min-width: 1024px) 384px, 90vw" className="object-cover object-top" />
                </motion.div>
              </AnimatePresence>
            </div>
            <ul className="flex flex-col gap-3">
              {testimonials.map((x, idx) => (
                <li key={x.name}>
                  <button
                    type="button"
                    onClick={() => setI(idx)}
                    aria-label={`Show testimonial from ${x.name}`}
                    aria-pressed={idx === i}
                    className={`relative block size-12 overflow-hidden rounded-full ring-2 transition-all duration-300 ${
                      idx === i ? "scale-110 ring-cobalt" : "opacity-60 ring-transparent grayscale hover:opacity-100"
                    }`}
                  >
                    <Image src={x.image} alt="" fill sizes="48px" className="object-cover object-top" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
