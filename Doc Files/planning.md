**KARO SIMPLE**

**Marketing Website - Complete Frontend Build Document**

Separate Project · Next.js 14 · GSAP · Three.js · India Market

_Version 1.0 · Senior Frontend Engineer Reference · Pre-Launch Confidential_

**── SECTION 0 ──**

# **Strategic Decision: Separate Frontend Project**

The Karo Simple marketing website is built as a completely independent Next.js project - separate from the dashboard codebase. This is the right architectural decision for the following reasons:

- SEO isolation - marketing pages need aggressive SSG/ISR optimisation that conflicts with dashboard auth patterns
- Independent deployments - can push marketing updates without touching dashboard code or database connections
- Bundle size - marketing pages must be < 150KB JS gzipped; dashboard imports (charts, tables, data grids) would balloon this
- Different scaling needs - marketing frontend scales horizontally behind CDN; dashboard needs sticky sessions for auth
- Team separation - design team can own marketing site; product team owns dashboard; no merge conflicts
- Different tech stack layers - marketing uses GSAP + Three.js for animations; dashboard uses functional UI libraries only

## **Project Architecture**

| **Item**      | **Marketing Site**      | **Dashboard**               |
| ------------- | ----------------------- | --------------------------- |
| Repository    | karosimple-marketing    | karosimple-app              |
| Framework     | Next.js 14 (App Router) | Next.js 14 (App Router)     |
| Deployment    | Vercel (CDN edge)       | Vercel (Node.js serverless) |
| Domain        | karosimple.in           | app.karosimple.in           |
| Auth          | None - public only      | NextAuth.js + Google OAuth  |
| Database      | None - no DB connection | Prisma + PostgreSQL         |
| Animation     | GSAP + Three.js         | Framer Motion (minimal)     |
| Styling       | Tailwind CSS + CSS vars | Tailwind CSS + CSS vars     |
| Bundle target | < 150KB gzipped         | < 400KB gzipped             |
| Rendering     | SSG + ISR               | SSR + Client                |

## **How the Two Projects Communicate**

- Marketing site has NO database connection - zero API routes that hit DB
- CTA buttons (Get Started, Sign In) deep-link to app.karosimple.in/register and app.karosimple.in/login
- Shared design tokens live in a private npm package @karosimple/design-tokens - both repos install it
- Blog content can be fetched from a headless CMS (Sanity or Contentful) - no shared database needed
- Analytics shared via GA4 cross-domain tracking - same GA4 property, separate data streams

_The QR landing page (QRLanding.jsx) stays in the dashboard project at app.karosimple.in/r/\[qrSlug\]. It is NOT part of the marketing site._

**── SECTION 1 ──**

# **Complete Tech Stack**

## **Core Framework**

| **Package** | **Version**       | **Purpose**                                 |
| ----------- | ----------------- | ------------------------------------------- |
| next        | 14.x (App Router) | Framework - SSG/ISR for all marketing pages |
| react       | 18.x              | UI library                                  |
| react-dom   | 18.x              | DOM rendering                               |
| typescript  | 5.x               | Type safety across all components           |
| node        | 20.x LTS          | Runtime - match Vercel default              |

## **Styling**

| **Package**             | **Version** | **Purpose**                                    |
| ----------------------- | ----------- | ---------------------------------------------- |
| tailwindcss             | 3.4.x       | Utility-first CSS - all layout and base styles |
| postcss                 | 8.x         | CSS pipeline for Tailwind                      |
| autoprefixer            | latest      | Vendor prefix automation                       |
| @tailwindcss/typography | latest      | Blog post prose styling                        |
| clsx                    | latest      | Conditional className composition              |
| tailwind-merge          | latest      | Merge Tailwind classes safely                  |

## **Animation Stack**

| **Package**        | **Version** | **Purpose / Where Used**                                                                        |
| ------------------ | ----------- | ----------------------------------------------------------------------------------------------- |
| gsap               | 3.12.x      | Primary animation engine - hero reveals, scroll-triggered section entrances, timeline sequences |
| @gsap/react        | 2.x         | React-safe GSAP hooks (useGSAP)                                                                 |
| three              | r158        | WebGL 3D - hero particle globe, background ambient effects                                      |
| @react-three/fiber | 8.x         | React renderer for Three.js - Hero scene component                                              |
| @react-three/drei  | 9.x         | Three.js helpers - OrbitControls, Float, Sparkles                                               |
| lenis              | 1.x         | Smooth scroll - replaces native scroll for GSAP ScrollTrigger sync                              |
| framer-motion      | 11.x        | Micro-interactions only - form states, modal transitions, toast                                 |

## **Forms & Validation**

| **Package**         | **Version** | **Purpose**                                                    |
| ------------------- | ----------- | -------------------------------------------------------------- |
| react-hook-form     | 7.x         | Contact form state management - performant, minimal re-renders |
| zod                 | 3.x         | Schema validation - contact form, newsletter                   |
| @hookform/resolvers | latest      | Bridge between react-hook-form and Zod                         |

## **UI Utilities**

| **Package**                  | **Version** | **Purpose**                                   |
| ---------------------------- | ----------- | --------------------------------------------- |
| lucide-react                 | 0.400+      | All icons - consistent, tree-shakeable        |
| react-hot-toast              | 2.x         | Toast notifications - form success / error    |
| @radix-ui/react-accordion    | latest      | Accessible FAQ accordion (unstyled)           |
| @radix-ui/react-dialog       | latest      | Demo video modal (accessible)                 |
| @radix-ui/react-toggle-group | latest      | Billing period toggle on pricing page         |
| next-themes                  | 0.3.x       | Dark mode support (future-proof the site)     |
| sharp                        | 0.33.x      | next/image optimisation - required for Vercel |

## **SEO & Legal**

| **Package**  | **Version** | **Purpose**                                   |
| ------------ | ----------- | --------------------------------------------- |
| next-sitemap | 4.x         | Auto-generates sitemap.xml on build           |
| next-seo     | 6.x         | SEO meta tags - DefaultSeo + NextSeo per page |
| schema-dts   | latest      | TypeScript types for JSON-LD structured data  |

## **Blog & Content (Phase 5)**

| **Package**         | **Version** | **Purpose**                                    |
| ------------------- | ----------- | ---------------------------------------------- |
| @sanity/client      | 6.x         | Fetch blog posts from Sanity CMS (recommended) |
| @portabletext/react | 3.x         | Render Sanity block content as React           |
| reading-time        | latest      | Calculate estimated read time for blog posts   |
| rehype-highlight    | latest      | Code syntax highlighting in technical posts    |

## **Dev & Build Tools**

| **Package**           | **Version** | **Purpose**                                |
| --------------------- | ----------- | ------------------------------------------ |
| eslint                | 8.x         | Linting - extends next/core-web-vitals     |
| prettier              | 3.x         | Code formatting                            |
| @next/bundle-analyzer | latest      | Inspect and control bundle size            |
| husky                 | latest      | Git hooks - lint + typecheck before commit |
| lint-staged           | latest      | Run linters only on staged files           |

**NEVER import heavy dashboard packages (recharts, ag-grid, react-query, prisma client) into the marketing project. Run bundle-analyzer before every release to verify.**

**── SECTION 2 ──**

# **Folder Structure - Complete Tree**

Every file below is independently purposeful. Create placeholder files for all of them before writing any component code - this enforces clean imports from day one.

## **Root Project Structure**

**karosimple-marketing/**

**├── app/ # Next.js App Router pages**

**│ ├── layout.tsx # Root layout - fonts, providers, CookieConsent**

**│ ├── page.tsx # Home /**

**│ ├── pricing/page.tsx # /pricing**

**│ ├── about/page.tsx # /about**

**│ ├── contact/page.tsx # /contact**

**│ ├── privacy/page.tsx # /privacy - Google OAuth required**

**│ ├── terms/page.tsx # /terms - Razorpay required**

**│ ├── refund-policy/page.tsx # /refund-policy - Razorpay required**

**│ ├── grievance/page.tsx # /grievance - IT Act 2000 required**

**│ ├── blog/**

**│ │ ├── page.tsx # /blog - post listing**

**│ │ └── \[slug\]/page.tsx # /blog/\[slug\] - individual post**

**│ ├── demo/page.tsx # /demo - book a call**

**│ ├── sitemap.ts # Dynamic sitemap generation**

**│ ├── robots.ts # robots.txt generation**

**│ └── not-found.tsx # Custom 404 page**

**│**

**├── components/**

**│ ├── layout/**

**│ │ ├── MarketingNav.tsx # Sticky nav - desktop + mobile drawer**

**│ │ ├── MarketingFooter.tsx # Footer - all links, social, legal**

**│ │ └── CookieConsentBanner.tsx # DPDPA 2023 compliance**

**│ │**

**│ ├── sections/ # Full-page-width sections (used once per page)**

**│ │ ├── HeroSection.tsx # Home hero - Three.js bg + GSAP reveal**

**│ │ ├── PainPointSection.tsx # Red-tint problem strip**

**│ │ ├── HowItWorksSection.tsx # 4-step process**

**│ │ ├── FeaturesSection.tsx # 6-card feature grid**

**│ │ ├── SocialProofStrip.tsx # Stat numbers - navy bg**

**│ │ ├── TestimonialsSection.tsx # Indian business testimonials**

**│ │ ├── PricingPreviewSection.tsx # 4-card preview on home**

**│ │ ├── FAQSection.tsx # Accordion - Home + Pricing**

**│ │ ├── CTABannerSection.tsx # Full-width green CTA close**

**│ │ ├── TrustBarSection.tsx # City pills / logo bar**

**│ │ └── PricingCompareTable.tsx # Full feature comparison table**

**│ │**

**│ ├── ui/ # Atomic reusable components**

**│ │ ├── PricingCard.tsx # Individual plan card + Razorpay CTA**

**│ │ ├── FeatureCard.tsx # Icon + title + description card**

**│ │ ├── TestimonialCard.tsx # Quote + avatar + stars card**

**│ │ ├── StatCard.tsx # Big green number + white label**

**│ │ ├── FAQItem.tsx # Single accordion item (Radix)**

**│ │ ├── CTAButton.tsx # Branded CTA button variants**

**│ │ ├── SectionHeading.tsx # Overline + H2 + subtext combo**

**│ │ ├── VideoModal.tsx # Demo video lightbox (Radix Dialog)**

**│ │ ├── WhatsAppButton.tsx # Branded WhatsApp CTA button**

**│ │ └── BillingToggle.tsx # Monthly/Annual toggle (Radix ToggleGroup)**

**│ │**

**│ ├── three/ # Three.js / R3F scene components**

**│ │ ├── HeroScene.tsx # Particle globe + floating QR cards**

**│ │ ├── ParticleField.tsx # Background ambient particles**

**│ │ └── FloatingCard.tsx # 3D floating UI card element**

**│ │**

**│ └── seo/**

**│ ├── JsonLd.tsx # JSON-LD structured data injector**

**│ └── schemas/ # TypeScript schema definitions**

**│ ├── organization.ts**

**│ ├── faqPage.ts**

**│ ├── softwareApp.ts**

**│ └── blogPosting.ts**

**│**

**├── hooks/**

**│ ├── useScrollSpy.ts # Active nav link on scroll**

**│ ├── useContactForm.ts # Contact form submit logic**

**│ ├── useGSAPReveal.ts # Reusable scroll reveal hook**

**│ ├── useRazorpay.ts # Razorpay Checkout JS integration**

**│ └── useLenis.ts # Smooth scroll initialisation**

**│**

**├── lib/**

**│ ├── razorpay.ts # Razorpay order creation (API route)**

**│ ├── formspree.ts # Contact form submission helper**

**│ ├── analytics.ts # GA4 event helpers**

**│ ├── gsap.ts # GSAP plugin registration (ScrollTrigger etc)**

**│ └── constants.ts # Site-wide constants - URLs, phone, email**

**│**

**├── data/**

**│ ├── pricing.ts # Plan details, feature lists, prices**

**│ ├── faq.ts # FAQ Q&A arrays - Home and Pricing**

**│ ├── features.ts # Feature cards data**

**│ ├── testimonials.ts # Indian business testimonials**

**│ └── navigation.ts # Nav links + footer link groups**

**│**

**├── styles/**

**│ ├── globals.css # CSS variables + Tailwind directives**

**│ └── animations.css # GSAP target classes + keyframe helpers**

**│**

**├── public/**

**│ ├── logo.svg # Karo Simple SVG logo**

**│ ├── logo-white.svg # White version for dark backgrounds**

**│ ├── og-image.png # 1200×630 Open Graph image**

**│ ├── favicon.ico**

**│ └── fonts/ # Self-hosted Inter (performance)**

**│**

**├── next.config.js**

**├── tailwind.config.ts**

**├── next-sitemap.config.js**

**├── tsconfig.json**

**└── package.json**

**── SECTION 3 ──**

# **Design System - Tokens, Typography & Spacing**

## **3.1 Colour Palette**

_Extracted from the Karo Simple logo: the "K" mark uses a dark forest green (#3DAA72 range) with a warm dark navy (#1B2A4A) - these become the brand's two pillars. Green = action, growth, trust. Navy = authority, depth, professionalism._

| **Token Name**    | **Hex Value** | **RGB**       | **Usage**                                               |
| ----------------- | ------------- | ------------- | ------------------------------------------------------- |
| \--ks-green       | #3DAA72       | 61, 170, 114  | Primary CTA buttons, checkmarks, accents, active states |
| \--ks-green-dark  | #2D8A5A       | 45, 138, 90   | Button hover state, green-dark text on white            |
| \--ks-green-light | #EFF6F1       | 239, 246, 241 | Success backgrounds, green-tinted cards                 |
| \--ks-navy        | #1B2A4A       | 27, 42, 74    | Primary headings, hero background, footer background    |
| \--ks-navy-mid    | #253559       | 37, 53, 89    | Secondary text on dark backgrounds, hover states        |
| \--ks-navy-light  | #3D4F72       | 61, 79, 114   | Tertiary dark text, icons on dark bg                    |
| \--ks-white       | #FFFFFF       | 255, 255, 255 | Card backgrounds, text on dark                          |
| \--ks-off-white   | #F5F7FA       | 245, 247, 250 | Page backgrounds, alternating sections                  |
| \--ks-muted       | #6B7A99       | 107, 122, 153 | Body text, captions, placeholder text                   |
| \--ks-border      | #EEF1F5       | 238, 241, 245 | Card borders, dividers, input borders                   |
| \--ks-red-soft    | #FEF2F2       | 254, 242, 242 | Pain point section background                           |
| \--ks-red         | #EF4444       | 239, 68, 68   | Negative indicators (never CTAs)                        |
| \--ks-whatsapp    | #25D366       | 37, 211, 102  | WhatsApp button ONLY - never reuse                      |

## **3.2 Typography**

Primary typeface: Inter (Google Fonts, self-hosted in /public/fonts/ for performance). Inter is chosen because it renders beautifully in both English and Devanagari-adjacent contexts, feels modern without being cold, and has excellent legibility on budget Android screens - the primary India target device.

| **Token**           | **Size**        | **Weight**    | **Line Height** | **Usage**                               |
| ------------------- | --------------- | ------------- | --------------- | --------------------------------------- |
| \--type-hero        | 56px / 3.5rem   | 800 ExtraBold | 1.1             | Hero H1 on desktop                      |
| \--type-hero-mobile | 32px / 2rem     | 800 ExtraBold | 1.15            | Hero H1 on mobile (< 640px)             |
| \--type-h1          | 44px / 2.75rem  | 700 Bold      | 1.2             | Page-level H1 (About, Pricing)          |
| \--type-h2          | 32px / 2rem     | 700 Bold      | 1.25            | Section headings                        |
| \--type-h3          | 22px / 1.375rem | 600 SemiBold  | 1.35            | Card titles, subsection headings        |
| \--type-body-lg     | 18px / 1.125rem | 400 Regular   | 1.7             | Hero subheadline, prominent body        |
| \--type-body        | 16px / 1rem     | 400 Regular   | 1.65            | Primary body text, feature descriptions |
| \--type-body-sm     | 14px / 0.875rem | 400 Regular   | 1.6             | Captions, meta info, footer text        |
| \--type-label       | 12px / 0.75rem  | 600 SemiBold  | 1.5             | Overlines, tags, badges - uppercase     |
| \--type-cta         | 16px / 1rem     | 600 SemiBold  | 1               | Button text - never below 16px          |
| \--type-price       | 48px / 3rem     | 800 ExtraBold | 1               | Pricing numbers (₹999)                  |

## **3.3 Spacing Scale**

Use the Tailwind default spacing scale. The following are the canonical spacing values used in marketing sections - do not deviate:

| **Usage**                          | **Tailwind Class**    | **px Value** | **Notes**                            |
| ---------------------------------- | --------------------- | ------------ | ------------------------------------ |
| Section vertical padding (desktop) | py-24                 | 96px         | Standard for all full-width sections |
| Section vertical padding (mobile)  | py-14                 | 56px         | Override with md:py-24               |
| Container max-width                | max-w-7xl mx-auto     | 1280px       | All content constrained here         |
| Container horizontal padding       | px-4 md:px-8 lg:px-16 | 16/32/64px   | Scale with breakpoint                |
| Card padding (desktop)             | p-8                   | 32px         | Feature cards, pricing cards         |
| Card padding (mobile)              | p-5                   | 20px         | md:p-8 override                      |
| Grid gap (cards)                   | gap-6 lg:gap-8        | 24/32px      | Feature + pricing card grids         |
| Stack gap (body copy)              | space-y-4             | 16px         | Paragraphs within sections           |
| Nav height (desktop)               | h-16                  | 64px         | Sticky nav fixed height              |
| Nav height (mobile)                | h-14                  | 56px         | Smaller touch area on mobile         |

## **3.4 Border Radius**

| **Component**      | **Class**    | **Value**           | **Never Use**                    |
| ------------------ | ------------ | ------------------- | -------------------------------- |
| CTA Buttons        | rounded-full | 9999px              | rounded-none (too harsh)         |
| Feature Cards      | rounded-2xl  | 16px                | rounded-sm (too subtle)          |
| Pricing Cards      | rounded-2xl  | 16px                |                                  |
| Input Fields       | rounded-xl   | 12px                |                                  |
| Badges / Pills     | rounded-full | 9999px              |                                  |
| Section CTA Banner | rounded-3xl  | 24px (if contained) |                                  |
| Testimonial Cards  | rounded-2xl  | 16px                |                                  |
| Mobile Drawer      | rounded-none | 0px                 | Rounded on drawer would look odd |

## **3.5 Shadow System**

| **Name**       | **CSS Value**                    | **Usage**                  |
| -------------- | -------------------------------- | -------------------------- |
| shadow-sm      | 0 1px 2px rgba(0,0,0,0.05)       | Default card resting state |
| shadow-card    | 0 4px 16px rgba(27,42,74,0.08)   | Elevated card hover state  |
| shadow-pricing | 0 8px 32px rgba(27,42,74,0.14)   | Recommended pricing card   |
| shadow-nav     | 0 2px 8px rgba(0,0,0,0.06)       | Sticky nav on scroll       |
| shadow-cta     | 0 4px 20px rgba(61,170,114,0.35) | Green CTA button hover     |

_Add shadow-card and shadow-pricing as custom utilities in tailwind.config.ts under theme.extend.boxShadow._

## **3.6 Animation Tokens (GSAP)**

| **Token**          | **Value**     | **Usage**                               |
| ------------------ | ------------- | --------------------------------------- |
| \--ease-out-expo   | power4.out    | Hero text reveal, section entrances     |
| \--ease-in-out     | power2.inOut  | Pricing toggle, FAQ accordion           |
| \--ease-bounce     | back.out(1.2) | Feature card hover lift, CTA pulse      |
| \--duration-fast   | 0.3s          | Hover states, micro-interactions        |
| \--duration-medium | 0.6s          | Card reveals, section entrances         |
| \--duration-slow   | 1.0s          | Hero sequence, page transitions         |
| \--stagger-cards   | 0.08s         | Stagger delay between card reveals      |
| \--stagger-lines   | 0.12s         | Stagger delay between text line reveals |

**── SECTION 4 ──**

# **Page-by-Page Specifications**

## **4.1 Home Page - /**

The home page has one job: convert an SMB owner who landed from Google search into a signed-up user. Every section is a step in a conversion funnel - not a brochure. The persuasion arc: GRAB ATTENTION → NAME THE PAIN → SHOW THE SOLUTION → BUILD BELIEF → PROVE WITH PROOF → REMOVE OBJECTIONS → CLOSE.

### **Hero Section - /components/sections/HeroSection.tsx**

| **Element**      | **Spec**                                                                                                                                                                            | **Copy**                                                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Background       | Navy #1B2A4A, min-h-\[90vh\] desktop, auto mobile                                                                                                                                   | -                                                                                                                          |
| Three.js Canvas  | Full-bleed behind content, z-index 0. ParticleField.tsx - floating green particles + wireframe QR code mesh slowly rotating. Disabled on mobile for performance.                    | -                                                                                                                          |
| Overline         | 12px, green, uppercase, letter-spacing 0.12em                                                                                                                                       | AI-POWERED REVIEW MANAGEMENT FOR INDIAN BUSINESSES                                                                         |
| H1 Headline      | text-4xl lg:text-6xl, 800 weight, white. Split into lines for GSAP stagger reveal.                                                                                                  | Get More 5-Star Google Reviews - Without Asking                                                                            |
| Subheadline      | text-base lg:text-xl, 400 weight, white/80. Appears 0.3s after H1.                                                                                                                  | Your happy customers scan a QR code and leave a real review in 10 seconds. Unhappy ones give you private feedback instead. |
| Primary CTA      | Green #3DAA72, rounded-full, py-4 px-8, w-full sm:w-auto, shadow-cta on hover, 48px min-height. GSAP entrance after subheadline.                                                    | Start Free Today →                                                                                                         |
| Secondary CTA    | White outline border-2, same dimensions, ghost style.                                                                                                                               | Watch 60-Second Demo                                                                                                       |
| Trust strip      | 14px, white/60, flex row with · dividers. Appears last in sequence.                                                                                                                 | ✅ Free to start · ✅ Works on any phone · ✅ Setup in 5 minutes                                                           |
| Hero visual      | Right column, hidden lg:block. React Three Fiber scene - floating phone mockup showing QR scan UI with green star selection animation. Slow Float animation from @react-three/drei. | -                                                                                                                          |
| Scroll indicator | Animated chevron-down at bottom of hero. GSAP infinite bounce. Disappears on first scroll.                                                                                          | -                                                                                                                          |

_GSAP timeline sequence: overline (0s) → H1 words stagger (0.1s) → subheadline (0.5s) → CTA buttons (0.8s) → trust strip (1.0s) → hero visual slides in from right (0.6s). Use useGSAP() hook inside a useLayoutEffect-safe context._

### **Pain Point Section - /components/sections/PainPointSection.tsx**

A punchy, emotional strip placed immediately after the hero. It makes the visitor feel understood before presenting any solution.

| **Element**  | **Spec**                                                                                                                                                                                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Background   | Very light red #FEF2F2, py-16                                                                                                                                                                                                                        |
| Headline     | text-2xl lg:text-3xl, navy, bold, centered: "One bad review can cost you 10 customers. You deserve a fair chance."                                                                                                                                   |
| 3 Stat cards | 3-column grid (1 col mobile). White bg, red left-border accent, shadow-sm. Stats: "67% of customers check Google reviews before visiting" \| "1 negative review stays on Google forever" \| "Most business owners never know a customer was unhappy" |
| Bridge text  | Centered below cards, 18px, navy, italic: "Karo Simple fixes all three. Here's how ↓"                                                                                                                                                                |
| Animation    | ScrollTrigger - stat cards count up (0 → final number) as section scrolls into view. Text and cards fade-up with stagger.                                                                                                                            |

### **How It Works - /components/sections/HowItWorksSection.tsx**

| **Element**     | **Spec**                                                                                                                                                                                                                                                                                                                                     |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Section heading | SectionHeading component: overline "Simple 4-Step Process" + H2 "How Karo Simple Works"                                                                                                                                                                                                                                                      |
| Layout          | 4 steps in a row on desktop (flex-row), stacked on mobile. Connecting dashed line between steps on desktop (CSS ::after pseudo-element, green dashed, absolute positioned).                                                                                                                                                                  |
| Each step       | Step number (large, green, ExtraBold, 64px) + Lucide icon (32px, navy bg circle, white icon) + Title (18px, bold) + Description (14px, muted, max 2 lines)                                                                                                                                                                                   |
| Steps content   | Step 1: "You get a QR code - place it at billing, table, or reception" (QrCode icon) \| Step 2: "Customer scans → picks a rating in one tap" (Smartphone icon) \| Step 3: "Happy customers post on Google. Unhappy ones message you privately" (Star icon) \| Step 4: "Track scans, reviews, and ratings in your dashboard" (BarChart3 icon) |
| Animation       | Steps animate in left-to-right on scroll, 0.12s stagger. Connecting line draws itself using GSAP strokeDashoffset animation on an SVG path.                                                                                                                                                                                                  |

### **Features Section - /components/sections/FeaturesSection.tsx**

| **Element**  | **Spec**                                                                                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Grid         | 1 col mobile → 2 col sm: → 3 col lg: - 6 cards total                                                                                                 |
| Card specs   | White bg, rounded-2xl, p-6, border border-\[#EEF1F5\], shadow-sm → shadow-card on hover. Transform: scale(1.02) on hover. Transition: 200ms ease.    |
| Card content | Green icon bg (rounded-xl, p-2.5, bg-\[#EFF6F1\]) + Lucide icon (24px, green) + H3 title (18px, bold, navy) + description (14px, muted, 3 lines max) |
| Feature 1    | QrCode icon - "Unlimited QR Codes" - Generate and brand a unique QR code for each table, counter, or team member                                     |
| Feature 2    | Sparkles icon - "AI Review Suggestions" - Pre-written review options your customers can post to Google in one tap                                    |
| Feature 3    | ShieldCheck icon - "Negative Feedback Shield" - Ratings 1-3 stars go to your private inbox, not Google                                               |
| Feature 4    | MessageCircle icon - "WhatsApp Alerts" - Get notified on WhatsApp the moment a review or complaint arrives                                           |
| Feature 5    | BarChart3 icon - "Live Analytics" - See scan rates, conversion percentages, and peak hours in real time                                              |
| Feature 6    | Users icon - "Employee Tracking" - Assign QR codes per staff member to track who drives the most reviews                                             |
| Animation    | Fade-up + slide from bottom on ScrollTrigger. 0.08s stagger between cards.                                                                           |

### **Social Proof Strip - /components/sections/SocialProofStrip.tsx**

| **Element** | **Spec**                                                                                                                                     |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Background  | Navy #1B2A4A, py-16, full width                                                                                                              |
| Layout      | 4 stats in a row (2-col on mobile with gap). Each: large green number + white label below                                                    |
| Stat 1      | 500+ - Indian Businesses Trust Karo Simple                                                                                                   |
| Stat 2      | 25,000+ - Google Reviews Generated                                                                                                           |
| Stat 3      | 0.8★ - Average Rating Improvement in 90 Days                                                                                                 |
| Stat 4      | 4.9/5 - Customer Satisfaction Score                                                                                                          |
| Animation   | Number counter animates from 0 to final value using GSAP ScrollTrigger. Duration: 2s, ease: power2.out. Triggers when strip enters viewport. |

### **Testimonials - /components/sections/TestimonialsSection.tsx**

| **Element**   | **Spec**                                                                                                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Layout        | 3-column grid desktop, 1-column mobile. Cards same height (align-items: stretch).                                                                                                             |
| Card          | White bg, rounded-2xl, p-6 lg:p-8, shadow-card, green left-border (border-l-4 border-\[#3DAA72\])                                                                                             |
| Card content  | 5 yellow stars (text-yellow-400) + quote text (italic, 16px, navy) + divider + avatar circle (initials, green bg) + name (bold) + business type + city (muted, 14px)                          |
| Testimonial 1 | "We went from 3.4 to 4.7 stars in 2 months. Every customer who walks in now scans the QR and leaves a review." - Ramesh Agarwal, Hair Salon Owner, Raipur CG                                  |
| Testimonial 2 | "The private feedback feature saved us - an angry customer gave us 2 stars privately, we called him back and resolved the issue before it hit Google." - Priya Sharma, Restaurant Owner, Pune |
| Testimonial 3 | "Our clinic's Google rating jumped from 3.9 to 4.6. Patients trust us more before they even walk in." - Dr. Anil Mehta, Dental Clinic, Jaipur                                                 |
| Animation     | Cards slide in from bottom with stagger on ScrollTrigger. GSAP: y: 60 → 0, opacity 0 → 1.                                                                                                     |

### **Pricing Preview - /components/sections/PricingPreviewSection.tsx**

Same PricingCard.tsx components as the full /pricing page. Shows all 4 plans with abbreviated feature lists. "View Full Pricing →" link below leads to /pricing.

### **FAQ Section - /components/sections/FAQSection.tsx**

| **Element** | **Spec**                                                                                                                                                                                                 |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Component   | Radix UI Accordion, unstyled. Single-open mode. Smooth CSS height transition (transition: height 300ms ease).                                                                                            |
| Visual      | Each item: white bg, border-b, question text (16px, bold, navy) + ChevronDown (rotates 180° on open, GSAP rotate) + answer (14px, muted, py-4)                                                           |
| Q1          | "Is it really free to start?" → Yes - Free plan gives you 1 QR code and 50 customer scans per month. No credit card required.                                                                            |
| Q2          | "Does this work with Google My Business?" → Yes. Reviews post directly to your Google Business Profile. Setup takes under 5 minutes.                                                                     |
| Q3          | "What happens when a customer gives 1-2 stars?" → They see a private feedback form. Their response goes to your inbox - not Google. You get a chance to fix the issue before it becomes a public review. |
| Q4          | "Do customers need to download an app?" → No. It works in any mobile browser after scanning the QR code. Zero friction for your customers.                                                               |
| Q5          | "Can I use it for multiple branches?" → Yes. Starter and Pro plans support multiple locations. Agency plan supports unlimited branches under one account.                                                |
| Q6          | "Is my customer data safe?" → Yes. We are compliant with India's DPDPA 2023. Your data stays on Indian-region servers. See our Privacy Policy.                                                           |
| JSON-LD     | Add FAQPage structured data (schema.org/FAQPage) to this section. This creates expandable FAQ results directly in Google Search - highest-ROI schema markup.                                             |

### **Final CTA Banner - /components/sections/CTABannerSection.tsx**

| **Element**  | **Spec**                                                                                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Background   | Green #3DAA72, rounded-3xl (if inside container), or full-bleed. py-20.                                                                                                   |
| Headline     | text-3xl lg:text-5xl, 800 weight, white, centered: "Your competitors are already getting more reviews."                                                                   |
| Sub-text     | 20px, white/80, centered: "Start free today - no credit card required."                                                                                                   |
| CTA          | White bg, green text, rounded-full, px-10 py-4, 18px, SemiBold. Hover: shadow-lg, scale(1.03). Text: "Create Free Account →"                                              |
| Social proof | Below button: "Join 500+ Indian businesses already using Karo Simple" - 14px, white/70                                                                                    |
| Animation    | GSAP: section bounces in (scale 0.95 → 1) on ScrollTrigger. Button has a subtle pulse animation (GSAP repeat: -1, yoyo: true, scale: 1.04, duration: 2s) to draw the eye. |

## **4.2 Pricing Page - /pricing**

This page drives direct revenue. Every design decision is subordinate to one goal: getting the visitor to click a plan CTA.

| **Section**           | **Spec**                                                                                                                                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero                  | White bg (not navy - pricing page should feel clean and trustworthy). H1: "Simple, Transparent Pricing". Subtext: "Start free. Upgrade when your business grows. Cancel anytime." BillingToggle.tsx: Monthly/Annual. Annual shows green pill badge "Save 2 months". |
| Plan cards row        | 4 PricingCard.tsx components. Desktop: flex-row. Mobile: stacked - Pro card first (most important). Pro card gets: 2px green border, navy header, "Most Popular" pill badge in green.                                                                               |
| Risk-removal banner   | Below cards: green-tinted box, ShieldCheck icon - "7-day money-back guarantee · Cancel anytime · No lock-in contracts"                                                                                                                                              |
| Trust bar             | Razorpay logo + SSL padlock + "10,000+ secure transactions" - muted gray, 14px, centered                                                                                                                                                                            |
| Feature compare table | Full-width table. Sticky first column (plan names). Green Check / gray X. Sections: Core Features, Analytics, Support, Extras.                                                                                                                                      |
| Billing FAQ           | 4 questions: "Can I switch plans anytime?" "What happens if I exceed my scan limit?" "Do you offer GST invoices?" "What payment methods are accepted?"                                                                                                              |
| Page footer CTA       | Plain text link: "Still unsure? Chat with us on WhatsApp →" (WhatsApp green)                                                                                                                                                                                        |

### **PricingCard.tsx Component Spec**

| **Plan** | **Price (Monthly)** | **Price (Annual /mo)** | **Target User**                               | **Badge**    |
| -------- | ------------------- | ---------------------- | --------------------------------------------- | ------------ |
| Free     | ₹0                  | ₹0                     | Solo business owner trying the product        | Free Forever |
| Starter  | ₹999                | ₹799                   | Single-location restaurant, salon, clinic     |              |
| Pro      | ₹2,499              | ₹1,999                 | Growing business with staff + analytics needs | Most Popular |
| Agency   | ₹6,999              | ₹5,599                 | Marketing agency or multi-branch franchise    | Best Value   |

## **4.3 About Page - /about**

The About page is a trust-building page for Indian SMB owners who are skeptical of software products. Tone: personal, mission-driven, honest. Design: warmer than the home page - more whitespace, larger photos/illustrations.

- Hero: Navy bg, "We're on a mission to help Indian businesses grow through trust" - H1 white, 44px. Subtext: "Built in India, for India."
- "Why we built Karo Simple" story - 2-3 paragraphs, right side: founder photo placeholder. Start with a relatable Indian SMB moment.
- Mission stat block - 3 stat cards on navy bg (same StatCard.tsx component).
- "The problem we solve" - green-tinted callout box with ShieldCheck icon. Explain the negative review trap that Indian SMBs face.
- "Our Values" - 4 FeatureCard.tsx instances: Simple | Trustworthy | India-First | Empowering.
- Team / Founder section - even a text-only card with LinkedIn is acceptable for v1.0.
- CTABannerSection at bottom.

_Include company GSTIN and CIN in the About page footer area - signals legitimacy to Indian business owners evaluating the product._

## **4.4 Contact Page - /contact**

Primary goal: capture leads. Secondary: provide WhatsApp channel. On mobile (India's primary device), WhatsApp CTA comes BEFORE the form.

- WhatsApp CTA block at top on mobile: large green button "Chat with us on WhatsApp →", response time badge "Usually replies within 2 hours".
- Layout: 60/40 split on desktop. Left: contact form. Right: contact info cards.
- Form fields: Name (required) | Email (required, Zod email) | Phone (optional, +91 format hint) | Business Type (select: Restaurant | Salon | Clinic | Medical Store | Kirana | CA/Lawyer | Other) | Message (textarea, 4 rows, min 20 chars).
- Submit button: "Send Message →" full-width, green, 48px. react-hook-form + Zod validation.
- On success: react-hot-toast green toast "Message sent! We'll reply within 24 hours."

## **4.5 Legal Pages - /privacy, /terms, /refund-policy, /grievance**

All four legal pages use a shared LegalPageLayout wrapper: max-w-2xl centered, generous line-height (1.75), H2 section headers in navy, body 16px. No animations - these pages should load instantly and feel reliable.

**All four pages must be live BEFORE activating Google OAuth or Razorpay. Google checks the Privacy Policy URL during OAuth consent screen setup. Razorpay checks Terms and Refund Policy during merchant verification.**

**── SECTION 5 ──**

# **Animation System - GSAP + Three.js**

## **5.1 GSAP Setup**

Register all GSAP plugins once in lib/gsap.ts. Import this file in app/layout.tsx before any component renders.

**// lib/gsap.ts**

**import gsap from "gsap";**

**import { ScrollTrigger } from "gsap/ScrollTrigger";**

**import { SplitText } from "gsap/SplitText"; // GSAP Club - purchase required**

**import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; // GSAP Club**

**gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);**

**// Lenis smooth scroll → ScrollTrigger sync**

**export function connectLenisToGSAP(lenis: any) {**

**lenis.on("scroll", ScrollTrigger.update);**

**gsap.ticker.add((time) => { lenis.raf(time \* 1000); });**

**gsap.ticker.lagSmoothing(0);**

**}**

_If GSAP Club (SplitText, DrawSVGPlugin) is not in budget, use the free alternatives: split text manually with .split(" ") and wrap each word in a span; SVG path animation via stroke-dashoffset in CSS._

## **5.2 Reusable Scroll Reveal Hook**

**// hooks/useGSAPReveal.ts**

**import { useGSAP } from "@gsap/react";**

**import gsap from "gsap";**

**import { ScrollTrigger } from "gsap/ScrollTrigger";**

**export function useGSAPReveal(containerRef, options = {}) {**

**const { y = 50, stagger = 0.08, duration = 0.7, start = "top 80%" } = options;**

**useGSAP(() => {**

**const targets = containerRef.current.querySelectorAll("\[data-reveal\]");**

**gsap.fromTo(targets,**

**{ opacity: 0, y },**

**{ opacity: 1, y: 0, duration, stagger, ease: "power4.out",**

**scrollTrigger: { trigger: containerRef.current, start } }**

**);**

**}, { scope: containerRef });**

**}**

Add data-reveal attribute to any element you want to animate. This keeps animation logic out of JSX and makes it trivially reusable.

## **5.3 Three.js Hero Scene**

The hero background uses React Three Fiber. The scene has two elements: (1) a slowly rotating wireframe globe made of particle dots that represent "review connections" across India, and (2) a floating phone card that shows the QR scan UI.

**// components/three/HeroScene.tsx**

**// Tech: @react-three/fiber + @react-three/drei + Three.js r158**

**// Performance: Canvas limited to 30fps on mobile, 60fps desktop**

**// Fallback: Hidden entirely on mobile (hidden lg:block wrapper)**

**// Color palette: uses ks-green (#3DAA72) for particles**

**// Size: fills full hero height, pointer-events: none, z-index: 0**

| **Scene Element**   | **Implementation**                                                                                                      | **Performance**                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| Particle field      | BufferGeometry with 800 random points. PointsMaterial, green colour, size 0.02. Rotation: 0.001 per frame on Y axis.    | CPU: low - simple rotation only |
| Wireframe globe     | SphereGeometry(3, 16, 16) + EdgesGeometry + LineSegments. Navy-light colour, opacity 0.3.                               | CPU: very low                   |
| Floating phone card | Three.js PlaneGeometry with texture (QR UI screenshot). Float component from @react-three/drei - slow vertical bobbing. | CPU: low                        |
| Ambient light       | ambientLight intensity 0.4 + pointLight green tinted at position \[5, 5, 5\].                                           | GPU: negligible                 |
| Camera              | PerspectiveCamera fov=50. OrbitControls disabled. Camera slightly tilted down (y: -0.5).                                | -                               |

**Three.js canvas must have willReadFrequently: false and powerPreference: "low-power" on mobile. Test frame rate on Redmi Note 12 or similar - if it drops below 24fps, reduce particle count or disable scene on mobile.**

## **5.4 Animations by Section - Quick Reference**

| **Section**          | **Animation**                                                                  | **Trigger**           |
| -------------------- | ------------------------------------------------------------------------------ | --------------------- |
| Navbar               | background: transparent → white + shadow-nav on scroll > 50px                  | window scroll event   |
| Hero headline        | SplitText word-by-word stagger reveal. y: 40 → 0, opacity 0 → 1, stagger 0.05s | Page load, 0.2s delay |
| Hero CTAs            | Fade up after headline completes                                               | GSAP timeline         |
| Pain point stats     | CountUp from 0 to final number (2s, power2.out)                                | ScrollTrigger enter   |
| How It Works line    | DrawSVG: connecting line draws itself left to right                            | ScrollTrigger enter   |
| Feature cards        | Stagger fade-up, 0.08s per card                                                | ScrollTrigger enter   |
| Social proof numbers | CountUp animation, 2.5s duration                                               | ScrollTrigger enter   |
| Testimonial cards    | Slide from bottom, stagger 0.12s                                               | ScrollTrigger enter   |
| Pricing cards        | Scale from 0.95 to 1 + fade in, stagger 0.1s                                   | ScrollTrigger enter   |
| CTA banner           | Scale 0.95 → 1 bounce entrance                                                 | ScrollTrigger enter   |
| CTA button pulse     | scale 1 → 1.04 → 1, infinite, 2s, yoyo                                         | Plays after entrance  |
| FAQ items            | Height 0 → auto + opacity, 300ms ease (CSS)                                    | Radix state change    |
| Nav mobile drawer    | y: -100% → 0, 400ms, power3.out                                                | Hamburger click       |

## **5.5 Performance Rules for Animation**

- ONLY animate transform (translate, scale, rotate) and opacity - these are GPU-composited. Never animate width, height, margin, padding, top, left.
- Use will-change: transform only on elements that are actively animating. Remove it after animation ends.
- Respect prefers-reduced-motion. Wrap all GSAP timelines in: if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { gsap.set(targets, final state); return; }
- Three.js canvas: use gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)) - prevents 3x pixel density on high-DPI phones from tanking performance.
- ScrollTrigger: use scrub: false for snap animations, scrub: 0.5 for parallax effects. Never scrub: true (too CPU-heavy).
- Lenis smooth scroll: disable on iOS Safari < 15 (scroll momentum already perfect). Feature-detect with user agent check.

**── SECTION 6 ──**

# **UX Rules - Do's and Don'ts for Indian Market**

## **6.1 Mobile-First Non-Negotiables**

India statistic: 83% of SMB owners will first see the Karo Simple marketing site on an Android phone, often on 4G in a Tier 2 or 3 city. Desktop is secondary. Build mobile-first, enhance for desktop.

| **Rule**    | **DO**                                                                        | **DON'T**                                                                                     |
| ----------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| CSS default | Write base Tailwind for mobile first. Add md: lg: for larger screens.         | Never write desktop-first and use max-md: overrides.                                          |
| Hero layout | Text + CTAs as primary hero. Phone mockup hidden on mobile.                   | Never hide the headline or CTA behind an image on mobile.                                     |
| CTA buttons | w-full on mobile (< 640px). 48px min-height. Rounded-full.                    | Never make CTAs smaller than 44px tall on mobile.                                             |
| Font sizes  | text-2xl (24px) for H1 on mobile. Scale up with lg:text-5xl.                  | Never use font size below 14px on any marketing page.                                         |
| Navigation  | Hamburger → top-slide drawer on mobile. All links 52px tap height.            | Never use horizontal nav links on mobile. Never use a side-slide drawer (too far from thumb). |
| Forms       | Input height min 52px. Labels above inputs (never floating placeholder only). | Never put labels inside placeholders as the only label - fails accessibility.                 |
| Images      | next/image for all. loading="lazy" on below-fold images.                      | Never use &lt;img&gt; tags. Never use large hero images on mobile without WebP.               |
| Whitespace  | py-14 on mobile sections. Breathable layout.                                  | Never use desktop padding (py-24) on mobile - too cramped.                                    |
| Three.js    | Load HeroScene only on lg:+ screens. Mobile gets static gradient.             | Never load WebGL on mobile - frame drops will make the site feel broken.                      |

## **6.2 CTA Copy Rules - India Market**

| **Pattern**                       | **Why It Works**                                                                                                       | **Example**                                                                |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| ₹ always, never \$                | Indian SMBs immediately distrust USD pricing - they assume it's a foreign product that doesn't understand them.        | "Plans from ₹999/month" NOT "Plans from \$12/month"                        |
| "Free to start" over "Free trial" | "Trial" implies the free period ends and you'll be charged. "Start free" feels like a genuine offer.                   | "Start free today" NOT "Start your free trial"                             |
| "No credit card required"         | Biggest conversion barrier in India is fear of auto-charge. Explicitly removing this increases CTR by ~40%.            | Show this as a small text note below the primary CTA button.               |
| WhatsApp mentioned                | Stating WhatsApp support dramatically increases trust for Indian SMBs - they know they can reach a real person easily. | "Chat with us on WhatsApp" in nav or hero converts skeptics.               |
| Arrow (→) on CTA                  | Signals forward motion. Internationally recognised. Works across languages and literacy levels.                        | "Get Started →" NOT "Get Started"                                          |
| Local city references             | SMBs in Raipur, Jaipur, Pune trust a product that names their city. Feels less like a big tech company.                | "Trusted by 500+ businesses across Raipur, Pune, Jaipur..."                |
| Social proof numbers early        | Indian buyers are community validators - they trust what others have already adopted.                                  | "Join 500+ businesses" in hero trust strip, not just on testimonials page. |
| "Cancel anytime"                  | Removes long-term commitment fear. Indian SMBs are budget-conscious and wary of being locked in.                       | Show on pricing page below plans.                                          |

## **6.3 Design Consistency Rules**

| **Rule**     | **Correct**                                                                                 | **Wrong**                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Green usage  | Green (#3DAA72) for positive CTAs, checkmarks, active states, success states ONLY.          | Never use green for warnings, errors, or decorative non-actionable elements.                        |
| Navy usage   | Navy (#1B2A4A) for headings, hero backgrounds, footer, authority elements.                  | Never use navy as a button colour - reserved for text and backgrounds only.                         |
| Font weights | Headings: 700-800. Body: 400. CTAs: 600. Meta: 400.                                         | Never use 300 (too thin on mobile screens). Never use 900 (too heavy).                              |
| Shadows      | shadow-sm at rest, shadow-card on hover. Only green shadow (shadow-cta) on primary CTA.     | Never stack multiple shadows. Never use black shadows - they look dated.                            |
| Animations   | One directional reveal per section (always up from bottom). Consistent easing (power4.out). | Never mix directions within the same section. Never use bouncy easing on text.                      |
| Icons        | Lucide React only. 20-24px in body, 32px in feature cards, 48px in How It Works.            | Never mix icon libraries (Heroicons + Lucide + FontAwesome = inconsistency).                        |
| Images       | All via next/image with alt text. WebP format. Max 1MB per image.                           | Never use stock photos of foreign people. Use Indian contexts (Indian city, Indian business owner). |
| Spacing      | Use Tailwind scale consistently. Section padding: py-14 mobile, py-24 desktop.              | Never use arbitrary px values in Tailwind (px-\[73px\]) - use the scale.                            |

## **6.4 Accessibility Requirements**

- Colour contrast: All text must meet WCAG AA minimum. Navy on white = ✅. Green on white: check contrast (border-line - use green-dark text on white backgrounds). White on green = ✅.
- Focus states: visible keyboard focus ring on all interactive elements. Use focus-visible: ring-2 ring-\[#3DAA72\] ring-offset-2.
- Skip link: "Skip to main content" link as first focusable element. Visible on focus only.
- Alt text: every next/image has a meaningful descriptive alt prop. Never alt="image" or alt="".
- Form labels: every input has an associated &lt;label&gt; with htmlFor. Never placeholder-only labels.
- ARIA: mobile drawer needs role="dialog" aria-modal="true". Accordion needs proper aria-expanded states (Radix handles this).
- Motion: all GSAP animations wrapped in prefers-reduced-motion check. Set elements to final state immediately if motion is reduced.
- Lighthouse target: 90+ accessibility score on every page before launch.

**── SECTION 7 ──**

# **SEO - Complete Technical Guide**

## **7.1 Meta Tags - Per Page**

| **Page**              | **Title Tag (< 60 chars)**                      | **Meta Description (150-160 chars)**                                                                                                   |
| --------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Home /                | Karo Simple - Get More 5-Star Google Reviews    | QR-based review management for Indian businesses. Help happy customers leave Google reviews in seconds. Free to start. No credit card. |
| Pricing /pricing      | Pricing Plans - Karo Simple \| Starting Free    | Simple pricing for Indian businesses. Free plan available. Paid plans from ₹999/month. Cancel anytime. No hidden fees.                 |
| About /about          | About Karo Simple - Our Mission for Indian SMBs | Learn how Karo Simple helps Indian businesses grow their online reputation with effortless QR-based Google review management.          |
| Contact /contact      | Contact Karo Simple \| WhatsApp + Email Support | Get in touch with the Karo Simple team. We reply within 2 hours on WhatsApp or 24 hours via email.                                     |
| Privacy /privacy      | Privacy Policy - Karo Simple                    | How Karo Simple collects, uses, and protects your personal data. Compliant with India's DPDPA 2023 and IT Act 2000.                    |
| Terms /terms          | Terms of Service - Karo Simple                  | Terms governing your use of Karo Simple's Google review management platform. India jurisdiction.                                       |
| Refund /refund-policy | Refund & Cancellation Policy - Karo Simple      | Karo Simple's refund policy. 7-day money-back guarantee. Cancellation takes effect at end of billing cycle.                            |
| Grievance /grievance  | Grievance Redressal - Karo Simple               | Karo Simple Grievance Officer contact details and complaint form. Complaints acknowledged within 48 hours per DPDPA 2023.              |

## **7.2 Structured Data (JSON-LD) - Priority Order**

| **Schema Type**     | **Page**                 | **Why**                                                                   | **ROI**          |
| ------------------- | ------------------------ | ------------------------------------------------------------------------- | ---------------- |
| FAQPage             | Home + Pricing           | Creates expandable FAQ in Google SERP. Increases click-through by 20-30%. | Highest          |
| Organization        | \_app (global)           | Tells Google the site is a business. Enables Knowledge Panel.             | High             |
| SoftwareApplication | Home + Pricing           | Enables star rating display in SERP for the app.                          | High             |
| BreadcrumbList      | All pages except Home    | Shows breadcrumb trail in SERP URL. Improves navigation appearance.       | Medium           |
| ContactPage         | Contact                  | Enhances contact information visibility in SERP.                          | Medium           |
| BlogPosting         | Each blog post           | Enables rich snippet with date, author, reading time in SERP.             | Medium           |
| LocalBusiness       | Home (if office address) | Enables map pack appearance. Only add if you have a physical address.     | Low if no office |

## **7.3 Keyword Strategy - Indian Market**

| **Page**       | **Primary Keyword**                    | **Secondary Keywords**                                               | **Long-tail Targets**                                                        |
| -------------- | -------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Home           | google review management india         | qr code review platform, get more google reviews                     | how to get more google reviews restaurant india, google review badhao        |
| Pricing        | review management software price india | affordable google review tool, ₹999 review platform                  | free google review management tool india, review platform subscription price |
| About          | karo simple review platform india      | indian review management startup, made in india saas                 | review management app india for small business                               |
| Blog (general) | how to get more google reviews india   | restaurant reviews india, salon google rating, clinic google reviews | Per-post specific - topic-cluster approach                                   |

## **7.4 Technical SEO Build Checklist**

Implement all of these AS EACH PAGE IS CODED - not as a separate task after launch. SEO done during build is 10x cheaper than fixing it retroactively.

- sitemap.ts: Use Next.js App Router native sitemap generation. Export default async function sitemap() returning all page URLs with lastModified and changeFrequency.
- robots.ts: Allow all marketing pages. Disallow: /dashboard/, /api/, /admin/, /r/ (QR routes in dashboard).
- next-seo: DefaultSeo in root layout.tsx. NextSeo with page-specific props on every page component.
- Open Graph image: 1200×630px. Use @vercel/og for dynamic OG image generation - auto-generates branded images for blog posts.
- Canonical: Add canonical URL on every page. Prevents duplicate content from query params (?billing=annual on pricing).
- Inter font: Self-host in /public/fonts/ using @font-face in globals.css. Use font-display: swap. Add rel="preload" in layout.tsx for the 400 and 700 weight files.
- next/image: ZERO &lt;img&gt; tags anywhere. Use loading="eager" for LCP image (hero visual), loading="lazy" for all below-fold images.
- Core Web Vitals targets: LCP < 2.5s (hero image optimised) | CLS < 0.1 (image dimensions always specified) | FID < 100ms (minimal JS blocking main thread).
- Google Search Console: Verify domain ownership immediately after deployment. Submit sitemap URL. Monitor Coverage and Core Web Vitals reports weekly.

**── SECTION 8 ──**

# **Phase-Wise Build Plan**

Each phase is independently deployable and testable. Complete one phase fully - including testing - before starting the next. Estimated timelines assume a single experienced frontend developer.

## **PHASE 0 - Project Foundation (Day 1)**

Before writing a single component, the project scaffolding must be complete. This phase has no visible UI output - it is entirely developer infrastructure.

| **Task**                | **Command / File**                                                                                                                                                                                                                                                                            | **Time** |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Create Next.js project  | npx create-next-app@latest karosimple-marketing --typescript --tailwind --app --src-dir --no                                                                                                                                                                                                  | 5 min    |
| Install all packages    | npm install gsap @gsap/react three @react-three/fiber @react-three/drei lenis framer-motion react-hook-form zod @hookform/resolvers lucide-react react-hot-toast @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-toggle-group next-seo next-themes clsx tailwind-merge sharp | 10 min   |
| Create full folder tree | mkdir -p for all directories in Section 2. touch placeholder files.                                                                                                                                                                                                                           | 20 min   |
| tailwind.config.ts      | Add custom colors, shadows, font family, extend animation tokens                                                                                                                                                                                                                              | 30 min   |
| globals.css             | CSS custom properties for all design tokens in Section 3. Tailwind directives.                                                                                                                                                                                                                | 30 min   |
| lib/gsap.ts             | Register GSAP plugins. Export connectLenisToGSAP helper.                                                                                                                                                                                                                                      | 20 min   |
| lib/constants.ts        | NEXT*PUBLIC* env vars, WhatsApp number, emails, app URL, register URL.                                                                                                                                                                                                                        | 15 min   |
| app/layout.tsx          | Root layout: font preload, DefaultSeo, CookieConsentBanner placeholder, Lenis init.                                                                                                                                                                                                           | 30 min   |
| app/not-found.tsx       | Custom 404 with MarketingNav + link home. Easy but always forgotten.                                                                                                                                                                                                                          | 20 min   |
| .env.local              | NEXT_PUBLIC_APP_URL, NEXT_PUBLIC_RAZORPAY_KEY_ID, NEXT_PUBLIC_GA4_ID, NEXT_PUBLIC_WHATSAPP_NUMBER                                                                                                                                                                                             | 10 min   |
| Vercel project          | Connect GitHub repo to Vercel. Add environment variables. Set domain.                                                                                                                                                                                                                         | 20 min   |

Phase 0 exit criteria: npm run dev starts successfully. Vercel preview deployment works. All placeholder files exist with correct exports.

## **PHASE 1 - Shared Layout (Day 1-2)**

Build the components that every page depends on. No page code until these are complete and reviewed.

| **Task**             | **Component**                                            | **Key Points**                                                                                                                                                    | **Time** |
| -------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Marketing Navbar     | MarketingNav.tsx                                         | Sticky, transparent→white on scroll, hamburger → top-slide drawer, Sign In + Get Started buttons, active link state, GSAP drawer animation, scroll lock when open | 3-4 hrs  |
| Marketing Footer     | MarketingFooter.tsx                                      | 4-column grid (2 col mobile), WhatsApp button full-width on mobile, all legal links, social icons, "Made with ❤️ in India", copyright                             | 2 hrs    |
| Cookie Consent       | CookieConsentBanner.tsx                                  | localStorage ks_cookie_consent flag, bottom of screen, Accept All + Manage Preferences, load GA4 only after accept, DPDPA 2023 compliant text                     | 2 hrs    |
| Atomic UI components | CTAButton, SectionHeading, WhatsAppButton, BillingToggle | Build all reusable atoms before sections. Type all props with TypeScript.                                                                                         | 2 hrs    |
| useScrollSpy hook    | hooks/useScrollSpy.ts                                    | Active nav link highlighting. IntersectionObserver based.                                                                                                         | 1 hr     |
| useLenis hook        | hooks/useLenis.ts                                        | Initialise Lenis, connect to GSAP ScrollTrigger via lib/gsap.ts.                                                                                                  | 1 hr     |

Phase 1 exit criteria: Navbar and footer render on a blank test page. Drawer opens/closes with animation. Cookie banner shows and hides. No console errors.

## **PHASE 2 - Legal Pages (Day 2-3)**

Build all legal pages BEFORE any marketing content. These unlock Google OAuth and Razorpay - two critical dependencies.

| **Task**           | **Page**            | **Content**                                                                                                                                                           | **Time** |
| ------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Privacy Policy     | /privacy            | All sections from guide Section 3.1. DPDPA 2023 + IT Act 2000 mention. Grievance Officer details. Last updated date.                                                  | 2 hrs    |
| Terms of Service   | /terms              | All sections from guide Section 3.2. Governing law: India. Razorpay payment terms. Cancellation policy.                                                               | 2 hrs    |
| Refund Policy      | /refund-policy      | 7-day window, cancellation terms, how to request refund (<billing@karosimple.in>), processing time 5-7 days. Razorpay as processor.                                   | 1 hr     |
| Grievance Page     | /grievance          | Grievance Officer name, designation, address, dedicated email (<grievance@karosimple.in>), 48hr acknowledgment + 30-day resolution commitment, simple grievance form. | 1.5 hrs  |
| Footer legal links | MarketingFooter.tsx | Add Privacy \| Terms \| Refund Policy \| Grievance links. Verify all links work.                                                                                      | 30 min   |

Phase 2 exit criteria: All 4 pages accessible at their routes. Footer links work. Pages load fast (no animations needed). Google OAuth Privacy URL can now be set. Razorpay merchant form can be submitted.

## **PHASE 3 - Home Page (Day 3-7)**

The most complex page. Build sections in order - hero first, CTA banner last. Test each section on mobile after building it.

| **Task**                         | **Component**                                          | **Complexity** | **Est. Time** |
| -------------------------------- | ------------------------------------------------------ | -------------- | ------------- |
| Hero - Layout only (no Three.js) | HeroSection.tsx - static version                       | Medium         | 3 hrs         |
| Hero - Three.js particle scene   | HeroScene.tsx + ParticleField.tsx                      | High           | 4-5 hrs       |
| Hero - GSAP reveal sequence      | useGSAP inside HeroSection                             | Medium         | 2 hrs         |
| Pain Point section               | PainPointSection.tsx                                   | Low            | 1.5 hrs       |
| How It Works                     | HowItWorksSection.tsx + SVG line animation             | Medium         | 2.5 hrs       |
| Feature Cards grid               | FeaturesSection.tsx + FeatureCard.tsx                  | Low            | 2 hrs         |
| Social Proof strip               | SocialProofStrip.tsx + CountUp animation               | Low            | 1.5 hrs       |
| Testimonials                     | TestimonialsSection.tsx + TestimonialCard.tsx          | Low            | 2 hrs         |
| Pricing Preview                  | PricingPreviewSection.tsx + PricingCard.tsx            | Medium         | 3 hrs         |
| FAQ Accordion                    | FAQSection.tsx + FAQItem.tsx + FAQPage JSON-LD         | Low            | 2 hrs         |
| CTA Banner                       | CTABannerSection.tsx + CTA pulse animation             | Low            | 1 hr          |
| Home page SEO                    | next-seo, Organization + FAQPage + SoftwareApp JSON-LD | Medium         | 1.5 hrs       |
| Mobile review + fixes            | Test on 375px and 390px viewport                       | Medium         | 2 hrs         |

Phase 3 exit criteria: Home page renders correctly on mobile (375px) and desktop (1440px). All animations fire on scroll. Three.js hidden on mobile. No horizontal scroll on any viewport. All CTAs link to correct destinations.

## **PHASE 4 - Pricing Page (Day 7-9)**

| **Task**                  | **Notes**                                                                                                                                                      | **Time** |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| PricingCard.tsx component | Full component with all props: plan name, price, annual price, features, recommended badge, CTA text, Razorpay onClick. Storybook-style - works independently. | 3 hrs    |
| BillingToggle.tsx         | Radix ToggleGroup. Monthly/Annual. Switches all PricingCard prices simultaneously via React state.                                                             | 1.5 hrs  |
| useRazorpay.ts hook       | Load Razorpay Checkout JS dynamically. Create order via API route. Open checkout. Handle success/failure. Only triggered on CTA click.                         | 2.5 hrs  |
| Pricing page layout       | Hero + toggle + 4 cards + risk removal banner + trust bar + feature compare table + FAQ + WhatsApp footer link                                                 | 3 hrs    |
| Feature comparison table  | PricingCompareTable.tsx. Sticky plan name row. Check / X per feature. Mobile: horizontal scroll allowed here only.                                             | 2.5 hrs  |
| Pricing page SEO          | Unique title, meta, canonical, OG. SoftwareApplication schema with offers.                                                                                     | 1 hr     |

## **PHASE 5 - Remaining Pages (Day 9-12)**

| **Task**            | **Component**                                                                                                                              | **Time** |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| Contact page        | ContactPage.tsx, useContactForm.ts, react-hook-form + Zod, WhatsApp CTA top-of-mobile, Indian business categories in select, success toast | 3 hrs    |
| About page          | AboutPage.tsx - hero, story, mission stats, problem callout, values cards, team, CTA banner                                                | 3 hrs    |
| Technical SEO setup | next-sitemap config, robots.ts, canonical on all pages, hreflang setup, Google Search Console verification                                 | 2 hrs    |
| OG image            | 1200×630px brand image. @vercel/og for dynamic generation. Test with WhatsApp link preview.                                                | 1.5 hrs  |
| GA4 integration     | analytics.ts helpers. Load only after CookieConsentBanner accept. Track: page_view, cta_click, form_submit, pricing_toggle.                | 1.5 hrs  |

## **PHASE 6 - Performance & Launch (Day 12-14)**

| **Task**                  | **Target**                                          | **Tools**                                                           |
| ------------------------- | --------------------------------------------------- | ------------------------------------------------------------------- |
| PageSpeed: Home mobile    | 85+ score                                           | Google PageSpeed Insights - run before AND after optimisations      |
| PageSpeed: Pricing mobile | 85+ score                                           | Razorpay checkout JS must be deferred - load on click only          |
| Bundle analysis           | Marketing pages < 150KB gzipped JS                  | ANALYZE=true npm run build                                          |
| Real device testing       | Redmi Note 12 or similar mid-range Android          | Test on physical device - DevTools emulation is not accurate enough |
| Cross-browser             | Chrome Android, Safari iOS, Chrome desktop, Firefox | BrowserStack or physical devices                                    |
| Broken link audit         | Zero broken links                                   | Click every nav link, footer link, CTA button manually              |
| Accessibility audit       | 90+ Lighthouse score                                | Lighthouse in Chrome DevTools                                       |
| Form testing              | Submit contact form, receive notification           | Manual test with real email                                         |
| Razorpay test mode        | Complete a test payment                             | Razorpay test card: 4111 1111 1111 1111                             |
| Cookie consent flow       | GA4 NOT loaded before consent                       | Chrome Network tab - verify no GA4 requests before Accept           |
| Final checklist           | All items in guide Section 10                       | Print checklist and tick manually                                   |

## **PHASE 7 - Blog & Growth (Week 3+, Post-Launch)**

Phase 7 begins after Phase 6 is complete and the site is live. These are content and growth features.

- Blog listing page (/blog) - card grid, category filter, search. Sanity CMS integration for content management.
- Blog post page (/blog/\[slug\]) - dynamic, Portable Text renderer, code highlighting, reading time, BlogPosting JSON-LD schema, share buttons.
- First 4 blog posts - target high-value local keywords: "How to get more Google reviews for your restaurant in India" | "Best QR code review tools for Indian salons" | "Why Indian clinics lose patients to bad Google reviews" | "How to respond to negative Google reviews - India guide".
- Demo/Book a call page (/demo) - Calendly embed or WhatsApp CTA for agency/enterprise leads.
- A/B test Hero CTA - "Start Free Today" vs "Get Your First Review in 10 Minutes". Use Vercel Edge Middleware or PostHog for splitting.
- Heatmap tool - Hotjar or Microsoft Clarity (free). Load after cookie consent. Install in Phase 7 only - data before this won't be statistically significant.

**── SECTION 9 ──**

# **Deployment & Environment**

## **9.1 Environment Variables**

| **Variable**                | **Value / Source**                          | **Used In**                               |
| --------------------------- | ------------------------------------------- | ----------------------------------------- |
| NEXT_PUBLIC_APP_URL         | <https://karosimple.in> (production)        | Canonical URLs, sitemap, OG image URLs    |
| NEXT_PUBLIC_DASHBOARD_URL   | <https://app.karosimple.in>                 | CTA deep-links to /register and /login    |
| NEXT_PUBLIC_RAZORPAY_KEY_ID | Razorpay dashboard → Settings → API Keys    | useRazorpay.ts hook, PricingCard CTA      |
| NEXT_PUBLIC_GA4_ID          | Google Analytics → Admin → Data Streams     | analytics.ts, loaded after cookie consent |
| NEXT_PUBLIC_WHATSAPP_NUMBER | 91XXXXXXXXXX (with country code, no spaces) | WhatsAppButton.tsx, contact page          |
| NEXT_PUBLIC_CONTACT_EMAIL   | <hello@karosimple.in>                       | MarketingFooter.tsx, contact page         |
| FORMSPREE_ENDPOINT          | formspree.io project URL (server-side only) | API route for contact form submission     |
| SANITY_PROJECT_ID           | Sanity dashboard (Phase 7 - blog only)      | lib/sanity.ts, blog posts fetch           |

## **9.2 Vercel Configuration**

- Framework: Next.js (auto-detected).
- Node.js version: 20.x LTS - set in Vercel project settings.
- Build command: npm run build (default).
- Output directory: .next (default for App Router).
- Domain: karosimple.in → add as custom domain. www → redirect to non-www.
- Environment variables: Add all NEXT*PUBLIC* and private vars in Vercel → Settings → Environment Variables.
- Edge Network: Vercel CDN serves all static assets globally. Marketing site fully benefits from CDN - no server costs beyond the free tier for this traffic level.
- Preview deployments: Every PR gets a preview URL. Use for design review before merging.
- next-sitemap: Add npm run postbuild (runs next-sitemap) in package.json. Sitemap auto-generated and written to /public on every build.

## **9.3 Domain Strategy**

| **Subdomain**       | **Project**                | **Purpose**                                                 |
| ------------------- | -------------------------- | ----------------------------------------------------------- |
| karosimple.in       | karosimple-marketing       | Marketing website (this project)                            |
| <www.karosimple.in> | (redirect)                 | 301 redirect to karosimple.in - avoid duplicate content     |
| app.karosimple.in   | karosimple-app (dashboard) | Dashboard - separate Vercel project                         |
| cdn.karosimple.in   | (optional)                 | Custom CDN domain for static assets - not required for v1.0 |

**── SECTION 10 ──**

# **Pre-Launch Master Checklist**

## **Legal Compliance**

☐ Privacy Policy live at /privacy - linked from footer - mentions DPDPA 2023 + IT Act 2000

☐ Terms of Service live at /terms - linked from footer - governing law: India

☐ Refund Policy live at /refund-policy - linked from footer - 7-day window stated clearly

☐ Grievance page live at /grievance - real officer name + email - linked from footer + privacy + terms

☐ Cookie consent banner shows on first visit - GA4 blocked until Accept clicked

☐ Privacy Policy URL added to Google Cloud Console OAuth consent screen

☐ Terms + Refund Policy URLs submitted in Razorpay merchant verification form

## **Design & Mobile**

☐ Navbar: Sign In + Get Started buttons work. Hamburger opens/closes drawer. No horizontal scroll.

☐ Footer: All links work. WhatsApp button opens correct number. Legal links present.

☐ Green (#3DAA72) used for CTAs only - not warnings, not decorative elements.

☐ ₹ symbol throughout - no \$ or USD visible anywhere on any page.

☐ All primary CTA buttons are w-full on mobile (< 640px viewport).

☐ Three.js / hero canvas hidden on mobile - static gradient background used.

☐ All tap targets minimum 44×44px - test on real device with finger.

☐ No invisible text on load (Inter uses font-display: swap).

☐ Tested on real Android mid-range phone (Redmi/Samsung) - Chrome browser.

☐ Tested on Safari iOS (iPhone 12 or similar).

## **Functionality**

☐ "Get Started Free" and all hero CTAs link to app.karosimple.in/register.

☐ "Sign In" links to app.karosimple.in/login.

☐ Contact form submits, shows success toast, data reaches destination.

☐ Razorpay checkout opens in TEST MODE on paid plan CTA click.

☐ WhatsApp button opens wa.me/91XXXXXXXXXX with correct number.

☐ FAQ accordion opens and closes smoothly.

☐ Pricing billing toggle switches between monthly and annual prices correctly.

☐ All internal links work - no 404s from nav, footer, or in-page links.

## **SEO**

☐ Every page has a unique &lt;title&gt; and &lt;meta description&gt;.

☐ Open Graph tags (og:title, og:description, og:image) set on all public pages.

☐ Canonical tag present on all pages.

☐ sitemap.xml generated and submitted to Google Search Console.

☐ robots.txt blocks /dashboard/, /api/, /admin/, /r/.

☐ FAQPage JSON-LD schema on Home page - tested with Google Rich Results Test.

☐ Organization JSON-LD schema in root layout.

☐ All images use next/image with descriptive alt text.

☐ Google Search Console domain verified.

## **Performance**

☐ Home page: Google PageSpeed Insights mobile score 85+.

☐ Pricing page: PageSpeed mobile 85+. Razorpay JS deferred (load on click only).

☐ Bundle size: ANALYZE=true npm run build - no dashboard libraries in marketing bundle.

☐ LCP < 2.5s on home page. Hero image uses loading="eager".

☐ GA4 script deferred - does not fire before cookie consent accepted.

☐ No render-blocking scripts on marketing pages.

☐ Lighthouse accessibility score 90+ on home page.

**KARO SIMPLE**

**Marketing Website Frontend Build Document v1.0**

_Confidential - Internal Use Only - Built for India Market_