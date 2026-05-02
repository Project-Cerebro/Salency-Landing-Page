import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Instrument_Serif, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { PilotModal } from "@/components/PilotModal";
import { HeroArtifactModalLazy } from "@/components/HeroArtifactModalLazy";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const SITE_URL = "https://www.salency.ai";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Salency",
  alternateName: "Cerebro",
  url: SITE_URL,
  logo: `${SITE_URL}/salency-mark.svg`,
  description:
    "Institutional memory for B2B sales teams. Salency turns every call into structured, cited context, so reps stop losing deals to forgotten signals and any successor inherits full account history.",
  email: "hello@salency.ai",
  sameAs: [
    "https://www.linkedin.com/company/salency",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Salency",
  url: SITE_URL,
  description:
    "AI that remembers every customer pain your sales reps forget.",
  publisher: {
    "@type": "Organization",
    name: "Salency",
  },
};

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
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.salency.ai"),
  title: "Salency: AI that remembers every customer pain your sales reps forget",
  description: "Sales intelligence that turns call transcripts into structured context. Extract pains, map them to your products, and generate follow-ups, so reps stop losing deals to forgotten context.",
  openGraph: {
    title: "Salency: AI that remembers every customer pain your sales reps forget",
    description: "Sales intelligence that turns call transcripts into structured context. Extract pains, map them to your products, and generate follow-ups.",
    url: "https://www.salency.ai",
    siteName: "Salency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salency: AI that remembers every customer pain your sales reps forget",
    description: "Sales intelligence that turns call transcripts into structured context.",
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
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {children}
        <PilotModal />
        <HeroArtifactModalLazy />
        <Analytics />
      </body>
    </html>
  );
}
