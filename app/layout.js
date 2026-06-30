import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { CookieConsentBanner } from "@/components/layout/CookieConsentBanner";
import { SiteLoader } from "@/components/layout/SiteLoader";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Karo Simple - Manage Reviews Across Google, Zomato, Swiggy & More",
    template: "%s | Karo Simple",
  },
  description:
    "AI-powered reputation and review management for Indian businesses. Direct happy customers to post 5-star reviews on Google, Zomato, Swiggy, Justdial, and more. Free to start.",
  keywords: [
    "reputation management india",
    "google review management",
    "zomato reviews scanner",
    "justdial review generator",
    "swiggy reviews builder",
    "qr code review platform",
    "get more business reviews",
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
    title: "Karo Simple - Manage Reviews Across Google, Zomato, Swiggy & More",
    description:
      "QR-based review routing for Indian businesses. Help happy customers leave reviews on Google, Zomato, Swiggy, Justdial, Play Store, Flipkart, IndiaMART, or Blinkit in seconds.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Karo Simple - Reputation Management for Indian Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karo Simple - Manage Reviews Across Google, Zomato, Swiggy & More",
    description:
      "QR-based review routing for Indian businesses. Free to start.",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#1B2A4A] text-[#FFFFFF] transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          <SiteLoader />
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
        </ThemeProvider>
      </body>
    </html>
  );
}
