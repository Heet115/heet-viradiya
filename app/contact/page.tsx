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
import { cn } from "@/lib/utils"

type ContactForm = {
  name: string
  email: string
  message: string
  website: string
}

type ContactField = "name" | "email" | "message"
type ContactErrors = Partial<Record<ContactField, string>>

const initialForm: ContactForm = {
  name: "",
  email: "",
  message: "",
  website: "",
}

function validateContactForm(form: ContactForm) {
  const errors: ContactErrors = {}
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!form.name.trim()) {
    errors.name = "Add your name."
  }

  if (!form.email.trim()) {
    errors.email = "Add your email."
  } else if (!emailRegex.test(form.email.trim())) {
    errors.email = "Use a valid email address."
  }

  if (!form.message.trim()) {
    errors.message = "Add a short message."
  } else if (form.message.trim().length < 10) {
    errors.message = "A little more context helps."
  }

  return errors
}

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
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [touched, setTouched] = useState<Record<ContactField, boolean>>({
    name: false,
    email: false,
    message: false,
  })
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const errors = validateContactForm(form)

  const shouldShowError = (field: ContactField) =>
    Boolean(errors[field] && (touched[field] || hasSubmitted))

  const inputClassName = (field: ContactField) =>
    cn(
      "w-full rounded-xl border bg-background/55 text-sm transition-all outline-none focus:bg-background/80 focus:ring-4 focus:ring-foreground/5",
      shouldShowError(field)
        ? "border-red-500/35 bg-red-500/5 focus:border-red-500/50"
        : "border-foreground/8 focus:border-foreground/25"
    )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status !== "idle") setStatus("idle")
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name

    if (field === "name" || field === "email" || field === "message") {
      setTouched((prev) => ({ ...prev, [field]: true }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setHasSubmitted(true)
    setIsSubmitting(true)
    setStatus("idle")
    setErrorMsg("")

    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false)
      return
    }

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
        setHasSubmitted(false)
        setTouched({ name: false, email: false, message: false })
        setForm(initialForm)
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
                    className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.08]"
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
                "group relative overflow-hidden rounded-[1.5rem] border border-black/6 bg-black/[0.025] p-6 shadow-sm backdrop-blur-2xl transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-35px_rgba(0,0,0,0.65)] dark:border-white/8 dark:bg-white/[0.04]"

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
            className="group relative overflow-hidden rounded-[1.5rem] border border-black/6 bg-black/[0.025] p-8 shadow-sm backdrop-blur-2xl sm:col-span-12 sm:p-12 md:col-span-7 dark:border-white/8 dark:bg-white/[0.04]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.08]"
              style={{ backgroundImage: noiseSvg }}
            />

            {/* Success State */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="relative z-10 flex min-h-95 flex-col items-center justify-center gap-6 py-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 360, damping: 20 }}
                  className="relative flex h-18 w-18 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 dark:text-emerald-400"
                >
                  <motion.span
                    className="absolute inset-0 rounded-full border border-emerald-500/25"
                    initial={{ scale: 0.75, opacity: 0.8 }}
                    animate={{ scale: 1.35, opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  <motion.div
                    initial={{ scale: 0.6, rotate: -12 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.15,
                      type: "spring",
                      stiffness: 500,
                      damping: 20,
                    }}
                  >
                    <HugeiconsIcon
                      icon={CheckmarkCircle04Icon}
                      className="h-9 w-9"
                    />
                  </motion.div>
                </motion.div>
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
                noValidate
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
                      aria-invalid={shouldShowError("name")}
                      aria-describedby={
                        shouldShowError("name") ? "name-error" : undefined
                      }
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      className={cn("h-12 px-4", inputClassName("name"))}
                    />
                    {shouldShowError("name") && (
                      <motion.p
                        id="name-error"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="ml-1 text-xs font-medium text-red-500"
                      >
                        {errors.name}
                      </motion.p>
                    )}
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
                      aria-invalid={shouldShowError("email")}
                      aria-describedby={
                        shouldShowError("email") ? "email-error" : undefined
                      }
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                      className={cn("h-12 px-4", inputClassName("email"))}
                    />
                    {shouldShowError("email") && (
                      <motion.p
                        id="email-error"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="ml-1 text-xs font-medium text-red-500"
                      >
                        {errors.email}
                      </motion.p>
                    )}
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
                    aria-invalid={shouldShowError("message")}
                    aria-describedby={
                      shouldShowError("message") ? "message-error" : undefined
                    }
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={cn("resize-none p-4", inputClassName("message"))}
                  />
                  {shouldShowError("message") && (
                    <motion.p
                      id="message-error"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="ml-1 text-xs font-medium text-red-500"
                    >
                      {errors.message}
                    </motion.p>
                  )}
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
                    className="rounded-xl border border-red-500/15 bg-red-500/8 px-4 py-3 text-sm text-red-500"
                  >
                    {errorMsg}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="group/btn relative mt-2 flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-foreground font-bold text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/90 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-65"
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
                      Sending message
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
