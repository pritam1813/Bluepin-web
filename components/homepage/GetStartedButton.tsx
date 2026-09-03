import Link from "next/link";

export default function GetStartedButton() {
  return (
    <div className="mt-12 flex justify-start w-full mx-auto">
      <div className="relative inline-block w-auto">
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
    </div>
  );
}
