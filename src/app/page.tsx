/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import HidableNavbar from './_components/navbar';

export default function Home() {
  return (
      <div className="h-screen overflow-auto bg-[url('/images/silhouette-stars.png')] bg-cover bg-center ">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center w-full space-y-4 px-4 sm:px-8 md:px-16">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-sky-400">
              Hello, world!
            </p>
          </div>
          <div className="p-4 rounded-lg">
            <p className="text-4xl sm:text-6xl md:text-8xl font-black text-center">
              I&apos;m Daniel Caamal Herrera
            </p>
          </div>
          <div className="p-4 rounded-lg">
            <p className="text-lg sm:text-2xl md:text-3xl font-medium text-center">
              | Full Stack Developer |
            </p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-center">
              Welcome to my personal website!
            </p>
          </div>

          <div className="flex flex-row py-10 sm:py-16 md:py-20">
            <Link href="/about">
              <div className="border-sky-500 border-2 p-2 sm:p-4 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-300">
                <p className="text-lg sm:text-xl">
                  Come and check out my story!
                </p>
              </div>
            </Link>
          </div>

          <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 flex flex-row justify-center space-x-4 bg-opacity-20">
            <a
              className="hover:opacity-50"
              href="https://www.linkedin.com/in/daniel-caamal-herrera/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-full"
                src="/images/linkedin-icon.png"
                alt="LinkedIn"
                width={40}
                height={40}
                priority
              />
            </a>
            <a
              className="hover:opacity-50"
              href="https://github.com/danielcaamal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-full bg-white"
                src="/images/github-icon.png"
                alt="Github"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
  );
}
