import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Heet Viradiya — Full-Stack Developer based in Bhavnagar, Gujarat. Available for freelance projects, collaborations, and full-time opportunities.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Heet Viradiya",
    description:
      "Reach out to Heet Viradiya for freelance projects, collaborations, or job opportunities. Email, phone, and GitHub available.",
    url: "https://heetviradiya.dev/contact",
  },
  twitter: {
    title: "Contact | Heet Viradiya",
    description:
      "Get in touch with Heet Viradiya — Full-Stack Developer available for freelance and full-time opportunities.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
