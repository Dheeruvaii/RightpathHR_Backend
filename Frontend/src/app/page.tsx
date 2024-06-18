"use client";

import Image from "next/image";
import { BackgroundBoxesDemo } from "./components/BackgroundBoxesDemo";
import { TabsDemo } from "./components/TabsDemo";
import { ImagesSliderDemo } from "./components/ImagesSliderDemo";
import { FloatingNavDemo } from "./components/FloatingNavDemo";
import { SignupFormDemo } from "./components/SignupFormDemo";
import { useAppSelector } from "./redux/store";
import { LoginFormDemo } from "./components/LoginFormDemo";

export default function Home() {
  const isSignupOpen = useAppSelector((state) => state.auth.isSignupOpen);
  const isLoginOpen = useAppSelector((state) => state.auth.isLoginOpen);

  return (
    <>
      {isSignupOpen && <SignupFormDemo />}
      {isLoginOpen && <LoginFormDemo />}
      <ImagesSliderDemo />
      <TabsDemo />
    </>
  );
}
