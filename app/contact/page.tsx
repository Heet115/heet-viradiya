"use client"

import { Header } from "@/components/header"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-6 pb-8">
        <Header />
        
        <div className="mx-auto max-w-4xl pt-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold tracking-tight"
          >
            Let&apos;s build together.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            This page is currently under construction. Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-105"
            >
              Send an email
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
