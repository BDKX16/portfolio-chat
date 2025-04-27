"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "var(--accent)", // Updated to use CSS variable directly
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // For the moving light effect
  const lightPosition = useMotionValue(0);
  const lightSpring = useSpring(lightPosition, { damping: 20, stiffness: 200 });

  // For the parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  useEffect(() => {
    if (ref.current) {
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }

    // Animate the light position continuously
    const interval = setInterval(() => {
      lightPosition.set((prev) => (prev + 1) % 400);
    }, 20);

    return () => clearInterval(interval);
  }, [lightPosition]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    // Calculate mouse position relative to the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate the center of the card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate the distance from the center (for parallax effect)
    const offsetX = (mouseX - centerX) / 10;
    const offsetY = (mouseY - centerY) / 10;

    x.set(offsetX);
    y.set(offsetY);

    setPosition({ x: mouseX, y: mouseY });
  };

  // Convert glowColor to a transparent version for the radial gradient
  const effectiveGlowColor =
    glowColor === "var(--accent)"
      ? "rgba(32, 105, 153, 0.5)" // Using #206999 with 0.5 opacity
      : glowColor;

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
        transition: "transform 0.1s ease",
      }}
    >
      {/* Background glow effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 opacity-30 rounded-xl"
          style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${effectiveGlowColor}, transparent 50%)`,
            zIndex: 0,
          }}
        />
      )}

      {/* Moving border light effect */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          boxShadow: `0 0 15px 2px ${effectiveGlowColor}`,
          zIndex: 0,
        }}
      />

      {/* Top border light */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] rounded-full"
        style={{
          width: size.width,
          background: `linear-gradient(90deg, transparent, ${effectiveGlowColor}, transparent)`,
          left: useTransform(lightSpring, (value) => `${value - 100}%`),
          opacity: isHovered ? 1 : 0,
          zIndex: 1,
        }}
      />

      {/* Right border light */}
      <motion.div
        className="absolute top-0 right-0 w-[2px] rounded-full"
        style={{
          height: size.height,
          background: `linear-gradient(180deg, transparent, ${effectiveGlowColor}, transparent)`,
          top: useTransform(
            lightSpring,
            (value) => `${((value + 100) % 400) - 100}%`
          ),
          opacity: isHovered ? 1 : 0,
          zIndex: 1,
        }}
      />

      {/* Bottom border light */}
      <motion.div
        className="absolute bottom-0 right-0 h-[2px] rounded-full"
        style={{
          width: size.width,
          background: `linear-gradient(90deg, transparent, ${effectiveGlowColor}, transparent)`,
          right: useTransform(
            lightSpring,
            (value) => `${((value + 200) % 400) - 100}%`
          ),
          opacity: isHovered ? 1 : 0,
          zIndex: 1,
        }}
      />

      {/* Left border light */}
      <motion.div
        className="absolute bottom-0 left-0 w-[2px] rounded-full"
        style={{
          height: size.height,
          background: `linear-gradient(180deg, transparent, ${effectiveGlowColor}, transparent)`,
          bottom: useTransform(
            lightSpring,
            (value) => `${((value + 300) % 400) - 100}%`
          ),
          opacity: isHovered ? 1 : 0,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 transform-style-3d"
        style={{ transform: "translateZ(20px)" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
