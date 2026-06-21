import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { CookieConsentBanner } from "@/components/layout/CookieConsentBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Karo Simple - Get More 5-Star Google Reviews",
    template: "%s | Karo Simple",
  },
  description:
    "AI-powered review management for Indian businesses. Help happy customers leave Google reviews in 10 seconds. Free to start. No credit card required.",
  keywords: [
    "google review management india",
    "qr code review platform",
    "get more google reviews",
    "review management software india",
    "indian business reviews",
  ],
  authors: [{ name: "Karo Simple" }],
  creator: "Karo Simple",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://karosimple.in"
  ),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://karosimple.in",
    siteName: "Karo Simple",
    title: "Karo Simple - Get More 5-Star Google Reviews",
    description:
      "QR-based review management for Indian businesses. Help happy customers leave Google reviews in seconds. Free to start. No credit card.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Karo Simple - Google Review Management for Indian Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karo Simple - Get More 5-Star Google Reviews",
    description:
      "QR-based review management for Indian businesses. Free to start.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ks-off-white text-ks-navy">
        {children}

        {/* Global Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1B2A4A",
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: "14px",
              borderRadius: "12px",
              padding: "12px 16px",
            },
            success: {
              iconTheme: { primary: "#3DAA72", secondary: "#FFFFFF" },
            },
            error: {
              iconTheme: { primary: "#EF4444", secondary: "#FFFFFF" },
            },
          }}
        />

        {/* Cookie Consent — shown on every page for DPDPA 2023 compliance */}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
