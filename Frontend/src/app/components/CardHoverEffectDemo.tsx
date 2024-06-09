"use client";
import Image1 from "../../../public/seamless_service_image.jpeg";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="flex-col justify-center max-w-5xl mx-auto p-8 my-4 ">
      <div className="flex  text-3xl md:text-5xl font-bold dark:text-white justify-center text-gray-900">
        Why Us?
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Seamless Visa Solutions",
    description:
      "We deliver hassle-free visa services, tailored to meet your specific needs. Our experienced team handles every step of the process, ensuring compliance and efficiency, so you can focus on your core business activities without worrying about visa-related issues.",
    link: "https://stripe.com",
    image: Image1,
  },
  {
    title: "Swift Talent Acquisition",
    description:
      "Our rapid hiring process is designed to source top talent quickly and effectively. We understand the urgency of your staffing needs and leverage our extensive network and recruitment expertise to find the best candidates in the shortest time possible.",
    link: "https://netflix.com",
    image: Image1,
  },
  {
    title: "Expert Job Placements",
    description:
      "We excel in matching candidates with suitable roles, ensuring successful and lasting placements. Our thorough vetting process and deep understanding of industry requirements guarantee that we place the right people in the right positions, contributing to your company’s success.",
    link: "https://google.com",
    image: Image1,
  },
  {
    title: "Comprehensive HR Training",
    description:
      "Enhance your employees' skills and productivity with our tailored training programs. We offer a range of courses designed to foster professional growth, improve performance, and boost overall organizational efficiency, ensuring your team stays ahead in a competitive market.",
    link: "https://meta.com",
    image: Image1,
  },
  {
    title: "Customer-Centric Approach",
    description:
      "At RightPath, we prioritize exceptional service with customized solutions to meet your unique needs. Our client-focused approach ensures we deliver value-driven results, fostering long-term relationships and consistently exceeding your expectations.",
    link: "https://amazon.com",
    image: Image1,
  },
  {
    title: "Responsive Support",
    description:
      "Our dedicated support team is always ready to assist you, ensuring seamless communication and prompt resolution of any issues. We are committed to building long-term partnerships by providing consistent, high-quality support that helps your business thrive.",
    link: "https://microsoft.com",
    image: Image1,
  },
];
