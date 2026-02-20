import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary-700">EIRA</span>
            </Link>
            <p className="text-gray-600 text-sm max-w-md">
              Ancient Wisdom. Modern Science. Personalised Wellness. Customised
              consultations, dosha-aligned therapies, and lifestyle guidance for
              modern preventive healthcare.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/packages"
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
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
                  className="text-primary-600 hover:text-primary-700 font-medium"
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
