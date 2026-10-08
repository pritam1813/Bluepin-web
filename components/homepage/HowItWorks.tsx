import GetStartedButton from "./GetStartedButton";

const steps = [
  {
    n: "01",
    title: "Add your health data",
    body: "Glucose readings, blood reports, HbA1c and more.",
  },
  {
    n: "02",
    title: "Build your health history",
    body: "Bluepin keeps every entry in one timeline.",
  },
  {
    n: "03",
    title: "See trends and patterns",
    body: "Watch markers move together across months.",
  },
  {
    n: "04",
    title: "Understand what needs care",
    body: "Take a clear record to your doctor and act earlier.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 md:px-12">
      <div className="mx-auto max-w-6xl border-t border-theme-border py-14 md:py-20">
        <h2 className="text-4xl font-display font-semibold tracking-tight text-theme-text md:text-5xl">
          How BluePin works
        </h2>

        <ol className="mt-10 border-t border-theme-border">
          {steps.map((step) => (
            <li
              key={step.n}
              className="grid gap-2 border-b border-theme-border py-6 md:grid-cols-12 md:items-baseline md:gap-4"
            >
              <span className="text-sm tabular-nums text-theme-text-sec md:col-span-1">
                {step.n}
              </span>
              <h3 className="text-xl font-medium tracking-tight text-theme-text md:col-span-4">
                {step.title}
              </h3>
              <p className="text-lg leading-relaxed text-theme-text-sec md:col-span-7">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
        <GetStartedButton />
      </div>
    </section>
  );
}
