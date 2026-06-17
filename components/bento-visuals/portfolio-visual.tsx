"use client"

import { motion, useReducedMotion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const tiles = [
  { x: -42, y: 8, width: 76, height: 54, rotate: -5, opacity: 0.2 },
  { x: 0, y: -8, width: 94, height: 62, rotate: 0, opacity: 0.34 },
  { x: 48, y: 14, width: 74, height: 50, rotate: 5, opacity: 0.18 },
]

export function PortfolioVisual({ isHovered }: { isHovered: boolean }) {
  const shouldReduceMotion = useReducedMotion()
  const active = isHovered && !shouldReduceMotion

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden p-6">
      <div
        className="relative h-[10.5rem] w-[18rem] sm:h-[12.5rem] sm:w-[24rem]"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 14%, black 86%, transparent)",
        }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 h-px w-[17rem] origin-center bg-foreground/14 sm:w-[22rem]"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: "-50%",
                  y: "-50%",
                  rotate: active ? -4 : [-2, 2, -2],
                  opacity: active ? 0.42 : 0.18,
                }
          }
          transition={
            active
              ? { duration: 0.65, ease }
              : { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }
        />

        {tiles.map((tile, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2 overflow-hidden rounded-[1.15rem] border border-foreground/10 bg-background/18 shadow-sm"
            style={{
              width: tile.width,
              height: tile.height,
              marginLeft: tile.x - tile.width / 2,
              marginTop: tile.y - tile.height / 2,
            }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: active ? index * 5 - 5 : [0, index % 2 === 0 ? -3 : 3, 0],
                    y: active ? -index * 2 : [0, index === 1 ? -4 : 3, 0],
                    rotate: active ? tile.rotate * 0.45 : tile.rotate,
                    opacity: active ? tile.opacity + 0.28 : tile.opacity,
                    scale: active && index === 1 ? 1.06 : 1,
                  }
            }
            transition={
              active
                ? { duration: 0.72, ease, delay: index * 0.04 }
                : {
                    duration: 6 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.35,
                  }
            }
          >
            <motion.div
              className="absolute inset-x-3 top-3 h-1 rounded-full bg-foreground/16"
              animate={{ opacity: active ? 0.5 : 0.22 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-x-3 bottom-3 h-px origin-left bg-foreground/28"
              animate={{ scaleX: active ? 1 : 0.36, opacity: active ? 0.4 : 0.14 }}
              transition={{ duration: 0.8, ease, delay: index * 0.04 }}
            />
          </motion.div>
        ))}

        <motion.div
          className="absolute top-1/2 left-1/2 h-1.5 w-1.5 rounded-full bg-foreground/40"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: active ? 64 : [-72, 72, -72],
                  y: active ? -34 : [-12, 12, -12],
                  opacity: active ? 0.62 : [0.18, 0.44, 0.18],
                }
          }
          transition={
            active
              ? { duration: 0.75, ease }
              : { duration: 8.5, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>
    </div>
  )
}
