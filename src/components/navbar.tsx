"use client";

import { useState, useEffect } from "react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about", id: "01" },
  { name: "Experience", href: "#experience", id: "02" },
  { name: "Projects", href: "#projects", id: "03" },
  { name: "Blog", href: "#blog", id: "04" },
  { name: "Contact", href: "#contact", id: "05" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-card-border py-4" : "bg-transparent py-6"
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="#" className="font-mono text-xl font-bold text-primary tracking-tighter">
          SS<span className="text-white">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-mono text-sm hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <span className="text-primary text-[10px]">{link.id}.</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            download
            className="inline-flex h-9 items-center justify-center rounded-lg border border-card-border bg-transparent px-3 text-xs font-mono font-medium transition-colors hover:bg-card-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-card-border overflow-hidden"
          >
            <ul className="p-6 space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-mono text-lg block hover:text-primary transition-colors"
                  >
                    <span className="text-primary mr-2">{link.id}.</span>
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex w-full items-center justify-center rounded-lg border border-card-border bg-transparent px-3 py-2 text-sm font-mono font-medium transition-colors hover:bg-card-border"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
