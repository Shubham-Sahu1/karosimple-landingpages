# GRIEVANCE REDRESSAL — PAGE CONTENT
## Karo Simple | karosimple.in/grievance

---

## HOW TO USE THIS FILE

This file contains the **complete, ready-to-use content** for the Grievance Redressal page.
The AI building this page should:
- Use all text under each section heading exactly as written
- Replace anything inside `[SQUARE BRACKETS]` with the actual value before going live
- This page is NOT fully static — it has a working complaint form connected to the backend
- The form section is clearly marked below with exact field specs, API endpoint, and success/error states
- The "Response Commitment" block (Section 2) must render as a styled card/info-box — not plain text
- Page uses `MarketingLayout.jsx` wrapper
- Route: `/grievance`

**Placeholders to fill before going live:**
- `[GRIEVANCE_OFFICER_NAME]` — founder name, the real person monitoring grievance@karosimple.in
- `[REGISTERED_ADDRESS]` — full registered business address
- `[LAUNCH_DATE]` — date this page goes live

**Backend requirements (before this page can go live):**
- `POST /api/public/grievance` endpoint — no auth required, public
- Sends auto-acknowledgement email to the complainant
- Sends notification to grievance@karosimple.in with all form data
- Saves to `grievances` table in the database
- Use existing `asyncHandler` / `ApiResponse` / `ApiError` utilities
- Prisma schema for `grievances` table is in the spec file `04_grievance_redressal.md`

**Grievance Officer inbox:**
- `grievance@karosimple.in` must be a real, monitored inbox — not a forwarding alias that goes unread
- 48-hour response is a legal commitment under DPDPA 2023

---

## META TAGS (add to page `<Head>`)

```
Title: Grievance Redressal | Karo Simple
Description: Submit a complaint or grievance to Karo Simple. Every complaint is acknowledged within 48 hours and resolved within 30 days.
Canonical: https://karosimple.in/grievance
```

---

## PAGE CONTENT STARTS HERE

---

# Grievance Redressal

**We take every complaint seriously. Every grievance submitted through this page is acknowledged within 48 hours.**

Karo Simple is committed to resolving complaints fairly, honestly, and without unnecessary delay. If you have a concern about your data, our content, your account, billing, or how the platform behaves, this is the right place to raise it.

As required under the Information Technology Act 2000 and the Digital Personal Data Protection Act 2023, we have appointed a Grievance Officer who personally oversees every complaint received.

---

## 1. Grievance Officer {#grievance-officer}

The following person is appointed as the Grievance Officer for Karo Simple in compliance with IT Act 2000 Rule 5(9) and DPDPA 2023:

**Name:** [GRIEVANCE_OFFICER_NAME]
**Designation:** Grievance Officer, Karo Simple
**Email:** grievance@karosimple.in
**Address:** [REGISTERED_ADDRESS]

You may contact the Grievance Officer directly by email, or use the complaint form on this page.

---

## 2. Our Response Commitment {#response-commitment}

<!-- DEVELOPER: Render this section as a styled card or info-box. Use navy #1B2A4A background with white text or green #3DAA72 accents. It must stand out visually from the body text. -->

**Acknowledgement:** We will acknowledge your complaint within 48 hours of receiving it.

**Resolution:** We will work to resolve your complaint within 30 days of acknowledgement.

**Direct contact:** grievance@karosimple.in

These timelines are a legal commitment, not a target. If you do not receive an acknowledgement within 48 hours of submitting through this form or emailing us directly, please check your spam folder and then follow up.

---

## 3. What You Can Raise a Grievance About {#what-to-report}

You may submit a complaint for any of the following:

**Privacy and Data** — concerns about how your personal data is being collected, stored, processed, or shared. This includes requests to access, correct, or delete your data under DPDPA 2023.

**Content Disputes** — if you believe any content on karosimple.in or app.karosimple.in is unlawful, defamatory, infringes your intellectual property rights, or otherwise violates your legal rights.

**Account Issues** — account suspension without prior notice, inability to access your account, suspected unauthorised access to your account, or any issue with account ownership.

**Billing and Payments** — incorrect charges, a payment deducted but plan not activated, a refund not processed within the committed timeline, or any other subscription-related financial dispute.

**Platform Behaviour** — the platform is not functioning as described on our website, features are inaccessible on your plan, or there is a persistent technical issue that support has not resolved.

**Other** — anything else that concerns you about Karo Simple and does not fall neatly into the above categories.

---

## 4. Submit Your Complaint {#complaint-form}

<!-- DEVELOPER: This is a functional form. See form spec below. -->

Fill in the form below. All fields marked with an asterisk (*) are required. You will receive an acknowledgement email at the address you provide within 48 hours.

---

### FORM SPECIFICATION FOR DEVELOPER

**API Endpoint:** `POST /api/public/grievance`
No authentication required. This is a public endpoint.

**Fields:**

| Field Label | Input Type | Field Name | Required | Validation |
|---|---|---|---|---|
| Full Name * | text | `name` | Yes | Min 2 chars, max 100 chars |
| Email Address * | email | `email` | Yes | Valid email format |
| Phone Number | tel | `phone` | No | Indian format, 10 digits |
| Subject * | text | `subject` | Yes | Min 5 chars, max 200 chars |
| Type of Complaint * | select/dropdown | `complaint_type` | Yes | See options below |
| Complaint Details * | textarea | `details` | Yes | Min 50 chars, max 2000 chars. Show character count. |
| Order / Transaction ID | text | `order_id` | No | Show helper text: "If your complaint is about a payment, enter your Order ID here." |
| Submit Button | — | — | — | Label: "Submit Grievance" |

**Dropdown options for `complaint_type`:**
- Privacy and Data
- Content Dispute
- Account Issue
- Billing and Payment
- Platform Behaviour
- Other

**On successful submission:**
- Show inline success message (do not redirect):
  > "Your grievance has been submitted successfully. A reference number has been sent to [email]. You will receive an acknowledgement within 48 hours."
- Clear the form fields
- Send auto-acknowledgement email to the user (see email content below)
- Send notification email to grievance@karosimple.in with all field values
- Save record to `grievances` table

**On error:**
- Show inline error message:
  > "Something went wrong. Please try again or email us directly at grievance@karosimple.in."

**Auto-acknowledgement email to user:**
```
Subject: Your Grievance Has Been Received — Karo Simple [Reference: GRV-{id}]

Dear [name],

Thank you for reaching out to us. We have received your complaint regarding "[subject]" and it has been assigned Reference Number GRV-{id}.

Our Grievance Officer will review your complaint and respond within 30 days. You will receive an initial acknowledgement from our team within 48 hours.

If your complaint is urgent or you do not hear from us within 48 hours, please email grievance@karosimple.in directly with your reference number.

Grievance Officer
Karo Simple
grievance@karosimple.in
karosimple.in/grievance
```

---

## 5. What Happens After You Submit {#process}

Once your complaint is received, here is what happens:

**Step 1 — Acknowledgement (within 48 hours)**
You receive a confirmation email with a reference number. Our Grievance Officer reviews the nature of your complaint and categorises it.

**Step 2 — Investigation**
Depending on the type of complaint, we will review the relevant account records, transaction history, data logs, or platform behaviour. We may reach out to you for additional information if needed.

**Step 3 — Resolution (within 30 days)**
We will communicate the outcome to you in writing at the email address you provided. If we need more time due to complexity, we will inform you of the revised timeline before the 30-day period ends.

**Step 4 — Closure**
Once you confirm the resolution or after 7 days of no response from you following our resolution communication, the complaint is marked closed.

---

## 6. If You Are Not Satisfied {#escalation}

If your complaint is not resolved within 30 days, or if you are not satisfied with the resolution, you have the right to escalate the matter to relevant external authorities:

**For data privacy issues:**
Adjudicating Officer appointed under DPDPA 2023 or the Ministry of Electronics and Information Technology (MeitY)
Website: meity.gov.in

**For consumer disputes:**
Consumer Protection Act 2019 — National Consumer Helpline: 1800-11-4000 (toll-free)
Online portal: consumerhelpline.gov.in (INGRAM)
You may also approach your District Consumer Disputes Redressal Commission.

**For payment-related issues:**
Your bank's nodal officer or the RBI Banking Ombudsman
RBI portal: cms.rbi.org.in

---

## 7. Reporting Fake Reviews or Platform Misuse {#report-misuse}

If you believe a business is using Karo Simple to generate fake reviews, manipulate ratings, or engage in any activity that violates our Acceptable Use Policy or Indian consumer law, please report it separately at:

**Email:** abuse@karosimple.in
**Subject:** Review Misuse Report — [Business Name if known]

We treat all misuse reports seriously. Verified violations result in immediate account suspension and, where applicable, reporting to consumer protection authorities.

---

*See also: [Privacy Policy](/privacy) · [Terms of Service](/terms) · [Refund & Cancellation Policy](/refund-policy)*
