"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MouseParallaxProps {
  children: React.ReactNode;
  strength?: number; // How strong the effect should be (1-10)
  className?: string;
}

export default function MouseParallax({
  children,
  strength = 5,
  className = "",
}: MouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement with springs
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  // Transform into rotation values
  const rotateX = useTransform(
    springY,
    [-500, 500],
    [strength * 2, -strength * 2]
  );
  const rotateY = useTransform(
    springX,
    [-500, 500],
    [-strength * 2, strength * 2]
  );

  // State to track whether the mouse is over the component
  const [isHovered, setIsHovered] = useState(false);

  // Calculate mouse movement relative to center of element
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    // Get component position
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distances from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Update motion values
    mouseX.set(distanceX);
    mouseY.set(distanceY);
  };

  return (
    <motion.div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        perspective: 1000,
        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smooth easing transition
        zIndex: isHovered ? 10 : 1, // Add z-index to bring card forward on hover
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsHovered(false);
        // Reset position when mouse leaves
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <div
        style={{
          transform: isHovered ? "translateZ(40px)" : "translateZ(0)",
          transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Match the parent transition
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
