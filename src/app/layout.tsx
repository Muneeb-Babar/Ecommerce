import "./globals.css";
import type { Metadata } from "next";
import { poppinsRegularFont } from "fonts";
import Providers from "@/shared/Providers";
import { IChildren } from "types";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang="en">
      <body className={`${poppinsRegularFont.className}`}>
        {/* Chakra UI Providers and Recoil */}
        <div className="flex flex-col min-h-screen">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
