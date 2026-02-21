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
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold transition-colors hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Book Consultation
            </Link>
          </div>

          
          <button
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

       
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1" role="navigation" aria-label="Mobile menu">
            <Link
              href="/"
              className="block min-h-[44px] py-3 px-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/packages"
              className="block min-h-[44px] py-3 px-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="/how-it-works"
              className="block min-h-[44px] py-3 px-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/ai-stack"
              className="block min-h-[44px] py-3 px-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              onClick={() => setIsOpen(false)}
            >
              AI Stack
            </Link>
            <Link
              href="/founders-note"
              className="block min-h-[44px] py-3 px-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Founder's Note
            </Link>
            <Link
              href="/advisory"
              className="block min-h-[44px] py-3 px-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Advisory
            </Link>
            <Link
              href="/download"
              className="block min-h-[44px] py-3 px-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Download
            </Link>
            <Link
              href="/packages"
              className="block min-h-[44px] py-3 px-6 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors text-center font-semibold mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
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
