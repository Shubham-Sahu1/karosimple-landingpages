import React from "react";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { CONTACT_EMAIL, GRIEVANCE_EMAIL, BILLING_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Affiliate Terms & Conditions | Karo Simple",
  description: "Terms and conditions for the Karo Simple Affiliate Program. Read this carefully before activating your affiliate account.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AffiliateTerms() {
  return (
    <LegalPageLayout title="Affiliate Terms &amp; Conditions" lastUpdated="29 June 2026">
      <p className="text-sm text-ks-muted mb-6">
        <strong>Last Updated:</strong> 29 June 2026<br />
        <strong>Effective Date:</strong> 29 June 2026
      </p>

      {/* 1. Introduction and Agreement */}
      <h2 id="introduction" className="text-xl font-bold text-ks-navy mt-8 mb-4">1. Introduction and Agreement</h2>
      <p>
        These Affiliate Terms and Conditions ("Affiliate Terms") govern your participation in the Karo Simple Affiliate Program ("Program"). By activating your affiliate account, generating your affiliate link, or promoting Karo Simple in any capacity as an affiliate, you ("Affiliate", "you", "your") agree to be bound by these Affiliate Terms.
      </p>
      <p>
        These Affiliate Terms apply in addition to Karo Simple's main Terms of Service at <a href="/terms" className="text-ks-green hover:underline font-semibold">karosimple.in/terms</a> and Privacy Policy at <a href="/privacy" className="text-ks-green hover:underline font-semibold">karosimple.in/privacy</a>. You must read and accept both before participating in the Program.
      </p>
      <p>
        These Affiliate Terms form a legally binding agreement between you and Karo Simple Tech Solutions Pvt Ltd (operating as Karo Simple) under the Indian Contract Act 1872. Where there is a conflict between these Affiliate Terms and the main Terms of Service on any matter specifically related to the affiliate program, these Affiliate Terms take precedence.
      </p>

      {/* 2. Who Can Join the Program */}
      <h2 id="eligibility" className="text-xl font-bold text-ks-navy mt-8 mb-4">2. Who Can Join the Program</h2>

      <h3 id="eligibility-requirements" className="text-lg font-bold text-ks-navy mt-6 mb-3">2.1 Eligibility Requirements</h3>
      <p>
        To participate in the Karo Simple Affiliate Program, you must meet all of the following conditions:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>You are an individual resident of India and are at least 18 years of age</li>
        <li>You hold a valid PAN card issued by the Income Tax Department of India</li>
        <li>You have an active Indian bank account in your name for receiving payouts</li>
        <li>You have a legitimate platform, audience, or network through which you intend to promote Karo Simple — this includes but is not limited to a social media account, YouTube channel, blog, website, newsletter, or professional network</li>
        <li>You are not an existing Karo Simple Business Owner or Agency Owner using the affiliate link to refer your own account or accounts you control</li>
      </ul>
      <p>
        If any of the above conditions change during your time in the Program, you are required to inform us at <a href="mailto:affiliates@karosimple.in" className="text-ks-green hover:underline font-semibold">affiliates@karosimple.in</a> immediately.
      </p>

      <h3 id="application-approval" className="text-lg font-bold text-ks-navy mt-6 mb-3">2.2 Application and Approval</h3>
      <p>
        All applications to the Affiliate Program are subject to review and approval by Karo Simple. We reserve the right to approve or reject any application at our sole discretion and without providing a reason. Approval of your application does not guarantee continued participation — we may suspend or terminate your affiliate account at any time as described in Section 9.
      </p>

      {/* 3. How the Program Works */}
      <h2 id="how-it-works" className="text-xl font-bold text-ks-navy mt-8 mb-4">3. How the Program Works</h2>

      <h3 id="affiliate-link" className="text-lg font-bold text-ks-navy mt-6 mb-3">3.1 Your Affiliate Link</h3>
      <p>
        Once approved, you will receive a unique affiliate referral link through your Karo Simple affiliate dashboard. This link is personal to you and must not be shared with or transferred to any other individual or entity. All activity tracked through this link is attributed to your account.
      </p>

      <h3 id="cookie-window" className="text-lg font-bold text-ks-navy mt-6 mb-3">3.2 The 30-Day Cookie Window</h3>
      <p>
        When a user clicks your affiliate link and visits karosimple.in, a tracking cookie — named <code>ks_affiliate_ref</code> — is set in their browser with a validity of 30 days. If that user creates a Karo Simple account and completes their first paid subscription purchase at any point within those 30 days, the conversion is attributed to your affiliate account and you earn the applicable commission.
      </p>
      <p>
        Cookie attribution follows a last-click model. If the same user clicks affiliate links from multiple affiliates during the 30-day window, the commission is attributed to the affiliate whose link was clicked most recently before the purchase.
      </p>
      <p>
        If a user clears their browser cookies, uses a different browser or device, or declines tracking cookies through our Cookie Consent Banner, the tracking cookie will not persist and the conversion may not be attributed to you. Karo Simple is not liable for attribution loss due to user cookie settings.
      </p>

      <h3 id="what-counts" className="text-lg font-bold text-ks-navy mt-6 mb-3">3.3 What Counts as a Conversion</h3>
      <p>
        A conversion is recorded — and commission becomes eligible — when all of the following are true:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>A new user visits karosimple.in via your affiliate link or within the 30-day cookie window from your link</li>
        <li>That user creates a new Karo Simple account</li>
        <li>That user completes their first-ever paid subscription purchase on any paid plan (Starter, Pro, or Agency)</li>
      </ul>
      <p>
        The following do not count as conversions and do not earn commission:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Free plan signups — no payment is involved</li>
        <li>Plan upgrades by users who are already on a paid plan</li>
        <li>Subscription renewals by existing paid users</li>
        <li>Purchases by users who had an existing Karo Simple account before clicking your affiliate link</li>
        <li>Purchases that are later reversed due to a payment gateway failure or a verified billing error eligible for refund under our Refund Policy</li>
      </ul>

      {/* 4. Commission */}
      <h2 id="commission" className="text-xl font-bold text-ks-navy mt-8 mb-4">4. Commission</h2>

      <h3 id="commission-rate" className="text-lg font-bold text-ks-navy mt-6 mb-3">4.1 Commission Rate</h3>
      <p>
        Your applicable commission rate is communicated to you at the time of affiliate program approval and is displayed in your affiliate dashboard. Commission rates may vary by plan type (Starter, Pro, Agency). All commission amounts are in Indian Rupees (₹).
      </p>
      <p>
        Karo Simple may update commission rates at any time with 30 days' prior written notice to your registered email address. Conversions that occurred before the effective date of any rate change are paid at the rate that was in effect on the date of conversion.
      </p>

      <h3 id="dashboard" className="text-lg font-bold text-ks-navy mt-6 mb-3">4.2 What Your Dashboard Shows</h3>
      <p>
        Your affiliate dashboard displays the following in real time:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Total clicks on your affiliate link</li>
        <li>Total conversions attributed to your link</li>
        <li>Commission earned — broken down into pending (within the 30-day clearing period) and cleared (eligible for payout)</li>
        <li>Total amount paid out to date</li>
        <li>Payout history</li>
      </ul>

      <h3 id="karo-coins" className="text-lg font-bold text-ks-navy mt-6 mb-3">4.3 Karo Coins Are Separate</h3>
      <p>
        The Karo Coins referral reward system is a separate mechanism available only to existing Business Owner accounts on Karo Simple for referring other businesses to the platform. Karo Coins have no cash value, cannot be converted to affiliate commission, and are governed by separate terms displayed in the Business Owner dashboard. These Affiliate Terms do not apply to Karo Coins and the Karo Coins system does not apply to affiliates.
      </p>

      {/* 5. KYC Verification */}
      <h2 id="kyc" className="text-xl font-bold text-ks-navy mt-8 mb-4">5. KYC Verification</h2>

      <h3 id="kyc-mandatory" className="text-lg font-bold text-ks-navy mt-6 mb-3">5.1 Mandatory Before First Payout</h3>
      <p>
        Karo Simple is required to verify your identity before transferring any money to your bank account. KYC (Know Your Customer) verification is mandatory and must be completed through your affiliate dashboard before your first payout is processed. No exceptions.
      </p>
      <p>
        You must submit the following:
      </p>
      <div className="space-y-4 my-4">
        <p>
          <strong>Identity and Tax Document (mandatory):</strong><br />
          PAN card — a clear image of the front side of your PAN card issued by the Income Tax Department of India. This is required for TDS compliance under Section 194H of the Income Tax Act 1961.
        </p>
        <p>
          <strong>Bank Account Details (mandatory):</strong><br />
          Account holder name, bank account number, IFSC code, and bank name. You must also upload either a cancelled cheque or a recent bank statement showing your name and account number, for verification purposes.
        </p>
        <p>
          <strong>Government-Issued Photo ID (one of the following, mandatory):</strong><br />
          Voter ID (front and back), Passport (front page showing your photo and personal details), or Driving Licence (front and back).
        </p>
      </div>

      <h3 id="aadhaar" className="text-lg font-bold text-ks-navy mt-6 mb-3">5.2 Aadhaar</h3>
      <p>
        Karo Simple does not collect Aadhaar numbers. We do not accept Aadhaar as a KYC document. Under the Aadhaar Act 2016, private entities are restricted from mandating Aadhaar for identity verification. Please do not submit your Aadhaar number or Aadhaar card through any channel — email, dashboard upload, or otherwise.
      </p>

      <h3 id="kyc-security" className="text-lg font-bold text-ks-navy mt-6 mb-3">5.3 How Your KYC Data Is Protected</h3>
      <p>
        All KYC documents and financial information you submit are encrypted at rest. This data is accessed only by authorised personnel within Karo Simple for the purpose of identity verification and payout processing. It is never sold, rented, or shared with any third party except as required for tax filing under Indian law. Full details are in our Privacy Policy at <a href="/privacy" className="text-ks-green hover:underline font-semibold">karosimple.in/privacy</a>.
      </p>

      <h3 id="kyc-fraud" className="text-lg font-bold text-ks-navy mt-6 mb-3">5.4 Consequences of Fraudulent Documents</h3>
      <p>
        If any document submitted for KYC verification is found to be forged, tampered, or fraudulent, your affiliate account will be permanently suspended, all commissions — pending and cleared — will be forfeited, and the matter will be reported to the relevant authorities including law enforcement and the Income Tax Department.
      </p>

      {/* 6. Tax Deducted at Source (TDS) */}
      <h2 id="tds" className="text-xl font-bold text-ks-navy mt-8 mb-4">6. Tax Deducted at Source (TDS)</h2>

      <h3 id="tds-legal-basis" className="text-lg font-bold text-ks-navy mt-6 mb-3">6.1 Legal Basis</h3>
      <p>
        Commission payments made to affiliates are subject to Tax Deducted at Source under Section 194H of the Income Tax Act 1961. Section 194H covers TDS on commission or brokerage payments made to resident individuals.
      </p>

      <h3 id="tds-threshold" className="text-lg font-bold text-ks-navy mt-6 mb-3">6.2 When TDS Applies</h3>
      <p>
        TDS is applicable when your total commission earnings from Karo Simple in a single financial year (1 April to 31 March) exceed ₹15,000. If your total earnings cross this threshold, Karo Simple will deduct TDS at 5% on the amount before processing your payout.
      </p>
      <p>
        If the threshold is not crossed in a financial year, TDS is not deducted and your full cleared commission is paid out.
      </p>

      <h3 id="form-16a" className="text-lg font-bold text-ks-navy mt-6 mb-3">6.3 Form 16A</h3>
      <p>
        For any financial year in which TDS is deducted from your commissions, Karo Simple will deposit the deducted amount with the Income Tax Department and issue you a Form 16A (TDS Certificate). You can use this certificate when filing your annual income tax return to claim credit for the tax already deducted.
      </p>

      <h3 id="pan-mandatory" className="text-lg font-bold text-ks-navy mt-6 mb-3">6.4 Why Your PAN Is Non-Negotiable</h3>
      <p>
        TDS cannot be filed with the Income Tax Department without your PAN number. If you do not submit a valid PAN card before your payout is processed, the Income Tax Act requires Karo Simple to deduct TDS at the higher rate of 20% instead of 5%. Submitting your PAN is the only way to ensure the lower rate applies.
      </p>

      <h3 id="affiliate-tax-responsibility" className="text-lg font-bold text-ks-navy mt-6 mb-3">6.5 Your Own Tax Filing Responsibility</h3>
      <p>
        Commission income you earn from the Karo Simple Affiliate Program is income in your hands and is taxable under Indian income tax law. It must be declared correctly in your annual income tax return. Karo Simple provides Form 16A as supporting documentation only — we are not responsible for your tax filing, your tax liability, or any penalties arising from your failure to declare this income correctly. We recommend consulting a tax advisor if you are unsure how to handle affiliate income in your return.
      </p>

      {/* 7. Payouts */}
      <h2 id="payouts" className="text-xl font-bold text-ks-navy mt-8 mb-4">7. Payouts</h2>

      <h3 id="payout-threshold" className="text-lg font-bold text-ks-navy mt-6 mb-3">7.1 Minimum Payout Threshold</h3>
      <p>
        Payouts are processed only when your cleared commission balance reaches a minimum of ₹500. If your cleared balance is below ₹500 at the time of a payout cycle, the balance rolls over to the next cycle.
      </p>

      <h3 id="payout-schedule" className="text-lg font-bold text-ks-navy mt-6 mb-3">7.2 Payout Schedule</h3>
      <p>
        Payouts are processed monthly, typically in the first week of the calendar month for commissions that cleared in the previous month. For example, commissions that cleared in January are paid in the first week of February.
      </p>

      <h3 id="clearing-period" className="text-lg font-bold text-ks-navy mt-6 mb-3">7.3 Commission Clearing Period</h3>
      <p>
        After a conversion is recorded, the commission enters a 30-day holding period before it is marked as cleared. This holding period exists to account for payment reversals, technical errors, or billing failures that may occur shortly after a subscription is activated. After 30 days with no reversal, the commission moves from pending to cleared and becomes eligible for payout.
      </p>

      <h3 id="payout-method" className="text-lg font-bold text-ks-navy mt-6 mb-3">7.4 How Payouts Are Made</h3>
      <p>
        All payouts are made via NEFT or IMPS bank transfer to the verified bank account you submitted during KYC. We do not make cash payouts, UPI transfers to personal mobile numbers, or payments to third-party accounts that are not in your name.
      </p>

      <h3 id="payout-failure" className="text-lg font-bold text-ks-navy mt-6 mb-3">7.5 Payout Failures</h3>
      <p>
        If a payout fails because your bank account details are incorrect or your account is inactive, the amount is returned to your cleared balance and you will be notified by email to update your bank details. Karo Simple is not responsible for delays or losses caused by incorrect bank information provided by you.
      </p>

      {/* 8. What You Must Not Do */}
      <h2 id="prohibited-conduct" className="text-xl font-bold text-ks-navy mt-8 mb-4">8. What You Must Not Do</h2>
      <p>
        The following are strictly prohibited and will result in immediate termination of your affiliate account and forfeiture of all commissions:
      </p>
      <ul className="list-disc pl-6 space-y-3 my-4">
        <li><strong>Paid advertising without approval</strong> — You must not run paid advertisements (Google Ads, Meta Ads, YouTube Ads, or any other paid promotion) using your affiliate link or mentioning Karo Simple without prior written approval from us. Contact <a href="mailto:affiliates@karosimple.in" className="text-ks-green hover:underline">affiliates@karosimple.in</a> to request approval before spending money on ads.</li>
        <li><strong>False or misleading claims</strong> — You must not make any claim about Karo Simple's features, pricing, results, or capabilities that is false, exaggerated, or not verifiable from our official website. Do not promise specific review count increases, rating improvements, or business results that we have not guaranteed.</li>
        <li><strong>Spam and unsolicited promotion</strong> — You must not promote your affiliate link through unsolicited direct messages, email spam, WhatsApp broadcasts to non-consenting recipients, or any other method that violates platform terms or Indian law.</li>
        <li><strong>Incentivising signups</strong> — You must not offer any form of cash, gift, discount, or incentive to individuals in exchange for signing up through your affiliate link.</li>
        <li><strong>Fake accounts and fraudulent conversions</strong> — You must not create fake Karo Simple accounts, use bots or automated tools, or engage in any other fraudulent means to generate artificial conversions.</li>
        <li><strong>Self-referral</strong> — You must not use your own affiliate link to create a Business Owner or Agency Owner account for your own business. Your affiliate link is for referring other people, not yourself.</li>
        <li><strong>Brand impersonation</strong> — You must not create websites, social media accounts, email addresses, or any other presence that impersonates Karo Simple or could mislead people into thinking they are dealing with Karo Simple directly. You may identify yourself as a Karo Simple affiliate, but you may not present yourself as Karo Simple.</li>
        <li><strong>Cookie stuffing</strong> — You must not use any technical method to set the <code>ks_affiliate_ref</code> tracking cookie on a user's browser without that user having genuinely and voluntarily clicked your affiliate link.</li>
        <li><strong>Unauthorised brand asset use</strong> — You must not use Karo Simple's logo, name, screenshots, or any other brand material in your promotional content without downloading them from the approved materials we provide. You must not modify, distort, or misrepresent our brand assets.</li>
      </ul>

      {/* 9. Termination */}
      <h2 id="termination" className="text-xl font-bold text-ks-navy mt-8 mb-4">9. Termination</h2>

      <h3 id="termination-by-you" className="text-lg font-bold text-ks-navy mt-6 mb-3">9.1 Leaving the Program</h3>
      <p>
        You may choose to leave the Karo Simple Affiliate Program at any time by emailing <a href="mailto:affiliates@karosimple.in" className="text-ks-green hover:underline">affiliates@karosimple.in</a>. Upon voluntary withdrawal, any cleared commissions at or above the ₹500 minimum threshold will be paid out in the next regular payout cycle. Commissions that are still in the 30-day pending period at the time of withdrawal are forfeited.
      </p>

      <h3 id="termination-by-us" className="text-lg font-bold text-ks-navy mt-6 mb-3">9.2 Termination by Karo Simple</h3>
      <p>
        Karo Simple may suspend or terminate your affiliate participation at any time. If termination is for cause — meaning a violation of these Affiliate Terms — all commissions, both pending and cleared, are forfeited regardless of amount. If termination is without cause, cleared commissions at or above the minimum threshold will be paid out in the next cycle.
      </p>
      <p>
        We will notify you of termination by email to your registered email address. Termination takes effect immediately upon notification.
      </p>

      <h3 id="program-discontinuation" className="text-lg font-bold text-ks-navy mt-6 mb-3">9.3 Program Discontinuation</h3>
      <p>
        Karo Simple may discontinue the Affiliate Program entirely at any time. In this case, we will provide at least 30 days' written notice to all active affiliates. All cleared commissions at or above the minimum payout threshold at the time of discontinuation will be paid out before the program closes.
      </p>

      {/* 10. No Guarantee of Earnings */}
      <h2 id="disclaimer" className="text-xl font-bold text-ks-navy mt-8 mb-4">10. No Guarantee of Earnings</h2>
      <p>
        Karo Simple makes no representation, warranty, or guarantee regarding the amount of commission you will earn through the Affiliate Program. Your earnings depend entirely on factors outside our control, including the quality and reach of your promotional content, the decisions of users you refer, and the pricing plans those users choose.
      </p>
      <p>
        We are not liable for any financial loss, loss of expected earnings, or business loss you experience based on your participation in or expectation of income from the Affiliate Program.
      </p>

      {/* 11. Intellectual Property Licence */}
      <h2 id="ip-licence" className="text-xl font-bold text-ks-navy mt-8 mb-4">11. Intellectual Property Licence</h2>
      <p>
        Karo Simple grants you a limited, non-exclusive, non-transferable, revocable licence to use our approved affiliate marketing materials — including approved logo versions, banners, and promotional copy — solely for the purpose of promoting Karo Simple through your affiliate link in accordance with these Terms. This licence does not grant you any ownership rights over our brand or materials.
      </p>
      <p>
        You must not alter, distort, animate, or otherwise modify our brand assets without written permission. You must not use our brand assets in any context that is defamatory, misleading, adult, political, or otherwise objectionable. We may revoke this licence and require you to remove all Karo Simple brand materials from your platform at any time.
      </p>

      {/* 12. Indemnification */}
      <h2 id="indemnification" className="text-xl font-bold text-ks-navy mt-8 mb-4">12. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless Karo Simple, its founders, employees, and representatives from any claims, losses, damages, fines, or legal costs arising from your violation of these Affiliate Terms, your promotional activities, or your failure to comply with applicable Indian law.
      </p>

      {/* 13. Governing Law */}
      <h2 id="governing-law" className="text-xl font-bold text-ks-navy mt-8 mb-4">13. Governing Law</h2>
      <p>
        These Affiliate Terms are governed by the laws of the Republic of India. Any dispute arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in Raipur, Chhattisgarh, India.
      </p>
      <p>
        Before approaching a court, both parties agree to attempt resolution through good-faith direct negotiation for 30 days from the date the dispute is first raised in writing.
      </p>

      {/* 14. Changes to These Terms */}
      <h2 id="changes" className="text-xl font-bold text-ks-navy mt-8 mb-4">14. Changes to These Terms</h2>
      <p>
        Karo Simple may update these Affiliate Terms at any time. For material changes, we will provide at least 15 days' notice by email to your registered address before the changes take effect. Your continued participation in the Affiliate Program after the effective date constitutes your acceptance of the revised Terms.
      </p>
      <p>
        If you do not agree to the revised Terms, you must notify us at <a href="mailto:affiliates@karosimple.in" className="text-ks-green hover:underline">affiliates@karosimple.in</a> and your participation will be ended with cleared commissions paid out as per Section 9.1.
      </p>

      {/* 15. Contact */}
      <h2 id="contact" className="text-xl font-bold text-ks-navy mt-8 mb-4">15. Contact</h2>
      <p>
        <strong>Affiliate program queries:</strong><br />
        <a href="mailto:affiliates@karosimple.in" className="text-ks-green hover:underline">affiliates@karosimple.in</a>
      </p>
      <p>
        <strong>KYC and payout issues:</strong><br />
        <a href={`mailto:${BILLING_EMAIL}`} className="text-ks-green hover:underline">{BILLING_EMAIL}</a>
      </p>
      <div className="bg-[#F5F7FA] p-6 rounded-xl border border-[#EEF1F5] my-4 text-ks-navy leading-relaxed text-sm">
        <p className="font-bold text-base mb-1">Grievance Officer: Mr. Rajesh Kumar</p>
        <p>
          <strong>Email:</strong> <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-ks-green hover:underline font-semibold">{GRIEVANCE_EMAIL}</a><br />
          <strong>Address:</strong> Level 4, Block B, Tech Hub, Sector 62, Noida, Uttar Pradesh, 201301
        </p>
      </div>
      <p>
        You may also raise a formal complaint at <a href="/grievance" className="text-ks-green hover:underline font-semibold">karosimple.in/grievance</a>.
      </p>

      <hr className="border-[#EEF1F5] my-6" />
      <p className="text-sm text-ks-muted text-center leading-relaxed">
        See also: <a href="/privacy" className="text-ks-green hover:underline font-semibold">Privacy Policy</a> &middot; <a href="/terms" className="text-ks-green hover:underline font-semibold font-semibold">Terms of Service</a> &middot; <a href="/refund-policy" className="text-ks-green hover:underline font-semibold">Refund &amp; Cancellation Policy</a> &middot; <a href="/grievance" className="text-ks-green hover:underline font-semibold">Grievance Redressal</a>
      </p>
    </LegalPageLayout>
  );
}
