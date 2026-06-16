import { motion } from "framer-motion"
import { HugeiconsIcon } from "@hugeicons/react"
import { AtIcon } from "@hugeicons/core-free-icons"

export function ContactVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden p-6">
      <div className="relative flex h-full w-full items-center justify-center">
        {/* Sonar Ripples */}
        <motion.div
          className="absolute h-12 w-12 rounded-full border border-foreground/20 sm:h-16 sm:w-16"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: isHovered ? [0.8, 2] : 0.8,
            opacity: isHovered ? [0.5, 0] : 0,
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="absolute h-12 w-12 rounded-full border border-foreground/10 sm:h-16 sm:w-16"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: isHovered ? [0.8, 2.5] : 0.8,
            opacity: isHovered ? [0.3, 0] : 0,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.4,
          }}
        />

        {/* Center Icon */}
        <motion.div
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-background/50 shadow-sm backdrop-blur-md sm:h-12 sm:w-12"
          animate={{
            scale: isHovered ? 1.05 : 1,
            boxShadow: isHovered
              ? "0 10px 30px -10px rgba(0,0,0,0.2)"
              : "0 0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <HugeiconsIcon icon={AtIcon} className="h-5 w-5 text-foreground/80" />
        </motion.div>
      </div>
    </div>
  )
}
