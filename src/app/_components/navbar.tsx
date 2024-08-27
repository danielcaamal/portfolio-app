"use client";
import {  Navbar,    NavbarContent,   NavbarItem, NavbarMenu,  } from "@nextui-org/navbar";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';

export default function HidableNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Navbar
  className={`fixed top-0 left-0 right-0 text-white p-4 transition-transform duration-300 ${
    showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
  }`}
    >
      <NavbarContent
        className="w-full flex flex-row justify-between gap-y-4 md:gap-x-16 lg:gap-x-20 text-xl md:text-2xl lg:text-3xl"
        justify="center"
      >
        <NavbarItem className={path === '/about' ? 'text-sky-500' : ''}>
          <Link href="/about">About</Link>
        </NavbarItem>

        <NavbarItem className={path === '/resume' ? 'text-sky-500' : ''}>
          <Link href="/resume">Resume</Link>
        </NavbarItem>

        <NavbarItem className={path === '/projects' ? 'text-sky-500' : ''}>
          <Link href="/projects">Projects</Link>
        </NavbarItem>

        <NavbarItem className={path === '/contact' ? 'text-sky-500' : ''}>
          <Link href="/contact">Contact</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
