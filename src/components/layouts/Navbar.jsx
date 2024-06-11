"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { gsap } from "gsap";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const activeSegment = useSelectedLayoutSegment();
  const links = [
    { label: "Home", path: "/", targetSegment: null },
    { label: "Work", path: "/work", targetSegment: "work" },
    { label: "About", path: "/about", targetSegment: "about" },
    { label: "Services", path: "/services", targetSegment: "services" },
    { label: "Ideas", path: "/ideas", targetSegment: "ideas" },
    { label: "Careers", path: "/careers", targetSegment: "careers" },
    { label: "Contact", path: "/contact", targetSegment: "contact" },
  ];

  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > scrollTop) {
        gsap.to(navbar, { y: -100, duration: 0.5 });
      } else {
        gsap.to(navbar, { y: 0, duration: 0.5 });
      }
      setScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);

  return (
    <nav
      id="navbar"
      className={`${
        scrollTop < 100 ? "bg-orange-suit-500" : "bg-transparent"
      } text-white px-[10%] flex flex-col w-full fixed top-0 z-[9999] transition-colors duration-500`}
    >
      <div className="flex flex-row justify-between items-center py-4">
        <Link href="/">
          <Image
            height={1000}
            width={1000}
            src="/assets/images/layouts/logo.png"
            className="h-8 md:h-12 xl:h-14 w-auto cursor-pointer"
            alt="Logo"
          />
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex flex-row gap-6 items-center">
          {links.map((link) => (
            <Link
              className={`
              ${
                activeSegment === link.targetSegment
                  ? "border-b-2 border-white"
                  : "hover:scale-110 transition-transform"
              }
            `}
              key={link.label}
              href={link.path}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Toggle Mobile */}
        <div className="lg:hidden">
          <Hamburger
            easing="ease-in"
            toggled={isMobileMenuOpen}
            toggle={setIsMobileMenuOpen}
            color={`#ffffff`}
            size={20}
            hideOutline={false}
          />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`flex flex-col lg:flex-row gap-6 py-4 ${
          scrollTop < 100 ? "bg-orange-suit-500" : "bg-transparent"
        } ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        {links.map((link) => (
          <Link
            className={`
          ${
            activeSegment === link.targetSegment
              ? "border-b-2 border-white"
              : "hover:scale-110 transition-transform"
          }
        `}
            key={link.label}
            href={link.path}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
