import type { Metadata } from "next";
import ThemeProvider from "@/components/theme/theme-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import "./globals.css";
import React from "react";
import Navbar from "@/components/ui/hero/navbar/Navbar";
import Footer from "@/components/sections/home/footer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  siteUrl,
  defaultSeo,
  absoluteUrl,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultSeo.title,
    template: `%s | ${defaultSeo.shortTitle}`,
  },
  description: defaultSeo.description,
  keywords: [...defaultSeo.keywords],
  authors: [{ name: defaultSeo.author, url: siteUrl }],
  creator: defaultSeo.author,
  openGraph: {
    type: "website",
    locale: defaultSeo.locale,
    url: siteUrl,
    siteName: defaultSeo.shortTitle,
    title: defaultSeo.title,
    description: defaultSeo.description,
    images: [
      {
        url: absoluteUrl(defaultSeo.imagePath),
        width: 1200,
        height: 630,
        alt: defaultSeo.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSeo.title,
    description: defaultSeo.description,
    images: [absoluteUrl(defaultSeo.imagePath)],
    creator: defaultSeo.twitterHandle || undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/custom-icons/icon.jpg",
    apple: "/custom-icons/icon.jpg",
    shortcut: "/custom-icons/icon.jpg",
  },
  manifest: "/manifest.json",
  category: "technology",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <JsonLd />
      </head>
      <body
        className={`antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
