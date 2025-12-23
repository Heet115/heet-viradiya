"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Heet115",
    handle: "@Heet115",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/heet-viradiya-919198369",
    handle: "heet-viradiya",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:hpviradiya05@gmail.com",
    handle: "hpviradiya05@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
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
    <footer
      ref={sectionRef}
      id="connect"
      className="border-border/30 border-t px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div
            className={cn(
              "space-y-6 opacity-0 sm:space-y-8",
              isVisible && "animate-fade-in-up",
            )}
          >
            <div className="space-y-3">
              <p className="text-primary font-mono text-xs tracking-[0.25em] uppercase sm:tracking-[0.35em]">
                Connect
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                {"Let's build something "}
                <span className="from-primary/50 to-accent bg-gradient-to-l bg-clip-text text-transparent">
                  together
                </span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-base leading-relaxed sm:text-lg">
              Always interested in collaborations, interesting problems, and
              conversations about code, design, and everything in between.
            </p>

            <div className="pt-2">
              <a
                href="mailto:hpviradiya05@gmail.com"
                className="group border-primary bg-primary/10 text-primary hover:text-primary-foreground relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl border px-8 py-4 font-mono text-sm transition-all duration-500 active:scale-[0.98] sm:w-auto sm:py-4"
              >
                <span className="relative z-10">send a signal</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
                <span className="bg-primary absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
              </a>
            </div>
          </div>

          {/* Right column - Links */}
          <div
            className={cn(
              "space-y-6 opacity-0 lg:text-right",
              isVisible && "animate-fade-in-up stagger-2",
            )}
          >
            <p className="text-muted-foreground font-mono text-xs tracking-[0.25em] uppercase sm:tracking-[0.35em]">
              Find me elsewhere
            </p>
            <div className="space-y-2">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={
                    link.label !== "Email" ? "noopener noreferrer" : undefined
                  }
                  className={cn(
                    "group active:bg-secondary/30 flex items-center justify-between gap-4 rounded-xl border border-transparent p-4 opacity-0 transition-all duration-300 lg:flex-row-reverse",
                    isVisible && "animate-fade-in",
                    hoveredLink === link.label &&
                      "border-border/50 bg-card/50 glass",
                  )}
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <div className="flex items-center gap-3 lg:flex-row-reverse">
                    <link.icon className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                    <span className="group-hover:text-gradient font-mono text-sm font-medium transition-colors">
                      {link.label}
                    </span>
                    {link.label !== "Email" && (
                      <ExternalLink className="text-muted-foreground/50 h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    )}
                  </div>
                  <span className="text-muted-foreground truncate font-mono text-xs">
                    {link.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "border-border/30 mt-16 flex flex-col items-center justify-between gap-6 border-t pt-8 opacity-0 sm:mt-20 sm:flex-row sm:pt-10",
            isVisible && "animate-fade-in stagger-4",
          )}
        >
          <div className="text-muted-foreground flex items-center gap-2.5 font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
            </span>
            <span>Forged with</span>
            <Heart className="text-destructive h-3.5 w-3.5 animate-pulse" />
            <span>& code</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground/50 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-center font-mono text-xs sm:text-right">
            © {new Date().getFullYear()} HEET VIRADIYA — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
