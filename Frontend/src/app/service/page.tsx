import { BackgroundBoxesDemo } from "@/components/BackgroundBoxesDemo";
import { BentoGridDemo } from "@/components/BentoGridDemo";
import { FollowingPointerDemo } from "@/components/FollowingPointerDemo";
import { GlobeDemo } from "@/components/GlobeDemo";

export default function Service() {
  return (
    <div className="flex-col space-y-8">
      <BackgroundBoxesDemo />
      <BentoGridDemo />
      <div className="max-w-screen flex-col justify-center text-center mx-28">
        <div className="flex  text-3xl md:text-5xl font-bold dark:text-white justify-center text-neutral-600">Services We Provide</div>
        <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 
                grid-rows-12 sm:grid-rows-12 md:grid-rows-6 lg:grid-rows-4 xl:grid-rows-3 gap-4">
      <div className="bg-gray-200 p-4 rounded"><FollowingPointerDemo /></div>
      <div className="bg-gray-200 p-4 rounded">Item 2</div>
      <div className="bg-gray-200 p-4 rounded">Item 3</div>
      <div className="bg-gray-200 p-4 rounded">Item 4</div>
      <div className="bg-gray-200 p-4 rounded">Item 5</div>
      <div className="bg-gray-200 p-4 rounded">Item 6</div>
      <div className="bg-gray-200 p-4 rounded">Item 7</div>
      <div className="bg-gray-200 p-4 rounded">Item 8</div>
      <div className="bg-gray-200 p-4 rounded">Item 9</div>
      <div className="bg-gray-200 p-4 rounded">Item 10</div>
      <div className="bg-gray-200 p-4 rounded">Item 11</div>
      <div className="bg-gray-200 p-4 rounded">Item 12</div>
    </div>
  </div>
      </div>
    </div>
  );
}
