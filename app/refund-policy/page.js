import React from "react";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { CONTACT_EMAIL, GRIEVANCE_EMAIL, BILLING_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Refund & Cancellation Policy | Karo Simple",
  description: "Karo Simple's refund and cancellation policy for SaaS subscriptions. Read this before purchasing a paid plan.",
};

export default function RefundPolicy() {
  const paymentGateway = "PhonePe";

  return (
    <LegalPageLayout title="Refund &amp; Cancellation Policy" lastUpdated="29 June 2026">
      <p className="text-sm text-ks-muted mb-4">
        <strong>Last Updated:</strong> 29 June 2026<br />
        <strong>Effective Date:</strong> 29 June 2026
      </p>

      {/* 1. Overview */}
      <h2 id="overview" className="text-xl font-bold text-ks-navy mt-8 mb-4">1. Overview</h2>
      <p>
        Karo Simple is a subscription-based Software-as-a-Service (SaaS) platform. This page explains our policy on refunds and cancellations for all subscription plans.
      </p>
      <p>
        We believe in being upfront. Before you spend any money, we want you to be sure Karo Simple is the right fit for your business. That is why we offer a permanently free plan with no credit card required. Try it first. Upgrade only when you are ready.
      </p>

      {/* 2. Our Refund Policy */}
      <h2 id="refund-policy" className="text-xl font-bold text-ks-navy mt-8 mb-4">2. Our Refund Policy</h2>
      <p className="font-bold text-[#D93838]">
        We do not offer refunds on paid subscriptions.
      </p>
      <p>
        This applies to all paid plans — Starter, Pro, and Agency — across all billing cycles: monthly, half-yearly, and annual.
      </p>
      <p>
        Specifically, no refund will be issued for:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Partial use of a billing cycle — if you subscribed on the 1st and decide you no longer want the plan on the 10th, the remaining days are not refundable</li>
        <li>Features you did not use during your subscription period</li>
        <li>A decision to stop using the platform after purchase</li>
        <li>A business that was sold, closed, transferred, or changed during the active subscription period</li>
        <li>Dissatisfaction with results — reviews, ratings, or customer response are influenced by many factors outside our control</li>
      </ul>
      <p>
        <strong>Why this is our policy:</strong>
      </p>
      <p>
        Karo Simple is a digital service. The moment your subscription is activated, you have immediate access to all features of your plan — AI credits, QR code generation, review flow configuration, the dashboard, and everything else. Unlike a physical product, a digital service cannot be returned or given back. The cost covers infrastructure, AI processing, and ongoing support that begins the moment you subscribe.
      </p>
      <p>
        More importantly, our Free plan gives you genuine, unrestricted access to the core platform before you pay a single rupee. By choosing to upgrade to a paid plan, you are confirming that you have evaluated the product and are satisfied with what it offers. That evaluation period is what makes this policy fair.
      </p>

      {/* 3. When a Refund Will Be Issued */}
      <h2 id="exceptions" className="text-xl font-bold text-ks-navy mt-8 mb-4">3. When a Refund Will Be Issued</h2>
      <p>
        Refunds are considered only in the following situations where the error is on our side or our payment processor's side — not a change of mind.
      </p>

      <h3 id="duplicate-charge" className="text-lg font-bold text-ks-navy mt-6 mb-3">3.1 Duplicate Charge</h3>
      <p>
        If your account was charged more than once for the same subscription period due to a payment gateway error, we will verify the duplicate and refund the extra amount. Processing time: 5–7 business days from the date we confirm the error.
      </p>

      <h3 id="wrong-amount" className="text-lg font-bold text-ks-navy mt-6 mb-3">3.2 Wrong Amount Charged</h3>
      <p>
        If the amount deducted from your account is different from the price shown to you at checkout — due to a pricing display error or a technical fault — we will correct it. We will either charge the correct amount and refund the difference, or process a full refund and ask you to repurchase at the correct price.
      </p>

      <h3 id="payment-not-activated" className="text-lg font-bold text-ks-navy mt-6 mb-3">3.3 Payment Deducted but Plan Not Activated</h3>
      <p>
        If your payment was successfully deducted by {paymentGateway} but your Karo Simple plan was not activated — meaning you paid but the system did not upgrade your account — we will resolve this within 5–7 business days. We will either activate your plan immediately or issue a full refund if the issue cannot be resolved.
      </p>

      <h3 id="refund-request" className="text-lg font-bold text-ks-navy mt-6 mb-3">How to Request a Refund</h3>
      <p>
        If any of the above situations apply to you, email us at <a href={`mailto:${BILLING_EMAIL}`} className="text-ks-green hover:underline font-semibold">{BILLING_EMAIL}</a> with the following:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Subject line:</strong> REFUND REQUEST — [Your Order ID]</li>
        <li>A brief description of what happened</li>
        <li>A screenshot of the transaction from your bank app or payment app (if available)</li>
      </ul>
      <p>
        Requests must be raised within <strong>7 days</strong> of the transaction date. Requests submitted after 7 days cannot be processed.
      </p>
      <p>
        We will acknowledge your request within 2 business days and aim to resolve it within 5–7 business days.
      </p>

      {/* 4. Cancellation Policy */}
      <h2 id="cancellation" className="text-xl font-bold text-ks-navy mt-8 mb-4">4. Cancellation Policy</h2>

      <h3 id="how-to-cancel" className="text-lg font-bold text-ks-navy mt-6 mb-3">4.1 How to Cancel</h3>
      <p>
        You can cancel your subscription at any time. There is no penalty for cancelling. To cancel, go to your dashboard and navigate to Settings &rarr; Subscription &rarr; Cancel Plan. Alternatively, email <a href={`mailto:${CONTACT_EMAIL}`} className="text-ks-green hover:underline font-semibold">{CONTACT_EMAIL}</a> and our team will process the cancellation for you.
      </p>

      <h3 id="when-cancellation-takes-effect" className="text-lg font-bold text-ks-navy mt-6 mb-3">4.2 When Cancellation Takes Effect</h3>
      <p>
        Cancellation takes effect at the end of your current billing cycle. You will not lose access immediately.
      </p>
      <p>
        For example: if your monthly plan renews on the 1st of every month and you cancel on the 15th, your plan remains fully active until the end of that month. On the 1st of the following month, your account moves to the Free plan automatically. No further charges are made.
      </p>
      <p>
        The same rule applies to half-yearly and annual plans — your plan stays active until the paid period ends.
      </p>

      <h3 id="after-cancellation" className="text-lg font-bold text-ks-navy mt-6 mb-3">4.3 What Happens After Your Plan Expires</h3>
      <p>
        Once your paid plan expires after cancellation:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Your account automatically moves to the Free plan — no data is deleted</li>
        <li>Your QR codes remain active within Free plan usage limits</li>
        <li>Your historical private feedback data remains accessible within Free plan limits</li>
        <li>AI-generated review suggestions are disabled (available on paid plans only)</li>
        <li>Advanced features like multi-platform routing and detailed analytics are restricted to Free plan limits</li>
      </ul>
      <p>
        You can resubscribe to a paid plan at any time from your dashboard.
      </p>

      {/* 5. The Free Plan */}
      <h2 id="free-plan" className="text-xl font-bold text-ks-navy mt-8 mb-4">5. The Free Plan</h2>
      <p>
        The Free plan is permanently available and requires no credit card, no payment, and no commitment. It is not a time-limited trial — it is a real plan that you can use indefinitely.
      </p>
      <p>
        It exists for one reason: so you can fully understand how Karo Simple works before deciding to pay for more. We would rather you take your time and upgrade with confidence than rush into a paid plan and feel like you need a refund later.
      </p>
      <p>
        If you are unsure whether Karo Simple is right for your business, start with the Free plan at <a href="/register" className="text-ks-green hover:underline font-semibold">karosimple.in/register</a>.
      </p>

      {/* 6. Plan Upgrades and Downgrades */}
      <h2 id="upgrades-downgrades" className="text-xl font-bold text-ks-navy mt-8 mb-4">6. Plan Upgrades and Downgrades</h2>
      <p>
        <strong>Upgrades</strong> take effect immediately. When you upgrade mid-cycle, you are charged only for the remaining days in the current billing period at the new plan's rate — calculated on a prorated basis. Your features update instantly.
      </p>
      <p>
        <strong>Downgrades</strong> are not available mid-cycle. You cannot switch to a lower plan while a billing cycle is active. If you want to move to a lower plan, cancel your current plan and choose the lower plan when your next cycle begins. Your current plan remains fully active until the end of the paid period.
      </p>

      {/* 7. Karo Coins */}
      <h2 id="karo-coins" className="text-xl font-bold text-ks-navy mt-8 mb-4">7. Karo Coins</h2>
      <p>
        Karo Coins are reward credits earned by Business Owners through the referral program. They are not currency, have no cash value, and cannot be refunded or withdrawn under any circumstances. Unused Karo Coins expire as per the terms displayed in your account dashboard. If your account is cancelled or terminated, any remaining Karo Coins are forfeited.
      </p>

      {/* 8. Payment Processor */}
      <h2 id="payment-processor" className="text-xl font-bold text-ks-navy mt-8 mb-4">8. Payment Processor</h2>
      <p>
        All payments on Karo Simple are processed by {paymentGateway}. When a refund is approved under Section 3, it is credited back to the original payment method — the same UPI ID, card, or bank account used for the original transaction — through {paymentGateway}.
      </p>
      <p>
        The refund processing time on our end is 5–7 business days. After that, your bank or payment app may take an additional 3–5 business days to reflect the credit in your account. Total time from approval to your account: up to 10 business days.
      </p>
      <p>
        If you have a dispute about the payment itself — such as an unauthorised transaction — you may contact {paymentGateway} support directly. However, if you raise a chargeback with your bank without first contacting us, we reserve the right to suspend your account pending investigation. Please reach out to us first at <a href={`mailto:${BILLING_EMAIL}`} className="text-ks-green hover:underline font-semibold">{BILLING_EMAIL}</a> — we resolve genuine errors quickly.
      </p>

      {/* 9. Governing Law */}
      <h2 id="governing-law" className="text-xl font-bold text-ks-navy mt-8 mb-4">9. Governing Law</h2>
      <p>
        This Refund and Cancellation Policy is governed by the laws of the Republic of India. Any disputes arising from this policy are subject to the jurisdiction stated in our Terms of Service at <a href="/terms" className="text-ks-green hover:underline font-semibold">karosimple.in/terms</a>.
      </p>

      {/* 10. Contact for Billing Issues */}
      <h2 id="contact" className="text-xl font-bold text-ks-navy mt-8 mb-4">10. Contact for Billing Issues</h2>
      <p>
        <strong>Email:</strong> <a href={`mailto:${BILLING_EMAIL}`} className="text-ks-green hover:underline font-semibold">{BILLING_EMAIL}</a><br />
        <strong>Subject format:</strong> REFUND REQUEST — [Order ID]<br />
        <strong>Response time:</strong> Within 2 business days
      </p>
      <p className="mt-4">
        For general support: <a href={`mailto:${CONTACT_EMAIL}`} className="text-ks-green hover:underline font-semibold">{CONTACT_EMAIL}</a><br />
        For grievances: <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-ks-green hover:underline font-semibold">{GRIEVANCE_EMAIL}</a> or <a href="/grievance" className="text-ks-green hover:underline font-semibold font-semibold">karosimple.in/grievance</a>
      </p>
      <hr className="border-[#EEF1F5] my-6" />
      <p className="text-sm text-ks-muted text-center leading-relaxed">
        See also: <a href="/privacy" className="text-ks-green hover:underline font-semibold">Privacy Policy</a> &middot; <a href="/terms" className="text-ks-green hover:underline font-semibold font-semibold">Terms of Service</a> &middot; <a href="/grievance" className="text-ks-green hover:underline font-semibold">Grievance Redressal</a>
      </p>
    </LegalPageLayout>
  );
}
