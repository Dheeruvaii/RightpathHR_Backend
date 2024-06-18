import { BackgroundBoxesDemo } from "@/components/BackgroundBoxesDemo";
import { BentoGridDemo } from "@/components/BentoGridDemo";
import { FollowingPointerDemo } from "@/components/FollowingPointerDemo";
import { GlobeDemo } from "@/components/GlobeDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";

export default function Service() {
  return (
    <div className="flex-col space-y-8">
      <BackgroundBoxesDemo />
      <BentoGridDemo />
      <div className="max-w-screen flex-col justify-center text-center md:mx-28">
        <div className="flex  text-3xl md:text-5xl font-bold dark:text-white justify-center text-neutral-600">Services We Provide</div>
        
          <StickyScrollRevealDemo />
        
      </div>
    </div>
  );
}
