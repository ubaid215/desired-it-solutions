"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, navDirection, site } from "@/lib/site";
import { Logo } from "./logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <div
        className={`mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full pl-5 pr-2 transition-[background-color,box-shadow,color] duration-500 ease-out-quint ${
          solid
            ? "bg-ink/85 text-white shadow-[0_8px_30px_-12px_rgba(14,17,22,0.45)] ring-1 ring-white/10 backdrop-blur-xl"
            : "bg-transparent text-white"
        }`}
      >
        <Link href="/" aria-label={`${site.name} home`} transitionTypes={[navDirection(pathname, "/")]}>
          <Logo priority className="h-7 sm:h-8" />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    transitionTypes={[navDirection(pathname, item.href)]}
                    aria-current={active ? "page" : undefined}
                    className="relative block px-4 py-2 text-sm font-medium"
                  >
                    <span className={active ? "" : "opacity-70 transition-opacity hover:opacity-100"}>{item.label}</span>
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-4 -bottom-0.5 h-[3px] rounded-full bg-lime"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            transitionTypes={[navDirection(pathname, "/contact")]}
            className="group hidden items-center gap-2 rounded-full bg-cobalt py-2.5 pl-5 pr-4 text-sm font-semibold text-white transition-colors hover:bg-cobalt-600 sm:inline-flex"
          >
            Book a strategy call
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl bg-ink p-6 text-white md:hidden"
          >
            <ul className="space-y-1">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <Link
                    href={item.href}
                    transitionTypes={[navDirection(pathname, item.href)]}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 font-display text-3xl font-bold"
                  >
                    {item.label}
                    {pathname === item.href && <span className="size-2.5 rounded-full bg-lime" />}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-cobalt py-4 font-semibold"
            >
              Book a free strategy call <ArrowUpRight className="size-4" />
            </Link>
            <a href={site.phoneHref} className="mt-3 block text-center text-sm text-muted-dark">
              Or call {site.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
