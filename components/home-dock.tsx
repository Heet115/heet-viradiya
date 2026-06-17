"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Briefcase01Icon,
  CodeIcon,
  FileDownloadIcon,
  Mail01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons"

const dockItems = [
  { label: "About", href: "/about", icon: UserIcon },
  { label: "Work", href: "/portfolio", icon: Briefcase01Icon },
  { label: "Stack", href: "/stack", icon: CodeIcon },
  { label: "Resume", href: "/resume", icon: FileDownloadIcon },
  { label: "Contact", href: "/contact", icon: Mail01Icon },
]

export function HomeDock() {
  return (
    <motion.nav
      aria-label="Primary"
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.45, type: "spring", stiffness: 260, damping: 24 }}
      className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 rounded-[1.4rem] border border-black/6 bg-background/70 px-2 py-2 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.65)] backdrop-blur-2xl supports-[backdrop-filter]:bg-background/55 dark:border-white/8 dark:bg-white/[0.04]"
    >
      <div className="flex items-end gap-1.5">
        {dockItems.map((item) => (
          <motion.div
            key={item.href}
            whileHover={{ y: -6, scale: 1.12 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 420, damping: 25 }}
            className="group relative"
          >
            <Link
              href={item.href}
              aria-label={item.label}
              className="flex h-11 w-11 items-center justify-center rounded-[1rem] border border-transparent text-muted-foreground transition-colors hover:border-foreground/10 hover:bg-foreground/8 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none dark:hover:bg-white/8"
            >
              <HugeiconsIcon icon={item.icon} className="h-5 w-5" />
            </Link>
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-lg border border-foreground/8 bg-background/90 px-2 py-1 text-[11px] font-medium whitespace-nowrap text-foreground opacity-0 shadow-sm backdrop-blur-xl transition-all duration-200 group-focus-within:-top-10 group-focus-within:opacity-100 group-hover:-top-10 group-hover:opacity-100">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  )
}
