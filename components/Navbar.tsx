"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/animals", label: "Animals" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1B2A4A] shadow-lg" : "bg-[#1B2A4A]/90 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/images/logo-source.jpg"
                alt="Runways and Rescues logo"
                fill
                className="object-contain rounded"
                sizes="48px"
              />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm md:text-base tracking-wide">
                Runways &amp; Rescues
              </div>
              <div className="text-[#F5F0E8]/70 text-xs hidden sm:block">
                501(c)3 Nonprofit
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#F5F0E8]/90 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://ko-fi.com/runwaysandrescues"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8B1A1A] hover:bg-[#a82020] text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors duration-200 ml-2"
            >
              Donate
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#F5F0E8]/90 hover:text-white px-2 py-3 text-sm font-medium transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://ko-fi.com/runwaysandrescues"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-[#8B1A1A] hover:bg-[#a82020] text-white text-sm font-semibold px-5 py-3 rounded-md transition-colors duration-200 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Donate Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
