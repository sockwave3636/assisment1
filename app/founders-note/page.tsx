import Link from "next/link";
import { Quote } from "lucide-react";

export default function FoundersNote() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-900 via-primary-900 to-primary-950 text-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary-700/30 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-40 right-[-80px] h-[520px] w-[520px] rounded-full bg-accent-500/20 blur-3xl animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Quote className="w-8 h-8 text-accent-300" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
                A Personal Note from the Founder
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <blockquote className="text-2xl md:text-3xl text-gray-900 font-medium italic border-l-4 border-primary-600 pl-6 py-4">
                "True healthcare begins not with treatment, but with awareness—long
                before illness arrives."
              </blockquote>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                EIRA was born from a deeply personal realisation: that we often begin
                caring for our health only after something breaks—when the body has
                already been trying to speak for a long time.
              </p>

              <p>
                Ayurveda has always understood this language. It has offered a
                preventive, holistic view of health for centuries, yet in the modern
                world, this wisdom has been fragmented, inaccessible, or reduced to
                rituals without structure. EIRA was created to change that.
              </p>

              <p>
                We exist at the convergence of ancient intelligence and modern
                accountability. By bringing together classical Ayurvedic principles,
                practitioner-led care, structured systems, and intelligent tracking,
                EIRA restores Ayurveda to what it was always meant to be—a living,
                evolving science that supports everyday life.
              </p>

              <p>
                Our vision is not to fix people quickly, but to help them build
                awareness, balance, and ownership of their well-being over time. We
                believe health is not an event—it is a relationship, one that deserves
                continuity, clarity, and trust.
              </p>

              <p>
                EIRA is a step toward a future where healthcare begins with listening,
                not reacting—where prevention is not optional, and well-being is a
                conscious way of living.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-xl font-semibold text-gray-900">— Founder, EIRA</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 md:p-12 rounded-2xl border border-primary-100 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Begin Your Journey
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Experience preventive healthcare that listens, adapts, and grows with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/packages"
                className="bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all transform hover:scale-105 font-medium text-lg shadow-lg"
              >
                Explore Packages
              </Link>
              <Link
                href="/how-it-works"
                className="bg-white text-primary-600 px-8 py-4 rounded-full border-2 border-primary-600 hover:bg-primary-50 transition-all transform hover:scale-105 font-medium text-lg"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
