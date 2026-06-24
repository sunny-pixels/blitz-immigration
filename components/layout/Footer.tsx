"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ShieldCheck,
  FileCheck2,
  CheckCircle2,
  //   Facebook,
  //   Instagram,
  //   Linkedin,
  //   Youtube,
  MessageCircle,
  PlaneTakeoff,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Countries", href: "/countries" },
  // { label: "Employers", href: "/employers" },
  { label: "About Us", href: "/about" },
  // { label: "Success Stories", href: "/success-stories" },
  // { label: "Resources & Guides", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

const JOB_SEEKER_LINKS = [
  "Overseas Jobs",
  "Visa Guides",
  "Salary Guides",
  "Interview Tips",
  "Documentation Support",
  "Frequently Asked Questions",
];

const EMPLOYER_LINKS = [
  "Hire Talent",
  "Recruitment Solutions",
  "Industries We Serve",
  "Request Manpower",
  "Employer Enquiry",
];

const COMPLIANCE = [
  {
    label: "REGISTRATION",
    value: "BLZ-2026-78421",
  },
  {
    label: "LICENSE",
    value: "IND-REC-55489",
  },
  {
    label: "GST",
    value: "24AABCB1234K1ZP",
  },
];

const TERMINAL_INFO = [
  {
    label: "STATUS",
    value: "ACTIVE",
  },
  {
    label: "COUNTRIES",
    value: "15+",
  },
  {
    label: "SECTORS",
    value: "20+",
  },
  {
    label: "PLACEMENTS",
    value: "5000+",
  },
];

export default function Footer() {
  return (
    <footer className="cw-root relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.png')",
          }}
        />

        <div className="absolute inset-0 bg-black/90" />

        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--cw-orange)]/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Footer */}
        <div className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cw-orange)] backdrop-blur-sm">
                <PlaneTakeoff className="h-4 w-4" />
                Final Destination
              </div>

              <h2 className="font-[Space_Grotesk] text-4xl font-bold leading-tight sm:text-5xl">
                Blitz World Immigration
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Connecting Indian talent with global employment opportunities.
                We specialize in overseas recruitment and manpower placement
                services, helping workers and employers build successful
                international partnerships across multiple industries and
                destinations worldwide.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/jobs"
                  className="rounded-full bg-[var(--cw-orange)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--cw-orange-deep)]"
                >
                  Browse Jobs
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Airport Information Board */}
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TERMINAL_INFO.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
                  {item.label}
                </div>

                <div className="mt-2 font-[Space_Grotesk] text-3xl font-bold">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Contact */}
            <div className="lg:col-span-3">
              <h3 className="font-[Space_Grotesk] text-lg font-semibold">
                Contact Us
              </h3>

              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--cw-orange)]" />
                  <span className="text-white/70">+91 79841 18340</span>
                </div>

                <div className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--cw-orange)]" />
                  <span className="text-white/70 text-s">
                    info@blitzworldimmigrations.com
                  </span>
                </div>

                <div className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--cw-orange)]" />
                  <span className="text-white/70 text-s">
                    support@blitzworldimmigrations.com
                  </span>
                </div>

                <div className="flex gap-3">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--cw-orange)]" />
                  <span className="text-white/70">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Office */}
            <div className="lg:col-span-3">
              <h3 className="font-[Space_Grotesk] text-lg font-semibold">
                Registered Office
              </h3>

              <div className="mt-6 flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-[var(--cw-orange)]" />

                <div className="text-white/70">
                  Blitz World Immigration
                  <br />
                  B 420, 4th Floor, Shalin Square
                  <br />
                  Near Hathijan Circle, Vinzol
                  <br />
                  Ahmedabad, Gujarat – 382445
                  <br />
                  India
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="font-[Space_Grotesk] text-lg font-semibold">
                Quick Links
              </h3>

              <ul className="mt-6 space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 transition hover:translate-x-1 hover:text-[var(--cw-orange)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:col-span-2">
              <h3 className="font-[Space_Grotesk] text-lg font-semibold">
                Job Seeker Resources
              </h3>

              <ul className="mt-6 space-y-3">
                {JOB_SEEKER_LINKS.map((item) => (
                  <li
                    key={item}
                    className="text-white/70 transition hover:text-[var(--cw-orange)]"
                  >
                    <Link href="/resources">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Employers */}
            <div className="lg:col-span-2">
              <h3 className="font-[Space_Grotesk] text-lg font-semibold">
                Employers
              </h3>

              <ul className="mt-6 space-y-3">
                {EMPLOYER_LINKS.map((item) => (
                  <li
                    key={item}
                    className="text-white/70 transition hover:text-[var(--cw-orange)]"
                  >
                    <Link href="/contact">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Compliance */}
          {/* <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[var(--cw-orange)]" />

              <h3 className="font-[Space_Grotesk] text-xl font-semibold">
                Compliance & Verification
              </h3>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {COMPLIANCE.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
                    {item.label}
                  </div>

                  <div className="mt-3 font-mono text-sm text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-5">
              <FileCheck2 className="mt-0.5 h-5 w-5 text-[var(--cw-orange)]" />

              <p className="text-sm leading-7 text-white/70">
                Always verify company registration, licensing, certifications,
                and compliance information through applicable government records
                and official authorities before proceeding with recruitment
                activities.
              </p>
            </div>
          </div> */}

          {/* Legal + Social */}
          <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="mb-4 font-[Space_Grotesk] text-lg font-semibold">
                Legal
              </h3>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Cookie Policy",
                  "Disclaimer",
                  "Refund Policy",
                ].map((item) => (
                  <Link
                    key={item}
                    href="/"
                    className="text-sm text-white/60 transition hover:text-[var(--cw-orange)]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-[Space_Grotesk] text-lg font-semibold">
                Follow Us
              </h3>

              <div className="flex gap-3">
                {[
                  //   Facebook,
                  //   Instagram,
                  //   Linkedin,
                  //   Youtube,
                  MessageCircle,
                ].map((Icon, i) => (
                  <Link
                    key={i}
                    href="/"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition hover:border-[var(--cw-orange)] hover:bg-[var(--cw-orange)]"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-white/10 pt-8 text-center">
            <p className="font-medium text-white">
              © 2026 Blitz World Immigration. All Rights Reserved.
            </p>

            <div className="mx-auto mt-4 max-w-5xl flex items-start justify-center gap-2 text-sm text-white/50">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />

              <p>
                Blitz World Immigration is committed to ethical recruitment practices,
                transparency, and compliance with applicable laws and
                regulations. All overseas employment opportunities are subject
                to employer requirements, destination-country regulations, and
                applicable approvals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cw-root {
          --cw-bg-warm: #fff8f1;
          --cw-ink: #1c1410;
          --cw-ink-soft: #6b5d52;
          --cw-orange: #ea5b0c;
          --cw-orange-deep: #b6430a;
          --cw-orange-light: #ffe4cc;
          --cw-line: #f0dfc9;
        }
      `}</style>
    </footer>
  );
}
