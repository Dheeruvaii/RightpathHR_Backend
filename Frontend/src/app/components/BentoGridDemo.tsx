import { cn } from "@/utils/cn";
import Image, { StaticImageData } from 'next/image';
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import UAE from "../../../public/flags/Flag_of_the_United_Arab_Emirates_(1-1).svg"
import CANADA from "../../../public/flags/Flag_of_Canada_(Pantone).svg"
import PORTUGAL from "../../../public/flags/Flag_of_Portugal.svg"
import { div } from "three/examples/jsm/nodes/Nodes.js";

export function BentoGridDemo() {
  return (
  <>
  <div className=" w-auto flex-col space-y-8 px-8 justify-center items-center py-12">

  <div className="flex  text-3xl md:text-5xl font-bold dark:text-white justify-center text-neutral-600">Countries We Deals On</div>
  
  <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          
          icon={item.icon}
          imageSrc={item.imagesrc}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  </div>
  </>
    
  );
}
const Skeleton = (imgsrc: any | string | StaticImageData) => (

     <Image
      src={imgsrc} // replace with the path to your image
      alt="Flag of Countries"

      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"
    />

);
const items = [
  {
    title: "Discover Dubai",
    description: " Your Gateway to Luxury, Adventure, and Culture awaits with RightPath’s Visitor Visa Services.",
    imagesrc:  UAE ,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Embark on Your Canadian Career ",
    description: "From Application to Approval, Secure Your Work Permit with RightPath’s Expert Guidance.",
    imagesrc:  CANADA ,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Begin Your Adventure in Portugal",
    description: "Obtain Your Work Permit with RightPath’s Comprehensive Visa Services.",
    imagesrc:  PORTUGAL ,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
 
];
