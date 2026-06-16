"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"
import { Header } from "@/components/header"

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
      colSpan: "md:col-span-7",
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
      colSpan: "md:col-span-5",
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
      colSpan: "md:col-span-6",
      skills: ["Clerk", "NextAuth", "Vercel", "Cloudinary", "Vercel Blob"],
    },
    {
      title: "Development Tools",
      colSpan: "md:col-span-6",
      skills: ["Git", "GitHub", "VS Code", "AI IDE"],
    },
    {
      title: "AI & Productivity",
      colSpan: "md:col-span-12",
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
          className="grid grid-cols-1 gap-6 md:grid-cols-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-black/8 bg-black/2 p-8 shadow-lg backdrop-blur-[48px] sm:p-10 dark:border-white/6 dark:bg-[#111111]/25 ${category.colSpan}`}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay dark:opacity-[0.12]"
                style={{ backgroundImage: noiseSvg }}
              />

              <div className="relative z-10 flex h-full flex-col gap-8">
                <h2 className="text-2xl font-bold tracking-tight">
                  {category.title}
                </h2>

                <div className="mt-auto flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default rounded-xl border border-foreground/10 bg-background/50 px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm transition-all hover:scale-105 hover:border-foreground/30 hover:bg-background/80 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
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
