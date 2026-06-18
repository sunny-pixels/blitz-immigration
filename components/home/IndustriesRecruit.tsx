import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
} from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare & Nursing",
    roles: [
      "Registered Nurses",
      "Caregivers",
      "Nursing Assistants",
      "Medical Technicians",
      "Healthcare Support Staff",
    ],
    color: "bg-rose-50 text-rose-500",
  },
  {
    icon: HardHat,
    title: "Construction & Skilled Trades",
    roles: [
      "Electricians",
      "Plumbers",
      "Welders",
      "Carpenters",
      "Painters",
      "HVAC Technicians",
    ],
    color: "bg-amber-50 text-amber-500",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality & Tourism",
    roles: [
      "Hotel Staff",
      "Housekeeping",
      "Chefs",
      "Kitchen Helpers",
      "Front Office Executives",
      "Restaurant Personnel",
    ],
    color: "bg-orange-50 text-orange-500",
  },
  {
    icon: Factory,
    title: "Manufacturing & Production",
    roles: [
      "Machine Operators",
      "Assembly Workers",
      "Production Supervisors",
      "Quality Control Technicians",
    ],
    color: "bg-slate-100 text-slate-500",
  },
  {
    icon: Package,
    title: "Logistics & Warehousing",
    roles: [
      "Warehouse Associates",
      "Forklift Operators",
      "Inventory Controllers",
      "Distribution Staff",
    ],
    color: "bg-sky-50 text-sky-500",
  },
  {
    icon: Truck,
    title: "Transportation & Drivers",
    roles: [
      "Heavy Vehicle Drivers",
      "Delivery Drivers",
      "Fleet Operators",
      "Transport Support Staff",
    ],
    color: "bg-indigo-50 text-indigo-500",
  },
  {
    icon: Sprout,
    title: "Agriculture & Farming",
    roles: [
      "Farm Workers",
      "Greenhouse Workers",
      "Harvest Staff",
      "Livestock Assistants",
    ],
    color: "bg-green-50 text-green-500",
  },
  {
    icon: Code2,
    title: "Information Technology",
    roles: [
      "Software Developers",
      "IT Support Engineers",
      "Network Administrators",
      "Data Specialists",
    ],
    color: "bg-violet-50 text-violet-500",
  },
  {
    icon: Wrench,
    title: "Engineering & Technical Services",
    roles: [
      "Mechanical Engineers",
      "Civil Engineers",
      "Electrical Engineers",
      "Project Coordinators",
    ],
    color: "bg-cyan-50 text-cyan-500",
  },
  {
    icon: Building2,
    title: "Facility Management & Maintenance",
    roles: [
      "Maintenance Technicians",
      "Building Services Staff",
      "Cleaning Supervisors",
      "Utility Workers",
    ],
    color: "bg-teal-50 text-teal-500",
  },
];

export default function IndustriesRecruit() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-section background image */}
      <Image
        src="/hero.png"
        alt="Industries we recruit for"
        fill
        className="object-cover object-center"
      />
      {/* Dark overlay over the entire section */}
      <div className="absolute inset-0 bg-black/75" />

      {/* All content sits above the overlay */}
      <div className="relative z-10">
        {/* ── HEADER ──────────────────────────────────────────────── */}
        <div className="pt-24 pb-16 flex flex-col items-center text-center px-6">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-orange-400 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-5">
            Career Opportunities Across Multiple Industries
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl">
            Find Overseas Jobs That Match Your Skills
          </h2>

          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            Whether you&apos;re a skilled professional, tradesperson, healthcare
            worker, or hospitality expert, we connect candidates with trusted
            employers across high-demand industries worldwide.
          </p>
        </div>

        {/* ── CARDS GRID ──────────────────────────────────────────── */}
        {/* ── INDUSTRY EXPLORER ───────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-[420px_1fr] gap-8">
            {/* LEFT NAVIGATION */}
            <div className="space-y-3">
              {industries.map((industry) => {
                const Icon = industry.icon;
                const active = activeIndustry.title === industry.title;

                return (
                  <button
                    key={industry.title}
                    onClick={() => setActiveIndustry(industry)}
                    className={`
                                w-full text-left group
              flex items-center gap-4
              rounded-2xl p-4
              transition-all duration-300
              border
              ${
                active
                  ? "bg-orange-500 border-orange-500 shadow-lg shadow-orange-500/20"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }
            `}
                  >
                    <div
                      className={`
    flex h-12 w-12 shrink-0 items-center justify-center rounded-xl
    transition-all duration-300
    ${
      active
        ? "bg-white/15 border border-white/20"
        : "bg-transparent border border-orange-400/20"
    }
  `}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          active ? "text-black" : "text-orange-400"
                        }`}
                      />
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`font-semibold text-sm md:text-base ${
                          active ? "text-white" : "text-white/90"
                        }`}
                      >
                        {industry.title}
                      </h3>
                    </div>

                    <div
                      className={`transition-transform duration-300 ${
                        active ? "translate-x-1 text-white" : "text-white/40"
                      }`}
                    >
                      →
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT DETAILS PANEL */}
            <div className="relative min-h-[550px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                  className="h-full rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 lg:p-10"
                >
                  {/* Header */}
                  <div className="flex items-center gap-5 mb-8">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${activeIndustry.color}`}
                    >
                      <activeIndustry.icon className="h-8 w-8" />
                    </div>

                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white">
                        {activeIndustry.title}
                      </h3>

                      <p className="text-white/60 mt-2">
                        Explore overseas opportunities in this industry.
                      </p>
                    </div>
                  </div>

                  {/* Roles */}
                  <div>
                    <p className="text-sm uppercase tracking-widest text-orange-400 mb-5">
                      Popular Roles
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {activeIndustry.roles.map((role, index) => (
                        <motion.div
                          key={role}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.25,
                            delay: index * 0.05,
                          }}
                          className="rounded-xl border border-white/10 bg-white/5 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-orange-400" />
                            <span className="text-white/80">{role}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      href="/jobs"
                      className="bg-orange-400 text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-300 transition"
                    >
                      View Jobs
                    </Link>

                    <Link
                      href="/contact"
                      className="border border-white/20 text-white px-6 py-3 rounded-xl hover:border-orange-400 hover:text-orange-400 transition"
                    >
                      Talk to Recruiter
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/jobs"
              className="bg-orange-400 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-orange-300 transition-colors text-sm"
            >
              Browse All Jobs
            </Link>

            <Link
              href="/contact"
              className="border border-white/30 text-white font-medium px-8 py-3.5 rounded-xl hover:border-orange-400 hover:text-orange-400 transition-colors text-sm"
            >
              Talk to a Recruiter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
