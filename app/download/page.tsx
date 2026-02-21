import Link from "next/link";
import { Smartphone, Download as DownloadIcon, ArrowRight } from "lucide-react";

export default function Download() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Take Control of Your Wellness
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-primary-100">
              Download the EIRA app and begin your journey to balanced,
              preventive health.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/download"
              className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DownloadIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Download on the App Store
                </h3>
                <p className="text-gray-600 mb-4">
                  Available for iOS devices
                </p>
                <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                  Get the app
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link
              href="/download"
              className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DownloadIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Get it on Google Play
                </h3>
                <p className="text-gray-600 mb-4">
                  Available for Android devices
                </p>
                <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                  Get the app
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One App
            </h2>
            <p className="text-xl text-gray-600">
              Track your wellness journey with ease
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Track Progress",
                description:
                  "Monitor your wellness journey with detailed dashboards and insights.",
              },
              {
                title: "Personalized Plans",
                description:
                  "Access your custom protocols and recommendations anytime, anywhere.",
              },
              {
                title: "Expert Support",
                description:
                  "Connect with practitioners and get guidance when you need it.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-10 text-primary-100">
            Download the app today and take the first step towards balanced
            wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-medium text-lg shadow-lg"
            >
              Download on the App Store
            </Link>
            <Link
              href="/download"
              className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-medium text-lg shadow-lg"
            >
              Get it on Google Play
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
