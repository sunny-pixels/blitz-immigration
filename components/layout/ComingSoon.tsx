import Link from "next/link";
import { ArrowUpRight, PlaneTakeoff, PhoneCall } from "lucide-react";

interface ComingSoonProps {
  /** The page name shown in the heading, e.g. "Jobs" */
  page: string;
  /** One-line description of what this page will contain */
  description?: string;
}

export default function ComingSoon({ page, description }: ComingSoonProps) {
  return (
    <main className="cs-root bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');

        .cs-root {
          --cw-bg-warm:      #FFF8F1;
          --cw-ink:          #1C1410;
          --cw-ink-soft:     #6B5D52;
          --cw-orange:       #EA5B0C;
          --cw-orange-deep:  #B6430A;
          --cw-orange-light: #FFE4CC;
          --cw-line:         #F0DFC9;
          font-family: 'Inter', sans-serif;
          color: var(--cw-ink);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cs-root .display { font-family: 'Space Grotesk', sans-serif; }
        .cs-root .mono    { font-family: 'JetBrains Mono', monospace; font-variant-numeric: tabular-nums; }

        .cs-btn-primary {
          background: var(--cw-orange);
          transition: background 0.15s ease;
        }
        .cs-btn-primary:hover { background: var(--cw-orange-deep); }
        .cs-btn-primary:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--cw-orange);
        }

        @media (prefers-reduced-motion: reduce) {
          .cs-root * { transition: none !important; animation: none !important; }
        }
      `}</style>

      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-0 right-0 h-[500px] w-[500px] rounded-full blur-3xl opacity-[0.07]"
        style={{ background: "var(--cw-orange)", transform: "translate(30%, -30%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed bottom-0 left-0 h-[400px] w-[400px] rounded-full blur-3xl opacity-[0.05]"
        style={{ background: "var(--cw-orange)", transform: "translate(-30%, 30%)" }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center">

        {/* Eyebrow badge */}
        <div
          className="mono inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8 text-xs font-semibold uppercase tracking-widest"
          style={{ borderColor: "var(--cw-line)", background: "var(--cw-bg-warm)", color: "var(--cw-orange-deep)" }}
        >
          <PlaneTakeoff className="h-3.5 w-3.5" aria-hidden />
          Under Construction
        </div>

        {/* Boarding-pass style frame */}
        <div
          className="rounded-2xl border p-10 sm:p-14"
          style={{ borderColor: "var(--cw-line)", background: "var(--cw-bg-warm)" }}
        >
          {/* Dashed perforation line at top */}
          <div
            className="absolute left-8 right-8 -top-px border-t-2 border-dashed"
            style={{ borderColor: "var(--cw-line)" }}
            aria-hidden
          />

          <div
            className="mono mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--cw-ink-soft)" }}
          >
            Gate — {page.toUpperCase()}
          </div>

          <h1
            className="display text-4xl sm:text-5xl font-bold leading-tight mb-4"
            style={{ color: "var(--cw-ink)" }}
          >
            This page is{" "}
            <span style={{ color: "var(--cw-orange)" }}>boarding soon</span>
          </h1>

          <p
            className="text-lg leading-relaxed mb-2"
            style={{ color: "var(--cw-ink-soft)" }}
          >
            {description ??
              `The ${page} page is currently being prepared and will be ready shortly.`}
          </p>

          <p className="text-base" style={{ color: "var(--cw-ink-soft)" }}>
            In the meantime, you can browse the homepage or get in touch with our team directly.
          </p>

          {/* Divider — boarding pass stub */}
          <div
            className="my-8 border-t-2 border-dashed"
            style={{ borderColor: "var(--cw-line)" }}
            aria-hidden
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="cs-btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
            >
              Back to Home
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors hover:border-[var(--cw-orange)] hover:text-[var(--cw-orange-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ borderColor: "var(--cw-line)", color: "var(--cw-ink)" }}
            >
              <PhoneCall className="h-4 w-4" aria-hidden />
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
