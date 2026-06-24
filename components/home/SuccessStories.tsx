import { Quote, Users, PlayCircle } from "lucide-react";

/**
 * SuccessStories
 * -----------------------------------------------------------------------
 * "Success Stories from Indian Workers" section. Testimonials are styled
 * as postcards sent back from abroad — a dashed border, a rotated
 * "postmark" stamp carrying the destination flag and route code, and a
 * quote watermark — which keeps the travel motif from the other sections
 * without reusing the same orange CTA banner everywhere.
 *
 * Per feedback: the torn-edge orange CTA banner is intentionally left out
 * here. It's a tool for sections that end on a hard pitch, not a default
 * footer for every section.
 */

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  code: string;
  flag: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "rajesh",
    name: "Rajesh Kumar",
    role: "Construction Supervisor",
    country: "Germany",
    code: "FRA",
    flag: "🇩🇪",
    quote:
      "Blitz World Immigration guided me through every step of the recruitment process. Within a few months, I secured a position in Germany with a reputable company. The process was smooth, transparent, and professional.",
  },
  {
    id: "arif",
    name: "Mohammad Arif",
    role: "HVAC Technician",
    country: "United Kingdom",
    code: "LHR",
    flag: "🇬🇧",
    quote:
      "I was looking for a stable overseas opportunity and found the perfect role through Blitz World Immigration. The team kept me informed throughout the process and helped me prepare all required documents.",
  },
  {
    id: "suresh",
    name: "Suresh Patel",
    role: "Warehouse Associate",
    country: "Netherlands",
    code: "AMS",
    flag: "🇳🇱",
    quote:
      "Moving abroad for work was a big decision for my family. Blitz World Immigration made the process simple and answered all my questions. Today I have a secure job and better income opportunities.",
  },
  {
    id: "deepak",
    name: "Deepak Singh",
    role: "Welder",
    country: "Australia",
    code: "SYD",
    flag: "🇦🇺",
    quote:
      "The recruitment team was supportive from the initial application until my departure. I am grateful for the opportunity and the professional guidance I received.",
  },
  {
    id: "ramesh",
    name: "Ramesh Yadav",
    role: "Electrician",
    country: "Canada",
    code: "YYZ",
    flag: "🇨🇦",
    quote:
      "I appreciated the clear communication and organized process. Everything was explained properly, which gave me confidence in pursuing an overseas job.",
  },
  {
    id: "joseph",
    name: "Joseph Mathew",
    role: "Hotel Staff",
    country: "Maldives",
    code: "MLE",
    flag: "🇲🇻",
    quote:
      "Working abroad has helped me grow professionally and financially. I am thankful to Blitz World Immigration for connecting me with a trusted employer.",
  },
];

const COUNTRIES_REPRESENTED = new Set(TESTIMONIALS.map((t) => t.country)).size;
const ROLES_REPRESENTED = new Set(TESTIMONIALS.map((t) => t.role)).size;

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function SuccessStories() {
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

      {/* ----------------------------------------------------------------- */}
      {/* Header                                                            */}
      {/* ----------------------------------------------------------------- */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[var(--cw-orange)]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 sm:pt-28 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--cw-line)] bg-[var(--cw-bg-warm)] px-4 py-1.5">
            <Users className="h-3.5 w-3.5 text-[var(--cw-orange)]" aria-hidden="true" />
            <span className="cw-mono text-xs font-medium uppercase tracking-wider text-[var(--cw-orange-deep)]">
              Success Stories
            </span>
          </div>

          <h2 className="cw-display mt-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Success stories from Indian workers
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--cw-ink-soft)]">
            Thousands of workers have trusted Blitz World Immigration to help them build
            successful careers overseas. Here are a few stories from candidates who
            secured international opportunities through our recruitment network.
          </p>

          <div className="mt-10 border-t border-[var(--cw-line)] pt-10">
            <p className="cw-display text-2xl font-semibold text-[var(--cw-orange-deep)] sm:text-3xl">
              Real people. Real jobs. Real opportunities abroad.
            </p>
            <p className="mt-3 max-w-2xl text-[var(--cw-ink-soft)]">
              From construction workers and technicians to hospitality staff and
              skilled professionals, we&apos;ve helped candidates from across India
              take the next step in their careers and support their families
              through overseas employment.
            </p>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Testimonial postcards                                             */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-20 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[var(--cw-ink-soft)]">
          <span className="cw-mono">{COUNTRIES_REPRESENTED} countries</span>
          <span aria-hidden="true">•</span>
          <span className="cw-mono">{ROLES_REPRESENTED} professions represented</span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative rounded-2xl border border-dashed border-[var(--cw-line)] bg-[var(--cw-bg-warm)] p-6 motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-1"
            >
              <div
                className="absolute right-4 top-4 flex h-12 w-12 rotate-3 flex-col items-center justify-center gap-0.5 rounded-md border-2 border-[var(--cw-orange)]/30 bg-white"
                aria-hidden="true"
              >
                <span className="text-sm leading-none">{t.flag}</span>
                <span className="cw-mono text-[9px] font-semibold text-[var(--cw-orange-deep)]">
                  {t.code}
                </span>
              </div>

              <Quote className="h-6 w-6 text-[var(--cw-orange)]/30" aria-hidden="true" />

              <p className="mt-3 pr-10 text-sm leading-relaxed text-[var(--cw-ink)]">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-dashed border-[var(--cw-line)] pt-4">
                <div className="cw-display flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--cw-orange-light)] text-sm font-semibold text-[var(--cw-orange-deep)]">
                  {getInitials(t.name)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-[var(--cw-ink-soft)]">
                    {t.role} • {t.country}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Coming soon: video stories                                        */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-[var(--cw-line)] bg-white p-8 sm:p-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cw-orange-light)] px-3 py-1 text-xs font-semibold text-[var(--cw-orange-deep)]">
              Coming soon
            </span>
            <h3 className="cw-display mt-4 text-2xl font-bold sm:text-3xl">
              Video success stories
            </h3>
            <p className="mt-3 text-[var(--cw-ink-soft)]">
              Watch authentic experiences from workers who successfully secured
              overseas employment through Blitz World Immigration. Video testimonials
              provide valuable insight into the recruitment journey, workplace
              experience, and life abroad.
            </p>
          </div>

          <div className="relative flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-[var(--cw-line)] bg-[var(--cw-bg-warm)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
              <PlayCircle className="h-7 w-7 text-[var(--cw-orange)]" aria-hidden="true" />
            </div>
            <span className="absolute bottom-3 right-3 cw-mono text-[10px] font-semibold uppercase tracking-wide text-[var(--cw-ink-soft)]">
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}