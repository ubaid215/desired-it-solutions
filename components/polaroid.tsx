import Image from "next/image";

/** Taped polaroid photo for the "studio scrapbook" layer. Straightens on hover. */
export function Polaroid({
  src,
  alt,
  caption,
  rotate = -3,
  className = "",
  sizes = "280px",
}: {
  src: string;
  alt: string;
  caption?: string;
  rotate?: number;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure
      style={{ rotate: `${rotate}deg` }}
      className={`relative bg-white p-2.5 pb-3 shadow-[0_18px_40px_-16px_rgba(14,17,22,0.35)] ring-1 ring-black/5 transition-[rotate,translate] duration-500 ease-out-quint hover:-translate-y-1 hover:!rotate-0 ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-4deg] bg-[#f3e9b8]/80 shadow-sm [clip-path:polygon(3%_0,97%_4%,100%_100%,0_92%)]"
      />
      <div className="relative aspect-square overflow-hidden bg-paper-3">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
      {caption && <figcaption className="mt-2.5 text-center font-serif text-lg italic text-ink/80">{caption}</figcaption>}
    </figure>
  );
}
