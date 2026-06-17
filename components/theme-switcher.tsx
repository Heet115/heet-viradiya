"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HugeiconsIcon } from "@hugeicons/react"
import { Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTheme } from "next-themes"
import { flushSync } from "react-dom"

const THEME_TRANSITION_CSS = `
::view-transition-group(root) {
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}
::view-transition-new(root) {
  animation-name: theme-reveal-light;
  filter: blur(2px);
}
::view-transition-old(root),
.dark::view-transition-old(root) {
  animation: none;
  z-index: -1;
}
.dark::view-transition-new(root) {
  animation-name: theme-reveal-dark;
  filter: blur(2px);
}
@keyframes theme-reveal-dark {
  from {
    clip-path: circle(0% at 0% 0%);
    filter: blur(8px);
  }
  50% { filter: blur(4px); }
  to {
    clip-path: circle(150% at 0% 0%);
    filter: blur(0px);
  }
}
@keyframes theme-reveal-light {
  from {
    clip-path: circle(0% at 0% 0%);
    filter: blur(8px);
  }
  50% { filter: blur(4px); }
  to {
    clip-path: circle(150% at 0% 0%);
    filter: blur(0px);
  }
}
`

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const toggleTheme = useCallback(() => {
    // Read directly from the DOM to prevent stale state issues in keyboard listeners
    const isDarkNow = document.documentElement.classList.contains("dark")
    const nextTheme = isDarkNow ? "light" : "dark"

    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => void
    }

    // Bypass view transition if unsupported or on mobile devices (< 768px)
    if (
      typeof window === "undefined" ||
      !doc.startViewTransition ||
      window.innerWidth < 768
    ) {
      setTheme(nextTheme)
      return
    }

    let styleElement = document.getElementById("theme-transition-styles")
    if (!styleElement) {
      styleElement = document.createElement("style")
      styleElement.id = "theme-transition-styles"
      document.head.appendChild(styleElement)
    }
    styleElement.textContent = THEME_TRANSITION_CSS

    doc.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme)
      })
    })
  }, [setTheme])

  // Prevent hydration errors
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  // Global "D" hotkey for toggling theme
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.repeat) {
        return
      }

      if (e.ctrlKey || e.metaKey || e.altKey) {
        return
      }

      if (e.key.toLowerCase() !== "d") {
        return
      }

      if (isTypingTarget(e.target)) {
        return
      }

      toggleTheme()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleTheme])

  if (!mounted) {
    return <div className="h-8 w-8" /> // Placeholder to prevent layout shift
  }

  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger asChild>
        <button
          onClick={toggleTheme}
          className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-foreground/5 text-muted-foreground transition-all hover:scale-110 hover:bg-foreground/10 hover:text-foreground"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDark ? "dark" : "light"}
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="absolute flex items-center justify-center"
            >
              {isDark ? (
                <HugeiconsIcon icon={Moon02Icon} className="h-4 w-4" />
              ) : (
                <HugeiconsIcon icon={Sun01Icon} className="h-4 w-4" />
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="mt-1 flex items-center gap-2 rounded-lg bg-foreground px-3 py-1.5 text-xs text-background shadow-xl"
      >
        <span>Toggle theme</span>
        <kbd className="rounded bg-background/20 px-1.5 py-0.5 font-mono text-[10px] uppercase">
          D
        </kbd>
      </TooltipContent>
    </Tooltip>
  )
}
