"use client";

import React from "react";
import { motion } from "motion/react";
import { Bean, Eye, Heart, Brain } from "lucide-react";
import GetStartedButton from "./GetStartedButton";

const LiverIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 8c-2-2-5-2-8-1-2.5.8-6 2-7 5-1 3 0 6 3 6 1.5 0 3-1.5 3-3 0-1 1-1.5 2-1.5 1.5 0 3 1.5 3 3 0 1 1 2 2.5 2 1.5 0 2.5-1 2.5-2.5C21 13 21 10 19 8z" />
  </svg>
);

const complications = [
  {
    id: "ckd",
    title: "CKD",
    stat: "1 in 3",
    desc: "people with diabetes develop kidney disease",
    iconColor: "text-blue-500 dark:text-blue-400",
    icon: Bean,
  },
  {
    id: "retinopathy",
    title: "Retinopathy",
    stat: "1 in 3",
    desc: "people with diabetes develop diabetic retinopathy",
    iconColor: "text-indigo-500 dark:text-indigo-400",
    icon: Eye,
  },
  {
    id: "cvd",
    title: "CVD Risk",
    stat: "3+Ã¹ higher",
    desc: "risk of cardiovascular disease",
    iconColor: "text-rose-500 dark:text-rose-400",
    icon: Heart,
  },
  {
    id: "liver",
    title: "Fatty Liver",
    stat: "65%",
    desc: "of people with diabetes have fatty liver",
    iconColor: "text-amber-600 dark:text-amber-400",
    icon: LiverIcon,
  },
  {
    id: "neuropathy",
    title: "Neuropathy",
    stat: "50%",
    desc: "of people with diabetes experience neuropathy",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    icon: Brain,
  },
];

export default function MultiOrganProblem() {
  return (
    <section className="py-10 md:py-16 relative z-10 bg-transparent border-t border-theme-border/40">
      <div className="max-w-8xl mx-auto px-6 md:px-12 text-center">
        <div className="mx-auto text-left w-full">
          <h2 className="text-3xl md:text-4xl font-display tracking-tight text-theme-text mb-3 font-bold">
            Why it matters
          </h2>
          <p className="text-xl md:text-2xl font-display text-theme-text max-w-3xl leading-relaxed mb-6 font-medium">
            Diabetes affects your entire body. Most diabetes apps only track
            your sugar.
          </p>
        </div>

        {/* Premium Scientific Cards List */}
        <div className="max-w-4xl flex flex-col gap-3 mb-8">
          {complications.map((comp, idx) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="w-full p-4 sm:p-5 rounded-xl border border-theme-border/60 bg-white/40 dark:bg-theme-card/30 backdrop-blur-xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center text-left gap-3 sm:gap-6 hover:bg-white/70 dark:hover:bg-theme-card/70 transition-colors duration-200"
            >
              {/* Icon & Title Group */}
              <div className="flex items-center gap-3 sm:w-48 lg:w-56 shrink-0">
                <comp.icon
                  className={`w-8 h-8 shrink-0 ${comp.iconColor}`}
                  strokeWidth={1.5}
                />
                <h4 className="text-[17px] font-semibold text-theme-text tracking-tight m-0">
                  {comp.title}
                </h4>
              </div>

              {/* Statistic & Description Group */}
              <div className="flex flex-row flex-wrap sm:flex-nowrap items-baseline sm:items-center gap-x-2 sm:gap-x-3 gap-y-1 flex-1">
                <h3
                  className={`text-2xl md:text-3xl font-poppins font-bold tracking-tight ${comp.iconColor} shrink-0`}
                >
                  {comp.stat}
                </h3>
                <p className="text-[14px] text-theme-text-sec font-medium leading-snug m-0">
                  {comp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto w-full text-left">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-display font-medium text-theme-text leading-tight"
          >
            Your diabetes care should look <br className="hidden md:block" />{" "}
            <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-blue-600 pb-1">
              beyond glucose.
            </span>
          </motion.h3>
          <GetStartedButton />
        </div>
      </div>
    </section>
  );
}
