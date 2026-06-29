import React from "react";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { CONTACT_EMAIL, GRIEVANCE_EMAIL, BILLING_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Terms of Service | Karo Simple",
  description: "Terms of Service for Karo Simple — India's QR-based review management platform for small and medium businesses.",
};

export default function TermsOfService() {
  const paymentGateway = "PhonePe";

  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="29 June 2026">
      <p className="text-sm text-ks-muted mb-4">
        <strong>Last Updated:</strong> 29 June 2026<br />
        <strong>Effective Date:</strong> 29 June 2026
      </p>

      {/* 1. Agreement to These Terms */}
      <h2 id="agreement" className="text-xl font-bold text-ks-navy mt-8 mb-4">1. Agreement to These Terms</h2>
      <p>
        By accessing karosimple.in or app.karosimple.in, or by clicking "I Agree" when creating your account, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.
      </p>
      <p>
        These Terms form a legally binding agreement between you and Karo Simple under the Indian Contract Act 1872 and the Information Technology Act 2000. The words "we," "us," and "our" refer to Karo Simple. The words "you" and "your" refer to the Business Owner, Agency Owner, or any other user accessing the platform.
      </p>

      {/* 2. Who We Are */}
      <h2 id="who-we-are" className="text-xl font-bold text-ks-navy mt-8 mb-4">2. Who We Are</h2>
      <div className="bg-[#F5F7FA] p-6 rounded-xl border border-[#EEF1F5] my-4 text-ks-navy leading-relaxed text-sm">
        <p className="font-bold text-base mb-1">Karo Simple Tech Solutions Pvt Ltd</p>
        <p>
          <strong>Operating as:</strong> Karo Simple<br />
          <strong>Website:</strong> <a href="https://karosimple.in" className="text-ks-green hover:underline font-semibold">https://karosimple.in</a><br />
          <strong>Platform:</strong> <a href="https://app.karosimple.in" className="text-ks-green hover:underline font-semibold">https://app.karosimple.in</a><br />
          <strong>Registered Address:</strong> Level 4, Block B, Tech Hub, Sector 62, Noida, Uttar Pradesh, 201301<br />
          <strong>Email:</strong> <a href="mailto:legal@karosimple.in" className="text-ks-green hover:underline font-semibold">legal@karosimple.in</a>
        </p>
      </div>

      {/* 3. What Karo Simple Does */}
      <h2 id="what-we-do" className="text-xl font-bold text-ks-navy mt-8 mb-4">3. What Karo Simple Does</h2>
      <p>
        Karo Simple is a QR-code-based review management Software-as-a-Service (SaaS) platform built for Indian businesses. The platform helps business owners:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Generate unique QR codes that guide customers through a structured review flow when scanned</li>
        <li>Route customers who had a good experience to public review platforms of their choice — including Google, Zomato, Swiggy, Justdial, TripAdvisor, Facebook, Practo, and others</li>
        <li>Collect private feedback from customers who had a poor experience, through a secure internal feedback form</li>
        <li>Access AI-generated review suggestion templates (available on paid plans) that customers can read, edit, or ignore before submitting their own review on a third-party platform</li>
      </ul>
      <p>
        Karo Simple is a tool that makes it easier for your real customers to share their genuine experience. We do not write reviews on your behalf. We do not post reviews to any platform. Every review that appears on Google, Zomato, or any other platform is submitted by the customer themselves.
      </p>

      {/* 4. Eligibility */}
      <h2 id="eligibility" className="text-xl font-bold text-ks-navy mt-8 mb-4">4. Eligibility</h2>
      <p>
        To use Karo Simple, you must:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Be at least 18 years of age</li>
        <li>Be a legally operating business, self-employed professional, or authorised representative of a business in India</li>
        <li>Have the authority to enter into binding contracts on behalf of your business</li>
        <li>Have a valid Indian phone number and email address</li>
      </ul>
      <p>
        By registering, you confirm that you meet all of the above requirements. If we discover that you do not, we reserve the right to suspend or terminate your account immediately.
      </p>

      {/* 5. Your Account Responsibilities */}
      <h2 id="account-responsibilities" className="text-xl font-bold text-ks-navy mt-8 mb-4">5. Your Account Responsibilities</h2>

      <h3 id="account-security" className="text-lg font-bold text-ks-navy mt-6 mb-3">5.1 Account Security</h3>
      <p>
        You are responsible for keeping your login credentials confidential. Any activity that happens under your account is your responsibility, whether or not you authorised it. If you suspect that your account has been accessed without your permission, notify us immediately at <a href={`mailto:${CONTACT_EMAIL}`} className="text-ks-green hover:underline font-semibold">{CONTACT_EMAIL}</a>.
      </p>

      <h3 id="accurate-information" className="text-lg font-bold text-ks-navy mt-6 mb-3">5.2 Accurate Information</h3>
      <p>
        You must provide accurate, complete, and truthful information when registering and when setting up your business profile. This includes your business name, category, address, and the review platform links you configure. Providing false information is a violation of these Terms and grounds for immediate account termination.
      </p>

      <h3 id="qr-codes" className="text-lg font-bold text-ks-navy mt-6 mb-3">5.3 Your QR Codes and Review Links</h3>
      <p>
        The QR codes you generate and the review platform links you configure in your dashboard are your responsibility. You must ensure they point to your actual, verified business profiles on third-party platforms. You may not configure QR codes that route customers to a competitor's review page, a fraudulent listing, or any page unrelated to your business.
      </p>

      <h3 id="one-account" className="text-lg font-bold text-ks-navy mt-6 mb-3">5.4 One Account Per Business</h3>
      <p>
        Each business should operate under one Karo Simple account. If you have multiple business locations or manage multiple clients, the Agency plan is designed for this purpose and allows you to manage sub-businesses under a single account.
      </p>

      {/* 6. Subscription Plans and Billing */}
      <h2 id="billing" className="text-xl font-bold text-ks-navy mt-8 mb-4">6. Subscription Plans and Billing</h2>

      <h3 id="plans" className="text-lg font-bold text-ks-navy mt-6 mb-3">6.1 Available Plans</h3>
      <p>
        Karo Simple offers four plans: Free, Starter, Pro, and Agency. The features available to you depend on your active plan. Full details of what each plan includes and the current pricing are listed at <a href="/pricing" className="text-ks-green hover:underline font-semibold">karosimple.in/pricing</a>.
      </p>

      <h3 id="billing-cycles" className="text-lg font-bold text-ks-navy mt-6 mb-3">6.2 Billing Cycles</h3>
      <p>
        Paid plans (Starter, Pro, and Agency) are available on monthly, half-yearly, and annual billing cycles. All prices are displayed in Indian Rupees (₹). Prices are inclusive of applicable taxes unless stated otherwise at checkout.
      </p>
      <p>
        Half-yearly plans include a 15% discount plus a usage quota bonus. Annual plans include a 25% discount plus a larger quota bonus. Details are shown on the pricing page.
      </p>

      <h3 id="auto-renewal" className="text-lg font-bold text-ks-navy mt-6 mb-3">6.3 Auto-Renewal</h3>
      <p>
        Your subscription renews automatically at the end of each billing cycle. Payment is charged using the payment method you have saved with {paymentGateway}. You will receive a reminder email before renewal. To stop auto-renewal, you must cancel your subscription before the renewal date. Cancellation instructions are in Section 12 of these Terms.
      </p>

      <h3 id="upgrades" className="text-lg font-bold text-ks-navy mt-6 mb-3">6.4 Plan Upgrades</h3>
      <p>
        You may upgrade your plan at any time from your dashboard. The upgrade takes effect immediately. The difference in price for the remaining days in your current billing cycle will be charged on a prorated basis.
      </p>

      <h3 id="downgrades" className="text-lg font-bold text-ks-navy mt-6 mb-3">6.5 Plan Downgrades</h3>
      <p>
        You cannot downgrade your plan mid-cycle. If you wish to move to a lower plan, you may cancel your current plan and select a lower plan when your next billing cycle begins. Your current plan will remain fully active until the end of the cycle you have paid for.
      </p>

      <h3 id="free-plan" className="text-lg font-bold text-ks-navy mt-6 mb-3">6.6 Free Plan</h3>
      <p>
        The Free plan is permanently available and does not require a credit card or payment. It exists so you can fully evaluate the platform before choosing a paid plan. AI-generated review suggestions and certain advanced features are not available on the Free plan. Feature limits on the Free plan are shown at <a href="/pricing" className="text-ks-green hover:underline font-semibold">karosimple.in/pricing</a>.
      </p>

      <h3 id="payment-processing" className="text-lg font-bold text-ks-navy mt-6 mb-3">6.7 Payment Processing</h3>
      <p>
        All payments on Karo Simple are processed by {paymentGateway}. Karo Simple does not store your card number, CVV, UPI PIN, or any other payment credentials. {paymentGateway}'s own terms of service and privacy policy apply to the payment transaction itself.
      </p>

      {/* 7. Refund and Cancellation */}
      <h2 id="refund" className="text-xl font-bold text-ks-navy mt-8 mb-4">7. Refund and Cancellation</h2>
      <p>
        Our complete Refund and Cancellation Policy is at <a href="/refund-policy" className="text-ks-green hover:underline font-semibold">karosimple.in/refund-policy</a>. Please read it before purchasing a paid plan.
      </p>
      <p>
        In brief: Karo Simple does not offer refunds on paid subscriptions. The Free plan exists specifically for evaluation before purchase. Refunds are considered only in cases of duplicate charges or verified payment gateway errors. Full details and exceptions are in the Refund Policy.
      </p>

      {/* 8. Acceptable Use Policy */}
      <h2 id="acceptable-use" className="text-xl font-bold text-ks-navy mt-8 mb-4">8. Acceptable Use Policy</h2>

      <h3 id="permitted-use" className="text-lg font-bold text-ks-navy mt-6 mb-3">8.1 What You May Do</h3>
      <p>
        You may use Karo Simple for any lawful purpose in connection with your legitimate business operations in India.
      </p>

      <h3 id="prohibited-use" className="text-lg font-bold text-ks-navy mt-6 mb-3">8.2 What You Must Not Do</h3>
      <p>
        You must not use Karo Simple to:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Solicit, generate, or post fake reviews — every review submitted through your QR code must reflect a genuine customer experience</li>
        <li>Offer cash, discounts, gifts, or any other incentive to customers in exchange for leaving a review, unless the specific review platform explicitly permits incentivised reviews (most do not)</li>
        <li>Configure QR codes that route customers to a competitor's listing, a fraudulent business profile, or any unrelated destination</li>
        <li>Impersonate any person, business, or entity — including misrepresenting your own business category or name</li>
        <li>Use AI-generated review suggestion templates to post reviews yourself, or to submit reviews from accounts that are not genuine customers</li>
        <li>Send unsolicited bulk messages, spam, or promotional communications through any feature of the platform</li>
        <li>Attempt to gain unauthorised access to any part of the platform, any other user's account, or any server or database connected to Karo Simple</li>
        <li>Reverse engineer, decompile, scrape, or copy any part of the platform or its AI outputs</li>
        <li>Use the platform in any manner that violates any applicable Indian law, including the Consumer Protection Act 2019, the IT Act 2000, or any applicable state law</li>
      </ul>

      <h3 id="third-party-compliance" className="text-lg font-bold text-ks-navy mt-6 mb-3">8.3 Third-Party Platform Compliance</h3>
      <p>
        When your QR code routes a customer to Google, Zomato, Justdial, TripAdvisor, Practo, or any other platform, you are solely responsible for ensuring your use of Karo Simple complies with that platform's own review and content policies. Karo Simple is not affiliated with any of these platforms. If a platform removes reviews from your listing, penalises your account, or takes any other action as a result of how you have used Karo Simple, Karo Simple is not liable.
      </p>

      <h3 id="consequences" className="text-lg font-bold text-ks-navy mt-6 mb-3">8.4 Consequences of Violation</h3>
      <p>
        If you violate this Acceptable Use Policy, we may suspend or terminate your account immediately and without refund. In cases involving fraudulent reviews or violations of Indian law, we may report the matter to the relevant platform, consumer protection authority, or law enforcement.
      </p>

      {/* 9. AI-Generated Review Suggestions */}
      <h2 id="ai-features" className="text-xl font-bold text-ks-navy mt-8 mb-4">9. AI-Generated Review Suggestions</h2>

      <h3 id="how-ai-works" className="text-lg font-bold text-ks-navy mt-6 mb-3">9.1 How the AI Feature Works</h3>
      <p>
        On eligible paid plans, Karo Simple provides AI-generated review suggestion templates as part of the customer review flow. You configure keywords, service descriptions, and a tone setting in your dashboard. Based on these inputs, the AI generates draft review text that is shown to your customer when they complete the QR code scan and rate their experience positively.
      </p>
      <p>
        The customer sees this suggestion and can choose to use it as-is, edit it to reflect their own experience, or write their review from scratch. The suggestion is a starting point, not a script.
      </p>

      <h3 id="what-ai-does-not-do" className="text-lg font-bold text-ks-navy mt-6 mb-3">9.2 What the AI Does Not Do</h3>
      <p>
        The AI does not post reviews on your behalf. It does not submit content to Google, Zomato, or any other platform. It does not interact with any platform's API. The customer is always the person who opens the review platform and submits the final content in their own words.
      </p>

      <h3 id="ai-responsibility" className="text-lg font-bold text-ks-navy mt-6 mb-3">9.3 Your Responsibility for AI Configuration</h3>
      <p>
        You are responsible for the keywords, descriptions, and tone settings you configure for the AI. Do not configure the AI to generate content that is false, misleading, defamatory, or claims experiences that the customer could not have had.
      </p>

      <h3 id="ai-no-guarantee" className="text-lg font-bold text-ks-navy mt-6 mb-3">9.4 No Guarantee on Review Outcomes</h3>
      <p>
        Karo Simple does not guarantee that any review submitted through our platform will remain published on a third-party platform. Review platforms have their own content moderation systems and may remove reviews at their discretion. We have no control over and accept no responsibility for these decisions.
      </p>

      {/* 10. Agency Plan — Additional Terms */}
      <h2 id="agency-terms" className="text-xl font-bold text-ks-navy mt-8 mb-4">10. Agency Plan — Additional Terms</h2>

      <h3 id="agency-responsibilities" className="text-lg font-bold text-ks-navy mt-6 mb-3">10.1 Agency Owner Responsibilities</h3>
      <p>
        Agency Owners use Karo Simple to manage multiple sub-businesses — typically their clients — under one account. As an Agency Owner, you are responsible for:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Ensuring that each sub-business you manage has given their informed consent to be managed through Karo Simple</li>
        <li>Using the platform in compliance with these Terms on behalf of every sub-business you manage</li>
        <li>Not mixing or sharing data between sub-businesses that are unrelated</li>
        <li>Ensuring that each sub-business's QR codes and review platform links are accurate and legitimately theirs</li>
      </ul>

      <h3 id="agency-data-processor" className="text-lg font-bold text-ks-navy mt-6 mb-3">10.2 Agency as Data Processor</h3>
      <p>
        When you manage a client's business data through Karo Simple, you are acting as a data processor in relation to that client's data. Your relationship with your clients — including any agreements about data handling — is entirely between you and them. Karo Simple is not a party to that relationship and is not liable for any breach of it.
      </p>

      <h3 id="shared-resource-pool" className="text-lg font-bold text-ks-navy mt-6 mb-3">10.3 Shared Resource Pool</h3>
      <p>
        The Agency plan includes a shared pool of resources — AI credits, QR codes, and review management capacity — that you distribute across your sub-businesses. Unused quota at the end of a billing cycle does not carry forward to the next cycle unless explicitly stated in the current plan description at <a href="/pricing" className="text-ks-green hover:underline font-semibold">karosimple.in/pricing</a>.
      </p>

      {/* 11. Intellectual Property */}
      <h2 id="intellectual-property" className="text-xl font-bold text-ks-navy mt-8 mb-4">11. Intellectual Property</h2>

      <h3 id="our-ip" className="text-lg font-bold text-ks-navy mt-6 mb-3">11.1 Karo Simple's Property</h3>
      <p>
        All content, features, code, design elements, trademarks, logos, and branding that make up the Karo Simple platform and website — including the AI review suggestion system — are the intellectual property of Karo Simple and its founders. You may not copy, reproduce, modify, distribute, or use any part of them without our prior written permission.
      </p>

      <h3 id="your-data" className="text-lg font-bold text-ks-navy mt-6 mb-3">11.2 Your Data Remains Yours</h3>
      <p>
        You retain full ownership of your business data, QR code configurations, and any customer feedback data stored on the platform on your behalf. By using Karo Simple, you grant us a limited, non-exclusive, non-transferable licence to store and process this data solely for the purpose of delivering the service to you. We do not claim any ownership over your business information.
      </p>

      <h3 id="feedback-ip" className="text-lg font-bold text-ks-navy mt-6 mb-3">11.3 Feedback You Give Us</h3>
      <p>
        If you share ideas, suggestions, or feedback about how we can improve Karo Simple, you grant us the right to use that input freely. We appreciate your feedback and may act on it, but we have no obligation to do so and no obligation to compensate you for it.
      </p>

      {/* 12. Cancellation and Termination */}
      <h2 id="termination" className="text-xl font-bold text-ks-navy mt-8 mb-4">12. Cancellation and Termination</h2>

      <h3 id="cancellation-by-you" className="text-lg font-bold text-ks-navy mt-6 mb-3">12.1 Cancelling Your Account</h3>
      <p>
        You may cancel your Karo Simple account at any time. You can do this from your dashboard under Settings, or by emailing <a href={`mailto:${CONTACT_EMAIL}`} className="text-ks-green hover:underline font-semibold">{CONTACT_EMAIL}</a>. For paid plans, cancellation takes effect at the end of your current billing cycle. You will continue to have full access to your plan features until the cycle ends, and you will not be charged again.
      </p>

      <h3 id="termination-by-us" className="text-lg font-bold text-ks-navy mt-6 mb-3">12.2 Termination by Karo Simple</h3>
      <p>
        We may suspend or terminate your account immediately and without prior notice if:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>You violate the Acceptable Use Policy in Section 8</li>
        <li>You provide false or misleading information during registration or at any point during use</li>
        <li>We are required to do so by a valid order from an Indian court or government authority</li>
        <li>We detect fraudulent activity on your account or any activity that puts other users or the platform at risk</li>
      </ul>
      <p>
        In cases of termination under this clause, no refund will be issued.
      </p>

      <h3 id="after-termination" className="text-lg font-bold text-ks-navy mt-6 mb-3">12.3 What Happens After Termination</h3>
      <p>
        Once your account is cancelled or terminated, your access to the platform ceases. Your QR codes will stop functioning. We will retain your data for the periods specified in our Privacy Policy and delete the remainder within 90 days of account closure.
      </p>

      {/* 13. Service Availability */}
      <h2 id="service-availability" className="text-xl font-bold text-ks-navy mt-8 mb-4">13. Service Availability</h2>
      <p>
        We aim to keep Karo Simple available at all times, but we do not guarantee uninterrupted service. We may take the platform offline for scheduled maintenance, security updates, or emergency fixes. Where possible, we will give advance notice of planned downtime. We are not liable for any loss or inconvenience caused by temporary unavailability of the platform.
      </p>

      {/* 14. Disclaimer of Warranties */}
      <h2 id="disclaimer" className="text-xl font-bold text-ks-navy mt-8 mb-4">14. Disclaimer of Warranties</h2>
      <p>
        Karo Simple is provided to you "as is" and "as available." We make no warranties, express or implied, including but not limited to:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>That the platform will be error-free, uninterrupted, or free of bugs at all times</li>
        <li>That using Karo Simple will result in any specific increase in your review count or star rating</li>
        <li>That reviews submitted through our platform will remain live on Google, Zomato, or any other third-party platform</li>
        <li>That AI-generated review suggestions will be accepted, approved, or considered authentic by any review platform</li>
      </ul>
      <p>
        To the fullest extent permitted under Indian law, we disclaim all implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
      </p>

      {/* 15. Limitation of Liability */}
      <h2 id="liability" className="text-xl font-bold text-ks-navy mt-8 mb-4">15. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by Indian law, Karo Simple's total financial liability to you for any claim arising from your use of the platform — regardless of the nature of the claim — shall not exceed the total amount you have paid to Karo Simple in the three calendar months immediately before the date the claim arose.
      </p>
      <p>
        We are not liable under any circumstances for indirect, incidental, consequential, or special damages, including but not limited to: loss of business revenue, loss of data, loss of goodwill, or reputational damage resulting from your use of the platform or any third-party platform action taken in connection with your use.
      </p>

      {/* 16. Governing Law and Disputes */}
      <h2 id="governing-law" className="text-xl font-bold text-ks-navy mt-8 mb-4">16. Governing Law and Disputes</h2>

      <h3 id="governing-law-clause" className="text-lg font-bold text-ks-navy mt-6 mb-3">16.1 Governing Law</h3>
      <p>
        These Terms of Service are governed by and construed in accordance with the laws of the Republic of India.
      </p>

      <h3 id="jurisdiction" className="text-lg font-bold text-ks-navy mt-6 mb-3">16.2 Jurisdiction</h3>
      <p>
        Any legal dispute arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Raipur, Chhattisgarh, India.
      </p>

      <h3 id="dispute-resolution" className="text-lg font-bold text-ks-navy mt-6 mb-3">16.3 Dispute Resolution Process</h3>
      <p>
        Before either party approaches a court, both parties agree to make a genuine effort to resolve the dispute through direct negotiation for a period of 30 days from the date the dispute is first raised in writing. If the dispute is not resolved within 30 days, either party may seek resolution through mediation. If mediation does not resolve the matter, either party may approach the appropriate court as per Section 16.2.
      </p>

      {/* 17. Changes to These Terms */}
      <h2 id="changes" className="text-xl font-bold text-ks-navy mt-8 mb-4">17. Changes to These Terms</h2>
      <p>
        We may update these Terms of Service from time to time. When we do, we will update the "Last Updated" date at the top of this page. For changes that materially affect your rights or obligations, we will notify registered users by email at least 7 days before the new Terms take effect. Your continued use of the platform after the effective date means you accept the revised Terms.
      </p>
      <p>
        If you do not agree to revised Terms, you may cancel your account before the effective date.
      </p>

      {/* 18. Grievance Officer */}
      <h2 id="grievance-officer" className="text-xl font-bold text-ks-navy mt-8 mb-4">18. Grievance Officer</h2>
      <p>
        For complaints, disputes, or concerns related to these Terms of Service:
      </p>
      <div className="bg-[#F5F7FA] p-6 rounded-xl border border-[#EEF1F5] my-4 text-ks-navy leading-relaxed text-sm">
        <p className="font-bold text-base mb-1">Grievance Officer: Mr. Rajesh Kumar</p>
        <p>
          <strong>Designation:</strong> Grievance Officer, Karo Simple<br />
          <strong>Email:</strong> <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-ks-green hover:underline font-semibold">{GRIEVANCE_EMAIL}</a><br />
          <strong>Address:</strong> Level 4, Block B, Tech Hub, Sector 62, Noida, Uttar Pradesh, 201301
        </p>
      </div>
      <p>
        <strong>Acknowledgement:</strong> Within 48 hours<br />
        <strong>Resolution:</strong> Within 30 days
      </p>
      <p>
        You may also use our online grievance form at <a href="/grievance" className="text-ks-green hover:underline font-semibold">karosimple.in/grievance</a>.
      </p>

      {/* 19. Contact */}
      <h2 id="contact" className="text-xl font-bold text-ks-navy mt-8 mb-4">19. Contact</h2>
      <p>
        For legal queries: <a href="mailto:legal@karosimple.in" className="text-ks-green hover:underline font-semibold">legal@karosimple.in</a><br />
        For general support: <a href={`mailto:${CONTACT_EMAIL}`} className="text-ks-green hover:underline font-semibold">{CONTACT_EMAIL}</a><br />
        For billing issues: <a href={`mailto:${BILLING_EMAIL}`} className="text-ks-green hover:underline font-semibold">{BILLING_EMAIL}</a>
      </p>
      <hr className="border-[#EEF1F5] my-6" />
      <p className="text-sm text-ks-muted text-center leading-relaxed">
        See also: <a href="/privacy" className="text-ks-green hover:underline font-semibold">Privacy Policy</a> &middot; <a href="/refund-policy" className="text-ks-green hover:underline font-semibold">Refund &amp; Cancellation Policy</a> &middot; <a href="/grievance" className="text-ks-green hover:underline font-semibold">Grievance Redressal</a>
      </p>
    </LegalPageLayout>
  );
}
