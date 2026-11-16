"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";

/**
 * Kinetic type on a curve (reference effect #4): a word sits on an arc that
 * flattens and slides as you scroll, with cobalt/lime "pixels" drifting around it.
 */
export function TextArc({ word = "Launch it.", tagline = "From idea to launch, and everything after." }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const ctrl = useTransform(scrollYProgress, [0.1, 0.6], [-80, 230]);
  const offset = useTransform(scrollYProgress, [0, 1], ["2%", "18%"]);
  const d = useMotionTemplate`M 20 260 Q 700 ${ctrl} 1380 260`;
  const dotA = useTransform(scrollYProgress, [0, 1], [-80, 120]);
  const dotB = useTransform(scrollYProgress, [0, 1], [100, -140]);
  const rot = useTransform(scrollYProgress, [0, 1], [-20, 30]);

  return (
    <section ref={ref} className="grain relative overflow-hidden bg-paper py-10" aria-label={tagline}>
      <svg viewBox="0 0 1400 330" className="mx-auto block w-full max-w-[1400px]" aria-hidden="true">
        <motion.path id="arc" d={d} fill="none" />
        <text className="fill-ink font-display font-extrabold" style={{ fontSize: 150, letterSpacing: "0.04em" }}>
          <motion.textPath href="#arc" startOffset={offset}>
            {word}
          </motion.textPath>
        </text>
      </svg>
      <motion.span style={{ y: dotA, rotate: rot }} className="absolute left-[18%] top-[22%] size-5 rounded-full bg-cobalt" />
      <motion.span style={{ y: dotB }} className="absolute right-[22%] top-[30%] size-4 rounded-[5px] bg-lime ring-2 ring-ink" />
      <motion.span style={{ y: dotA }} className="absolute bottom-[18%] right-[12%] size-3 rounded-full bg-ink" />
      <motion.span style={{ y: dotB, rotate: rot }} className="absolute bottom-[26%] left-[8%] size-6 rounded-[6px] bg-lime" />
      <p className="mx-auto -mt-4 max-w-md px-5 text-center font-serif text-2xl italic text-muted">{tagline}</p>
    </section>
  );
}
