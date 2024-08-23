import Image from "next/image";
import Link from "next/link";
import HidableNavbar from './_components/navbar';

export default function Home() {
  return (
    <main>
      <HidableNavbar />
      <div className="flex h-screen bg-[url('/images/silhouette-stars.png')] bg-cover bg-center ">
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center w-full space-y-4">
          <div>
            <p className="text-3xl font-black text-sky-400">
              Hello, world!
            </p>
          </div>
          <div className="p-4 rounded-lg">
            <p className="text-8xl font-black text-center">
            I&apos;m Daniel Caamal Herrera
            </p>
          </div>
          <div className="p-4 rounded-lg">
            <p className="text-3xl font-medium  text-center">
            | Full Stack Developer |
            </p>
          </div>
          <div>
            <p className="text-3xl font-black">
              Welcome to my personal website!
            </p>
          </div>

          <div className="flex flex-row py-20">
            <Link href="/about">
              <div className="border-sky-500 border-2 p-4 rounded-lg">
                <p className="text-xl">
                  Come and check out my story!
                </p>
              </div>
            </Link>
          </div>

          <div className="absolute bottom-20 flex flex-row justify-center space-x-4 bg-opacity-20">
            <a
              className="hover:opacity-50 p-2"
              href="https://www.linkedin.com/in/daniel-caamal-herrera/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-full"
                src="/images/linkedin-icon.png"
                alt="LinkedIn"
                width={50}
                height={50}
              />
            </a>
            <a
              className="hover:opacity-50 p-2"
              href="https://github.com/danielcaamal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-full bg-white"
                src="/images/github-icon.png"
                alt="Github"
                width={50}
                height={50}
              />
            </a>
          </div>

        </div>
      </div>
      
    </main>
  );
}
