"use client";

import { motion } from "framer-motion";
import RevealAnimation from "./reveal-animation";

// Technology logos with brand colors
const techLogos = [
  {
    name: "React",
    url: "https://reactjs.org/",
    logo: (
      <img
        src="/react-logo.png"
        alt="React"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
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
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
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
    url: "https://nodejs.org/",
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
    url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
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
    url: "https://nextjs.org/",
    logo: (
      <img
        src="/nextjs-logo.png"
        alt="Next.js"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "GitLab",
    url: "https://gitlab.com/",
    logo: (
      <img
        src="/gitlab-logo.png"
        alt="GitLab"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "Docker",
    url: "https://www.docker.com/",
    logo: (
      <img
        src="/docker-logo.png"
        alt="Docker"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    logo: (
      <img
        src="/mongodb-logo.png"
        alt="MongoDB"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "Tailwind",
    url: "https://tailwindcss.com/",
    logo: (
      <svg viewBox="0 0 24 24" fill="#06B6D4" className="w-12 h-12">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    url: "https://aws.amazon.com/",
    logo: (
      <img src="/aws-logo.png" alt="AWS" className="w-12 h-12 object-contain" />
    ),
  },
  {
    name: "SQL Server",
    url: "https://www.microsoft.com/en-us/sql-server/",
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
    url: "https://mui.com/",
    logo: (
      <img
        src="/materialui-logo.png"
        alt="Material UI"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "Figma",
    url: "https://www.figma.com/",
    logo: (
      <img
        src="/figma-logo.png"
        alt="Figma"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    logo: (
      <img
        src="/github-logo.png"
        alt="GitHub"
        className="w-12 h-12 object-contain"
      />
    ),
  },
];

export default function TechSlider() {
  const handleTechClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-screen overflow-hidden bg-card/50 py-8">
      <RevealAnimation delay={0.3} width="100%">
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
                onClick={() => handleTechClick(tech.url)}
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
                onClick={() => handleTechClick(tech.url)}
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
      </RevealAnimation>
    </div>
  );
}
