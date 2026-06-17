import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Heet Viradiya — a Full-Stack Developer from Bhavnagar, Gujarat with expertise in Next.js, React, TypeScript, MongoDB, and Firebase.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Heet Viradiya",
    description:
      "Learn about Heet Viradiya — Full-Stack Developer with experience building Academic ERP platforms, AI applications, and finance management products.",
    url: "https://heetviradiya.codes/about",
  },
  twitter: {
    title: "About | Heet Viradiya",
    description:
      "Learn about Heet Viradiya — Full-Stack Developer with experience in Next.js, React, TypeScript, MongoDB, and Firebase.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
