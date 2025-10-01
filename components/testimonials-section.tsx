"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowCard from "./glow-card";
import RevealAnimation from "./reveal-animation";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  linkedIn?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Franco Caldarola",
    position: "Tech Lead",
    company: "Softtek",
    content:
      "Xavier es un desarrollador que fue creciendo mucho dentro del equipo. Mostró iniciativa, aportando ideas nuevas y siempre buscó mejorar. Gracias a su esfuerzo y dedicación dio un salto de senority, adaptándose con facilidad a la magnitud y los desafíos de la empresa. Esto recién comienza Xavi!",
    rating: 0,
    linkedIn: "https://linkedin.com/in/franco-caldarola",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      }
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full">
      <div className="relative max-w-4xl mx-auto overflow-hidden min-h-[350px] flex flex-col justify-center">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="w-full flex justify-center px-4"
          >
            <GlowCard className="cursor-grab active:cursor-grabbing w-full max-w-2xl mx-auto">
              <div className="bg-card p-8 rounded-xl text-card-foreground">
                <div className="flex items-start gap-4 mb-6">
                  <Quote
                    className="text-primary flex-shrink-0 mt-1"
                    size={24}
                  />
                  <p className="text-lg leading-relaxed italic">
                    "{currentTestimonial.content}"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {currentTestimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {currentTestimonial.position} at{" "}
                        {currentTestimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {currentTestimonial.rating > 0 &&
                      [...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-500 fill-current"
                          size={16}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="p-3 bg-primary/20 hover:bg-primary/30 rounded-full transition-colors"
          >
            <ChevronLeft className="text-primary" size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="p-3 bg-primary/20 hover:bg-primary/30 rounded-full transition-colors"
          >
            <ChevronRight className="text-primary" size={24} />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
