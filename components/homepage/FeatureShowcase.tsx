import FeatureCarousel from "./FeatureCarousel";
import GetStartedButton from "./GetStartedButton";
import glucose1 from "@/public/glucose1.webp";
import glucose2 from "@/public/glucose2.webp";
import glucose3 from "@/public/glucose3.webp";
import health1 from "@/public/health1.webp";
import health2 from "@/public/health2.webp";
import health3 from "@/public/health3.webp";

export default function FeatureShowcase() {
  return (
    <section className="px-6 md:px-12">
      <div className="mx-auto max-w-6xl border-t border-theme-border pt-14 md:pt-20">
        <h2 className="max-w-2xl text-4xl font-display font-semibold tracking-tight text-theme-text md:text-5xl">
          Why BluePin
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-theme-text-sec md:text-xl">
          Diabetes is not a single sugar number. Bluepin keeps your glucose
          and lab history in one record, so long-term strain on your organs
          is visible early.
        </p>

        <div className="mt-6">
          <FeatureCarousel
            title="Glucose tracking"
            subtitle="Log readings by hand or photograph your meter. Watch trends form week by week instead of guessing from one reading."
            images={[glucose1, glucose2, glucose3]}
            featureIndex="01"
          />
          <FeatureCarousel
            title="Health canvas"
            subtitle="Upload lab reports and see kidney, liver, lipid, and HbA1c markers move together over time, in language you can discuss with your doctor."
            images={[health1, health2, health3]}
            featureIndex="02"
          />
        </div>
        <GetStartedButton />
      </div>
    </section>
  );
}
