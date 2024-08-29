import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-6 md:p-8">
      <div className="container mx-auto px-2 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="flex flex-row">
            <p className="mb-4 md:mb-0">© 2024</p>
            <Link href="/contact">
              <p className="text-blue-300 hover:text-blue-400 px-2">
                Daniel Caamal.
              </p>
            </Link>
            <p className="mb-4 md:mb-0">All rights reserved.</p>
          </span>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/daniel-caamal-herrera/"
              aria-label="LinkedIn"
              className="hover:text-blue-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
