import Link from "next/link";
import { ArrowRight, Sparkles, Users, Heart, Building, Leaf } from "lucide-react";

export default function Packages() {
  const packages = [
    {
      icon: Sparkles,
      title: "Foundation Wellness",
      description:
        "Ideal for first-time visitors and preventive beginners.",
      color: "from-primary-50 to-primary-100",
      borderColor: "border-primary-200",
    },
    {
      icon: Heart,
      title: "Personalised Balance",
      description: "For deeper alignment and targeted correction.",
      color: "from-accent-50 to-accent-100",
      borderColor: "border-accent-200",
    },
    {
      icon: Leaf,
      title: "Preventive Care Program",
      description: "For long-term wellness and lifestyle transformation.",
      color: "from-primary-50 to-accent-50",
      borderColor: "border-primary-200",
    },
    {
      icon: Sparkles,
      title: "Panchkarma & Therapeutic",
      description:
        "Classical detox and rejuvenation under supervision.",
      color: "from-primary-100 to-primary-50",
      borderColor: "border-primary-200",
    },
    {
      icon: Building,
      title: "Corporate Wellness",
      description: "Preventive wellness programs for organisations.",
      color: "from-accent-50 to-primary-50",
      borderColor: "border-accent-200",
    },
  ];

  return (
    <div className="pt-16">
      
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Wellness Packages
            </h1>
            <p className="text-xl text-gray-600">
              Each package follows a structured preventive journey—focused on
              long-term balance.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${pkg.color} border-2 ${pkg.borderColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-md">
                  <pkg.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {pkg.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                <Link
                  href="/packages"
                  className="inline-flex items-center text-primary-700 hover:text-primary-800 font-semibold group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto border border-gray-200">
              <p className="text-gray-700 text-lg">
                All packages focus on preventive healthcare and wellness support.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-10 text-primary-100">
            Book a consultation and discover which package is right for you.
          </p>
          <Link
            href="/packages"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-medium text-lg shadow-lg"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
