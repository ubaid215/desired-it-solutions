import Image from "next/image";
import lockup from "@/public/logo/logo-lockup.png";

/** Brand lockup (white wordmark): use on dark backgrounds only. */
export function Logo({ className = "h-8", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src={lockup}
      alt="Desired IT Solutions: Design, Develop, Scale"
      priority={priority}
      sizes="(min-width: 640px) 240px, 180px"
      className={`w-auto ${className}`}
    />
  );
}
