import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Heet Viradiya's projects — including LearnOps (Academic ERP), CampusClaim (lost & found), Roomily (roommate finder), and more full-stack web applications.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Heet Viradiya",
    description:
      "A curated collection of full-stack projects built with Next.js, React, TypeScript, MongoDB, and Firebase.",
    url: "https://heetviradiya.dev/portfolio",
  },
  twitter: {
    title: "Portfolio | Heet Viradiya",
    description:
      "Full-stack projects including Academic ERP, AI apps, and campus solutions by Heet Viradiya.",
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
