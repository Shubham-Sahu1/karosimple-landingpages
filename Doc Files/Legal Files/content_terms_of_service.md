# TERMS OF SERVICE — PAGE CONTENT
## Karo Simple | karosimple.in/terms

---

## HOW TO USE THIS FILE

This file contains the **complete, ready-to-use content** for the Terms of Service page.
The AI building this page should:
- Use all text under each section heading exactly as written
- Replace anything inside `[SQUARE BRACKETS]` with the actual value before going live
- Keep all section headings as `<h2>` tags in the JSX component
- Keep all sub-headings as `<h3>` tags
- Add `id` attribute to every heading (use the slug shown in each heading)
- The "Last Updated" line at the top renders in a muted small text style, not a heading
- Page uses `MarketingLayout.jsx` wrapper
- Route: `/terms`
- Section 8 (Acceptable Use) must have id="acceptable-use" — it is linked from the FAQ page

**Placeholders to fill before going live:**
- `[LEGAL_ENTITY_NAME]` — your registered business name or "Karo Simple" if operating as proprietorship
- `[REGISTERED_ADDRESS]` — your full registered business address
- `[GRIEVANCE_OFFICER_NAME]` — founder name (Shubham or Chandan)
- `[CITY]` — your city for jurisdiction clause (Raipur, Chhattisgarh)
- `[LAUNCH_DATE]` — date this page goes live, format: DD Month YYYY
- `[PAYMENT_GATEWAY_NAME]` — name of your payment gateway (currently PhonePe — use the constant from src/shared/constants/legal.js)

**Developer note:** Every mention of `[PAYMENT_GATEWAY_NAME]` in this content must be dynamically pulled from your constants file, not hardcoded. This lets you change the gateway in one place if needed.

---

## META TAGS (add to page `<Head>`)

```
Title: Terms of Service | Karo Simple
Description: Terms of Service for Karo Simple — India's QR-based review management platform for small and medium businesses.
Canonical: https://karosimple.in/terms
```

---

## PAGE CONTENT STARTS HERE

---

**Last Updated: [LAUNCH_DATE]**
**Effective Date: [LAUNCH_DATE]**

---

## 1. Agreement to These Terms {#agreement}

By accessing karosimple.in or app.karosimple.in, or by clicking "I Agree" when creating your account, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.

These Terms form a legally binding agreement between you and Karo Simple under the Indian Contract Act 1872 and the Information Technology Act 2000. The words "we," "us," and "our" refer to Karo Simple. The words "you" and "your" refer to the Business Owner, Agency Owner, or any other user accessing the platform.

---

## 2. Who We Are {#who-we-are}

**[LEGAL_ENTITY_NAME]**
Operating as: Karo Simple
Website: https://karosimple.in
Platform: https://app.karosimple.in
Registered Address: [REGISTERED_ADDRESS]
Email: legal@karosimple.in

---

## 3. What Karo Simple Does {#what-we-do}

Karo Simple is a QR-code-based review management Software-as-a-Service (SaaS) platform built for Indian businesses. The platform helps business owners:

- Generate unique QR codes that guide customers through a structured review flow when scanned
- Route customers who had a good experience to public review platforms of their choice — including Google, Zomato, Swiggy, Justdial, TripAdvisor, Facebook, Practo, and others
- Collect private feedback from customers who had a poor experience, through a secure internal feedback form
- Access AI-generated review suggestion templates (available on paid plans) that customers can read, edit, or ignore before submitting their own review on a third-party platform

Karo Simple is a tool that makes it easier for your real customers to share their genuine experience. We do not write reviews on your behalf. We do not post reviews to any platform. Every review that appears on Google, Zomato, or any other platform is submitted by the customer themselves.

---

## 4. Eligibility {#eligibility}

To use Karo Simple, you must:

- Be at least 18 years of age
- Be a legally operating business, self-employed professional, or authorised representative of a business in India
- Have the authority to enter into binding contracts on behalf of your business
- Have a valid Indian phone number and email address

By registering, you confirm that you meet all of the above requirements. If we discover that you do not, we reserve the right to suspend or terminate your account immediately.

---

## 5. Your Account Responsibilities {#account-responsibilities}

### 5.1 Account Security {#account-security}

You are responsible for keeping your login credentials confidential. Any activity that happens under your account is your responsibility, whether or not you authorised it. If you suspect that your account has been accessed without your permission, notify us immediately at support@karosimple.in.

### 5.2 Accurate Information {#accurate-information}

You must provide accurate, complete, and truthful information when registering and when setting up your business profile. This includes your business name, category, address, and the review platform links you configure. Providing false information is a violation of these Terms and grounds for immediate account termination.

### 5.3 Your QR Codes and Review Links {#qr-codes}

The QR codes you generate and the review platform links you configure in your dashboard are your responsibility. You must ensure they point to your actual, verified business profiles on third-party platforms. You may not configure QR codes that route customers to a competitor's review page, a fraudulent listing, or any page unrelated to your business.

### 5.4 One Account Per Business {#one-account}

Each business should operate under one Karo Simple account. If you have multiple business locations or manage multiple clients, the Agency plan is designed for this purpose and allows you to manage sub-businesses under a single account.

---

## 6. Subscription Plans and Billing {#billing}

### 6.1 Available Plans {#plans}

Karo Simple offers four plans: Free, Starter, Pro, and Agency. The features available to you depend on your active plan. Full details of what each plan includes and the current pricing are listed at karosimple.in/pricing.

### 6.2 Billing Cycles {#billing-cycles}

Paid plans (Starter, Pro, and Agency) are available on monthly, half-yearly, and annual billing cycles. All prices are displayed in Indian Rupees (₹). Prices are inclusive of applicable taxes unless stated otherwise at checkout.

Half-yearly plans include a 15% discount plus a usage quota bonus. Annual plans include a 25% discount plus a larger quota bonus. Details are shown on the pricing page.

### 6.3 Auto-Renewal {#auto-renewal}

Your subscription renews automatically at the end of each billing cycle. Payment is charged using the payment method you have saved with [PAYMENT_GATEWAY_NAME]. You will receive a reminder email before renewal. To stop auto-renewal, you must cancel your subscription before the renewal date. Cancellation instructions are in Section 12 of these Terms.

### 6.4 Plan Upgrades {#upgrades}

You may upgrade your plan at any time from your dashboard. The upgrade takes effect immediately. The difference in price for the remaining days in your current billing cycle will be charged on a prorated basis.

### 6.5 Plan Downgrades {#downgrades}

You cannot downgrade your plan mid-cycle. If you wish to move to a lower plan, you may cancel your current plan and select a lower plan when your next billing cycle begins. Your current plan will remain fully active until the end of the cycle you have paid for.

### 6.6 Free Plan {#free-plan}

The Free plan is permanently available and does not require a credit card or payment. It exists so you can fully evaluate the platform before choosing a paid plan. AI-generated review suggestions and certain advanced features are not available on the Free plan. Feature limits on the Free plan are shown at karosimple.in/pricing.

### 6.7 Payment Processing {#payment-processing}

All payments on Karo Simple are processed by [PAYMENT_GATEWAY_NAME]. Karo Simple does not store your card number, CVV, UPI PIN, or any other payment credentials. [PAYMENT_GATEWAY_NAME]'s own terms of service and privacy policy apply to the payment transaction itself.

---

## 7. Refund and Cancellation {#refund}

Our complete Refund and Cancellation Policy is at karosimple.in/refund-policy. Please read it before purchasing a paid plan.

In brief: Karo Simple does not offer refunds on paid subscriptions. The Free plan exists specifically for evaluation before purchase. Refunds are considered only in cases of duplicate charges or verified payment gateway errors. Full details and exceptions are in the Refund Policy.

---

## 8. Acceptable Use Policy {#acceptable-use}

### 8.1 What You May Do {#permitted-use}

You may use Karo Simple for any lawful purpose in connection with your legitimate business operations in India.

### 8.2 What You Must Not Do {#prohibited-use}

You must not use Karo Simple to:

- Solicit, generate, or post fake reviews — every review submitted through your QR code must reflect a genuine customer experience
- Offer cash, discounts, gifts, or any other incentive to customers in exchange for leaving a review, unless the specific review platform explicitly permits incentivised reviews (most do not)
- Configure QR codes that route customers to a competitor's listing, a fraudulent business profile, or any unrelated destination
- Impersonate any person, business, or entity — including misrepresenting your own business category or name
- Use AI-generated review suggestion templates to post reviews yourself, or to submit reviews from accounts that are not genuine customers
- Send unsolicited bulk messages, spam, or promotional communications through any feature of the platform
- Attempt to gain unauthorised access to any part of the platform, any other user's account, or any server or database connected to Karo Simple
- Reverse engineer, decompile, scrape, or copy any part of the platform or its AI outputs
- Use the platform in any manner that violates any applicable Indian law, including the Consumer Protection Act 2019, the IT Act 2000, or any applicable state law

### 8.3 Third-Party Platform Compliance {#third-party-compliance}

When your QR code routes a customer to Google, Zomato, Justdial, TripAdvisor, Practo, or any other platform, you are solely responsible for ensuring your use of Karo Simple complies with that platform's own review and content policies. Karo Simple is not affiliated with any of these platforms. If a platform removes reviews from your listing, penalises your account, or takes any other action as a result of how you have used Karo Simple, Karo Simple is not liable.

### 8.4 Consequences of Violation {#consequences}

If you violate this Acceptable Use Policy, we may suspend or terminate your account immediately and without refund. In cases involving fraudulent reviews or violations of Indian law, we may report the matter to the relevant platform, consumer protection authority, or law enforcement.

---

## 9. AI-Generated Review Suggestions {#ai-features}

### 9.1 How the AI Feature Works {#how-ai-works}

On eligible paid plans, Karo Simple provides AI-generated review suggestion templates as part of the customer review flow. You configure keywords, service descriptions, and a tone setting in your dashboard. Based on these inputs, the AI generates draft review text that is shown to your customer when they complete the QR code scan and rate their experience positively.

The customer sees this suggestion and can choose to use it as-is, edit it to reflect their own experience, or write their review from scratch. The suggestion is a starting point, not a script.

### 9.2 What the AI Does Not Do {#what-ai-does-not-do}

The AI does not post reviews on your behalf. It does not submit content to Google, Zomato, or any other platform. It does not interact with any platform's API. The customer is always the person who opens the review platform and submits the final content in their own words.

### 9.3 Your Responsibility for AI Configuration {#ai-responsibility}

You are responsible for the keywords, descriptions, and tone settings you configure for the AI. Do not configure the AI to generate content that is false, misleading, defamatory, or claims experiences that the customer could not have had.

### 9.4 No Guarantee on Review Outcomes {#ai-no-guarantee}

Karo Simple does not guarantee that any review submitted through our platform will remain published on a third-party platform. Review platforms have their own content moderation systems and may remove reviews at their discretion. We have no control over and accept no responsibility for these decisions.

---

## 10. Agency Plan — Additional Terms {#agency-terms}

### 10.1 Agency Owner Responsibilities {#agency-responsibilities}

Agency Owners use Karo Simple to manage multiple sub-businesses — typically their clients — under one account. As an Agency Owner, you are responsible for:

- Ensuring that each sub-business you manage has given their informed consent to be managed through Karo Simple
- Using the platform in compliance with these Terms on behalf of every sub-business you manage
- Not mixing or sharing data between sub-businesses that are unrelated
- Ensuring that each sub-business's QR codes and review platform links are accurate and legitimately theirs

### 10.2 Agency as Data Processor {#agency-data-processor}

When you manage a client's business data through Karo Simple, you are acting as a data processor in relation to that client's data. Your relationship with your clients — including any agreements about data handling — is entirely between you and them. Karo Simple is not a party to that relationship and is not liable for any breach of it.

### 10.3 Shared Resource Pool {#shared-resource-pool}

The Agency plan includes a shared pool of resources — AI credits, QR codes, and review management capacity — that you distribute across your sub-businesses. Unused quota at the end of a billing cycle does not carry forward to the next cycle unless explicitly stated in the current plan description at karosimple.in/pricing.

---

## 11. Intellectual Property {#intellectual-property}

### 11.1 Karo Simple's Property {#our-ip}

All content, features, code, design elements, trademarks, logos, and branding that make up the Karo Simple platform and website — including the AI review suggestion system — are the intellectual property of Karo Simple and its founders. You may not copy, reproduce, modify, distribute, or use any part of them without our prior written permission.

### 11.2 Your Data Remains Yours {#your-data}

You retain full ownership of your business data, QR code configurations, and any customer feedback data stored on the platform on your behalf. By using Karo Simple, you grant us a limited, non-exclusive, non-transferable licence to store and process this data solely for the purpose of delivering the service to you. We do not claim any ownership over your business information.

### 11.3 Feedback You Give Us {#feedback-ip}

If you share ideas, suggestions, or feedback about how we can improve Karo Simple, you grant us the right to use that input freely. We appreciate your feedback and may act on it, but we have no obligation to do so and no obligation to compensate you for it.

---

## 12. Cancellation and Termination {#termination}

### 12.1 Cancelling Your Account {#cancellation-by-you}

You may cancel your Karo Simple account at any time. You can do this from your dashboard under Settings, or by emailing support@karosimple.in. For paid plans, cancellation takes effect at the end of your current billing cycle. You will continue to have full access to your plan features until the cycle ends, and you will not be charged again.

### 12.2 Termination by Karo Simple {#termination-by-us}

We may suspend or terminate your account immediately and without prior notice if:

- You violate the Acceptable Use Policy in Section 8
- You provide false or misleading information during registration or at any point during use
- We are required to do so by a valid order from an Indian court or government authority
- We detect fraudulent activity on your account or any activity that puts other users or the platform at risk

In cases of termination under this clause, no refund will be issued.

### 12.3 What Happens After Termination {#after-termination}

Once your account is cancelled or terminated, your access to the platform ceases. Your QR codes will stop functioning. We will retain your data for the periods specified in our Privacy Policy and delete the remainder within 90 days of account closure.

---

## 13. Service Availability {#service-availability}

We aim to keep Karo Simple available at all times, but we do not guarantee uninterrupted service. We may take the platform offline for scheduled maintenance, security updates, or emergency fixes. Where possible, we will give advance notice of planned downtime. We are not liable for any loss or inconvenience caused by temporary unavailability of the platform.

---

## 14. Disclaimer of Warranties {#disclaimer}

Karo Simple is provided to you "as is" and "as available." We make no warranties, express or implied, including but not limited to:

- That the platform will be error-free, uninterrupted, or free of bugs at all times
- That using Karo Simple will result in any specific increase in your review count or star rating
- That reviews submitted through our platform will remain live on Google, Zomato, or any other third-party platform
- That AI-generated review suggestions will be accepted, approved, or considered authentic by any review platform

To the fullest extent permitted under Indian law, we disclaim all implied warranties of merchantability, fitness for a particular purpose, and non-infringement.

---

## 15. Limitation of Liability {#liability}

To the maximum extent permitted by Indian law, Karo Simple's total financial liability to you for any claim arising from your use of the platform — regardless of the nature of the claim — shall not exceed the total amount you have paid to Karo Simple in the three calendar months immediately before the date the claim arose.

We are not liable under any circumstances for indirect, incidental, consequential, or special damages, including but not limited to: loss of business revenue, loss of data, loss of goodwill, or reputational damage resulting from your use of the platform or any third-party platform action taken in connection with your use.

---

## 16. Governing Law and Disputes {#governing-law}

### 16.1 Governing Law {#governing-law-clause}

These Terms of Service are governed by and construed in accordance with the laws of the Republic of India.

### 16.2 Jurisdiction {#jurisdiction}

Any legal dispute arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in [CITY], Chhattisgarh, India.

### 16.3 Dispute Resolution Process {#dispute-resolution}

Before either party approaches a court, both parties agree to make a genuine effort to resolve the dispute through direct negotiation for a period of 30 days from the date the dispute is first raised in writing. If the dispute is not resolved within 30 days, either party may seek resolution through mediation. If mediation does not resolve the matter, either party may approach the appropriate court as per Section 16.2.

---

## 17. Changes to These Terms {#changes}

We may update these Terms of Service from time to time. When we do, we will update the "Last Updated" date at the top of this page. For changes that materially affect your rights or obligations, we will notify registered users by email at least 7 days before the new Terms take effect. Your continued use of the platform after the effective date means you accept the revised Terms.

If you do not agree to revised Terms, you may cancel your account before the effective date.

---

## 18. Grievance Officer {#grievance-officer}

For complaints, disputes, or concerns related to these Terms of Service:

**Grievance Officer:** [GRIEVANCE_OFFICER_NAME]
**Designation:** Grievance Officer, Karo Simple
**Email:** grievance@karosimple.in
**Address:** [REGISTERED_ADDRESS]

**Acknowledgement:** Within 48 hours
**Resolution:** Within 30 days

You may also use our online grievance form at karosimple.in/grievance.

---

## 19. Contact {#contact}

For legal queries: legal@karosimple.in
For general support: support@karosimple.in
For billing issues: billing@karosimple.in

---

*See also: [Privacy Policy](/privacy) · [Refund & Cancellation Policy](/refund-policy) · [Grievance Redressal](/grievance)*
