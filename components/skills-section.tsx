"use client";

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

// Technology logos with brand colors
const techLogos = [
  {
    name: "React",
    logo: (
      <svg viewBox="0 0 24 24" fill="#61DAFB" className="w-12 h-12">
        <circle cx="12" cy="12" r="2" />
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <rect width="24" height="24" fill="#3178C6" rx="3" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="bold"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <rect width="24" height="24" fill="#F7DF1E" rx="3" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fill="#000"
          fontSize="14"
          fontWeight="bold"
        >
          JS
        </text>
      </svg>
    ),
  },
  {
    name: "Node.js",
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path
          d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.275-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
          fill="#339933"
        />
      </svg>
    ),
  },
  {
    name: "C#",
    logo: (
      <svg viewBox="0 0 24 24" fill="#239120" className="w-12 h-12">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fill="white"
          fontSize="10"
          fontWeight="bold"
        >
          C#
        </text>
      </svg>
    ),
  },
  {
    name: "Next.js",
    logo: (
      <svg viewBox="0 0 24 24" fill="#000000" className="w-12 h-12">
        <circle cx="12" cy="12" r="10" fill="#000" />
        <path d="M18.665 5.653l-8.4 9.394V5.653h8.4z" fill="#fff" />
        <path d="M5.335 18.347L13.735 9V18.347H5.335z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Docker",
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <g fill="#2496ED">
          <rect x="2" y="10" width="2" height="2" />
          <rect x="5" y="9" width="2" height="2" />
          <rect x="5" y="11" width="2" height="2" />
          <rect x="8" y="8" width="2" height="2" />
          <rect x="8" y="10" width="2" height="2" />
          <rect x="8" y="12" width="2" height="2" />
          <rect x="11" y="7" width="2" height="2" />
          <rect x="11" y="9" width="2" height="2" />
          <rect x="11" y="11" width="2" height="2" />
          <rect x="14" y="9" width="2" height="2" />
          <rect x="14" y="11" width="2" height="2" />
          <rect x="17" y="10" width="2" height="2" />
        </g>
        <path
          d="M21.5 11.5c-.3-.7-.8-1.3-1.4-1.7-.6-.4-1.3-.6-2.1-.6-.2 0-.4 0-.6.1-.1-.3-.2-.6-.4-.9-.5-1.1-1.4-1.8-2.5-1.9-.1 0-.2 0-.3 0v-.6c0-1-.4-1.8-1-2.5s-1.5-1.1-2.4-1.1H3.5c-1 0-1.8.4-2.5 1s-1.1 1.5-1.1 2.4v6.6c0 1 .4 1.8 1 2.5s1.5 1.1 2.4 1.1h13.2c1 0 1.8-.4 2.5-1s1.1-1.5 1.1-2.4v-.1c.7 0 1.4-.2 2-.6.6-.4 1.1-1 1.3-1.6.4-.7.4-1.4 0-2.1z"
          fill="#2496ED"
        />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path
          d="M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.33 1.043 12.082.504 11.88 0c-.045.425-.12.763-.42 1.18C10.716 2.003 7.02 5.1 6.7 10.518c-.297 5.903 4.267 9.423 4.886 9.87.054.04.12.08.168.12h.351c.023 0 .046-.04.07-.08.025-.04.044-.08.069-.12.619-.447 5.213-3.967 4.915-9.87z"
          fill="#4FAA41"
        />
        <path
          d="M11.88 0c-.12.274-.12.548-.166.822-.046.274-.166.548-.274.822-.12.274-.24.548-.36.822-.12.274-.24.548-.36.548s-.24-.274-.36-.548c-.12-.274-.24-.548-.36-.822-.108-.274-.228-.548-.274-.822C9.7.548 9.7.274 9.58 0c0 0-.12.274-.12.548s.12.548.12.822.12.548.12.822.12.548.24.822c.12.274.36.548.6.548s.48-.274.6-.548c.12-.274.24-.548.24-.822s.12-.548.12-.822.12-.548.12-.822S11.88 0 11.88 0z"
          fill="#6CAC48"
        />
        <path
          d="M12.04 21.322c.12 0 .24-.12.36-.24.12-.12.24-.24.36-.36.12-.12.24-.24.24-.36s-.12-.24-.24-.36c-.12-.12-.24-.24-.36-.36-.12-.12-.24-.24-.36-.24s-.24.12-.36.24c-.12.12-.24.24-.36.36-.12.12-.24.24-.24.36s.12.24.24.36c.12.12.24.24.36.36.12.12.24.24.36.24z"
          fill="#C63B2A"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    logo: (
      <svg viewBox="0 0 24 24" fill="#06B6D4" className="w-12 h-12">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <rect x="2" y="8" width="20" height="8" fill="#FF9900" rx="2" />
        <text
          x="12"
          y="13"
          textAnchor="middle"
          fill="white"
          fontSize="8"
          fontWeight="bold"
        >
          AWS
        </text>
        <path d="M4 18l16-2v2c0 1-1 2-2 2H6c-1 0-2-1-2-2z" fill="#232F3E" />
      </svg>
    ),
  },
  {
    name: "SQL Server",
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <rect x="2" y="4" width="20" height="16" fill="#CC2927" rx="2" />
        <path d="M4 6h16v2H4z" fill="#E74C3C" />
        <path d="M4 9h16v2H4z" fill="#E74C3C" />
        <path d="M4 12h16v2H4z" fill="#E74C3C" />
        <path d="M4 15h16v2H4z" fill="#E74C3C" />
        <text
          x="12"
          y="13.5"
          textAnchor="middle"
          fill="white"
          fontSize="7"
          fontWeight="bold"
        >
          SQL
        </text>
      </svg>
    ),
  },
  {
    name: "Material UI",
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path
          d="M0 2.475v10.39l6 3.468V6.943l6 3.468v6.946l6-3.468V3.494L12 0 0 2.475zm18 4.157v6.946l6-3.468V3.494L18 6.632z"
          fill="#0081CB"
        />
        <circle cx="6" cy="12" r="2" fill="#0081CB" />
        <circle cx="12" cy="15" r="2" fill="#0081CB" />
        <circle cx="18" cy="12" r="2" fill="#0081CB" />
      </svg>
    ),
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

      {/* Technology Logos Slider */}
      <RevealAnimation delay={0.6} width="100%" className="mt-16">
        <div className="overflow-hidden bg-card/50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-primary mb-6 text-center">
            Technologies I Work With
          </h3>
          <div className="relative">
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: [0, -50 * techLogos.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{ width: `${techLogos.length * 2 * 100}px` }}
            >
              {/* First set of logos */}
              {techLogos.map((tech, index) => (
                <div
                  key={`first-${tech.name}`}
                  className="flex flex-col items-center gap-2 min-w-[80px] group cursor-pointer"
                >
                  <div className="transition-transform group-hover:scale-110">
                    {tech.logo}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {techLogos.map((tech, index) => (
                <div
                  key={`second-${tech.name}`}
                  className="flex flex-col items-center gap-2 min-w-[80px] group cursor-pointer"
                >
                  <div className="transition-transform group-hover:scale-110">
                    {tech.logo}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </RevealAnimation>
    </div>
  );
}
