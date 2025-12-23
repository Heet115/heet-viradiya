"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Github, Star, GitFork, ExternalLink, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 0,
    title: "Roomily",
    description:
      "A modern roommate-matching platform built with React and Firebase. Includes real-time messaging, listing management, location search, secure auth, detailed user profiles, admin tools, and mobile-responsive dark mode UI.",
    tags: ["React", "Firebase", "Tailwind CSS", "Real-time"],
    status: "shipped",
    year: "2025",
    stars: 4,
    forks: 0,
    url: "https://github.com/Heet115",
    homepage: "https://roomily.vercel.app",
    featured: true,
    highlight: true,
  },
  {
    id: 1,
    title: "Present Perfect",
    description:
      "An AI-powered gift recommendation app using Next.js 15, React 19, and Google Generative AI. Features personality-based gift suggestions, Firebase auth, saved collections, recipient profiles, theme customization, and greeting-message generation.",
    tags: [
      "Next.js",
      "React",
      "Google AI",
      "TypeScript",
      "Tailwind CSS",
      "shad/cn",
    ],
    status: "shipped",
    year: "2025",
    stars: 3,
    forks: 0,
    url: "https://github.com/Heet115",
    homepage: "https://presentperfect.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "FinTrackX",
    description:
      "A Next.js finance tracker for managing accounts, tracking transactions, and analyzing spending with interactive reports. Uses React 19, Firebase, Tailwind CSS, real-time sync, CSV export, and secure authentication.",
    tags: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    status: "shipped",
    year: "2025",
    stars: 3,
    forks: 0,
    url: "https://github.com/Heet115",
    homepage: "https://fintrack-x-theta.vercel.app",
    featured: true,
  },
];

export function ProjectsGrid() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} id="projects" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-col gap-6 sm:mb-14"
        >
          <div className="space-y-3">
            <p className="text-primary font-mono text-xs tracking-[0.25em] uppercase sm:tracking-[0.35em]">
              Artifacts
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Open Source Projects
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1],
                delay: isInView ? index * 0.1 : 0
              }}
              whileHover={{ y: -6 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className={cn(
                "group bg-card/40 glass relative overflow-hidden rounded-xl border p-6 transition-all duration-300 sm:p-7",
                hoveredProject === project.id && "border-primary/40 bg-card/70",
                "highlight" in project && project.highlight
                  ? "border-primary/30 from-primary/8 via-card/50 to-primary/8 bg-linear-to-br sm:col-span-2 lg:col-span-2"
                  : "border-border/60",
                project.featured &&
                  !("highlight" in project && project.highlight) &&
                  "sm:col-span-2 lg:col-span-1",
              )}
            >
              {"highlight" in project && project.highlight && (
                <div className="border-primary/40 bg-primary/15 animate-pulse-glow absolute top-5 left-5 flex items-center gap-2 rounded-full border px-3.5 py-1.5">
                  <Sparkles className="text-primary h-3.5 w-3.5" />
                  <span className="text-primary font-mono text-[10px] font-medium tracking-wider uppercase">
                    Featured
                  </span>
                </div>
              )}

              {/* Status indicator */}
              <div
                className={cn(
                  "absolute top-5 right-5 flex items-center gap-2.5",
                  "highlight" in project && project.highlight && "top-5",
                )}
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-shadow duration-300",
                    project.status === "shipped" &&
                      "bg-primary shadow-primary/50 shadow-sm",
                    project.status === "in-progress" &&
                      "animate-pulse bg-yellow-500 shadow-sm shadow-yellow-500/50",
                    project.status === "archived" && "bg-muted-foreground",
                  )}
                />
                <span className="text-muted-foreground font-mono text-xs">
                  {project.status}
                </span>
              </div>

              <div
                className={cn(
                  "text-muted-foreground mb-5 font-mono text-xs",
                  "highlight" in project && project.highlight && "mt-10",
                )}
              >
                {project.year}
              </div>

              <h3
                className={cn(
                  "group-hover:text-gradient mb-3 font-bold tracking-tight transition-all duration-300",
                  "highlight" in project && project.highlight
                    ? "text-xl sm:text-2xl"
                    : "text-lg sm:text-xl",
                )}
              >
                {project.title}
              </h3>

              <p
                className={cn(
                  "text-muted-foreground mb-5 text-sm leading-relaxed",
                  "highlight" in project && project.highlight
                    ? "line-clamp-3"
                    : "line-clamp-2",
                )}
              >
                {project.description}
              </p>

              <div className="text-muted-foreground mb-5 flex items-center gap-5 font-mono text-xs">
                <span className="flex items-center gap-1.5 transition-colors group-hover:text-yellow-500">
                  <Star className="h-3.5 w-3.5" />
                  {project.stars}
                </span>
                <span className="group-hover:text-foreground flex items-center gap-1.5 transition-colors">
                  <GitFork className="h-3.5 w-3.5" />
                  {project.forks}
                </span>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-border/80 bg-secondary/60 text-secondary-foreground hover:border-primary/50 hover:bg-primary/10 rounded-md border px-2.5 py-1 font-mono text-xs transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary group/link flex items-center gap-2 font-mono text-xs transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                  <span className="underline-animate">source</span>
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-foreground group/link flex items-center gap-2 font-mono text-xs transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
                    <span className="underline-animate">live</span>
                  </a>
                )}
              </div>

              <div className="from-primary via-primary/80 absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r to-transparent transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
