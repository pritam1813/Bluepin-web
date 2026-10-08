import Link from "next/link";

export default function GetStartedButton() {
  return (
    <div className="mt-10">
      <Link
        href="https://app.bluepin.in"
        className="inline-flex items-center justify-center rounded-lg bg-theme-text px-8 py-3.5 text-base font-medium text-theme-bg transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-accent"
      >
        Get started
      </Link>
    </div>
  );
}
