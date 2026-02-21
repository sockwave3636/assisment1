"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import eiraLogo from "@/app/assets/eira.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
       
              <Image
                src={eiraLogo}
                alt="EIRA"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain"
              />
          
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/packages"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Packages
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link
              href="/ai-stack"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              AI Stack
            </Link>
            <Link
              href="/founders-note"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Founder's Note
            </Link>
            <Link
              href="/advisory"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Advisory
            </Link>
            <Link
              href="/download"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Download
            </Link>
            <Link
              href="/packages"
              className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors font-medium"
            >
              Book Consultation
            </Link>
          </div>

          
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

       
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/packages"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="/how-it-works"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/ai-stack"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              AI Stack
            </Link>
            <Link
              href="/founders-note"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Founder's Note
            </Link>
            <Link
              href="/advisory"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Advisory
            </Link>
            <Link
              href="/download"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Download
            </Link>
            <Link
              href="/packages"
              className="block bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors text-center font-medium mt-4"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
