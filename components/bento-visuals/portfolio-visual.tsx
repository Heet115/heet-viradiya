import { motion } from "framer-motion"

export function PortfolioVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
      {/* Background Ambient Glows */}
      <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-blue-500/10 blur-[60px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="absolute left-10 bottom-10 h-48 w-48 rounded-full bg-purple-500/10 blur-[60px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Floating Browser/App Mockup */}
      <div className="relative w-full max-w-[420px] h-52 rounded-xl bg-background/60 border border-foreground/10 shadow-2xl overflow-hidden backdrop-blur-xl transform transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:-translate-y-3 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] dark:group-hover:shadow-[0_30px_60px_rgba(255,255,255,0.05)]">
        {/* Window Header */}
        <div className="h-7 w-full bg-foreground/[0.03] border-b border-foreground/5 flex items-center px-4 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
        </div>
        
        {/* Dashboard Layout */}
        <div className="flex h-[calc(100%-1.75rem)]">
          {/* Sidebar */}
          <div className="w-[25%] h-full border-r border-foreground/5 p-4 flex flex-col gap-3">
            <div className="h-4 w-full rounded bg-foreground/10" />
            <div className="h-2 w-3/4 rounded bg-foreground/5 mt-4" />
            <div className="h-2 w-5/6 rounded bg-foreground/5" />
            <div className="h-2 w-4/5 rounded bg-foreground/5" />
            <div className="h-2 w-full rounded bg-foreground/5" />
          </div>
          
          {/* Main Content Area */}
          <div className="flex-1 p-5 flex flex-col gap-5">
            {/* Top Widgets */}
            <div className="flex gap-4 h-12">
              <div className="flex-1 rounded-lg bg-blue-500/10 border border-blue-500/20 transition-all duration-500 group-hover:bg-blue-500/20 group-hover:border-blue-500/30" />
              <div className="flex-1 rounded-lg bg-purple-500/10 border border-purple-500/20 transition-all duration-500 delay-75 group-hover:bg-purple-500/20 group-hover:border-purple-500/30" />
              <div className="flex-1 rounded-lg bg-orange-500/10 border border-orange-500/20 transition-all duration-500 delay-150 group-hover:bg-orange-500/20 group-hover:border-orange-500/30" />
            </div>
            
            {/* Chart Area */}
            <div className="flex-1 rounded-lg border border-foreground/5 bg-foreground/[0.02] flex items-end p-3 gap-3">
              <div className="w-1/6 bg-foreground/10 rounded-t-sm transition-all duration-700 ease-out h-[30%] group-hover:h-[60%]" />
              <div className="w-1/6 bg-foreground/10 rounded-t-sm transition-all duration-700 ease-out delay-75 h-[50%] group-hover:h-[85%]" />
              <div className="w-1/6 bg-foreground/10 rounded-t-sm transition-all duration-700 ease-out delay-150 h-[20%] group-hover:h-[40%]" />
              <div className="w-1/6 bg-blue-500/50 rounded-t-sm transition-all duration-700 ease-out delay-200 h-[70%] group-hover:h-[100%] shadow-[0_0_15px_rgba(59,130,246,0.5)] opacity-80 group-hover:opacity-100" />
              <div className="w-1/6 bg-foreground/10 rounded-t-sm transition-all duration-700 ease-out delay-300 h-[40%] group-hover:h-[75%]" />
              <div className="w-1/6 bg-foreground/10 rounded-t-sm transition-all duration-700 ease-out delay-500 h-[30%] group-hover:h-[55%]" />
            </div>
          </div>
        </div>

        {/* Floating Cursor */}
        <motion.div 
          className="absolute top-1/2 left-1/2 z-30"
          initial={{ x: 150, y: 150, opacity: 0 }}
          animate={{ 
            x: isHovered ? 30 : 150, 
            y: isHovered ? 10 : 150, 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl text-foreground">
            <path d="M4.60636 15.3401L3.06733 4.14818C2.8647 2.67389 4.3855 1.5471 5.72917 2.17646L19.4674 8.60742C20.8986 9.2774 20.8407 11.2987 19.3667 11.8845L12.5938 14.5765C12.3852 14.6594 12.2137 14.8219 12.1157 15.0298L9.04948 21.5332C8.38466 22.9431 6.31505 22.8465 5.79589 21.3653L4.60636 15.3401Z" fill="currentColor"/>
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
