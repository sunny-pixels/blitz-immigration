import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const JOB_PREVIEW = [
  "Electrician",
  "Mason",
  "Welder",
  "HVAC Technician",
];

const EMPLOYER_SECTORS = [
  "Construction",
  "Manufacturing",
  "Hospitality",
  "Healthcare",
];

const TRUST_STATS = [
  ["STATUS", "VERIFIED"],
  ["COUNTRIES", "15+"],
  ["SECTORS", "20+"],
  ["PLACEMENTS", "5000+"],
  ["SUPPORT", "ACTIVE"],
];

export default function FinalCTA() {
  return (
    <section className="cw-root relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[var(--cw-orange-light)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cw-orange-deep)]">
            Final Call
          </span>

          <h2 className="mt-6 font-[Space_Grotesk] text-4xl font-bold tracking-tight text-[var(--cw-ink)] sm:text-5xl">
            Ready to Take the Next Step?
          </h2>

          <p className="mt-5 text-lg leading-8 text-[var(--cw-ink-soft)]">
            Connecting talent with opportunity across global markets through a
            transparent, professional, and trusted recruitment process.
          </p>
        </div>

        {/* Boarding Pass Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Job Seekers */}
          <article className="group relative overflow-hidden rounded-2xl border border-[var(--cw-line)] bg-white">
            <div className="grid md:grid-cols-[1fr_110px]">
              <div className="p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[var(--cw-orange-light)] p-3">
                    <Briefcase className="h-5 w-5 text-[var(--cw-orange)]" />
                  </div>

                  <span className="font-[Space_Grotesk] text-xl font-semibold">
                    For Job Seekers
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {[
                    "Access international employment opportunities",
                    "Apply across countries and industries",
                    "Recruitment guidance and support",
                    "Documentation assistance",
                    "Pre-departure preparation",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[var(--cw-ink-soft)]"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--cw-orange)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-xl border border-dashed border-[var(--cw-line)] bg-[var(--cw-bg-warm)] p-4">
                  <p className="mb-3 font-[Space_Grotesk] text-sm font-semibold">
                    Popular Openings
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {JOB_PREVIEW.map((job) => (
                      <span
                        key={job}
                        className="rounded-full bg-white px-3 py-1 text-sm"
                      >
                        {job}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/jobs"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--cw-orange)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--cw-orange-deep)]"
                >
                  Browse Jobs
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Boarding pass stub */}
              <div className="relative border-l-2 border-dashed border-[var(--cw-line)] bg-[var(--cw-bg-warm)]">
                <div
                  aria-hidden
                  className="absolute left-0 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border border-[var(--cw-line)]"
                />

                <div
                  aria-hidden
                  className="absolute bottom-0 left-0 h-5 w-5 -translate-x-1/2 translate-y-1/2 rounded-full bg-white border border-[var(--cw-line)]"
                />

 <div className="flex h-full flex-col items-center justify-center">
  <span className="font-mono text-[11px] tracking-[0.35em] text-[var(--cw-orange)]">
    BOARDING
  </span>

  <span
    className="mt-3 font-[Space_Grotesk] text-xl font-bold tracking-wide"
    style={{ writingMode: "vertical-rl" }}
  >
    CAREER
  </span>
</div>
              </div>
            </div>
          </article>

          {/* Employers */}
          <article className="group relative overflow-hidden rounded-2xl border border-[var(--cw-line)] bg-white">
            <div className="grid md:grid-cols-[1fr_110px]">
              <div className="p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[var(--cw-orange-light)] p-3">
                    <Building2 className="h-5 w-5 text-[var(--cw-orange)]" />
                  </div>

                  <span className="font-[Space_Grotesk] text-xl font-semibold">
                    For Employers
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {[
                    "Large talent pool from India",
                    "Screened candidates",
                    "Industry-specific workforce solutions",
                    "Hiring support",
                    "Reliable recruitment partnership",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[var(--cw-ink-soft)]"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--cw-orange)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-xl border border-dashed border-[var(--cw-line)] bg-[var(--cw-bg-warm)] p-4">
                  <p className="mb-3 font-[Space_Grotesk] text-sm font-semibold">
                    Hiring Sectors
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {EMPLOYER_SECTORS.map((sector) => (
                      <span
                        key={sector}
                        className="rounded-full bg-white px-3 py-1 text-sm"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--cw-line)] bg-white px-6 py-3 text-sm font-semibold hover:border-[var(--cw-orange)]"
                >
                  Hire Talent
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="relative border-l-2 border-dashed border-[var(--cw-line)] bg-[var(--cw-bg-warm)]">
                <div
                  aria-hidden
                  className="absolute left-0 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border border-[var(--cw-line)]"
                />

                <div
                  aria-hidden
                  className="absolute bottom-0 left-0 h-5 w-5 -translate-x-1/2 translate-y-1/2 rounded-full bg-white border border-[var(--cw-line)]"
                />

<div className="flex h-full flex-col items-center justify-center">
  <span className="font-mono text-[11px] tracking-[0.35em] text-[var(--cw-orange)]">
    PRIORITY
  </span>

  <span
    className="mt-3 font-[Space_Grotesk] text-xl font-bold tracking-wide"
    style={{ writingMode: "vertical-rl" }}
  >
    HIRING
  </span>
</div>
              </div>
            </div>
          </article>
        </div>

        {/* Trust Board */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-[var(--cw-line)]">
          <div className="grid grid-cols-2 md:grid-cols-5">
            {TRUST_STATS.map(([label, value]) => (
              <div
                key={label}
                className="border-r border-[var(--cw-line)] p-5 last:border-r-0"
              >
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--cw-ink-soft)]">
                  {label}
                </div>

                <div className="mt-2 font-[Space_Grotesk] text-xl font-bold">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Ticket */}
        <div className="cw-scallop-top relative mt-16 rounded-b-3xl bg-gradient-to-r from-[var(--cw-orange)] to-[var(--cw-orange-deep)] px-8 py-12 text-center text-white">
          <ShieldCheck className="mx-auto h-10 w-10" />

          <h3 className="mt-4 font-[Space_Grotesk] text-3xl font-bold">
            Apply Today. Hire With Confidence.
          </h3>

          <p className="mt-3 text-white/80">
            Grow globally with a trusted recruitment partner.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/jobs"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--cw-orange)]"
            >
              Apply Now
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
            >
              Hire Talent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}