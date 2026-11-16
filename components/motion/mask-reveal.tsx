"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";

/**
 * Image that opens from a rounded "window" to full width as it scrolls into view
 * (reference effect #6), with a slow parallax on the photo itself.
 */
export function MaskReveal({
  src,
  alt,
  children,
  className = "aspect-[16/9]",
}: {
  src: string;
  alt: string;
  children?: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const side = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const vert = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const radius = useTransform(scrollYProgress, [0, 1], [48, 28]);
  const clip = useMotionTemplate`inset(${vert}% ${side}% ${vert}% ${side}% round ${radius}px)`;
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "0%"]);

  return (
    <motion.div ref={ref} style={{ clipPath: clip }} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute -inset-y-[8%] inset-x-0">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </motion.div>
      {children}
    </motion.div>
  );
}
