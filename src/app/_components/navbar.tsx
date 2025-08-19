/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
} from "@nextui-org/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode } from "react-icons/fa";

export const HidableNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isStaticPath, setIsStaticPath] = useState(false);
  const path = usePathname();

  useEffect(() => {
    onChangePath(path);
  }, []);

  useEffect(() => {
    onChangePath(path);
  }, [path]);

  const onChangePath = (path: string) => {
    const staticPaths = ["about", "resume", "projects", "contact"];
    if (staticPaths.includes(path.replace(/\//g, ""))) {
      setIsStaticPath(true);
      setShowNavbar(true);
    } else {
      setIsStaticPath(false);
      const handleMouseMove = (e: MouseEvent) => {
        if (e.clientY < 100) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  };

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <AnimatePresence>
      {(isStaticPath || showNavbar) && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center justify-between h-16">
                {/* Logo/Brand */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <FaCode className="text-white text-sm" />
                    </div>
                    <span className="text-white font-bold text-lg tracking-tight">
                      Daniel Caamal
                    </span>
                  </Link>
                </motion.div>

                {/* Navigation Items */}
                <div className="hidden md:flex items-center gap-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          path === item.href
                            ? "text-sky-400 bg-sky-400/10"
                            : "text-gray-300 hover:text-sky-400 hover:bg-slate-800/50"
                        }`}
                      >
                        {item.label}
                        {path === item.href && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-sky-400/10 rounded-lg border border-sky-400/20"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Menu Button */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="md:hidden"
                >
                  <button className="text-gray-300 hover:text-sky-400 p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
