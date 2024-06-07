import Image from "next/image";
import { BackgroundBoxesDemo } from "./components/BackgroundBoxesDemo";
import { TabsDemo } from "./components/TabsDemo";

export default function Home() {
  return (
    <>
      <BackgroundBoxesDemo />
      <TabsDemo />
    </>
  );
}
