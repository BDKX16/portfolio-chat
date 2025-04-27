"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import RevealAnimation from "./reveal-animation";
import GlowCard from "./glow-card";

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates using WebSockets.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website with a custom CMS for easy content management.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "Sanity.io", "Framer Motion", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project3",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current and forecasted weather data from multiple APIs.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Redux", "OpenWeather API", "Chart.js"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project4",
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
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center p-8 text-card-foreground">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {project.title}
                </h3>
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

                <div className="flex gap-4">
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
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </GlowCard>
        </RevealAnimation>
      ))}
    </div>
  );
}
