"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { ThemeChanger } from "./theme-changer";
import Link from "next/link";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#notes" },
  { label: "Journey", href: "/#workbench" },
  { label: "Connect", href: "/#connect" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Heet115", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/heet-viradiya-919198369",
    icon: Linkedin,
  },
];

export function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-border/50 bg-background/80 border-b shadow-sm backdrop-blur-xl"
          : "bg-background/60 backdrop-blur-md md:bg-transparent md:backdrop-blur-none",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2 sm:gap-3">
            <div className="border-primary/50 bg-primary/10 text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-primary/25 relative flex h-8 w-8 items-center justify-center rounded-lg border font-mono text-xs transition-all duration-400 group-hover:scale-105 group-hover:shadow-lg sm:h-9 sm:w-9 sm:text-sm">
              <span className="glitch">{"HV"}</span>
            </div>
            <span className="font-mono text-xs tracking-tight sm:text-sm">
              HEET
              <span className="from-primary/50 to-accent bg-linear-to-l bg-clip-text font-semibold text-transparent">
                VIRADIYA
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground hover:bg-secondary/50 relative rounded-lg px-4 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-300",
                  hoveredIndex === index && "text-foreground",
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span
                  className={cn(
                    "text-primary absolute left-1.5 -translate-x-2 opacity-0 transition-all duration-200",
                    hoveredIndex === index && "translate-x-0 opacity-100",
                  )}
                >
                  {">"}
                </span>
                <span
                  className={cn(
                    "transition-transform duration-200",
                    hoveredIndex === index && "translate-x-2",
                  )}
                >
                  {item.label}
                </span>
                {/* Animated underline */}
                <span
                  className={cn(
                    "bg-primary absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full transition-all duration-300",
                    hoveredIndex === index ? "w-6" : "w-0",
                  )}
                />
              </a>
            ))}
            <div className="ml-2 flex items-center gap-1">
              <ThemeChanger />
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-1 sm:flex">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group text-muted-foreground hover:text-primary hover:bg-primary/10 relative flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300"
                >
                  <link.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="bg-card border-border text-muted-foreground pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md border px-2.5 py-1 font-mono text-[10px] whitespace-nowrap opacity-0 shadow-lg transition-all duration-200 group-hover:-bottom-9 group-hover:opacity-100">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="bg-border hidden h-5 w-px sm:block" />

            <div className="text-muted-foreground bg-secondary/50 border-border/50 hidden items-center gap-2.5 rounded-full border px-3 py-1.5 font-mono text-xs sm:flex">
              <span className="relative flex h-2 w-2">
                <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
              </span>
              <span>status: building</span>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="border-border bg-card/80 hover:bg-secondary flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm backdrop-blur-sm transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={cn(
                    "bg-foreground h-0.5 origin-center transition-all duration-300",
                    isMobileMenuOpen ? "w-5 translate-y-2 rotate-45" : "w-5",
                  )}
                />
                <span
                  className={cn(
                    "bg-foreground h-0.5 w-3.5 transition-all duration-300",
                    isMobileMenuOpen && "translate-x-2 opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "bg-foreground h-0.5 origin-center transition-all duration-300",
                    isMobileMenuOpen ? "w-5 -translate-y-2 -rotate-45" : "w-5",
                  )}
                />
              </div>
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "overflow-hidden transition-all duration-400 md:hidden",
            isMobileMenuOpen
              ? "max-h-[500px] pt-4 opacity-100"
              : "max-h-0 opacity-0",
          )}
        >
          <div className="border-border/50 bg-background/95 flex flex-col gap-1 rounded-lg border-t pt-4 backdrop-blur-lg">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground active:bg-secondary hover:text-foreground hover:bg-secondary/50 flex items-center gap-3 rounded-lg px-4 py-3.5 font-mono text-sm tracking-widest uppercase transition-all duration-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-primary">{">"}</span>
                {item.label}
              </a>
            ))}

            <div className="border-border/50 mt-4 flex items-center gap-2 border-t px-4 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="border-border/50 text-muted-foreground active:bg-secondary hover:border-primary/50 hover:text-primary hover:bg-primary/10 flex h-11 w-11 items-center justify-center rounded-lg border transition-colors"
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
              <div className="border-border/50 flex h-11 w-11 items-center justify-center rounded-lg border">
                <ThemeChanger openDirection="up" />
              </div>
              <div className="border-border/50 flex h-11 w-11 items-center justify-center rounded-lg border">
                <ThemeToggle />
              </div>
            </div>

            <div className="text-muted-foreground bg-secondary/30 mx-4 mt-3 mb-2 flex items-center gap-2.5 rounded-lg px-4 py-3 font-mono text-xs">
              <span className="relative flex h-2 w-2">
                <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
              </span>
              <span>status: building</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
