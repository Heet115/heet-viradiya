import { motion } from "framer-motion"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  LaptopProgrammingIcon,
  ReactIcon,
  DatabaseIcon,
  FireIcon,
  Typescript01Icon,
  TailwindcssIcon,
} from "@hugeicons/core-free-icons"

export function ToolsVisual() {
  return (
    <div className="absolute -top-16 -right-16 h-72 w-72 flex items-center justify-center opacity-80 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
      {/* Ambient Center Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-32 w-32 rounded-full bg-primary/10 blur-[40px] transition-all duration-700 group-hover:bg-primary/20" />
      </div>

      {/* Center Core */}
      <div className="relative z-20 flex h-14 w-14 items-center justify-center rounded-full border border-foreground/10 bg-background/80 backdrop-blur-md shadow-sm transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-md group-hover:border-foreground/20">
        <HugeiconsIcon
          icon={LaptopProgrammingIcon}
          className="h-6 w-6 text-foreground"
        />
      </div>

      {/* Inner Orbit (Clockwise) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute z-10 h-[140px] w-[140px] rounded-full border border-foreground/10 transition-colors duration-500 group-hover:border-foreground/20"
      >
        {/* React */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-5 left-1/2 -ml-5 flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-background/80 backdrop-blur-sm shadow-sm transition-all duration-500 group-hover:scale-125 group-hover:bg-background group-hover:shadow-lg group-hover:border-foreground/20"
        >
          <HugeiconsIcon
            icon={ReactIcon}
            className="h-5 w-5 text-[#61DAFB]"
          />
        </motion.div>
        {/* TypeScript */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-5 left-1/2 -ml-5 flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-background/80 backdrop-blur-sm shadow-sm transition-all duration-500 group-hover:scale-125 group-hover:bg-background group-hover:shadow-lg group-hover:border-foreground/20"
        >
          <HugeiconsIcon
            icon={Typescript01Icon}
            className="h-5 w-5 text-[#3178C6]"
          />
        </motion.div>
      </motion.div>

      {/* Outer Orbit (Counter-Clockwise) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute z-0 h-[220px] w-[220px] rounded-full border border-foreground/5 transition-colors duration-500 group-hover:border-foreground/15"
      >
        {/* Tailwind CSS */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 -left-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-background/80 backdrop-blur-sm shadow-sm transition-all duration-500 group-hover:scale-125 group-hover:bg-background group-hover:shadow-lg group-hover:border-foreground/20"
        >
          <HugeiconsIcon
            icon={TailwindcssIcon}
            className="h-5 w-5 text-[#38B2AC]"
          />
        </motion.div>
        {/* Firebase */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 -right-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-background/80 backdrop-blur-sm shadow-sm transition-all duration-500 group-hover:scale-125 group-hover:bg-background group-hover:shadow-lg group-hover:border-foreground/20"
        >
          <HugeiconsIcon
            icon={FireIcon}
            className="h-5 w-5 text-[#FFCA28]"
          />
        </motion.div>
        {/* MongoDB */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-5 left-1/2 -ml-5 flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-background/80 backdrop-blur-sm shadow-sm transition-all duration-500 group-hover:scale-125 group-hover:bg-background group-hover:shadow-lg group-hover:border-foreground/20"
        >
          <HugeiconsIcon
            icon={DatabaseIcon}
            className="h-5 w-5 text-[#47A248]"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
