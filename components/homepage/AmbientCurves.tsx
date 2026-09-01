"use client";

import { motion } from "motion/react";

export default function AmbientCurves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-white dark:bg-slate-950">
      <motion.svg
        animate={{ x: ["-100vw", "100vw"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute top-[15%] w-[120vw] h-30 opacity-60"
      >
        <path
          d="M 0 50 Q 250 150 500 50 T 1000 50"
          stroke="url(#grad-blue-1)"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="grad-blue-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        animate={{ x: ["-100vw", "100vw"] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute top-[35%] w-[140vw] h-40 opacity-50"
      >
        <path
          d="M 0 50 Q 250 -50 500 50 T 1000 50"
          stroke="url(#grad-emerald-1)"
          strokeWidth="3"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="grad-emerald-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        animate={{ x: ["-100vw", "100vw"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
          delay: 12,
        }}
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute top-[50%] w-screen h-25 opacity-60"
      >
        <path
          d="M 0 50 Q 250 150 500 50 T 1000 50"
          stroke="url(#grad-purple-1)"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="grad-purple-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        animate={{ x: ["-100vw", "100vw"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute top-[70%] w-[150vw] h-35 opacity-40"
      >
        <path
          d="M 0 50 Q 250 -50 500 50 T 1000 50"
          stroke="url(#grad-blue-2)"
          strokeWidth="3"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="grad-blue-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        animate={{ x: ["-100vw", "100vw"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: 8,
        }}
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute top-[85%] w-[130vw] h-22.5 opacity-60"
      >
        <path
          d="M 0 50 Q 250 150 500 50 T 1000 50"
          stroke="url(#grad-emerald-2)"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="grad-emerald-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </motion.svg>

      <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/30 to-white dark:via-slate-950/30 dark:to-slate-950"></div>
    </div>
  );
}
