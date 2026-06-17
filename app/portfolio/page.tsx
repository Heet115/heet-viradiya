"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon, GithubIcon } from "@hugeicons/core-free-icons"
import { Footer } from "@/components/footer"

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
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 200, damping: 20 },
    },
  }

  const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`

  const projects = [
    {
      title: "LearnOps",
      subtitle: "Academic ERP System",
      description:
        "Role-based platform with assignment workflows, grading systems, analytics, and automated bulk onboarding.",
      tags: ["Next.js 15", "TypeScript", "MongoDB", "Clerk"],
      github: "https://github.com/Heet115/learnops",
      live: "https://learnops.vercel.app",
      image: "/projects/learnops.png",
    },
    {
      title: "CampusClaim",
      subtitle: "Lost & Found Platform",
      description:
        "Centralized platform with advanced search, dispute resolution, and secure item tracking workflows.",
      tags: ["Next.js 16", "NextAuth", "MongoDB", "Tailwind v4"],
      github: "https://github.com/Heet115/campusclaim",
      live: "https://campusclaim.vercel.app",
      image: "/projects/campusclaim.png",
    },
    {
      title: "UnconditionalHelp",
      subtitle: "Community Volunteer Platform",
      description:
        "Platform connecting people seeking assistance with volunteers and organizations through role-based request management.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Heet115/unconditionalhelp",
      live: "https://unconditionalhelp.vercel.app",
      image: "/projects/unconditionalhelp.png",
    },
    {
      title: "Present Perfect",
      subtitle: "AI Gift Recommendations",
      description:
        "AI-powered platform using Google Generative AI, featuring recipient profiles, saved collections, and card generation.",
      tags: ["Next.js 15", "React 19", "Firebase", "Google AI"],
      github: "https://github.com/Heet115/present-perfect",
      live: "https://presentperfect.vercel.app",
      image: "/projects/present-perfect.png",
    },
    {
      title: "FinTrackX",
      subtitle: "Finance Management System",
      description:
        "Platform for tracking income and expenses with real-time synchronization, analytics, and financial reporting.",
      tags: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Heet115/FinTrackX",
      live: "https://fin-trackx.vercel.app",
      image: "/projects/fintrackx.png",
    },
    {
      title: "RoommateX",
      subtitle: "Roommate Matching Platform",
      description:
        "Application featuring location-based discovery, real-time messaging, and secure profile management.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/Heet115/roomily",
      live: "https://roomily.vercel.app",
      image: "/projects/roomily.png",
    },
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
          className="absolute h-[30vw] max-h-100 w-[30vw] max-w-100 rounded-full bg-orange-400/20 blur-[100px] md:blur-[100px] dark:bg-blue-500/20"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-350 px-6 pt-6 pb-8">
        <Header />

        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-linear-to-b from-foreground to-foreground/50 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-6xl">
            My Work
          </h1>
          <p className="text-lg text-muted-foreground">
            A collection of full-stack projects and web applications.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-black/6 bg-black/[0.025] p-3 shadow-sm backdrop-blur-2xl transition-shadow duration-300 hover:shadow-[0_22px_60px_-42px_rgba(0,0,0,0.75)] dark:border-white/8 dark:bg-white/[0.04]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.08]"
                style={{ backgroundImage: noiseSvg }}
              />

              <div className="relative z-10 overflow-hidden rounded-[1.15rem] border border-foreground/8 bg-foreground/5">
                <div className="flex h-8 items-center gap-1.5 border-b border-foreground/8 bg-background/70 px-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  <span className="ml-2 h-3 w-18 rounded-full bg-foreground/8" />
                </div>

                <div className="relative aspect-[2940/1440] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    priority={index < 2}
                    sizes="(min-width: 1025px) 33vw, (min-width: 700px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/75 via-background/10 to-transparent opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100" />

                  <div className="absolute right-3 bottom-3 flex translate-y-0 items-center gap-2 opacity-100 transition-all duration-300 sm:opacity-80 sm:group-focus-within:opacity-100 sm:group-hover:opacity-100">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="border-foregound/10 flex h-9 items-center gap-2 rounded-full border bg-background/85 px-3 text-xs font-semibold text-foreground shadow-sm backdrop-blur-xl transition-colors hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
                      >
                        Live
                        <HugeiconsIcon
                          icon={ArrowUpRight01Icon}
                          className="h-3.5 w-3.5"
                        />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-9 items-center gap-2 rounded-full border border-foreground/10 bg-background/85 px-3 text-xs font-semibold text-foreground shadow-sm backdrop-blur-xl transition-colors hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
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
              </div>

              <div className="relative z-10 flex flex-1 flex-col gap-5 px-3 pt-5 pb-3">
                <div>
                  <h2 className="mb-1 text-2xl font-bold tracking-tight transition-colors group-hover:text-foreground/80">
                    {project.title}
                  </h2>
                  <h3 className="text-sm font-medium text-foreground/60">
                    {project.subtitle}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-foreground/8 bg-background/55 px-3 py-1.5 font-mono text-[11px] tracking-wider text-foreground/70 transition-colors group-hover:border-foreground/20 group-hover:bg-background/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Footer />
      </div>
    </div>
  )
}
