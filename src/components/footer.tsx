"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Heet115",
    handle: "@Heet115",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/heet-viradiya-919198369",
    handle: "heet-viradiya",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:hpviradiya05@gmail.com",
    handle: "hpviradiya05@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <footer
      ref={sectionRef}
      id="connect"
      className="border-border/30 border-t px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-3">
              <p className="text-primary font-mono text-xs tracking-[0.25em] uppercase sm:tracking-[0.35em]">
                Connect
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">
                {"Let's build something "}
                <span className="from-primary/50 to-accent bg-linear-to-l bg-clip-text text-transparent">
                  together
                </span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-base leading-relaxed sm:text-lg">
              Always interested in collaborations, interesting problems, and
              conversations about code, design, and everything in between.
            </p>

            <div className="pt-2">
              <motion.a
                href="mailto:hpviradiya05@gmail.com"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group border-primary bg-primary/10 text-primary hover:text-primary-foreground relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl border px-6 py-3.5 font-mono text-sm transition-all duration-500 sm:w-auto sm:px-8 sm:py-4"
              >
                <span className="relative z-10">send a signal</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
                <span className="bg-primary absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right column - Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: isInView ? 0.1 : 0 }}
            className="space-y-6 lg:text-right"
          >
            <p className="text-muted-foreground font-mono text-xs tracking-[0.25em] uppercase sm:tracking-[0.35em]">
              Find me elsewhere
            </p>
            <div className="space-y-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={
                    link.label !== "Email" ? "noopener noreferrer" : undefined
                  }
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.22, 1, 0.36, 1],
                    delay: isInView ? 0.2 + index * 0.1 : 0
                  }}
                  whileHover={{ x: -4 }}
                  className={cn(
                    "group flex items-center justify-between gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 lg:flex-row-reverse",
                    hoveredLink === link.label &&
                      "border-border/50 bg-card/50 glass",
                  )}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <div className="flex items-center gap-3 lg:flex-row-reverse">
                    <link.icon className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                    <span className="group-hover:text-gradient font-mono text-sm font-medium transition-colors">
                      {link.label}
                    </span>
                    {link.label !== "Email" && (
                      <ExternalLink className="text-muted-foreground/50 h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    )}
                  </div>
                  <span className="text-muted-foreground truncate font-mono text-xs">
                    {link.handle}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: isInView ? 0.4 : 0 }}
          className="border-border/30 mt-16 flex flex-col items-center justify-between gap-6 border-t pt-8 sm:mt-20 sm:flex-row sm:pt-10"
        >
          <div className="text-muted-foreground flex items-center gap-2.5 font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
            </span>
            <span>Forged with</span>
            <Heart className="text-destructive h-3.5 w-3.5 animate-pulse" />
            <span>& code</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.slice(0, 2).map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground/50 hover:text-primary transition-all duration-300"
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <p className="text-muted-foreground text-center font-mono text-xs sm:text-right">
            © {new Date().getFullYear()} HEET VIRADIYA — All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
