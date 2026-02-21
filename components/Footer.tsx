import Link from "next/link";
import Image from "next/image";
import eiraLogo from "@/app/assets/eira.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src={eiraLogo}
                alt="EIRA"
                width={120}
                height={40}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-600 text-sm max-w-md">
              Ancient Wisdom. Modern Science. Personalised Wellness. Customised
              consultations, dosha-aligned therapies, and lifestyle guidance for
              modern preventive healthcare.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/packages"
                  className="inline-block min-h-[44px] py-2 text-gray-600 hover:text-primary-600 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 rounded"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="inline-block min-h-[44px] py-2 text-gray-600 hover:text-primary-600 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 rounded"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="inline-block min-h-[44px] py-2 text-gray-600 hover:text-primary-600 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 rounded"
                >
                  Download App
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Book a Consultation</li>
              <li>
                <Link
                  href="/packages"
                  className="inline-block min-h-[44px] py-2 text-primary-600 hover:text-primary-700 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 rounded"
                >
                  View Packages →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} EIRA Ayurveda. All rights reserved.
            Focused on preventive wellness.
          </p>
        </div>
      </div>
    </footer>
  );
}
