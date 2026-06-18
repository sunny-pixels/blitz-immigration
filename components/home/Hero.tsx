import Image from "next/image";
import Link from "next/link";
import FeaturesSection from "@/components/layout/FeatureSection";

// ── DATA ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: "1,200+", label: "Workers placed" },
  { value: "6",      label: "European countries" },
  { value: "80+",    label: "Employer partners" },
  { value: "8 yrs",  label: "Industry experience" },
];

const sectors = [
  {
    icon: "⚡",
    title: "Skilled trades",
    desc: "Electricians, welders, plumbers, HVAC technicians",
    href: "/services#trades",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    desc: "Nurses, caregivers, medical assistants",
    href: "/services#healthcare",
  },
  {
    icon: "🏗️",
    title: "Construction",
    desc: "Site workers, masons, scaffolders, supervisors",
    href: "/services#construction",
  },
  {
    icon: "🏨",
    title: "Hospitality",
    desc: "Chefs, hotel staff, housekeeping, F&B",
    href: "/services#hospitality",
  },
];

const countries = [
  { flag: "🇩🇪", name: "Germany",     jobs: 320 },
  { flag: "🇳🇱", name: "Netherlands", jobs: 180 },
  { flag: "🇵🇱", name: "Poland",      jobs: 140 },
  { flag: "🇬🇧", name: "UK",          jobs: 95  },
  { flag: "🇫🇷", name: "France",      jobs: 60  },
  { flag: "🇦🇹", name: "Austria",     jobs: 40  },
];

const steps = [
  { num: "01", title: "Register free",    desc: "Submit your profile and CV on our website in minutes." },
  { num: "02", title: "Screening",        desc: "We verify your skills and match you to open roles." },
  { num: "03", title: "Employer match",   desc: "You get connected with a verified European employer." },
  { num: "04", title: "Visa & travel",    desc: "We handle all documentation, visa, and flight prep." },
  { num: "05", title: "Start working",    desc: "Arrive in Europe and begin your new career." },
];

const testimonials = [
  {
    initials: "RK",
    name: "Rajesh Kumar",
    role: "Welder · Gujarat → Germany",
    quote:
      "Within 4 months of registering I was working in Munich. The team handled everything — visa, documents, even airport pickup guidance.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Nurse · Pune → Netherlands",
    quote:
      "I had tried other agencies before but EuroStaff was the only one who actually delivered. I am now earning 3x what I made back home.",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    initials: "MK",
    name: "Mohan Khatri",
    role: "Chef · Rajasthan → France",
    quote:
      "Genuine support at every step. They called me regularly to check on my progress. Highly recommend to anyone serious about going to Europe.",
    color: "bg-amber-50 text-amber-700",
  },
];

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100vh] flex items-center">

        {/* Background image */}
        <Image
          src="/hero.png"          // ← your image filename here
          alt="Indian workers heading to European job sites"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-navy/70" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">

          {/* Trust pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Licensed Global Recruiter · 1,200+ workers placed across 15+ countries
          </div>

          <h1 className="text-4xl md:text-6xl font-medium text-white leading-tight mb-6 max-w-3xl">
            Your career beyond borders {" "}
            <span className="text-orange-400">starts here</span>{" "}
          </h1>

          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            We connect skilled Indian professionals with verified employers across Europe, the Middle East, North America, and beyond — in trades, healthcare, construction, hospitality, and more.
          </p>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/workers"
              className="bg-gold text-navy font-medium px-8 py-4 rounded-lg text-base bg-orange-400 hover:bg-orange-400 transition-colors text-center"
            >
              Apply as a worker
            </Link>
            <Link
              href="/employers"
              className="border-2 border-white/50 text-white font-medium px-8 py-4 rounded-lg text-base hover:bg-white/10 transition-colors text-center"
            >
              Hire staff from India
            </Link>
          </div>
        </div>
      </section>

      <FeaturesSection />

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-medium text-gold mb-1">
                {s.value}
              </div>
              <div className="text-white/60 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTOR GRID ──────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <p className="text-sm font-medium text-navy uppercase tracking-widest mb-3">
            What we do
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            Industries we recruit for
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group border border-gray-200 rounded-xl p-6 hover:border-navy hover:shadow-sm transition-all"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-medium text-gray-900 mb-2 group-hover:text-navy transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-sm font-medium text-navy uppercase tracking-widest mb-3">
              The process
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
              How it works — for workers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {/* Connector line (hidden on mobile) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] right-[-50%] h-px bg-gray-200" />
                )}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="w-10 h-10 rounded-full bg-navy text-white text-sm font-medium flex items-center justify-center mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/workers"
              className="inline-block bg-navy text-white font-medium px-8 py-3.5 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Start your application
            </Link>
          </div>
        </div>
      </section>

      {/* ── COUNTRIES ────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <p className="text-sm font-medium text-navy uppercase tracking-widest mb-3">
            Where you can go
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            Countries we place workers in
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {countries.map((c) => (
            <Link
              key={c.name}
              href={`/countries/${c.name.toLowerCase()}`}
              className="border border-gray-200 rounded-xl p-5 text-center hover:border-navy hover:shadow-sm transition-all group"
            >
              <div className="text-4xl mb-3">{c.flag}</div>
              <div className="font-medium text-gray-900 text-sm group-hover:text-navy transition-colors">
                {c.name}
              </div>
              <div className="text-xs text-gray-400 mt-1">{c.jobs} open jobs</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── DUAL CTA BANNER ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-gray-200">

          {/* Worker side */}
          <div className="bg-gold p-10">
            <p className="text-navy/60 text-sm font-medium uppercase tracking-widest mb-3">
              For job seekers
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-navy mb-4">
              Ready to work in Europe?
            </h2>
            <p className="text-navy/70 mb-8 leading-relaxed">
              Register for free, upload your CV, and let us match you to a
              verified employer — at no cost to you.
            </p>
            <Link
              href="/workers"
              className="inline-block bg-navy text-white font-medium px-7 py-3.5 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Apply now — its free
            </Link>
          </div>

          {/* Employer side */}
          <div className="bg-navy p-10">
            <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-3">
              For employers
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              Need reliable workers?
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Access pre-screened, skill-tested Indian workers ready to fill
              your roles with full visa and compliance support.
            </p>
            <Link
              href="/employers"
              className="inline-block bg-gold text-navy font-medium px-7 py-3.5 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Submit a hiring enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="text-sm font-medium text-navy uppercase tracking-widest mb-3">
              Success stories
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
              Workers who made it to Europe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-gray-200 rounded-xl p-7"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t.quote}
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm ${t.color}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}