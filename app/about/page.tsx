"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"
import { Header } from "@/components/header"

export default function AboutPage() {
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-12"
        >
          {/* Card 1: Professional Summary */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="group relative md:col-span-12 overflow-hidden rounded-[2rem] border border-black/[0.08] dark:border-white/[0.06] bg-black/[0.02] dark:bg-[#111111]/25 p-8 sm:p-12 shadow-lg backdrop-blur-[48px]"
          >
            <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.12] pointer-events-none mix-blend-overlay" style={{ backgroundImage: noiseSvg }} />
            <div className="relative z-10 flex flex-col gap-6 max-w-4xl">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter">Heet Viradiya</h1>
              <h2 className="text-xl sm:text-2xl font-medium text-foreground/70">Full-Stack Developer</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Specializing in building scalable web applications with Next.js, React, TypeScript, MongoDB, and Firebase. 
                Designed and developed products ranging from Academic ERP systems and AI-powered applications to finance 
                management platforms and campus solutions. Passionate about transforming complex problems into practical, user-focused software products.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Experience */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="group relative md:col-span-6 overflow-hidden rounded-[2rem] border border-black/[0.08] dark:border-white/[0.06] bg-black/[0.02] dark:bg-[#111111]/25 p-8 shadow-lg backdrop-blur-[48px]"
          >
            <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.12] pointer-events-none mix-blend-overlay" style={{ backgroundImage: noiseSvg }} />
            <div className="relative z-10 flex flex-col gap-8 h-full">
              <h3 className="text-xl font-bold tracking-tight">Experience</h3>
              
              <div className="relative pl-6 flex flex-col gap-8">
                {/* Timeline Line */}
                <div className="absolute left-0 top-2 bottom-0 w-px bg-foreground/10" />
                <motion.div
                  className="absolute left-0 top-2 w-px bg-foreground"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                <div className="relative group/item">
                  <div className="absolute -left-[27.5px] top-1.5 h-2 w-2 rounded-full border border-foreground bg-background z-10 transition-transform group-hover/item:scale-150" />
                  <h4 className="text-sm font-bold">Web Development Intern</h4>
                  <p className="text-xs text-muted-foreground mb-2">AAN Web Solution</p>
                  <p className="text-sm text-foreground/70">Worked with React, Firebase, Git, GitHub, and Shadcn/UI in a collaborative development environment.</p>
                </div>

                <div className="relative group/item">
                  <div className="absolute -left-[27.5px] top-1.5 h-2 w-2 rounded-full border border-foreground bg-background z-10 transition-transform group-hover/item:scale-150" />
                  <h4 className="text-sm font-bold">Web Development Intern</h4>
                  <p className="text-xs text-muted-foreground mb-2">Strats360 Technolabs LLP</p>
                  <p className="text-sm text-foreground/70">Gained practical experience in HTML, CSS, JavaScript, Tailwind CSS, and modern web development workflows.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Education */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="group relative md:col-span-6 overflow-hidden rounded-[2rem] border border-black/[0.08] dark:border-white/[0.06] bg-black/[0.02] dark:bg-[#111111]/25 p-8 shadow-lg backdrop-blur-[48px]"
          >
            <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.12] pointer-events-none mix-blend-overlay" style={{ backgroundImage: noiseSvg }} />
            <div className="relative z-10 flex flex-col gap-8 h-full">
              <h3 className="text-xl font-bold tracking-tight">Education</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start border-b border-foreground/10 pb-6 group/item">
                  <div>
                    <h4 className="text-sm font-bold transition-colors group-hover/item:text-foreground/80">Gyanmanjari Innovative University</h4>
                    <p className="text-sm text-foreground/70 mt-1">Diploma in Information Technology</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-foreground/5 px-2 py-1 rounded-md">2023–26</span>
                </div>

                <div className="flex justify-between items-start group/item">
                  <div>
                    <h4 className="text-sm font-bold transition-colors group-hover/item:text-foreground/80">Bachelor&apos;s Degree</h4>
                    <p className="text-sm text-foreground/70 mt-1">Information Technology</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-foreground/5 px-2 py-1 rounded-md">Starting 2026</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Strengths & Languages */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="group relative md:col-span-12 overflow-hidden rounded-[2rem] border border-black/[0.08] dark:border-white/[0.06] bg-black/[0.02] dark:bg-[#111111]/25 p-8 shadow-lg backdrop-blur-[48px]"
          >
            <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.12] pointer-events-none mix-blend-overlay" style={{ backgroundImage: noiseSvg }} />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold tracking-tight">Core Strengths</h3>
                <div className="flex flex-wrap gap-2">
                  {["Full-Stack Development", "System Design Thinking", "Problem Solving", "Product Development", "Team Collaboration", "Continuous Learning"].map(strength => (
                    <div key={strength} className="px-4 py-2 rounded-full border border-foreground/10 bg-background/50 text-sm font-medium transition-colors hover:bg-foreground hover:text-background cursor-default">
                      {strength}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold tracking-tight">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["English", "Gujarati", "Hindi"].map(lang => (
                    <div key={lang} className="px-4 py-2 rounded-full border border-foreground/10 bg-background/50 text-sm font-medium transition-colors hover:bg-foreground hover:text-background cursor-default">
                      {lang}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
        
        {/* Minimal Footer */}
        <div className="mt-24 pb-2 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[10px] tracking-[0.3em] text-foreground/30 font-mono uppercase">
            © {new Date().getFullYear()} Heet Viradiya
          </span>
        </div>
      </div>
    </div>
  )
}
