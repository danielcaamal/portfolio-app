import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Footer, HidableNavbar } from "./_components";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Daniel Caamal Herrera - Full Stack Developer & Data Engineer",
  description: "Personal portfolio of Daniel Caamal Herrera, a passionate Full Stack Developer and Data Engineer with expertise in modern web technologies and data solutions.",
  keywords: ["Full Stack Developer", "Data Engineer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Daniel Caamal Herrera" }],
  creator: "Daniel Caamal Herrera",
  openGraph: {
    title: "Daniel Caamal Herrera - Full Stack Developer & Data Engineer",
    description: "Personal portfolio showcasing projects and expertise in modern web development and data engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`w-full min-h-screen flex flex-col font-sans antialiased bg-gradient-dark ${inter.variable} ${jetbrainsMono.variable}`}>
        <div className="z-10">
          <HidableNavbar />
        </div>
        <main className="z-0 w-full flex-1 flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
