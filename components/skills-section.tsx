"use client";

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
      { name: "Entity Framework", level: 60 },
      { name: "Microservices", level: 75 },
      { name: "Clean Architecture", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "Express", level: 78 },
      { name: "Java", level: 35 },
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
      { name: "React Native", level: 70 },
      { name: "Next.js", level: 75 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "CSS/Tailwind", level: 90 },
      { name: "Material UI", level: 95 },
      { name: "D3.js / Three.js", level: 70 },
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
      { name: "VPS", level: 82 },
      { name: "Docker", level: 85 },
      { name: "GitHub Actions", level: 90 },
      { name: "Nginx", level: 85 },
      { name: "EMQX", level: 90 },
      { name: "AWS", level: 60 },
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
      { name: "Communication", level: 80 },
      { name: "Fast Learning", level: 92 },
      { name: "Agile", level: 85 },
      { name: "Scrum", level: 90 },
      { name: "Problem Solving", level: 90 },
      { name: "Critical Thinking", level: 70 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <RevealAnimation key={category.name} delay={index * 0.1}>
            <GlowCard>
              <div className="bg-card rounded-xl p-6 text-card-foreground">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-6 text-primary">{category.icon}</span>
                  <h3 className="text-xl font-bold text-primary">
                    {category.name}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skill.name}
                      className="flex items-center text-card-foreground"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          </RevealAnimation>
        ))}
      </div>
    </div>
  );
}
