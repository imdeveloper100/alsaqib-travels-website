// components/Navbar.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Compass, Menu, X, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Home", href: "" },
  { name: "Groups", href: "groups" },
  { name: "About Us", href: "about-us" },
  { name: "Contact Us", href: "contact-us" },
];

// WhatsApp contact details
const WHATSAPP_NUMBER = "+923085661668";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\s/g, "")}?text=Hello%20Al%20Saqib%20Travels!%20I%20would%20like%20to%20inquire%20about%20your%20services.`;

const openWhatsApp = () => {
  window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1.5 group"
              onClick={closeMenu}
            >
              <span className="text-xl font-bold text-primary-dark group-hover:text-accent-dark transition-colors">
                Travel
              </span>
              <Compass className="h-5 w-5 text-primary-dark group-hover:text-accent-dark transition-colors group-hover:rotate-45 duration-300" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive = pathname === `/${link.href}` || pathname.startsWith(`/${link.href}/`);
                  return (
                    <Link
                      key={link.name}
                      href={`/${link.href}`}
                      className={`text-sm font-medium transition-all duration-300 ${isActive
                        ? "text-accent-dark underline underline-offset-4 decoration-2"
                        : "text-foreground hover:text-accent-dark hover:underline hover:underline-offset-4 decoration-2 hover:scale-105"
                        }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Contact Button - Desktop */}
            <button
              onClick={openWhatsApp}
              onMouseEnter={() => setIsContactHovered(true)}
              onMouseLeave={() => setIsContactHovered(false)}
              className="hidden md:flex items-center gap-2 rounded-full bg-primary-dark px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-dark hover:scale-105 hover:shadow-lg cursor-pointer group/contact"
            >
              {isContactHovered ? (
                <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover/contact:scale-110" />
              ) : (
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover/contact:scale-110" />
              )}
              <span className="transition-all duration-300">Contact</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-primary-dark hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-slideDown">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = pathname === `/${link.href}` || pathname.startsWith(`/${link.href}/`);
                  return (
                    <Link
                      key={link.name}
                      href={`/${link.href}`}
                      onClick={closeMenu}
                      className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${isActive
                        ? "text-accent-dark bg-gray-50 pl-6"
                        : "text-foreground hover:text-accent-dark hover:bg-gray-50 hover:pl-6"
                        }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-2 border-t border-gray-100">
                  <button
                    onClick={() => {
                      closeMenu();
                      openWhatsApp();
                    }}
                    onMouseEnter={() => setIsContactHovered(true)}
                    onMouseLeave={() => setIsContactHovered(false)}
                    className="flex items-center justify-center gap-2 w-full rounded-full bg-primary-dark px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-accent-dark hover:scale-[1.02] cursor-pointer"
                  >
                    <MessageCircle className="h-5 w-5 transition-transform duration-300" />
                    Chat on WhatsApp
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    +92 308 5661668
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden animate-fadeIn"
          onClick={closeMenu}
        />
      )}
    </>
  );
}