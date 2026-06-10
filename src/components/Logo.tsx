export function Logo({ size = 1 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3" style={{ transform: `scale(${size})`, transformOrigin: "left center" }}>
      <svg width="36" height="36" viewBox="0 0 36 36" className="text-gold">
        <defs>
          <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f0d080" />
            <stop offset="50%" stopColor="#c9a84c" />
            <stop offset="100%" stopColor="#8b6914" />
          </linearGradient>
        </defs>
        <path
          d="M6 22 L10 10 L14 18 L18 6 L22 18 L26 10 L30 22 Z"
          fill="url(#logoGold)"
          stroke="url(#logoGold)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="10" r="1.5" fill="#f0d080" />
        <circle cx="18" cy="6" r="2" fill="#f0d080" />
        <circle cx="26" cy="10" r="1.5" fill="#f0d080" />
        <rect x="6" y="24" width="24" height="2" fill="url(#logoGold)" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display font-black text-gold text-xs sm:text-sm tracking-wide whitespace-nowrap">SRI VIJAYA DURGA</span>
        <span className="font-body text-[9px] tracking-[0.4em] text-gold/70">CARS & TRAVELS</span>
      </div>
    </div>
  );
}
