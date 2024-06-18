"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import "@/globals.css";
import { NavbarDemo } from "@/components/NavbarDemo";
import { MeteorsDemo } from "@/components/MeteorsDemo";
import { FloatingNavDemo } from "@/components/FloatingNavDemo";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <div className="m-0 p-0 h-full w-full">
            <FloatingNavDemo />
            <NavbarDemo />
            <main className="flex-col">{children}</main>
            <MeteorsDemo />
          </div>
        </Provider>
      </body>
    </html>
  );
}
