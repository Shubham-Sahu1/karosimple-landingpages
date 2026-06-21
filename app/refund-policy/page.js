import React from "react";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BILLING_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Refund & Cancellation Policy - Karo Simple",
  description: "Karo Simple's refund policy. 7-day money-back guarantee. Cancellation takes effect at end of billing cycle.",
};

export default function RefundPolicy() {
  return (
    <LegalPageLayout title="Refund & Cancellation Policy" lastUpdated="June 20, 2026">
      <p>
        At Karo Simple, we strive to build a transparent and high-value experience. This Refund and Cancellation Policy outlines the refund parameters for our review management platform.
      </p>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">1. 7-Day Money-Back Guarantee</h2>
      <p>
        We offer a <strong>7-day money-back guarantee</strong> for all first-time subscriptions on the Starter, Pro, and Agency plans. If you are not satisfied with the platform for any reason, you may request a full refund within 7 days of your initial payment.
      </p>
      <p>
        To request a refund, please send an email to <a href={`mailto:${BILLING_EMAIL}`} className="text-ks-green hover:underline font-bold">{BILLING_EMAIL}</a> containing:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Your registered business name</li>
        <li>Registered email address</li>
        <li>Razorpay transaction ID or invoice reference</li>
        <li>A brief reason for cancellation (this helps us improve)</li>
      </ul>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">2. Processing Timeline</h2>
      <p>
        Once your refund request is verified and approved, it will be initiated immediately. The refunded amount will be credited back to your original payment method (Bank account, Credit/Debit card, or UPI wallet) via <strong>Razorpay</strong> within <strong>5 to 7 business days</strong>, depending on your bank&apos;s settlement terms.
      </p>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">3. Late Refund Inquiries</h2>
      <p>
        Refund requests submitted after the 7-day initial window are not eligible for a refund. However, you can cancel your subscription at any time to prevent auto-renewal, and you will continue to have full platform access for the remaining duration of your current billing period.
      </p>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">4. Duplicate Charges</h2>
      <p>
        In case of technical errors resulting in double debits or incorrect charges, please notify our team at <a href={`mailto:${BILLING_EMAIL}`} className="text-ks-green hover:underline font-bold">{BILLING_EMAIL}</a> immediately. We will investigate the issue and process full reversals for any duplicate billing within 48 hours.
      </p>
    </LegalPageLayout>
  );
}
