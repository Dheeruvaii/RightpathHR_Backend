"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 md:px-8 lg:px-28"
      >
        <div className="text-3xl md:text-5xl font-bold dark:text-white text-center text-gray-300">
          Who We Are ?
        </div>
        <TextGenerateEffectDemo />
      </motion.div>
    </AuroraBackground>
  );
}
