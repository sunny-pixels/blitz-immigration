"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  BriefcaseBusiness,
} from "lucide-react";

const services = [
  "Overseas Recruitment",
  "Work Visa Assistance",
  "Resume Assessment",
  "Interview Preparation",
  "Documentation Support",
  "Pre-Departure Guidance",
];

const resources = [
  "Blog",
  "Success Stories",
  "FAQ",
  "Recruitment Process",
  "Salary Guides",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dynamic classes based on scroll position
  const navText   = scrolled ? "text-slate-700" : "text-slate-200";
  const navHover  = scrolled ? "hover:text-slate-900" : "hover:text-white";
  const logoTitle = scrolled ? "text-slate-900"  : "text-white";
  const logoSub   = scrolled ? "text-slate-500"  : "text-slate-300";
  const mobileBtn = scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10";
  const boxBg     = scrolled ? "bg-white shadow-md border-slate-200" : "bg-black/10 border-white/20";

  return (
    <>
    {/* Full-screen backdrop — sits behind header (z-40) so header stays on top */}
    {mobileOpen && (
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        onClick={() => setMobileOpen(false)}
      />
    )}

    <header className="fixed top-0 z-50 w-full bg-transparent py-4 px-4">
      {/* Enclosed Navbar Box with transparent backdrop, borders, and rounded ends */}
      <div className={`mx-auto flex h-20 max-w-[1440px] items-center justify-between rounded-2xl border backdrop-blur-md px-6 transition-all duration-300 ${boxBg}`}>
        
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-400 text-white shadow-md shadow-orange-400/20 transition-transform duration-300 group-hover:scale-105">
            <BriefcaseBusiness className="h-5 w-5" />
          </div>

          <div>
            <h2 className={`text-[15px] font-bold tracking-tight transition-colors duration-300 ${logoTitle}`}>
              Blitz
            </h2>
            <p className={`-mt-0.5 text-[13px] font-medium uppercase tracking-wider transition-colors duration-300 ${logoSub}`}>
              Immigration
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {/* <Link
            href="/"
            className={`relative text-sm font-medium transition-colors duration-200 ${navText} ${navHover} after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all hover:after:w-full`}
          >
            Home
          </Link> */}

          <Link
            href="/jobs"
            className={`relative text-sm font-medium transition-colors duration-200 ${navText} ${navHover} after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all hover:after:w-full`}
          >
            Jobs
          </Link>

          <Link
            href="/countries"
            className={`relative text-sm font-medium transition-colors duration-200 ${navText} ${navHover} after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all hover:after:w-full`}
          >
            Countries
          </Link>

          {/* Services Dropdown */}
          <div className="group relative py-2">
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${navText} ${navHover}`}>
              Services
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-12 w-72 -translate-x-1/2 translate-y-3 rounded-2xl border bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {services.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-orange-50 hover:text-orange-600"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="group relative py-2">
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${navText} ${navHover}`}>
              Resources
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-12 w-72 -translate-x-1/2 translate-y-3 rounded-2xl border bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {resources.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-orange-50 hover:text-orange-600"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            className={`relative text-sm font-medium transition-colors duration-200 ${navText} ${navHover} after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all hover:after:w-full`}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className={`relative text-sm font-medium transition-colors duration-200 ${navText} ${navHover} after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all hover:after:w-full`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex shrink-0">
          {/* <Link
            href="https://wa.me/919999999999"
            className="flex items-center gap-2 rounded-xl border border-white/30 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10 active:scale-[0.98]"
          >
            <Phone className="h-4 w-4 text-white" />
            WhatsApp
          </Link> */}

          <Link
            href="/apply"
            className="rounded-xl bg-orange-400 px-6 py-2.5 text-sm font-semibold text-black shadow-md shadow-orange-400/10 transition-all hover:bg-orange-300 hover:shadow-orange-400/20 active:scale-[0.98]"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`rounded-lg p-1.5 transition-colors lg:hidden ${mobileBtn}`}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Backdrop blur overlay — removed, now lives outside header */}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mt-2 mx-6 rounded-2xl border border-slate-100 bg-white lg:hidden shadow-xl">
          <div className="max-h-[calc(100vh-120px)] overflow-y-auto space-y-1 px-4 py-4">
            <Link
              href="/"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-400"
            >
              Home
            </Link>

            <Link
              href="/jobs"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-400"
            >
              Jobs
            </Link>

            <Link
              href="/countries"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-400"
            >
              Countries
            </Link>

            {/* Services Mobile dropdown */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-400"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="mt-1 ml-4 space-y-1 border-l-2 border-slate-100 pl-2">
                  {services.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-orange-400"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Mobile dropdown */}
            <div>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-400"
              >
                Resources
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {resourcesOpen && (
                <div className="mt-1 ml-4 space-y-1 border-l-2 border-slate-100 pl-2">
                  {resources.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-orange-400"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-400"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-400"
            >
              Contact
            </Link>

            <div className="mt-6 flex flex-col gap-2 px-4 pb-4">
              <Link
                href="https://wa.me/919999999999"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <Phone className="h-4 w-4 text-slate-400" />
                WhatsApp
              </Link>

              <Link
                href="/apply"
                className="rounded-xl bg-orange-400 px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-orange-400/10 hover:bg-orange-300"
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