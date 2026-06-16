"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function PageProgress() {
  const pathname = usePathname()
  const barRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    // Reset and kick off progress
    bar.style.transition = "none"
    bar.style.width = "0%"
    bar.style.opacity = "1"

    // Slight delay to let paint happen, then animate
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = "width 0.4s ease"
        bar.style.width = "70%"
      })
    })

    // Complete the bar
    timerRef.current = setTimeout(() => {
      bar.style.transition = "width 0.3s ease"
      bar.style.width = "100%"

      // Fade out after completing
      setTimeout(() => {
        bar.style.transition = "opacity 0.4s ease"
        bar.style.opacity = "0"
      }, 300)
    }, 400)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [pathname])

  return (
    <div className="pointer-events-none fixed top-0 right-0 left-0 z-[9999] h-[2px]">
      <div
        ref={barRef}
        className="h-full bg-foreground"
        style={{ width: "0%", opacity: 0 }}
      />
    </div>
  )
}
