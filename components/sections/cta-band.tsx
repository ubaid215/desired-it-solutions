import { Fragment } from "react";
import Image from "next/image";
import { site } from "@/lib/site";
import { CurvedArrow } from "../motion/doodles";
import { Magnetic } from "../motion/interactive";
import { LineReveal, Reveal } from "../motion/reveal";
import { TornEdge } from "../torn-edge";
import { Accent, ButtonLink, Container } from "../ui";

/** Full-bleed closing CTA (reference effect #12). The footer is revealed underneath it. */
export function CtaBand({
  title = ["Got a project in mind?", <Fragment key="l0">Let&apos;s make it <Accent>happen.</Accent></Fragment>],
  body = "Book a free 30-minute strategy call. We'll map out the smartest way to reach your goal, and you'll get a clear roadmap and estimate to keep, whether you work with us or not.",
}: {
  title?: React.ReactNode[];
  body?: string;
}) {
  return (
    <section className="relative isolate bg-ink text-white">
      <TornEdge position="top" seed={21} className="text-ink" />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image src="/photos/team-collab.jpg" alt="" fill sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      </div>
      <Container className="py-28 sm:py-36">
        <div className="relative max-w-4xl">
          <LineReveal
            as="h2"
            inView
            lines={title}
            className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.03em] sm:text-7xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{body}</p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <ButtonLink href="/contact" size="lg">
                Book my free strategy call
              </ButtonLink>
            </Magnetic>
            <a href={`mailto:${site.email}`} className="text-sm text-white/70 underline-offset-4 hover:text-lime hover:underline">
              Or email {site.email}
            </a>
          </Reveal>
          <CurvedArrow className="absolute -left-16 top-24 hidden h-24 w-28 -rotate-12 text-lime lg:block" />
        </div>
      </Container>
    </section>
  );
}
