// components/home/HeroReveal.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TrustBar from "@/components/layout/TrustBar";
import IndustriesRecruit from "@/components/home/IndustriesRecruit";
import CountriesWorkers from "./CountriesWorker";
import HowItWorks from "./HowItWorks";
import SuccessStories from "./SuccessStories";
import FAQSection from "./FAQSection";

export default function HeroReveal() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const hero = heroRef.current;
    const reveal = revealRef.current;
    if (!hero || !reveal) return;

    gsap.set(reveal, { yPercent: 100 }); // hidden, pulled below the fold

    const st = ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "+=50%",
      pin: true,
      scrub: true,
      animation: gsap.to(reveal, { yPercent: 0, ease: "none" }),
    });

    return () => st.kill();
  }, []);

  return (
    <>
      {/* HERO */}
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <Image
          src="/hero.png"
          alt="Indian professionals working globally"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Licensed Global Recruiter · 1,200+ workers placed across 15+ countries
          </div>

          <h1 className="text-4xl md:text-6xl font-medium text-white leading-tight mb-6 max-w-3xl">
            Your career beyond borders{" "}
            <span className="text-orange-400">starts here</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            We connect skilled Indian professionals with verified employers across
            Europe, the Middle East, North America, and beyond — in trades,
            healthcare, construction, hospitality, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/workers"
              className="bg-orange-400 text-navy font-medium px-8 py-4 rounded-lg text-base hover:bg-orange-300 transition-colors text-center"
            >
              Apply as a worker
            </Link>
            <Link
              href="/employers"
              className="border-2 border-white/50 text-white font-medium px-8 py-4 rounded-lg text-base hover:bg-white/10 transition-colors text-center"
            >
              Hire staff from India
            </Link>
          </div>
        </div>
      </div>

      {/* REVEAL PANEL — slides up to cover the hero */}
      <div
        ref={revealRef}
        className="relative z-20 bg-white -mt-[100vh]"
      >
        <TrustBar />
        <IndustriesRecruit />
        <CountriesWorkers />
        <HowItWorks />
        <SuccessStories />
        <FAQSection />
      </div>
    </>
  );
}