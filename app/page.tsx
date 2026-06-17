"use client"

import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion"
import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { BentoCard } from "@/components/bento-card"
import { Footer } from "@/components/footer"
import { HomeDock } from "@/components/home-dock"

// Import our new extracted visual components
import { AboutVisual } from "@/components/bento-visuals/about-visual"
import { PortfolioVisual } from "@/components/bento-visuals/portfolio-visual"
import { ContactVisual } from "@/components/bento-visuals/contact-visual"
import { ToolsVisual } from "@/components/bento-visuals/tools-visual"
import { ResumeVisual } from "@/components/bento-visuals/resume-visual"

export default function Page() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse movement for the glow
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  useEffect(() => {
    // Set initial position to center
    mouseX.set(window.innerWidth / 2)
    mouseY.set(window.innerHeight / 2)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <div className="relative min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      {/* Dynamic Mouse Spotlight */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="absolute h-[30vw] max-h-100 w-[30vw] max-w-100 rounded-full bg-orange-400/20 blur-[100px] md:blur-[100px] dark:bg-blue-500/20"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-350 px-6 pt-6 pb-28">
        <Header />

        {/* Huge Hero Text */}
        <div className="pointer-events-none mb-0 flex justify-center opacity-80 dark:opacity-90">
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredCard || "Heet Viradiya"}
              className="flex text-[8vw] leading-none font-bold tracking-tighter select-none"
            >
              {(hoveredCard || "Heet Viradiya").split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="mr-[-0.05em] inline-block bg-linear-to-b from-foreground via-foreground/90 to-foreground/10 bg-clip-text pr-[0.05em] text-transparent dark:from-white dark:via-white/90 dark:to-white/10"
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.02,
                    ease: "easeOut",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-12 md:grid-rows-[minmax(280px,auto)_minmax(280px,auto)]"
        >
          {/* About */}
          <BentoCard
            title="About"
            href="/about"
            className="group relative sm:col-span-5 md:col-span-4"
            onMouseEnter={() => setHoveredCard("About Me")}
            onMouseLeave={() => setHoveredCard(null)}
            visual={<AboutVisual isHovered={hoveredCard === "About Me"} />}
          />

          {/* Portfolio */}
          <BentoCard
            title="Portfolio"
            href="/portfolio"
            className="group relative sm:col-span-7 md:col-span-8"
            onMouseEnter={() => setHoveredCard("My Work")}
            onMouseLeave={() => setHoveredCard(null)}
            visual={<PortfolioVisual isHovered={hoveredCard === "My Work"} />}
          />

          {/* Contact Card */}
          <BentoCard
            title="Contact"
            href="/contact"
            className="group relative sm:col-span-12 md:col-span-6"
            onMouseEnter={() => setHoveredCard("Let's Talk")}
            onMouseLeave={() => setHoveredCard(null)}
            visual={<ContactVisual isHovered={hoveredCard === "Let's Talk"} />}
          />

          {/* Tools Card */}
          <BentoCard
            title="Stack & Tools"
            href="/stack"
            className="group relative sm:col-span-6 md:col-span-3"
            onMouseEnter={() => setHoveredCard("Stack & Tools")}
            onMouseLeave={() => setHoveredCard(null)}
            visual={<ToolsVisual isHovered={hoveredCard === "Stack & Tools"} />}
          />

          {/* Resume Card */}
          <BentoCard
            title="Resume"
            href="/resume"
            className="group relative sm:col-span-6 md:col-span-3"
            onMouseEnter={() => setHoveredCard("Experience")}
            onMouseLeave={() => setHoveredCard(null)}
            visual={<ResumeVisual isHovered={hoveredCard === "Experience"} />}
          />
        </motion.div>

        <Footer />
      </div>
      <HomeDock />
    </div>
  )
}
