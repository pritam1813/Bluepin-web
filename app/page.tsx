import {
  Hero,
  FeatureShowcase,
  MultiOrganProblem,
  HowItWorks,
  FAQSection,
} from "@/components/homepage";
import AmbientCurves from "@/components/homepage/AmbientCurves";

export default function WelcomeScreen() {
  return (
    <div className="min-h-screen bg-theme-bg font-sans text-theme-text antialiased selection:bg-theme-text selection:text-theme-bg">
      <AmbientCurves />
      <main className="relative">
        <Hero />
        <FeatureShowcase />
        <MultiOrganProblem />
        <HowItWorks />
        <FAQSection />
      </main>
    </div>
  );
}
