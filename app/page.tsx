import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Heart, TrendingUp, Shield } from "lucide-react";
import Pill from "@/components/Pill";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

export default function Home() {
  return (
    <div className="pt-16">
      {/* header section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-900 to-primary-50 shadow-lg text-white">
       
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary-700/50 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-40 right-[-80px] h-[520px] w-[520px] rounded-full bg-accent-500/40 blur-3xl animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 py-16 sm:py-20 md:grid-cols-12 md:py-28">
            
            <div className="md:col-span-7">
              <Pill className="bg-white text-accent-200 ring-primary-600/60">
                Ayurveda, Designed for Today
              </Pill>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Overall Wellness through Ayurveda{" "}
                <span className="block text-accent-200">
                  is your path to balance
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg text-primary-50/90">
                <span className="font-medium">
                  Ancient Wisdom. Modern Science. Personalised Wellness.
                </span>
              </p>
              <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-primary-100/80">
                Customised consultations, dosha-aligned therapies, and lifestyle
                guidance—with continuous progress tracking to keep you rooted,
                energised, and aligned with modern preventive healthcare.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton
                  href="/packages"
                  className="bg-accent-400 text-primary-900 hover:bg-accent-300"
                >
                  Book Consultation
                </PrimaryButton>
                <SecondaryButton
                  href="/packages"
                  className="border-white text-black hover:bg-white/10"
                >
                  Explore Packages
                </SecondaryButton>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-primary-600/50 bg-primary-800/40 p-4 shadow-lg shadow-primary-900/40 backdrop-blur-sm sm:grid-cols-3">
                <div>
                  <div className="text-sm font-semibold text-white">
                    Personalised
                  </div>
                  <div className="mt-1 text-sm text-primary-100/90">
                    Protocols built for your dosha & habits
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    Structured
                  </div>
                  <div className="mt-1 text-sm text-primary-100/90">
                    Assessment → program → outcomes
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-sm font-semibold text-white">
                    Adaptive
                  </div>
                  <div className="mt-1 text-sm text-primary-100/90">
                    Continuous monitoring, plan evolves
                  </div>
                </div>
              </div>
            </div>

            
            <div className="md:col-span-5">
              <div className="relative flex items-center justify-center">
                
                <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 shadow-[0_40px_120px_rgba(0,0,0,0.55)] flex items-center justify-center animate-float-slow">
                  <img
                    src="/eira.png"
                    alt="EIRA Logo"
                    className="h-40 w-40 sm:h-48 sm:w-48 rounded-full object-cover ring-4 ring-primary-900/60 shadow-inner"
                  />
                </div>

                
                <div className="absolute -left-6 top-6 rounded-2xl bg-primary-800/80 px-4 py-3 text-xs text-primary-50 ring-1 ring-primary-500/70 backdrop-blur-md animate-float">
                  Samskara-inspired, chemical-free care rooted in Ayurveda.
                </div>

                <div className="absolute -bottom-6 right-0 flex items-center gap-3 rounded-2xl bg-primary-800/90 px-4 py-2 text-xs text-primary-50 ring-1 ring-primary-600/70 backdrop-blur-md">
                  <div className="flex -space-x-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-400 text-[10px] font-semibold text-primary-900">
                      A
                    </span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-300 text-[10px] font-semibold text-primary-900">
                      B
                    </span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-200 text-[10px] font-semibold text-primary-900">
                      C
                    </span>
                  </div>
                  <span>Regular EIRA guests</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mid section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Healing Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured, personalised path from assessment to transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Decode You",
                description:
                  "Your journey begins with an intelligent assessment that reveals your Prakriti, identifies current imbalances, and maps your lifestyle patterns.",
              },
              {
                number: "02",
                title: "Build Your Protocol",
                description:
                  "Using diagnostic insights, we craft a care plan designed uniquely for you—covering therapies, nutrition, habits, and preventive practices.",
              },
              {
                number: "03",
                title: "Start Your Program",
                description:
                  "Your personalised protocol comes to life through structured sessions, supportive therapies, and seamless routines.",
              },
              {
                number: "04",
                title: "Track & Transform",
                description:
                  "As your body evolves, so does your plan. Continuous monitoring ensures long-term balance and measurable outcomes.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary-100">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg group"
            >
              Start Your Assessment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section id="why" className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                Why Choose EIRA?
              </h2>
              <p className="max-w-2xl text-pretty text-gray-600">
                A thoughtfully designed approach to preventive wellness
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Sparkles,
                  title: "Intelligent Ayurveda",
                  body:
                    "Ancient wisdom thoughtfully structured with modern assessment frameworks.",
                },
                {
                  icon: Heart,
                  title: "Your Body, Decoded",
                  body:
                    "In-depth consultations that uncover Prakriti, imbalances, and lifestyle patterns.",
                },
                {
                  icon: TrendingUp,
                  title: "Care That Adapts",
                  body:
                    "Wellness plans that evolve with progress, habits, and changing needs.",
                },
                {
                  icon: Shield,
                  title: "One Ecosystem",
                  body:
                    "Consultations, therapies, routines, and tracking—connected in one experience.",
                },
              ].map((f, index) => (
                <div
                  key={f.title}
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-xl ring-1 ring-accent-200">
                    <f.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-gray-600">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 md:p-12 rounded-2xl border border-primary-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
              </div>
              <div className="flex-1">
                <blockquote className="text-xl md:text-2xl text-gray-900 font-medium mb-4 italic">
                  "EIRA helped me understand my body better and build healthier
                  routines. The personalised approach made all the difference."
                </blockquote>
                <p className="text-gray-700 font-semibold">— Priya, Mumbai</p>
                <p className="text-sm text-gray-500 mt-2">
                  Individual experiences may vary. EIRA focuses on preventive
                  wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* last section */}
      <section id="download" className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20">
            <div className="grid gap-10 rounded-3xl border border-primary-200 bg-gradient-to-br from-primary-50 via-white to-accent-50 p-8 shadow-lg md:grid-cols-12 md:p-10">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                  Take Control of Your Wellness
                </h2>
                <p className="mt-3 max-w-2xl text-pretty text-gray-600">
                  Download the EIRA app and begin your journey to balanced,
                  preventive health.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/download"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gray-900 px-5 py-3 text-left text-white shadow-md transition hover:bg-black"
                  >
                    <span className="text-xl"></span>
                    <span className="leading-tight">
                      <span className="block text-xs text-white/80">
                        Download on the
                      </span>
                      <span className="block text-sm font-semibold">
                        App Store
                      </span>
                    </span>
                  </Link>
                  <Link
                    href="/download"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gray-900 px-5 py-3 text-left text-white shadow-md transition hover:bg-black"
                  >
                    <span className="text-xl">▶</span>
                    <span className="leading-tight">
                      <span className="block text-xs text-white/80">
                        Get it on
                      </span>
                      <span className="block text-sm font-semibold">
                        Google Play
                      </span>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-3xl bg-white/80 p-6 ring-1 ring-gray-200/70">
                  <div className="text-sm font-semibold text-gray-900">
                    What you get
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="mt-0.5 text-primary-700">✓</span>
                      Customised consultations & protocols
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 text-primary-700">✓</span>
                      Dosha-aligned therapies & routines
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 text-primary-700">✓</span>
                      Continuous progress tracking & updates
                    </li>
                  </ul>
                  <div className="mt-6 rounded-2xl bg-primary-50 p-4 text-xs leading-relaxed text-gray-600 ring-1 ring-primary-200">
                    EIRA is designed for modern preventive healthcare—helping you
                    build sustainable habits and measurable outcomes over time.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
