"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "var(--accent)",
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Track light position around border
  const lightPosition = useMotionValue(0);
  const lightSpring = useSpring(lightPosition, { damping: 20, stiffness: 200 });

  useEffect(() => {
    if (ref.current) {
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }

    // Animate the light position continuously
    const interval = setInterval(() => {
      lightPosition.set((prev) => (prev + 1) % 400); // Complete loop around card
    }, 20); // Speed of animation

    return () => clearInterval(interval);
  }, [lightPosition]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    setPosition({ x: mouseX, y: mouseY });
  };

  // Convert glowColor to a transparent version for effects
  const effectiveGlowColor =
    glowColor === "var(--accent)"
      ? "rgba(32, 105, 153, 0.5)" // Base glow color with transparency
      : glowColor;

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ zIndex: isHovered ? 10 : 1 }}
    >
      {/* Background glow effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 opacity-30 rounded-xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${effectiveGlowColor}, transparent 50%)`,
            zIndex: 0,
          }}
        />
      )}

      {/* Base outer glow */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          boxShadow: isHovered
            ? `0 0 15px 2px ${effectiveGlowColor}`
            : `0 0 5px 0px ${effectiveGlowColor}`,
          opacity: isHovered ? 1 : 0.3,
          transition: "box-shadow 0.3s ease, opacity 0.3s ease",
          zIndex: 0,
        }}
      />

      {/* Top border light */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] rounded-full pointer-events-none"
        style={{
          width: size.width,
          background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
          left: useTransform(lightSpring, (value) => `${value - 100}%`),
          opacity: isHovered ? 1 : 0.3,
          boxShadow: `0 0 10px 2px ${effectiveGlowColor}`,
          zIndex: 1,
        }}
      />

      {/* Right border light */}
      <motion.div
        className="absolute top-0 right-0 w-[2px] rounded-full pointer-events-none"
        style={{
          height: size.height,
          background: `linear-gradient(180deg, transparent, ${glowColor}, transparent)`,
          top: useTransform(
            lightSpring,
            (value) => `${((value + 100) % 400) - 100}%`
          ),
          opacity: isHovered ? 1 : 0.3,
          boxShadow: `0 0 10px 2px ${effectiveGlowColor}`,
          zIndex: 1,
        }}
      />

      {/* Bottom border light */}
      <motion.div
        className="absolute bottom-0 right-0 h-[2px] rounded-full pointer-events-none"
        style={{
          width: size.width,
          background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
          right: useTransform(
            lightSpring,
            (value) => `${((value + 200) % 400) - 100}%`
          ),
          opacity: isHovered ? 1 : 0.3,
          boxShadow: `0 0 10px 2px ${effectiveGlowColor}`,
          zIndex: 1,
        }}
      />

      {/* Left border light */}
      <motion.div
        className="absolute bottom-0 left-0 w-[2px] rounded-full pointer-events-none"
        style={{
          height: size.height,
          background: `linear-gradient(180deg, transparent, ${glowColor}, transparent)`,
          bottom: useTransform(
            lightSpring,
            (value) => `${((value + 300) % 400) - 100}%`
          ),
          opacity: isHovered ? 1 : 0.3,
          boxShadow: `0 0 10px 2px ${effectiveGlowColor}`,
          zIndex: 1,
        }}
      />

      {/* Moving spark - this is the visible "spark" that travels around the border */}
      <motion.div
        className="absolute w-5 h-5 rounded-full pointer-events-none"
        style={{
          background: glowColor,
          boxShadow: `0 0 15px 5px ${effectiveGlowColor}`,
          zIndex: 2,
          opacity: isHovered ? 0.8 : 0.3,
          // Complex transforms to position the spark correctly at each edge
          top: useTransform(lightSpring, (value) => {
            if (value < 100) return "0px";
            if (value < 200) return `${((value - 100) / 100) * size.height}px`;
            if (value < 300) return `${size.height}px`;
            return `${(1 - (value - 300) / 100) * size.height}px`;
          }),
          left: useTransform(lightSpring, (value) => {
            if (value < 100) return `${(value / 100) * size.width}px`;
            if (value < 200) return `${size.width}px`;
            if (value < 300)
              return `${(1 - (value - 200) / 100) * size.width}px`;
            return "0px";
          }),
          scale: isHovered ? 1 : 0.5,
          transition: "opacity 0.3s ease, scale 0.3s ease",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
