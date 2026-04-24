import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Instrument_Serif, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { PilotModal } from "@/components/PilotModal";
import { BrandRevealSplash } from "@/components/BrandRevealSplash";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://salency.ai"),
  title: "Salency — AI that remembers every customer pain your sales reps forget",
  description: "Sales intelligence that turns call transcripts into structured context. Extract pains, map them to your products, and generate follow-ups — so reps stop losing deals to forgotten context.",
  openGraph: {
    title: "Salency — AI that remembers every customer pain your sales reps forget",
    description: "Sales intelligence that turns call transcripts into structured context. Extract pains, map them to your products, and generate follow-ups.",
    url: "https://salency.ai",
    siteName: "Salency",
    images: [{ url: "/salency-mark.svg", alt: "Salency" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salency — AI that remembers every customer pain your sales reps forget",
    description: "Sales intelligence that turns call transcripts into structured context.",
    images: ["/salency-mark.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${instrumentSerif.variable} ${instrumentSans.variable} antialiased`}
      >
        <BrandRevealSplash />
        {children}
        <PilotModal />
        <Analytics />
      </body>
    </html>
  );
}
