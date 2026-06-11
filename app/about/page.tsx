"use client"

import { Header } from "@/components/header"
import { motion } from "framer-motion"

export default function AboutPage() {
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
            About Me
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            This page is currently under construction. Check back soon for detailed information about my background, passions, and design philosophy.
          </motion.p>
        </div>
      </div>
    </div>
  )
}
