"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `We're a Dubai-based creative agency, serving clients globally. We specialize in Rapid Hiring, swiftly sourcing top talent, and Job Placements, expertly matching candidates to roles. Our HR Trainings boost employee skills and productivity. We pride ourselves on exceptional Customer Satisfaction through tailored solutions and responsive support, fostering long-term partnerships.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
