/**
 * Code-drawn UI mockups for our three CONCEPT projects (fictional brands).
 * Labelled "Concept" wherever shown: these are not client work.
 */
export type ConceptKey = "harbour" | "fieldpro" | "kinetic";

export const concepts: Record<
  ConceptKey,
  { name: string; type: string; blurb: string; bg: string; fg: string; accent: string; image: string }
> = {
  harbour: {
    name: "Harbour & Co.",
    type: "Café e-commerce",
    blurb: "An online store and pre-order system designed to turn morning regulars into online customers.",
    bg: "#F3EDE4",
    fg: "#2B1D14",
    accent: "#C8592B",
    image: "/photos/client-1.jpg",
  },
  fieldpro: {
    name: "FieldPro",
    type: "Trades job-management app",
    blurb: "Quotes, scheduling and invoicing in one app, so tradies spend less time on admin and more time on the tools.",
    bg: "#0F1A2A",
    fg: "#FFFFFF",
    accent: "#FFB020",
    image: "/photos/svc-apps.jpg",
  },
  kinetic: {
    name: "Kinetic Physio",
    type: "Clinic booking website",
    blurb: "A calm, accessible site with real-time online booking designed to fill appointment books.",
    bg: "#EAF4F1",
    fg: "#0D3B34",
    accent: "#1E9C82",
    image: "/photos/client-2.jpg",
  },
};

export function BrowserMock({ concept, className = "" }: { concept: ConceptKey; className?: string }) {
  const c = concepts[concept];
  return (
    <div className={`@container overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/10 ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#f4f4f2] px-3 py-2">
        <span className="size-2 rounded-full bg-[#ff5f57]" />
        <span className="size-2 rounded-full bg-[#febc2e]" />
        <span className="size-2 rounded-full bg-[#28c840]" />
        <span className="ml-3 h-4 flex-1 rounded-md bg-white text-[8px] leading-4 text-black/40 ring-1 ring-black/5">
          &nbsp;&nbsp;{c.name.toLowerCase().replace(/[^a-z]/g, "")}.com.au
        </span>
      </div>
      <div style={{ background: c.bg, color: c.fg }} className="p-3 @sm:p-5 @2xl:p-8">
        <div className="flex items-center justify-between text-[9px] font-semibold">
          <span className="font-display text-[11px] font-extrabold">{c.name}</span>
          <span className="hidden gap-3 opacity-70 @sm:flex">
            <span>Menu</span>
            <span>About</span>
            <span>Contact</span>
          </span>
          <span style={{ background: c.accent }} className="hidden rounded-full px-2 py-1 text-[8px] text-white @[14rem]:inline">
            {concept === "harbour" ? "Order now" : concept === "kinetic" ? "Book online" : "Free trial"}
          </span>
        </div>
        <div className="mt-5 grid grid-cols-5 items-center gap-4">
          <div className="col-span-3">
            <div className="font-display text-[13px] font-extrabold leading-tight @sm:text-lg @2xl:text-3xl">
              {concept === "harbour" && "Great coffee, ready when you are."}
              {concept === "kinetic" && "Move better. Book in under a minute."}
              {concept === "fieldpro" && "Run your trade business from your pocket."}
            </div>
            <div className="mt-2 space-y-1">
              <div className="h-1.5 w-11/12 rounded-full opacity-20" style={{ background: c.fg }} />
              <div className="h-1.5 w-8/12 rounded-full opacity-20" style={{ background: c.fg }} />
            </div>
            <div className="mt-3 inline-block rounded-full px-3 py-1.5 text-[8px] font-bold text-white" style={{ background: c.accent }}>
              Get started →
            </div>
          </div>
          <div className="col-span-2 aspect-[4/5] rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${c.image})` }} />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((k) => (
            <div key={k} className="rounded-md p-2" style={{ background: concept === "fieldpro" ? "#1A2840" : "#ffffffb0" }}>
              <div className="h-6 rounded" style={{ background: c.accent, opacity: 0.18 + k * 0.12 }} />
              <div className="mt-1.5 h-1 w-10/12 rounded-full opacity-25" style={{ background: c.fg }} />
              <div className="mt-1 h-1 w-6/12 rounded-full opacity-25" style={{ background: c.fg }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
