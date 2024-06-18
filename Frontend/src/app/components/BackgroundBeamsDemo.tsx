"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[30rem] w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Get in Touch with RightpathHR
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-xl mx-auto my-2 text-sm md:text-lg text-center relative z-10">
        We're here to help you navigate your HR challenges and find the right solutions for your business. Whether you have questions about our services, need support, or want to explore partnership opportunities, our team is ready to assist you. Reach out to us today and let's start the conversation.
        </p>
        <input
          type="text"
          placeholder="example@gmail.com"
          className="h-10 px-6 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
