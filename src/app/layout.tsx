import "./globals.css";
import type { Metadata } from "next";
import { HidableNavbar } from "./_components";


export const metadata: Metadata = {
  title: "Daniel Caamal Herrera",
  description: "Daniel Caamal Herrera's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-full flex flex-col font-serif">  
        <div className="z-10">
          <HidableNavbar />
        </div>
        <div className="z-0 w-full h-full flex flex-col items-center justify-center py-20 px-12 md:px-24">
          {children}
        </div>
      </body>
    </html>
  );
}
