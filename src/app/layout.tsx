import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const siteUrl = "https://heetviradiya.codes";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Heet Viradiya — IT Student & Web Developer",
    template: "%s | Heet Viradiya",
  },
  description:
    "Portfolio of Heet Viradiya — Enthusiastic IT diploma student with hands-on experience in React, Tailwind CSS, Firebase, and modern web development. Building responsive apps and exploring AI, DevOps, and automation. Based in Bhavnagar, India.",
  generator: "Next.js",
  applicationName: "Heet Viradiya Portfolio",
  keywords: [
    "Heet Viradiya",
    "Web Developer",
    "React Developer",
    "Next.js",
    "Firebase",
    "Tailwind CSS",
    "Shadcn UI",
    "Portfolio",
    "Bhavnagar",
    "India",
    "IT Student",
    "Frontend Developer",
    "Full Stack",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Heet Viradiya", url: siteUrl }],
  creator: "Heet Viradiya",
  publisher: "Heet Viradiya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Heet Viradiya",
    title: "Heet Viradiya — IT Student & Web Developer",
    description:
      "Portfolio of Heet Viradiya — Enthusiastic IT diploma student with hands-on experience in React, Tailwind CSS, Firebase, and modern web development. Based in Bhavnagar, India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heet Viradiya — IT Student & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heet Viradiya — IT Student & Web Developer",
    description:
      "Portfolio of Heet Viradiya — IT diploma student with hands-on experience in React, Tailwind CSS, Firebase, and modern web development.",
    creator: "@heetviradiya",
    images: ["/og-image.jpg"],
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
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Heet Viradiya",
    url: "https://heetviradiya.codes",
    image: "https://heetviradiya.codes/og-image.jpg",
    jobTitle: "IT Student & Web Developer",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "G.M.I.U.",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhavnagar",
      addressCountry: "India",
    },
    email: "hpviradiya05@gmail.com",
    sameAs: [
      "https://github.com/heetviradiya",
      "https://linkedin.com/in/heetviradiya",
      "https://twitter.com/heetviradiya",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "JavaScript",
      "TypeScript",
      "Web Development",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          storageKey="theme-mode"
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
