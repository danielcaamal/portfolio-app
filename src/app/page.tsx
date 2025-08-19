/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaArrowRight, FaCode, FaDatabase, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const skills = [
    { icon: FaCode, label: "Full Stack Development", color: "text-sky-500" },
    { icon: FaDatabase, label: "Data Engineering", color: "text-orange-500" },
    { icon: FaRocket, label: "Modern Technologies", color: "text-purple-500" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Professional Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <p className="text-sm font-medium text-sky-400 tracking-widest uppercase">
                Professional Portfolio
              </p>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-white">Daniel</span>
              <br />
              <span className="text-sky-400">Caamal</span>
            </motion.h1>

            {/* Professional Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-8 font-light"
            >
              Full Stack Developer & Data Engineer
            </motion.p>

            {/* Professional Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-base text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Passionate about creating scalable solutions and turning complex problems into elegant, user-friendly applications. 
              Specialized in modern web technologies and data engineering.
            </motion.p>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <skill.icon className={`${skill.color} text-xl`} />
                  <span className="text-sm font-medium">{skill.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <span>View Portfolio</span>
                <FaArrowRight className="text-sm" />
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-gray-600 text-gray-300 hover:border-sky-500 hover:text-sky-400 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <span>Contact Me</span>
                <FaArrowRight className="text-sm" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/daniel-caamal-herrera/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-500 hover:text-sky-400 transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/danielcaamal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-500 hover:text-sky-400 transition-colors duration-200"
            >
              <FaGithub size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
