import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";

export default function About() {
  return (
    <div className="flex-col space-y-8">
      <AuroraBackgroundDemo />
      <CardHoverEffectDemo />
      <InfiniteMovingCardsDemo />
    </div>
  );
}
