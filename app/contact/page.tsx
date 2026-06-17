"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Location01Icon,
  CallIcon,
  Mail01Icon,
  GithubIcon,
  ArrowUpRight01Icon,
  CheckmarkCircle04Icon,
} from "@hugeicons/core-free-icons"
import { Footer } from "@/components/footer"

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
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 200, damping: 20 },
    },
  }

  const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`

  const contactLinks = [
    {
      icon: Mail01Icon,
      label: "Email",
      value: "hpviradiya05@gmail.com",
      href: "mailto:hpviradiya05@gmail.com",
    },
    {
      icon: CallIcon,
      label: "Phone",
      value: "+91 6355410801",
      href: "tel:+916355410801",
    },
    {
      icon: Location01Icon,
      label: "Location",
      value: "Bhavnagar, Gujarat, India",
      href: null,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "github.com/Heet115",
      href: "https://github.com/Heet115",
    },
  ]

  // ── Form State ────────────────────────────────────────────────────────────
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status !== "idle") setStatus("idle")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")
    setErrorMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.")
        setStatus("error")
      } else {
        setStatus("success")
        setForm({ name: "", email: "", message: "", website: "" })
      }
    } catch {
      setErrorMsg("Network error. Please try again.")
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
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

      <div className="relative z-10 mx-auto max-w-350 px-6 pt-6 pb-8">
        <Header />

        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-linear-to-b from-foreground to-foreground/50 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-6xl">
            Let&apos;s Talk
          </h1>
          <p className="text-lg text-muted-foreground">
            Get in touch for collaborations, opportunities, or just to say hi.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 items-start gap-6 sm:grid-cols-12 md:grid-cols-12"
        >
          {/* Left Column: Direct Connect */}
          <div className="flex flex-col gap-4 sm:col-span-12 md:col-span-5">
            {contactLinks.map((link) => {
              const Content = (
                <>
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay dark:opacity-[0.12]"
                    style={{ backgroundImage: noiseSvg }}
                  />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 transition-transform group-hover:scale-110 group-hover:bg-foreground/10">
                      <HugeiconsIcon
                        icon={link.icon}
                        className="h-5 w-5 text-foreground/80"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="mt-0.5 text-base font-bold tracking-tight transition-colors group-hover:text-foreground/80">
                        {link.value}
                      </p>
                    </div>
                  </div>
                </>
              )

              const className =
                "group relative overflow-hidden rounded-[2rem] border border-black/8 dark:border-white/6 bg-black/2 dark:bg-[#111111]/25 p-6 shadow-sm backdrop-blur-[48px] transition-all hover:shadow-md"

              return (
                <motion.div
                  key={link.label}
                  variants={itemVariants}
                  whileHover={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noreferrer"
                      className={className + " block cursor-pointer"}
                    >
                      {Content}
                    </a>
                  ) : (
                    <div className={className}>{Content}</div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-[2rem] border border-black/8 bg-black/2 p-8 shadow-lg backdrop-blur-[48px] sm:col-span-12 sm:p-12 md:col-span-7 dark:border-white/6 dark:bg-[#111111]/25"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay dark:opacity-[0.12]"
              style={{ backgroundImage: noiseSvg }}
            />

            {/* Success State */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="relative z-10 flex flex-col items-center justify-center gap-6 py-12 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-2xl text-green-500 dark:text-green-400">
                  <HugeiconsIcon
                    icon={CheckmarkCircle04Icon}
                    className="h-8 w-8"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative z-10 flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="ml-1 text-sm font-bold tracking-tight"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="h-12 w-full rounded-2xl border border-foreground/10 bg-background/50 px-4 text-sm transition-all outline-none focus:border-foreground/30 focus:bg-background/80"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="ml-1 text-sm font-bold tracking-tight"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="h-12 w-full rounded-2xl border border-foreground/10 bg-background/50 px-4 text-sm transition-all outline-none focus:border-foreground/30 focus:bg-background/80"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="ml-1 text-sm font-bold tracking-tight"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-foreground/10 bg-background/50 p-4 text-sm transition-all outline-none focus:border-foreground/30 focus:bg-background/80"
                  />
                </div>

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={handleChange}
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500"
                  >
                    {errorMsg}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn relative mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-foreground font-bold text-background transition-all hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>

        <Footer />
      </div>
    </div>
  )
}
