import type { Metadata, Viewport } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const garet = localFont({
  src: [
    {
      path: "./fonts/Garet-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Garet-Heavy.woff2",
      weight: "800 900",
      style: "normal",
    },
  ],
  variable: "--font-garet",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  title: "Bluepin | AI Health Companion for Medical Reports & Glucose Tracking",
  description:
    "Bluepin is your AI-powered health companion. Organize medical reports, track glucose, analyze biomarkers, and unlock personalized AI health insights seamlessly.",
  openGraph: {
    type: "website",
    url: "https://bluepin.in/",
    title:
      "Bluepin | AI Health Companion for Medical Reports & Glucose Tracking",
    description:
      "Bluepin is your AI-powered health companion. Organize medical reports, track glucose, analyze biomarkers, and unlock personalized AI health insights seamlessly.",
    images: ["https://bluepin.in/Bluepin.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bluepin | AI Health Companion for Medical Reports & Glucose Tracking",
    description:
      "Bluepin is your AI-powered health companion. Organize medical reports, track glucose, analyze biomarkers, and unlock personalized AI health insights seamlessly.",
    images: ["https://bluepin.in/Bluepin.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-N3TDQJHS" />
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${outfit.variable} ${garet.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
