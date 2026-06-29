import React from "react";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { CONTACT_EMAIL, GRIEVANCE_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | Karo Simple",
  description: "Read how Karo Simple collects, uses, and protects your personal data. Compliant with DPDPA 2023 and IT Act 2000.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="29 June 2026">
      <p className="text-sm text-ks-muted mb-4">
        <strong>Last Updated:</strong> 29 June 2026<br />
        <strong>Effective Date:</strong> 29 June 2026
      </p>

      {/* 1. Who We Are */}
      <h2 id="who-we-are" className="text-xl font-bold text-ks-navy mt-8 mb-4">1. Who We Are</h2>
      <p>
        Karo Simple is a QR-code-based review management platform built for Indian businesses. We help business owners collect genuine customer reviews on platforms like Google, Zomato, Justdial, and others — and receive private feedback from customers who had a poor experience.
      </p>
      <p className="font-semibold text-ks-navy mt-4">
        Data Fiduciary (the entity responsible for your data):
      </p>
      <div className="bg-[#F5F7FA] p-6 rounded-xl border border-[#EEF1F5] my-4">
        <p className="font-bold text-ks-navy">Karo Simple Tech Solutions Pvt Ltd</p>
        <p className="text-sm mt-2 text-ks-navy leading-relaxed">
          <strong>Operating as:</strong> Karo Simple<br />
          <strong>Website:</strong> <a href="https://karosimple.in" className="text-ks-green hover:underline font-semibold">https://karosimple.in</a><br />
          <strong>Platform:</strong> <a href="https://app.karosimple.in" className="text-ks-green hover:underline font-semibold">https://app.karosimple.in</a><br />
          <strong>Registered Address:</strong> Level 4, Block B, Tech Hub, Sector 62, Noida, Uttar Pradesh, 201301<br />
          <strong>Privacy Contact:</strong> <a href="mailto:privacy@karosimple.in" className="text-ks-green hover:underline font-semibold">privacy@karosimple.in</a>
        </p>
      </div>
      <p>
        As the Data Fiduciary under the Digital Personal Data Protection Act 2023 (DPDPA 2023), Karo Simple decides the purpose and means of processing your personal data and is responsible for protecting it.
      </p>

      {/* 2. Who This Policy Applies To */}
      <h2 id="who-this-applies-to" className="text-xl font-bold text-ks-navy mt-8 mb-4">2. Who This Policy Applies To</h2>
      <p>
        This Privacy Policy applies to:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Business Owners</strong> — Indian small and medium business owners who register on Karo Simple to manage customer reviews for their business.</li>
        <li><strong>Agency Owners</strong> — Digital marketing agencies or multi-location businesses that manage multiple sub-businesses under one Karo Simple account.</li>
        <li><strong>Affiliates</strong> — Individuals who join the Karo Simple Affiliate Program to refer new users and earn commission. (Note: The Affiliate Program is currently in development and will be launched separately. When it goes live, this section will apply.)</li>
        <li><strong>Website Visitors</strong> — Anyone who visits karosimple.in without creating an account.</li>
      </ul>
      <p>
        By using our platform or website, you confirm that you have read and understood this Privacy Policy.
      </p>

      {/* 3. What Personal Data We Collect */}
      <h2 id="data-we-collect" className="text-xl font-bold text-ks-navy mt-8 mb-4">3. What Personal Data We Collect</h2>

      <h3 id="data-business-owners" className="text-lg font-bold text-ks-navy mt-6 mb-3">3.1 Business Owners and Agency Owners</h3>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse text-sm text-ks-navy border border-[#EEF1F5]">
          <thead>
            <tr className="bg-[#1B2A4A] text-white">
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Data Type</th>
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Specific Fields</th>
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Why We Collect It</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Identity</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Full name, email address, phone number</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Account creation and communication</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Business Details</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Business name, category, city, address</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Platform setup and QR code generation</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Payment Data</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Subscription plan, billing cycle, payment reference ID</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Billing via our payment gateway — we do not store card or UPI numbers</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Platform Activity</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Review platform links added, QR codes generated, scan count</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Delivering the service to you</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Customer Feedback</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Private feedback submitted by dissatisfied customers</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Stored on your behalf for your business improvement</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Device and Browser</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">IP address, browser type, device type, session identifiers</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Security and fraud prevention</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Important:</strong> Karo Simple does not store positive review content. When a satisfied customer submits a review on Google, Zomato, or any other platform through your QR code, that content goes directly to that platform. We only store the private negative feedback that customers submit through our internal feedback form.
      </p>

      <h3 id="data-affiliates" className="text-lg font-bold text-ks-navy mt-6 mb-3">3.2 Affiliates</h3>
      <p className="text-xs text-ks-muted italic mb-2">
        This section applies when the Affiliate Program launches.
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse text-sm text-ks-navy border border-[#EEF1F5]">
          <thead>
            <tr className="bg-[#1B2A4A] text-white">
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Data Type</th>
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Specific Fields</th>
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Why We Collect It</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Identity</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Full name, email address, phone number</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Account creation</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Tax Information</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">PAN card number</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Mandatory for TDS compliance under Section 194H of the Income Tax Act 1961</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Bank Details</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Account holder name, account number, IFSC code, bank name</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Processing affiliate payouts</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Government ID</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">One photo ID — Voter ID, Passport, or Driving Licence</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Verifying identity before transferring money to your account</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Referral Activity</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Affiliate link clicks, conversions, commissions earned, payout history</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Commission tracking and payment</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Cookie Data</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">30-day tracking cookie (ks_affiliate_ref)</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Attributing referrals during the commission window</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Aadhaar:</strong> Karo Simple does not collect or store Aadhaar numbers. As a private entity, we are not permitted to mandate Aadhaar under the Aadhaar Act 2016. We use PAN and one alternative government-issued photo ID instead.
      </p>

      <h3 id="data-visitors" className="text-lg font-bold text-ks-navy mt-6 mb-3">3.3 Website Visitors</h3>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse text-sm text-ks-navy border border-[#EEF1F5]">
          <thead>
            <tr className="bg-[#1B2A4A] text-white">
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Data Type</th>
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Why We Collect It</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Cookies (with your consent)</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Analytics and, if applicable, affiliate tracking</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">IP address and device/browser data</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Security, regional analytics</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Contact form submissions (name, email, message, business type)</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Responding to your enquiry</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 4. Sensitive Personal Data */}
      <h2 id="sensitive-data" className="text-xl font-bold text-ks-navy mt-8 mb-4">4. Sensitive Personal Data</h2>
      <p>
        Under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules 2011, the following data we collect from Affiliates is classified as Sensitive Personal Data:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>PAN card number</li>
        <li>Bank account details</li>
        <li>Financial payment history</li>
      </ul>
      <p className="mt-4">
        We collect this data only after receiving your explicit consent at the point of collection. This data is:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Encrypted at rest using AES-256 encryption</li>
        <li>Never sold, rented, or shared with any third party except as required for payment processing or compliance with Indian law</li>
        <li>Accessible only to authorised personnel within Karo Simple</li>
      </ul>
      <p className="mt-4">
        If you wish to withdraw your consent for us holding this data, email <a href="mailto:privacy@karosimple.in" className="text-ks-green hover:underline font-semibold">privacy@karosimple.in</a>. Please note that withdrawing consent will prevent us from processing affiliate payouts and may result in account suspension.
      </p>

      {/* 5. Why We Use Your Data */}
      <h2 id="purpose-of-collection" className="text-xl font-bold text-ks-navy mt-8 mb-4">5. Why We Use Your Data</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse text-sm text-ks-navy border border-[#EEF1F5]">
          <thead>
            <tr className="bg-[#1B2A4A] text-white">
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Purpose</th>
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Legal Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Providing the Karo Simple platform and all its features</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Contractual necessity</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Processing subscription payments via our payment gateway</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Contractual necessity</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Sending transactional emails — invoices, OTPs, plan alerts</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Contractual necessity</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Sending WhatsApp notifications (only if you opt in)</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Your consent</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Tracking affiliate referrals and processing commissions</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Contractual necessity</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5]">TDS deduction and filing (affiliates)</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Legal obligation under the Income Tax Act</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Analytics and improving the product</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Legitimate interest</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Customer support</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Legitimate interest</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Detecting and preventing fraud and security threats</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Legitimate interest</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Complying with Indian law and responding to government or court orders</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Legal obligation</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We do not use your data for advertising to third parties. We do not sell your data.
      </p>

      {/* 6. Third-Party Services We Use */}
      <h2 id="third-party-services" className="text-xl font-bold text-ks-navy mt-8 mb-4">6. Third-Party Services We Use</h2>
      <p>
        To deliver our service, we share certain data with the following third-party processors. Each is bound by their own privacy practices.
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse text-sm text-ks-navy border border-[#EEF1F5]">
          <thead>
            <tr className="bg-[#1B2A4A] text-white">
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Service</th>
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Data They Receive</th>
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Payment Gateway (our payment processor)</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Name, email, phone, payment amount</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Processing subscription payments</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Google (OAuth and Analytics)</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Email address, usage and traffic data</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Sign-in with Google; analytics (with your consent)</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Vercel</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">All platform traffic and data in transit</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Hosting infrastructure for karosimple.in and app.karosimple.in</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Sanity CMS</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Blog content only — no personal data</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Managing blog and content pages</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">WhatsApp Business API</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Phone number (only if you have opted in)</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Sending business notifications</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Email Service Provider</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Name and email address</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Sending transactional emails</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Data Transfer Outside India:</strong> Vercel and Google operate servers outside India. When you use our platform, your data may be processed on servers located internationally. Both Vercel and Google maintain data protection standards consistent with the requirements of Indian law. This cross-border transfer is disclosed in compliance with DPDPA 2023.
      </p>

      {/* 7. Cookies and Tracking */}
      <h2 id="cookies" className="text-xl font-bold text-ks-navy mt-8 mb-4">7. Cookies and Tracking</h2>

      <h3 id="essential-cookies" className="text-lg font-bold text-ks-navy mt-6 mb-3">7.1 Essential Cookies</h3>
      <p>
        These cookies are necessary for the platform to function. They do not require your consent and cannot be turned off.
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse text-sm text-ks-navy border border-[#EEF1F5]">
          <thead>
            <tr className="bg-[#1B2A4A] text-white">
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Cookie</th>
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Authentication session cookie</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Keeps you logged in to app.karosimple.in</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">CSRF protection token</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">Prevents cross-site request forgery attacks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="analytics-cookies" className="text-lg font-bold text-ks-navy mt-6 mb-3">7.2 Analytics Cookies</h3>
      <p>
        We use Google Analytics 4 (GA4) to understand how visitors use our website. These cookies are not loaded until you explicitly accept them through our Cookie Consent Banner.
      </p>

      <h3 id="affiliate-tracking-cookie" className="text-lg font-bold text-ks-navy mt-6 mb-3">7.3 Affiliate Tracking Cookie</h3>
      <p>
        When you visit karosimple.in through an affiliate's referral link, we set a tracking cookie to record the referral so the affiliate can receive their commission.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Cookie name:</strong> ks_affiliate_ref</li>
        <li><strong>Duration:</strong> 30 days</li>
        <li><strong>What it stores:</strong> The affiliate's referral ID, not any personal information about you</li>
        <li><strong>Consent:</strong> This cookie is only set if you accept tracking cookies through our Cookie Consent Banner. If you reject tracking cookies, this cookie is not set.</li>
      </ul>
      <p className="mt-4">
        You can manage your cookie preferences at any time using the Cookie Settings option in our website footer.
      </p>

      {/* 8. How Long We Keep Your Data */}
      <h2 id="data-retention" className="text-xl font-bold text-ks-navy mt-8 mb-4">8. How Long We Keep Your Data</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse text-sm text-ks-navy border border-[#EEF1F5]">
          <thead>
            <tr className="bg-[#1B2A4A] text-white">
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">Data</th>
              <th className="px-4 py-2.5 text-left font-semibold border border-[#EEF1F5]">How Long We Keep It</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Business Owner and Agency Owner account data</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">For the duration of your account, plus 2 years after account deletion</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Private customer feedback stored on your behalf</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">For the duration of your account, plus 2 years</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Payment and subscription records</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">7 years (required for GST and income tax compliance)</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Affiliate KYC documents (PAN, bank details, government ID)</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">7 years after your last payout (required for tax compliance)</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Affiliate commission records</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">7 years (income tax records)</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Contact form submissions</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">1 year</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Analytics data</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">26 months (Google Analytics 4 default retention)</td>
            </tr>
            <tr className="bg-[#F5F7FA]">
              <td className="px-4 py-2.5 border border-[#EEF1F5] font-semibold">Affiliate tracking cookie</td>
              <td className="px-4 py-2.5 border border-[#EEF1F5]">30 days</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        After these periods, data is either deleted or anonymised.
      </p>

      {/* 9. Your Rights Under DPDPA 2023 */}
      <h2 id="your-rights" className="text-xl font-bold text-ks-navy mt-8 mb-4">9. Your Rights Under DPDPA 2023</h2>
      <p>
        If you are a registered user of Karo Simple, you have the following rights under the Digital Personal Data Protection Act 2023:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Right to Access</strong> — You can request a copy of the personal data we hold about you.</li>
        <li><strong>Right to Correction</strong> — You can ask us to correct any inaccurate or incomplete personal data.</li>
        <li><strong>Right to Erasure</strong> — You can request that we delete your personal data. This right is subject to any legal retention obligations we have (see Section 8).</li>
        <li><strong>Right to Withdraw Consent</strong> — You can withdraw consent for non-essential data processing at any time. This does not affect the lawfulness of processing carried out before you withdrew consent.</li>
        <li><strong>Right to Nominate</strong> — Under DPDPA 2023, you may nominate another individual to exercise your data rights on your behalf in the event of your death or incapacity.</li>
        <li><strong>Right to Grievance Redressal</strong> — You may file a complaint with our Grievance Officer if you believe your data rights have been violated (see Section 12).</li>
      </ul>
      <p>
        To exercise any of these rights, email us at <a href="mailto:privacy@karosimple.in" className="text-ks-green hover:underline font-semibold">privacy@karosimple.in</a>. We will respond within 30 days of receiving your request.
      </p>

      {/* 10. Children's Data */}
      <h2 id="childrens-data" className="text-xl font-bold text-ks-navy mt-8 mb-4">10. Children's Data</h2>
      <p>
        Karo Simple is a business-to-business SaaS platform designed for use by business owners and professionals. It is not intended for individuals under the age of 18.
      </p>
      <p>
        We do not knowingly collect personal data from minors. If you believe that a person under 18 has registered on our platform, contact us immediately at <a href="mailto:privacy@karosimple.in" className="text-ks-green hover:underline font-semibold">privacy@karosimple.in</a> and we will delete the account promptly.
      </p>

      {/* 11. How We Protect Your Data */}
      <h2 id="security" className="text-xl font-bold text-ks-navy mt-8 mb-4">11. How We Protect Your Data</h2>
      <p>
        We take the security of your personal data seriously. The measures we have in place include:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>All sensitive personal data (PAN numbers, bank account details) is encrypted at rest using AES-256 encryption</li>
        <li>All data transmitted between your device and our servers is protected by TLS 1.2 or higher — HTTPS is enforced across all routes on both karosimple.in and app.karosimple.in</li>
        <li>Payment transactions are processed entirely by our payment gateway — Karo Simple does not store your card numbers, CVV, or UPI PIN at any point</li>
        <li>Access to personal data within our systems is restricted to authorised personnel only, through role-based access controls</li>
        <li>Our database access is secured and audited</li>
      </ul>
      <p className="mt-4">
        No system is completely immune to security risks. While we take all reasonable precautions, we encourage you to use a strong password and to notify us immediately if you suspect any unauthorised access to your account.
      </p>

      {/* 12. Grievance Officer */}
      <h2 id="grievance-officer" className="text-xl font-bold text-ks-navy mt-8 mb-4">12. Grievance Officer</h2>
      <p>
        In accordance with the Information Technology Act 2000 Rule 5(9) and the Digital Personal Data Protection Act 2023, we have appointed a Grievance Officer to handle complaints related to this Privacy Policy and your personal data.
      </p>
      <div className="bg-[#F5F7FA] p-6 rounded-xl border border-[#EEF1F5] my-4">
        <p className="font-bold text-ks-navy">Grievance Officer: Mr. Rajesh Kumar</p>
        <p className="text-sm mt-2 text-ks-navy leading-relaxed">
          <strong>Designation:</strong> Grievance Officer, Karo Simple<br />
          <strong>Email:</strong> <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-ks-green hover:underline font-semibold">{GRIEVANCE_EMAIL}</a><br />
          <strong>Address:</strong> Level 4, Block B, Tech Hub, Sector 62, Noida, Uttar Pradesh, 201301
        </p>
      </div>
      <p>
        <strong>Acknowledgement:</strong> Within 48 hours of receiving your complaint<br />
        <strong>Resolution:</strong> Within 30 days of acknowledgement
      </p>
      <p>
        You may also submit complaints through our online Grievance form at <a href="/grievance" className="text-ks-green hover:underline font-semibold">karosimple.in/grievance</a>.
      </p>
      <p>
        If your complaint is not resolved to your satisfaction within 30 days, you may escalate the matter to the relevant authority under DPDPA 2023 or the Ministry of Electronics and Information Technology (MeitY).
      </p>

      {/* 13. Changes to This Policy */}
      <h2 id="policy-changes" className="text-xl font-bold text-ks-navy mt-8 mb-4">13. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices, platform features, or applicable law. When we do, we will update the "Last Updated" date at the top of this page.
      </p>
      <p>
        For significant changes that affect how we use your data, we will notify registered users by email at least 7 days before the changes take effect.
      </p>
      <p>
        Your continued use of Karo Simple after a revised Privacy Policy is posted constitutes your acceptance of the updated policy.
      </p>

      {/* 14. Contact Us */}
      <h2 id="contact" className="text-xl font-bold text-ks-navy mt-8 mb-4">14. Contact Us</h2>
      <p>
        For any questions or concerns about this Privacy Policy or how we handle your data:
      </p>
      <p>
        <strong>Privacy queries:</strong> <a href="mailto:privacy@karosimple.in" className="text-ks-green hover:underline font-semibold">privacy@karosimple.in</a> (Response time: Within 30 days)
      </p>
      <p>
        <strong>General support:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="text-ks-green hover:underline font-semibold">{CONTACT_EMAIL}</a>
      </p>
      <p>
        <strong>Grievance Officer:</strong> <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-ks-green hover:underline font-semibold">{GRIEVANCE_EMAIL}</a> (Response time: Within 48 hours)
      </p>
      <hr className="border-[#EEF1F5] my-6" />
      <p className="text-sm text-ks-muted text-center leading-relaxed">
        See also: <a href="/terms" className="text-ks-green hover:underline font-semibold">Terms of Service</a> &middot; <a href="/refund-policy" className="text-ks-green hover:underline font-semibold">Refund &amp; Cancellation Policy</a> &middot; <a href="/grievance" className="text-ks-green hover:underline font-semibold">Grievance Redressal</a>
      </p>
    </LegalPageLayout>
  );
}
