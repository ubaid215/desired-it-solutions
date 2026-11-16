import Link from "next/link";
import { ArrowUpRight,  Mail, MapPin, Phone } from "lucide-react";
import { nav, services, site } from "@/lib/site";
import { Logo } from "./logo";

/**
 * Sticky footer revealed from underneath <main> (curtain effect),
 * with a giant wordmark in the background.
 */
export function SiteFooter() {
  return (
    <footer className="noise sticky bottom-0 z-0 overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo className="h-10 sm:h-12" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-dark">{site.tagline}</p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink"
            >
              Book a free strategy call
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-dark">Company</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="text-white/80 transition-colors hover:text-lime">
                      {n.label}
                    </Link>
                  </li>
                ))}
                <li><span className="text-white/40">Privacy Policy</span></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-dark">Services</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services#${s.slug}`} className="text-white/80 transition-colors hover:text-lime">
                      {s.short}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-dark">Get in touch</h2>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li><a href={site.phoneHref} className="flex gap-2.5 hover:text-lime"><Phone className="mt-0.5 size-4 shrink-0 text-lime" />{site.phone}</a></li>
                <li><a href={`mailto:${site.email}`} className="flex gap-2.5 break-all hover:text-lime"><Mail className="mt-0.5 size-4 shrink-0 text-lime" />{site.email}</a></li>
                <li className="flex gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0 text-lime" />{site.address}</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-14 max-w-2xl text-xs leading-relaxed text-white/40">
          We acknowledge the Traditional Custodians of the lands on which we work and pay our respects to Elders past and present.
        </p>
        <div className="mt-6 flex flex-col justify-between gap-2 border-t border-line-dark pt-6 text-xs text-white/40 sm:flex-row">
          <span>© 2026 {site.name}. All rights reserved.</span>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none select-none px-3 leading-[0.78]">
        <span className="block whitespace-nowrap text-center font-display text-[24vw] font-extrabold tracking-[-0.06em] text-white/[0.06]">
          desired<span className="text-lime/30">.</span>
        </span>
      </div>
    </footer>
  );
}
