import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-10 md:pt-16 pb-8 md:pb-12 px-6 md:px-12 max-w-350 mx-auto relative z-10 flex flex-col items-start text-left">
      <div className="max-w-4xl flex flex-col items-start">
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display tracking-tight text-theme-text leading-[1.05] md:leading-[1.1] mb-6">
          <span className="inline-block font-display font-black tracking-tight text-[1.15em] text-transparent bg-clip-text bg-linear-to-r from-green-500 to-emerald-500 scale-y-110 origin-bottom pr-[0.05em]">
            Diabetes
          </span>{" "}
          management <br className="hidden lg:block" /> made{" "}
          <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-blue-600">
            smarter.
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-display text-theme-text max-w-3xl leading-relaxed mb-10 font-medium">
          Track your glucose to uncover trends and insights on your sugar levels
          and understand how your organs are doing over time
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
          <div className="relative inline-block">
            <Link
              href="https://app.bluepin.in"
              className="bg-blue-600 text-white text-lg px-10 py-4 rounded-full font-medium flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
            >
              <span className="whitespace-nowrap">Get started :)</span>
            </Link>
            <div className="absolute -top-3 -right-2 bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full rotate-12 shadow-md border-2 border-white dark:border-slate-950 pointer-events-none z-10">
              Free!
            </div>
          </div>
          <Link
            href="https://app.bluepin.in"
            className="bg-white dark:bg-slate-900 text-blue-600 border border-slate-200 dark:border-slate-800 text-lg px-10 py-4 rounded-full font-medium flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            <span className="whitespace-nowrap">Sign in</span>
          </Link>
        </div>

        <p className="text-lg md:text-xl font-poppins font-light text-theme-text max-w-2xl">
          Health apps were built to track. BluePin was built to understand.
        </p>
      </div>
    </section>
  );
}
