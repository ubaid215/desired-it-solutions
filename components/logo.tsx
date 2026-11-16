/** Temporary wordmark until the client supplies a logo. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="#2B4BFF" />
        <path d="M10 8h6.5a8 8 0 0 1 0 16H10z" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinejoin="round" />
        <circle cx="23.5" cy="8.5" r="3" fill="#D4FF3A" />
      </svg>
      <span className="font-display text-[15px] font-bold leading-none tracking-tight">
        Desired<span className="font-medium opacity-60"> IT Solutions</span>
      </span>
    </span>
  );
}
