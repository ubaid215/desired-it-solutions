"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Accent } from "../ui";

const tiles = [
  { src: "/photos/whiteboard-ideas.jpg", x: -38, y: -30, w: 15, r: -4 },
  { src: "/photos/sticky-notes.jpg", x: -8, y: -36, w: 12, r: 3 },
  { src: "/photos/svc-software.jpg", x: 30, y: -30, w: 16, r: 5 },
  { src: "/photos/desk-coffee.jpg", x: 40, y: 4, w: 12, r: -3 },
  { src: "/photos/svc-apps.jpg", x: 32, y: 34, w: 14, r: 4 },
  { src: "/photos/design-collab.jpg", x: -2, y: 38, w: 13, r: -2 },
  { src: "/photos/svc-uiux.jpg", x: -36, y: 32, w: 14, r: 6 },
  { src: "/photos/workspace-code.jpg", x: -44, y: 2, w: 11, r: -6 },
];

function Tile({ t, p }: { t: (typeof tiles)[number]; p: MotionValue<number> }) {
  const x = useTransform(p, [0, 0.55], [`${t.x}vw`, `${t.x * 0.35}vw`]);
  const y = useTransform(p, [0, 0.55], [`${t.y}vh`, `${t.y * 0.35}vh`]);
  const opacity = useTransform(p, [0.4, 0.62], [1, 0]);
  const scale = useTransform(p, [0, 0.55], [1, 0.7]);
  return (
    <motion.div
      style={{ x, y, opacity, scale, rotate: t.r, width: `${t.w}vw` }}
      className="absolute left-1/2 top-1/2 -ml-[6vw] -mt-[8vh] aspect-[4/5] overflow-hidden rounded-[22px]"
    >
      <Image src={t.src} alt="" fill sizes="16vw" className="object-cover" />
    </motion.div>
  );
}

/**
 * Converging tiles → zoom-through (reference effect #5).
 * Pinned for 300vh on desktop; a simple collage on mobile.
 */
export function ZoomTiles() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const titleScale = useTransform(p, [0, 0.5], [0.75, 1.15]);
  const titleOpacity = useTransform(p, [0.5, 0.65], [1, 0]);
  const centerW = useTransform(p, [0.45, 0.9], ["18vw", "100vw"]);
  const centerH = useTransform(p, [0.45, 0.9], ["30vh", "100vh"]);
  const centerRadius = useTransform(p, [0.45, 0.9], [26, 0]);
  const captionOpacity = useTransform(p, [0.82, 0.95], [0, 1]);
  const captionY = useTransform(p, [0.82, 0.95], [30, 0]);

  return (
    <>
      <section ref={ref} className="relative hidden h-[300vh] bg-ink md:block" aria-label="Inside our studio">
        <div className="noise sticky top-0 h-screen overflow-hidden">
          {tiles.map((t) => (
            <Tile key={t.src} t={t} p={p} />
          ))}
          <motion.div
            style={{ width: centerW, height: centerH, borderRadius: centerRadius }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
          >
            <Image src="/photos/office-team.jpg" alt="An open-plan office full of people working at laptops" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-ink/35" />
          </motion.div>
          <motion.h2
            style={{ scale: titleScale, opacity: titleOpacity }}
            className="pointer-events-none absolute inset-0 grid place-items-center text-center font-display text-[6.5vw] font-extrabold leading-none tracking-[-0.04em] text-white"
          >
            <span>
              Ideas into <Accent>products</Accent>
            </span>
          </motion.h2>
          <motion.div
            style={{ opacity: captionOpacity, y: captionY }}
            className="absolute inset-x-0 bottom-[12vh] mx-auto max-w-2xl px-6 text-center text-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">Inside the studio</p>
            <p className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight">
              Strategists, designers and engineers in one room, <Accent>obsessed</Accent> with your results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-white md:hidden" aria-label="Inside our studio">
        <h2 className="font-display text-4xl font-extrabold tracking-tight">
          Ideas into <Accent>products</Accent>
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {tiles.slice(0, 4).map((t) => (
            <div key={t.src} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image src={t.src} alt="" fill sizes="50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
