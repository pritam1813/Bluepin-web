import type { Metadata, Viewport } from "next";
import { Poppins, Newsreader, Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-editorial',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  title: "Bluepin | AI Health Companion for Medical Reports & Glucose Tracking",
  description: "Bluepin is your AI-powered health companion. Organize medical reports, track glucose, analyze biomarkers, and unlock personalized AI health insights seamlessly.",
  openGraph: {
    type: "website",
    url: "https://bluepin.in/",
    title: "Bluepin | AI Health Companion for Medical Reports & Glucose Tracking",
    description: "Bluepin is your AI-powered health companion. Organize medical reports, track glucose, analyze biomarkers, and unlock personalized AI health insights seamlessly.",
    images: ["https://bluepin.in/Bluepin.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluepin | AI Health Companion for Medical Reports & Glucose Tracking",
    description: "Bluepin is your AI-powered health companion. Organize medical reports, track glucose, analyze biomarkers, and unlock personalized AI health insights seamlessly.",
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
      <head>
        <link href="https://fonts.cdnfonts.com/css/garet" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className={`${poppins.variable} ${newsreader.variable} ${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


