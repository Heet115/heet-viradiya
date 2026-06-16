import { motion } from "framer-motion"

export function AboutVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
      {/* Background ambient glow */}
      <div 
        className="absolute h-32 w-32 rounded-full bg-foreground/5 blur-3xl transition-all duration-1000 ease-out"
        style={{ 
          transform: isHovered ? "scale(1.5)" : "scale(1)",
          opacity: isHovered ? 1 : 0.5 
        }}
      />
      
      {/* Minimal Abstract Rings */}
      <div className="relative flex h-full w-full items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          className="h-32 w-32 overflow-visible"
        >
          {/* Inner ring */}
          <motion.circle
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-foreground/40 dark:text-foreground/30"
            initial={{ pathLength: 0, rotate: -90 }}
            animate={{ 
              pathLength: isHovered ? 1 : 0.2, 
              rotate: isHovered ? 270 : -90,
              opacity: isHovered ? 1 : 0.5
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          {/* Middle ring */}
          <motion.circle
            cx="50"
            cy="50"
            r="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-foreground/20"
            initial={{ pathLength: 0.1, rotate: 0 }}
            animate={{ 
              pathLength: isHovered ? 0.8 : 0.1, 
              rotate: isHovered ? 180 : 0,
              opacity: isHovered ? 0.8 : 0.3
            }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.1 }}
            strokeLinecap="round"
          />
          {/* Outer ring */}
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-foreground/10"
            initial={{ pathLength: 0.2, rotate: 90 }}
            animate={{ 
              pathLength: isHovered ? 0.6 : 0.2, 
              rotate: isHovered ? -90 : 90,
              opacity: isHovered ? 0.6 : 0.2
            }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
            strokeDasharray="4 4"
          />
          
          {/* Center glowing dot */}
          <motion.circle
            cx="50"
            cy="50"
            r="2"
            fill="currentColor"
            className="text-foreground"
            initial={{ scale: 0.5, opacity: 0.5 }}
            animate={{ 
              scale: isHovered ? [1, 1.5, 1] : 1, 
              opacity: isHovered ? 1 : 0.5 
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </div>
  )
}
