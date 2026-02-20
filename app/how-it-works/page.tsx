import Link from "next/link";
import { ArrowRight, Search, FileText, PlayCircle, BarChart3 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Decode You",
      description:
        "Your journey begins with an intelligent assessment that reveals your Prakriti, identifies current imbalances, and maps your lifestyle patterns—providing a 360° view of your inner ecosystem.",
      includes: [
        "Doctor-led consultation",
        "Dosha & lifestyle analysis",
        "Health history and daily rhythm mapping",
      ],
    },
    {
      number: "02",
      icon: FileText,
      title: "Build Your Personal Protocol",
      description:
        "Using diagnostic insights, we craft a care plan uniquely designed for you that covers therapies, nutrition, habits, and preventive practices aligned with your body's natural design.",
      includes: [
        "Custom therapy & wellness plan",
        "Lifestyle and nutrition blueprint",
        "Simple, actionable guidance",
      ],
    },
    {
      number: "03",
      icon: PlayCircle,
      title: "Start Your Guided Program",
      description:
        "Your personalised protocol comes to life through structured sessions, supportive therapies, and seamless routines—delivered in-clinic or through hybrid support approach.",
      includes: [
        "Supervised therapies & check-ins",
        "Structured schedules",
        "Real-time practitioner support",
      ],
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Track, Adapt, Transform",
      description:
        "As your body evolves, so does your plan. Continuous monitoring, insights, and preventive tracking ensure long-term balance and measurable outcomes.",
      includes: [
        "Regular follow-ups",
        "Progress dashboards",
        "Adaptive recommendations",
      ],
    },
  ];

  return (
    <div className="pt-16">

      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Healing Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              A personalized, structured path guiding you from assessment to
              transformation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 text-7xl font-bold text-primary-100 z-0">
                      {step.number}
                    </div>
                    <div className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">
                          {step.title}
                        </h2>
                      </div>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="border-t border-gray-200 pt-6">
                        <h3 className="font-semibold text-gray-900 mb-3">
                          Includes
                        </h3>
                        <ul className="space-y-2">
                          {step.includes.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-gray-600"
                            >
                              <span className="text-primary-600 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-full max-w-md h-64 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl flex items-center justify-center border border-gray-100">
                    <step.icon className="w-24 h-24 text-primary-300 opacity-50" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all transform hover:scale-105 font-medium text-lg shadow-lg shadow-primary-200"
            >
              Start Your Assessment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
