"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"
import { Header } from "@/components/header"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Download01Icon,
  Location01Icon,
  CallIcon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"

export default function ResumePage() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse movement for the glow
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  useEffect(() => {
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
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 200, damping: 20 },
    },
  }

  const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`

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

      <div className="relative z-10 mx-auto max-w-250 px-6 pt-6 pb-8">
        <Header />

        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-linear-to-b from-foreground to-foreground/50 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-6xl">
            Resume
          </h1>
          <p className="text-lg text-muted-foreground">
            My professional experience and academic background.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-black/2 p-8 shadow-lg backdrop-blur-[48px] sm:p-12 md:p-16 dark:border-white/6 dark:bg-[#111111]/25"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay dark:opacity-[0.12]"
            style={{ backgroundImage: noiseSvg }}
          />

          <div className="relative z-10 flex flex-col gap-16">
            {/* Header Section */}
            <div className="flex flex-col items-start justify-between gap-6 border-b border-foreground/10 pb-10 sm:flex-row sm:items-end">
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  Heet Viradiya
                </h1>
                <p className="text-xl font-medium text-foreground/70">
                  Full-Stack Developer
                </p>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <HugeiconsIcon icon={Location01Icon} className="h-4 w-4" />{" "}
                    Bhavnagar, India
                  </span>
                  <span className="flex items-center gap-2">
                    <HugeiconsIcon icon={CallIcon} className="h-4 w-4" /> +91
                    6355410801
                  </span>
                  <span className="flex items-center gap-2">
                    <HugeiconsIcon icon={Mail01Icon} className="h-4 w-4" />{" "}
                    hpviradiya05@gmail.com
                  </span>
                </div>
              </div>
              <a
                href="/Resume.pdf"
                download
                className="group flex h-12 items-center gap-2 rounded-full border border-foreground/10 bg-background/50 px-6 font-bold text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Download PDF
                <HugeiconsIcon
                  icon={Download01Icon}
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-1"
                />
              </a>
            </div>

            {/* Projects Section */}
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Selected Projects
              </h2>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold">LearnOps</h3>
                  <p className="mb-1 font-mono text-xs text-muted-foreground">
                    Next.js 15, TypeScript, MongoDB, Clerk
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    Role-based Academic ERP platform with assignment workflows,
                    grading systems, analytics, and automated bulk onboarding.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold">CampusClaim</h3>
                  <p className="mb-1 font-mono text-xs text-muted-foreground">
                    Next.js 16, NextAuth, MongoDB
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    Centralized platform with advanced search, dispute
                    resolution, and secure item tracking workflows.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold">Present Perfect</h3>
                  <p className="mb-1 font-mono text-xs text-muted-foreground">
                    React 19, Firebase, Google AI
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    AI-powered gift recommendation platform using Google
                    Generative AI, featuring recipient profiles and saved
                    collections.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold">UnconditionalHelp</h3>
                  <p className="mb-1 font-mono text-xs text-muted-foreground">
                    Next.js, Tailwind CSS
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    Platform connecting people seeking assistance with
                    volunteers and organizations through role-based request
                    management.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Skills Section */}
            <div className="grid grid-cols-1 gap-12 border-t border-foreground/10 pt-10 sm:grid-cols-2">
              <div className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold tracking-tight">Education</h2>
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-base font-bold">
                      Bachelor&apos;s Degree in IT
                    </h3>
                    <p className="mt-1 text-sm text-foreground/70">
                      Starting 2026
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold">Diploma in IT</h3>
                    <p className="mt-1 text-sm text-foreground/70">
                      Gyanmanjari Innovative University (2023–2026)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold tracking-tight">
                  Core Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Node.js",
                    "MongoDB",
                    "Firebase",
                    "Tailwind CSS",
                    "Git",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-foreground/10 bg-background/50 px-3 py-1.5 font-mono text-[11px] tracking-wider text-foreground/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Minimal Footer */}
        <div className="pointer-events-none mt-24 flex items-center justify-center pb-2 select-none">
          <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/30 uppercase">
            © {new Date().getFullYear()} Heet Viradiya
          </span>
        </div>
      </div>
    </div>
  )
}
