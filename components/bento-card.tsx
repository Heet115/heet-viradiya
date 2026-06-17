"use client"

import { motion, Variants } from "framer-motion"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Create a motion-enabled version of Card
const MotionCard = motion.create(Card)

interface BentoCardProps {
  title?: string
  className?: string
  children?: React.ReactNode
  visual?: React.ReactNode
  showArrow?: boolean
  href?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function BentoCard({
  title,
  className,
  children,
  visual,
  showArrow = true,
  href,
  onMouseEnter,
  onMouseLeave,
}: BentoCardProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  }

  const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`

  const CardContent = (
    <MotionCard
      variants={itemVariants}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 0.99 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative flex h-full w-full flex-col justify-end overflow-hidden",
        href ? "cursor-pointer" : "cursor-default",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_-42px_rgba(0,0,0,0.75)] dark:hover:shadow-white/5",
        "rounded-[1.75rem] border-black/6! bg-black/[0.025]! p-6 shadow-sm backdrop-blur-2xl sm:p-8 md:p-9 dark:border-white/8! dark:bg-white/[0.04]!"
      )}
    >
      {/* Noise Texture Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.08]"
        style={{ backgroundImage: noiseSvg }}
      ></div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/4 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-90 dark:from-black/25"></div>

      {visual && (
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          {visual}
        </div>
      )}

      {children && <div className="relative z-10 mb-4">{children}</div>}

      <div className="relative z-10 mt-auto flex w-full items-end justify-between">
        {title && (
          <span className="text-lg font-medium tracking-tight text-foreground">
            {title}
          </span>
        )}
        {showArrow && href && (
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground"
          />
        )}
      </div>
    </MotionCard>
  )

  return (
    <div className={cn("relative", className)}>
      {href ? (
        <Link href={href} className="block h-full w-full outline-none">
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </div>
  )
}
