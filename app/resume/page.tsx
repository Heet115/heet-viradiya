"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"
import { Header } from "@/components/header"
import { HugeiconsIcon } from "@hugeicons/react"
import { Download01Icon, Location01Icon, CallIcon, Mail01Icon } from "@hugeicons/core-free-icons"

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
          className="absolute h-[30vw] max-h-[400px] w-[30vw] max-w-[400px] rounded-full bg-orange-400/20 blur-[100px] md:blur-[100px] dark:bg-blue-500/20"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1000px] px-6 pt-6 pb-8">
        <Header />

        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent mb-4">Resume</h1>
          <p className="text-lg text-muted-foreground">My professional experience and academic background.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative overflow-hidden rounded-[2rem] border border-black/[0.08] dark:border-white/[0.06] bg-black/[0.02] dark:bg-[#111111]/25 p-8 sm:p-12 md:p-16 shadow-lg backdrop-blur-[48px]"
        >
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.12] pointer-events-none mix-blend-overlay" style={{ backgroundImage: noiseSvg }} />
          
          <div className="relative z-10 flex flex-col gap-16">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-foreground/10 pb-10">
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Heet Viradiya</h1>
                <p className="text-xl text-foreground/70 font-medium">Full-Stack Developer</p>
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground mt-2 font-mono">
                  <span className="flex items-center gap-2"><HugeiconsIcon icon={Location01Icon} className="h-4 w-4" /> Bhavnagar, India</span>
                  <span className="flex items-center gap-2"><HugeiconsIcon icon={CallIcon} className="h-4 w-4" /> +91 6355410801</span>
                  <span className="flex items-center gap-2"><HugeiconsIcon icon={Mail01Icon} className="h-4 w-4" /> hpviradiya05@gmail.com</span>
                </div>
              </div>
              <a 
                href="/resume.pdf" 
                download
                className="group flex h-12 items-center gap-2 rounded-full border border-foreground/10 bg-background/50 px-6 font-bold text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Download PDF
                <HugeiconsIcon icon={Download01Icon} className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-0.5" />
              </a>
            </div>



            {/* Projects Section */}
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl font-bold tracking-tight">Selected Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold">LearnOps</h3>
                  <p className="text-xs text-muted-foreground font-mono mb-1">Next.js 15, TypeScript, MongoDB, Clerk</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">Role-based Academic ERP platform with assignment workflows, grading systems, analytics, and automated bulk onboarding.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold">CampusClaim</h3>
                  <p className="text-xs text-muted-foreground font-mono mb-1">Next.js 16, NextAuth, MongoDB</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">Centralized platform with advanced search, dispute resolution, and secure item tracking workflows.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold">Present Perfect</h3>
                  <p className="text-xs text-muted-foreground font-mono mb-1">React 19, Firebase, Google AI</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">AI-powered gift recommendation platform using Google Generative AI, featuring recipient profiles and saved collections.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold">UnconditionalHelp</h3>
                  <p className="text-xs text-muted-foreground font-mono mb-1">Next.js, Tailwind CSS</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">Platform connecting people seeking assistance with volunteers and organizations through role-based request management.</p>
                </div>
              </div>
            </div>

            {/* Education & Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-foreground/10 pt-10">
              <div className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold tracking-tight">Education</h2>
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-base font-bold">Bachelor&apos;s Degree in IT</h3>
                    <p className="text-sm text-foreground/70 mt-1">Starting 2026</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold">Diploma in IT</h3>
                    <p className="text-sm text-foreground/70 mt-1">Gyanmanjari Innovative University (2023–2026)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold tracking-tight">Core Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Firebase", "Tailwind CSS", "Git"].map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-md border border-foreground/10 bg-background/50 text-[11px] font-mono tracking-wider text-foreground/70">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
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
