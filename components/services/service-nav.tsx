"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { services } from "@/lib/site";

/** Sticky chip nav that highlights the service section currently in view. */
export function ServiceNav() {
  const [active, setActive] = useState(services[0].slug);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    services.forEach((s) => {
      const el = document.getElementById(s.slug);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const chip = listRef.current?.querySelector<HTMLElement>(`[data-slug="${active}"]`);
    chip?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label="Services" className="sticky top-[84px] z-30 border-b border-line bg-paper/85 backdrop-blur-xl sm:top-[92px]">
      <ul ref={listRef} className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-8">
        {services.map((s) => (
          <li key={s.slug} data-slug={s.slug} className="shrink-0">
            <a
              href={`#${s.slug}`}
              aria-current={active === s.slug ? "true" : undefined}
              className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === s.slug ? "text-white" : "text-ink/70 hover:text-ink"
              }`}
            >
              {active === s.slug && (
                <motion.span layoutId="svc-pill" className="absolute inset-0 -z-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
              )}
              <span className="relative">{s.short}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
