import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        .hero-root {
          --cw-orange: #EA5B0C;
          --cw-orange-deep: #B6430A;
          --cw-orange-light: #FFE4CC;
          --cw-line: #F0DFC9;
        }
        .hero-display { font-family: 'Space Grotesk', sans-serif; }
        .hero-body    { font-family: 'Inter', sans-serif; }

        .hero-btn-primary {
          background: var(--cw-orange);
          transition: background 0.15s ease;
        }
        .hero-btn-primary:hover  { background: var(--cw-orange-deep); }
        .hero-btn-primary:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--cw-orange);
        }
        .hero-btn-secondary { transition: background 0.15s ease; }
        .hero-btn-secondary:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px rgba(255,255,255,0.8);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-root * { transition: none !important; animation: none !important; }
        }
      `}</style>

      <div className="hero-root relative h-screen overflow-hidden">

        {/* Background image */}
        <Image
          src="/hero.png"
          alt="Indian professionals working globally"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Decorative orange blob */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-3xl opacity-20"
          style={{ background: "var(--cw-orange)" }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-7xl mx-auto">

          {/* Badge pill */}
          <div className="hero-body inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-7 tracking-wide uppercase">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--cw-orange)" }}
              aria-hidden="true"
            />
            Licensed Global Recruiter · 1,200+ workers placed across 15+ countries
          </div>

          {/* Heading — Space Grotesk 700 */}
          <h1
            className="hero-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 max-w-3xl"
            style={{ fontWeight: 700 }}
          >
            Your career beyond borders{" "}
            <span style={{ color: "var(--cw-orange)" }}>starts here</span>
          </h1>

          {/* Description — Inter 400 */}
          <p className="hero-body text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            We connect skilled and unskilled Indian workers with verified employers across
            Europe, the UK, Canada, Australia, New Zealand, and beyond — in trades,
            healthcare, construction, hospitality, and more.
          </p>

          {/* Buttons */}
          <div className="hero-body flex flex-col sm:flex-row gap-3 justify-center">

            {/* Primary — filled orange, rounded-full */}
            <Link
              href="/workers"
              className="hero-btn-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white"
            >
              Apply as a worker
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            {/* Secondary — ghost white, rounded-full */}
            <Link
              href="/employers"
              className="hero-btn-secondary inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-transparent px-7 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Hire staff from India
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}
