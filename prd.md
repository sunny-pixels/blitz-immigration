# Blitz Immigration — Product Requirements Document

**Version**: 1.0  
**Date**: June 2026  
**Status**: In Progress  

---

## 1. Product Overview

Blitz Immigration is an overseas recruitment and manpower placement platform connecting skilled Indian workers with verified international employers across the Middle East, Europe, Asia Pacific, and beyond. The platform serves two primary audiences simultaneously: job seekers from India looking for overseas employment, and employers abroad who need to hire vetted Indian talent.

The product is currently a marketing and lead-generation website built in Next.js. The homepage is fully built; all other routes are scaffolded but empty.

---

## 2. Business Context

### Company Profile
- **Registered**: Blitz Immigration, 402 Empire Business Hub, SG Highway, Ahmedabad, Gujarat 380054, India
- **License**: MEA Licensed Recruiter (Ministry of External Affairs, India) — the statutory license required for Indian agencies sending workers abroad
- **Registration**: BLZ-2026-78421
- **GST**: 24AABCB1234K1ZP
- **Operations**: Monday–Saturday, 9:00 AM–6:00 PM
- **Contact**: +91 98765 43210 · info@blitzimmigration.com · support@blitzimmigration.com

### Key Stats (current)
| Metric | Value |
|---|---|
| Workers placed globally | 1,200+ |
| Verified employer partners | 80+ |
| Industry experience | 8 years |
| Destination countries | 15+ |
| Sectors covered | 20+ |
| Total placements | 5,000+ |

### Business Rules
- **Zero cost to workers** — candidates never pay to apply; this is a core trust signal and legal compliance requirement
- Workers and employers must be informed of all requirements, procedures, and costs upfront before any commitment
- All overseas placement is subject to employer requirements, destination-country regulations, and applicable government approvals

---

## 3. Target Users

### Primary: Job Seekers (Indian Workers)
Skilled and semi-skilled professionals from India looking for employment abroad. Key characteristics:
- Trade workers: electricians, plumbers, welders, HVAC technicians, masons, carpenters
- Healthcare: nurses, caregivers, medical technicians, support staff
- Hospitality: hotel staff, chefs, housekeeping, F&B, front office
- Manufacturing, logistics, transportation, agriculture, IT, engineering, facility management
- Mix of experienced professionals and freshers (first-time international job seekers)
- Primarily seeking Gulf (UAE, Saudi Arabia, Qatar, Kuwait, Oman) and Europe destinations

### Secondary: Employers (International Businesses)
Companies in destination countries hiring Indian workers:
- Construction firms, manufacturing plants, hospitality groups, healthcare facilities
- Need pre-screened, skill-tested candidates with visa and compliance support
- Want reliable recruitment partnership with Indian MEA-licensed agency

---

## 4. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.9 (App Router) |
| Language | TypeScript 5 |
| Runtime | React 19 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12, GSAP 3.15 |
| Icons | lucide-react |
| Fonts | Space Grotesk (headings), Inter (body), JetBrains Mono (tabular data) |
| Deployment | (TBD — likely Vercel) |

### Known Technical Debt
- Google Fonts loaded via inline `@import` in each component — must migrate to `next/font` in root layout for production
- `app/layout.tsx` metadata is still placeholder (`"Create Next App"`) — needs real title, description, and OG tags
- CSS design tokens (`--cw-*`) redeclared in every component's `<style>` block — should be extracted to `globals.css` or Tailwind theme extension

---

## 5. Design System

Documented in `theme.md`. Summary:

### Visual Concept
A travel-artifact metaphor — departure boards, boarding passes, postcards, flight paths — because the product is literally about a journey. Each section uses one artifact appropriate to its content type. Not every section uses every artifact.

| Artifact | Content type | Where used |
|---|---|---|
| Departures board | Ranked/tabular listing data | CountriesWorkers — jobs table |
| Boarding pass | Grouped destination/sector cards | CountriesWorkers sector cards, IndustriesRecruit detail panel, FinalCTA split cards |
| Flight-path timeline | Ordered sequential process | HowItWorks 5-step list |
| Postcard | Testimonial/people content | SuccessStories cards |
| Torn ticket scallop edge | Hard "ready to act" CTA | CountriesWorkers, IndustriesRecruit, FinalCTA banners — NOT every section |

### Color Tokens
```
--cw-bg-warm:      #FFF8F1   warm ivory, card/section tints
--cw-ink:          #1C1410   primary text, near-black warm
--cw-ink-soft:     #6B5D52   secondary/muted text
--cw-orange:       #EA5B0C   primary brand accent
--cw-orange-deep:  #B6430A   hover states
--cw-orange-light: #FFE4CC   tonal badge/icon backgrounds
--cw-line:         #F0DFC9   hairline borders, dividers, dashed lines
```

### Typography
| Role | Font | Weights | Used for |
|---|---|---|---|
| Display | Space Grotesk | 500, 600, 700 | H1–H3, eyebrow labels, big stat numbers |
| Body | Inter | 400, 500, 600, 700 | Paragraphs, descriptions, UI labels |
| Mono | JetBrains Mono | 500, 600 | Numbers, codes, tabular data (always `tabular-nums`) |

### Component Patterns
- **Primary button**: `rounded-full bg-[--cw-orange] text-white px-6 py-3 text-sm font-semibold` + trailing `ArrowUpRight` icon for forward actions
- **Secondary button**: `rounded-full border border-[--cw-line] bg-white` + hover `border-[--cw-orange]`; on dark backgrounds: `border-white/40 text-white hover:bg-white/10`
- **Leading `PhoneCall` icon** on "talk to us" CTAs
- **Pill badges**: `rounded-full px-3 py-1 text-xs font-semibold` with orange/warm/neutral tonal backgrounds
- **Cards**: `rounded-2xl border border-[--cw-line]`, `rounded-b-3xl` for large CTA banners
- All interactive elements include `focus-visible` rings
- All hover transforms use `motion-safe:` prefix
- Every component includes `prefers-reduced-motion: reduce` override

---

## 6. Application Structure

### Routes (App Router)

| Route | Status | Description |
|---|---|---|
| `/` | ✅ Built | Home page — full 9-section layout |
| `/jobs` | ⬜ Empty | Job listings with country/sector filters |
| `/countries` | ⬜ Empty | Countries detail pages |
| `/about` | ⬜ Empty | Company about page |
| `/contact` | ⬜ Empty | Contact / enquiry form |
| `/blog` | ⬜ Empty | Blog / news |
| `/services` | ⬜ Empty | Services detail page |
| `/(workers)` | ⬜ Empty | Worker-specific route group |
| `/(employer)` | ⬜ Empty | Employer-specific route group |
| `/apply` | ⬜ Planned | Application form |
| `/register` | ⬜ Planned | Candidate registration |
| `/employers` | ⬜ Planned | Employer hiring enquiry |
| `/resources` | ⬜ Planned | Resource library |
| `/success-stories` | ⬜ Planned | Full testimonials page |
| `/workers` | ⬜ Planned | For workers landing page |
| `/jobs?country=DXB` | ⬜ Planned | Country-filtered job list |
| `/jobs?destination=UAE` | ⬜ Planned | Destination-filtered job list |

### Layout Structure
```
RootLayout (Navbar + Footer)
  └── HomePage
        ├── Hero
        ├── TrustBar
        ├── IndustriesRecruit
        ├── CountriesWorkers
        ├── HowItWorks
        ├── SuccessStories
        ├── FAQSection
        ├── ResourcesCareerGuides
        └── FinalCTA
```

---

## 7. Home Page — Section Specifications

### 7.1 Hero
**File**: `components/home/Hero.tsx`  
**Type**: Server Component  

| Element | Content |
|---|---|
| Background | `/hero.png` full-screen with `bg-black/65` overlay + decorative orange blob |
| Badge pill | "Licensed Global Recruiter · 1,200+ workers placed across 15+ countries" |
| H1 | "Your career beyond borders **starts here**" |
| Description | "We connect skilled Indian professionals with verified employers across Europe, the Middle East, North America, and beyond — in trades, healthcare, construction, hospitality, and more." |
| Primary CTA | "Apply as a worker" → `/workers` |
| Secondary CTA | "Hire staff from India" → `/employers` |

---

### 7.2 Trust Bar
**File**: `components/home/TrustBar.tsx`  
**Type**: Server Component  
**Layout**: Two-column (sticky left content + right credentials grid)  

**Left column stats**:
- 1,200+ workers placed globally
- 80+ verified employer partners
- 8 yrs industry experience

**8 credential cards** (right grid):
1. MEA Licensed Recruiter — Reg. No. B-XXXX/XXX/XXXX/XXXX
2. ISO 9001:2015 Certified — Quality Management System
3. Member — International Staffing Federation — Global Recruitment Standards
4. GDPR & Global Data Standards Compliant — Your data, protected worldwide
5. Zero Cost for Workers — No registration or hidden fees, ever
6. 80+ Verified Employer Partners — Background-checked across every region
7. End-to-End Visa Support — Documentation handled fully in-house
8. 24/7 Worker Support Line — From application to your first paycheck

---

### 7.3 Industries We Recruit For
**File**: `components/home/IndustriesRecruit.tsx`  
**Type**: Client Component (interactive sector tabs)  

Interactive: click a sector card on the left → boarding-pass detail panel appears on the right with roles + live openings.

**10 sectors**:

| Sector | Code | Destinations | Demand | Key Roles |
|---|---|---|---|---|
| Healthcare & Nursing | HLT | EU · UK · Canada · Gulf | Very High | Registered Nurse (2,400+), Caregiver (3,100+), Nursing Assistant (1,800+), Medical Technician (920+), Healthcare Support (1,500+) |
| Construction & Trades | CST | Germany · Gulf · Australia | High | Electrician (1,700+), Plumber (1,200+), Welder (980+), Carpenter (850+), HVAC Tech (620+) |
| Hospitality & Tourism | HSP | UAE · UK · Maldives | High | Front Office Exec (760+), Housekeeping (540+), Chef (430+), Restaurant (680+), Kitchen Helpers (900+) |
| Manufacturing & Production | MFG | Germany · Poland · Czech Republic | High | Machine Operator (2,200+), Assembly Worker (1,900+), Production Supervisor (410+), QC Tech (580+) |
| Logistics & Warehousing | LOG | Netherlands · UK · UAE | Steady | Warehouse (1,400+), Forklift (820+), Inventory (360+), Distribution (490+) |
| Transportation & Drivers | TRN | UK · EU · Gulf | Steady | HV Driver (1,100+), Delivery Driver (780+), Fleet Coordinator (220+), Transport Support (340+) |
| Agriculture & Farming | AGR | Canada · NZ · Netherlands | Seasonal | Farm Worker (1,600+), Greenhouse (740+), Harvest (920+), Livestock (380+) |
| Information Technology | ICT | Canada · Germany · Singapore | Very High | Software Developer (3,800+), IT Support (1,200+), Network Admin (650+), Data Specialist (970+) |
| Engineering & Technical | ENG | Germany · Australia · Gulf | High | Mechanical Eng (880+), Civil Eng (720+), Electrical Eng (640+), Project Coord (430+) |
| Facility Management | FMT | UAE · UK · Singapore | Steady | Maintenance Tech (590+), Building Services (420+), Cleaning Supervisor (340+), Utility (510+) |

**CTA banner** (torn-ticket edge): "Your skills are in demand abroad." — Browse All Jobs → `/register` | Talk to a Recruiter → `/contact`

---

### 7.4 Countries We Place Workers In
**File**: `components/home/CountriesWorker.tsx`  
**Type**: Server Component  

**Stats**: 10 countries · 825+ open roles · 3 regions · 6 Gulf nations hiring

**Departures board** (ranked table):

| # | Country | Code | Region | Open Jobs | Demand |
|---|---|---|---|---|---|
| 01 | UAE 🇦🇪 | DXB | Middle East & Gulf | 245+ | Hiring fast |
| 02 | Saudi Arabia 🇸🇦 | RUH | Middle East & Gulf | 180+ | Hiring fast |
| 03 | Qatar 🇶🇦 | DOH | Middle East & Gulf | 95+ | Steady demand |
| 04 | Kuwait 🇰🇼 | KWI | Middle East & Gulf | 75+ | Steady demand |
| 05 | Oman 🇴🇲 | MCT | Middle East & Gulf | 60+ | Steady demand |
| 06 | Malaysia 🇲🇾 | KUL | Asia Pacific | 55+ | Steady demand |
| 07 | Bahrain 🇧🇭 | BAH | Middle East & Gulf | 40+ | Selective hiring |
| 08 | Singapore 🇸🇬 | SIN | Asia Pacific | 30+ | Selective hiring |
| 09 | Romania 🇷🇴 | OTP | Europe | 25+ | Selective hiring |
| 10 | Croatia 🇭🇷 | ZAG | Europe | 20+ | Selective hiring |

**Sector boarding-pass cards** (6 destination groups):
- UAE: Construction, Hospitality, Logistics, Retail, Healthcare
- Saudi Arabia: Construction, Engineering, Maintenance, Healthcare
- Qatar: Infrastructure, Hospitality, Facility Management
- Kuwait & Oman: Oil & Gas Support, Construction, Technical Trades
- Malaysia & Singapore: Manufacturing, Electronics, Services
- Romania & Croatia: Skilled Trades, Manufacturing, Warehousing, Hospitality

**CTA banner**: "Ready to work abroad?" → Browse all openings + Talk to recruitment team

---

### 7.5 How It Works
**File**: `components/home/HowItWorks.tsx`  
**Type**: Server Component  
**Visual**: Flight-path timeline (dashed vertical line + numbered circular nodes)

**5 steps**:
1. **Browse Available Jobs** — Job descriptions, salary & benefits, destination details
2. **Submit Your Application** — Application form, resume upload, supporting documents
3. **Screening & Employer Selection** — Interviews, trade tests, skill assessments
4. **Documentation & Pre-Departure Support** — Employment paperwork, visa guidance, medical requirements
5. **Travel & Start Your New Job** — Final approvals, travel arrangements, ongoing support

**Transparency callout**: Workers understand the full process before committing; all requirements explained upfront.

---

### 7.6 Success Stories
**File**: `components/home/SuccessStories.tsx`  
**Type**: Server Component  
**Visual**: Postcard-style cards (dashed border + rotated destination stamp)

**6 testimonials**:

| Name | Role | Destination |
|---|---|---|
| Rajesh Kumar | Construction Supervisor | UAE 🇦🇪 |
| Mohammad Arif | HVAC Technician | Saudi Arabia 🇸🇦 |
| Suresh Patel | Warehouse Associate | Qatar 🇶🇦 |
| Deepak Singh | Welder | Oman 🇴🇲 |
| Ramesh Yadav | Electrician | Kuwait 🇰🇼 |
| Joseph Mathew | Hotel Staff | UAE 🇦🇪 |

**Video stories**: "Coming soon" placeholder — planned feature.

---

### 7.7 FAQ Section
**File**: `components/home/FAQSection.tsx`  
**Type**: Client Component (search + category filter + accordion)  
**SEO**: FAQPage JSON-LD schema embedded  

**14 Q&As across 4 categories**:

- **Costs & Trust** (2): Paying to apply · Job genuineness
- **Eligibility & Skills** (2): English requirements · Freshers eligibility
- **Application Process** (5): Timeline · After submission · Not selected · Employer cancels · How to apply
- **Documents & Destinations** (3): Required documents (passport, CV, certs, etc.) · Pre-departure assistance · Countries covered

---

### 7.8 Resources & Career Guides
**File**: `components/home/ResourcesCareerGuides.tsx`  
**Type**: Client Component  

**3 featured guide cards**:
- Visa & Work Permit Guides → `/resources/visa-guides` (6 min read)
- Salary Guides by Country & Industry → `/resources/salary-guides` (8 min read)
- Country Career Guides: What to Expect Abroad → `/resources/country-guides` (10 min read)

**8 article links** covering: working abroad from India, required documents, UAE vs Saudi salary comparison, top hiring countries, interview preparation, employment contracts, highest-paying roles, recruitment process overview.

---

### 7.9 Final CTA
**File**: `components/home/FinalCTA.tsx`  
**Type**: Server Component  
**Visual**: Dual boarding-pass cards + trust stats board + orange scallop CTA banner  

**Job Seekers card**: "Browse Jobs" → `/jobs`  
**Employers card**: "Hire Talent" → `/contact`  
**Trust stats**: STATUS: VERIFIED · COUNTRIES: 15+ · SECTORS: 20+ · PLACEMENTS: 5000+ · SUPPORT: ACTIVE  
**Final banner**: "Apply Today. Hire With Confidence."  

---

## 8. Navigation

### Navbar (`components/layout/Navbar.tsx`)
- Fixed, transparent over hero; transitions to solid white pill on scroll (`scrollY > 80`)
- Logo: "Blitz / Immigration" with orange `BriefcaseBusiness` icon
- Desktop links: Jobs · Countries · Services ▾ · Resources ▾ · About Us · Contact
- Services dropdown: Overseas Recruitment, Work Visa Assistance, Resume Assessment, Interview Preparation, Documentation Support, Pre-Departure Guidance
- Resources dropdown: Blog, Success Stories, FAQ, Recruitment Process, Salary Guides
- CTA: "Apply Now" → `/apply` (orange rounded-full button with ArrowUpRight)
- Mobile: hamburger → slide-down panel with same links + WhatsApp link

### Footer (`components/layout/Footer.tsx`)
- Dark background (hero image + `bg-black/90`) with orange accents
- Terminal stats board: 4-stat grid (ACTIVE · 15+ · 20+ · 5000+)
- Links: Quick Links · Job Seeker Resources · Employer links · Contact details · Office address
- Compliance block: Registration, License, GST numbers + verification disclaimer
- Legal links: Privacy Policy, Terms & Conditions, Cookie Policy, Disclaimer, Refund Policy
- Social: WhatsApp (others commented out — to be added)
- Copyright: © 2026 Blitz Immigration

---

## 9. Pages to Build (Backlog)

These routes are linked from the homepage but are not yet implemented:

### High Priority (core conversion paths)
| Page | Route | Description |
|---|---|---|
| Apply / Register | `/apply`, `/register` | Candidate application form — name, phone, experience, skills, target country, resume upload |
| Jobs Listing | `/jobs` | Browseable/filterable job listings with country, sector, and demand filters |
| Contact | `/contact` | Enquiry form for both job seekers and employers + office details |
| For Workers | `/workers` | Landing page tailored to job seekers with clear next steps |
| For Employers | `/employers` | Landing page for employers with hiring enquiry form |

### Medium Priority
| Page | Route | Description |
|---|---|---|
| Countries | `/countries` | Individual country pages (visa rules, open jobs, employer sectors) |
| Resources Centre | `/resources` | Full resource library index |
| About Us | `/about` | Company story, team, licenses, values |
| Success Stories | `/success-stories` | Full testimonials + planned video stories |

### Lower Priority
| Page | Route | Description |
|---|---|---|
| Services | `/services` | Detailed services for workers and employers |
| Blog | `/blog` | Content/SEO articles |
| Individual Resource Pages | `/resources/visa-guides`, etc. | Long-form guides |
| Country-filtered Jobs | `/jobs?country=DXB` | Pre-filtered job listings |

---

## 10. SEO & Metadata (Outstanding)

- `app/layout.tsx` `<title>` and `<description>` are still `"Create Next App"` — must be replaced
- Missing: Open Graph tags, Twitter card meta, favicon (placeholder in `/app/favicon.ico`)
- FAQPage JSON-LD is implemented in `FAQSection.tsx` — other pages will need schema markup as built
- All `<Image>` alt texts are present; decorative elements use `aria-hidden="true"`

---

## 11. Accessibility

Current state:
- All interactive elements have `focus-visible` rings defined
- All decorative icons and shapes use `aria-hidden="true"`
- `prefers-reduced-motion` overrides are in every component's `<style>` block
- Mobile hamburger button has `aria-label`
- FAQ accordion uses `aria-expanded`, `aria-controls`, `aria-labelledby`, and `role="region"` correctly

Outstanding:
- No skip-to-content link
- Color contrast of `--cw-ink-soft` (#6B5D52) on white backgrounds should be verified against WCAG AA
- Full screen-reader testing not yet done

---

## 12. Performance Notes

- `/hero.png` is used as background in Hero, Footer, and IndustriesRecruit header — ensure it is properly optimized (WebP, sized correctly)
- Fonts are loaded via per-component `@import` — will cause multiple font requests; must be consolidated into `next/font` in root layout before production
- GSAP is a dependency but the scroll animation was removed — verify it can be removed from `package.json` if no longer used anywhere
- Framer Motion is used in `IndustriesRecruit` for the panel slide-in animation

---

## 13. Open Decisions

| Decision | Current state | Recommended action |
|---|---|---|
| Font loading | Per-component `@import` | Migrate to `next/font/google` in `app/layout.tsx` |
| CSS tokens | Redeclared per component | Extract to `globals.css` or Tailwind theme |
| Job data | Hardcoded in components | Connect to CMS or database when real jobs exist |
| Stats (1,200+, 5,000+, etc.) | Hardcoded | Connect to live database counts |
| Registration number | `B-XXXX/XXX/XXXX/XXXX` placeholder | Replace with real MEA license number |
| GSAP dependency | Still in package.json, not used | Remove if no scroll animation planned |
| Social media links | Commented out in Footer | Add real profile URLs when accounts are ready |
| WhatsApp number | `+91 99999 99999` placeholder | Replace with real business number |
| Metadata | Placeholder | Write real SEO title, description, OG tags |
    