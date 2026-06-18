"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Stethoscope,
  HardHat,
  UtensilsCrossed,
  Factory,
  Package,
  Truck,
  Sprout,
  Code2,
  Wrench,
  Building2,
  ArrowUpRight,
  PhoneCall,
} from "lucide-react";

/* ─── DATA ──────────────────────────────────────────────────────── */

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare & Nursing",
    code: "HLT",
    destination: "EU · UK · Canada · Gulf",
    demand: "Very High",
    roles: [
      { title: "Registered Nurse", openings: "2,400+" },
      { title: "Caregiver / Support Worker", openings: "3,100+" },
      { title: "Nursing Assistant", openings: "1,800+" },
      { title: "Medical Technician", openings: "920+" },
      { title: "Healthcare Support Staff", openings: "1,500+" },
    ],
  },
  {
    icon: HardHat,
    title: "Construction & Trades",
    code: "CST",
    destination: "Germany · Gulf · Australia",
    demand: "High",
    roles: [
      { title: "Electrician", openings: "1,700+" },
      { title: "Plumber", openings: "1,200+" },
      { title: "Welder", openings: "980+" },
      { title: "Carpenter", openings: "850+" },
      { title: "HVAC Technician", openings: "620+" },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality & Tourism",
    code: "HSP",
    destination: "UAE · UK · Maldives",
    demand: "High",
    roles: [
      { title: "Hotel Front Office Executive", openings: "760+" },
      { title: "Housekeeping Supervisor", openings: "540+" },
      { title: "Chef / Kitchen Specialist", openings: "430+" },
      { title: "Restaurant Personnel", openings: "680+" },
      { title: "Kitchen Helpers", openings: "900+" },
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing & Production",
    code: "MFG",
    destination: "Germany · Poland · Czech Republic",
    demand: "High",
    roles: [
      { title: "Machine Operator", openings: "2,200+" },
      { title: "Assembly Line Worker", openings: "1,900+" },
      { title: "Production Supervisor", openings: "410+" },
      { title: "Quality Control Technician", openings: "580+" },
    ],
  },
  {
    icon: Package,
    title: "Logistics & Warehousing",
    code: "LOG",
    destination: "Netherlands · UK · UAE",
    demand: "Steady",
    roles: [
      { title: "Warehouse Associate", openings: "1,400+" },
      { title: "Forklift Operator", openings: "820+" },
      { title: "Inventory Controller", openings: "360+" },
      { title: "Distribution Staff", openings: "490+" },
    ],
  },
  {
    icon: Truck,
    title: "Transportation & Drivers",
    code: "TRN",
    destination: "UK · EU · Gulf",
    demand: "Steady",
    roles: [
      { title: "Heavy Vehicle Driver", openings: "1,100+" },
      { title: "Delivery Driver", openings: "780+" },
      { title: "Fleet Coordinator", openings: "220+" },
      { title: "Transport Support Staff", openings: "340+" },
    ],
  },
  {
    icon: Sprout,
    title: "Agriculture & Farming",
    code: "AGR",
    destination: "Canada · New Zealand · Netherlands",
    demand: "Seasonal",
    roles: [
      { title: "Farm Worker", openings: "1,600+" },
      { title: "Greenhouse Worker", openings: "740+" },
      { title: "Harvest Specialist", openings: "920+" },
      { title: "Livestock Assistant", openings: "380+" },
    ],
  },
  {
    icon: Code2,
    title: "Information Technology",
    code: "ICT",
    destination: "Canada · Germany · Singapore",
    demand: "Very High",
    roles: [
      { title: "Software Developer", openings: "3,800+" },
      { title: "IT Support Engineer", openings: "1,200+" },
      { title: "Network Administrator", openings: "650+" },
      { title: "Data Specialist", openings: "970+" },
    ],
  },
  {
    icon: Wrench,
    title: "Engineering & Technical",
    code: "ENG",
    destination: "Germany · Australia · Gulf",
    demand: "High",
    roles: [
      { title: "Mechanical Engineer", openings: "880+" },
      { title: "Civil Engineer", openings: "720+" },
      { title: "Electrical Engineer", openings: "640+" },
      { title: "Project Coordinator", openings: "430+" },
    ],
  },
  {
    icon: Building2,
    title: "Facility Management",
    code: "FMT",
    destination: "UAE · UK · Singapore",
    demand: "Steady",
    roles: [
      { title: "Maintenance Technician", openings: "590+" },
      { title: "Building Services Staff", openings: "420+" },
      { title: "Cleaning Supervisor", openings: "340+" },
      { title: "Utility Worker", openings: "510+" },
    ],
  },
];

const DEMAND_CONFIG: Record<string, { label: string; cls: string }> = {
  "Very High": {
    label: "Very High",
    cls: "bg-[var(--cw-orange)] text-white",
  },
  High: {
    label: "High",
    cls: "bg-[var(--cw-orange-light)] text-[var(--cw-orange-deep)]",
  },
  Steady: { label: "Steady", cls: "bg-stone-100 text-stone-500" },
  Seasonal: { label: "Seasonal", cls: "bg-stone-100 text-stone-500" },
};

/* ─── COMPONENT ─────────────────────────────────────────────────── */

export default function IndustriesRecruit() {
  const [active, setActive] = useState(0);
  const industry = industries[active];
  const demand = DEMAND_CONFIG[industry.demand];
  const previewRoles = industry.roles.slice(0, 3);

  return (
    <>
      {/* ── Fonts + tokens ──────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');

        .ir-root {
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

        .ir-root .display { font-family: 'Space Grotesk', sans-serif; }
        .ir-root .mono    { font-family: 'JetBrains Mono', monospace; font-variant-numeric: tabular-nums; }

        /* Industry card hover lift */
        .ir-industry-card {
          transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
        }
        @media (hover: hover) {
          .ir-industry-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(234,91,12,0.10);
            border-color: var(--cw-orange);
          }
        }

        /* Role row hover */
        .ir-role-row {
          transition: background 0.14s ease;
        }
        .ir-role-row:hover {
          background: var(--cw-bg-warm);
        }

        /* Detail panel slide-in */
        @keyframes ir-slidein {
          from { opacity: 0; transform: translateX(18px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .ir-panel-animate {
          animation: ir-slidein 0.28s ease both;
        }

        /* Boarding-pass divider notch circles */
        .ir-notch {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid var(--cw-line);
          position: absolute;
          left: -9px;
          z-index: 10;
        }

        /* Scallop CTA edge */
        .ir-scallop::before {
          content: "";
          position: absolute;
          top: -1px; left: 0; right: 0; height: 18px;
          background-image: radial-gradient(circle at 9px 9px, #ffffff 9px, transparent 9.5px);
          background-size: 18px 18px;
          background-repeat: repeat-x;
          background-position: -9px -9px;
        }

        @media (prefers-reduced-motion: reduce) {
          .ir-industry-card, .ir-role-row { transition: none !important; }
          .ir-panel-animate { animation: none !important; }
        }
      `}</style>

      <section className="ir-root relative bg-white overflow-hidden">

        {/* ── Decorative blob ───────────────────────────────────── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full blur-3xl"
          style={{ background: "var(--cw-orange)", opacity: 0.07 }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 sm:pt-28 pb-20">

          {/* ── Section header ──────────────────────────────────── */}
          <div className="mb-14 max-w-2xl">
            <span
              className="display inline-block text-[11px] font-semibold uppercase tracking-widest rounded-full px-3 py-1 mb-5"
              style={{
                background: "var(--cw-orange-light)",
                color: "var(--cw-orange-deep)",
              }}
            >
              Global Sector Demand
            </span>

            <h2
              className="display text-4xl sm:text-5xl font-bold leading-tight mb-4"
              style={{ color: "var(--cw-ink)" }}
            >
              Industries We Recruit&nbsp;For
            </h2>

            <p className="text-lg leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
              Ten high-demand sectors. Hundreds of verified employers. Pick your
              industry to see live openings abroad.
            </p>
          </div>

          {/* ── Main grid ───────────────────────────────────────── */}
          <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">

            {/* LEFT — Industry cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                const isActive = active === i;
                const d = DEMAND_CONFIG[ind.demand];

                return (
                  <button
                    key={ind.code}
                    onClick={() => setActive(i)}
                    className="ir-industry-card text-left rounded-2xl border p-5 focus-visible:ring-2 focus-visible:outline-none"
                    style={{
                      borderColor: isActive
                        ? "var(--cw-orange)"
                        : "var(--cw-line)",
                      background: isActive
                        ? "var(--cw-bg-warm)"
                        : "#ffffff",
                      boxShadow: isActive
                        ? "0 8px 24px rgba(234,91,12,0.12)"
                        : "none",
                      // @ts-ignore
                      "--tw-ring-color": "var(--cw-orange)",
                    }}
                  >
                    {/* Card top row */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          background: isActive
                            ? "var(--cw-orange)"
                            : "var(--cw-orange-light)",
                        }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: isActive ? "#fff" : "var(--cw-orange-deep)" }}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Demand badge */}
                      <span
                        className={`mono rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide ${d.cls}`}
                      >
                        {d.label}
                      </span>
                    </div>

                    {/* Title + code */}
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3
                        className="display text-sm font-600 leading-snug"
                        style={{ color: "var(--cw-ink)" }}
                      >
                        {ind.title}
                      </h3>
                      <span
                        className="mono text-[10px] font-semibold shrink-0"
                        style={{ color: "var(--cw-ink-soft)" }}
                      >
                        {ind.code}
                      </span>
                    </div>

                    {/* Destination */}
                    <p className="text-xs" style={{ color: "var(--cw-ink-soft)" }}>
                      {ind.destination}
                    </p>

                    {/* Preview roles on hover (shown when active for mobile UX) */}
                    {isActive && (
                      <div className="mt-4 space-y-1.5 border-t pt-4" style={{ borderColor: "var(--cw-line)" }}>
                        {previewRoles.map((r) => (
                          <div key={r.title} className="flex items-center justify-between">
                            <span className="text-xs" style={{ color: "var(--cw-ink)" }}>
                              {r.title}
                            </span>
                            <span
                              className="mono text-[10px] font-semibold"
                              style={{ color: "var(--cw-orange-deep)" }}
                            >
                              {r.openings}
                            </span>
                          </div>
                        ))}
                        {industry.roles.length > 3 && (
                          <p className="text-[10px]" style={{ color: "var(--cw-ink-soft)" }}>
                            +{industry.roles.length - 3} more roles →
                          </p>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* RIGHT — Boarding-pass detail panel */}
            <div
              key={active}
              className="ir-panel-animate sticky top-8 rounded-2xl overflow-hidden border"
              style={{
                borderColor: "var(--cw-line)",
                background: "var(--cw-bg-warm)",
              }}
            >
              {/* Boarding pass header strip */}
              <div
                className="px-6 py-5 border-b"
                style={{
                  borderColor: "var(--cw-line)",
                  background: "var(--cw-orange)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="mono text-[10px] font-semibold uppercase tracking-widest mb-0.5"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      Sector / Code
                    </p>
                    <p
                      className="display text-xl font-bold text-white leading-tight"
                    >
                      {industry.title}
                      <span
                        className="mono ml-2 text-sm font-semibold"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        {industry.code}
                      </span>
                    </p>
                  </div>

                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    <industry.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Destination row */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p
                      className="mono text-[10px] uppercase tracking-widest mb-0.5"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      Destinations
                    </p>
                    <p className="text-sm font-semibold text-white">{industry.destination}</p>
                  </div>

                  <span
                    className={`mono rounded-full px-3 py-1 text-[11px] font-semibold ${demand.cls}`}
                  >
                    {demand.label} Demand
                  </span>
                </div>
              </div>

              {/* Boarding-pass body — roles table */}
              <div className="relative px-0 py-0">
                {/* Perforation divider */}
                <div
                  className="absolute left-6 right-6 top-0 border-t-2 border-dashed"
                  style={{ borderColor: "var(--cw-line)" }}
                  aria-hidden="true"
                />
                {/* Notch circles */}
                <div className="ir-notch" style={{ top: "calc(0px - 9px)", left: "12px" }} aria-hidden="true" />
                <div className="ir-notch" style={{ top: "calc(0px - 9px)", right: "12px", left: "auto" }} aria-hidden="true" />

                <div className="pt-6 pb-2">
                  {/* Table header */}
                  <div
                    className="flex items-center justify-between px-6 py-2 border-b-2"
                    style={{
                      borderBottomColor: "var(--cw-orange)",
                      background: "var(--cw-bg-warm)",
                    }}
                  >
                    <span
                      className="mono text-[9px] font-semibold uppercase tracking-widest"
                      style={{ color: "var(--cw-ink-soft)" }}
                    >
                      Role
                    </span>
                    <span
                      className="mono text-[9px] font-semibold uppercase tracking-widest"
                      style={{ color: "var(--cw-ink-soft)" }}
                    >
                      Live Openings
                    </span>
                  </div>

                  {/* Role rows */}
                  {industry.roles.map((role, ri) => (
                    <div
                      key={ri}
                      className="ir-role-row flex items-center justify-between px-6 py-3 border-b"
                      style={{ borderColor: "var(--cw-line)" }}
                    >
                      <span className="text-sm" style={{ color: "var(--cw-ink)" }}>
                        {role.title}
                      </span>
                      <span
                        className="mono text-sm font-semibold"
                        style={{ color: "var(--cw-orange-deep)" }}
                      >
                        {role.openings}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Boarding-pass stub */}
                <div
                  className="relative mx-5 mb-5 rounded-xl border-2 border-dashed p-4"
                  style={{ borderColor: "var(--cw-line)" }}
                >
                  <p
                    className="mono text-[9px] uppercase tracking-widest mb-3"
                    style={{ color: "var(--cw-ink-soft)" }}
                  >
                    Ready to board?
                  </p>

                  <div className="flex flex-col gap-2">
                    <Link
                      href="/jobs"
                      className="flex items-center justify-center gap-2 rounded-full text-sm font-semibold text-white px-5 py-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                      style={{
                        background: "var(--cw-orange)",
                        // @ts-ignore
                        "--tw-ring-color": "var(--cw-orange)",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.background =
                          "var(--cw-orange-deep)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.background =
                          "var(--cw-orange)")
                      }
                    >
                      View All {industry.title} Jobs
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>

                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 rounded-full border text-sm font-semibold px-5 py-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                      style={{
                        borderColor: "var(--cw-line)",
                        background: "#ffffff",
                        color: "var(--cw-ink)",
                        // @ts-ignore
                        "--tw-ring-color": "var(--cw-orange)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--cw-orange)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--cw-line)";
                      }}
                    >
                      <PhoneCall className="h-4 w-4" aria-hidden="true" />
                      Talk to a Recruiter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Torn-ticket CTA banner ───────────────────────────── */}
          <div className="relative mt-20 ir-scallop rounded-b-3xl overflow-hidden">
            <div
              className="px-8 py-12 text-center"
              style={{
                background: `linear-gradient(135deg, var(--cw-orange) 0%, var(--cw-orange-deep) 100%)`,
              }}
            >
              <p
                className="mono text-[11px] uppercase tracking-widest mb-3"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {industries.reduce((sum, ind) => sum + ind.roles.length, 0)}+ verified roles across{" "}
                {industries.length} sectors
              </p>

              <h3
                className="display text-3xl sm:text-4xl font-bold text-white mb-3"
              >
                Your skills are in demand abroad.
              </h3>

              <p className="text-white/70 mb-8 max-w-lg mx-auto leading-relaxed">
                Register today and our recruiters will match you to verified
                openings within 48 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/register"
                  className="flex items-center gap-2 rounded-full bg-white text-sm font-semibold px-7 py-3 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600 focus-visible:outline-none"
                  style={{ color: "var(--cw-orange-deep)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "var(--cw-orange-light)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "#ffffff")
                  }
                >
                  Browse All Jobs
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-full border border-white/40 text-white text-sm font-semibold px-7 py-3 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600 focus-visible:outline-none"
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "transparent")
                  }
                >
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  Talk to a Recruiter
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}