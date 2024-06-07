import React from "react";
import Image from "next/image";
import { Meteors } from "@/components/ui/meteors";

import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { PlaceholdersAndVanishInputDemo } from "./PlaceholdersAndVanishInputDemo";

export function MeteorsDemo() {
  return (
    <div className=" w-full relative max-w-full h-80">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-12 h-full overflow-hidden  flex flex-col justify-end items-start space-y-3">
        <div className="flex grid grid-cols-12 h-72 w-full text-gray-300 space-x-8">
          <div className="col-span-6 flex-col space-y-8">
            <div className="font-bold text-2xl">Right Path HR Consultancy</div>
            <div className="">
              <PlaceholdersAndVanishInputDemo />
            </div>
            <div className="flex space-x-2 justify-end text-2xl cursor-pointer">
              <FaSquareFacebook />
              <FaInstagramSquare />
              <FaSquareXTwitter />
            </div>
          </div>
          <div className="col-span-3 space-y-4">
            <div className="font-bold">Phone</div>
            <div className="text-sm">
              <div className="flex w-full h-5 space-x-3">
                <div className="flex h-5 w-5 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 18">
                    <rect width="36" height="18" fill="#FFF" />
                    <rect y="0" width="12" height="18" fill="#00732F" />
                    <rect x="12" width="24" height="6" fill="#FF0000" />
                    <rect x="12" y="6" width="24" height="6" fill="#FFFFFF" />
                    <rect x="12" y="12" width="24" height="6" fill="#000000" />
                  </svg>
                </div>
                <p className="flex items-center">+971 56 798 1844</p>
              </div>
              <div className="flex w-full h-5 space-x-3">
                <div className="flex h-5 w-5 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 18">
                    <rect width="36" height="18" fill="#FFF" />
                    <rect y="0" width="12" height="18" fill="#00732F" />
                    <rect x="12" width="24" height="6" fill="#FF0000" />
                    <rect x="12" y="6" width="24" height="6" fill="#FFFFFF" />
                    <rect x="12" y="12" width="24" height="6" fill="#000000" />
                  </svg>
                </div>
                <p className="flex items-center">+971 52 386 5135</p>
              </div>
              <div className="flex w-full h-5 space-x-3">
                <div className="flex h-5 w-5 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 18">
                    <rect width="36" height="18" fill="#FFF" />
                    <rect y="0" width="12" height="18" fill="#00732F" />
                    <rect x="12" width="24" height="6" fill="#FF0000" />
                    <rect x="12" y="6" width="24" height="6" fill="#FFFFFF" />
                    <rect x="12" y="12" width="24" height="6" fill="#000000" />
                  </svg>
                </div>
                <p className="flex items-center">+971 50 342 4949</p>
              </div>
              <div className="flex w-full h-5 space-x-3">
                <div className="flex h-5 w-5 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 18">
                    <rect width="36" height="18" fill="#FFF" />
                    <rect y="0" width="12" height="18" fill="#00732F" />
                    <rect x="12" width="24" height="6" fill="#FF0000" />
                    <rect x="12" y="6" width="24" height="6" fill="#FFFFFF" />
                    <rect x="12" y="12" width="24" height="6" fill="#000000" />
                  </svg>
                </div>
                <p className="flex items-center">+971 56 992 6244</p>
              </div>
              <div className="flex w-full h-5 space-x-3">
                <div className="flex h-5 w-5 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 18">
                    <rect width="36" height="18" fill="#FFF" />
                    <rect y="0" width="12" height="18" fill="#00732F" />
                    <rect x="12" width="24" height="6" fill="#FF0000" />
                    <rect x="12" y="6" width="24" height="6" fill="#FFFFFF" />
                    <rect x="12" y="12" width="24" height="6" fill="#000000" />
                  </svg>
                </div>
                <p className="flex items-center">+971 56 435 4949</p>
              </div>
            </div>
          </div>
          <div className="col-span-3 space-y-4">
            <div className="font-bold">Contact</div>
            <div className="text-sm">
              <p>rightpathhrconsultancy@gmail.com</p>
              <p>
                10 Floor 1006 Room Number Sharaf DG Metro Station Exit 4 Musalla
                Tower (Central Mall) Bur dubai, Dubai - UAE
              </p>
            </div>
          </div>
        </div>

        {/* Meaty part - Meteor effect */}
        <Meteors number={30} />
      </div>
      <div className="border-[2px] border-gray-800 border-solid w-full"></div>
    </div>
  );
}
