"use client";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export const DownloadCV = () => {
  return (
    <motion.a
      href="/files/Resume_Daniel_Caamal.pdf"
      download
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-3 btn-primary text-lg px-8 py-4"
    >
      <FaDownload size={20} />
      <span>Download CV</span>
    </motion.a>
  );
};