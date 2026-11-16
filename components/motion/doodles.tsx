"use client";

import { motion } from "motion/react";

const draw = (delay = 0, duration = 0.9) => ({
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true },
  transition: {
    pathLength: { duration, ease: [0.65, 0, 0.35, 1] as const, delay },
    opacity: { duration: 0.01, delay },
  },
});

type DoodleProps = { className?: string; delay?: number };

/** Hand-drawn scribble underline. */
export function Underline({ className = "", delay = 0.6 }: DoodleProps) {
  return (
    <svg viewBox="0 0 300 24" fill="none" className={className} aria-hidden="true" preserveAspectRatio="none">
      <motion.path
        d="M4 16C46 8 92 5 150 7c48 2 92 5 142 2M24 20c58-6 140-8 236-4"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        {...draw(delay, 1)}
      />
    </svg>
  );
}

/** Loose circle scribble drawn around a word. */
export function CircleScribble({ className = "", delay = 0.3 }: DoodleProps) {
  return (
    <svg viewBox="0 0 220 90" fill="none" className={className} aria-hidden="true" preserveAspectRatio="none">
      <motion.path
        d="M150 10C96 2 24 12 9 41c-12 25 38 42 100 42 63 0 104-14 104-38C213 21 160 8 104 9 72 10 46 15 30 22"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        {...draw(delay, 1.2)}
      />
    </svg>
  );
}

/** Curved arrow pointing down-right, for nudging towards CTAs. */
export function CurvedArrow({ className = "", delay = 0.4 }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={className} aria-hidden="true">
      <motion.path
        d="M8 10c10 40 36 66 92 74"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        {...draw(delay, 0.8)}
      />
      <motion.path
        d="M84 70l18 14-21 9"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...draw(delay + 0.75, 0.3)}
      />
    </svg>
  );
}

/** Hand-drawn tick for checklists. */
export function Check({ className = "", delay = 0 }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <motion.path
        d="M4 13c2 1.5 3.5 3.2 5 5.5C12 12 15.5 7.5 20.5 4"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...draw(delay, 0.5)}
      />
    </svg>
  );
}

export function Sparkle({ className = "", delay = 0 }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <motion.path
        d="M20 3v34M3 20h34M8 8l24 24M32 8 8 32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        {...draw(delay, 0.6)}
      />
    </svg>
  );
}
