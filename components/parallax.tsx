"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number; // How much the element should move (higher = more movement)
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function Parallax({
  children,
  offset = 50,
  direction = "up",
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { scrollY } = useScroll();

  // Calculate the movement range based on the direction
  const getRange = () => {
    switch (direction) {
      case "up":
      case "down":
        return [offset * -1, offset];
      case "left":
      case "right":
        return [offset, offset * -1];
      default:
        return [offset * -1, offset];
    }
  };

  // Determine the property to transform based on direction
  const getProperty = () => {
    switch (direction) {
      case "up":
      case "down":
        return "translateY";
      case "left":
      case "right":
        return "translateX";
      default:
        return "translateY";
    }
  };

  // Reverse the range if direction is down or right
  const range =
    direction === "down" || direction === "right"
      ? [getRange()[1], getRange()[0]]
      : getRange();

  const property = getProperty();

  // This will define how much the element should move as we scroll
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    range
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updatePosition = () => {
      const { top } = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setElementTop(top + scrollTop);
      setClientHeight(window.innerHeight);
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <motion.div ref={ref} className={className} style={{ [property]: y }}>
      {children}
    </motion.div>
  );
}
