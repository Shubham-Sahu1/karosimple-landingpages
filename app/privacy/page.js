import React from "react";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { CONTACT_EMAIL, GRIEVANCE_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy - Karo Simple",
  description: "How Karo Simple collects, uses, and protects your personal data. Compliant with India's DPDPA 2023 and IT Act 2000.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="June 20, 2026">
      <p>
        Karo Simple (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting the privacy of your personal and business information. This Privacy Policy describes how we collect, use, store, and share information collected through our website and services, in compliance with India&apos;s <strong>Digital Personal Data Protection (DPDPA) Act 2023</strong> and the <strong>Information Technology (IT) Act 2000</strong>.
      </p>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">1. Information We Collect</h2>
      <p>
        We collect information necessary to provide and improve our review management service, including:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Account Details:</strong> When you register on our dashboard, we collect your name, business name, address, email address, phone number, and GSTIN (if applicable).</li>
        <li><strong>Customer Analytics:</strong> We count the number of scans, rating selection (e.g. 1 to 5 stars), and redirection choices. We do NOT collect or store your customer&apos;s name, personal details, or mobile number during the QR scan sequence, unless they explicitly submit it via the private feedback form.</li>
        <li><strong>Contact Forms:</strong> When you contact support, we collect details like your name, email, telephone number, business category, and the contents of your message.</li>
      </ul>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">2. How We Use Your Information</h2>
      <p>
        We use the information we collect to:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide, maintain, and optimize the Karo Simple review routing system.</li>
        <li>Send you real-time WhatsApp alerts or email notifications when feedback is received.</li>
        <li>Generate performance reports and analytics on scans and review growth.</li>
        <li>Verify accounting details and supply compliant GST invoices.</li>
      </ul>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">3. Data Localization & Safety</h2>
      <p>
        All customer databases, feedback logs, and account credentials are hosted on secure, encrypted servers located inside the <strong>Indian geographic region</strong>. We maintain strict physical, administrative, and technical safeguards to prevent unauthorized access, alteration, or disclosure of data.
      </p>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">4. Sharing and Disclosure</h2>
      <p>
        We do not sell, rent, or trade your personal or business data to third-party advertisers. We only share information with verified third-party service providers (like payment processors like Razorpay and email servers) to fulfill business transactions, under strict data protection contracts.
      </p>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">5. Your Data Rights</h2>
      <p>
        Under the DPDPA 2023, you have the right to:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Request access to the personal data we hold about you.</li>
        <li>Request correction or updating of inaccurate or outdated details.</li>
        <li>Withdraw your consent to data processing, which will result in account cancellation.</li>
        <li>Request erasure of your account and related telemetry files.</li>
      </ul>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">6. Grievance Redressal</h2>
      <p>
        If you have any questions, concerns, or complaints regarding our data practices, you can reach out directly to our designated Grievance Officer:
      </p>
      <div className="bg-ks-off-white p-6 rounded-xl border border-ks-border mt-4">
        <p className="font-bold text-ks-navy">Grievance Officer: Mr. Rajesh Kumar</p>
        <p className="text-ks-muted text-sm mt-1">
          Karo Simple Tech Solutions Pvt Ltd<br />
          Level 4, Block B, Tech Hub, Sector 62,<br />
          Noida, Uttar Pradesh, 201301
        </p>
        <p className="text-sm mt-3">
          Email: <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-ks-green font-bold hover:underline">{GRIEVANCE_EMAIL}</a>
        </p>
      </div>
    </LegalPageLayout>
  );
}
