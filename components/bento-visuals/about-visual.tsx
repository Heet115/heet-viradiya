"use client"

import { motion, useReducedMotion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function AboutVisual({ isHovered }: { isHovered: boolean }) {
  const shouldReduceMotion = useReducedMotion()
  const active = isHovered && !shouldReduceMotion

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden p-6">
      <motion.div
        className="relative h-[10rem] w-[10rem] sm:h-[12rem] sm:w-[12rem]"
        animate={
          shouldReduceMotion
            ? undefined
            : active
              ? { y: -5, rotate: -1, scale: 1.03 }
              : { y: [0, -4, 0], rotate: [0, 0.7, 0] }
        }
        transition={
          active
            ? { type: "spring", stiffness: 160, damping: 22 }
            : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <motion.div
          className="absolute inset-6 rounded-full border border-foreground/10 bg-background/18 shadow-sm"
          animate={{
            opacity: active ? 0.78 : 0.42,
            scale: active ? 1.05 : 1,
          }}
          transition={{ duration: 0.7, ease }}
        />

        <motion.div
          className="absolute inset-0 rounded-full border border-foreground/8"
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: active ? 22 : [0, 12, 0], opacity: active ? 0.42 : 0.18 }
          }
          transition={
            active
              ? { duration: 0.8, ease }
              : { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }
        />

        <svg
          viewBox="0 0 180 180"
          className="relative h-full w-full overflow-visible text-foreground"
        >
          <motion.path
            d="M59 121V59"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            className="opacity-40"
            initial={false}
            animate={{ pathLength: active ? 1 : 0.72, opacity: active ? 0.68 : 0.38 }}
            transition={{ duration: 0.7, ease }}
          />
          <motion.path
            d="M121 59v62"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            className="opacity-40"
            initial={false}
            animate={{ pathLength: active ? 1 : 0.72, opacity: active ? 0.68 : 0.38 }}
            transition={{ duration: 0.7, ease, delay: 0.04 }}
          />
          <motion.path
            d="M64 93h42l17-34"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="opacity-30"
            initial={false}
            animate={{
              pathLength: active ? 1 : 0.54,
              opacity: active ? 0.56 : 0.26,
            }}
            transition={{ duration: 0.9, ease, delay: 0.08 }}
          />
          <motion.circle
            cx="121"
            cy="59"
            r="4"
            fill="currentColor"
            className="opacity-35"
            animate={{
              scale: active ? 1.18 : [1, 1.08, 1],
              opacity: active ? 0.62 : 0.32,
            }}
            transition={
              active
                ? { duration: 0.5, ease }
                : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
            }
          />
        </svg>
      </motion.div>
    </div>
  )
}
