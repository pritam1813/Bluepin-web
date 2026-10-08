import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-6 md:px-12 pt-16 md:pt-24 pb-14 md:pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <p className="text-sm text-theme-text-sec">
            Bluepin — a diabetes companion
          </p>
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-theme-border"
          />
          <p className="text-sm text-theme-text-sec hidden sm:block">
            Free to start
          </p>
        </div>

        <h1 className="max-w-3xl text-5xl md:text-7xl font-display font-semibold tracking-[-0.02em] leading-[1.02] text-theme-text text-balance">
          Diabetes care that looks beyond the sugar reading.
        </h1>

        <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-theme-text-sec">
          Log glucose, upload lab reports, and see how your organs are doing
          over time — in one calm record you can bring to your doctor.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="https://app.bluepin.in"
            className="inline-flex items-center justify-center rounded-lg bg-theme-text px-8 py-3.5 text-base font-medium text-theme-bg transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-accent"
          >
            Get started
          </Link>
          <Link
            href="https://app.bluepin.in"
            className="text-base font-medium text-theme-text underline decoration-theme-border underline-offset-8 transition-colors hover:decoration-theme-text"
          >
            Sign in
          </Link>
        </div>

        {/* The one deliberate motif: a single ledger trend line */}
        <figure className="mt-14 border-t border-theme-border pt-8">
          <svg
            viewBox="0 0 640 180"
            role="img"
            aria-label="Illustrative glucose trend line moving steadily across a grid"
            className="h-40 w-full md:h-48"
          >
            <g
              stroke="currentColor"
              className="text-theme-border"
              strokeWidth="1"
            >
              {[30, 65, 100, 135].map((y) => (
                <line key={y} x1="0" y1={y} x2="640" y2={y} />
              ))}
              {[80, 160, 240, 320, 400, 480, 560].map((x) => (
                <line key={x} x1={x} y1="10" x2={x} y2="160" opacity="0.6" />
              ))}
            </g>
            <path
              d="M0 120 C 70 118, 110 92, 170 96 S 270 128, 330 112 S 440 62, 500 74 S 590 96, 640 84"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="stroke-theme-accent"
            />
            <g className="fill-theme-accent">
              <circle cx="170" cy="96" r="4" />
              <circle cx="330" cy="112" r="4" />
              <circle cx="500" cy="74" r="4" />
            </g>
            <g className="fill-theme-card stroke-theme-border">
              <circle cx="170" cy="96" r="1.6" className="fill-theme-card" />
              <circle cx="330" cy="112" r="1.6" className="fill-theme-card" />
              <circle cx="500" cy="74" r="1.6" className="fill-theme-card" />
            </g>
          </svg>
          <figcaption className="mt-4 flex flex-wrap gap-x-8 gap-y-1 text-sm text-theme-text-sec">
            <span>Fasting · 96 mg/dL</span>
            <span>Post-meal · 112 mg/dL</span>
            <span>HbA1c · 6.4%</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
