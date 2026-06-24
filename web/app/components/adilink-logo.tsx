type AdilinkLogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
};

const sizeClasses = {
  sm: { mark: "h-11 w-11", title: "text-2xl", sub: "text-sm" },
  md: { mark: "h-16 w-16", title: "text-4xl", sub: "text-2xl" },
  lg: { mark: "h-24 w-24", title: "text-6xl", sub: "text-4xl" },
};

export function AdilinkLogo({ size = "md", showText = true }: AdilinkLogoProps) {
  const classes = sizeClasses[size];

  return (
    <div className="flex items-center gap-4">
      <svg className={classes.mark} viewBox="0 0 96 96" aria-hidden="true">
        <circle cx="48" cy="48" r="43" fill="none" stroke="#f0b83f" strokeWidth="4" />
        <circle cx="48" cy="48" r="34" fill="none" stroke="#f0b83f" strokeWidth="2" opacity="0.75" />
        <path
          d="M21 66c10-2 15-8 19-22 2-7 4-12 8-12s6 5 8 12c4 14 9 20 19 22"
          fill="none"
          stroke="#f0b83f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="7"
        />
        <path
          d="M24 72c8-4 16-4 24 0s16 4 24 0M29 79c7-3 13-3 19 0s12 3 19 0"
          fill="none"
          stroke="#f0b83f"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>
      {showText && (
        <div className="leading-none">
          <p className={`${classes.title} font-black tracking-tight text-white`}>AdiLink</p>
          <p className={`${classes.sub} mt-2 font-black text-amber-400`}>
            {"\u12D3\u12F2 \u1293\u12D5\u1218\u1295"}
          </p>
        </div>
      )}
    </div>
  );
}
