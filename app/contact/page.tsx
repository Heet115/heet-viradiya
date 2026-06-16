"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { HugeiconsIcon } from "@hugeicons/react"
import { Location01Icon, CallIcon, Mail01Icon, GithubIcon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons"

export default function ContactPage() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const contactLinks = [
    { icon: Mail01Icon, label: "Email", value: "hpviradiya05@gmail.com", href: "mailto:hpviradiya05@gmail.com" },
    { icon: CallIcon, label: "Phone", value: "+91 6355410801", href: "tel:+916355410801" },
    { icon: Location01Icon, label: "Location", value: "Bhavnagar, Gujarat, India", href: null },
    { icon: GithubIcon, label: "GitHub", value: "github.com/Heet115", href: "https://github.com/Heet115" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Reset form or show success state here in a real app
    }, 1500)
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
          className="absolute h-[30vw] max-h-[400px] w-[30vw] max-w-[400px] rounded-full bg-orange-400/20 blur-[100px] md:blur-[100px] dark:bg-blue-500/20"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-6 pb-8">
        <Header />

        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent mb-4">Let&apos;s Talk</h1>
          <p className="text-lg text-muted-foreground">Get in touch for collaborations, opportunities, or just to say hi.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
        >
          {/* Left Column: Direct Connect */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {contactLinks.map((link) => {
              const Content = (
                <>
                  <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.12] pointer-events-none mix-blend-overlay" style={{ backgroundImage: noiseSvg }} />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 transition-transform group-hover:scale-110 group-hover:bg-foreground/10">
                      <HugeiconsIcon icon={link.icon} className="h-5 w-5 text-foreground/80" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{link.label}</p>
                      <p className="text-base font-bold tracking-tight mt-0.5 group-hover:text-foreground/80 transition-colors">{link.value}</p>
                    </div>
                  </div>
                </>
              )

              const className = "group relative overflow-hidden rounded-[2rem] border border-black/[0.08] dark:border-white/[0.06] bg-black/[0.02] dark:bg-[#111111]/25 p-6 shadow-sm backdrop-blur-[48px] transition-all hover:shadow-md"

              return (
                <motion.div key={link.label} variants={itemVariants} whileHover={{ scale: 0.99 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}>
                  {link.href ? (
                    <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={className + " block cursor-pointer"}>
                      {Content}
                    </a>
                  ) : (
                    <div className={className}>
                      {Content}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-7 group relative overflow-hidden rounded-[2rem] border border-black/[0.08] dark:border-white/[0.06] bg-black/[0.02] dark:bg-[#111111]/25 p-8 sm:p-12 shadow-lg backdrop-blur-[48px]"
          >
            <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.12] pointer-events-none mix-blend-overlay" style={{ backgroundImage: noiseSvg }} />
            
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold tracking-tight ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    placeholder="John Doe"
                    className="h-12 w-full rounded-2xl border border-foreground/10 bg-background/50 px-4 text-sm outline-none transition-all focus:border-foreground/30 focus:bg-background/80"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold tracking-tight ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    placeholder="john@example.com"
                    className="h-12 w-full rounded-2xl border border-foreground/10 bg-background/50 px-4 text-sm outline-none transition-all focus:border-foreground/30 focus:bg-background/80"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold tracking-tight ml-1">Message</label>
                <textarea 
                  id="message" 
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-foreground/10 bg-background/50 p-4 text-sm outline-none transition-all focus:border-foreground/30 focus:bg-background/80"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group/btn relative mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-foreground text-background font-bold transition-all hover:bg-foreground/90 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">Sending...</span>
                ) : (
                  <>
                    Send Message
                    <HugeiconsIcon icon={ArrowUpRight01Icon} className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </>
                )}
              </button>
            </form>
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
