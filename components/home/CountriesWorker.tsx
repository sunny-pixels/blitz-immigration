import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Plane,
  ArrowUpRight,
  PhoneCall,
  FileCheck2,
  Wallet,
  TrendingUp,
  Languages,
  Send,
  BriefcaseBusiness,
} from "lucide-react";

/**
 * CountriesWorkers
 * -----------------------------------------------------------------------
 * "Countries We Place Workers In" section.
 *
 * Visual concept: an airport departures-board / boarding-pass motif —
 * tabular mono numerals, route codes, dashed ticket perforations and a
 * torn-edge CTA banner — built to fit a destination-led overseas
 * recruitment brief. Background is white/ivory, accent colour is orange.
 *
 * Setup notes:
 * - Uses Google Fonts (Space Grotesk / Inter / JetBrains Mono) via an
 *   inline <style> import so the file is fully self-contained. For
 *   production, swap this for `next/font` in your root layout instead.
 * - Uses `lucide-react` for icons and `next/link` for navigation —
 *   both already part of your stack. Update the placeholder `href`
 *   values to your real routes.
 */

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

type Region = "Europe" | "Asia Pacific" | "Oceania" | "North America";

interface CountryRow {
  id: string;
  flag: string;
  name: string;
  code: string;
  region: Region;
  jobs: number;
}

const COUNTRIES: CountryRow[] = [
  {
    id: "gbr",
    flag: "🇬🇧",
    name: "United Kingdom",
    code: "LHR",
    region: "Europe",
    jobs: 280,
  },
  {
    id: "deu",
    flag: "🇩🇪",
    name: "Germany",
    code: "FRA",
    region: "Europe",
    jobs: 240,
  },
  {
    id: "can",
    flag: "🇨🇦",
    name: "Canada",
    code: "YYZ",
    region: "North America",
    jobs: 210,
  },
  {
    id: "aus",
    flag: "🇦🇺",
    name: "Australia",
    code: "SYD",
    region: "Oceania",
    jobs: 185,
  },
  {
    id: "nzl",
    flag: "🇳🇿",
    name: "New Zealand",
    code: "AKL",
    region: "Oceania",
    jobs: 95,
  },
  {
    id: "nld",
    flag: "🇳🇱",
    name: "Netherlands",
    code: "AMS",
    region: "Europe",
    jobs: 88,
  },
  {
    id: "phl",
    flag: "🇵🇭",
    name: "Philippines",
    code: "MNL",
    region: "Asia Pacific",
    jobs: 72,
  },
  {
    id: "mdv",
    flag: "🇲🇻",
    name: "Maldives",
    code: "MLE",
    region: "Asia Pacific",
    jobs: 58,
  },
  {
    id: "pol",
    flag: "🇵🇱",
    name: "Poland",
    code: "WAW",
    region: "Europe",
    jobs: 52,
  },
  {
    id: "irl",
    flag: "🇮🇪",
    name: "Ireland",
    code: "DUB",
    region: "Europe",
    jobs: 40,
  },
];

const TOTAL_JOBS = COUNTRIES.reduce((sum, c) => sum + c.jobs, 0);
const TOTAL_REGIONS = new Set(COUNTRIES.map((c) => c.region)).size;
const EU_COUNT = COUNTRIES.filter((c) => c.region === "Europe").length;

const STATS: { value: string; label: string }[] = [
  { value: `${COUNTRIES.length}`, label: "Destination countries" },
  { value: `${TOTAL_JOBS}+`, label: "Open roles right now" },
  { value: `${TOTAL_REGIONS}`, label: "Regions covered" },
  { value: `${EU_COUNT}`, label: "European nations hiring" },
];

function getDemandBadge(jobs: number): { label: string; className: string } {
  if (jobs >= 150) {
    return {
      label: "Hiring fast",
      className: "bg-[var(--cw-orange)] text-white",
    };
  }
  if (jobs >= 50) {
    return {
      label: "Steady demand",
      className: "bg-[var(--cw-orange-light)] text-[var(--cw-orange-deep)]",
    };
  }
  return {
    label: "Selective hiring",
    className: "bg-stone-100 text-stone-500",
  };
}

interface SectorGroup {
  id: string;
  flags: string;
  destination: string;
  sectors: string[];
}

const SECTOR_GROUPS: SectorGroup[] = [
  {
    id: "g-gbr",
    flags: "🇬🇧",
    destination: "United Kingdom",
    sectors: ["Healthcare", "Construction", "Hospitality", "Logistics", "IT"],
  },
  {
    id: "g-deu",
    flags: "🇩🇪",
    destination: "Germany",
    sectors: ["Engineering", "Manufacturing", "Construction", "Healthcare"],
  },
  {
    id: "g-can",
    flags: "🇨🇦",
    destination: "Canada",
    sectors: ["Healthcare", "Agriculture", "IT", "Construction", "Trades"],
  },
  {
    id: "g-aus-nzl",
    flags: "🇦🇺🇳🇿",
    destination: "Australia & New Zealand",
    sectors: ["Skilled Trades", "Healthcare", "Agriculture", "Hospitality"],
  },
  {
    id: "g-nld-pol",
    flags: "🇳🇱🇵🇱",
    destination: "Netherlands & Poland",
    sectors: ["Manufacturing", "Logistics", "Warehousing", "Agriculture"],
  },
  {
    id: "g-phl-mdv",
    flags: "🇵🇭🇲🇻",
    destination: "Philippines & Maldives",
    sectors: ["Hospitality", "Healthcare", "Tourism", "F&B"],
  },
];

interface WhyReason {
  id: string;
  Icon: LucideIcon;
  title: string;
  description: string;
}

const WHY_REASONS: WhyReason[] = [
  {
    id: "visa",
    Icon: FileCheck2,
    title: "Know the visa and permit rules",
    description:
      "Every country has its own process for work visas, permits, and medical clearance, so you know exactly what's required before you apply.",
  },
  {
    id: "pay",
    Icon: Wallet,
    title: "Compare pay and benefits",
    description:
      "Salary ranges, accommodation, and benefits vary by country and sector, so you can weigh offers side by side.",
  },
  {
    id: "demand",
    Icon: TrendingUp,
    title: "See where demand is growing",
    description:
      "Some destinations are hiring fast in specific industries right now — search by country to find where your trade is needed most.",
  },
  {
    id: "skills",
    Icon: Languages,
    title: "Match your language and skills",
    description:
      "Filter by destination to find roles where your spoken languages, certifications, and trade experience fit best.",
  },
  {
    id: "apply",
    Icon: Send,
    title: "Apply straight to the source",
    description:
      "Submit your application directly for openings in your chosen country, with no detours through unrelated listings.",
  },
  {
  id: "career",
  Icon: BriefcaseBusiness,
  title: "Explore long-term career opportunities",
  description:
    "Compare destinations that offer strong career progression, international experience, and opportunities for future growth.",
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function CountriesWorkers() {
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

        .cw-scallop-top { position: relative; }
        .cw-scallop-top::before {
          content: "";
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          height: 18px;
          background-image: radial-gradient(circle at 9px 9px, #ffffff 9px, transparent 9.5px);
          background-size: 18px 18px;
          background-repeat: repeat-x;
          background-position: -9px -9px;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .cw-root * { transition: none !important; animation: none !important; }
        }
      `}</style>

      {/* ----------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ----------------------------------------------------------------- */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--cw-orange)]/10 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-[var(--cw-orange)]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--cw-line)] bg-[var(--cw-bg-warm)] px-4 py-1.5">
            <Plane
              className="h-3.5 w-3.5 text-[var(--cw-orange)]"
              aria-hidden="true"
            />
            <span className="cw-mono text-xs font-medium uppercase tracking-wider text-[var(--cw-orange-deep)]">
              Global Placement Network
            </span>
          </div>

          <h1 className="cw-display mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Countries we place{" "}
            <span className="text-[var(--cw-orange)]">workers</span> in
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--cw-ink-soft)]">
            Many job seekers start with a destination in mind. Explore
            opportunities by country and see exactly where we&apos;re hiring
            right now.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--cw-orange)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--cw-orange-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:ring-offset-2"
            >
              Browse all openings
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--cw-line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--cw-ink)] transition-colors hover:border-[var(--cw-orange)] hover:text-[var(--cw-orange-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:ring-offset-2"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Talk to a recruiter
            </Link>
          </div>

          {/* Stats strip */}
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--cw-line)] bg-[var(--cw-line)] sm:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white px-6 py-6 text-center sm:text-left"
              >
                <div className="cw-mono cw-display text-3xl font-bold text-[var(--cw-orange)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--cw-ink-soft)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Departures board table                                            */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="cw-display text-2xl font-bold sm:text-3xl">
              Current open jobs by country
            </h2>
            <p className="mt-2 text-[var(--cw-ink-soft)]">
              Counts are updated regularly as positions are filled and new
              vacancies open.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[var(--cw-ink-soft)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cw-orange)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--cw-orange)]" />
            </span>
            Updated regularly
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--cw-line)]">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-[var(--cw-orange)] bg-[var(--cw-bg-warm)]">
                <th className="cw-mono px-3 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--cw-ink-soft)] sm:px-5">
                  #
                </th>

                <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--cw-ink-soft)] sm:px-5">
                  Country
                </th>

                <th className="cw-mono px-3 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--cw-ink-soft)] sm:px-5">
                  Code
                </th>

                {/* Hidden on mobile */}
                <th className="hidden px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--cw-ink-soft)] md:table-cell">
                  Region
                </th>

                <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wider text-[var(--cw-ink-soft)] sm:px-5">
                  Jobs
                </th>

                {/* Hidden on mobile */}
                <th className="hidden px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--cw-ink-soft)] lg:table-cell">
                  Demand
                </th>

                <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wider text-[var(--cw-ink-soft)] sm:px-5">
                  <span className="sr-only">View jobs</span>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--cw-line)]">
              {COUNTRIES.map((country, index) => {
                const badge = getDemandBadge(country.jobs);

                return (
                  <tr
                    key={country.id}
                    className="transition-colors hover:bg-[var(--cw-bg-warm)]"
                  >
                    <td className="cw-mono px-3 py-4 text-sm text-stone-400 sm:px-5">
                      {String(index + 1).padStart(2, "0")}
                    </td>

                    <td className="px-3 py-4 sm:px-5">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span
                          className="text-lg sm:text-xl leading-none"
                          aria-hidden="true"
                        >
                          {country.flag}
                        </span>

                        <span className="font-semibold break-words">
                          {country.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-3 py-4 sm:px-5">
                      <span className="cw-mono rounded-md bg-stone-100 px-2 py-1 text-[10px] sm:text-xs font-semibold text-stone-500">
                        {country.code}
                      </span>
                    </td>

                    {/* Hidden on mobile */}
                    <td className="hidden px-5 py-4 text-sm text-[var(--cw-ink-soft)] md:table-cell">
                      {country.region}
                    </td>

                    <td className="cw-mono px-3 py-4 text-right text-sm sm:text-base font-bold text-[var(--cw-orange-deep)] sm:px-5">
                      {country.jobs}+
                    </td>

                    {/* Hidden on mobile */}
                    <td className="hidden px-5 py-4 lg:table-cell">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                    </td>

                    <td className="px-3 py-4 text-right sm:px-5">
                      <Link
                        href={`/jobs?country=${country.code}`}
                        className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[var(--cw-orange)] hover:text-[var(--cw-orange-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:rounded-sm"
                      >
                        View
                        <ArrowUpRight
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Sector cards — "boarding pass" style                              */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="cw-display text-2xl font-bold sm:text-3xl">
            Find jobs by destination
          </h2>
          <p className="mt-2 text-[var(--cw-ink-soft)]">
            Whether it&apos;s construction in Germany, healthcare in the UK and Canada,
            hospitality in the Maldives and Philippines, manufacturing in the Netherlands,
            or skilled trades in Australia, we connect workers with verified employers
            across every country we serve.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTOR_GROUPS.map((group) => (
            <div
              key={group.id}
              className="relative flex overflow-hidden rounded-2xl border border-[var(--cw-line)] bg-[var(--cw-bg-warm)] motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-1"
            >
              <div className="flex-1 p-6">
                <span className="text-2xl leading-none" aria-hidden="true">
                  {group.flags}
                </span>
                <h3 className="cw-display mt-3 text-lg font-semibold">
                  {group.destination}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.sectors.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-md border border-[var(--cw-line)] bg-white px-2 py-1 text-xs font-medium text-[var(--cw-ink-soft)]"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative flex w-16 shrink-0 flex-col items-center justify-center border-l-2 border-dashed border-[var(--cw-line)] bg-white/70">
                <Link
                  href={`/jobs?destination=${encodeURIComponent(group.destination)}`}
                  aria-label={`View ${group.destination} jobs`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cw-orange)] text-white transition-colors hover:bg-[var(--cw-orange-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:ring-offset-2"
                >
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <span
                className="absolute -top-2.5 h-5 w-5 -translate-x-1/2 rounded-full bg-white"
                style={{ left: "calc(100% - 4rem)" }}
                aria-hidden="true"
              />
              <span
                className="absolute -bottom-2.5 h-5 w-5 -translate-x-1/2 rounded-full bg-white"
                style={{ left: "calc(100% - 4rem)" }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Why search by country                                             */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <h2 className="cw-display text-2xl font-bold sm:text-3xl">
          Why search by country
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--cw-line)] bg-[var(--cw-line)] sm:grid-cols-2 lg:grid-cols-3">
          {WHY_REASONS.map(({ id, Icon, title, description }) => (
            <div key={id} className="flex flex-col gap-3 bg-white p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cw-orange-light)]">
                <Icon
                  className="h-5 w-5 text-[var(--cw-orange-deep)]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="cw-display text-base font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--cw-ink-soft)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Final CTA — torn boarding-pass edge                               */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="cw-scallop-top mt-2 overflow-hidden rounded-b-3xl bg-gradient-to-br from-[var(--cw-orange)] to-[var(--cw-orange-deep)] px-8 py-14 sm:px-14 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="cw-display text-3xl font-bold text-white sm:text-4xl">
              Ready to work abroad?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Browse current openings by country and apply for positions that
              match your experience and career goals. Our recruitment team can
              guide you through the application, documentation, and deployment
              process from start to finish.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--cw-orange-deep)] transition-transform motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cw-orange)]"
              >
                Browse all openings
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cw-orange)]"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Talk to our recruitment team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
