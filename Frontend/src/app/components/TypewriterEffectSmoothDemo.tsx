"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Process",
      className: "text-white dark:neutral-200",
    },
    {
      text: "your",
      className: "text-neutral-300 dark:neutral-200",
    },
    {
      text: "visa",
      className: "text-neutral-300 dark:neutral-200",
    },
    {
      text: "and",
      className: "text-neutral-300 dark:neutral-200",
    },
    {
      text: "documents",
      className: "text-neutral-300 dark:neutral-200",
    },
    {
      text: "with",
      className: "text-neutral-300 dark:neutral-200",
    },
    {
      text: "Right Path HR",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-fit z-30 px-2">
      <p className="text-neutral-400 dark:text-neutral-200 text-xs sm:text-base  ">
        Are you having problems with visa related documents and its processing?
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
