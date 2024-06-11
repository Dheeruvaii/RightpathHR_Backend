import Image from "next/image";
import { BackgroundBoxesDemo } from "./components/BackgroundBoxesDemo";
import { TabsDemo } from "./components/TabsDemo";
import { ImagesSliderDemo } from "./components/ImagesSliderDemo";
import { FloatingNavDemo } from "./components/FloatingNavDemo";

export default function Home() {
  return (
    <>
      
      <ImagesSliderDemo />
      <TabsDemo />
    </>
  );
}
