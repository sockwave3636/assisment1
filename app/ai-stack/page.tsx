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
      <section className="bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Core Intelligence Layers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {intelligenceLayers.map((layer, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-700 mb-6" aria-hidden="true">
                  <layer.icon className="w-7 h-7" aria-hidden="true" />
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Experience Intelligent Ayurveda
          </h2>
          <p className="text-xl mb-10 text-primary-100">
            Discover how our platform can support your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] bg-accent-400 text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-md transition-colors hover:bg-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
            >
              Explore Packages
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] bg-white/10 text-white px-8 py-4 rounded-xl border-2 border-white font-semibold text-lg transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
