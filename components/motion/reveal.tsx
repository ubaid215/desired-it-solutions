"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Fade-and-rise once when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

/** Masked line-by-line reveal with a blur-to-sharp finish (reference effect #1). */
export function LineReveal({
  lines,
  className,
  as = "h1",
  delay = 0,
  inView = false,
}: {
  lines: ReactNode[];
  className?: string;
  as?: "h1" | "h2" | "p";
  delay?: number;
  inView?: boolean;
}) {
  const Tag = motion[as];
  const trigger = inView
    ? { whileInView: "show", viewport: { once: true, margin: "0px 0px -15% 0px" } }
    : { animate: "show" };
  return (
    <Tag className={className} initial="hidden" {...trigger} transition={{ staggerChildren: 0.1, delayChildren: delay }}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "105%", filter: "blur(8px)" },
              show: { y: "0%", filter: "blur(0px)", transition: { duration: 0.9, ease } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
