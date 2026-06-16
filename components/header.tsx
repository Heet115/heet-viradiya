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
      className="group relative mx-auto mt-4 mb-12 flex h-12 w-fit items-center gap-8 overflow-hidden rounded-full border border-black/8 bg-black/2 px-6 font-medium tracking-tight text-foreground shadow-lg backdrop-blur-[48px] dark:border-white/6 dark:bg-[#111111]/25"
    >
      {/* Noise Texture Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay dark:opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Left: Name / Back Button */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          show: { opacity: 1, scale: 1 },
        }}
        className="relative flex items-center"
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
              <Link
                href="/"
                className="group flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
              >
                <HugeiconsIcon
                  icon={ArrowLeft01Icon}
                  className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                />
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
              <span className="text-sm font-bold tracking-widest">HV</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Center: Removed for minimalism */}

      {/* Right: Time & Theme */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          show: { opacity: 1, scale: 1 },
        }}
        className="flex items-center gap-4"
      >
        <div className="flex items-center font-mono text-[10px] tracking-widest text-muted-foreground uppercase sm:text-xs sm:tracking-normal sm:normal-case">
          <span>{time || "Loading..."}</span>
        </div>

        <div className="h-4 w-px bg-foreground/10" />

        <ThemeSwitcher />
      </motion.div>
    </motion.header>
  )
}
