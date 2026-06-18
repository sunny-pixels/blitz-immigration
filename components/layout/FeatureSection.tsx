"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Briefcase,
  Globe,
  FileText,
  Users,
  Plane,
  ShieldCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Briefcase,
    title: "Global Jobs",
    description:
      "Access thousands of verified international job opportunities.",
  },
  {
    icon: Globe,
    title: "Country Guidance",
    description:
      "Explore visa requirements, salary expectations, and living costs.",
  },
  {
    icon: FileText,
    title: "Resume Assessment",
    description:
      "Optimize your resume to match international recruitment standards.",
  },
  {
    icon: Users,
    title: "Interview Support",
    description:
      "Get prepared with expert guidance and mock interview sessions.",
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    description:
      "Receive complete documentation and visa application support.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Process",
    description:
      "Transparent recruitment process with verified employers.",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".feature-card");

    cards.forEach((card: any) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-medium tracking-widest uppercase">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
            Everything You Need
            <br />
            To Work Abroad
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            End-to-end recruitment and migration support designed to help
            professionals build successful international careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="feature-card rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}