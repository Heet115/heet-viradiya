import { motion } from "framer-motion"

export function ResumeVisual({ isHovered }: { isHovered?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6">
      <div className="relative flex h-32 w-12 flex-col items-center sm:h-48">
        {/* The minimal timeline line */}
        <div className="absolute top-0 bottom-0 w-px bg-foreground/10" />

        {/* Animated glowing mask overlaying the line */}
        <motion.div
          className="absolute top-0 w-px bg-foreground"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isHovered ? "100%" : 0,
            opacity: isHovered ? 0.6 : 0,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* 3 simple dots along the line */}
        <div className="absolute inset-0 flex flex-col justify-between py-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`dot-${i}`}
              className="flex w-full items-center justify-center"
              initial={{ scale: 0.5, opacity: 0.2 }}
              animate={{
                scale: isHovered ? 1 : 0.5,
                opacity: isHovered ? 1 : 0.2,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: isHovered ? i * 0.4 : 0,
              }}
            >
              <div className="z-10 h-1.5 w-1.5 rounded-full border border-foreground/50 bg-background" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
