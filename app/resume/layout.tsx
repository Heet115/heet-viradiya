import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Download Heet Viradiya's resume. Full-Stack Developer with internship experience at AAN Web Solution and Strats360 Technolabs LLP. Skilled in Next.js, React, TypeScript, MongoDB.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume | Heet Viradiya",
    description:
      "View and download the resume of Heet Viradiya — Full-Stack Developer with hands-on experience in modern web technologies.",
    url: "https://heetviradiya.dev/resume",
  },
  twitter: {
    title: "Resume | Heet Viradiya",
    description:
      "Download the resume of Heet Viradiya — Full-Stack Developer skilled in Next.js, React, TypeScript, and more.",
  },
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
