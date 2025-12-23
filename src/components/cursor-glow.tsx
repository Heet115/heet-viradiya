"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth spring animation for cursor following
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    },
    [cursorX, cursorY],
  );

  useEffect(() => {
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'a, button, [role="button"], input, textarea, select',
      );
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [handleMouseMove]);

  return (
    <>
      {/* Main glow effect */}
      <motion.div
        className="cursor-glow pointer-events-none fixed hidden lg:block"
        style={{
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.25 : 1,
        }}
        transition={{
          opacity: { duration: 0.4 },
          scale: { duration: 0.3, ease: "easeOut" },
        }}
      />

      {/* Inner glow dot */}
      <motion.div
        className="pointer-events-none fixed hidden h-8 w-8 rounded-full mix-blend-screen lg:block"
        style={{
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          filter: "blur(4px)",
        }}
        animate={{
          opacity: isVisible ? 0.2 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.2, ease: "easeOut" },
        }}
      />

      {/* Trailing particles effect */}
      <motion.div
        className="pointer-events-none fixed hidden h-4 w-4 rounded-full lg:block"
        style={{
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
          background: "var(--primary)",
          filter: "blur(8px)",
        }}
        animate={{
          opacity: isVisible ? 0.1 : 0,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          opacity: { duration: 0.3 },
          scale: { duration: 0.4, ease: "easeOut" },
        }}
      />
    </>
  );
}
