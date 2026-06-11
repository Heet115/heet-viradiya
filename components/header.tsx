"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ThemeSwitcher } from "./theme-switcher"
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function Header() {
  const pathname = usePathname()
  const isSubpage = pathname !== "/"
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata", // Bhavnagar timezone
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      )
    }

    updateTime() // Initial call
    const interval = setInterval(updateTime, 2000) // Update every second to catch minute flips accurately

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0, y: -20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
            type: "spring",
            stiffness: 300,
            damping: 24,
          },
        },
      }}
      className="mb-8 flex h-14 w-full items-center justify-between rounded-full border border-foreground/10 bg-background/60 px-6 font-medium tracking-tight text-foreground shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl dark:shadow-[0_8px_32px_rgba(255,255,255,0.02)]"
    >
      {/* Left: Name / Back Button */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          show: { opacity: 1, scale: 1 },
        }}
        className="flex items-center gap-3 relative min-w-[120px]"
      >
        <AnimatePresence mode="wait">
          {isSubpage ? (
            <motion.div
              key="back-btn"
              initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 20, filter: "blur(4px)" }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="group flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground">
                <HugeiconsIcon icon={ArrowLeft01Icon} className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key="name"
              initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm font-bold">Heet Viradiya</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Center: Role */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          show: { opacity: 1, scale: 1 },
        }}
        className="hidden text-sm text-muted-foreground md:block"
      >
        Full-Stack Developer
      </motion.div>

      {/* Right: Time & Theme */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          show: { opacity: 1, scale: 1 },
        }}
        className="flex items-center gap-4"
      >
        <div className="flex flex-col items-end text-[10px] tracking-widest text-muted-foreground uppercase sm:flex-row sm:items-center sm:gap-2 sm:text-xs sm:tracking-normal sm:normal-case">
          <span className="hidden sm:inline">Bhavnagar •</span>
          <span>{time || "Loading..."}</span>
        </div>

        <div className="h-4 w-px bg-foreground/10" />

        <div className="h-4 w-px bg-foreground/10" />

        <ThemeSwitcher />
      </motion.div>
    </motion.header>
  )
}
