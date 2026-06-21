export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://karosimple.in";
export const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.karosimple.in";

export const REGISTER_URL = `${DASHBOARD_URL}/register`;
export const LOGIN_URL = `${DASHBOARD_URL}/login`;

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Karo%20Simple,%20I%20would%20like%20to%20know%20more%20about%2520your%2520Google%2520review%2520system.`;

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@karosimple.in";
export const GRIEVANCE_EMAIL = "grievance@karosimple.in";
export const BILLING_EMAIL = "billing@karosimple.in";

export const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";
export const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || "";
