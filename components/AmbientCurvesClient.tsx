"use client";

import dynamic from "next/dynamic";

// Defer the motion/react animation bundle off the critical path.
// AmbientCurves is purely decorative — safe to skip SSR and load after hydration.
const AmbientCurves = dynamic(
  () => import("./homepage/AmbientCurves"),
  { ssr: false }
);

export default function AmbientCurvesClient() {
  return <AmbientCurves />;
}
