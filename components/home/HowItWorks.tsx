import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Search,
  FileText,
  UserCheck,
  ClipboardCheck,
  PlaneTakeoff,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  PhoneCall,
} from "lucide-react";

/**
 * HowItWorks
 * -----------------------------------------------------------------------
 * "How It Works" section — a 5-step recruitment journey rendered as a
 * flight-path timeline, matching the departures-board / boarding-pass
 * motif used in CountriesWorkers.tsx (same white background, orange
 * accent, same design tokens). Numbered steps are appropriate here since
 * the content is a genuine ordered process, not a generic feature list.
 *
 * Setup notes:
 * - Google Fonts are imported inline so the file is self-contained; swap
 *   for `next/font` in your root layout for production.
 * - Update the placeholder `href` values to your real routes.
 */

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Step {
  number: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  chips: string[];
}

const STEPS: Step[] = [
  {
    number: "01",
    Icon: Search,
    title: "Browse Available Jobs",
    description:
      "Explore overseas job opportunities across multiple countries and industries. Review job descriptions, requirements, salary packages, benefits, and destination details to find positions that match your skills and experience.",
    chips: ["Job descriptions", "Salary & benefits", "Destination details"],
  },
  {
    number: "02",
    Icon: FileText,
    title: "Submit Your Application",
    description:
      "Apply online by completing our application form and uploading your resume and supporting documents. Our recruitment team reviews each application to identify suitable opportunities based on your qualifications and work experience.",
    chips: ["Application form", "Resume upload", "Supporting documents"],
  },
  {
    number: "03",
    Icon: UserCheck,
    title: "Screening & Employer Selection",
    description:
      "Shortlisted candidates may be invited for interviews, trade tests, or skill assessments depending on employer requirements. Once selected by the employer, you'll receive details on the job offer, employment terms, and next steps.",
    chips: ["Interviews", "Trade tests", "Skill assessments"],
  },
  {
    number: "04",
    Icon: ClipboardCheck,
    title: "Documentation & Pre-Departure Support",
    description:
      "Our team assists successful candidates with the required documentation, including employment paperwork, visa guidance, medical requirements, and pre-departure preparation, so you understand every stage before you depart.",
    chips: ["Employment paperwork", "Visa guidance", "Medical requirements"],
  },
  {
    number: "05",
    Icon: PlaneTakeoff,
    title: "Travel & Start Your New Job",
    description:
      "After all approvals and documentation are completed, you'll travel to your destination country and begin your new role with your overseas employer. Our team stays available throughout the deployment process.",
    chips: ["Final approvals", "Travel arrangements", "Ongoing support"],
  },
];

const TRUST_POINTS: string[] = [
  "Clear communication at every stage",
  "Procedures explained upfront, not after",
  "You know what to expect before you commit",
];

export default function HowItWorks() {
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
      {/* Header                                                            */}
      {/* ----------------------------------------------------------------- */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--cw-orange)]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 sm:pt-28 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--cw-line)] bg-[var(--cw-bg-warm)] px-4 py-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-[var(--cw-orange)]" aria-hidden="true" />
            <span className="cw-mono text-xs font-medium uppercase tracking-wider text-[var(--cw-orange-deep)]">
              The Recruitment Journey
            </span>
          </div>

          <h2 className="cw-display mt-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            How it works
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--cw-ink-soft)]">
            Finding an overseas job through Blitz World Immigration is simple, transparent,
            and designed to support you at every stage of the recruitment process.
          </p>

          {/* Transparency notice */}
          <div className="mt-8 flex max-w-2xl gap-4 rounded-2xl border border-[var(--cw-line)] border-l-4 border-l-[var(--cw-orange)] bg-[var(--cw-orange-light)]/40 p-5">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-[var(--cw-orange-deep)]" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-[var(--cw-ink)]">
              <span className="font-semibold">Important: </span>
              our recruitment process is transparent, and eligible candidates are
              guided through every step with clear information about requirements,
              documentation, and deployment procedures. We believe workers should
              understand the process before making any commitments.
            </p>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Step timeline — flight path                                      */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-20 lg:px-8">
        <div className="relative">
          <div
            className="absolute bottom-2 left-6 top-2 w-0 border-l-2 border-dashed border-[var(--cw-line)] sm:left-7"
            aria-hidden="true"
          />

          <ol className="relative space-y-8">
            {STEPS.map((step) => (
              <li key={step.number} className="relative flex gap-5 sm:gap-7">
                <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 border-[var(--cw-orange)] bg-white sm:h-14 sm:w-14">
                  <span className="cw-mono cw-display text-sm font-bold text-[var(--cw-orange-deep)] sm:text-base">
                    {step.number}
                  </span>
                </div>

                <div className="flex-1 rounded-2xl border border-[var(--cw-line)] bg-[var(--cw-bg-warm)] p-6 sm:p-7">
                  <div className="flex items-center gap-2">
                    <step.Icon className="h-4 w-4 text-[var(--cw-orange)]" aria-hidden="true" />
                    <span className="cw-mono text-xs font-semibold uppercase tracking-wider text-[var(--cw-orange-deep)]">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="cw-display mt-2 text-lg font-semibold sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--cw-ink-soft)] sm:text-base">
                    {step.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {step.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-md border border-[var(--cw-line)] bg-white px-2 py-1 text-xs font-medium text-[var(--cw-ink-soft)]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Transparency statement                                            */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-2xl border border-[var(--cw-line)] bg-white p-8 sm:p-10">
          <h2 className="cw-display text-2xl font-bold sm:text-3xl">
            A transparent recruitment process
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--cw-ink-soft)]">
            We understand that one of the biggest concerns for workers is
            understanding the recruitment process and any associated requirements.
            That&apos;s why we provide clear communication at every stage, explain
            all necessary procedures upfront, and make sure candidates know exactly
            what to expect before moving forward.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
            {TRUST_POINTS.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 flex-none text-[var(--cw-orange)]" aria-hidden="true" />
                <span className="text-sm font-medium text-[var(--cw-ink)]">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}