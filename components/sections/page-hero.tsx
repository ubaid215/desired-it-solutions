import type { ReactNode } from "react";
import { LineReveal, Reveal } from "../motion/reveal";
import { Container } from "../ui";

/** Dark hero used on inner pages. */
export function PageHero({
  eyebrow,
  lines,
  sub,
  children,
}: {
  eyebrow: string;
  lines: ReactNode[];
  sub: string;
  children?: ReactNode;
}) {
  return (
    <section className="noise relative isolate overflow-hidden bg-ink pb-20 pt-40 text-white sm:pb-28 sm:pt-48">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:96px_96px] [mask-image:radial-gradient(ellipse_at_30%_20%,#000,transparent_70%)]"
      />
      <div aria-hidden="true" className="absolute -right-40 -top-40 -z-10 size-[520px] rounded-full bg-cobalt/25 blur-[120px]" />
      <Container>
        <Reveal y={10}>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
            <span className="size-1.5 rounded-full bg-lime" />
            {eyebrow}
          </p>
        </Reveal>
        <LineReveal
          delay={0.1}
          lines={lines}
          className="mt-6 max-w-5xl font-display text-[clamp(2.6rem,7vw,6rem)] font-extrabold leading-[0.97] tracking-[-0.045em]"
        />
        <Reveal delay={0.45}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">{sub}</p>
        </Reveal>
        {children && <Reveal delay={0.55} className="mt-10 flex flex-wrap gap-3">{children}</Reveal>}
      </Container>
    </section>
  );
}
