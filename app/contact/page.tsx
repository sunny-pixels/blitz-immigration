"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Search,
  Building2,
  Send,
  ChevronDown,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

/**
 * Contact — page.tsx
 * -----------------------------------------------------------------------
 * Place at: app/contact/page.tsx
 *
 * Same design tokens as the rest of the site (white background, orange
 * accent, Space Grotesk / Inter / JetBrains Mono). Client component
 * because of the enquiry form, the job-seeker/employer toggle, and the
 * FAQ accordion.
 *
 * Layout order (as specified): Hero → Contact Information →
 * Worker/Employer Selection → Contact Form → Recruitment Support →
 * FAQ → Google Map → Final CTA → SEO content block.
 *
 * Things to wire up before shipping:
 * - The enquiry form's `handleSubmit` currently just simulates a
 *   successful send (no network call). Point it at your real endpoint
 *   or server action.
 * - The map iframe uses a no-API-key Google Maps embed built from the
 *   office address. Swap in your exact "Share > Embed a map" src from
 *   Google Maps for a precise pin.
 * - The final CTA is built to use /hero.png as a background image with
 *   a dark overlay, per spec ("dark section using your hero.png"). If
 *   that file isn't in /public yet, the section still renders correctly
 *   on the dark gradient fallback alone — just drop the image in once
 *   it's ready.
 */

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const STATS = [
  { value: "1,200+", label: "Workers Placed" },
  { value: "80+", label: "Employer Partners" },
  { value: "15+", label: "Countries Served" },
  { value: "8 Years", label: "Industry Experience" },
];

const CONTACT_INFO = [
  {
    Icon: Phone,
    label: "Phone",
    lines: ["+91 98765 43210"],
  },
  {
    Icon: Mail,
    label: "Email",
    lines: ["info@blitzimmigration.com", "support@blitzimmigration.com"],
  },
  {
    Icon: Clock,
    label: "Business Hours",
    lines: ["Monday – Saturday", "9:00 AM – 6:00 PM"],
  },
  {
    Icon: MapPin,
    label: "Registered Office",
    lines: [
      "B 420, 4th Floor, Shalin Square",
      "Near Hathijan Circle",
      "Vinzol",
      "Ahmedabad, Gujarat - 382445",
      "India",
    ],
  },
];

const OFFICE_ADDRESS =
  "B 420 4th Floor Shalin Square, Nr. Hathijan Circle, Vinzol, Ahmedabad - 382445";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  OFFICE_ADDRESS,
)}&output=embed`;

interface Panel {
  id: string;
  Icon: typeof Search;
  title: string;
  description: string;
  items: string[];
  buttonLabel: string;
  href: string;
}

const PANELS: Panel[] = [
  {
    id: "jobseeker",
    Icon: Search,
    title: "I'm Looking for a Job",
    description: "For workers interested in overseas opportunities.",
    items: [
      "Explore international vacancies",
      "Ask about requirements",
      "Check application status",
      "Get documentation guidance",
      "Speak with recruitment advisors",
    ],
    buttonLabel: "Apply for Overseas Jobs",
    href: "/jobs",
  },
  {
    id: "employer",
    Icon: Building2,
    title: "I'm Hiring from India",
    description: "For employers sourcing skilled manpower.",
    items: [
      "Skilled manpower recruitment",
      "Bulk hiring solutions",
      "Industry-specific staffing",
      "Candidate sourcing",
      "Workforce planning support",
    ],
    buttonLabel: "Request Talent",
    href: "/employers",
  },
];

const SUPPORT_ITEMS = [
  "Overseas job opportunities",
  "Documentation requirements",
  "Employer interviews",
  "Trade tests",
  "Visa guidance",
  "Pre-departure preparation",
  "General recruitment enquiries",
];

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: "pay-to-apply",
    question: "Do I need to pay to apply?",
    answer:
      "Applying for overseas job opportunities through Blitz World Immigration is straightforward and transparent. Any costs, requirements, or employer-specific conditions are always communicated clearly before you proceed, so there are no surprises.",
  },
  {
    id: "timeline",
    question: "How long does recruitment take?",
    answer:
      "The timeline varies depending on the employer, destination country, visa processing requirements, and job role. Our team keeps you informed at every stage and shares updates as milestones are completed.",
  },
  {
    id: "documents",
    question: "What documents are required?",
    answer:
      "Commonly requested documents include an updated resume, valid passport, passport-size photographs, educational and experience certificates, and trade certificates or licenses for skilled positions. Our team will confirm exact requirements for your chosen opportunity.",
  },
  {
    id: "countries",
    question: "Which countries do you recruit for?",
    answer:
      "Blitz World Immigration helps Indian workers access overseas employment opportunities across Europe, the UK, Canada, Australia, New Zealand, the Maldives, the Philippines, and other international destinations. Available countries and vacancies are updated regularly based on active recruitment campaigns and employer demand.",
  },
  {
    id: "employer-request",
    question: "How can employers request manpower?",
    answer:
      "Employers can reach out through this page or the enquiry form below with their staffing requirements. Our team will follow up to discuss candidate sourcing, screening, and workforce planning support.",
  },
];

const SEO_KEYWORDS_PARAGRAPHS = [
  "Blitz World Immigration is an MEA-licensed overseas recruitment company connecting Indian workers with verified international employers across the UAE, Saudi Arabia, Qatar, Kuwait, Oman, Europe, and Asia Pacific. We support both job seekers and employers through transparent recruitment processes, documentation assistance, and workforce solutions.",
  "As a leading overseas recruitment agency in India, we work with candidates from across the country while operating from our registered office in Ahmedabad, Gujarat. Whether you're searching for a trusted overseas jobs consultant to guide your application or an established manpower recruitment partner in Ahmedabad to manage end-to-end documentation, our recruitment team is built to support you at every stage.",
  "For businesses abroad, Blitz World Immigration offers a reliable way to hire Indian workers across construction, healthcare, hospitality, manufacturing, logistics, and skilled trades. As an international recruitment agency with verified employer partners across 15+ destination countries, we combine candidate screening, compliance, and pre-departure support to help organizations build dependable overseas workforces.",
];

// ---------------------------------------------------------------------------
// Enquiry form
// ---------------------------------------------------------------------------

interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  country: string;
  role: "jobseeker" | "employer";
  subject: string;
  message: string;
}

const INITIAL_FORM: EnquiryFormData = {
  fullName: "",
  phone: "",
  email: "",
  country: "",
  role: "jobseeker",
  subject: "",
  message: "",
};

function EnquiryForm({
  requestedRole,
}: {
  requestedRole: "jobseeker" | "employer" | null;
}) {
  const [form, setForm] = useState<EnquiryFormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  // When a panel button sets a requested role, apply it without touching
  // anything else the person may have already typed into the form.
  useEffect(() => {
    if (requestedRole) {
      setForm((prev) => ({ ...prev, role: requestedRole }));
    }
  }, [requestedRole]);

  const update =
    (field: keyof EnquiryFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: replace with a real network call / server action.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-[var(--cw-line)] bg-[var(--cw-bg-warm)] px-8 py-16 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cw-orange-light)]">
          <CheckCircle2
            className="h-6 w-6 text-[var(--cw-orange-deep)]"
            aria-hidden="true"
          />
        </div>
        <h3 className="cw-display mt-4 text-xl font-semibold">
          Enquiry received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-[var(--cw-ink-soft)]">
          Thank you, {form.fullName.split(" ")[0] || "there"}. Our recruitment
          team will get back to you shortly at {form.email || "your email"}.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(INITIAL_FORM);
            setSubmitted(false);
          }}
          className="mt-6 text-sm font-semibold text-[var(--cw-orange-deep)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:rounded-sm"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-[var(--cw-line)] bg-white px-4 py-3 text-sm text-[var(--cw-ink)] placeholder:text-[var(--cw-ink-soft)]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--cw-ink-soft)]"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={update("fullName")}
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--cw-ink-soft)]"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={update("phone")}
            placeholder="+91 98765 43210"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--cw-ink-soft)]"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="country"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--cw-ink-soft)]"
          >
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            required
            value={form.country}
            onChange={update("country")}
            placeholder="India"
            className={inputClasses}
          />
        </div>
      </div>

      <fieldset>
        <legend className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[var(--cw-ink-soft)]">
          I Am
        </legend>
        <div className="flex gap-3">
          {(["jobseeker", "employer"] as const).map((role) => (
            <label
              key={role}
              className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                form.role === role
                  ? "border-[var(--cw-orange)] bg-[var(--cw-orange-light)] text-[var(--cw-orange-deep)]"
                  : "border-[var(--cw-line)] bg-white text-[var(--cw-ink-soft)] hover:border-[var(--cw-orange)]"
              }`}
            >
              <input
                type="radio"
                name="role"
                value={role}
                checked={form.role === role}
                onChange={() => setForm((prev) => ({ ...prev, role }))}
                className="sr-only"
              />
              {role === "jobseeker" ? "Job Seeker" : "Employer"}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--cw-ink-soft)]"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={form.subject}
          onChange={update("subject")}
          placeholder="What's this about?"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--cw-ink-soft)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us a bit about your requirements..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-[var(--cw-orange)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--cw-orange-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:ring-offset-2"
      >
        Send Enquiry
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}

// ---------------------------------------------------------------------------
// FAQ row
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
        aria-expanded={isOpen}
        aria-controls={`contact-faq-${item.id}`}
        onClick={() => onToggle(item.id)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:ring-offset-2"
      >
        <span className="cw-display text-sm font-semibold sm:text-base">
          {item.question}
        </span>
        <ChevronDown
          className={`h-4 w-4 flex-none text-[var(--cw-orange)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={`contact-faq-${item.id}`}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--cw-ink-soft)] sm:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ContactPage() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const [requestedRole, setRequestedRole] = useState<
    "jobseeker" | "employer" | null
  >(null);

  const scrollToForm = (role?: "jobseeker" | "employer") => {
    if (role) setRequestedRole(role);
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

        @media (prefers-reduced-motion: reduce) {
          .cw-root * { transition: none !important; animation: none !important; }
        }
      `}</style>

      {/* ----------------------------------------------------------------- */}
      {/* 1. Hero                                                           */}
      {/* ----------------------------------------------------------------- */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--cw-orange)]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--cw-line)] bg-[var(--cw-bg-warm)] px-4 py-1.5">
            <ShieldCheck
              className="h-3.5 w-3.5 text-[var(--cw-orange)]"
              aria-hidden="true"
            />
            <span className="cw-mono text-xs font-medium uppercase tracking-wider text-[var(--cw-orange-deep)]">
              Get in Touch
            </span>
          </div>

          <h1 className="cw-display mt-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s start the conversation
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--cw-ink-soft)]">
            Whether you&apos;re looking for overseas employment opportunities or
            seeking skilled manpower from India, our team is ready to help.
            Reach out to discuss your requirements, ask questions, or begin your
            recruitment journey.
          </p>

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
      {/* 2. Contact Information — pure content, no cards                  */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <h2 className="cw-display text-2xl font-bold sm:text-3xl">
          Get in touch
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-[var(--cw-line)] pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_INFO.map(({ Icon, label, lines }) => (
            <div key={label}>
              <div className="flex items-center gap-2">
                <Icon
                  className="h-4 w-4 text-[var(--cw-orange)]"
                  aria-hidden="true"
                />
                <span className="cw-mono text-xs font-semibold uppercase tracking-wider text-[var(--cw-ink-soft)]">
                  {label}
                </span>
              </div>
              <div className="mt-2.5 space-y-0.5">
                {lines.map((line) => (
                  <p
                    key={line}
                    className="text-sm font-medium leading-relaxed text-[var(--cw-ink)]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 3. Choose How We Can Help — two large panels                     */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <h2 className="cw-display text-2xl font-bold sm:text-3xl">
          Choose how we can help
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PANELS.map((panel) => (
            <div
              key={panel.id}
              className="flex flex-col rounded-3xl border border-[var(--cw-line)] bg-[var(--cw-bg-warm)] p-8 sm:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cw-orange-light)]">
                <panel.Icon
                  className="h-5 w-5 text-[var(--cw-orange-deep)]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="cw-display mt-5 text-xl font-bold sm:text-2xl">
                {panel.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--cw-ink-soft)]">
                {panel.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {panel.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 flex-none text-[var(--cw-orange)]"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[var(--cw-ink)]">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() =>
                  scrollToForm(
                    panel.id === "jobseeker" ? "jobseeker" : "employer",
                  )
                }
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--cw-orange)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--cw-orange-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:ring-offset-2"
              >
                {panel.buttonLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 4. Send an Enquiry Form                                           */}
      {/* ----------------------------------------------------------------- */}
      <div
        id="contact-form"
        className="mx-auto max-w-3xl scroll-mt-20 px-6 pb-20 lg:px-8"
      >
        <h2 className="cw-display text-2xl font-bold sm:text-3xl">
          Send an enquiry
        </h2>
        <p className="mt-2 text-[var(--cw-ink-soft)]">
          Fill in the form below and our recruitment team will get back to you.
        </p>

        <div className="mt-8 rounded-3xl border border-[var(--cw-line)] bg-white p-6 sm:p-8">
          <EnquiryForm requestedRole={requestedRole} />
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 5. Overseas Recruitment Support — content-heavy                  */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="cw-display text-2xl font-bold sm:text-3xl">
              Need guidance before applying?
            </h2>
            <p className="mt-4 text-[var(--cw-ink-soft)]">
              Our recruitment team can assist with every stage of the journey —
              from your first question to your first day on the job abroad.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-x-6 gap-y-4 border-t border-[var(--cw-line)] pt-6 sm:grid-cols-2">
            {SUPPORT_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  className="mt-2.5 h-1 w-1 flex-none rounded-full bg-[var(--cw-orange)]"
                  aria-hidden="true"
                />
                <span className="text-[var(--cw-ink-soft)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 6. FAQ — 5 questions                                              */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-3xl px-6 pb-20 lg:px-8">
        <h2 className="cw-display text-2xl font-bold sm:text-3xl">
          Frequently asked questions
        </h2>

        <div className="mt-6 space-y-3">
          {FAQS.map((item) => (
            <FAQRow
              key={item.id}
              item={item}
              isOpen={openFaqId === item.id}
              onToggle={(id) =>
                setOpenFaqId((prev) => (prev === id ? null : id))
              }
            />
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 7. Office Location — map                                         */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <h2 className="cw-display text-2xl font-bold sm:text-3xl">
          Visit our office
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr]">
          <div className="flex items-start gap-3 rounded-2xl border border-[var(--cw-line)] bg-[var(--cw-bg-warm)] p-6">
            <MapPin
              className="mt-0.5 h-5 w-5 flex-none text-[var(--cw-orange)]"
              aria-hidden="true"
            />
            <div className="space-y-0.5 text-sm font-medium leading-relaxed text-[var(--cw-ink)]">
              <p>B 420, 4th Floor, Shalin Square</p>
              <p>Near Hathijan Circle, Vinzol</p>
              <p>Ahmedabad, Gujarat - 382445</p>
              <p>India</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--cw-line)]">
            <iframe
              title="Blitz World Immigration office location"
              src={MAP_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 280 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 8. Final CTA — dark section                                      */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--cw-ink)] px-8 py-16 sm:px-14 sm:py-20">
          {/* Background image layer — replace/confirm /hero.png exists in /public.
              Falls back gracefully to the dark bg-[var(--cw-ink)] above if missing. */}
          <img
            src="/hero.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cw-ink)]/95 via-[var(--cw-ink)]/85 to-[var(--cw-orange-deep)]/40" />

          <div className="relative max-w-2xl">
            <h2 className="cw-display text-3xl font-bold text-white sm:text-4xl">
              Ready to take the next step?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Whether you&apos;re pursuing a career abroad or searching for
              qualified talent from India, Blitz World Immigration is ready to assist.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--cw-orange)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--cw-orange-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cw-orange)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cw-ink)]"
              >
                Apply Now
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={() => scrollToForm()}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cw-ink)]"
              >
                Contact Recruitment Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* SEO content block                                                 */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
        <div className="border-t border-[var(--cw-line)] pt-10">
          <h2 className="cw-display text-xl font-bold sm:text-2xl">
            Overseas Recruitment &amp; Manpower Solutions
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--cw-ink-soft)]">
            {SEO_KEYWORDS_PARAGRAPHS.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
