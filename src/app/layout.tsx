import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Heet Viradiya — IT Student & Web Developer",
  description:
    "Portfolio of Heet Viradiya — IT diploma student with hands-on experience in React, Tailwind CSS, Firebase, and modern web development. Based in Bhavnagar, India.",
  generator: "Next.js",
  keywords: ["Heet Viradiya", "Web Developer", "React", "Next.js", "Firebase", "Tailwind CSS", "Portfolio", "Bhavnagar"],
  authors: [{ name: "Heet Viradiya", url: "https://heetviradiya.codes" }],
  creator: "Heet Viradiya",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Heet Viradiya — IT Student & Web Developer",
    description: "Portfolio of Heet Viradiya — IT diploma student with hands-on experience in React, Tailwind CSS, Firebase, and modern web development.",
    url: "https://heetviradiya.codes",
    siteName: "Heet Viradiya",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heet Viradiya — IT Student & Web Developer",
    description: "Portfolio of Heet Viradiya — IT diploma student with hands-on experience in React, Tailwind CSS, Firebase, and modern web development.",
    creator: "@heetviradiya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
