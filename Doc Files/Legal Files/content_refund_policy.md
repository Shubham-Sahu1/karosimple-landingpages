# REFUND & CANCELLATION POLICY — PAGE CONTENT
## Karo Simple | karosimple.in/refund-policy

---

## HOW TO USE THIS FILE

This file contains the **complete, ready-to-use content** for the Refund & Cancellation Policy page.
The AI building this page should:
- Use all text under each section heading exactly as written
- Replace anything inside `[SQUARE BRACKETS]` with the actual value before going live
- Keep all section headings as `<h2>` tags in the JSX component
- Keep all sub-headings as `<h3>` tags
- Add `id` attribute to every heading (use the slug shown in each heading)
- The "Last Updated" line renders in a muted small text style at the top, not a heading
- Page uses `MarketingLayout.jsx` wrapper
- Route: `/refund-policy`

**Placeholders to fill before going live:**
- `[LAUNCH_DATE]` — date this page goes live, format: DD Month YYYY
- `[PAYMENT_GATEWAY_NAME]` — pull from `src/shared/constants/legal.js` — do not hardcode

**Pricing page action required (developer):**
Add the following line above every paid plan CTA button on `/pricing`:
> "By subscribing, you agree to our Terms of Service and Refund Policy. Paid plans are non-refundable. A free plan is available to try the platform first."
This disclosure is legally required under Consumer Protection (E-Commerce) Rules 2020.

**PhonePe note:**
This exact URL — `karosimple.in/refund-policy` — is the URL you submit in the PhonePe merchant verification form under "Refund Policy URL." It must be live and publicly accessible before submitting.

---

## META TAGS (add to page `<Head>`)

```
Title: Refund & Cancellation Policy | Karo Simple
Description: Karo Simple's refund and cancellation policy for SaaS subscriptions. Read this before purchasing a paid plan.
Canonical: https://karosimple.in/refund-policy
```

---

## PAGE CONTENT STARTS HERE

---

**Last Updated: [LAUNCH_DATE]**
**Effective Date: [LAUNCH_DATE]**

---

## 1. Overview {#overview}

Karo Simple is a subscription-based Software-as-a-Service (SaaS) platform. This page explains our policy on refunds and cancellations for all subscription plans.

We believe in being upfront. Before you spend any money, we want you to be sure Karo Simple is the right fit for your business. That is why we offer a permanently free plan with no credit card required. Try it first. Upgrade only when you are ready.

---

## 2. Our Refund Policy {#refund-policy}

**We do not offer refunds on paid subscriptions.**

This applies to all paid plans — Starter, Pro, and Agency — across all billing cycles: monthly, half-yearly, and annual.

Specifically, no refund will be issued for:

- Partial use of a billing cycle — if you subscribed on the 1st and decide you no longer want the plan on the 10th, the remaining days are not refundable
- Features you did not use during your subscription period
- A decision to stop using the platform after purchase
- A business that was sold, closed, transferred, or changed during the active subscription period
- Dissatisfaction with results — reviews, ratings, or customer response are influenced by many factors outside our control

**Why this is our policy:**

Karo Simple is a digital service. The moment your subscription is activated, you have immediate access to all features of your plan — AI credits, QR code generation, review flow configuration, the dashboard, and everything else. Unlike a physical product, a digital service cannot be returned or given back. The cost covers infrastructure, AI processing, and ongoing support that begins the moment you subscribe.

More importantly, our Free plan gives you genuine, unrestricted access to the core platform before you pay a single rupee. By choosing to upgrade to a paid plan, you are confirming that you have evaluated the product and are satisfied with what it offers. That evaluation period is what makes this policy fair.

---

## 3. When a Refund Will Be Issued {#exceptions}

Refunds are considered only in the following situations where the error is on our side or our payment processor's side — not a change of mind.

### 3.1 Duplicate Charge {#duplicate-charge}

If your account was charged more than once for the same subscription period due to a payment gateway error, we will verify the duplicate and refund the extra amount. Processing time: 5–7 business days from the date we confirm the error.

### 3.2 Wrong Amount Charged {#wrong-amount}

If the amount deducted from your account is different from the price shown to you at checkout — due to a pricing display error or a technical fault — we will correct it. We will either charge the correct amount and refund the difference, or process a full refund and ask you to repurchase at the correct price.

### 3.3 Payment Deducted but Plan Not Activated {#payment-not-activated}

If your payment was successfully deducted by [PAYMENT_GATEWAY_NAME] but your Karo Simple plan was not activated — meaning you paid but the system did not upgrade your account — we will resolve this within 5–7 business days. We will either activate your plan immediately or issue a full refund if the issue cannot be resolved.

### How to Request a Refund {#refund-request}

If any of the above situations apply to you, email us at **billing@karosimple.in** with the following:

- **Subject line:** REFUND REQUEST — [Your Order ID]
- A brief description of what happened
- A screenshot of the transaction from your bank app or payment app (if available)

Requests must be raised within **7 days** of the transaction date. Requests submitted after 7 days cannot be processed.

We will acknowledge your request within 2 business days and aim to resolve it within 5–7 business days.

---

## 4. Cancellation Policy {#cancellation}

### 4.1 How to Cancel {#how-to-cancel}

You can cancel your subscription at any time. There is no penalty for cancelling. To cancel, go to your dashboard and navigate to Settings → Subscription → Cancel Plan. Alternatively, email support@karosimple.in and our team will process the cancellation for you.

### 4.2 When Cancellation Takes Effect {#when-cancellation-takes-effect}

Cancellation takes effect at the end of your current billing cycle. You will not lose access immediately.

For example: if your monthly plan renews on the 1st of every month and you cancel on the 15th, your plan remains fully active until the end of that month. On the 1st of the following month, your account moves to the Free plan automatically. No further charges are made.

The same rule applies to half-yearly and annual plans — your plan stays active until the paid period ends.

### 4.3 What Happens After Your Plan Expires {#after-cancellation}

Once your paid plan expires after cancellation:

- Your account automatically moves to the Free plan — no data is deleted
- Your QR codes remain active within Free plan usage limits
- Your historical private feedback data remains accessible within Free plan limits
- AI-generated review suggestions are disabled (available on paid plans only)
- Advanced features like multi-platform routing and detailed analytics are restricted to Free plan limits

You can resubscribe to a paid plan at any time from your dashboard.

---

## 5. The Free Plan {#free-plan}

The Free plan is permanently available and requires no credit card, no payment, and no commitment. It is not a time-limited trial — it is a real plan that you can use indefinitely.

It exists for one reason: so you can fully understand how Karo Simple works before deciding to pay for more. We would rather you take your time and upgrade with confidence than rush into a paid plan and feel like you need a refund later.

If you are unsure whether Karo Simple is right for your business, start with the Free plan at karosimple.in/register.

---

## 6. Plan Upgrades and Downgrades {#upgrades-downgrades}

**Upgrades** take effect immediately. When you upgrade mid-cycle, you are charged only for the remaining days in the current billing period at the new plan's rate — calculated on a prorated basis. Your features update instantly.

**Downgrades** are not available mid-cycle. You cannot switch to a lower plan while a billing cycle is active. If you want to move to a lower plan, cancel your current plan and choose the lower plan when your next cycle begins. Your current plan remains fully active until the end of the paid period.

---

## 7. Karo Coins {#karo-coins}

Karo Coins are reward credits earned by Business Owners through the referral program. They are not currency, have no cash value, and cannot be refunded or withdrawn under any circumstances. Unused Karo Coins expire as per the terms displayed in your account dashboard. If your account is cancelled or terminated, any remaining Karo Coins are forfeited.

---

## 8. Payment Processor {#payment-processor}

All payments on Karo Simple are processed by [PAYMENT_GATEWAY_NAME]. When a refund is approved under Section 3, it is credited back to the original payment method — the same UPI ID, card, or bank account used for the original transaction — through [PAYMENT_GATEWAY_NAME].

The refund processing time on our end is 5–7 business days. After that, your bank or payment app may take an additional 3–5 business days to reflect the credit in your account. Total time from approval to your account: up to 10 business days.

If you have a dispute about the payment itself — such as an unauthorised transaction — you may contact [PAYMENT_GATEWAY_NAME] support directly. However, if you raise a chargeback with your bank without first contacting us, we reserve the right to suspend your account pending investigation. Please reach out to us first at billing@karosimple.in — we resolve genuine errors quickly.

---

## 9. Governing Law {#governing-law}

This Refund and Cancellation Policy is governed by the laws of the Republic of India. Any disputes arising from this policy are subject to the jurisdiction stated in our Terms of Service at karosimple.in/terms.

---

## 10. Contact for Billing Issues {#contact}

**Email:** billing@karosimple.in
**Subject format:** REFUND REQUEST — [Order ID]
**Response time:** Within 2 business days

For general support: support@karosimple.in
For grievances: grievance@karosimple.in or karosimple.in/grievance

---

*See also: [Privacy Policy](/privacy) · [Terms of Service](/terms) · [Grievance Redressal](/grievance)*
