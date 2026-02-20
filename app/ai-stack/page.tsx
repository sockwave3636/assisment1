import Link from "next/link";
import { Brain, Sparkles, TrendingUp, Users, Building, Shield } from "lucide-react";

export default function AIStack() {
  const intelligenceLayers = [
    {
      icon: Brain,
      title: "Intelligent Health Assessment",
      description:
        "A comprehensive evaluation engine that integrates Ayurvedic diagnostics, lifestyle inputs, and health markers to build a holistic understanding of each individual.",
    },
    {
      icon: Sparkles,
      title: "Personalised Care & Recommendation Engine",
      description:
        "Transforms assessments into customised wellness protocols—aligned to constitution, lifestyle, and long-term health goals.",
    },
    {
      icon: TrendingUp,
      title: "Adaptive Care & Progress Intelligence",
      description:
        "Continuously monitors progress, adapts recommendations, and supports sustained outcomes through intelligent feedback loops.",
    },
    {
      icon: Users,
      title: "Practitioner Decision Support System",
      description:
        "Empowers practitioners with data-driven insights, structured workflows, and clinical clarity—without overriding professional judgement.",
    },
    {
      icon: Building,
      title: "Connected Health Pods & Clinic Platform",
      description:
        "Seamlessly links Health Pods, partner clinics, and practitioners into one integrated care ecosystem for continuity and accessibility.",
    },
    {
      icon: Shield,
      title: "Data Privacy & Ethical AI Framework",
      description:
        "Built on strict data governance, patient confidentiality, and ethical AI principles—ensuring trust, transparency, and accountability at every level.",
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-900 via-primary-900 to-primary-950 text-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary-700/30 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-40 right-[-80px] h-[520px] w-[520px] rounded-full bg-accent-500/20 blur-3xl animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              The EIRA Intelligence Platform
            </h1>
            <p className="text-xl md:text-2xl text-primary-100/90 max-w-3xl mx-auto leading-relaxed">
              Where Ancient Ayurvedic Wisdom Meets Modern Intelligence
            </p>
            <p className="mt-6 text-lg text-primary-100/80 max-w-2xl mx-auto">
              EIRA's technology is designed to support—not replace—human care. Our
              AI-powered health stack translates complex Ayurvedic insights into
              structured, trackable, and personalised care journeys, while ensuring
              practitioners remain at the centre of every decision.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Core Intelligence Layers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {intelligenceLayers.map((layer, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-primary-50/30 p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 mb-6 group-hover:bg-primary-200 transition-colors">
                  <layer.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {layer.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{layer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 md:p-12 rounded-2xl border border-primary-100">
            <blockquote className="text-2xl md:text-3xl text-gray-900 font-medium mb-6 italic text-center">
              "At EIRA, intelligence enhances care—but humans lead it."
            </blockquote>
            <p className="text-center text-sm text-gray-600 mt-6">
              EIRA's technology is designed to support preventive healthcare and
              practitioner-led decision-making. It does not replace medical diagnosis
              or clinical judgement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Intelligent Ayurveda
          </h2>
          <p className="text-xl mb-10 text-primary-100">
            Discover how our platform can support your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="bg-accent-400 text-primary-900 px-8 py-4 rounded-full hover:bg-accent-300 transition-all transform hover:scale-105 font-medium text-lg shadow-lg"
            >
              Explore Packages
            </Link>
            <Link
              href="/how-it-works"
              className="bg-white/10 text-white px-8 py-4 rounded-full border-2 border-white hover:bg-white/20 transition-all transform hover:scale-105 font-medium text-lg"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
