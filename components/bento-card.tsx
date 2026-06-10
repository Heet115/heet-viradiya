"use client";

import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Create a motion-enabled version of Card
const MotionCard = motion.create(Card);

interface BentoCardProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  visual?: React.ReactNode;
  showArrow?: boolean;
  href?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function BentoCard({ title, className, children, visual, showArrow = true, href, onMouseEnter, onMouseLeave }: BentoCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    if (onMouseLeave) onMouseLeave();
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
  };

  const CardContent = (
      <MotionCard
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "group relative flex h-full w-full flex-col justify-end overflow-hidden",
          href ? "cursor-pointer" : "cursor-default",
          "transition-[box-shadow,border-color,background-color] duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-white/5",
          "!bg-black/[0.03] dark:!bg-white/[0.02] !border-black/[0.08] dark:!border-white/[0.08] backdrop-blur-[32px] rounded-[2.5rem] p-10"
        )}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/5 dark:from-black/40 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"
          style={{ transform: "translateZ(-10px)" }}
        ></div>
        
        {visual && (
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center" style={{ transform: "translateZ(0px)" }}>
            {visual}
          </div>
        )}

        {children && <div className="relative z-10 mb-4" style={{ transform: "translateZ(20px)" }}>{children}</div>}

        <div className="relative z-10 flex w-full items-end justify-between mt-auto" style={{ transform: "translateZ(30px)" }}>
          {title && <span className="text-lg font-medium tracking-tight text-foreground">{title}</span>}
          {showArrow && href && (
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
            />
          )}
        </div>
      </MotionCard>
  );

  return (
    <div className={cn("relative perspective-[1200px]", className)}>
      {href ? (
        <Link href={href} className="block h-full w-full outline-none">
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </div>
  );
}
