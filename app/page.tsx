import { Suspense } from "react";
import ChatInterface from "@/components/chat-interface";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import TimelineSection from "@/components/timeline-section";
import { Toaster } from "@/components/ui/toaster";
import RevealAnimation from "@/components/reveal-animation";
import GlowCard from "@/components/glow-card";
import MouseParallax from "@/components/mouse-parallax";
import Navbar from "@/components/navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen bg-background"
        itemScope
        itemType="http://schema.org/ProfilePage"
      >
        {/* Responsive Navbar */}
        <Navbar />

        {/* Hero Section with Gradient Background */}
        <section id="chat" className="text-accent py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <RevealAnimation direction="up" delay={0.1}>
                <h1
                  className="text-4xl font-bold mb-6 md:text-5xl lg:text-6xl"
                  itemProp="headline"
                >
                  Hi, I'm{" "}
                  <span className="text-primary" itemProp="name">
                    Xavier Galarreta
                  </span>
                </h1>
              </RevealAnimation>

              <RevealAnimation direction="up" delay={0.2}>
                <h1 className="text-xl mb-8 " itemProp="description">
                  Full Stack Developer specialized en React, .NET y Architecture
                  Design
                </h1>
              </RevealAnimation>

              <RevealAnimation direction="up" delay={0.3}>
                <div className="flex justify-center gap-4">
                  <a
                    href="#projects"
                    className="bg-background text-primary px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all"
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className="bg-transparent border-2 border-background px-6 py-2 rounded-full font-medium hover:bg-background hover:bg-opacity-10 transition-all"
                  >
                    Contact Me
                  </a>
                </div>
              </RevealAnimation>
            </div>

            <div className="mx-auto mt-8 max-w-[800px]">
              <RevealAnimation direction="up" delay={0.2} width="100%">
                <Suspense
                  fallback={
                    <div className="h-[500px] rounded-lg border border-border animate-pulse" />
                  }
                >
                  <ChatInterface />
                </Suspense>
              </RevealAnimation>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20"
          itemScope
          itemType="http://schema.org/CollectionPage"
        >
          <div className="container">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center mb-16">
              <RevealAnimation direction="up">
                <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-primary">
                  My Projects
                </h2>
              </RevealAnimation>
              <RevealAnimation direction="up" delay={0.1}>
                <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                  Portfolio of work and personal projects in React, .NET, Vue,
                  and other technologies
                </p>
              </RevealAnimation>
            </div>
            <ProjectsSection />
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20 bg-card"
          itemScope
          itemType="http://schema.org/ItemList"
        >
          <div className="container">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center mb-16">
              <RevealAnimation direction="up">
                <h2
                  className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-primary"
                  itemProp="name"
                >
                  My Skills
                </h2>
              </RevealAnimation>
              <RevealAnimation direction="up" delay={0.1}>
                <p
                  className="max-w-[750px] text-lg text-muted-foreground sm:text-xl"
                  itemProp="description"
                >
                  Technologies I exel at: React, Vue, .NET, JavaScript,
                  TypeScript, C#, and more
                </p>
              </RevealAnimation>
            </div>
            <SkillsSection />
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-20 bg-muted">
          <div className="container">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center mb-16">
              <RevealAnimation direction="up">
                <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-primary">
                  My Journey
                </h2>
              </RevealAnimation>
              <RevealAnimation direction="up" delay={0.1}>
                <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                  A timeline of my professional experience and educational
                  background
                </p>
              </RevealAnimation>
            </div>
            <TimelineSection />
          </div>
        </section>

        {/* About Section with Profile Image */}
        <section id="about" className="container py-20">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <RevealAnimation direction="up">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-primary">
                About Me
              </h2>
            </RevealAnimation>
            <RevealAnimation direction="up" delay={0.1}>
              <p className="max-w-[750px] text-lg text-muted-foreground mb-8">
                Personal background, interests, and hobbies
              </p>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.2} width="100%">
              <div className="flex flex-col md:flex-row gap-8">
                <MouseParallax strength={8}>
                  <GlowCard>
                    <div className="bg-card rounded-xl text-card-foreground flex flex-col gap-8">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                          <p className="mb-6">
                            I´m a full stack developer with over 3 years of
                            experience, specializing in .NET and frontend
                            technologies such as React and Vue. I have a passion
                            for creating efficient and scalable applications
                            that solve real-world problems, always aiming to
                            enhance user experience through intuitive interfaces
                            and innovative features.
                          </p>
                          <p>
                            I have experience in clean architecture,
                            microservices, and agile methodologies, which allows
                            me to adapt to different environments and work
                            effectively in teams. I am always eager to learn and
                            grow, and I am excited to take on new challenges
                            that push my skills to the next level.
                          </p>
                        </div>
                        <div className="flex-1 max-w-xs mx-auto">
                          <img
                            src="/profile.webp"
                            alt="Xavier Galarreta"
                            className="w-full h-auto object-cover rounded-top-left-xl rounded-top-right-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </MouseParallax>
              </div>
            </RevealAnimation>
          </div>
        </section>

        {/* Contact Section with improved structured data */}
        <section
          id="contact"
          className="py-20 gradient-bg text-primary-foreground"
          itemScope
          itemType="http://schema.org/ContactPage"
        >
          <div className="container">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center mb-12">
              <RevealAnimation direction="up">
                <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
                  Contacto
                </h2>
              </RevealAnimation>
              <RevealAnimation direction="up" delay={0.1}>
                <p className="max-w-[750px] text-lg opacity-90">
                  ¿Interesado en trabajar conmigo? Contáctame para desarrollar
                  tu próximo proyecto
                </p>
              </RevealAnimation>
            </div>

            <RevealAnimation
              direction="up"
              delay={0.2}
              width="100%"
              className="flex justify-center"
            >
              <GlowCard glowColor="rgba(255, 255, 255, 0.3)">
                <MouseParallax strength={8}>
                  <div className="max-w-md mx-auto bg-card p-8 rounded-xl text-card-foreground">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary rounded-full p-2">
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
                            className="text-primary-foreground"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <span>+54 (223) 634-4785</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary rounded-full p-2">
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
                            className="text-primary-foreground"
                          >
                            <rect
                              width="20"
                              height="16"
                              x="2"
                              y="4"
                              rx="2"
                            ></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                        </div>
                        <span>xgalarreta.dev@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary rounded-full p-2">
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
                            className="text-primary-foreground"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <span>Mar del Plata, Buenos Aires</span>
                      </div>
                    </div>
                  </div>
                </MouseParallax>
              </GlowCard>
            </RevealAnimation>
          </div>
        </section>

        <footer className="bg-primary text-primary-foreground py-8">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm leading-loose md:text-left">
              © {new Date().getFullYear()} Xavier Galarreta | Full Stack
              Developer | React, .NET, Vue
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/xavier-galarreta-52a076212/"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn de Xavier Galarreta"
                rel="noopener noreferrer"
              >
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/BDKX16"
                className="hover:text-accent transition-colors"
              >
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
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/xavi.galarreta/"
                className="hover:text-accent transition-colors"
              >
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
                  <rect width="20" height="20" x="2" y="2" rx="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.5" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </footer>

        <Toaster />
      </main>
    </>
  );
}
