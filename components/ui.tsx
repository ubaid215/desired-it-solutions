import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "lime" | "outline-light" | "outline-dark";

const variants: Record<Variant, string> = {
  primary: "bg-cobalt text-white hover:bg-cobalt-600",
  lime: "bg-lime text-ink hover:bg-lime-600",
  "outline-light": "text-white ring-1 ring-white/25 hover:bg-white/10",
  "outline-dark": "text-ink ring-1 ring-ink/15 hover:bg-ink/5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-full font-semibold transition-colors duration-300 ${
        size === "lg" ? "py-4 pl-7 pr-5 text-base" : "py-3 pl-5 pr-4 text-sm"
      } ${variants[variant]} ${className}`}
    >
      {children}
      <span className="relative grid size-6 place-items-center overflow-hidden rounded-full bg-white/15">
        <ArrowUpRight className="size-4 transition-transform duration-300 ease-out-quint group-hover:-translate-y-6 group-hover:translate-x-6" />
        <ArrowUpRight className="absolute size-4 -translate-x-6 translate-y-6 transition-transform duration-300 ease-out-quint group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </Link>
  );
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "light" ? "text-lime" : "text-cobalt"
      }`}
    >
      <span className={`size-1.5 rounded-full ${tone === "light" ? "bg-lime" : "bg-cobalt"}`} />
      {children}
    </p>
  );
}

/** Serif italic accent word used once per headline. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal italic tracking-normal">{children}</em>;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}
