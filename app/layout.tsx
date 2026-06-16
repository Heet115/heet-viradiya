import "./globals.css"
import { Geist_Mono, Figtree } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"

const SITE_URL = "https://heetviradiya.dev"
const SITE_NAME = "Heet Viradiya — Full-Stack Developer"
const SITE_DESCRIPTION =
  "Portfolio of Heet Viradiya, a Full-Stack Developer specialising in Next.js, React, TypeScript, MongoDB, and Firebase. Available for freelance projects and full-time opportunities."
const AUTHOR = "Heet Viradiya"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // ── Core ────────────────────────────────────────────────────────────────────
  title: {
    default: SITE_NAME,
    template: `%s | Heet Viradiya`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    // Name & Identity
    "Heet Viradiya",
    "Heet Viradiya developer",
    "Heet Viradiya portfolio",
    "hpviradiya05",
    "Heet115",

    // Role
    "Full-Stack Developer",
    "Full Stack Developer India",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Software Developer",
    "Web Developer",
    "Web Developer India",
    "Web Developer Gujarat",
    "Web Developer Bhavnagar",
    "Freelance Developer India",
    "Freelance Web Developer",

    // Frameworks & Languages
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Next.js 15",
    "React.js",
    "Tailwind CSS",
    "Shadcn UI",

    // Databases & Cloud
    "MongoDB",
    "Firebase",
    "Firebase Firestore",
    "MongoDB Atlas",
    "Vercel",
    "Cloudinary",

    // Auth & Tools
    "Clerk authentication",
    "NextAuth",
    "REST API developer",
    "Server Actions",
    "Git",
    "GitHub",

    // Project types
    "Academic ERP",
    "AI web application",
    "SaaS developer",
    "Portfolio website",
    "Open source developer",

    // General
    "hire developer India",
    "junior developer portfolio",
    "best portfolio 2025",
    "modern web developer",
  ],
  authors: [{ name: AUTHOR, url: SITE_URL }],
  creator: AUTHOR,
  publisher: AUTHOR,

  // ── Canonical / Locale ───────────────────────────────────────────────────
  alternates: { canonical: "/" },

  // ── Open Graph ──────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Heet Viradiya — Full-Stack Developer portfolio",
      },
    ],
  },

  // ── Twitter / X ─────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@heetviradiya",
  },

  // ── Robots ───────────────────────────────────────────────────────────────
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

  // ── Misc ─────────────────────────────────────────────────────────────────
  category: "technology",
}

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        figtree.variable
      )}
    >
      <body>
        {/* JSON-LD: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Heet Viradiya",
              url: "https://heetviradiya.dev",
              email: "hpviradiya05@gmail.com",
              telephone: "+916355410801",
              jobTitle: "Full-Stack Developer",
              description:
                "Full-Stack Developer specialising in Next.js, React, TypeScript, MongoDB, and Firebase.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhavnagar",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/Heet115",
                "https://linkedin.com/in/heetviradiya",
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "Firebase",
                "Full-Stack Development",
              ],
            }),
          }}
        />
        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Heet Viradiya",
              url: "https://heetviradiya.dev",
              description:
                "Portfolio of Heet Viradiya — Full-Stack Developer",
              author: {
                "@type": "Person",
                name: "Heet Viradiya",
              },
            }),
          }}
        />
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
