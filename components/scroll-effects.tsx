"use client"

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  once?: boolean
  amount?: number
  scale?: number
}

type ScrollParallaxProps = {
  children: React.ReactNode
  className?: string
  distance?: number
  rotate?: number
  scaleRange?: [number, number]
  opacityRange?: [number, number]
}

function getRevealOffset(
  direction: NonNullable<ScrollRevealProps["direction"]>,
  distance: number
) {
  if (direction === "left") return { x: distance, y: 0 }
  if (direction === "right") return { x: -distance, y: 0 }
  if (direction === "down") return { x: 0, y: -distance }
  if (direction === "none") return { x: 0, y: 0 }

  return { x: 0, y: distance }
}

export function MotionBackdrop() {
  const shouldReduceMotion = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { damping: 48, stiffness: 360 })
  const smoothY = useSpring(mouseY, { damping: 48, stiffness: 360 })
  const { scrollYProgress } = useScroll()
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -180])
  const sweepY = useTransform(scrollYProgress, [0, 1], [-120, 120])
  const sweepRotate = useTransform(scrollYProgress, [0, 1], [-6, 7])
  const sweepScale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.96, 1.08, 1]
  )
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${smoothX}px ${smoothY}px, var(--motion-spotlight), transparent 72%)`

  useEffect(() => {
    if (shouldReduceMotion) return

    mouseX.set(window.innerWidth / 2)
    mouseY.set(window.innerHeight / 2)

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY, shouldReduceMotion])

  if (shouldReduceMotion) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[radial-gradient(circle_at_50%_20%,var(--motion-spotlight),transparent_58%)]"
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: spotlight }}
      />
      <motion.div
        className="absolute inset-[-24%] opacity-[0.08] dark:opacity-[0.12]"
        style={{ y: gridY }}
      >
        <div className="h-full w-full bg-[linear-gradient(to_right,var(--motion-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--motion-grid)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-[-18%] left-[-18%] h-56 bg-linear-to-r from-transparent via-orange-300/14 to-transparent blur-3xl dark:via-sky-400/16"
        style={{ y: sweepY, rotate: sweepRotate, scale: sweepScale }}
      />
    </div>
  )
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 44,
  once = false,
  amount = 0.22,
  scale = 0.96,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  const offset = getRevealOffset(direction, distance)

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "0px 0px -12% 0px" }}
      variants={{
        hidden: {
          opacity: 0,
          x: offset.x,
          y: offset.y,
          scale,
          filter: "blur(14px)",
        },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            delay,
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  )
}

export function ScrollParallax({
  children,
  className,
  distance = 64,
  rotate = 0,
  scaleRange = [1, 1],
  opacityRange = [1, 1],
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const rawY = useTransform(scrollYProgress, [0, 1], [distance, -distance])
  const rawRotate = useTransform(scrollYProgress, [0, 1], [-rotate, rotate])
  const rawScale = useTransform(scrollYProgress, [0, 1], scaleRange)
  const rawOpacity = useTransform(scrollYProgress, [0, 1], opacityRange)
  const y = useSpring(rawY, { stiffness: 120, damping: 28, mass: 0.35 })
  const rotateValue = useSpring(rawRotate, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  })

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        y,
        rotate: rotateValue,
        scale: rawScale,
        opacity: rawOpacity,
      }}
    >
      {children}
    </motion.div>
  )
}
