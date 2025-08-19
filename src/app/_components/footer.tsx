"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="glass-effect border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-300"
          >
            <span>© 2024</span>
            <Link href="/contact">
              <span className="text-sky-400 hover:text-sky-300 transition-colors duration-200 font-semibold">
                Daniel Caamal
              </span>
            </Link>
            <span>All rights reserved.</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/daniel-caamal-herrera/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/danielcaamal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
            >
              <FaGithub size={24} />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-6 pt-6 border-t border-white/10"
        >
          <p className="text-gray-400 text-sm">
            Made with <FaHeart className="inline text-red-400 mx-1" /> using Next.js & TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
