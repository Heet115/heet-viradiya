import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stack & Tools",
  description:
    "Explore the full technology stack of Heet Viradiya — Next.js, React, TypeScript, Node.js, MongoDB, Firebase, Clerk, Vercel, and more developer tools.",
  alternates: { canonical: "/stack" },
  openGraph: {
    title: "Stack & Tools | Heet Viradiya",
    description:
      "The technologies and software Heet Viradiya uses to build scalable web applications: Next.js, React, TypeScript, MongoDB, and more.",
    url: "https://heetviradiya.dev/stack",
  },
  twitter: {
    title: "Stack & Tools | Heet Viradiya",
    description:
      "Technology stack of Heet Viradiya — Next.js, React, TypeScript, MongoDB, Firebase, and more.",
  },
}

export default function StackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
