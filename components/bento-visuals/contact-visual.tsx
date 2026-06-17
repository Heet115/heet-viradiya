"use client"

import { motion, useReducedMotion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function ContactVisual({ isHovered }: { isHovered: boolean }) {
  const shouldReduceMotion = useReducedMotion()
  const active = isHovered && !shouldReduceMotion

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden p-6">
      <motion.div
        className="relative h-[9.5rem] w-[15rem] sm:h-[11rem] sm:w-[19rem]"
        animate={
          shouldReduceMotion
            ? undefined
            : active
              ? { y: -5, scale: 1.02 }
              : { y: [0, -3, 0] }
        }
        transition={
          active
            ? { type: "spring", stiffness: 160, damping: 22 }
            : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <svg
          viewBox="0 0 260 150"
          className="h-full w-full overflow-visible text-foreground"
        >
          <motion.path
            d="M46 96C78 36 125 36 130 76c6 46 70 38 90-16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
            className="opacity-18"
            initial={false}
            animate={{
              pathLength: active ? 1 : 0.62,
              opacity: active ? 0.46 : 0.18,
            }}
            transition={{ duration: 0.9, ease }}
          />

          {[46, 130, 220].map((cx, index) => (
            <motion.circle
              key={cx}
              cx={cx}
              cy={index === 0 ? 96 : index === 1 ? 76 : 60}
              r={index === 1 ? 5 : 4}
              fill="currentColor"
              className="opacity-30"
              animate={{
                scale: active ? 1.18 : [1, 1.08, 1],
                opacity: active ? 0.56 : 0.28,
              }}
              transition={
                active
                  ? { duration: 0.5, ease, delay: index * 0.06 }
                  : {
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.32,
                    }
              }
            />
          ))}

          <motion.path
            d="M92 104h68"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
            className="opacity-14"
            initial={false}
            animate={{
              pathLength: active ? 1 : 0.24,
              opacity: active ? 0.3 : 0.12,
            }}
            transition={{ duration: 0.75, ease, delay: 0.08 }}
          />
          <motion.path
            d="M105 116h42"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
            className="opacity-10"
            initial={false}
            animate={{
              pathLength: active ? 1 : 0.18,
              opacity: active ? 0.24 : 0.1,
            }}
            transition={{ duration: 0.75, ease, delay: 0.13 }}
          />
        </svg>

        <motion.div
          className="absolute top-[2.6rem] left-[2.6rem] h-12 w-12 rounded-full border border-foreground/8"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: active ? 1.4 : [1, 1.16, 1],
                  opacity: active ? 0.18 : [0.08, 0.16, 0.08],
                }
          }
          transition={
            active
              ? { duration: 0.7, ease }
              : { duration: 5.8, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </motion.div>
    </div>
  )
}
