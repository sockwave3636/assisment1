import Link from "next/link";
import { ArrowRight, Sparkles, Heart, TrendingUp, Shield } from "lucide-react";
import eiraImage from "./assets/eira1.png";
import Pill from "@/components/Pill";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero: Z-pattern layout, minimal decoration */}
      <section className="bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 py-20 sm:py-24 md:grid-cols-12 md:py-32 lg:gap-20">
            <div className="md:col-span-7">
              <Pill className="bg-white/10 text-accent-200 ring-primary-600/40" aria-label="Tagline">
                Ayurveda, Designed for Today
              </Pill>
              <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl" style={{ lineHeight: 1.25 }}>
                Overall Wellness through Ayurveda{" "}
                <span className="block text-accent-200 mt-2">
                  is your path to balance
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-primary-100 leading-relaxed" style={{ lineHeight: 1.5 }}>
                <span className="font-medium text-white">
                  Ancient Wisdom. Modern Science. Personalised Wellness.
                </span>
              </p>
              <p className="mt-4 max-w-2xl text-base text-primary-100/90 leading-relaxed" style={{ lineHeight: 1.5 }}>
                Customised consultations, dosha-aligned therapies, and lifestyle
                guidance—with continuous progress tracking to keep you rooted,
                energised, and aligned with modern preventive healthcare.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <PrimaryButton
                  href="/packages"
                  className="bg-accent-400 text-primary-900 hover:bg-accent-300"
                >
                  Book Consultation
                </PrimaryButton>
                <SecondaryButton
                  href="/packages"
                  className="border-white text-white hover:bg-white/10"
                >
                  Explore Packages
                </SecondaryButton>
              </div>

              <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-xl border border-primary-700/60 bg-primary-800/30 p-6" role="region" aria-label="Our approach">
                <div>
                  <div className="text-sm font-semibold text-white">Personalised</div>
                  <div className="mt-1 text-sm text-primary-100/90 leading-relaxed">Protocols built for your dosha and habits</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Structured</div>
                  <div className="mt-1 text-sm text-primary-100/90 leading-relaxed">Assessment, program, and measurable outcomes</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Adaptive</div>
                  <div className="mt-1 text-sm text-primary-100/90 leading-relaxed">Continuous monitoring; your plan evolves with you</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="relative">
                <div className="h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full bg-primary-700 flex items-center justify-center overflow-hidden">
                  <img
                    src={eiraImage.src}
                    alt="EIRA wellness brand mark — Samskara-inspired, chemical-free Ayurvedic care"
                    className="h-40 w-40 sm:h-48 sm:w-48 rounded-full object-cover ring-4 ring-primary-800"
                  />
                </div>
                <p className="mt-6 text-center text-sm text-primary-200 max-w-xs mx-auto">
                  Samskara-inspired, chemical-free care rooted in Ayurveda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healing Journey: F-pattern for text-heavy content */}
      <section className="py-24 bg-white" aria-labelledby="journey-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 id="journey-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ lineHeight: 1.25 }}>
              Your Healing Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ lineHeight: 1.5 }}>
              A structured, personalised path from assessment to transformation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[
              { number: "01", title: "Decode You", description: "Your journey begins with an intelligent assessment that reveals your Prakriti, identifies current imbalances, and maps your lifestyle patterns." },
              { number: "02", title: "Build Your Protocol", description: "Using diagnostic insights, we craft a care plan designed uniquely for you—covering therapies, nutrition, habits, and preventive practices." },
              { number: "03", title: "Start Your Program", description: "Your personalised protocol comes to life through structured sessions, supportive therapies, and seamless routines." },
              { number: "04", title: "Track & Transform", description: "As your body evolves, so does your plan. Continuous monitoring ensures long-term balance and measurable outcomes." },
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200">
                <span className="text-5xl font-bold text-primary-100" aria-hidden="true">{step.number}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3" style={{ lineHeight: 1.25 }}>{step.title}</h3>
                <p className="text-gray-600 leading-relaxed" style={{ lineHeight: 1.5 }}>{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 py-3 text-primary-600 hover:text-primary-700 font-semibold text-lg rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Start Your Assessment
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="why" className="border-t border-gray-200 bg-gray-50 py-24" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 id="why-heading" className="text-2xl sm:text-3xl font-semibold text-gray-900" style={{ lineHeight: 1.25 }}>
              Why Choose EIRA?
            </h2>
            <p className="mt-3 max-w-2xl text-gray-600 leading-relaxed" style={{ lineHeight: 1.5 }}>
              A thoughtfully designed approach to preventive wellness
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, title: "Intelligent Ayurveda", body: "Ancient wisdom thoughtfully structured with modern assessment frameworks." },
              { icon: Heart, title: "Your Body, Decoded", body: "In-depth consultations that uncover Prakriti, imbalances, and lifestyle patterns." },
              { icon: TrendingUp, title: "Care That Adapts", body: "Wellness plans that evolve with progress, habits, and changing needs." },
              { icon: Shield, title: "One Ecosystem", body: "Consultations, therapies, routines, and tracking—connected in one experience." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6" role="article">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50" aria-hidden="true">
                  <f.icon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900" style={{ lineHeight: 1.25 }}>{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed" style={{ lineHeight: 1.5 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" aria-label="Testimonial">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 p-8 md:p-12 rounded-xl border border-primary-100">
            <blockquote className="text-xl md:text-2xl text-gray-900 font-medium mb-4 leading-relaxed" style={{ lineHeight: 1.5 }}>
              "EIRA helped me understand my body better and build healthier
              routines. The personalised approach made all the difference."
            </blockquote>
            <p className="text-gray-700 font-semibold">— Priya, Mumbai</p>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Individual experiences may vary. EIRA focuses on preventive wellness.
            </p>
          </div>
        </div>
      </section>

      <section id="download" className="border-t border-gray-200 bg-gray-50 py-24" aria-labelledby="download-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 rounded-xl border border-gray-200 bg-white p-8 md:grid-cols-12 md:p-12">
            <div className="md:col-span-7">
              <h2 id="download-heading" className="text-2xl sm:text-3xl font-semibold text-gray-900" style={{ lineHeight: 1.25 }}>
                Take Control of Your Wellness
              </h2>
              <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed" style={{ lineHeight: 1.5 }}>
                Download the EIRA app and begin your journey to balanced, preventive health.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Link
                  href="/download"
                  className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] gap-3 rounded-xl bg-gray-900 px-6 py-3 text-white font-semibold shadow-md transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                  aria-label="Download EIRA on the App Store"
                >
                  <span className="text-xl" aria-hidden="true">{'\uF8FF'}</span>
                  <span>
                    <span className="block text-xs text-white/90">Download on the</span>
                    <span className="block text-sm font-semibold">App Store</span>
                  </span>
                </Link>
                <Link
                  href="/download"
                  className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] gap-3 rounded-xl bg-gray-900 px-6 py-3 text-white font-semibold shadow-md transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                  aria-label="Get EIRA on Google Play"
                >
                  <span className="text-xl" aria-hidden="true">{'\u25B6'}</span>
                  <span>
                    <span className="block text-xs text-white/90">Get it on</span>
                    <span className="block text-sm font-semibold">Google Play</span>
                  </span>
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6" role="complementary" aria-label="App features">
                <h3 className="text-sm font-semibold text-gray-900">What you get</h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-700" style={{ lineHeight: 1.5 }}>
                  <li className="flex gap-2"><span className="text-primary-600" aria-hidden="true">✓</span> Customised consultations and protocols</li>
                  <li className="flex gap-2"><span className="text-primary-600" aria-hidden="true">✓</span> Dosha-aligned therapies and routines</li>
                  <li className="flex gap-2"><span className="text-primary-600" aria-hidden="true">✓</span> Continuous progress tracking and updates</li>
                </ul>
                <p className="mt-6 text-sm text-gray-600 leading-relaxed">
                  EIRA is designed for modern preventive healthcare—helping you build sustainable habits and measurable outcomes over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
