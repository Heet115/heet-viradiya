"use client"

import { Header } from "@/components/header"
import { motion } from "framer-motion"
import Link from "next/link"

export default function PortfolioPage() {
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
            Selected Works
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            This page is currently under construction. Check back soon for a deep dive into my latest projects spanning web development, interactive design, and mobile apps.
          </motion.p>
        </div>
      </div>
    </div>
  )
}
