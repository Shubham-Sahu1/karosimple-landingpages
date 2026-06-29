# PRIVACY POLICY — PAGE CONTENT
## Karo Simple | karosimple.in/privacy

---

## HOW TO USE THIS FILE

This file contains the **complete, ready-to-use content** for the Privacy Policy page.
The AI building this page should:
- Use all text under each section heading exactly as written
- Replace anything inside `[SQUARE BRACKETS]` with the actual value before going live
- Keep all section headings as `<h2>` tags in the JSX component
- Keep all sub-headings as `<h3>` tags
- Add `id` attribute to every `<h2>` and `<h3>` (use the slug shown in each heading)
- Tables render as HTML `<table>` elements styled with the platform's light theme (navy #1B2A4A, off-white #F5F7FA)
- The "Last Updated" line at the top renders in a muted small text style, not a heading
- Page uses `MarketingLayout.jsx` wrapper
- Route: `/privacy`

**Placeholders to fill before going live:**
- `[LEGAL_ENTITY_NAME]` — your registered business name or "Karo Simple" if operating as proprietorship
- `[REGISTERED_ADDRESS]` — your full registered business address
- `[GRIEVANCE_OFFICER_NAME]` — founder name (Shubham or Chandan)
- `[LAUNCH_DATE]` — date this page goes live, format: DD Month YYYY

---

## META TAGS (add to page `<Head>`)

```
Title: Privacy Policy | Karo Simple
Description: Read how Karo Simple collects, uses, and protects your personal data. Compliant with DPDPA 2023 and IT Act 2000.
Canonical: https://karosimple.in/privacy
```

---

## PAGE CONTENT STARTS HERE

---

**Last Updated: [LAUNCH_DATE]**
**Effective Date: [LAUNCH_DATE]**

---

## 1. Who We Are {#who-we-are}

Karo Simple is a QR-code-based review management platform built for Indian businesses. We help business owners collect genuine customer reviews on platforms like Google, Zomato, Justdial, and others — and receive private feedback from customers who had a poor experience.

**Data Fiduciary (the entity responsible for your data):**

[LEGAL_ENTITY_NAME]
Operating as: Karo Simple
Website: https://karosimple.in
Platform: https://app.karosimple.in
Registered Address: [REGISTERED_ADDRESS]
Privacy Contact: privacy@karosimple.in

As the Data Fiduciary under the Digital Personal Data Protection Act 2023 (DPDPA 2023), Karo Simple decides the purpose and means of processing your personal data and is responsible for protecting it.

---

## 2. Who This Policy Applies To {#who-this-applies-to}

This Privacy Policy applies to:

**Business Owners** — Indian small and medium business owners who register on Karo Simple to manage customer reviews for their business.

**Agency Owners** — Digital marketing agencies or multi-location businesses that manage multiple sub-businesses under one Karo Simple account.

**Affiliates** — Individuals who join the Karo Simple Affiliate Program to refer new users and earn commission. (Note: The Affiliate Program is currently in development and will be launched separately. When it goes live, this section will apply.)

**Website Visitors** — Anyone who visits karosimple.in without creating an account.

By using our platform or website, you confirm that you have read and understood this Privacy Policy.

---

## 3. What Personal Data We Collect {#data-we-collect}

### 3.1 Business Owners and Agency Owners {#data-business-owners}

| Data Type | Specific Fields | Why We Collect It |
|---|---|---|
| Identity | Full name, email address, phone number | Account creation and communication |
| Business Details | Business name, category, city, address | Platform setup and QR code generation |
| Payment Data | Subscription plan, billing cycle, payment reference ID | Billing via our payment gateway — we do not store card or UPI numbers |
| Platform Activity | Review platform links added, QR codes generated, scan count | Delivering the service to you |
| Customer Feedback | Private feedback submitted by dissatisfied customers | Stored on your behalf for your business improvement |
| Device and Browser | IP address, browser type, device type, session identifiers | Security and fraud prevention |

**Important:** Karo Simple does not store positive review content. When a satisfied customer submits a review on Google, Zomato, or any other platform through your QR code, that content goes directly to that platform. We only store the private negative feedback that customers submit through our internal feedback form.

### 3.2 Affiliates {#data-affiliates}

This section applies when the Affiliate Program launches.

| Data Type | Specific Fields | Why We Collect It |
|---|---|---|
| Identity | Full name, email address, phone number | Account creation |
| Tax Information | PAN card number | Mandatory for TDS compliance under Section 194H of the Income Tax Act 1961 |
| Bank Details | Account holder name, account number, IFSC code, bank name | Processing affiliate payouts |
| Government ID | One photo ID — Voter ID, Passport, or Driving Licence | Verifying identity before transferring money to your account |
| Referral Activity | Affiliate link clicks, conversions, commissions earned, payout history | Commission tracking and payment |
| Cookie Data | 30-day tracking cookie (ks_affiliate_ref) | Attributing referrals during the commission window |

**Aadhaar:** Karo Simple does not collect or store Aadhaar numbers. As a private entity, we are not permitted to mandate Aadhaar under the Aadhaar Act 2016. We use PAN and one alternative government-issued photo ID instead.

### 3.3 Website Visitors {#data-visitors}

| Data Type | Why We Collect It |
|---|---|
| Cookies (with your consent) | Analytics and, if applicable, affiliate tracking |
| IP address and device/browser data | Security, regional analytics |
| Contact form submissions (name, email, message, business type) | Responding to your enquiry |

---

## 4. Sensitive Personal Data {#sensitive-data}

Under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules 2011, the following data we collect from Affiliates is classified as Sensitive Personal Data:

- PAN card number
- Bank account details
- Financial payment history

We collect this data only after receiving your explicit consent at the point of collection. This data is:

- Encrypted at rest using AES-256 encryption
- Never sold, rented, or shared with any third party except as required for payment processing or compliance with Indian law
- Accessible only to authorised personnel within Karo Simple

If you wish to withdraw your consent for us holding this data, email privacy@karosimple.in. Please note that withdrawing consent will prevent us from processing affiliate payouts and may result in account suspension.

---

## 5. Why We Use Your Data {#purpose-of-collection}

| Purpose | Legal Basis |
|---|---|
| Providing the Karo Simple platform and all its features | Contractual necessity |
| Processing subscription payments via our payment gateway | Contractual necessity |
| Sending transactional emails — invoices, OTPs, plan alerts | Contractual necessity |
| Sending WhatsApp notifications (only if you opt in) | Your consent |
| Tracking affiliate referrals and processing commissions | Contractual necessity |
| TDS deduction and filing (affiliates) | Legal obligation under the Income Tax Act |
| Analytics and improving the product | Legitimate interest |
| Customer support | Legitimate interest |
| Detecting and preventing fraud and security threats | Legitimate interest |
| Complying with Indian law and responding to government or court orders | Legal obligation |

We do not use your data for advertising to third parties. We do not sell your data.

---

## 6. Third-Party Services We Use {#third-party-services}

To deliver our service, we share certain data with the following third-party processors. Each is bound by their own privacy practices.

| Service | Data They Receive | Purpose |
|---|---|---|
| Payment Gateway (our payment processor) | Name, email, phone, payment amount | Processing subscription payments |
| Google (OAuth and Analytics) | Email address, usage and traffic data | Sign-in with Google; analytics (with your consent) |
| Vercel | All platform traffic and data in transit | Hosting infrastructure for karosimple.in and app.karosimple.in |
| Sanity CMS | Blog content only — no personal data | Managing blog and content pages |
| WhatsApp Business API | Phone number (only if you have opted in) | Sending business notifications |
| Email Service Provider | Name and email address | Sending transactional emails |

**Data Transfer Outside India:** Vercel and Google operate servers outside India. When you use our platform, your data may be processed on servers located internationally. Both Vercel and Google maintain data protection standards consistent with the requirements of Indian law. This cross-border transfer is disclosed in compliance with DPDPA 2023.

---

## 7. Cookies and Tracking {#cookies}

### 7.1 Essential Cookies {#essential-cookies}

These cookies are necessary for the platform to function. They do not require your consent and cannot be turned off.

| Cookie | Purpose |
|---|---|
| Authentication session cookie | Keeps you logged in to app.karosimple.in |
| CSRF protection token | Prevents cross-site request forgery attacks |

### 7.2 Analytics Cookies {#analytics-cookies}

We use Google Analytics 4 (GA4) to understand how visitors use our website. These cookies are not loaded until you explicitly accept them through our Cookie Consent Banner.

### 7.3 Affiliate Tracking Cookie {#affiliate-tracking-cookie}

When you visit karosimple.in through an affiliate's referral link, we set a tracking cookie to record the referral so the affiliate can receive their commission.

- Cookie name: ks_affiliate_ref
- Duration: 30 days
- What it stores: The affiliate's referral ID, not any personal information about you
- Consent: This cookie is only set if you accept tracking cookies through our Cookie Consent Banner. If you reject tracking cookies, this cookie is not set.

You can manage your cookie preferences at any time using the Cookie Settings option in our website footer.

---

## 8. How Long We Keep Your Data {#data-retention}

| Data | How Long We Keep It |
|---|---|
| Business Owner and Agency Owner account data | For the duration of your account, plus 2 years after account deletion |
| Private customer feedback stored on your behalf | For the duration of your account, plus 2 years |
| Payment and subscription records | 7 years (required for GST and income tax compliance) |
| Affiliate KYC documents (PAN, bank details, government ID) | 7 years after your last payout (required for tax compliance) |
| Affiliate commission records | 7 years (income tax records) |
| Contact form submissions | 1 year |
| Analytics data | 26 months (Google Analytics 4 default retention) |
| Affiliate tracking cookie | 30 days |

After these periods, data is either deleted or anonymised.

---

## 9. Your Rights Under DPDPA 2023 {#your-rights}

If you are a registered user of Karo Simple, you have the following rights under the Digital Personal Data Protection Act 2023:

**Right to Access** — You can request a copy of the personal data we hold about you.

**Right to Correction** — You can ask us to correct any inaccurate or incomplete personal data.

**Right to Erasure** — You can request that we delete your personal data. This right is subject to any legal retention obligations we have (see Section 8).

**Right to Withdraw Consent** — You can withdraw consent for non-essential data processing at any time. This does not affect the lawfulness of processing carried out before you withdrew consent.

**Right to Nominate** — Under DPDPA 2023, you may nominate another individual to exercise your data rights on your behalf in the event of your death or incapacity.

**Right to Grievance Redressal** — You may file a complaint with our Grievance Officer if you believe your data rights have been violated (see Section 12).

To exercise any of these rights, email us at privacy@karosimple.in. We will respond within 30 days of receiving your request.

---

## 10. Children's Data {#childrens-data}

Karo Simple is a business-to-business SaaS platform designed for use by business owners and professionals. It is not intended for individuals under the age of 18.

We do not knowingly collect personal data from minors. If you believe that a person under 18 has registered on our platform, contact us immediately at privacy@karosimple.in and we will delete the account promptly.

---

## 11. How We Protect Your Data {#security}

We take the security of your personal data seriously. The measures we have in place include:

- All sensitive personal data (PAN numbers, bank account details) is encrypted at rest using AES-256 encryption
- All data transmitted between your device and our servers is protected by TLS 1.2 or higher — HTTPS is enforced across all routes on both karosimple.in and app.karosimple.in
- Payment transactions are processed entirely by our payment gateway — Karo Simple does not store your card numbers, CVV, or UPI PIN at any point
- Access to personal data within our systems is restricted to authorised personnel only, through role-based access controls
- Our database access is secured and audited

No system is completely immune to security risks. While we take all reasonable precautions, we encourage you to use a strong password and to notify us immediately if you suspect any unauthorised access to your account.

---

## 12. Grievance Officer {#grievance-officer}

In accordance with the Information Technology Act 2000 Rule 5(9) and the Digital Personal Data Protection Act 2023, we have appointed a Grievance Officer to handle complaints related to this Privacy Policy and your personal data.

**Grievance Officer:** [GRIEVANCE_OFFICER_NAME]
**Designation:** Grievance Officer, Karo Simple
**Email:** grievance@karosimple.in
**Address:** [REGISTERED_ADDRESS]

**Acknowledgement:** Within 48 hours of receiving your complaint
**Resolution:** Within 30 days of acknowledgement

You may also submit complaints through our online Grievance form at karosimple.in/grievance.

If your complaint is not resolved to your satisfaction within 30 days, you may escalate the matter to the relevant authority under DPDPA 2023 or the Ministry of Electronics and Information Technology (MeitY).

---

## 13. Changes to This Policy {#policy-changes}

We may update this Privacy Policy from time to time to reflect changes in our practices, platform features, or applicable law. When we do, we will update the "Last Updated" date at the top of this page.

For significant changes that affect how we use your data, we will notify registered users by email at least 7 days before the changes take effect.

Your continued use of Karo Simple after a revised Privacy Policy is posted constitutes your acceptance of the updated policy.

---

## 14. Contact Us {#contact}

For any questions or concerns about this Privacy Policy or how we handle your data:

**Privacy queries:** privacy@karosimple.in
Response time: Within 30 days

**General support:** support@karosimple.in

**Grievance Officer:** grievance@karosimple.in
Response time: Within 48 hours

---

*See also: [Terms of Service](/terms) · [Refund & Cancellation Policy](/refund-policy) · [Grievance Redressal](/grievance)*
