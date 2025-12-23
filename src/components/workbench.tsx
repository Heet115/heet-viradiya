"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

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
    progress: 65,
    lastUpdated: "2023-2026",
  },
];

export function Workbench() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
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

  return (
    <section
      ref={sectionRef}
      id="workbench"
      className="border-border/30 border-t px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "mb-10 space-y-3 opacity-0 sm:mb-14",
            isVisible && "animate-fade-in-up",
          )}
        >
          <p className="text-primary font-mono text-xs tracking-[0.25em] uppercase sm:tracking-[0.35em]">
            Experience & Education
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg">
            My work experience and ongoing learning journey. Building skills
            through internships and education.
          </p>
        </div>

        <div
          className={cn(
            "border-border bg-card/40 glass hover-lift overflow-hidden rounded-xl border opacity-0 backdrop-blur-sm",
            isVisible && "animate-scale-in stagger-2",
          )}
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
              <a
                key={item.id}
                rel="noopener noreferrer"
                className={cn(
                  "group flex flex-col gap-4 p-5 opacity-0 transition-all duration-300 sm:flex-row sm:items-center sm:justify-between sm:p-6",
                  isVisible && "animate-fade-in",
                  hoveredItem === item.id && "bg-secondary/30",
                )}
                style={{ animationDelay: `${index * 100 + 400}ms` }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
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

                <div className="flex items-center justify-between gap-6 pl-6 sm:justify-end sm:pl-0">
                  <div className="flex flex-1 items-center gap-3 sm:flex-none">
                    <div className="bg-secondary/80 relative h-2 w-full overflow-hidden rounded-full sm:w-28">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-700 ease-out",
                          item.progress >= 80
                            ? "bg-primary"
                            : item.progress >= 50
                              ? "bg-yellow-500"
                              : "bg-orange-500",
                        )}
                        style={{ width: `${item.progress}%` }}
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
              </a>
            ))}
          </div>

          <div className="border-border/50 bg-secondary/30 border-t px-4 py-4 sm:px-5">
            <div className="text-muted-foreground flex items-center gap-2 font-mono text-xs">
              <span className="text-primary">❯</span>
              <span className="typing-cursor truncate">git status --all</span>
              <span className="text-primary/50 ml-auto hidden sm:block">
                press enter to run
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
