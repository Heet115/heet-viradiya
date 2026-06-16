import "./globals.css"
import { Geist_Mono, Figtree } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"

const SITE_URL = "https://heetviradiya.codes"
const SITE_NAME = "Heet Viradiya — Full-Stack Developer"
const SITE_DESCRIPTION =
  "Portfolio of Heet Viradiya, a Full-Stack Developer from Bhavnagar, Gujarat, India. Specialising in Next.js 15, React, TypeScript, MongoDB Atlas, and Firebase. Built LearnOps (Academic ERP), CampusClaim (Lost & Found), Present Perfect (AI gift platform), FinTrackX, RoommateX, and more. Available for freelance projects and full-time opportunities."
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
    // ── Name & Identity ───────────────────────────────────────────
    "Heet Viradiya",
    "Heet Viradiya developer",
    "Heet Viradiya portfolio",
    "Heet Viradiya Full-Stack Developer",
    "hpviradiya05",
    "Heet115",
    "heetviradiya.codes",

    // ── Role ─────────────────────────────────────────────────────
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
    "Junior Developer",
    "Entry Level Developer India",

    // ── Frameworks & Languages ───────────────────────────────────
    "Next.js Developer",
    "Next.js 15",
    "Next.js 16",
    "Next.js",
    "React Developer",
    "React.js",
    "React 19",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "HTML5",
    "Tailwind CSS",
    "Tailwind CSS v4",
    "Shadcn UI",
    "React Hook Form",
    "Zod validation",

    // ── Backend & APIs ───────────────────────────────────────────
    "REST API developer",
    "Next.js Server Actions",
    "role-based access control",
    "RBAC developer",
    "workflow automation",
    "database design",

    // ── Databases & Cloud ────────────────────────────────────────
    "MongoDB",
    "MongoDB Atlas",
    "Mongoose",
    "Firebase",
    "Firebase Firestore",
    "Vercel",
    "Cloudinary",
    "Vercel Blob",
    "cloud deployment",

    // ── Authentication ───────────────────────────────────────────
    "Clerk authentication",
    "NextAuth",
    "authentication developer",

    // ── AI & Tools ───────────────────────────────────────────────
    "Google Generative AI",
    "AI-powered application developer",
    "Prompt Engineering",
    "AI-Assisted Development",
    "Git",
    "GitHub",
    "VS Code",

    // ── Projects ─────────────────────────────────────────────────
    "LearnOps Academic ERP",
    "Academic ERP developer",
    "ERP system Next.js",
    "CampusClaim lost and found platform",
    "campus management system",
    "Present Perfect AI gift recommendation",
    "AI gift platform Next.js",
    "FinTrackX finance management",
    "personal finance tracker Next.js",
    "RoommateX roommate matching",
    "roommate finder app React",
    "UnconditionalHelp volunteer platform",
    "community support platform Next.js",

    // ── Education ────────────────────────────────────────────────
    "Gyanmanjari Innovative University",
    "GMIU developer",
    "Diploma Information Technology India",

    // ── Experience ───────────────────────────────────────────────
    "AAN Web Solution intern",
    "Strats360 Technolabs intern",
    "web development intern India",
    "React Firebase intern",

    // ── General / Intent ─────────────────────────────────────────
    "hire developer India",
    "hire Next.js developer",
    "hire React developer",
    "SaaS developer",
    "portfolio website developer",
    "open source developer India",
    "best developer portfolio 2025",
    "modern web developer portfolio",
    "scalable web application developer",
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
              url: "https://heetviradiya.codes",
              email: "hpviradiya05@gmail.com",
              telephone: "+916355410801",
              jobTitle: "Full-Stack Developer",
              description:
                "Full-Stack Developer from Bhavnagar, Gujarat, India. Specialising in Next.js 15, React, TypeScript, MongoDB Atlas, and Firebase. Built Academic ERP, Lost & Found, AI gift recommendation, and finance management platforms.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhavnagar",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Gyanmanjari Innovative University",
                address: "Gujarat, India",
              },
              sameAs: [
                "https://github.com/Heet115",
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "HTML5",
                "Tailwind CSS",
                "Shadcn UI",
                "React Hook Form",
                "Zod",
                "MongoDB Atlas",
                "Firebase Firestore",
                "Mongoose",
                "Clerk",
                "NextAuth",
                "REST APIs",
                "Server Actions",
                "Vercel",
                "Cloudinary",
                "Vercel Blob",
                "Google Generative AI",
                "Prompt Engineering",
                "Role-Based Access Control",
                "Full-Stack Development",
                "Academic ERP Systems",
                "AI-powered Applications",
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
              url: "https://heetviradiya.codes",
              description:
                "Portfolio of Heet Viradiya — Full-Stack Developer from Bhavnagar, Gujarat, India.",
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
