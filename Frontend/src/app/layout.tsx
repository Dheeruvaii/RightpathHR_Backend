import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "./components/NavbarDemo";
import { MeteorsDemo } from "./components/MeteorsDemo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="m-0 p-0 h-full w-full">
          <NavbarDemo />
          <main className="flex-col">{children}</main>
          <MeteorsDemo />
        </div>
      </body>
    </html>
  );
}
