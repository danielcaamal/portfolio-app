"use client";
import {  Navbar,    NavbarContent,   NavbarItem, NavbarMenu,  } from "@nextui-org/navbar";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HidableNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-30 text-white p-4 transition-transform duration-300 ${
        showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <NavbarContent 
        className="flex flex-row w-full justify-center gap-x-20 text-3xl"
        justify="center">
        <NavbarItem>
          <Link href="/about">
            About
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="/resume">
            Resume
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="/projects">
            Projects
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
