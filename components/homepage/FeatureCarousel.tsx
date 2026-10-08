"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureCarouselProps {
  title: string;
  subtitle: string;
  images: Array<string | StaticImageData>;
  featureIndex: string;
}

export default function FeatureCarousel({
  title,
  subtitle,
  images,
  featureIndex,
}: FeatureCarouselProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);

  return (
    <div className="grid gap-10 border-t border-theme-border py-14 md:grid-cols-12 md:gap-12 md:py-20">
      <div className="md:col-span-5">
        <p className="text-sm tabular-nums text-theme-text-sec">
          {featureIndex}
        </p>
        <h3 className="mt-3 text-3xl font-display font-semibold tracking-tight text-theme-text md:text-4xl">
          {title}
        </h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-theme-text-sec">
          {subtitle}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <div className="flex items-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "h-1 rounded-full transition-colors",
                  currentSlide === idx
                    ? "w-8 bg-theme-text"
                    : "w-3 bg-theme-border hover:bg-theme-text-sec",
                )}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            aria-label="Next screenshot"
            className="ml-2 inline-flex size-10 items-center justify-center rounded-full border border-theme-border text-theme-text transition-colors hover:border-theme-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-accent"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="md:col-span-7">
        <div className="overflow-hidden rounded-xl border border-theme-border bg-theme-card">
          <div className="relative mx-auto aspect-[9/16] w-full max-w-70 bg-theme-card sm:max-w-80">
            {images.map((src, idx) => (
              <div
                key={typeof src === "string" ? src : src.src}
                aria-hidden={currentSlide !== idx}
                className={cn(
                  "absolute inset-0 transition-opacity duration-300",
                  currentSlide === idx ? "opacity-100" : "opacity-0",
                )}
              >
                <Image
                  src={src}
                  alt={`${title} screenshot ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  priority={idx === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-sm tabular-nums text-theme-text-sec">
          {currentSlide + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
