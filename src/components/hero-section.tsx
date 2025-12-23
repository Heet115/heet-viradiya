"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const roles = [
  "building interfaces",
  "crafting React apps",
  "exploring Firebase",
  "learning DevOps",
  "creating solutions",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const terminalVariants = {
  hidden: { opacity: 0, scale: 0.9, rotateX: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay: 0.4,
    },
  },
};

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const y = useTransform(scrollY, [0, isMobile ? 800 : 500], [0, 150]);
  const opacity = useTransform(
    scrollY,
    isMobile ? [0, 600, 800] : [0, 500, 600],
    [1, 1, 0],
  );

  useEffect(() => {
    const targetText = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < targetText.length) {
            setDisplayText(targetText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <motion.section
      style={{ y, opacity }}
      className="relative px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:min-h-[70vh] lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left column - Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 sm:space-y-10"
          >
            <motion.div variants={itemVariants} className="space-y-3">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-primary font-mono text-xs tracking-[0.25em] uppercase sm:tracking-[0.35em]"
              >
                HEET VIRADIYA — IT Student & Web Developer
              </motion.p>
              <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl xl:text-6xl">
                Forging digital
                <br />
                <span className="from-primary/50 to-accent typing-cursor bg-linear-to-l bg-clip-text text-transparent">
                  {displayText}
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground max-w-lg text-base leading-relaxed sm:text-lg"
            >
              Enthusiastic IT diploma student with hands-on experience in React,
              Tailwind CSS, and modern web development. Passionate about
              building responsive apps and exploring areas like AI, DevOps, and
              automation. Based in{" "}
              <span className="text-foreground font-medium">
                Bhavnagar, India
              </span>
              .
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border px-7 py-4 font-mono text-sm transition-all duration-500 sm:py-3.5"
              >
                <span className="relative z-10">explore artifacts</span>
                <motion.span
                  className="relative z-10"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
                <span className="bg-primary absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/introduction"
                  className="group border-border text-muted-foreground hover:border-foreground hover:text-foreground hover:bg-secondary/50 inline-flex items-center justify-center gap-3 rounded-lg border px-7 py-4 font-mono text-sm transition-all duration-300 sm:py-3.5"
                >
                  <span>introduction</span>
                  <span className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column - ASCII Art / Visual */}
          <motion.div
            variants={terminalVariants}
            initial="hidden"
            animate="visible"
            className="perspective-1000 relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2 }}
              transition={{ duration: 0.3 }}
              className="border-border bg-card/60 glass hover-lift relative rounded-xl border p-4 sm:p-8"
            >
              {/* Terminal header dots */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="bg-destructive/60 hover:bg-destructive h-3 w-3 rounded-full transition-colors"
                />
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="h-3 w-3 rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500"
                />
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="bg-primary/60 hover:bg-primary h-3 w-3 rounded-full transition-colors"
                />
              </div>
              <div className="bg-background/50 text-muted-foreground absolute top-3.5 left-1/2 -translate-x-1/2 rounded-md px-3 py-1 font-mono text-xs">
                terminal://heetviradiya
              </div>

              <pre className="text-primary/80 xs:text-[10px] mt-6 overflow-x-auto font-mono text-[8px] leading-relaxed sm:text-xs md:text-sm">
                <span className="block">{`┌─────────────────────────────────────┐
│                                     │
│  ██╗  ██╗███████╗███████╗████████╗  │
│  ██║  ██║██╔════╝██╔════╝╚══██╔══╝  │
│  ███████║█████╗  █████╗     ██║     │
│  ██╔══██║██╔══╝  ██╔══╝     ██║     │
│  ██║  ██║███████╗███████╗   ██║     │
│  ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝     │
│  Viradiya                           │
│                                     │
│   > projects completed: 3           │
│   > status: learning & building     │
│   > location: Bhavnagar             │
│                                     │
└─────────────────────────────────────┘`}</span>
              </pre>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              animate-float="true"
              className="border-primary/40 bg-primary/15 glass text-primary absolute -top-2 -right-2 rounded-lg border px-3 py-1.5 font-mono text-[11px] sm:-top-6 sm:-right-6 sm:px-4 sm:text-xs"
            >
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-2"
              >
                <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
                v0.1.0
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="border-border bg-card glass text-muted-foreground absolute -bottom-3 -left-2 rounded-lg border px-3 py-1.5 font-mono text-[11px] sm:-bottom-6 sm:-left-6 sm:px-4 sm:text-xs"
            >
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                Dec. 2025
              </motion.span>
            </motion.div>

            <div className="bg-primary/5 absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-muted-foreground font-mono text-xs">scroll</span>
        <motion.div
          animate={{ scaleY: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="from-primary/50 h-12 w-px bg-linear-to-b to-transparent"
        />
      </motion.div>
    </motion.section>
  );
}
