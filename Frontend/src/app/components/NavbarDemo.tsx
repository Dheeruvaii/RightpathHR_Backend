"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Logo from "@/Web_img.svg"

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "md:px-8 flex justify-around md:justify-between fixed top-10 inset-x-0 max-w-full mx-auto z-50",
        className
      )}
    >
      <div className="relative w-full h-auto ">
          <Image
            src={Logo}
            alt="Logo"
            
            objectFit="cover"
            className="rounded-xl"
            height={60}
        
          />
        </div>
     
      <div className="flex w-80 space-y-4 md:space-y-0 space-x-0 md:space-x-4 md:block py-3">
        <button className="w-28 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-28 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
