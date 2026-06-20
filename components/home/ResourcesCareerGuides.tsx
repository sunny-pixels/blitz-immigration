"use client";

import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

/* ─── DATA ──────────────────────────────────────────────────────── */

const FEATURED = [
  {
    category: "Visa Guide",
    categoryStyle: "bg-[var(--cw-orange-light)] text-[var(--cw-orange-deep)]",
    readTime: "6 min read",
    title: "Visa & Work Permit Guides for Indian Workers",
    excerpt:
      "Documentation, medical exams, and work permit procedures for the most popular overseas destinations — Europe, Canada, Australia, and New Zealand.",
    href: "/resources/visa-guides",
    illustrationBg: "var(--cw-bg-warm)",
    IllustrationSvg: VisaIllustration,
  },
  {
    category: "Salary Guide",
    categoryStyle: "bg-[#E1F5EE] text-[#0F6E56]",
    readTime: "8 min read",
    title: "Salary Guides by Country & Industry Role",
    excerpt:
      "Explore realistic earning ranges across nursing, construction, hospitality, and IT roles — by country — before you apply.",
    href: "/resources/salary-guides",
    illustrationBg: "#E1F5EE",
    IllustrationSvg: SalaryIllustration,
  },
  {
    category: "Country Guide",
    categoryStyle: "bg-[#E6F1FB] text-[#185FA5]",
    readTime: "10 min read",
    title: "Country Career Guides: What to Expect Abroad",
    excerpt:
      "Industry demand, workplace culture, accommodation, and growth prospects — country-by-country breakdowns for informed decisions.",
    href: "/resources/country-guides",
    illustrationBg: "#E6F1FB",
    IllustrationSvg: CountryIllustration,
  },
];

const ARTICLES = [
  { title: "Complete Guide to Working Abroad from India", tag: "Visa Guide", tagStyle: "bg-[var(--cw-orange-light)] text-[var(--cw-orange-deep)]", href: "/resources/complete-guide" },
  { title: "Documents Required for Overseas Employment", tag: "Visa Guide", tagStyle: "bg-[var(--cw-orange-light)] text-[var(--cw-orange-deep)]", href: "/resources/documents-required" },
  { title: "UK vs Canada: Salary and Career Comparison", tag: "Salary", tagStyle: "bg-[#E1F5EE] text-[#0F6E56]", href: "/resources/uk-vs-canada" },
  { title: "Top Countries Hiring Skilled Workers from India", tag: "Country", tagStyle: "bg-[#E6F1FB] text-[#185FA5]", href: "/resources/top-countries" },
  { title: "How to Prepare for an International Job Interview", tag: "Job Tips", tagStyle: "bg-[#EEEDFE] text-[#534AB7]", href: "/resources/interview-tips" },
  { title: "Understanding Overseas Employment Contracts", tag: "Job Tips", tagStyle: "bg-[#EEEDFE] text-[#534AB7]", href: "/resources/employment-contracts" },
  { title: "Highest-Paying Overseas Jobs for Indian Workers", tag: "Salary", tagStyle: "bg-[#E1F5EE] text-[#0F6E56]", href: "/resources/highest-paying-jobs" },
  { title: "What to Expect During the Recruitment Process", tag: "Insight", tagStyle: "bg-[#FAEEDA] text-[#854F0B]", href: "/resources/recruitment-process" },
];

/* ─── ILLUSTRATIONS ─────────────────────────────────────────────── */

function VisaIllustration() {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="18" y="20" width="84" height="60" rx="8" fill="#FFE4CC" />
      <rect x="28" y="32" width="64" height="8" rx="4" fill="#EA5B0C" opacity=".25" />
      <rect x="28" y="46" width="48" height="6" rx="3" fill="#EA5B0C" opacity=".18" />
      <rect x="28" y="58" width="36" height="6" rx="3" fill="#EA5B0C" opacity=".12" />
      <circle cx="88" cy="30" r="14" fill="#EA5B0C" opacity=".15" />
      <path d="M83 30h10M88 25v10" stroke="#B6430A" strokeWidth="2" strokeLinecap="round" />
      <rect x="76" y="22" width="24" height="16" rx="4" fill="none" stroke="#B6430A" strokeWidth="1.5" />
    </svg>
  );
}

function SalaryIllustration() {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="14" y="60" width="14" height="28" rx="3" fill="#1D9E75" opacity=".3" />
      <rect x="34" y="44" width="14" height="44" rx="3" fill="#1D9E75" opacity=".45" />
      <rect x="54" y="32" width="14" height="56" rx="3" fill="#1D9E75" opacity=".6" />
      <rect x="74" y="20" width="14" height="68" rx="3" fill="#1D9E75" opacity=".8" />
      <rect x="94" y="12" width="14" height="76" rx="3" fill="#0F6E56" />
      <path d="M14 58 34 42 54 30 74 18 94 10" stroke="#0F6E56" strokeWidth="2" strokeDasharray="3 2" />
    </svg>
  );
}

function CountryIllustration() {
  return (
    <svg width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="65" cy="55" rx="38" ry="28" fill="#B5D4F4" opacity=".4" />
      <ellipse cx="65" cy="55" rx="24" ry="18" fill="#378ADD" opacity=".25" />
      <circle cx="65" cy="55" r="10" fill="#185FA5" opacity=".35" />
      <line x1="65" y1="27" x2="65" y2="83" stroke="#185FA5" strokeWidth="1" opacity=".4" />
      <line x1="27" y1="55" x2="103" y2="55" stroke="#185FA5" strokeWidth="1" opacity=".4" />
      <circle cx="65" cy="20" r="4" fill="#185FA5" opacity=".6" />
      <circle cx="103" cy="55" r="4" fill="#185FA5" opacity=".6" />
    </svg>
  );
}

/* ─── COMPONENT ─────────────────────────────────────────────────── */

export default function ResourcesCareerGuides() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');

        .rcg-root {
          --cw-bg-warm: #FFF8F1;
          --cw-ink: #1C1410;
          --cw-ink-soft: #6B5D52;
          --cw-orange: #EA5B0C;
          --cw-orange-deep: #B6430A;
          --cw-orange-light: #FFE4CC;
          --cw-line: #F0DFC9;
          font-family: 'Inter', sans-serif;
          color: var(--cw-ink);
        }

        .rcg-root .display { font-family: 'Space Grotesk', sans-serif; }
        .rcg-root .mono    { font-family: 'JetBrains Mono', monospace; font-variant-numeric: tabular-nums; }

        /* Card hover */
        .rcg-feat-card {
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }
        @media (hover: hover) {
          .rcg-feat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 14px 36px rgba(234,91,12,0.11);
            border-color: var(--cw-orange) !important;
          }
          .rcg-feat-card:hover .rcg-img-inner {
            transform: scale(1.07);
          }
          .rcg-feat-card:hover .rcg-card-cta {
            gap: 8px;
          }
        }

        .rcg-img-inner {
          transition: transform 0.36s ease;
        }

        /* Article row hover */
        .rcg-article-row {
          transition: background 0.13s ease;
        }
        @media (hover: hover) {
          .rcg-article-row:hover {
            background: var(--cw-bg-warm);
          }
          .rcg-article-row:hover .rcg-art-title {
            color: var(--cw-orange);
          }
        }

        .rcg-art-title {
          transition: color 0.13s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .rcg-feat-card, .rcg-img-inner, .rcg-article-row, .rcg-art-title { transition: none !important; }
        }
      `}</style>

      <section className="rcg-root relative bg-white overflow-hidden">

        {/* Decorative blob */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-28 h-[320px] w-[320px] rounded-full blur-3xl"
          style={{ background: "var(--cw-orange)", opacity: 0.06 }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 sm:pt-28 pb-20">

          {/* ── Header ──────────────────────────────────────────── */}
          <div className="mb-14 max-w-2xl">
            <span
              className="mono inline-block text-[10px] font-semibold uppercase tracking-widest rounded-full px-3 py-1 mb-5"
              style={{ background: "var(--cw-orange-light)", color: "var(--cw-orange-deep)" }}
            >
              Resources & Career Guides
            </span>

            <h2
              className="display text-4xl sm:text-5xl font-bold leading-tight mb-4"
              style={{ color: "var(--cw-ink)" }}
            >
              Plan smarter. Work abroad with confidence.
            </h2>

            <p className="text-lg leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
              Visa requirements, salary benchmarks, destination guides — everything Indian workers
              need before applying for an overseas job, in one place.
            </p>
          </div>

          {/* ── Featured cards ──────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {FEATURED.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="rcg-feat-card group flex flex-col rounded-2xl border overflow-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                style={{
                  borderColor: "var(--cw-line)",
                  background: "#ffffff",
                  // @ts-ignore
                  "--tw-ring-color": "var(--cw-orange)",
                }}
              >
                {/* Image / illustration */}
                <div
                  className="overflow-hidden flex-shrink-0"
                  style={{ height: 168 }}
                >
                  <div
                    className="rcg-img-inner w-full h-full flex items-center justify-center"
                    style={{ background: card.illustrationBg }}
                  >
                    <card.IllustrationSvg />
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Meta row */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`mono rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-wide ${card.categoryStyle}`}>
                      {card.category}
                    </span>
                    <span className="mono flex items-center gap-1 text-[10px] font-semibold" style={{ color: "var(--cw-ink-soft)" }}>
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {card.readTime}
                    </span>
                  </div>

                  <h3
                    className="display text-[15px] font-semibold leading-snug mb-2"
                    style={{ color: "var(--cw-ink)" }}
                  >
                    {card.title}
                  </h3>

                  <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--cw-ink-soft)" }}>
                    {card.excerpt}
                  </p>

                  <div
                    className="rcg-card-cta inline-flex items-center gap-1.5 mt-4 text-xs font-semibold transition-[gap]"
                    style={{ color: "var(--cw-orange-deep)" }}
                  >
                    Read guide
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ── Articles list ──────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-14 items-start">

            {/* Left copy column */}
            <div>
              <p
                className="mono text-[10px] font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--cw-ink-soft)" }}
              >
                Popular Articles
              </p>

              <h3
                className="display text-2xl font-bold leading-snug mb-3"
                style={{ color: "var(--cw-ink)" }}
              >
                Learn before you apply.
              </h3>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--cw-ink-soft)" }}>
                Our resource library is updated regularly with guides, salary data,
                and recruitment process walkthroughs.
              </p>

              {/* <Link
                href="/resources"
                className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-white px-5 py-2.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                style={{
                  background: "var(--cw-orange)",
                  // @ts-ignore
                  "--tw-ring-color": "var(--cw-orange)",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--cw-orange-deep)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--cw-orange)")}
              >
                Visit Resources Centre
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link> */}
            </div>

            {/* Right article list */}
            <div>
              {ARTICLES.map((article, i) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="rcg-article-row flex items-center gap-4 px-3 py-3.5 rounded-lg border-b focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:outline-none"
                  style={{
                    borderBottomColor: "var(--cw-line)",
                    // @ts-ignore
                    "--tw-ring-color": "var(--cw-orange)",
                  }}
                >
                  <span
                    className="mono text-[10px] font-semibold rounded flex-shrink-0 px-1.5 py-0.5 text-center"
                    style={{ background: "var(--cw-orange)", color: "#fff", minWidth: 28 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="rcg-art-title flex-1 text-sm font-medium leading-snug"
                    style={{ color: "var(--cw-ink)" }}
                  >
                    {article.title}
                  </span>

                  <span
                    className={`mono flex-shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${article.tagStyle}`}
                  >
                    {article.tag}
                  </span>
                </Link>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}