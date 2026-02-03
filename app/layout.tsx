import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SmoothScroll } from "@/components/ui/smooth-scroll"

export const metadata: Metadata = {
  title: "Lansdowne Law Center | Lansdowne & Delaware County Attorneys",
  description: "Lansdowne Law Center provides experienced legal representation in Family Law, Estate Planning, Real Estate, and Criminal Defense for Lansdowne, Delaware County, and surrounding communities since 1966.",
  keywords: ["Lansdowne Attorney", "Delaware County Law Firm", "Upper Darby Lawyer", "Havertown Legal Services", "Estate Planning 19050", "Family Law Delaware County", "Criminal Defense Lansdowne", "Real Estate Lawyer PA"],
  openGraph: {
    title: "Lansdowne Law Center | Trusted Lansdowne & Delaware County Attorneys",
    description: "Serving individuals and businesses in Lansdowne, Upper Darby, and Delaware County since 1966.",
    url: "https://lansdownelawcenter.com",
    siteName: "Lansdowne Law Center",
    locale: "en_US",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} antialiased flex flex-col min-h-screen font-sans`}
      >
        <SmoothScroll>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
