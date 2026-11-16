/** Deterministic pseudo-random so server and client render identical paths. */
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function tornPath(seed: number, width = 1440, height = 40) {
  const r = rng(seed);
  let d = `M0 ${height} L0 ${height * 0.55}`;
  let x = 0;
  while (x < width) {
    x += 6 + r() * 22;
    const y = height * 0.25 + r() * height * 0.55 + (r() > 0.92 ? -height * 0.2 : 0);
    d += ` L${Math.min(x, width).toFixed(1)} ${y.toFixed(1)}`;
  }
  return `${d} L${width} ${height} Z`;
}

/**
 * Torn-paper edge used between sections. `color` should match the section it belongs to.
 * position="top" sits on top of a section (paper torn upwards), "bottom" is flipped.
 */
export function TornEdge({
  position = "top",
  seed = 7,
  className = "",
}: {
  position?: "top" | "bottom";
  seed?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 block h-6 w-full sm:h-10 ${
        position === "top" ? "bottom-full" : "top-full rotate-180"
      } ${className}`}
    >
      <path d={tornPath(seed)} fill="currentColor" />
      <path d={tornPath(seed + 3)} fill="currentColor" opacity="0.35" transform="translate(0 -4)" />
    </svg>
  );
}
