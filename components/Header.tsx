"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#ice-cream", label: "Ice Cream" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-[72px]">
          {/* Logos - three businesses across the top */}
          <Link
            href="#home"
            className="flex items-center gap-2 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e86a33] rounded-lg"
            aria-label={`${siteConfig.businessName} - Go to homepage`}
          >
            {[
              { src: siteConfig.images.logos.golf, alt: `${siteConfig.businessName} logo` },
              { src: siteConfig.images.logos.swirled, alt: `${siteConfig.secondaryName} logo` },
              { src: siteConfig.images.logos.arcade, alt: `${siteConfig.tertiaryName} logo` },
            ].map((logo) => (
              <div
                key={logo.src}
                className="relative w-11 h-11 sm:w-14 sm:h-14"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ))}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 lg:px-4 py-2 text-[#2c2c2c] font-semibold rounded-full hover:bg-[#e8f5e9] hover:text-[#1a5f2a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e86a33]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`hamburger md:hidden ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleNavClick}
                  className="block px-4 py-3 text-[#2c2c2c] font-semibold rounded-lg hover:bg-[#e8f5e9] hover:text-[#1a5f2a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e86a33]"
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
