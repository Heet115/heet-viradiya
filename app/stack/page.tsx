"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  BrainCircuitIcon,
  CloudIcon,
  CodeIcon,
  Database01Icon,
  GitBranchIcon,
} from "@hugeicons/core-free-icons"

export default function StackPage() {
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

  const categories = [
    {
      title: "Frontend Development",
      colSpan: "sm:col-span-12 md:col-span-7",
      icon: CodeIcon,
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "Tailwind CSS",
        "Shadcn/UI",
        "React Hook Form",
      ],
    },
    {
      title: "Backend & Database",
      colSpan: "sm:col-span-12 md:col-span-5",
      icon: Database01Icon,
      skills: [
        "Node.js",
        "REST APIs",
        "Server Actions",
        "MongoDB Atlas",
        "Firebase Firestore",
      ],
    },
    {
      title: "Auth & Cloud",
      colSpan: "sm:col-span-6 md:col-span-6",
      icon: CloudIcon,
      skills: ["Clerk", "NextAuth", "Vercel", "Cloudinary", "Vercel Blob"],
    },
    {
      title: "Development Tools",
      colSpan: "sm:col-span-6 md:col-span-6",
      icon: GitBranchIcon,
      skills: ["Git", "GitHub", "VS Code", "AI IDE"],
    },
    {
      title: "AI & Productivity",
      colSpan: "sm:col-span-12 md:col-span-12",
      icon: BrainCircuitIcon,
      skills: [
        "Google Generative AI",
        "AI-Assisted Development",
        "Prompt Engineering",
      ],
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
            Stack & Tools
          </h1>
          <p className="text-lg text-muted-foreground">
            The technologies and software I use to build things.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-black/6 bg-black/[0.025] p-7 shadow-sm backdrop-blur-2xl transition-shadow duration-300 hover:shadow-[0_22px_60px_-42px_rgba(0,0,0,0.75)] sm:p-9 dark:border-white/8 dark:bg-white/[0.04] ${category.colSpan}`}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.08]"
                style={{ backgroundImage: noiseSvg }}
              />

              <div className="relative z-10 flex h-full flex-col gap-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">
                      {category.title}
                    </h2>
                    <div className="mt-3 h-px w-14 bg-foreground/18 transition-all duration-300 group-hover:w-24 group-hover:bg-foreground/35" />
                  </div>

                  <motion.div
                    className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-foreground/8 bg-black/[0.025] text-foreground shadow-sm"
                    animate={{
                      rotate: [0, 0, -2, 2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.08, rotate: 0 }}
                  >
                    <span className="absolute inset-1 rounded-[0.85rem] bg-foreground/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <HugeiconsIcon
                      icon={category.icon}
                      className="relative h-5 w-5"
                    />
                  </motion.div>
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ y: 0 }}
                      whileHover={{ y: -3 }}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 24,
                        delay: index * 0.01,
                      }}
                      className="cursor-default rounded-xl border border-foreground/8 bg-background/55 px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm transition-colors hover:border-foreground/25 hover:bg-background/90 hover:text-foreground"
                    >
                      {skill}
                    </motion.span>
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
