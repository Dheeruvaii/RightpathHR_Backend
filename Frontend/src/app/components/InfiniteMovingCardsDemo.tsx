"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-start relative overflow-hidden space-y-6">
      <div className="flex text-3xl md:text-5xl font-bold dark:text-white justify-center text-gray-900">
        Testimaonials
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "RightPath's assistance was invaluable in my career transition to Dubai. As a Software Developer, I needed a seamless recruitment process to secure a position quickly in Dubai's competitive market. Their personalized approach and efficient handling of the hiring process ensured a smooth transition. Thanks to RightPath's support, I now thrive in my role as a Software Developer in Dubai, contributing to innovative projects and expanding my professional network.",
    name: "Suman Shrestha",
    title: "Software Developer, Dubai",
  },
  {
    quote:
      "I'm incredibly grateful to RightPath for their exceptional service. Transitioning to a Marketing Manager role in Dubai seemed daunting, but RightPath's dedicated team made the process seamless. From the initial consultation to the final placement, they provided expert guidance and unwavering support. Thanks to RightPath, I now excel as a Marketing Manager in Dubai, driving innovative campaigns and contributing to business growth.",
    name: "Anisha Thapa",
    title: "Marketing Manager, Dubai",
  },
  {
    quote:
      "RightPath's HR training programs have been instrumental in my career growth. As a Graphic Designer aspiring to stand out in Dubai's competitive market, I needed to upskill. RightPath's comprehensive training courses equipped me with the knowledge and tools to elevate my craft. Thanks to RightPath's training programs, I've enhanced my design skills and positioned myself as a sought-after Graphic Designer in Dubai.",
    name: "Ramesh Adhikari",
    title: "Graphic Designer, Dubai",
  },
  {
    quote:
      "RightPath's commitment to excellence sets them apart. Seeking opportunities in Dubai, I needed a partner who understood my career aspirations. RightPath exceeded my expectations with their personalized approach and attention to detail. Thanks to RightPath, I now thrive as a Human Resources Specialist in Dubai, contributing to organizational success and fostering employee growth.",
    name: "Manisha Gurung",
    title: "Human Resources Specialist, Dubai",
  },
  {
    quote:
      "RightPath's dedication to providing innovative solutions has been key to my success. As a Financial Analyst in Dubai, I needed a partner who could help me navigate the market. RightPath proved to be that partner, matching me with the perfect opportunity. Thanks to RightPath, I now excel as a Financial Analyst in Dubai, leveraging their expertise to drive strategic decisions.",
    name: "Dipesh Rai",
    title: "Financial Analyst, Dubai",
  },
];
