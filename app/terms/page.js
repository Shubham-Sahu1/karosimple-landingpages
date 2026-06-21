import React from "react";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Terms of Service - Karo Simple",
  description: "Terms governing your use of Karo Simple's Google review management platform. India jurisdiction.",
};

export default function TermsOfService() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="June 20, 2026">
      <p>
        Welcome to Karo Simple! These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website and review routing platform operated by Karo Simple Tech Solutions Pvt Ltd (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
      </p>
      <p>
        By creating an account, subscribing to our services, or scanning our demo codes, you agree to be bound by these Terms and our Privacy Policy.
      </p>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">1. Scope of Services</h2>
      <p>
        Karo Simple provides local merchants with a QR-based feedback routing platform. The service splits customer rating directions: directing positive ratings (4-5 stars) to your public Google reviews page, and saving low ratings (1-3 stars) as private text feedback sent to your owner dashboard. We do not guarantee a specific volume of review increases, as this relies on your customer interactions.
      </p>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">2. Account Registration</h2>
      <p>
        You must supply accurate account credentials, including a valid mobile number and business name. You are solely responsible for maintaining the confidentiality of your account credentials and tracking all activity originating from your dashboard.
      </p>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">3. Fees and Subscriptions</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Billing Cycles:</strong> Paid plans (Starter, Pro, Agency) are billed on a recurring monthly or annual basis.</li>
        <li><strong>Razorpay Gateway:</strong> All payments are processed through Razorpay. By upgrading, you agree to authorize recurring auto-debit payments where applicable, in compliance with RBI guidelines.</li>
        <li><strong>GST Details:</strong> If you input a valid GSTIN during subscription checkout, tax-deductible invoices will be delivered to your billing email.</li>
      </ul>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">4. Cancellations and Auto-Renewal</h2>
      <p>
        You can cancel your subscription at any time directly through the Billing tab in your dashboard. Upon cancellation, your service benefits will continue until the end of your active billing period. No partial refunds are issued for mid-cycle cancellations.
      </p>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">5. Customer Interaction Policies</h2>
      <p>
        You agree to comply with Google Business Profile policies and local Indian consumer protection guidelines. You may not use our platform to engage in deceptive practices, offer monetary bribes or gift incentives for positive ratings, or construct fake business details.
      </p>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">6. Limitation of Liability</h2>
      <p>
        In no event shall Karo Simple Tech Solutions Pvt Ltd be liable for any indirect, incidental, or consequential damages (including business loss, rating drops, or suspension of your Google Business Profile) resulting from your platform usage. Our maximum liability shall not exceed the subscription fees paid by you in the 3 months preceding the claim.
      </p>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">7. Governing Law and Jurisdiction</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of India. Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.
      </p>
    </LegalPageLayout>
  );
}
