import Link from "next/link";
import { Award, Stethoscope, Heart, Leaf } from "lucide-react";

export default function Advisory() {
  const advisors = [
    {
      name: "Dr. Ananya Sharma",
      credentials: "BAMS, MD (Ayurveda)",
      specialization: "Preventive Care & Lifestyle Medicine",
      icon: Heart,
    },
    {
      name: "Dr. Rajesh Menon",
      credentials: "BAMS, PhD",
      specialization: "Panchkarma & Detox Therapies",
      icon: Leaf,
    },
    {
      name: "Dr. Priya Nair",
      credentials: "BAMS, MS",
      specialization: "Women's Health & Hormonal Balance",
      icon: Stethoscope,
    },
  ];

  return (
    <div className="pt-16">

      <section className="bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-800/60 rounded-full mb-6">
              <Award className="w-8 h-8 text-accent-300" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Medical & Wellness Advisory
            </h1>
            <p className="text-xl md:text-2xl text-primary-100/90 max-w-3xl mx-auto leading-relaxed">
              Guided by experienced practitioners
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex flex-col items-center text-center">
                
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-700 mb-6" aria-hidden="true">
                    <advisor.icon className="w-8 h-8" />
                  </div>

           
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {advisor.name}
                  </h3>

            
                  <p className="text-sm font-semibold text-primary-700 mb-4">
                    {advisor.credentials}
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    {advisor.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 md:p-12 rounded-2xl border border-primary-100 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expert Guidance, Personalised Care
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our advisory board brings together decades of experience in Ayurvedic
              medicine, ensuring that every protocol is grounded in classical wisdom
              and modern understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/packages"
                className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md transition-colors hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                View Packages
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] bg-white text-primary-600 px-8 py-4 rounded-xl border-2 border-primary-600 font-semibold text-lg transition-colors hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
