# AFFILIATE TERMS & CONDITIONS — PAGE CONTENT
## Karo Simple | karosimple.in/affiliate-terms
## STATUS: DRAFT — Do not publish until affiliate program is ready to launch

---

## HOW TO USE THIS FILE

This file contains the **complete, ready-to-use content** for the Affiliate Terms & Conditions page.
This page is in DRAFT status. It should NOT be published on the live site until:
- The affiliate program is fully built in app.karosimple.in
- TAN registration is complete (consult your CA)
- CA has confirmed TDS setup under Section 194H
- KYC document upload flow is built and tested
- affiliates@karosimple.in inbox is live and monitored

The AI building this page should:
- Use all text under each section heading exactly as written
- Replace anything inside `[SQUARE BRACKETS]` with the actual value before going live
- This is a fully static page — no forms, no API calls on this page itself
- The acceptance checkbox lives inside the affiliate onboarding flow in app.karosimple.in, not here
- Page uses `MarketingLayout.jsx` wrapper
- Route: `/affiliate-terms`
- Set `noindex` meta tag on this page — it is a legal document, not a content page

**Placeholders to fill before going live:**
- `[LEGAL_ENTITY_NAME]` — your registered business name
- `[REGISTERED_ADDRESS]` — your full registered business address
- `[GRIEVANCE_OFFICER_NAME]` — founder name monitoring grievance@karosimple.in
- `[CITY]` — Raipur, Chhattisgarh (for jurisdiction clause)
- `[AFFILIATE_LAUNCH_DATE]` — date affiliate program goes live, format: DD Month YYYY

**Developer actions required before this page goes live:**
- Add `affiliate_terms_accepted_at` and `affiliate_terms_version` fields to the `Affiliate` Prisma model
- Add `tds_applicable` boolean field to `Affiliate` model — computed true when cumulative annual payout exceeds ₹15,000
- Set `cleared_at = conversion_date + 30 days` in `AffiliateConversion` model
- Acceptance checkbox in affiliate onboarding: unchecked by default, required, links to this page
- Create and monitor affiliates@karosimple.in inbox

---

## META TAGS (add to page `<Head>`)

```
Title: Affiliate Terms & Conditions | Karo Simple
Description: Terms and conditions for the Karo Simple Affiliate Program. Read this carefully before activating your affiliate account.
Canonical: https://karosimple.in/affiliate-terms
Robots: noindex, nofollow
```

---

## PAGE CONTENT STARTS HERE

---

**Last Updated: [AFFILIATE_LAUNCH_DATE]**
**Effective Date: [AFFILIATE_LAUNCH_DATE]**

---

## 1. Introduction and Agreement {#introduction}

These Affiliate Terms and Conditions ("Affiliate Terms") govern your participation in the Karo Simple Affiliate Program ("Program"). By activating your affiliate account, generating your affiliate link, or promoting Karo Simple in any capacity as an affiliate, you ("Affiliate", "you", "your") agree to be bound by these Affiliate Terms.

These Affiliate Terms apply in addition to Karo Simple's main Terms of Service at karosimple.in/terms and Privacy Policy at karosimple.in/privacy. You must read and accept both before participating in the Program.

These Affiliate Terms form a legally binding agreement between you and [LEGAL_ENTITY_NAME] (operating as Karo Simple) under the Indian Contract Act 1872. Where there is a conflict between these Affiliate Terms and the main Terms of Service on any matter specifically related to the affiliate program, these Affiliate Terms take precedence.

---

## 2. Who Can Join the Program {#eligibility}

### 2.1 Eligibility Requirements {#eligibility-requirements}

To participate in the Karo Simple Affiliate Program, you must meet all of the following conditions:

- You are an individual resident of India and are at least 18 years of age
- You hold a valid PAN card issued by the Income Tax Department of India
- You have an active Indian bank account in your name for receiving payouts
- You have a legitimate platform, audience, or network through which you intend to promote Karo Simple — this includes but is not limited to a social media account, YouTube channel, blog, website, newsletter, or professional network
- You are not an existing Karo Simple Business Owner or Agency Owner using the affiliate link to refer your own account or accounts you control

If any of the above conditions change during your time in the Program, you are required to inform us at affiliates@karosimple.in immediately.

### 2.2 Application and Approval {#application-approval}

All applications to the Affiliate Program are subject to review and approval by Karo Simple. We reserve the right to approve or reject any application at our sole discretion and without providing a reason. Approval of your application does not guarantee continued participation — we may suspend or terminate your affiliate account at any time as described in Section 9.

---

## 3. How the Program Works {#how-it-works}

### 3.1 Your Affiliate Link {#affiliate-link}

Once approved, you will receive a unique affiliate referral link through your Karo Simple affiliate dashboard. This link is personal to you and must not be shared with or transferred to any other individual or entity. All activity tracked through this link is attributed to your account.

### 3.2 The 30-Day Cookie Window {#cookie-window}

When a user clicks your affiliate link and visits karosimple.in, a tracking cookie — named `ks_affiliate_ref` — is set in their browser with a validity of 30 days. If that user creates a Karo Simple account and completes their first paid subscription purchase at any point within those 30 days, the conversion is attributed to your affiliate account and you earn the applicable commission.

Cookie attribution follows a last-click model. If the same user clicks affiliate links from multiple affiliates during the 30-day window, the commission is attributed to the affiliate whose link was clicked most recently before the purchase.

If a user clears their browser cookies, uses a different browser or device, or declines tracking cookies through our Cookie Consent Banner, the tracking cookie will not persist and the conversion may not be attributed to you. Karo Simple is not liable for attribution loss due to user cookie settings.

### 3.3 What Counts as a Conversion {#what-counts}

A conversion is recorded — and commission becomes eligible — when all of the following are true:

- A new user visits karosimple.in via your affiliate link or within the 30-day cookie window from your link
- That user creates a new Karo Simple account
- That user completes their first-ever paid subscription purchase on any paid plan (Starter, Pro, or Agency)

The following do not count as conversions and do not earn commission:

- Free plan signups — no payment is involved
- Plan upgrades by users who are already on a paid plan
- Subscription renewals by existing paid users
- Purchases by users who had an existing Karo Simple account before clicking your affiliate link
- Purchases that are later reversed due to a payment gateway failure or a verified billing error eligible for refund under our Refund Policy

---

## 4. Commission {#commission}

### 4.1 Commission Rate {#commission-rate}

Your applicable commission rate is communicated to you at the time of affiliate program approval and is displayed in your affiliate dashboard. Commission rates may vary by plan type (Starter, Pro, Agency). All commission amounts are in Indian Rupees (₹).

Karo Simple may update commission rates at any time with 30 days' prior written notice to your registered email address. Conversions that occurred before the effective date of any rate change are paid at the rate that was in effect on the date of conversion.

### 4.2 What Your Dashboard Shows {#dashboard}

Your affiliate dashboard displays the following in real time:

- Total clicks on your affiliate link
- Total conversions attributed to your link
- Commission earned — broken down into pending (within the 30-day clearing period) and cleared (eligible for payout)
- Total amount paid out to date
- Payout history

### 4.3 Karo Coins Are Separate {#karo-coins}

The Karo Coins referral reward system is a separate mechanism available only to existing Business Owner accounts on Karo Simple for referring other businesses to the platform. Karo Coins have no cash value, cannot be converted to affiliate commission, and are governed by separate terms displayed in the Business Owner dashboard. These Affiliate Terms do not apply to Karo Coins and the Karo Coins system does not apply to affiliates.

---

## 5. KYC Verification {#kyc}

### 5.1 Mandatory Before First Payout {#kyc-mandatory}

Karo Simple is required to verify your identity before transferring any money to your bank account. KYC (Know Your Customer) verification is mandatory and must be completed through your affiliate dashboard before your first payout is processed. No exceptions.

You must submit the following:

**Identity and Tax Document (mandatory):**
PAN card — a clear image of the front side of your PAN card issued by the Income Tax Department of India. This is required for TDS compliance under Section 194H of the Income Tax Act 1961.

**Bank Account Details (mandatory):**
Account holder name, bank account number, IFSC code, and bank name. You must also upload either a cancelled cheque or a recent bank statement showing your name and account number, for verification purposes.

**Government-Issued Photo ID (one of the following, mandatory):**
Voter ID (front and back), Passport (front page showing your photo and personal details), or Driving Licence (front and back).

### 5.2 Aadhaar {#aadhaar}

Karo Simple does not collect Aadhaar numbers. We do not accept Aadhaar as a KYC document. Under the Aadhaar Act 2016, private entities are restricted from mandating Aadhaar for identity verification. Please do not submit your Aadhaar number or Aadhaar card through any channel — email, dashboard upload, or otherwise.

### 5.3 How Your KYC Data Is Protected {#kyc-security}

All KYC documents and financial information you submit are encrypted at rest. This data is accessed only by authorised personnel within Karo Simple for the purpose of identity verification and payout processing. It is never sold, rented, or shared with any third party except as required for tax filing under Indian law. Full details are in our Privacy Policy at karosimple.in/privacy.

### 5.4 Consequences of Fraudulent Documents {#kyc-fraud}

If any document submitted for KYC verification is found to be forged, tampered, or fraudulent, your affiliate account will be permanently suspended, all commissions — pending and cleared — will be forfeited, and the matter will be reported to the relevant authorities including law enforcement and the Income Tax Department.

---

## 6. Tax Deducted at Source (TDS) {#tds}

### 6.1 Legal Basis {#tds-legal-basis}

Commission payments made to affiliates are subject to Tax Deducted at Source under Section 194H of the Income Tax Act 1961. Section 194H covers TDS on commission or brokerage payments made to resident individuals.

### 6.2 When TDS Applies {#tds-threshold}

TDS is applicable when your total commission earnings from Karo Simple in a single financial year (1 April to 31 March) exceed ₹15,000. If your total earnings cross this threshold, Karo Simple will deduct TDS at 5% on the amount before processing your payout.

If the threshold is not crossed in a financial year, TDS is not deducted and your full cleared commission is paid out.

### 6.3 Form 16A {#form-16a}

For any financial year in which TDS is deducted from your commissions, Karo Simple will deposit the deducted amount with the Income Tax Department and issue you a Form 16A (TDS Certificate). You can use this certificate when filing your annual income tax return to claim credit for the tax already deducted.

### 6.4 Why Your PAN Is Non-Negotiable {#pan-mandatory}

TDS cannot be filed with the Income Tax Department without your PAN number. If you do not submit a valid PAN card before your payout is processed, the Income Tax Act requires Karo Simple to deduct TDS at the higher rate of 20% instead of 5%. Submitting your PAN is the only way to ensure the lower rate applies.

### 6.5 Your Own Tax Filing Responsibility {#affiliate-tax-responsibility}

Commission income you earn from the Karo Simple Affiliate Program is income in your hands and is taxable under Indian income tax law. It must be declared correctly in your annual income tax return. Karo Simple provides Form 16A as supporting documentation only — we are not responsible for your tax filing, your tax liability, or any penalties arising from your failure to declare this income correctly. We recommend consulting a tax advisor if you are unsure how to handle affiliate income in your return.

---

## 7. Payouts {#payouts}

### 7.1 Minimum Payout Threshold {#payout-threshold}

Payouts are processed only when your cleared commission balance reaches a minimum of ₹500. If your cleared balance is below ₹500 at the time of a payout cycle, the balance rolls over to the next cycle.

### 7.2 Payout Schedule {#payout-schedule}

Payouts are processed monthly, typically in the first week of the calendar month for commissions that cleared in the previous month. For example, commissions that cleared in January are paid in the first week of February.

### 7.3 Commission Clearing Period {#clearing-period}

After a conversion is recorded, the commission enters a 30-day holding period before it is marked as cleared. This holding period exists to account for payment reversals, technical errors, or billing failures that may occur shortly after a subscription is activated. After 30 days with no reversal, the commission moves from pending to cleared and becomes eligible for payout.

### 7.4 How Payouts Are Made {#payout-method}

All payouts are made via NEFT or IMPS bank transfer to the verified bank account you submitted during KYC. We do not make cash payouts, UPI transfers to personal mobile numbers, or payments to third-party accounts that are not in your name.

### 7.5 Payout Failures {#payout-failure}

If a payout fails because your bank account details are incorrect or your account is inactive, the amount is returned to your cleared balance and you will be notified by email to update your bank details. Karo Simple is not responsible for delays or losses caused by incorrect bank information provided by you.

---

## 8. What You Must Not Do {#prohibited-conduct}

The following are strictly prohibited and will result in immediate termination of your affiliate account and forfeiture of all commissions:

**Paid advertising without approval** — You must not run paid advertisements (Google Ads, Meta Ads, YouTube Ads, or any other paid promotion) using your affiliate link or mentioning Karo Simple without prior written approval from us. Contact affiliates@karosimple.in to request approval before spending money on ads.

**False or misleading claims** — You must not make any claim about Karo Simple's features, pricing, results, or capabilities that is false, exaggerated, or not verifiable from our official website. Do not promise specific review count increases, rating improvements, or business results that we have not guaranteed.

**Spam and unsolicited promotion** — You must not promote your affiliate link through unsolicited direct messages, email spam, WhatsApp broadcasts to non-consenting recipients, or any other method that violates platform terms or Indian law.

**Incentivising signups** — You must not offer any form of cash, gift, discount, or incentive to individuals in exchange for signing up through your affiliate link.

**Fake accounts and fraudulent conversions** — You must not create fake Karo Simple accounts, use bots or automated tools, or engage in any other fraudulent means to generate artificial conversions.

**Self-referral** — You must not use your own affiliate link to create a Business Owner or Agency Owner account for your own business. Your affiliate link is for referring other people, not yourself.

**Brand impersonation** — You must not create websites, social media accounts, email addresses, or any other presence that impersonates Karo Simple or could mislead people into thinking they are dealing with Karo Simple directly. You may identify yourself as a Karo Simple affiliate, but you may not present yourself as Karo Simple.

**Cookie stuffing** — You must not use any technical method to set the `ks_affiliate_ref` tracking cookie on a user's browser without that user having genuinely and voluntarily clicked your affiliate link.

**Unauthorised brand asset use** — You must not use Karo Simple's logo, name, screenshots, or any other brand material in your promotional content without downloading them from the approved materials we provide. You must not modify, distort, or misrepresent our brand assets.

---

## 9. Termination {#termination}

### 9.1 Leaving the Program {#termination-by-you}

You may choose to leave the Karo Simple Affiliate Program at any time by emailing affiliates@karosimple.in. Upon voluntary withdrawal, any cleared commissions at or above the ₹500 minimum threshold will be paid out in the next regular payout cycle. Commissions that are still in the 30-day pending period at the time of withdrawal are forfeited.

### 9.2 Termination by Karo Simple {#termination-by-us}

Karo Simple may suspend or terminate your affiliate participation at any time. If termination is for cause — meaning a violation of these Affiliate Terms — all commissions, both pending and cleared, are forfeited regardless of amount. If termination is without cause, cleared commissions at or above the minimum threshold will be paid out in the next cycle.

We will notify you of termination by email to your registered email address. Termination takes effect immediately upon notification.

### 9.3 Program Discontinuation {#program-discontinuation}

Karo Simple may discontinue the Affiliate Program entirely at any time. In this case, we will provide at least 30 days' written notice to all active affiliates. All cleared commissions at or above the minimum payout threshold at the time of discontinuation will be paid out before the program closes.

---

## 10. No Guarantee of Earnings {#disclaimer}

Karo Simple makes no representation, warranty, or guarantee regarding the amount of commission you will earn through the Affiliate Program. Your earnings depend entirely on factors outside our control, including the quality and reach of your promotional content, the decisions of users you refer, and the pricing plans those users choose.

We are not liable for any financial loss, loss of expected earnings, or business loss you experience based on your participation in or expectation of income from the Affiliate Program.

---

## 11. Intellectual Property Licence {#ip-licence}

Karo Simple grants you a limited, non-exclusive, non-transferable, revocable licence to use our approved affiliate marketing materials — including approved logo versions, banners, and promotional copy — solely for the purpose of promoting Karo Simple through your affiliate link in accordance with these Terms. This licence does not grant you any ownership rights over our brand or materials.

You must not alter, distort, animate, or otherwise modify our brand assets without written permission. You must not use our brand assets in any context that is defamatory, misleading, adult, political, or otherwise objectionable. We may revoke this licence and require you to remove all Karo Simple brand materials from your platform at any time.

---

## 12. Indemnification {#indemnification}

You agree to indemnify, defend, and hold harmless Karo Simple, its founders, employees, and representatives from any claims, losses, damages, fines, or legal costs arising from your violation of these Affiliate Terms, your promotional activities, or your failure to comply with applicable Indian law.

---

## 13. Governing Law {#governing-law}

These Affiliate Terms are governed by the laws of the Republic of India. Any dispute arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in [CITY], Chhattisgarh, India.

Before approaching a court, both parties agree to attempt resolution through good-faith direct negotiation for 30 days from the date the dispute is first raised in writing.

---

## 14. Changes to These Terms {#changes}

Karo Simple may update these Affiliate Terms at any time. For material changes, we will provide at least 15 days' notice by email to your registered address before the changes take effect. Your continued participation in the Affiliate Program after the effective date constitutes your acceptance of the revised Terms.

If you do not agree to the revised Terms, you must notify us at affiliates@karosimple.in and your participation will be ended with cleared commissions paid out as per Section 9.1.

---

## 15. Contact {#contact}

**Affiliate program queries:**
affiliates@karosimple.in

**KYC and payout issues:**
billing@karosimple.in

**Grievance Officer:**
[GRIEVANCE_OFFICER_NAME], Karo Simple
grievance@karosimple.in
[REGISTERED_ADDRESS]
Response: Within 48 hours | Resolution: Within 30 days

You may also raise a formal complaint at karosimple.in/grievance.

---

*See also: [Privacy Policy](/privacy) · [Terms of Service](/terms) · [Refund & Cancellation Policy](/refund-policy) · [Grievance Redressal](/grievance)*
