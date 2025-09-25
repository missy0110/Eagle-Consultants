"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          Eagle Consultants
        </Link>

        {/* Desktop Menu + CTA */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Nav Links */}
          <nav className="flex space-x-8 text-blue-600 font-medium">
            <Link href="/" className="hover:text-blue-800">Home</Link>
            <Link href="/about" className="hover:text-blue-800">About</Link>
            <Link href="/services" className="hover:text-blue-800">Services</Link>
            <Link href="/contact" className="hover:text-blue-800">Contact</Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-600 hover:text-blue-800 focus:outline-none"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 text-blue-600">
          <Link href="/" className="block hover:text-blue-800">Home</Link>
          <Link href="/about" className="block hover:text-blue-800">About</Link>
          <Link href="/services" className="block hover:text-blue-800">Services</Link>
          <Link href="/contact" className="block hover:text-blue-800">Contact</Link>
          <Link
            href="/contact"
            className="block bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
