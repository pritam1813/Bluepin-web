export default function AmbientCurves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-white dark:bg-slate-950">
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute top-[15%] w-[120vw] h-30 opacity-60 animate-slide-curve"
        style={{ "--duration": "25s" } as React.CSSProperties}
      >
        <path
          d="M 0 50 Q 250 150 500 50 T 1000 50"
          stroke="url(#grad-blue-1)"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="grad-blue-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute top-[35%] w-[140vw] h-40 opacity-50 animate-slide-curve"
        style={{ "--duration": "35s", "--delay": "5s" } as React.CSSProperties}
      >
        <path
          d="M 0 50 Q 250 -50 500 50 T 1000 50"
          stroke="url(#grad-emerald-1)"
          strokeWidth="3"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="grad-emerald-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute top-[50%] w-screen h-25 opacity-60 animate-slide-curve"
        style={{ "--duration": "28s", "--delay": "12s" } as React.CSSProperties}
      >
        <path
          d="M 0 50 Q 250 150 500 50 T 1000 50"
          stroke="url(#grad-purple-1)"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="grad-purple-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute top-[70%] w-[150vw] h-35 opacity-40 animate-slide-curve"
        style={{ "--duration": "40s", "--delay": "2s" } as React.CSSProperties}
      >
        <path
          d="M 0 50 Q 250 -50 500 50 T 1000 50"
          stroke="url(#grad-blue-2)"
          strokeWidth="3"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="grad-blue-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute top-[85%] w-[130vw] h-22.5 opacity-60 animate-slide-curve"
        style={{ "--duration": "30s", "--delay": "8s" } as React.CSSProperties}
      >
        <path
          d="M 0 50 Q 250 150 500 50 T 1000 50"
          stroke="url(#grad-emerald-2)"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="grad-emerald-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/30 to-white dark:via-slate-950/30 dark:to-slate-950"></div>
    </div>
  );
}
