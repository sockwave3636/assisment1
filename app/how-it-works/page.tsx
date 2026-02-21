import Link from "next/link";
import { ArrowRight, Search, FileText, PlayCircle, BarChart3 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { number: "01", icon: Search, title: "Decode You", description: "Your journey begins with an intelligent assessment that reveals your Prakriti, identifies current imbalances, and maps your lifestyle patterns—providing a 360° view of your inner ecosystem.", includes: ["Doctor-led consultation", "Dosha and lifestyle analysis", "Health history and daily rhythm mapping"] },
    { number: "02", icon: FileText, title: "Build Your Personal Protocol", description: "Using diagnostic insights, we craft a care plan uniquely designed for you that covers therapies, nutrition, habits, and preventive practices aligned with your body's natural design.", includes: ["Custom therapy and wellness plan", "Lifestyle and nutrition blueprint", "Simple, actionable guidance"] },
    { number: "03", icon: PlayCircle, title: "Start Your Guided Program", description: "Your personalised protocol comes to life through structured sessions, supportive therapies, and seamless routines—delivered in-clinic or through hybrid support approach.", includes: ["Supervised therapies and check-ins", "Structured schedules", "Real-time practitioner support"] },
    { number: "04", icon: BarChart3, title: "Track, Adapt, Transform", description: "As your body evolves, so does your plan. Continuous monitoring, insights, and preventive tracking ensure long-term balance and measurable outcomes.", includes: ["Regular follow-ups", "Progress dashboards", "Adaptive recommendations"] },
  ];

  return (
    <div className="pt-16">
      <section className="bg-primary-50 py-20" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 id="how-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ lineHeight: 1.25 }}>
              Healing Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed" style={{ lineHeight: 1.5 }}>
              A personalized, structured path guiding you from assessment to transformation
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}>
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-xl border border-gray-200">
                    <span className="text-5xl font-bold text-primary-100" aria-hidden="true">{step.number}</span>
                    <div className="flex items-center gap-4 mt-4 mb-6">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center" aria-hidden="true">
                        <step.icon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900" style={{ lineHeight: 1.25 }}>{step.title}</h2>
                    </div>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed" style={{ lineHeight: 1.5 }}>{step.description}</p>
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Includes</h3>
                      <ul className="space-y-2">
                        {step.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start text-gray-600 gap-2">
                            <span className="text-primary-600" aria-hidden="true">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex justify-center" aria-hidden="true">
                  <div className="w-full max-w-xs aspect-square bg-primary-50 rounded-xl flex items-center justify-center border border-gray-100">
                    <step.icon className="w-24 h-24 text-primary-300" aria-hidden="true" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold text-lg shadow-md transition-colors hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Start Your Assessment
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
