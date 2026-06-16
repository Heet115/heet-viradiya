import { motion } from "framer-motion"

export function ToolsVisual({ isHovered }: { isHovered?: boolean }) {
  // An array of coordinates for our constellation nodes
  const nodes = [
    { x: 30, y: 30 },
    { x: 70, y: 20 },
    { x: 80, y: 60 },
    { x: 40, y: 80 },
    { x: 20, y: 60 },
    { x: 50, y: 50 }, // Center node
  ]

  // Edges connecting the nodes
  const edges = [
    [0, 5],
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5], // All connect to center
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 0], // Outer pentagon
  ]

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6">
      <div className="relative h-full max-h-24 w-full max-w-24 sm:max-h-30 sm:max-w-30">
        <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
          {/* Edges */}
          {edges.map(([start, end], i) => (
            <motion.line
              key={`edge-${i}`}
              x1={nodes[start].x}
              y1={nodes[start].y}
              x2={nodes[end].x}
              y2={nodes[end].y}
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-foreground/20"
              initial={{ pathLength: 0.1, opacity: 0.2 }}
              animate={{
                pathLength: isHovered ? 1 : 0.1,
                opacity: isHovered ? 0.6 : 0.2,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: isHovered ? i * 0.05 : 0,
              }}
            />
          ))}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={node.x}
              cy={node.y}
              r={i === 5 ? 3 : 1.5} // Center node is larger
              fill="currentColor"
              className="text-foreground"
              initial={{ scale: 0.5, opacity: 0.3 }}
              animate={{
                scale: isHovered ? [1, 1.5, 1] : 1,
                opacity: isHovered ? 1 : 0.3,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}
