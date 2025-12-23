"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Github, Star, GitFork, ExternalLink, Sparkles } from "lucide-react";

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

const filters = ["all", "shipped", "in-progress", "archived"];

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div
            className={cn(
              "space-y-3 opacity-0",
              isVisible && "animate-fade-in-up",
            )}
          >
            <p className="text-primary font-mono text-xs tracking-[0.25em] uppercase sm:tracking-[0.35em]">
              Artifacts
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Open Source Projects
            </h2>
          </div>

          <div
            className={cn(
              "scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 opacity-0 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0",
              isVisible && "animate-fade-in-up stagger-2",
            )}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "shrink-0 rounded-lg border px-5 py-2.5 font-mono text-xs tracking-wider uppercase transition-all duration-300 active:scale-[0.98]",
                  activeFilter === filter
                    ? "border-primary bg-primary/15 text-primary shadow-primary/20 shadow-sm"
                    : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "group bg-card/40 glass hover-lift relative overflow-hidden rounded-xl border p-6 opacity-0 transition-all duration-400 active:scale-[0.99] sm:p-7",
                isVisible && "animate-fade-in-up",
                hoveredProject === project.id && "border-primary/40 bg-card/70",
                "highlight" in project && project.highlight
                  ? "border-primary/30 from-primary/8 via-card/50 to-primary/8 bg-linear-to-br sm:col-span-2 lg:col-span-2"
                  : "border-border/60",
                project.featured &&
                  !("highlight" in project && project.highlight) &&
                  "sm:col-span-2 lg:col-span-1",
              )}
              style={{ animationDelay: `${(index % 6) * 100 + 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
