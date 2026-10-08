import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  answer: string;
  sources?: { label: string; url: string }[];
}

const faqs: FaqItem[] = [
  {
    q: "What is a normal blood sugar level?",
    answer:
      "For most people without diabetes, a normal fasting blood sugar is 70–99 mg/dL (3.9–5.5 mmol/L). Fasting glucose of 100–125 mg/dL signals prediabetes, and 126 mg/dL or higher on two separate tests signals diabetes. Two hours after eating, blood sugar is normally below 140 mg/dL, with a target below 180 mg/dL for most people with diabetes. Bluepin tracks your glucose trends over time so you can see how your levels behave after fasting, meals, and activity.",
    sources: [
      { label: "American Diabetes Association", url: "https://diabetes.org/" },
      {
        label: "NIDDK (NIH)",
        url: "https://www.niddk.nih.gov/health-information/diabetes",
      },
    ],
  },
  {
    q: "What is a normal HbA1c level?",
    answer:
      "HbA1c is a blood test that reflects your average blood sugar over the past 2–3 months. A normal HbA1c is below 5.7%. Levels of 5.7–6.4% indicate prediabetes, and 6.5% or higher indicate diabetes. For most adults with diabetes, the treatment target is below 7% (about 154 mg/dL average sugar). Bluepin lets you upload your lab reports and watch your HbA1c trend over time instead of guessing from single readings.",
    sources: [
      {
        label: "American Diabetes Association — Understanding A1C",
        url: "https://diabetes.org/about-diabetes/a1c",
      },
      {
        label: "NIDDK (NIH) — A1C Test",
        url: "https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test",
      },
    ],
  },
  {
    q: "Can diabetes cause kidney disease?",
    answer:
      "Yes. About 1 in 3 people with diabetes develops chronic kidney disease (CKD), and diabetes is the leading cause of kidney failure worldwide. Regular urine albumin and eGFR (kidney function) tests help catch problems early, while diabetes is still manageable. Bluepin's Health Canvas tracks your kidney markers over time so you can spot worrying trends before they become urgent.",
    sources: [
      {
        label: "NIDDK (NIH) — Diabetic Kidney Disease",
        url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-kidney-disease",
      },
      {
        label: "MedlinePlus — Diabetes & Kidney Disease",
        url: "https://medlineplus.gov/ency/article/000494.htm",
      },
    ],
  },
  {
    q: "Does diabetes cause fatty liver?",
    answer:
      "Fatty liver disease affects roughly 65% of people with diabetes. High blood sugar and insulin resistance encourage fat to build up in the liver, which can silently progress to liver damage if ignored. Simple blood tests in your routine reports — ALT and AST — are the early warning signals. Bluepin connects these markers over time to alert you to changes in your liver health.",
    sources: [
      {
        label: "American Diabetes Association",
        url: "https://diabetes.org/about-diabetes/liver-and-diabetes",
      },
    ],
  },
  {
    q: "How does diabetes affect the heart?",
    answer:
      "People with diabetes face roughly 3 times the risk of cardiovascular disease, and heart disease is the leading cause of death in people with diabetes. High blood sugar damages blood vessels and raises cholesterol, which is why your lipid profile and blood pressure deserve the same attention as your glucose. Bluepin watches these trends together to help you see the full picture of your heart health.",
    sources: [
      {
        label: "American Diabetes Association — Heart Disease & Diabetes",
        url: "https://diabetes.org/about-diabetes/health-problems/heart-disease",
      },
    ],
  },
  {
    q: "Is Bluepin free?",
    answer:
      "Yes — Bluepin is free to get started, with no credit card required. You can record glucose readings by typing them in or snapping a photo of your glucometer, upload your blood reports, and start receiving Bluepin AI insights. There are no hidden charges to begin understanding your health.",
  },
  {
    q: "Is Bluepin medical advice? Does it replace my doctor?",
    answer:
      "No. Bluepin is an educational health companion — not a doctor and not a medical device. It does not diagnose, prescribe, or treat any condition and never replaces professional medical care. Always involve your doctor in medical decisions and never start, stop, or change medication on your own.",
  },
  {
    q: "Do I need a CGM or a specific glucometer to use Bluepin?",
    answer:
      "No. Bluepin works with any glucometer — enter your readings manually or simply take a photo of the meter screen and Bluepin reads it for you. Continuous glucose monitor (CGM) integrations like FreeStyle Libre and Dexcom are on our roadmap and will sync straight into your trend charts.",
  },
  {
    q: "How is my health data kept private?",
    answer:
      "Your health data is encrypted in transit and at rest, stored on secure servers, and never sold — no ads, no data brokers, no tracking for profit. Your information is not used to train public AI models, and you can export or delete your data at any time. Bluepin follows India's DPDP Act for privacy, and you stay in control of what you upload.",
  },
  {
    q: "How is Bluepin different from other diabetes apps?",
    answer:
      "Most diabetes apps only track your sugar. Bluepin connects your glucose, HbA1c, and blood reports over time to show how diabetes may be affecting your organs — kidneys, eyes, heart, liver, and nerves. Health apps were built to track; Bluepin was built to understand.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, answer }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 px-6 md:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-6xl border-t border-theme-border py-14 md:py-20">
        <h2 className="text-4xl font-display font-semibold tracking-tight text-theme-text md:text-5xl">
          Frequently asked questions
        </h2>

        <div className="mt-10 max-w-4xl border-t border-theme-border">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-theme-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 select-none [&::-webkit-details-marker]:hidden">
                <span className="text-lg font-medium tracking-tight text-theme-text">
                  {item.q}
                </span>
                <ChevronDown
                  className="size-5 shrink-0 text-theme-text-sec transition-transform duration-200 group-open:rotate-180"
                  strokeWidth={2}
                />
              </summary>
              <div className="pb-6">
                <p className="max-w-3xl leading-relaxed text-theme-text-sec">
                  {item.answer}
                </p>
                {item.sources && item.sources.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                    {item.sources.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-theme-accent underline decoration-theme-border underline-offset-4 hover:decoration-theme-accent"
                      >
                        {source.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-theme-text-sec">
          Bluepin is an educational health companion. It is not a medical
          device and does not provide medical advice, diagnosis, or treatment.
          Always consult a qualified doctor for decisions about your health.
        </p>
      </div>
    </section>
  );
}
