"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RevealAnimation from "./reveal-animation";
import GlowCard from "./glow-card";

// Define skill categories and items
const skillCategories = [
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
      { name: "C# (.NET Core)", level: 90 },
      { name: "ASP.NET MVC", level: 85 },
      { name: "Entity Framework", level: 82 },
      { name: "Microservices", level: 80 },
      { name: "Clean Architecture", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Express", level: 78 },
      { name: "API Integration", level: 88 },
    ],
  },
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
      { name: "React", level: 92 },
      { name: "Redux", level: 85 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "CSS/Tailwind", level: 90 },
      { name: "Material UI", level: 82 },
      { name: "D3.js / Three.js", level: 75 },
    ],
  },
  {
    name: "Databases",
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
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    skills: [
      { name: "SQL Server", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Database Design", level: 85 },
      { name: "Query Optimization", level: 80 },
    ],
  },
  {
    name: "DevOps & Cloud",
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
      { name: "AWS", level: 78 },
      { name: "VPS", level: 82 },
      { name: "Docker", level: 85 },
      { name: "Terraform", level: 75 },
      { name: "GitHub Actions", level: 80 },
      { name: "Nginx", level: 83 },
      { name: "EMQX", level: 80 },
    ],
  },
  {
    name: "Soft Skills",
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    skills: [
      { name: "Teamwork", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Fast Learning", level: 92 },
      { name: "Problem Solving", level: 90 },
      { name: "Critical Thinking", level: 88 },
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

      {/* Skill Radar Chart */}
      <RevealAnimation delay={0.4} width="100%" className="mt-16">
        <GlowCard>
          <div className="bg-card rounded-xl p-8 text-card-foreground">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">
              Skill Domains
            </h3>
            <div className="flex justify-center">
              <div className="relative w-[300px] h-[300px]">
                {/* Radar Background Circles */}
                {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-muted"
                    style={{
                      top: `${50 - 50 * scale}%`,
                      left: `${50 - 50 * scale}%`,
                      width: `${scale * 100}%`,
                      height: `${scale * 100}%`,
                      opacity: 0.3,
                    }}
                  ></div>
                ))}

                {/* Radar Lines */}
                {skillCategories.map((category, i) => {
                  const angle = (i * 2 * Math.PI) / skillCategories.length;
                  const x2 = 150 + 150 * Math.sin(angle);
                  const y2 = 150 - 150 * Math.cos(angle);
                  return (
                    <div
                      key={i}
                      className="absolute w-[1px] h-[150px] bg-muted"
                      style={{
                        top: "0%",
                        left: "50%",
                        transformOrigin: "bottom center",
                        transform: `rotate(${(i * 360) / skillCategories.length}deg)`,
                      }}
                    ></div>
                  );
                })}

                {/* Radar Data Points */}
                <svg
                  viewBox="0 0 300 300"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ overflow: "visible" }}
                >
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    d={
                      skillCategories
                        .map((category, i) => {
                          const avgLevel =
                            category.skills.reduce(
                              (sum, skill) => sum + skill.level,
                              0
                            ) / category.skills.length;
                          const scale = avgLevel / 100;
                          const angle = (i * 2 * Math.PI) / skillCategories.length;
                          const x = 150 + 150 * scale * Math.sin(angle);
                          const y = 150 - 150 * scale * Math.cos(angle);
                          return `${i === 0 ? "M" : "L"}${x},${y}`;
                        })
                        .join(" ") + " Z"
                    }
                    fill="var(--secondary)"
                    fillOpacity="0.2"
                    stroke="var(--primary)"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />

                  {skillCategories.map((category, i) => {
                    const avgLevel =
                      category.skills.reduce(
                        (sum, skill) => sum + skill.level,
                        0
                      ) / category.skills.length;
                    const scale = avgLevel / 100;
                    const angle = (i * 2 * Math.PI) / skillCategories.length;
                    const x = 150 + 150 * scale * Math.sin(angle);
                    const y = 150 - 150 * scale * Math.cos(angle);

                    return (
                      <motion.circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="6"
                        fill="var(--accent)"
                        stroke="var(--background)"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      />
                    );
                  })}
                </svg>

                {/* Labels */}
                {skillCategories.map((category, i) => {
                  const angle = (i * 2 * Math.PI) / skillCategories.length;
                  const labelDistance = 1.2; // Slightly outside the radar
                  const x = 150 + 150 * labelDistance * Math.sin(angle);
                  const y = 150 - 150 * labelDistance * Math.cos(angle);

                  return (
                    <div
                      key={i}
                      className="absolute text-sm font-medium text-primary"
                      style={{
                        top: `${y}px`,
                        left: `${x}px`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {category.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </GlowCard>
      </RevealAnimation>
    </div>
  );
}
