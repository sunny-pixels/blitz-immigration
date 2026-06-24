import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";

/**
 * About Us — page.tsx
 * -----------------------------------------------------------------------
 * Place at: app/about/page.tsx
 *
 * Built as a long-form editorial read rather than a stacked set of
 * marketing cards, per request: a narrow sticky section nav down the
 * left on desktop, a constrained reading column on the right, pull-quotes
 * for the two statements that carry the most weight, plain dot/divider
 * lists instead of boxed cards, and exactly one table (the metrics block,
 * the one place a table is the clearest format).
 *
 * Same design tokens as the other sections (white background, orange
 * accent, Space Grotesk / Inter / JetBrains Mono) so it sits naturally
 * next to CountriesWorkers, HowItWorks, SuccessStories, FAQSection, and
 * TrustBar — just with the decoration turned down and the reading
 * column turned up.
 */

const TOC = [
  { id: "our-story", number: "01", label: "Our Story" },
  { id: "what-we-do", number: "02", label: "What We Do" },
  { id: "why-workers-trust-us", number: "03", label: "Why Workers Trust Us" },
  { id: "why-employers-partner", number: "04", label: "Why Employers Partner" },
  { id: "our-process", number: "05", label: "Our Recruitment Process" },
  { id: "ethical-recruitment", number: "06", label: "Ethical Recruitment" },
  { id: "by-the-numbers", number: "07", label: "By the Numbers" },
  { id: "looking-ahead", number: "08", label: "Looking Ahead" },
];

const SECTORS = [
  "Healthcare & Nursing",
  "Construction & Skilled Trades",
  "Hospitality & Tourism",
  "Manufacturing & Production",
  "Logistics & Warehousing",
  "Transportation & Drivers",
  "Agriculture & Farming",
  "Information Technology",
  "Engineering & Technical Services",
  "Facility Management",
];

const TRUST_QUESTIONS = [
  "Is the opportunity genuine?",
  "What documents are required?",
  "How long will the process take?",
  "What happens after selection?",
  "Will I receive support throughout the process?",
];

const EMPLOYER_FOCUS = [
  "Candidate sourcing and screening",
  "Skill verification and assessment",
  "Workforce planning support",
  "Recruitment process management",
  "Documentation coordination",
  "Deployment assistance",
  "Long-term recruitment partnerships",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Job Opportunity Identification",
    description:
      "Candidates explore available opportunities based on their skills, experience, and destination preferences.",
  },
  {
    number: "02",
    title: "Application & Profile Review",
    description:
      "Applications are reviewed to determine suitability for available employer requirements.",
  },
  {
    number: "03",
    title: "Screening & Employer Selection",
    description:
      "Candidates may participate in interviews, trade tests, or assessments depending on the position.",
  },
  {
    number: "04",
    title: "Documentation & Preparation",
    description:
      "Successful candidates receive guidance regarding employment documentation, visa-related procedures, medical requirements, and pre-departure preparation.",
  },
  {
    number: "05",
    title: "Deployment & Ongoing Support",
    description:
      "Candidates travel to their destination country and begin employment with their overseas employer.",
  },
];

const COMMITMENTS = [
  "Transparency throughout the recruitment process",
  "Honest communication with workers and employers",
  "Compliance with applicable regulations",
  "Respect for candidate rights and dignity",
  "Professional recruitment standards",
  "Long-term relationships built on trust",
];

const METRICS = [
  { metric: "Workers Placed Globally", value: "1,200+" },
  { metric: "Total Placements", value: "5,000+" },
  { metric: "Verified Employer Partners", value: "80+" },
  { metric: "Destination Countries", value: "15+" },
  { metric: "Industry Experience", value: "8 Years" },
  { metric: "Sectors Served", value: "20+" },
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span
        className="mt-2.5 h-1 w-1 flex-none rounded-full bg-[var(--cw-orange)]"
        aria-hidden="true"
      />
      <span className="text-[var(--cw-ink-soft)]">{children}</span>
    </li>
  );
}

export default function AboutPage() {
  return (
    <main className="cw-root bg-white text-[var(--cw-ink)]">
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
        .cw-root p { line-height: 1.75; }

        @media (prefers-reduced-motion: reduce) {
          .cw-root * { transition: none !important; animation: none !important; }
        }
      `}</style>

      {/* ----------------------------------------------------------------- */}
      {/* Masthead                                                          */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-3xl px-6 pt-28 sm:pt-36 lg:px-8">
        <span className="cw-mono text-xs font-medium uppercase tracking-wider text-[var(--cw-orange-deep)]">
          About Blitz World Immigration
        </span>

        <h1 className="cw-display mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          Connecting Indian talent with global opportunities
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-[var(--cw-ink)]">
          Blitz World Immigration is a leading overseas recruitment and manpower
          placement company dedicated to helping skilled, semi-skilled, and
          professional workers from India build successful careers abroad.
        </p>

        <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
          We partner with verified international employers across the Middle
          East, Europe, Asia Pacific, and other global markets to connect
          qualified candidates with genuine employment opportunities in sectors
          such as construction, healthcare, hospitality, manufacturing,
          logistics, engineering, facility management, information technology,
          and skilled trades.
        </p>

        <blockquote className="my-8 border-l-4 border-[var(--cw-orange)] pl-6">
          <p className="cw-display text-xl font-semibold italic leading-snug sm:text-2xl">
            Our mission is simple: to create trusted pathways between Indian
            talent and international employers while maintaining transparency,
            compliance, and professionalism throughout the recruitment journey.
          </p>
        </blockquote>

        <p className="text-base leading-relaxed text-[var(--cw-ink-soft)]">
          As an overseas recruitment company, we understand that relocating for
          work is one of the most important decisions a person can make. It
          impacts careers, families, finances, and long-term goals. That is why
          we focus on providing clear guidance, honest communication, and
          end-to-end support from the first enquiry through to successful
          deployment.
        </p>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Nav + article body                                                */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          {/* Sticky section nav — desktop only */}
          <nav
            aria-label="Page sections"
            className="hidden border-t border-[var(--cw-line)] pt-6 lg:block lg:sticky lg:top-20 lg:h-fit"
          >
            <p className="cw-mono text-xs font-semibold uppercase tracking-wider text-[var(--cw-ink-soft)]">
              On this page
            </p>
            <ul className="mt-4 space-y-3">
              {TOC.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-baseline gap-2 text-sm text-[var(--cw-ink-soft)] transition-colors hover:text-[var(--cw-orange-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:rounded-sm"
                  >
                    <span className="cw-mono text-xs text-[var(--cw-line)]">
                      {item.number}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Article column */}
          <article className="max-w-2xl">
            {/* 01 — Our Story */}
            <section id="our-story" className="scroll-mt-24 border-t border-[var(--cw-line)] pt-10">
              <p className="cw-mono text-xs font-semibold text-[var(--cw-orange)]">01</p>
              <h2 className="cw-display mt-1 text-2xl font-bold sm:text-3xl">Our Story</h2>

              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Blitz World Immigration was founded with a vision to bridge the gap
                between global workforce demand and India&apos;s highly skilled
                talent pool.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Around the world, employers continue to face shortages of
                qualified workers across critical industries. At the same time,
                millions of capable Indian professionals and tradespeople seek
                better career opportunities, international exposure, and
                financial growth.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Recognizing this opportunity, Blitz World Immigration was established
                to connect these two needs through{" "}
                <strong className="font-semibold text-[var(--cw-ink)]">
                  ethical recruitment practices, employer verification,
                  candidate support, and regulatory compliance
                </strong>
                .
              </p>
              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Over the years, we have built strong relationships with
                employers across multiple countries and industries, helping
                thousands of candidates explore overseas opportunities while
                assisting businesses in sourcing reliable manpower from India.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Today, Blitz World Immigration continues to support workers and
                employers alike through a recruitment process built on{" "}
                <strong className="font-semibold text-[var(--cw-ink)]">
                  trust, transparency, and long-term success
                </strong>
                .
              </p>
            </section>

            {/* 02 — What We Do */}
            <section id="what-we-do" className="scroll-mt-24 mt-14 border-t border-[var(--cw-line)] pt-10">
              <p className="cw-mono text-xs font-semibold text-[var(--cw-orange)]">02</p>
              <h2 className="cw-display mt-1 text-2xl font-bold sm:text-3xl">What We Do</h2>

              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Blitz World Immigration specializes in international recruitment
                solutions for both workers and employers.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                For job seekers, we provide access to overseas employment
                opportunities with verified employers across multiple countries
                and industries. For employers, we provide manpower sourcing,
                candidate screening, workforce recruitment, and talent
                acquisition services designed to meet international hiring
                requirements.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Our recruitment services cover a wide range of sectors,
                including:
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {SECTORS.map((sector) => (
                  <Bullet key={sector}>{sector}</Bullet>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Whether an employer requires a single specialized professional
                or a large workforce deployment, our recruitment team works to
                identify candidates that meet the required skills, experience,
                and operational needs.
              </p>
            </section>

            {/* 03 — Why Workers Trust Us */}
            <section id="why-workers-trust-us" className="scroll-mt-24 mt-14 border-t border-[var(--cw-line)] pt-10">
              <p className="cw-mono text-xs font-semibold text-[var(--cw-orange)]">03</p>
              <h2 className="cw-display mt-1 text-2xl font-bold sm:text-3xl">
                Why Workers Trust Blitz World Immigration
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                One of the biggest concerns workers face when considering
                overseas employment is uncertainty — questions such as:
              </p>
              <ul className="mt-4 space-y-2">
                {TRUST_QUESTIONS.map((q) => (
                  <li key={q} className="italic text-[var(--cw-ink-soft)]">
                    &ldquo;{q}&rdquo;
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                At Blitz World Immigration, we believe{" "}
                <strong className="font-semibold text-[var(--cw-ink)]">
                  trust is earned through transparency
                </strong>
                . We provide candidates with clear information regarding job
                requirements, employer expectations, documentation procedures,
                and recruitment stages before they make any commitments.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Our team remains available to answer questions, provide
                updates, and guide candidates through every step of the
                process. Most importantly, we believe workers should understand
                the complete recruitment journey before moving forward,
                allowing them to make informed decisions about their future.
              </p>
            </section>

            {/* 04 — Why Employers Partner With Us */}
            <section id="why-employers-partner" className="scroll-mt-24 mt-14 border-t border-[var(--cw-line)] pt-10">
              <p className="cw-mono text-xs font-semibold text-[var(--cw-orange)]">04</p>
              <h2 className="cw-display mt-1 text-2xl font-bold sm:text-3xl">
                Why Employers Partner With Us
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Employers across the world choose Blitz World Immigration because of
                our commitment to quality recruitment and workforce
                reliability. International hiring requires more than simply
                filling vacancies — employers need candidates who possess the
                right skills, experience, work ethic, and adaptability to
                succeed in overseas environments.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Our recruitment approach focuses on:
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {EMPLOYER_FOCUS.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                By maintaining a strong talent network across India, we help
                employers access qualified manpower efficiently while reducing
                recruitment challenges and hiring timelines.
              </p>
            </section>

            {/* 05 — Our Recruitment Process */}
            <section id="our-process" className="scroll-mt-24 mt-14 border-t border-[var(--cw-line)] pt-10">
              <p className="cw-mono text-xs font-semibold text-[var(--cw-orange)]">05</p>
              <h2 className="cw-display mt-1 text-2xl font-bold sm:text-3xl">
                Our Recruitment Process
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Our process is designed to be transparent, structured, and
                efficient.
              </p>

              <div className="mt-6 divide-y divide-[var(--cw-line)]">
                {PROCESS_STEPS.map((step) => (
                  <div key={step.number} className="flex gap-5 py-5 first:pt-0">
                    <span className="cw-mono cw-display flex-none text-sm font-bold text-[var(--cw-orange)]">
                      {step.number}
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--cw-ink)]">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--cw-ink-soft)] sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Throughout the process, communication and transparency remain
                our highest priorities.
              </p>
            </section>

            {/* 06 — Ethical Recruitment */}
            <section id="ethical-recruitment" className="scroll-mt-24 mt-14 border-t border-[var(--cw-line)] pt-10">
              <p className="cw-mono text-xs font-semibold text-[var(--cw-orange)]">06</p>
              <h2 className="cw-display mt-1 text-2xl font-bold sm:text-3xl">
                Our Commitment to Ethical Recruitment
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                At Blitz World Immigration, we believe international recruitment
                should be conducted responsibly and ethically. We are committed
                to:
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {COMMITMENTS.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Our reputation is built on helping workers pursue international
                careers while assisting employers in building dependable global
                workforces.
              </p>
            </section>

            {/* 07 — By the Numbers */}
            <section id="by-the-numbers" className="scroll-mt-24 mt-14 border-t border-[var(--cw-line)] pt-10">
              <p className="cw-mono text-xs font-semibold text-[var(--cw-orange)]">07</p>
              <h2 className="cw-display mt-1 text-2xl font-bold sm:text-3xl">By the Numbers</h2>

              <table className="mt-6 w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-[var(--cw-orange)]">
                    <th scope="col" className="py-3 text-xs font-semibold uppercase tracking-wider text-[var(--cw-ink-soft)]">
                      Metric
                    </th>
                    <th scope="col" className="py-3 text-right text-xs font-semibold uppercase tracking-wider text-[var(--cw-ink-soft)]">
                      Achievement
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--cw-line)]">
                  {METRICS.map((row) => (
                    <tr key={row.metric}>
                      <td className="py-4 text-[var(--cw-ink)]">{row.metric}</td>
                      <td className="cw-mono py-4 text-right text-lg font-bold text-[var(--cw-orange-deep)]">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* 08 — Looking Ahead */}
            <section id="looking-ahead" className="scroll-mt-24 mt-14 border-t border-[var(--cw-line)] pt-10">
              <p className="cw-mono text-xs font-semibold text-[var(--cw-orange)]">08</p>
              <h2 className="cw-display mt-1 text-2xl font-bold sm:text-3xl">Looking Ahead</h2>

              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                As global demand for skilled manpower continues to grow, Blitz
                Immigration remains committed to expanding opportunities for
                Indian workers while strengthening partnerships with employers
                around the world.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Our goal is not simply to place candidates into jobs.{" "}
                <strong className="font-semibold text-[var(--cw-ink)]">
                  Our goal is to help individuals build better futures, support
                  businesses with dependable talent, and create successful
                  international employment relationships that benefit everyone
                  involved.
                </strong>
              </p>

              <p className="cw-display mt-10 text-3xl font-bold leading-tight sm:text-4xl">
                Your career beyond borders starts here.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--cw-ink-soft)]">
                Whether you are seeking overseas employment or looking to hire
                skilled manpower from India, Blitz World Immigration is ready to help
                you take the next step.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--cw-orange)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--cw-orange-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:ring-offset-2"
                >
                  Browse job openings
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--cw-line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--cw-ink)] transition-colors hover:border-[var(--cw-orange)] hover:text-[var(--cw-orange-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:ring-offset-2"
                >
                  <Building2 className="h-4 w-4" aria-hidden="true" />
                  Partner with us
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}