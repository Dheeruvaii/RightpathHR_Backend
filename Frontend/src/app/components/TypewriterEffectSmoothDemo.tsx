"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Visa,",
      className: "text-white dark:neutral-200",
    },
    {
      text: "Counsling",
      className: "text-white dark:neutral-200",
    },
    {
      text: "and",
      className: "text-white dark:neutral-200",
    },
   
    {
      text: "Placement",
      className: "text-white dark:neutral-200",
    },
    {
      text: "with",
      className: "text-white dark:neutral-200",
    },
    {
      text: "Right Path HR",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-fit z-30 px-2">
      <p className="text-neutral-400 dark:text-neutral-200 text-xs sm:text-base  ">
        We provide critical support in your foreign employment.
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
