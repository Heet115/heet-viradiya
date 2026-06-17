"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MotionBackdrop } from "@/components/scroll-effects"

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  }

  const itemVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        show: { opacity: 1 },
      }
    : {
        hidden: (index: number) => ({
          opacity: 0,
          y: 78,
          scale: 0.93,
          rotate: index % 2 === 0 ? -0.8 : 0.8,
          filter: "blur(14px)",
        }),
        show: (index: number) => ({
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
          transition: {
            delay: index * 0.03,
            type: "spring" as const,
            stiffness: 170,
            damping: 21,
            mass: 0.8,
          },
        }),
      }

  const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`

  return (
    <div className="relative min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      <MotionBackdrop />

      <div className="relative z-10 mx-auto max-w-350 px-6 pt-6 pb-8">
        <Header />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2, margin: "0px 0px -12% 0px" }}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-12"
        >
          {/* Card 1: Professional Summary */}
          <motion.div
            custom={0}
            variants={itemVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="group relative overflow-hidden rounded-[1.5rem] border border-black/6 bg-black/[0.025] p-8 shadow-sm backdrop-blur-2xl will-change-transform sm:col-span-12 sm:p-12 dark:border-white/8 dark:bg-white/[0.04]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.08]"
              style={{ backgroundImage: noiseSvg }}
            />
            <div className="relative z-10 flex max-w-4xl flex-col gap-6">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                Heet Viradiya
              </h2>
              <h2 className="text-xl font-medium text-foreground/70 sm:text-2xl">
                Full-Stack Developer
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Specializing in building scalable web applications with Next.js,
                React, TypeScript, MongoDB, and Firebase. Designed and developed
                products ranging from Academic ERP systems and AI-powered
                applications to finance management platforms and campus
                solutions. Passionate about transforming complex problems into
                practical, user-focused software products.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Experience */}
          <motion.div
            custom={1}
            variants={itemVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="group relative overflow-hidden rounded-[1.5rem] border border-black/6 bg-black/[0.025] p-8 shadow-sm backdrop-blur-2xl will-change-transform sm:col-span-6 dark:border-white/8 dark:bg-white/[0.04]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.08]"
              style={{ backgroundImage: noiseSvg }}
            />
            <div className="relative z-10 flex h-full flex-col gap-8">
              <h3 className="text-xl font-bold tracking-tight">Experience</h3>

              <div className="relative flex flex-col gap-8 pl-6">
                {/* Timeline Line */}
                <div className="absolute top-2 bottom-0 left-0 w-px bg-foreground/10" />
                <motion.div
                  className="absolute top-2 left-0 w-px bg-foreground"
                  initial={shouldReduceMotion ? false : { height: 0 }}
                  whileInView={
                    shouldReduceMotion ? undefined : { height: "100%" }
                  }
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                <div className="group/item relative">
                  <div className="absolute top-1.5 left-[-27.5px] z-10 h-2 w-2 rounded-full border border-foreground bg-background transition-transform group-hover/item:scale-150" />
                  <h4 className="text-sm font-bold">Web Development Intern</h4>
                  <p className="mb-2 text-xs text-muted-foreground">
                    AAN Web Solution
                  </p>
                  <p className="text-sm text-foreground/70">
                    Worked with React, Firebase, Git, GitHub, and Shadcn/UI in a
                    collaborative development environment.
                  </p>
                </div>

                <div className="group/item relative">
                  <div className="absolute top-1.5 left-[-27.5px] z-10 h-2 w-2 rounded-full border border-foreground bg-background transition-transform group-hover/item:scale-150" />
                  <h4 className="text-sm font-bold">Web Development Intern</h4>
                  <p className="mb-2 text-xs text-muted-foreground">
                    Strats360 Technolabs LLP
                  </p>
                  <p className="text-sm text-foreground/70">
                    Gained practical experience in HTML, CSS, JavaScript,
                    Tailwind CSS, and modern web development workflows.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Education */}
          <motion.div
            custom={2}
            variants={itemVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="group relative overflow-hidden rounded-[1.5rem] border border-black/6 bg-black/[0.025] p-8 shadow-sm backdrop-blur-2xl will-change-transform sm:col-span-6 dark:border-white/8 dark:bg-white/[0.04]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.08]"
              style={{ backgroundImage: noiseSvg }}
            />
            <div className="relative z-10 flex h-full flex-col gap-8">
              <h3 className="text-xl font-bold tracking-tight">Education</h3>

              <div className="flex flex-col gap-6">
                <div className="group/item flex items-start justify-between border-b border-foreground/10 pb-6">
                  <div>
                    <h4 className="text-sm font-bold transition-colors group-hover/item:text-foreground/80">
                      Gyanmanjari Innovative University
                    </h4>
                    <p className="mt-1 text-sm text-foreground/70">
                      Diploma in Information Technology
                    </p>
                  </div>
                  <span className="rounded-md bg-foreground/5 px-2 py-1 font-mono text-xs text-muted-foreground">
                    2023–26
                  </span>
                </div>

                <div className="group/item flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold transition-colors group-hover/item:text-foreground/80">
                      Bachelor&apos;s Degree
                    </h4>
                    <p className="mt-1 text-sm text-foreground/70">
                      Information Technology
                    </p>
                  </div>
                  <span className="rounded-md bg-foreground/5 px-2 py-1 font-mono text-xs text-muted-foreground">
                    Starting 2026
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Strengths & Languages */}
          <motion.div
            custom={3}
            variants={itemVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="group relative overflow-hidden rounded-[1.5rem] border border-black/6 bg-black/[0.025] p-8 shadow-sm backdrop-blur-2xl will-change-transform sm:col-span-12 dark:border-white/8 dark:bg-white/[0.04]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.08]"
              style={{ backgroundImage: noiseSvg }}
            />
            <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold tracking-tight">
                  Core Strengths
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full-Stack Development",
                    "System Design Thinking",
                    "Problem Solving",
                    "Product Development",
                    "Team Collaboration",
                    "Continuous Learning",
                  ].map((strength) => (
                    <div
                      key={strength}
                      className="cursor-default rounded-full border border-foreground/10 bg-background/50 px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
                    >
                      {strength}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold tracking-tight">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["English", "Gujarati", "Hindi"].map((lang) => (
                    <div
                      key={lang}
                      className="cursor-default rounded-full border border-foreground/10 bg-background/50 px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <Footer />
      </div>
    </div>
  )
}
