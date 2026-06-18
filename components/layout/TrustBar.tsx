import {
  ShieldCheck,
  Award,
  Globe,
  Lock,
  Banknote,
  Building2,
  FileCheck2,
  Headphones,
} from "lucide-react";

/**
 * TrustBar
 * -----------------------------------------------------------------------
 * Credentials/trust section, restyled to the shared design tokens used
 * across CountriesWorkers.tsx, HowItWorks.tsx, SuccessStories.tsx, and
 * FAQSection.tsx (white background, orange accent, Space Grotesk / Inter
 * / JetBrains Mono). The icon treatment borrows a "seal" idea — a dashed
 * outer ring around each credential icon — since this content is
 * literally licenses, certifications, and verified standing, which is a
 * closer fit than the travel motifs used elsewhere.
 *
 * Changes from the original:
 * - Color classes (slate-*, orange-400/50/200) replaced with the shared
 *   --cw-* tokens so this section matches the rest of the site exactly.
 * - Headings/stat numbers moved to Space Grotesk + JetBrains Mono.
 * - Dropped `min-h-screen` — forcing full viewport height on a content
 *   section that sits between other sections usually causes awkward
 *   empty space; swapped for the same vertical rhythm used elsewhere.
 * - Container width and eyebrow badge now match the pattern used in the
 *   other four sections (max-w-7xl, pill-style eyebrow with icon).
 * - The two separate <h2> tags became one (two h2s for a single heading
 *   isn't valid heading structure).
 *
 * Heads up: this file is named TrustBar, but earlier work described a
 * different TrustBar — a GSAP ScrollTrigger element that slides up to
 * cover the Hero. If that's still in place, you'll want to rename one of
 * these two components so they don't collide.
 */

const credentials = [
  {
    icon: ShieldCheck,
    label: "MEA Licensed Recruiter",
    sub: "Reg. No. B-XXXX/XXX/XXXX/XXXX",
  },
  {
    icon: Award,
    label: "ISO 9001:2015 Certified",
    sub: "Quality Management System",
  },
  {
    icon: Globe,
    label: "Member — International Staffing Federation",
    sub: "Global Recruitment Standards",
  },
  {
    icon: Lock,
    label: "GDPR & Global Data Standards Compliant",
    sub: "Your data, protected worldwide",
  },
  {
    icon: Banknote,
    label: "Zero Cost for Workers",
    sub: "No registration or hidden fees, ever",
  },
  {
    icon: Building2,
    label: "80+ Verified Employer Partners",
    sub: "Background-checked across every region",
  },
  {
    icon: FileCheck2,
    label: "End-to-End Visa Support",
    sub: "Documentation handled fully in-house",
  },
  {
    icon: Headphones,
    label: "24/7 Worker Support Line",
    sub: "From application to your first paycheck",
  },
];

const STATS = [
  { value: "1,200+", label: "Workers placed globally" },
  { value: "80+", label: "Verified employer partners" },
  { value: "8 yrs", label: "Industry experience" },
];

export default function TrustBar() {
  return (
    <section className="cw-root bg-white text-[var(--cw-ink)]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');

        .cw-root {
          --cw-bg-warm: #FFF8F1;
          --cw-ink: #1C1410;
          --cw-ink-soft: #6B5D52;
          --cw-orange: #EA5B0C;
          --cw-orange-deep: #B6430A;
          --cw-orange-light: #FFE4CC;
          --cw-line: #F0DFC9;
          font-family: 'Inter', sans-serif;
        }
        .cw-root .cw-display { font-family: 'Space Grotesk', sans-serif; }
        .cw-root .cw-mono { font-family: 'JetBrains Mono', monospace; font-variant-numeric: tabular-nums; }

        @media (prefers-reduced-motion: reduce) {
          .cw-root * { transition: none !important; animation: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-12">
          {/* ── LEFT: content ─────────────────────────────────────── */}
          <div className="shrink-0 lg:sticky lg:top-28 lg:w-[38%]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--cw-line)] bg-[var(--cw-bg-warm)] px-4 py-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[var(--cw-orange)]" aria-hidden="true" />
              <span className="cw-mono text-xs font-medium uppercase tracking-wider text-[var(--cw-orange-deep)]">
                Why Workers &amp; Employers Trust Us
              </span>
            </div>

            <h2 className="cw-display mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Global recruitment you can{" "}
              <span className="text-[var(--cw-orange)]">rely on</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
              Delivering trusted workforce solutions that help professionals and
              organizations achieve their goals across international markets.
            </p>

            {/* Quick stat strip */}
            <div className="mt-10 flex flex-col gap-5 border-t border-[var(--cw-line)] pt-8">
              {STATS.map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <span className="cw-mono cw-display w-20 shrink-0 text-2xl font-bold text-[var(--cw-orange-deep)]">
                    {s.value}
                  </span>
                  <span className="text-sm text-[var(--cw-ink-soft)]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: cards grid ─────────────────────────────────── */}
          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            {credentials.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-[var(--cw-line)] bg-white p-5 transition-all hover:border-[var(--cw-orange)] hover:shadow-sm"
                >
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[var(--cw-orange)]/30">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cw-orange-light)]">
                      <Icon className="h-4 w-4 text-[var(--cw-orange-deep)]" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-snug text-[var(--cw-ink)]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--cw-ink-soft)]">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}