"use client";

import { motion } from "framer-motion";
import RevealAnimation from "./reveal-animation";

// Companies logos
const companies = [
  {
    name: "Prevención Salud",
    url: "https://www.prevencionsalud.com.ar/",
    logo: (
      <img
        src="/prevencion-salud-logo.webp"
        alt="Prevención Salud"
        className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
      />
    ),
  },
  {
    name: "Ternium",
    url: "https://www.ternium.com/",
    logo: (
      <img
        src="/ternium-logo.png"
        alt="Ternium"
        className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
      />
    ),
  },
  {
    name: "Softtek",
    url: "https://www.softtek.com/",
    logo: (
      <img
        src="/softtek-logo.png"
        alt="Softtek"
        className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
      />
    ),
  },
  {
    name: "NTT Data",
    url: "https://www.nttdata.com/",
    logo: (
      <img
        src="/ntt-data-logo.png"
        alt="NTT Data"
        className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
      />
    ),
  },
  {
    name: "Movistar",
    url: "https://www.movistar.com.ar/",
    logo: (
      <img
        src="/movistar-logo.png"
        alt="Movistar"
        className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
      />
    ),
  },
  {
    name: "YPF",
    url: "https://www.ypf.com/",
    logo: (
      <img
        src="/ypf-logo.png"
        alt="YPF"
        className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
      />
    ),
  },
];

export default function CompanySlider() {
  const handleCompanyClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-screen overflow-hidden bg-background/50 py-12 border-y border-border/50">
      <RevealAnimation delay={0.2} width="100%">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-muted-foreground mb-2">
            Trusted by companies like
          </h3>
        </div>
        <div className="relative">
          <motion.div
            className="flex gap-12 items-center justify-center"
            animate={{
              x: [0, -50 * companies.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            }}
            style={{ width: `${companies.length * 4 * 150}px` }}
          >
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${company.name}`}
                className="flex items-center justify-center min-w-[120px] group cursor-pointer"
                onClick={() => handleCompanyClick(company.url)}
              >
                <div className="transition-transform group-hover:scale-110">
                  {company.logo}
                </div>
              </div>
            ))}
            {/* Second set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${company.name}`}
                className="flex items-center justify-center min-w-[120px] group cursor-pointer"
                onClick={() => handleCompanyClick(company.url)}
              >
                <div className="transition-transform group-hover:scale-110">
                  {company.logo}
                </div>
              </div>
            ))}
            {/* Third set for better coverage */}
            {companies.map((company, index) => (
              <div
                key={`third-${company.name}`}
                className="flex items-center justify-center min-w-[120px] group cursor-pointer"
                onClick={() => handleCompanyClick(company.url)}
              >
                <div className="transition-transform group-hover:scale-110">
                  {company.logo}
                </div>
              </div>
            ))}
            {/* Fourth set for large screens */}
            {companies.map((company, index) => (
              <div
                key={`fourth-${company.name}`}
                className="flex items-center justify-center min-w-[120px] group cursor-pointer"
                onClick={() => handleCompanyClick(company.url)}
              >
                <div className="transition-transform group-hover:scale-110">
                  {company.logo}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </RevealAnimation>
    </div>
  );
}
