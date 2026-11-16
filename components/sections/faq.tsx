"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs as defaultFaqs } from "@/lib/site";
import { Accent, Container, Eyebrow } from "../ui";
import { LineReveal, Stagger, StaggerItem } from "../motion/reveal";

/** Two-column dark FAQ accordion (reference effect #11). */
export function Faq({ items = defaultFaqs }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="noise relative bg-ink py-24 text-white sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="light">FAQ</Eyebrow>
          <LineReveal
            as="h2"
            inView
            lines={["Got a question?", <Accent key="a">We have answers.</Accent>]}
            className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] sm:text-6xl [&_em]:text-white/50"
          />
        </div>
        <Stagger className="mt-14 grid gap-3 md:grid-cols-2">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem key={f.q}>
                <div className="rounded-2xl bg-ink-2 ring-1 ring-line-dark transition-colors hover:ring-white/20">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium"
                  >
                    {f.q}
                    <Plus
                      className={`size-5 shrink-0 text-lime transition-transform duration-500 ease-out-quint ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out-quint ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-white/65">{f.a}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
