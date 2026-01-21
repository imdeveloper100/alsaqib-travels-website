"use client"

import Link from "next/link"

const navLinks = [
  { label: "Reviews", href: "#reviews" },
  { label: "Destination", href: "#destination" },
  { label: "Feedback", href: "#feedback" },
  { label: "Blog", href: "#blog" },
]

export default function Navbar() {
  return (
    <header className="w-full py-5 px-6 md:px-12 lg:px-20 mx-auto">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-xl font-bold text-indigo-900">Travel</span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <Link
          href="#contact"
          className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition-colors"
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}