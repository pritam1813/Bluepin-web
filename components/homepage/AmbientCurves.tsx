export default function AmbientCurves() {
  // Deliberately quiet: homepage restraint pass keeps one static hairline
  // grid instead of animated multicolor curves.
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 bg-theme-bg"
    />
  );
}
