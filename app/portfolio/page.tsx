"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"
import { Header } from "@/components/header"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon, GithubIcon } from "@hugeicons/core-free-icons"

export default function PortfolioPage() {
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
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 200, damping: 20 } },
  }

  const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`

  const projects = [
    {
      title: "LearnOps",
      subtitle: "Academic ERP System",
      description: "Role-based platform with assignment workflows, grading systems, analytics, and automated bulk onboarding.",
      tags: ["Next.js 15", "TypeScript", "MongoDB", "Clerk"],
      github: "https://github.com/Heet115",
      live: "https://heetviradiya.codes"
    },
    {
      title: "CampusClaim",
      subtitle: "Lost & Found Platform",
      description: "Centralized platform with advanced search, dispute resolution, and secure item tracking workflows.",
      tags: ["Next.js 16", "NextAuth", "MongoDB", "Tailwind v4"],
      github: "https://github.com/Heet115",
      live: "https://heetviradiya.codes"
    },
    {
      title: "UnconditionalHelp",
      subtitle: "Community Volunteer Platform",
      description: "Platform connecting people seeking assistance with volunteers and organizations through role-based request management.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Heet115",
      live: "https://heetviradiya.codes"
    },
    {
      title: "Present Perfect",
      subtitle: "AI Gift Recommendations",
      description: "AI-powered platform using Google Generative AI, featuring recipient profiles, saved collections, and card generation.",
      tags: ["Next.js 15", "React 19", "Firebase", "Google AI"],
      github: "https://github.com/Heet115",
      live: "https://heetviradiya.codes"
    },
    {
      title: "FinTrackX",
      subtitle: "Finance Management System",
      description: "Platform for tracking income and expenses with real-time synchronization, analytics, and financial reporting.",
      tags: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Heet115",
      live: "https://heetviradiya.codes"
    },
    {
      title: "RoommateX",
      subtitle: "Roommate Matching Platform",
      description: "Application featuring location-based discovery, real-time messaging, and secure profile management.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/Heet115",
      live: "https://heetviradiya.codes"
    }
  ]

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
          className="absolute h-[30vw] max-h-[400px] w-[30vw] max-w-[400px] rounded-full bg-orange-400/20 blur-[100px] md:blur-[100px] dark:bg-blue-500/20"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-6 pb-8">
        <Header />

        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-6xl">
            My Work
          </h1>
          <p className="text-lg text-muted-foreground">
            A collection of full-stack projects and web applications.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[2rem] border border-black/[0.08] bg-black/[0.02] p-8 shadow-lg backdrop-blur-[48px] dark:border-white/[0.06] dark:bg-[#111111]/25"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay dark:opacity-[0.12]"
                style={{ backgroundImage: noiseSvg }}
              />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="mb-1 text-2xl font-bold tracking-tight transition-colors group-hover:text-foreground/80">
                      {project.title}
                    </h2>
                    <h3 className="text-sm font-medium text-foreground/60">
                      {project.subtitle}
                    </h3>
                  </div>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/50 px-3 py-1.5 text-xs font-medium text-foreground/70 transition-all hover:scale-105 hover:bg-foreground hover:text-background"
                    >
                      Live
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        className="h-3.5 w-3.5"
                      />
                    </a>
                  )}
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 mt-8 flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
                <div className="flex flex-1 flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-foreground/10 bg-background/50 px-3 py-1.5 font-mono text-[11px] tracking-wider text-foreground/70 transition-colors group-hover:border-foreground/20 group-hover:bg-background/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/50 px-3 py-1.5 text-xs font-medium text-foreground/70 transition-all hover:scale-105 hover:bg-foreground hover:text-background"
                    >
                      <HugeiconsIcon
                        icon={GithubIcon}
                        className="h-3.5 w-3.5"
                      />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
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
