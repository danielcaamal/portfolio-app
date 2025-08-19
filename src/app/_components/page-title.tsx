"use client";
import { motion } from "framer-motion";

interface PageTitleProps {
  title: string;
  subtitle: string;
}

export const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 max-w-4xl mx-auto"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg sm:text-xl font-medium text-sky-400 mb-4 tracking-wide uppercase"
      >
        {title}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
      >
        {subtitle}
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full"
      />
    </motion.div>
  );
};
