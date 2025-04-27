"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RevealAnimation from "./reveal-animation";
import GlowCard from "./glow-card";

// Define skill categories and items
const skillCategories = [
  {
    name: "Frontend",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12h10"></path>
        <path d="M9 4v16"></path>
        <path d="M14 9l3 3-3 3"></path>
        <path d="M14 4h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5"></path>
      </svg>
    ),
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    name: "Backend",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 9.5V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.5"></path>
        <path d="M2 14.5V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.5"></path>
        <rect width="20" height="5" x="2" y="9.5"></rect>
      </svg>
    ),
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    name: "Tools & Others",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 80 },
    ],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Skill Categories Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {skillCategories.map((category, index) => (
          <RevealAnimation key={category.name} delay={index * 0.1}>
            <button
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-primary hover:bg-muted"
              }`}
            >
              <span className="w-5 h-5">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </button>
          </RevealAnimation>
        ))}
      </div>

      {/* Skills Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories
          .find((category) => category.name === activeCategory)
          ?.skills.map((skill, index) => (
            <RevealAnimation key={skill.name} delay={index * 0.1} width="100%">
              <GlowCard>
                <div className="bg-card rounded-xl p-6 text-card-foreground">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-lg text-primary">
                      {skill.name}
                    </h3>
                    <span className="text-primary font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    ></motion.div>
                  </div>
                </div>
              </GlowCard>
            </RevealAnimation>
          ))}
      </div>

      {/* Skill Hexagons */}
      <RevealAnimation delay={0.3} width="100%" className="mt-16">
        <GlowCard>
          <div className="bg-card rounded-xl p-8 text-card-foreground">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">
              Skills Overview
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                ...new Set(
                  skillCategories.flatMap((category) =>
                    category.skills.map((skill) => skill.name)
                  )
                ),
              ].map((skillName, index) => {
                const skill = skillCategories
                  .flatMap((category) => category.skills)
                  .find((s) => s.name === skillName);
                const level = skill?.level || 50;
                const size = 80 + (level / 100) * 40; // Size based on skill level

                return (
                  <div
                    key={skillName}
                    className="relative"
                    style={{
                      width: size,
                      height: size,
                    }}
                  >
                    <div
                      className="absolute inset-0 flex items-center justify-center text-white text-center text-sm font-medium p-2"
                      style={{ zIndex: 10 }}
                    >
                      {skillName}
                    </div>
                    <svg
                      width={size}
                      height={size}
                      viewBox={`0 0 ${size} ${size}`}
                    >
                      <polygon
                        points={`${size / 2},0 ${size},${size / 4} ${size},${
                          (size * 3) / 4
                        } ${size / 2},${size} 0,${(size * 3) / 4} 0,${
                          size / 4
                        }`}
                        fill={`var(--hexagon-color-${index % 5})`}
                        className="hexagon-shape"
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>
        </GlowCard>
      </RevealAnimation>
    </div>
  );
}
