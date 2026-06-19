"use client";

import { useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  HelpCircle,
  ShieldCheck,
  UserCheck,
  ClipboardList,
  FileCheck2,
  ChevronDown,
  Search,
  X,
  PhoneCall,
} from "lucide-react";

/**
 * FAQSection
 * -----------------------------------------------------------------------
 * "Frequently Asked Questions" section. Same design tokens as the other
 * sections, but the signature here is functional rather than decorative:
 * questions are grouped into real categories (not a flat list, and not
 * numbered, since order doesn't carry meaning here), with a search box
 * and category filter on top of an accordion. Includes FAQPage JSON-LD
 * for SEO.
 *
 * Setup notes:
 * - This is a client component (`useState` for search/filter/accordion
 *   state), unlike the other three sections.
 * - Fonts are inline `@import` for drop-in convenience; swap for
 *   `next/font` in your root layout for production.
 */

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  list?: string[];
  note?: string;
}

interface FAQCategory {
  id: string;
  label: string;
  Icon: LucideIcon;
  items: FAQItem[];
}

const CATEGORIES: FAQCategory[] = [
  {
    id: "trust",
    label: "Costs & Trust",
    Icon: ShieldCheck,
    items: [
      {
        id: "pay-to-apply",
        question: "Do I have to pay to apply for jobs through Blitz Immigration?",
        answer:
          "Applying for overseas job opportunities through Blitz Immigration is straightforward and transparent. Any costs, requirements, or employer-specific conditions are always communicated clearly before you proceed, so there are no surprises.",
      },
      {
        id: "genuine-jobs",
        question: "How do I know the job opportunity is genuine?",
        answer:
          "Blitz Immigration works with verified employers and recruitment partners to connect candidates with legitimate overseas opportunities. Before moving forward, you'll receive information about the employer, job role, employment terms, and recruitment process so you can make an informed decision.",
      },
    ],
  },
  {
    id: "eligibility",
    label: "Eligibility & Skills",
    Icon: UserCheck,
    items: [
      {
        id: "english",
        question: "Do I need to speak English to work abroad?",
        answer:
          "Language requirements depend on the job role, employer, and destination country. Many positions need only basic communication skills, while others call for conversational or professional-level English, and some roles value additional languages depending on the destination. If a position requires specific language skills, this is explained clearly during recruitment.",
      },
      {
        id: "freshers",
        question: "Can freshers apply for overseas jobs?",
        answer:
          "Yes. Some employers look for candidates with prior experience, while others welcome entry-level workers and first-time international employees. What's available depends on the employer's requirements, the job category, and the destination country.",
      },
    ],
  },
  {
    id: "process",
    label: "The Application Process",
    Icon: ClipboardList,
    items: [
      {
        id: "timeline",
        question: "How long does the recruitment process take?",
        answer:
          "The timeline varies depending on the employer, destination country, visa processing requirements, and job role. Some positions move quickly, while others need additional documentation, interviews, trade tests, or government approvals. Our team keeps you informed at every stage and shares updates as milestones are completed.",
      },
      {
        id: "after-submit",
        question: "What happens after I submit my application?",
        answer:
          "Once we receive your application, our recruitment team reviews your profile and qualifications. If your experience matches an available position, you may be contacted for further screening, interviews, skill assessments, or employer selection procedures depending on the role.",
      },
      {
        id: "not-selected",
        question: "What if I am not selected for a particular job?",
        answer:
          "Not being selected for one position doesn't rule you out of future opportunities. Your profile stays in our candidate database and can be reviewed for other vacancies that match your skills and experience.",
      },
      {
        id: "employer-changes",
        question: "What happens if an employer changes plans or does not proceed with hiring?",
        answer:
          "International recruitment can depend on employer requirements, project timelines, government approvals, visa regulations, and market conditions. If an employer postpones, modifies, or cancels a requirement, our team will communicate the update promptly and, where possible, help identify alternative opportunities that match your profile.",
      },
      {
        id: "how-to-apply",
        question: "How can I apply for overseas jobs?",
        answer:
          "You can browse current openings on our website and submit your application online. Our recruitment team will review your profile and contact eligible candidates about suitable opportunities and next steps.",
      },
    ],
  },
  {
    id: "documents",
    label: "Documents & Destinations",
    Icon: FileCheck2,
    items: [
      {
        id: "documents-needed",
        question: "What documents do I need to apply?",
        answer:
          "Requirements may vary by employer and destination country, but commonly requested documents include:",
        list: [
          "Updated resume or CV",
          "Valid passport",
          "Passport-size photographs",
          "Educational certificates",
          "Experience certificates (if applicable)",
          "Trade certificates or licenses (for skilled positions)",
          "Identity proof and supporting documents",
        ],
        note: "Our recruitment team will advise you on the specific requirements for your chosen opportunity.",
      },
      {
        id: "pre-departure",
        question: "Will Blitz Immigration assist with documentation and pre-departure guidance?",
        answer:
          "Yes. Successful candidates receive guidance on required documentation, employment paperwork, visa-related procedures, medical requirements, and pre-departure preparation, based on what the employer and destination country require.",
      },
      {
        id: "countries",
        question: "Which countries does Blitz Immigration recruit for?",
        answer:
          "We regularly connect Indian workers with opportunities across Europe, the UK, Canada, Australia, New Zealand, and other international destinations. Available countries and job openings may change based on employer demand and active recruitment campaigns.",
      },
    ],
  },
];

const ALL_ITEMS = CATEGORIES.flatMap((cat) => cat.items);

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.list
        ? `${item.answer} ${item.list.join(", ")}. ${item.note ?? ""}`.trim()
        : item.answer,
    },
  })),
};

// ---------------------------------------------------------------------------
// Accordion row
// ---------------------------------------------------------------------------

function FAQRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--cw-line)] bg-[var(--cw-bg-warm)]">
      <button
        type="button"
        id={`faq-button-${item.id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${item.id}`}
        onClick={() => onToggle(item.id)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:ring-offset-2"
      >
        <span className="cw-display text-sm font-semibold sm:text-base">
          {item.question}
        </span>
        <ChevronDown
          className={`h-4 w-4 flex-none text-[var(--cw-orange)] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`faq-panel-${item.id}`}
        role="region"
        aria-labelledby={`faq-button-${item.id}`}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-sm leading-relaxed text-[var(--cw-ink-soft)] sm:text-base">
            <p>{item.answer}</p>
            {item.list && (
              <ul className="mt-3 space-y-1.5">
                {item.list.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--cw-orange)]" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            )}
            {item.note && (
              <p className="mt-3 text-xs text-[var(--cw-ink-soft)]/80">{item.note}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function FAQSection() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));

  const normalizedQuery = query.trim().toLowerCase();

  const visibleCategories = CATEGORIES.filter(
    (cat) => activeCategory === "all" || cat.id === activeCategory
  )
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          normalizedQuery === "" ||
          item.question.toLowerCase().includes(normalizedQuery) ||
          item.answer.toLowerCase().includes(normalizedQuery)
      ),
    }))
    .filter((cat) => cat.items.length > 0);

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

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />

      {/* ----------------------------------------------------------------- */}
      {/* Header                                                            */}
      {/* ----------------------------------------------------------------- */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--cw-orange)]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 sm:pt-28 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--cw-line)] bg-[var(--cw-bg-warm)] px-4 py-1.5">
            <HelpCircle className="h-3.5 w-3.5 text-[var(--cw-orange)]" aria-hidden="true" />
            <span className="cw-mono text-xs font-medium uppercase tracking-wider text-[var(--cw-orange-deep)]">
              Common Questions
            </span>
          </div>

          <h2 className="cw-display mt-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Frequently asked questions
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--cw-ink-soft)]">
            Straight answers about costs, documents, eligibility, and what happens
            after you apply. Search below or browse by topic.
          </p>

          {/* Search */}
          <div className="relative mt-8 max-w-md">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--cw-ink-soft)]"
              aria-hidden="true"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions..."
              aria-label="Search frequently asked questions"
              className="w-full rounded-full border border-[var(--cw-line)] bg-white py-3 pl-11 pr-10 text-sm placeholder:text-[var(--cw-ink-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)]"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--cw-ink-soft)] hover:text-[var(--cw-orange-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:rounded-full"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Category filter */}
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                activeCategory === "all"
                  ? "bg-[var(--cw-orange)] text-white"
                  : "border border-[var(--cw-line)] bg-white text-[var(--cw-ink-soft)] hover:border-[var(--cw-orange)] hover:text-[var(--cw-orange-deep)]"
              }`}
            >
              All questions
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? "bg-[var(--cw-orange)] text-white"
                    : "border border-[var(--cw-line)] bg-white text-[var(--cw-ink-soft)] hover:border-[var(--cw-orange)] hover:text-[var(--cw-orange-deep)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Categorized accordion                                            */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-4xl px-6 pt-14 pb-16 lg:px-8">
        {visibleCategories.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[var(--cw-line)] bg-[var(--cw-bg-warm)] p-10 text-center">
            <p className="cw-display text-lg font-semibold">No matching questions</p>
            <p className="mt-2 text-sm text-[var(--cw-ink-soft)]">
              Try a different search term, or browse all questions instead.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCategory("all");
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--cw-orange)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--cw-orange-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:ring-offset-2"
            >
              Reset filters
            </button>
          </div>
        ) : (
          visibleCategories.map((cat, index) => (
            <div key={cat.id} className={index === 0 ? "" : "mt-12"}>
              <div className="flex items-center gap-2">
                <cat.Icon className="h-4 w-4 text-[var(--cw-orange)]" aria-hidden="true" />
                <h3 className="cw-display text-lg font-semibold sm:text-xl">{cat.label}</h3>
                <span className="cw-mono text-xs text-[var(--cw-ink-soft)]">
                  ({cat.items.length})
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {cat.items.map((item) => (
                  <FAQRow
                    key={item.id}
                    item={item}
                    isOpen={!!openIds[item.id]}
                    onToggle={toggle}
                  />
                ))}
              </div>
            </div>
          ))
        )}

        {/* Soft closing CTA — no banner here, just a quiet handoff */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[var(--cw-line)] bg-white p-6">
          <p className="text-sm text-[var(--cw-ink-soft)]">
            Still have questions about applying or documentation?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--cw-line)] px-5 py-2.5 text-sm font-semibold text-[var(--cw-ink)] transition-colors hover:border-[var(--cw-orange)] hover:text-[var(--cw-orange-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:ring-offset-2"
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            Talk to a recruiter
          </Link>
        </div>
      </div>
    </section>
  );
}