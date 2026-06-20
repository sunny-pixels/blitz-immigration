"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

const services: { label: string; slug: string }[] = [
  { label: "Overseas Recruitment", slug: "overseas-recruitment" },
  { label: "Work Visa Assistance", slug: "work-visa-assistance" },
  { label: "Resume Assessment", slug: "resume-assessment" },
  { label: "Interview Preparation", slug: "interview-preparation" },
  { label: "Documentation Support", slug: "documentation-support" },
  { label: "Pre-Departure Guidance", slug: "pre-departure-guidance" },
];

const resources: { label: string; slug: string }[] = [
  { label: "Blog", slug: "blog" },
  { label: "Success Stories", slug: "success-stories" },
  { label: "FAQ", slug: "faq" },
  { label: "Recruitment Process", slug: "recruitment-process" },
  { label: "Salary Guides", slug: "salary-guides" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On home: transparent until scrolled. On other pages: always white.
  const isDark = isHome && !scrolled;

  const navText = isDark ? "nav-link-light" : "nav-link-dark";
  const logoTitle = isDark ? "#ffffff" : "#1C1410";
  const logoSub = isDark ? "rgba(255,255,255,0.65)" : "#6B5D52";
  const mobileBtn = isDark ? "mob-btn-light" : "mob-btn-dark";
  const boxBg = isDark ? "nav-box-top" : "nav-box-scrolled";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        .nav-root {
          --cw-orange: #EA5B0C;
          --cw-orange-deep: #B6430A;
          --cw-orange-light: #FFE4CC;
          --cw-line: #F0DFC9;
          --cw-ink: #1C1410;
          --cw-ink-soft: #6B5D52;
          font-family: 'Inter', sans-serif;
        }
        .nav-logo-name { font-family: 'Space Grotesk', sans-serif; font-weight: 700; }
        .nav-logo-sub  { font-family: 'Inter', sans-serif; font-weight: 500; }

        /* nav pill box */
        .nav-box-top      { background: rgba(0,0,0,0.12); border-color: rgba(255,255,255,0.2); }
        .nav-box-scrolled { background: #fff; border-color: var(--cw-line); box-shadow: 0 2px 12px rgba(28,20,16,0.08); }

        /* desktop links */
        .nav-link-light { color: rgba(255,255,255,0.85); }
        .nav-link-dark  { color: var(--cw-ink-soft); }
        .nav-link-light:hover { color: #fff; }
        .nav-link-dark:hover  { color: var(--cw-ink); }

        /* underline indicator */
        .nav-link-base {
          position: relative;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s;
          text-decoration: none;
        }
        .nav-link-base::after {
          content: '';
          position: absolute;
          bottom: -6px; left: 0;
          height: 2px; width: 0;
          background: var(--cw-orange);
          transition: width 0.2s;
        }
        .nav-link-base:hover::after { width: 100%; }
        .nav-link-base:focus-visible { outline: none; }
        .nav-link-base:focus-visible::after { width: 100%; }

        /* CTA button */
        .nav-cta {
          background: var(--cw-orange);
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          border-radius: 9999px;
          padding: 0.5rem 1.25rem;
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          transition: background 0.15s ease;
          text-decoration: none;
        }
        .nav-cta:hover { background: var(--cw-orange-deep); }
        .nav-cta:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--cw-orange);
        }

        /* dropdown items */
        .nav-dropdown-item {
          display: block;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--cw-ink-soft);
          transition: background 0.15s, color 0.15s;
          text-decoration: none;
        }
        .nav-dropdown-item:hover {
          background: var(--cw-orange-light);
          color: var(--cw-orange-deep);
        }

        /* mobile button */
        .mob-btn-light { color: #fff; }
        .mob-btn-light:hover { background: rgba(255,255,255,0.12); }
        .mob-btn-dark  { color: var(--cw-ink); }
        .mob-btn-dark:hover  { background: #f5f0eb; }

        /* mobile menu link */
        .mob-link {
          display: block;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--cw-ink-soft);
          transition: background 0.15s, color 0.15s;
          text-decoration: none;
        }
        .mob-link:hover { background: var(--cw-orange-light); color: var(--cw-orange-deep); }

        /* mobile CTA */
        .mob-cta {
          display: block;
          text-align: center;
          border-radius: 9999px;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          background: var(--cw-orange);
          color: #fff;
          transition: background 0.15s;
          text-decoration: none;
        }
        .mob-cta:hover { background: var(--cw-orange-deep); }

        @media (prefers-reduced-motion: reduce) {
          .nav-root * { transition: none !important; animation: none !important; }
        }
      `}</style>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <header className="nav-root fixed top-0 z-50 w-full bg-transparent py-4 px-4">
        {/* Pill box */}
        <div
          className={`mx-auto flex h-20 max-w-[1440px] items-center justify-between rounded-2xl border backdrop-blur-md px-6 transition-all duration-300 ${boxBg}`}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-105"
              style={{ background: "var(--cw-orange)" }}
            >
              <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p
                className="nav-logo-name text-[15px] leading-none transition-colors duration-300"
                style={{ color: logoTitle }}
              >
                Blitz
              </p>
              <p
                className="nav-logo-sub text-[11px] uppercase tracking-wider mt-0.5 transition-colors duration-300"
                style={{ color: logoSub }}
              >
                Immigration
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {[
              { href: "/about", label: "About Us" },
              { href: "/jobs", label: "Jobs" },
              { href: "/countries", label: "Countries" },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link-base ${navText}`}
              >
                {label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div className="group relative py-2">
              <button
                className={`nav-link-base flex items-center gap-1 bg-transparent border-0 cursor-pointer ${navText}`}
              >
                Services
                <ChevronDown
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  aria-hidden="true"
                />
              </button>
              <div className="invisible absolute left-1/2 top-12 w-68 -translate-x-1/2 translate-y-3 rounded-2xl border border-[var(--cw-line)] bg-white p-2 shadow-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {services.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="nav-dropdown-item"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources dropdown */}
            <div className="group relative py-2">
              <button
                className={`nav-link-base flex items-center gap-1 bg-transparent border-0 cursor-pointer ${navText}`}
              >
                Resources
                <ChevronDown
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  aria-hidden="true"
                />
              </button>
              <div className="invisible absolute left-1/2 top-12 w-56 -translate-x-1/2 translate-y-3 rounded-2xl border border-[var(--cw-line)] bg-white p-2 shadow-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {resources.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/resources/${item.slug}`}
                    className="nav-dropdown-item"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center lg:flex shrink-0">
            <Link href="/contact" className="nav-cta">
              Apply Now
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`rounded-xl p-2 transition-colors lg:hidden ${mobileBtn}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mt-2 mx-2 w-[calc(100%-1rem)] rounded-2xl border border-[var(--cw-line)] bg-white lg:hidden shadow-xl overflow-hidden">
            <div className="max-h-[calc(100vh-120px)] overflow-y-auto px-3 py-3">
              {/* Nav links — same order as desktop */}
              {[
                { href: "/about", label: "About Us" },
                { href: "/jobs", label: "Jobs" },
                { href: "/countries", label: "Countries" },
                { href: "/contact", label: "Contact Us" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="mob-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="mob-link"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {servicesOpen && (
                  <div
                    className="ml-4 mt-1 space-y-0.5 border-l-2 pl-3"
                    style={{ borderColor: "var(--cw-line)" }}
                  >
                    {services.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className="mob-link py-2 text-xs block"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources accordion */}
              <div>
                <button
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="mob-link"
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {resourcesOpen && (
                  <div
                    className="ml-4 mt-1 space-y-0.5 border-l-2 pl-3"
                    style={{ borderColor: "var(--cw-line)" }}
                  >
                    {resources.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/resources/${item.slug}`}
                        className="mob-link py-2 text-xs block"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Divider */}
              <div
                className="my-3 border-t"
                style={{ borderColor: "var(--cw-line)" }}
              />

              {/* CTA only — no WhatsApp */}
              <div className="pb-1">
                <Link
                  href="/contact"
                  className="mob-cta"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
