import { motion } from "framer-motion"

export function PortfolioVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute h-32 w-32 rounded-full bg-foreground/5 blur-3xl transition-all duration-1000 ease-out sm:h-40 sm:w-40"
        style={{
          transform: isHovered ? "scale(1.2)" : "scale(1)",
          opacity: isHovered ? 1 : 0.3,
        }}
      />

      {/* Cards container */}
      <div
        className="relative flex h-full w-full items-center justify-center"
        style={{ perspective: 1000 }}
      >
        {/* Bottom Card */}
        <motion.div
          className="absolute h-20 w-32 rounded-xl border border-foreground/10 bg-background/40 shadow-lg backdrop-blur-md sm:h-24 sm:w-40"
          initial={{ y: 0, rotateZ: 0, scale: 0.9, opacity: 0.5 }}
          animate={{
            y: isHovered ? -20 : 0,
            rotateZ: isHovered ? -8 : 0,
            scale: isHovered ? 0.95 : 0.9,
            opacity: isHovered ? 0.6 : 0.5,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Middle Card */}
        <motion.div
          className="absolute h-20 w-32 rounded-xl border border-foreground/10 bg-background/60 shadow-xl backdrop-blur-md sm:h-24 sm:w-40"
          initial={{ y: 0, rotateZ: 0, scale: 0.95, opacity: 0.7 }}
          animate={{
            y: isHovered ? -10 : 0,
            rotateZ: isHovered ? -4 : 0,
            scale: isHovered ? 1 : 0.95,
            opacity: isHovered ? 0.8 : 0.7,
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        />

        {/* Top Card */}
        <motion.div
          className="absolute flex h-20 w-32 items-center justify-center rounded-xl border border-foreground/20 bg-background/80 shadow-2xl backdrop-blur-xl sm:h-24 sm:w-40"
          initial={{ y: 0, rotateZ: 0, scale: 1 }}
          animate={{
            y: isHovered ? 0 : 0,
            rotateZ: isHovered ? 2 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {/* Subtle line details on top card */}
          <div className="flex w-full flex-col gap-2 px-4">
            <div className="h-1 w-1/3 rounded-full bg-foreground/20" />
            <div className="h-1 w-2/3 rounded-full bg-foreground/10" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
