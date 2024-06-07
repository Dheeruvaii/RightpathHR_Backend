"use client";
import React from "react";

import { cn } from "@/utils/cn";
import { Boxes } from "@/components/ui/background-boxes";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-[28rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <TypewriterEffectSmoothDemo />

      <Boxes />
    </div>
  );
}
