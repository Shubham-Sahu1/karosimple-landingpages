# REVIEW COLLECTION GUIDELINES — PAGE CONTENT
## Karo Simple | karosimple.in/review-guidelines

---

## HOW TO USE THIS FILE

This file contains the **complete, ready-to-use content** for the Review Collection Guidelines page.
The AI building this page should:
- Use all text under each section heading exactly as written
- This is a fully static page — no forms, no API calls
- The opening section (Section 1) renders with a larger, bolder heading style — treat it like a hero/intro block, not a standard body section
- Section 4 (Our Rules) renders as a styled checklist with green checkmarks — not a plain list
- Section 5 (AI Does / Does Not) renders as a two-column comparison block or a styled split layout
- Section 8 (Platform Links) renders as a simple link list — no table needed
- Page uses `MarketingLayout.jsx` wrapper
- Route: `/review-guidelines`

**This page has SEO potential.** Headings should naturally include phrases like "genuine reviews India," "how to collect reviews legally," and "fake review consequences India." Do not keyword-stuff — the content already contains them naturally.

**Where to link this page:**
- Footer: under the Legal column or a separate "Resources" column
- FAQ page: link from answers about fake reviews and review policies
- Business owner onboarding flow inside app.karosimple.in: show a condensed version

---

## META TAGS (add to page `<Head>`)

```
Title: How Karo Simple Helps You Collect Genuine Reviews | Karo Simple
Description: Our commitment to authentic, legal review collection. How Karo Simple works with Indian law and third-party platform policies to help your business earn real feedback.
Canonical: https://karosimple.in/review-guidelines

Open Graph (optional but recommended for sharing):
og:title — How Karo Simple Helps You Collect Genuine Reviews
og:description — Our commitment to authentic reviews. How we help Indian businesses earn feedback the right way.
```

---

## PAGE CONTENT STARTS HERE

---

# We Help You Earn Reviews. Not Buy Them. {#intro}

<!-- DEVELOPER: Render this as a hero-style intro block. Large heading, centred or left-aligned depending on the page layout, with a short paragraph below before moving into sections. Use the light theme — navy #1B2A4A for heading, body text in Inter. -->

Every business deserves to be found. And every customer deserves honest information before they decide where to spend their money.

Karo Simple exists to close the gap between a business that delivers great service and the online reputation that proves it. We do this by making it genuinely easier for your real customers to share their real experience — not by manufacturing opinions that do not exist.

This page explains what that means, what we do, what we do not do, and what we expect from businesses that use our platform.

---

## 1. How Karo Simple Works {#how-it-works}

When a customer scans your Karo Simple QR code, here is the exact flow:

1. They choose their preferred language — Hindi, English, or other supported languages
2. They rate their experience with your business
3. If they rate positively, they are shown an AI-generated review suggestion — a starting point they can use as-is, edit to match their own words, or ignore entirely and write from scratch
4. They choose which platform they want to leave a review on — Google, Zomato, Justdial, TripAdvisor, Practo, or whichever platforms you have configured
5. They tap to open that platform and submit the review themselves, in their own words, from their own account

At no point does Karo Simple post a review for anyone. The customer is always the person who opens the platform, types or pastes the review, and presses submit. Our role ends when they tap to open the review platform.

If a customer rates their experience poorly, the flow is different. They do not see the public review platforms. Instead, they are shown a private feedback form. That feedback comes directly to your dashboard. It is not visible to anyone else. You get a chance to understand what went wrong and fix it before it becomes a public complaint.

---

## 2. Why Genuine Reviews Are the Only Reviews Worth Having {#why-genuine}

### What Indian Law Says {#indian-law}

The Consumer Protection Act 2019 prohibits unfair trade practices, which explicitly includes fake testimonials and misleading endorsements. Section 2(47) defines misleading advertisements broadly enough to cover fabricated reviews. A business that uses any tool — including Karo Simple — to post or solicit fake reviews is potentially in violation of this Act.

Consumers who discover fake reviews about a business can file a complaint with the National Consumer Helpline (1800-11-4000) or approach their District Consumer Disputes Redressal Commission. The ASCI (Advertising Standards Council of India) guidelines on endorsements and testimonials, effective June 2021, further require that reviews reflect genuine experience.

### What Review Platforms Do About It {#platform-action}

Google, Zomato, Justdial, TripAdvisor, and every major review platform in India has automated systems that detect inauthentic review patterns. They look for things like:

- Multiple reviews appearing in a short burst from unrelated accounts
- Review text that sounds identical or templated across different reviewers
- Accounts with no prior activity suddenly leaving reviews for one business
- Reviews submitted from the same IP address or device as the business owner

When these patterns are detected, the consequences are serious:

**Google** can remove all your reviews — including completely genuine ones — and place a "Suspected Fake Reviews" notice on your business profile that every searcher can see. This label is extremely difficult to get removed and can damage your credibility more than having fewer reviews in the first place.

**Zomato** can delist your restaurant from their platform entirely.

**TripAdvisor** publishes a "Penalty Notice" badge visible on your listing when they detect review manipulation.

**Justdial** can suspend or remove your business listing.

The risk is not worth it. One burst of fake reviews can undo years of genuine reputation building in a single day.

---

## 3. What We Expect from Businesses Using Karo Simple {#our-rules}

<!-- DEVELOPER: Render the five items below as a styled checklist with green checkmark icons (use #3DAA72). Each item has a bold label and a plain text description. -->

By using Karo Simple, you agree to our Terms of Service, which includes the following commitments:

✓ **Only share your QR code with actual customers**
Use the QR code with people who have genuinely visited your shop, used your service, or received your product. Do not distribute it to friends, family, or strangers to collect reviews from people who have not experienced your business.

✓ **Do not offer anything in exchange for a review**
Do not offer discounts, free items, cashback, or any other incentive in exchange for a customer leaving a review. This applies to every platform — Google, Zomato, Justdial, and all others. Most review platforms consider this a policy violation that can get your listing penalised.

✓ **Do not filter who gets the QR code by their expected rating**
Do not tell customers "only scan this if you're happy" or show the QR code only to customers you think will rate you well. The flow is designed to handle all customers fairly — happy customers go to public platforms, unhappy customers go to your private feedback inbox.

✓ **Never submit a review from your own device pretending to be a customer**
The AI suggestion feature gives your customers a starting point — it is not a tool for you to copy, post from your own account, or distribute to fake accounts. Every review on a public platform must be submitted by a real customer from their own account.

✓ **Follow the terms of every platform your QR code links to**
Karo Simple is a routing tool. What happens on Google, Zomato, Justdial, or any other platform after a customer lands there is governed by that platform's own policies. You are responsible for understanding and complying with each platform's review guidelines. We are not liable for actions those platforms take against your listing.

---

## 4. Understanding the AI Review Suggestion Feature {#ai-feature}

<!-- DEVELOPER: Render this as a two-column split or a styled "Does / Does Not" comparison block. Left column = what it does, right column = what it does not do. Use a visual divider between columns. -->

### What the AI does {#ai-does}

The AI suggestion feature generates a draft review template based on keywords, service descriptions, and tone settings that you configure in your dashboard. This draft is shown to a customer after they rate their experience positively.

It helps customers who want to leave a review but are not sure how to start. Many people have had a great experience but find it awkward to write about it. The suggestion removes that friction.

### What the AI does not do {#ai-does-not}

The AI does not post reviews. It does not submit anything to Google, Zomato, or any other platform. It does not interact with any review platform's interface, API, or backend. It has no ability to create accounts, log in anywhere, or click "Submit" on behalf of anyone.

The suggestion sits on your customer's screen. They read it. They decide. They act — or they do not. The final submission is entirely their action, on their device, from their account.

Think of it this way: AI suggestions are a pre-filled form. The customer still has to sign it themselves.

A customer who had a genuinely bad experience will not use a suggestion that describes a great one. The authenticity filter is the customer's own judgment. That is why this feature works when used honestly and fails when misused.

---

## 5. Private Feedback: The Other Half of the Platform {#private-feedback}

When a customer scans your QR code and rates their experience poorly, they do not see any public review platform. They see a private feedback form.

This feedback goes directly to your Karo Simple dashboard. No one else can see it — not other customers, not Google, not anyone.

Most unhappy customers never leave a public review. They just leave and never come back — and sometimes they tell people they know. Private feedback gives you a window before that happens. You find out what went wrong. You can reach out to the customer. You can fix the problem. You get a chance to turn a bad experience into a recovered relationship.

This is not about hiding bad reviews. It is about giving you the information you need to improve — privately, quickly, before a problem becomes permanent.

---

## 6. Reporting Misuse {#reporting-misuse}

If you believe any business is using Karo Simple to generate fake reviews or manipulate ratings, you can report it to us directly:

**Email:** abuse@karosimple.in
**Subject:** Review Misuse Report

Include the business name, the review platform where you spotted the suspicious activity, and any details you have. We investigate every report. Businesses confirmed to be in violation of our Acceptable Use Policy are suspended immediately. We may also notify the relevant review platform and, in serious cases, consumer protection authorities.

---

## 7. Reference: Review Policies of Platforms We Support {#platform-policies}

Karo Simple routes reviews to these platforms. Each has its own policies governing what reviews are acceptable. We are not affiliated with any of them — these links are provided for your reference.

**Google** — Review policies for Google Business Profiles:
https://support.google.com/contributionpolicy/answer/7422880

**Zomato** — Guidelines and policies for reviews:
https://www.zomato.com/policies

**TripAdvisor** — Review integrity and content policy:
https://www.tripadvisor.in/help/reviewpolicy

**Justdial** — Review and rating guidelines: see the Help section on justdial.com

**Practo** — Review guidelines for doctors and clinics: see the Help section on practo.com

**Facebook** — Recommendations policies for Business Pages: see Facebook's Community Standards at facebook.com/communitystandards

Karo Simple is not responsible for changes to these external policies. We recommend checking each platform's help centre directly for the most current guidelines.

---

## 8. Questions About This Page {#questions}

If you have a question about our review guidelines, how the platform works, or whether a specific use case is acceptable under our Terms:

**Email:** support@karosimple.in
**Grievance Officer:** grievance@karosimple.in

You can also read our full Terms of Service at karosimple.in/terms, particularly Section 8 (Acceptable Use Policy), which contains the binding rules that apply to all Karo Simple users.

---

*See also: [Terms of Service](/terms) · [Privacy Policy](/privacy) · [Grievance Redressal](/grievance)*
