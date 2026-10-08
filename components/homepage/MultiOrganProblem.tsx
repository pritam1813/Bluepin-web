import GetStartedButton from "./GetStartedButton";

const complications = [
  {
    id: "ckd",
    title: "Kidneys",
    stat: "1 in 3",
    desc: "people with diabetes develop chronic kidney disease",
  },
  {
    id: "retinopathy",
    title: "Eyes",
    stat: "1 in 3",
    desc: "develop diabetic retinopathy over time",
  },
  {
    id: "cvd",
    title: "Heart",
    stat: "3x",
    desc: "higher risk of cardiovascular disease",
  },
  {
    id: "liver",
    title: "Liver",
    stat: "65%",
    desc: "of people with diabetes show fatty liver markers",
  },
  {
    id: "nerves",
    title: "Nerves",
    stat: "50%",
    desc: "experience neuropathy during their lifetime",
  },
];

export default function MultiOrganProblem() {
  return (
    <section className="px-6 md:px-12">
      <div className="mx-auto max-w-6xl border-t border-theme-border py-14 md:py-20">
        <h2 className="text-4xl font-display font-semibold tracking-tight text-theme-text md:text-5xl">
          Why it matters
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-theme-text-sec md:text-xl">
          Diabetes acts across the whole body. Sugar readings alone do not
          show it.
        </p>

        <dl className="mt-10 border-t border-theme-border">
          {complications.map((comp) => (
            <div
              key={comp.id}
              className="grid grid-cols-12 items-baseline gap-x-4 gap-y-1 border-b border-theme-border py-5"
            >
              <dt className="col-span-6 text-base font-medium text-theme-text sm:col-span-3">
                {comp.title}
              </dt>
              <dd className="col-span-6 text-right text-2xl font-display font-semibold tabular-nums tracking-tight text-theme-text sm:col-span-3 sm:text-left md:text-3xl">
                {comp.stat}
              </dd>
              <dd className="col-span-12 text-base leading-relaxed text-theme-text-sec sm:col-span-6">
                {comp.desc}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 max-w-2xl text-2xl font-display leading-snug tracking-tight text-theme-text md:text-3xl">
          Your care should read the whole record, not one number.
        </p>
        <GetStartedButton />
      </div>
    </section>
  );
}
