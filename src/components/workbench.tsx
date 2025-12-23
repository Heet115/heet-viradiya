"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";

const wipItems = [
  {
    id: 1,
    name: "Strats360 Technolabs LLP",
    description:
      "Web development internship - HTML, CSS, Tailwind CSS, JavaScript, team collaboration",
    progress: 100,
    lastUpdated: "17 Days",
  },
  {
    id: 2,
    name: "AAN Web Solution",
    description:
      "React JS, Firebase, Shadcn/UI, Git and GitHub, version control",
    progress: 100,
    lastUpdated: "15 Days",
  },
  {
    id: 3,
    name: "G.M.I.U. - Diploma in IT",
    description:
      "Currently pursuing Diploma in Information Technology (2023-2026)",
    progress: 75,
    lastUpdated: "2023-2026",
  },
];

export function Workbench() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="workbench"
      className="border-border/30 border-t px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 space-y-3 sm:mb-14"
        >
          <p className="text-primary font-mono text-xs tracking-[0.25em] uppercase sm:tracking-[0.35em]">
            Experience & Education
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg">
            My work experience and ongoing learning journey. Building skills
            through internships and education.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: isInView ? 0.1 : 0 }}
          className="border-border bg-card/40 glass overflow-hidden rounded-xl border backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
        >
          {/* Terminal header */}
          <div className="border-border/50 bg-secondary/40 flex items-center gap-3 border-b px-4 py-3.5 sm:px-5 sm:py-4">
            <div className="flex items-center gap-2">
              <div className="bg-destructive/60 hover:bg-destructive h-3 w-3 cursor-pointer rounded-full transition-colors" />
              <div className="h-3 w-3 cursor-pointer rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500" />
              <div className="bg-primary/60 hover:bg-primary h-3 w-3 cursor-pointer rounded-full transition-colors" />
            </div>
            <span className="text-muted-foreground ml-4 truncate font-mono text-xs">
              ~/heetviradiya/experience
            </span>
            <div className="text-muted-foreground ml-auto hidden items-center gap-2 sm:flex">
              <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
              <span className="font-mono text-xs">live</span>
            </div>
          </div>

          <div className="divide-border/30 divide-y">
            {wipItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: isInView ? 0.2 + index * 0.1 : 0
                }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={cn(
                  "group flex flex-col gap-4 p-5 transition-all duration-300 sm:flex-row sm:items-center sm:justify-between sm:p-6",
                  hoveredItem === item.id && "bg-secondary/30",
                )}
              >
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-primary shrink-0 font-mono text-sm transition-transform duration-300 group-hover:translate-x-1">
                      $
                    </span>
                    <h4 className="group-hover:text-gradient truncate font-mono text-sm font-medium tracking-tight transition-colors">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-muted-foreground line-clamp-2 pl-6 text-xs sm:line-clamp-1">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-between gap-4 pl-6 sm:flex-row sm:items-center sm:gap-6 sm:pl-0">
                  <div className="flex w-full items-center gap-3 sm:w-auto sm:flex-none">
                    <div className="bg-secondary/80 relative h-2 flex-1 overflow-hidden rounded-full sm:w-28 sm:flex-none">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? `${item.progress}%` : 0 }}
                        transition={{ duration: 1, delay: isInView ? 0.4 + index * 0.1 : 0, ease: [0.22, 1, 0.36, 1] }}
                        className={cn(
                          "h-full rounded-full",
                          item.progress >= 80
                            ? "bg-primary"
                            : item.progress >= 50
                              ? "bg-yellow-500"
                              : "bg-orange-500",
                        )}
                      />
                      {/* Shimmer effect */}
                      <div className="animate-shimmer absolute inset-0 opacity-30" />
                    </div>
                    <span
                      className={cn(
                        "w-10 shrink-0 font-mono text-xs transition-colors",
                        item.progress >= 80
                          ? "text-primary"
                          : "text-muted-foreground",
                      )}
                    >
                      {item.progress}%
                    </span>
                  </div>

                  <span className="text-muted-foreground shrink-0 font-mono text-xs">
                    {item.lastUpdated}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-border/50 bg-secondary/30 border-t px-4 py-4 sm:px-5">
            <div className="text-muted-foreground flex items-center gap-2 font-mono text-xs">
              <span className="text-primary animate-pulse">❯</span>
              <span className="typing-cursor truncate">git status --all</span>
              <span className="text-primary/50 ml-auto hidden sm:block">
                press enter to run
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
