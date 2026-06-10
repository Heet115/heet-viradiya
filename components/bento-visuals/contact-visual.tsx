import { motion } from "framer-motion"
import { HugeiconsIcon } from "@hugeicons/react"
import { 
  AtIcon, 
  Linkedin01Icon, 
  Github01Icon, 
  NewTwitterIcon,
  Mail01Icon
} from "@hugeicons/core-free-icons"

export function ContactVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 overflow-hidden">
      {/* Ambient Center Glow */}
      <div 
        className="absolute h-40 w-40 rounded-full bg-blue-500/20 blur-3xl transition-all duration-700 ease-out"
        style={{ 
          transform: isHovered ? "scale(1.5)" : "scale(1)",
          opacity: isHovered ? 0.8 : 0.3 
        }}
      />
      
      {/* The floating contact pills */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Email Pill (Flies to top left) */}
        <motion.div
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.5, rotate: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            x: isHovered ? -40 : 0, 
            y: isHovered ? -40 : 0,
            scale: isHovered ? 1 : 0.5,
            rotate: isHovered ? -6 : 0
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.05 }}
          className="absolute z-20 flex items-center gap-2 rounded-full border border-foreground/10 bg-background/80 px-4 py-2 shadow-lg backdrop-blur-md"
        >
          <HugeiconsIcon icon={Mail01Icon} className="h-4 w-4 text-blue-500" />
          <span className="text-xs font-medium">hello@</span>
        </motion.div>

        {/* LinkedIn Pill (Flies to top right) */}
        <motion.div
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.5, rotate: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            x: isHovered ? 50 : 0, 
            y: isHovered ? -20 : 0,
            scale: isHovered ? 1 : 0.5,
            rotate: isHovered ? 8 : 0
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          className="absolute z-20 flex items-center gap-2 rounded-full border border-foreground/10 bg-background/80 px-4 py-2 shadow-lg backdrop-blur-md"
        >
          <HugeiconsIcon icon={Linkedin01Icon} className="h-4 w-4 text-blue-600" />
          <span className="text-xs font-medium">in/heet</span>
        </motion.div>

        {/* Twitter Pill (Flies to bottom left) */}
        <motion.div
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.5, rotate: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            x: isHovered ? -30 : 0, 
            y: isHovered ? 40 : 0,
            scale: isHovered ? 1 : 0.5,
            rotate: isHovered ? 4 : 0
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.15 }}
          className="absolute z-20 flex items-center gap-2 rounded-full border border-foreground/10 bg-background/80 px-4 py-2 shadow-lg backdrop-blur-md"
        >
          <HugeiconsIcon icon={NewTwitterIcon} className="h-4 w-4 text-foreground" />
          <span className="text-xs font-medium">@heet</span>
        </motion.div>

        {/* GitHub Pill (Flies to bottom right) */}
        <motion.div
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.5, rotate: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            x: isHovered ? 40 : 0, 
            y: isHovered ? 50 : 0,
            scale: isHovered ? 1 : 0.5,
            rotate: isHovered ? -4 : 0
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="absolute z-20 flex items-center gap-2 rounded-full border border-foreground/10 bg-background/80 px-4 py-2 shadow-lg backdrop-blur-md"
        >
          <HugeiconsIcon icon={Github01Icon} className="h-4 w-4 text-foreground" />
          <span className="text-xs font-medium">heet-v</span>
        </motion.div>
        
        {/* Connecting Lines / Decorative Orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0,
            rotate: isHovered ? 90 : 0
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute h-[180px] w-[180px] rounded-full border border-dashed border-foreground/20"
        />

        {/* Center Main Icon */}
        <motion.div 
          animate={{ 
            scale: isHovered ? 0.8 : 1,
            opacity: isHovered ? 0.5 : 1,
            rotate: isHovered ? -15 : 0
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-foreground/10 bg-background shadow-xl"
        >
          <HugeiconsIcon icon={AtIcon} className="h-8 w-8 text-foreground" />
          
          {/* Default Ping */}
          <motion.div 
            animate={{ opacity: isHovered ? 0 : 1 }}
            className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-400"></span>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}
