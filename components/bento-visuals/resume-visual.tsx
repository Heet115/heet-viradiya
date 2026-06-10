import { motion } from "framer-motion"
import { HugeiconsIcon } from "@hugeicons/react"
import { Briefcase01Icon } from "@hugeicons/core-free-icons"

export function ResumeVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-70 transition-opacity duration-500 group-hover:opacity-100">
      <div className="relative flex h-48 w-full flex-col items-center justify-between py-6">
        {/* Timeline Line */}
        <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />

        {/* Animated Light traveling up the line */}
        <motion.div
          className="absolute bottom-4 h-12 w-[3px] rounded-full bg-foreground shadow-[0_0_15px_rgba(255,255,255,0.8)] dark:shadow-[0_0_15px_rgba(0,0,0,0.8)]"
          animate={{ y: [0, -250] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Nodes */}
        <div className="z-10 flex h-full flex-col justify-between w-full px-12">
          {/* Node 1 (Top / Present) */}
          <div className="relative flex items-center justify-center w-full">
            <div className="absolute h-3 w-3 rounded-full border-2 border-foreground bg-background transition-all delay-150 duration-300 group-hover:scale-150 group-hover:border-blue-500" />
            <div className="absolute left-1/2 ml-4 opacity-0 -translate-x-4 transition-all duration-500 delay-150 ease-out group-hover:opacity-100 group-hover:translate-x-0 text-[11px] font-bold tracking-wider text-blue-500">
              PRESENT
            </div>
          </div>
          
          {/* Node 2 (Middle / 2023) */}
          <div className="relative flex items-center justify-center w-full">
            <div className="absolute h-3 w-3 rounded-full border-2 border-foreground bg-background transition-all delay-75 duration-300 group-hover:scale-150 group-hover:border-purple-500" />
            <div className="absolute right-1/2 mr-4 opacity-0 translate-x-4 transition-all duration-500 delay-75 ease-out group-hover:opacity-100 group-hover:translate-x-0 text-[11px] font-bold tracking-wider text-purple-500">
              2023
            </div>
          </div>
          
          {/* Node 3 (Bottom / 2021) */}
          <div className="relative flex items-center justify-center w-full">
            <div className="absolute h-3 w-3 rounded-full border-2 border-foreground bg-background transition-all duration-300 group-hover:scale-150 group-hover:border-orange-500" />
            <div className="absolute left-1/2 ml-4 opacity-0 -translate-x-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0 text-[11px] font-bold tracking-wider text-orange-500">
              2021
            </div>
          </div>
        </div>
      </div>

      {/* Briefcase Overlay */}
      <div className="absolute left-8 top-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-foreground/10 bg-background/50 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-12 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
        <HugeiconsIcon
          icon={Briefcase01Icon}
          className="h-6 w-6 text-foreground"
        />
      </div>
    </div>
  )
}
