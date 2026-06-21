# 📋 Karo Simple Marketing — Requirements Checklist (From You)

> **How to use this file:**
> Go phase by phase. Each phase lists exactly what I need from you before I can build it.
> Mark items with ✅ when ready or add the info directly inline.
> Send me this file back (or just tell me) when a phase is ready to go.

---

## ✅ PHASE 0 — Already Done (No Input Needed)
- Project scaffolded in Next.js (JavaScript)
- All dependencies installed
- Full folder structure created
- Design system tokens, fonts, colors implemented
- All hooks created (GSAP, Lenis, Razorpay, Contact Form, ScrollSpy)
- All page routes created (Home, Pricing, About, Contact, Privacy, Terms, Refund, Grievance)
- Design system showcase page live at `/design-system`

---

## 🟡 PHASE 1 — Brand Assets & Visual Identity
> **Needed before:** Building the Navbar, Footer, Hero, and all sections with the real logo

### 1.1 Logo Files
- [ ] **SVG logo** (main version, color) → place in `/public/logo.svg`
- [ ] **SVG logo white version** (for dark/navy backgrounds) → place in `/public/logo-white.svg`
- [ ] **Favicon** (`.ico` or `.png`, 32×32 or 64×64) → place in `/public/favicon.ico`
- [ ] **App icon** (512×512 PNG for PWA / Apple touch icon) → place in `/public/icon-512.png`

> ⚠️ Without the logo, I'll use a text placeholder. Provide as SVG for best quality.

### 1.2 Brand Colors Confirmation
> The design plan uses:
> - **Primary Green:** `#3DAA72`
> - **Dark Navy:** `#1B2A4A`
> - **White / Off-white backgrounds**

- [ ] Confirm these colors are correct, OR share your exact brand hex codes

### 1.3 Open Graph Image (Social Share Preview)
- [ ] A **1200 × 630px PNG/JPG** image that appears when someone shares your link on WhatsApp/Twitter/Facebook
- [ ] This can be: your logo on navy background, or a screenshot of the product, or I can design one for you
- [ ] Place at: `/public/og-image.png`

---

## 🟡 PHASE 2 — Content & Copy (All Pages)
> **Needed before:** Building actual section content. Without this, sections use placeholder text.

### 2.1 Home Page — Hero Section
- [ ] **Final H1 Headline** (suggested: *"Get More 5-Star Google Reviews — Without Asking"*)
  - Confirm or provide your preferred wording:
- [ ] **Subheadline** (suggested: *"Your happy customers scan a QR code and leave a real review in 10 seconds. Unhappy ones give you private feedback instead."*)
  - Confirm or provide your preferred wording:
- [ ] **Primary CTA button text** (suggested: *"Start Free Today →"*)
- [ ] **Secondary CTA button text** (suggested: *"Watch 60-Second Demo"*)
- [ ] **Trust strip text** (suggested: *"✅ Free to start · ✅ Works on any phone · ✅ Setup in 5 minutes"*)
- [ ] **Link for Primary CTA button** → URL to register/signup page (e.g., `https://app.karosimple.in/register`)
- [ ] **Link for Secondary CTA button** → demo video URL or YouTube link

### 2.2 Home Page — Stats (Social Proof Strip)
> These numbers appear in a navy strip. They animate up from 0.
- [ ] Confirm or update these stats:
  - `500+` Indian Businesses Trust Karo Simple → Your actual number:
  - `25,000+` Google Reviews Generated → Your actual number:
  - `0.8★` Average Rating Improvement in 90 Days → Your actual number:
  - `4.9/5` Customer Satisfaction Score → Your actual number:

### 2.3 Home Page — Testimonials
> Need 3 real testimonials from real customers (even early users/beta testers work great)
- [ ] **Testimonial 1:**
  - Quote:
  - Name:
  - Business type (e.g., Restaurant, Salon, Clinic):
  - City:
- [ ] **Testimonial 2:**
  - Quote:
  - Name:
  - Business type:
  - City:
- [ ] **Testimonial 3:**
  - Quote:
  - Name:
  - Business type:
  - City:

> 💡 If you don't have real testimonials yet, I can use fictional-but-realistic Indian business placeholders temporarily.

### 2.4 About Page — Founder Story
- [ ] **Founder name(s):**
- [ ] **2–3 paragraph story** — Why did you build Karo Simple? What Indian SMB problem did you see firsthand?
- [ ] **Founder photo(s)** (optional but powerful for trust) — JPG or PNG, at least 400×400px
- [ ] **Team bios** (if any other key team members) — Name, role, 1-line bio, photo (optional)
- [ ] **Mission statement** (1-2 sentences that define why Karo Simple exists):
- [ ] **Office/city location** (for the contact page and legal pages):

### 2.5 About Page — Company Stats
- [ ] Confirm or update:
  - Cities served: `50+` → Your actual number:
  - Team size: (optional, can skip)
  - Year founded:

### 2.6 Contact Page
- [ ] **Official business email** (for the contact form "mailto" or Formspree):
- [ ] **WhatsApp business number** (for the WhatsApp CTA button):
- [ ] **Phone number** (optional, for display):
- [ ] **Office address** (required for legal pages — IT Act / Razorpay compliance):
- [ ] **Google Maps embed link** (optional):
- [ ] **Support hours** (e.g., "Mon–Sat, 10am–7pm IST"):

### 2.7 Pricing Page — Plan Details
> Review and confirm/correct the pricing structure:

| Plan     | Monthly Price | Annual Price /mo | Notes |
|----------|---------------|-----------------|-------|
| Free     | ₹0            | ₹0              |       |
| Starter  | ₹999          | ₹799            |       |
| Pro      | ₹2,499        | ₹1,999          |       |
| Agency   | ₹6,999        | ₹5,599          |       |

- [ ] Confirm prices above are correct OR provide your final pricing
- [ ] **Features per plan** — List the features included in Free / Starter / Pro / Agency (I'll build the comparison table from this)
  - Free plan features:
  - Starter plan features:
  - Pro plan features:
  - Agency plan features:
- [ ] **Scan limits per plan** (e.g., Free: 50 scans/month, Starter: 500 scans/month...):

---

## 🟡 PHASE 3 — Legal Pages Content
> **Needed before:** Going live. Razorpay and Google OAuth both require these pages.

> ⚠️ These pages must be reviewed by a lawyer familiar with Indian law (IT Act 2000, DPDPA 2023, Consumer Protection Act).

### 3.1 Privacy Policy
- [ ] Official company/business name (legal registered name):
- [ ] Registered address:
- [ ] Grievance Officer name (required by IT Act):
- [ ] Grievance Officer email:
- [ ] Data storage location (Indian servers? Which provider — AWS Mumbai, Google Cloud, etc.?):
- [ ] List of data you collect from users:
- [ ] Do you use cookies? (Yes/No):
- [ ] Third-party services used (Google Analytics, Razorpay, WhatsApp API, etc.):

### 3.2 Terms of Service
- [ ] Service start date:
- [ ] Governing law state (e.g., "Courts of Raipur, Chhattisgarh" or "Courts of Mumbai"):
- [ ] Any specific usage restrictions you want listed:

### 3.3 Refund Policy
- [ ] Refund window (e.g., "7 days from purchase"):
- [ ] Refund conditions (e.g., "Full refund if reported within 7 days, no refund after"):
- [ ] Refund process (via Razorpay to original payment method? How many business days?):
- [ ] Pro-rated refunds for annual plans? (Yes/No):

### 3.4 Grievance Page
- [ ] Grievance Officer full name:
- [ ] Grievance Officer designation (e.g., "Chief Compliance Officer"):
- [ ] Grievance Officer email:
- [ ] Grievance Officer phone (optional):
- [ ] Response time commitment (e.g., "Within 30 days as per IT Act"):

> 💡 I can generate draft legal content for all 4 pages based on standard Indian SaaS templates. You then need a lawyer to review before going live. Just say the word.

---

## 🟡 PHASE 4 — Integrations & Backend Connections
> **Needed before:** Payment, contact form, and analytics are live

### 4.1 Razorpay (Payment)
- [ ] **Razorpay Key ID** (Public key, starts with `rzp_live_` or `rzp_test_`):
- [ ] **Business name** as it should appear on checkout popup:
- [ ] **Business logo URL** for Razorpay checkout popup:
- [ ] **Currency:** INR ✅ (already set)
- [ ] **Plan Razorpay Price IDs** (if using Razorpay subscriptions, share the plan IDs from your Razorpay dashboard):

### 4.2 Contact Form (Formspree or Email)
> Choose one method:
- [ ] **Option A — Formspree:** Create a free account at formspree.io, create a form, share the **Form ID** (e.g., `xvoeqkla`)
- [ ] **Option B — Email:** Share the email address you want form submissions sent to (I'll set up a mailto fallback)
- [ ] **Option C — WhatsApp only:** Just use WhatsApp button (no form backend needed)

### 4.3 Google Analytics 4
- [ ] Create a GA4 property at analytics.google.com for `karosimple.in`
- [ ] Share the **Measurement ID** (format: `G-XXXXXXXXXX`):

### 4.4 App Deep Links
- [ ] **Register page URL** (e.g., `https://app.karosimple.in/register`):
- [ ] **Login page URL** (e.g., `https://app.karosimple.in/login`):
- [ ] **Dashboard URL** (e.g., `https://app.karosimple.in/dashboard`):

---

## 🟡 PHASE 5 — Blog / Content (Optional — Post Launch)
> **Needed only if you want a blog before launch. Can be skipped and added later.**

### 5.1 Sanity CMS (Recommended)
- [ ] Create a free account at sanity.io
- [ ] Create a new project, share the **Project ID** and **Dataset name**:
- [ ] Decide if you want a blog before launch: Yes / No

### 5.2 First Blog Posts (if yes)
- [ ] Topics for 3–5 launch articles:
  1.
  2.
  3.

---

## 🟡 PHASE 6 — SEO & Launch Checklist
> **Needed before:** Going live on karosimple.in

### 6.1 Domain & Hosting
- [ ] Confirm domain: `karosimple.in` → Is this already purchased?
- [ ] Confirm hosting: Vercel (recommended) → Do you have a Vercel account?
- [ ] Connect Vercel project to your GitHub repo? (Yes/No):

### 6.2 Google Search Console
- [ ] Create property at search.google.com/search-console for `karosimple.in`
- [ ] Share the **HTML meta verification tag** (looks like `<meta name="google-site-verification" content="XXXX">`)

### 6.3 Google My Business
- [ ] Do you have a Google Business Profile for Karo Simple? (Yes/No):
- [ ] Business category (e.g., "Software Company" or "Business Services"):

### 6.4 Social Media Links (for Footer)
- [ ] Instagram URL:
- [ ] LinkedIn URL:
- [ ] Twitter/X URL:
- [ ] YouTube URL:
- [ ] Facebook URL:
- [ ] Any others:

---

## 🟡 PHASE 7 — Media & Visual Assets
> **Needed for:** Hero section 3D scene, product screenshots, team photos

### 7.1 Product Screenshots
- [ ] Screenshot of the **QR scan page** (what customers see):
- [ ] Screenshot of the **dashboard** (what business owners see):
- [ ] Screenshot of the **review selection UI**:
- [ ] Any other product UI screenshots you want shown:

> 💡 If you don't have polished screenshots yet, I can create stylized UI mockups that represent your product visually.

### 7.2 Demo Video
- [ ] A **60–90 second demo video** showing how Karo Simple works
- [ ] Upload to YouTube (unlisted is fine) and share the link:
- [ ] This will power the "Watch 60-Second Demo" CTA button on the hero

### 7.3 City Coverage (Trust Bar)
- [ ] List of cities/regions you currently serve (for the "Trust Bar" that says "Trusted in Delhi · Mumbai · Pune · ..."):

---

## 📌 Priority Order (My Recommendation)

| Priority | Phase | What Unblocks |
|----------|-------|---------------|
| 🔴 P1 | Phase 1 — Logo & Brand Assets | Everything visual |
| 🔴 P1 | Phase 2.1 — Hero Copy | Homepage hero section |
| 🟠 P2 | Phase 2.7 — Pricing Details | Pricing page |
| 🟠 P2 | Phase 4.1 — Razorpay Key | Payment integration |
| 🟠 P2 | Phase 4.2 — Contact Form | Contact form works |
| 🟡 P3 | Phase 2.3 — Testimonials | Social proof sections |
| 🟡 P3 | Phase 2.4 — Founder Story | About page |
| 🟡 P3 | Phase 3 — Legal Content | Legal pages (Razorpay/Google requirement) |
| 🟢 P4 | Phase 4.3 — GA4 ID | Analytics |
| 🟢 P4 | Phase 6 — Launch Checklist | Going live |
| ⚪ P5 | Phase 5 — Blog | Post-launch, optional |

---

*Last updated: June 2026 · Karo Simple Marketing Site*
