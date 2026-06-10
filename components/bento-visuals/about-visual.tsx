import { motion } from "framer-motion"

export function AboutVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Terminal Window peeking from top right */}
      <div className="absolute -top-4 -right-8 w-[280px] rotate-[6deg] transform overflow-hidden rounded-xl border border-white/10 bg-black/80 shadow-2xl backdrop-blur-md transition-all duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-[2deg] group-hover:shadow-[-20px_20px_40px_rgba(0,0,0,0.4)] dark:bg-black/90">
        {/* Terminal Header */}
        <div className="flex h-8 w-full items-center gap-2 border-b border-white/5 bg-white/5 px-4">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>

        {/* Terminal Body */}
        <div className="p-5 font-mono text-[12px] leading-relaxed text-gray-300">
          <div className="flex items-center">
            <span className="mr-2 text-pink-400">const</span>
            <span className="text-blue-400">heet</span>
            <span className="mx-2 text-gray-400">=</span>
            <span className="mr-2 text-pink-400">new</span>
            <span className="text-yellow-300">Developer</span>
            <span className="text-gray-400">{"({"}</span>
          </div>

          <div
            className="mt-1 origin-top overflow-hidden pl-4 transition-all duration-700 ease-out"
            style={{
              opacity: isHovered ? 1 : 0.3,
              transform: isHovered ? "translateY(0)" : "translateY(-4px)",
            }}
          >
            <div className="mb-1">
              <span className="text-purple-400">role:</span>{" "}
              <span className="text-green-400">&quot;UI/UX Engineer&quot;</span>
              ,
            </div>
            <div className="mb-1">
              <span className="text-purple-400">base:</span>{" "}
              <span className="text-green-400">&quot;Bhavnagar, IN&quot;</span>,
            </div>
            <div>
              <span className="text-purple-400">passion:</span>{" "}
              <span className="text-green-400">&quot;Creative Code&quot;</span>
            </div>
          </div>

          <div className="mt-1 flex items-center">
            <span className="text-gray-400">{"})"}</span>
            {/* Blinking Cursor */}
            <motion.div
              className="ml-1 h-3 w-2 bg-gray-400"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
