"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, SmartphoneIcon } from "lucide-react";
import RevealAnimation from "./reveal-animation";
import GlowCard from "./glow-card";
import MouseParallax from "./mouse-parallax";

// Project data based on CV
const projects = [
  {
    id: 1,
    title: "Confi Plant",
    description:
      "IoT software for greenhouse automation. Implemented MQTT for efficient device communication with a cloud platform featuring database integration and multiple frontends.",
    image: "/WebDashTemp.jpg",
    period: "05/2022 - Present",
    tags: [
      "Node.js",
      "React",
      "React Native",
      "MQTT",
      "WebSockets",
      "MongoDB",
      "Docker",
      "SSL",
    ],
    demoUrl: "https://dev.confiplant.cloud", // Replace with actual URL
    githubUrl: "https://github.com/BDKX16/react-admin-2", // Replace with actual URL
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.xavigmp.confiplant", // Replace with actual URL
  },
  {
    id: 2,
    title: "Content CRM",
    description:
      "Content management system for managing and distributing, and selling multimedia content. Built with React, TypeScript, and Tailwind CSS, it features a user-friendly interface and responsive design.",
    image: "/ContentCRM.jpg",

    period: "08/2024 - Present",
    tags: [
      "React",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "Node.js",
      "shadcn/ui",
    ],
    demoUrl: "#",
    githubUrl: null,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js and Tailwind CSS showcasing my skills, experience, and projects with smooth animations and responsive design.",
    image: "/portfolio.jpg",
    period: "04/2025 - Present",
    tags: [
      "Next.js",
      "OpenAI",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
      "n8n",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/BDKX16/portfolio-chat",
  },
];

export default function ProjectsSection() {
  return (
    <div className="flex flex-col gap-24 max-w-5xl mx-auto">
      {projects.map((project, index) => (
        <RevealAnimation
          key={project.id}
          width="100%"
          direction={index % 2 === 0 ? "left" : "right"}
          delay={0.1}
        >
          <MouseParallax strength={7}>
            <GlowCard>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 bg-card rounded-xl overflow-hidden`}
              >
                <div className="flex-1">
                  <div className="h-full">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center p-8 text-card-foreground">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  {project.period && (
                    <div className="text-sm text-muted-foreground mb-3">
                      {project.period}
                    </div>
                  )}
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-muted text-secondary hover:bg-muted/80"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.demoUrl && project.demoUrl !== "#" && (
                      <Button
                        size="sm"
                        asChild
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Website
                        </a>
                      </Button>
                    )}

                    {project.playStoreUrl && (
                      <Button
                        size="sm"
                        asChild
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SmartphoneIcon className="mr-2 h-4 w-4" />
                          Play Store
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </GlowCard>
          </MouseParallax>
        </RevealAnimation>
      ))}
    </div>
  );
}
