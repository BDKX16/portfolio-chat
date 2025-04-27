"use client";
import RevealAnimation from "./reveal-animation";
import GlowCard from "./glow-card";
import { Briefcase, GraduationCap, Calendar, Award } from "lucide-react";

// Work experience data
const workExperience = [
  {
    id: 1,
    role: "Software Developer",
    company: "Softtek",
    location: "Argentina",
    period: "12/2023 - Present",
    description:
      "Development and maintenance of applications in .NET Core. Use of technologies like LINQ, NHibernate, and Vue, integrating APIs such as Arca (ex AFIP) and Mercado Pago. Implementation of Clean Architecture and development best practices. Integration of REST and SOAP APIs and optimization of queries in SQL Server databases.",
    skills: [
      ".NET Core",
      "LINQ",
      "NHibernate",
      "Vue",
      "SQL Server",
      "REST",
      "SOAP",
    ],
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "NTT DATA Services",
    location: "Argentina",
    period: "08/2021 - 11/2023",
    description:
      "Gained experience in both frontend and backend, creating optimized interfaces for Movistar Empresas and Techint. Worked with REST APIs, SQL, and .NET. Participated in agile teams applying Scrum and collaborated with UI/UX designers to develop intuitive and scalable solutions.",
    skills: ["Frontend", "Backend", "REST APIs", "SQL", ".NET", "Scrum"],
  },
];

// Education data
const education = [
  {
    id: 1,
    degree: "Associate Degree in Programming & Information Systems",
    institution: "Universidad Tecnológica Nacional (UTN)",
    location: "Argentina",
    period: "2 pending finals",
    description:
      "Specialized coursework in programming and information systems development.",
  },
];

// Certifications data
const certifications = [
  {
    id: 1,
    title: "Master in React (MERN Stack)",
    issuer: "Udemy",
  },
  {
    id: 2,
    title: "Docker: The Practical Guide (2023 Edition)",
    issuer: "Udemy",
  },
  {
    id: 3,
    title: "EMQX Broker MQTT",
    issuer: "Udemy",
  },
  {
    id: 4,
    title: "A Complete Guide to User Experience",
    issuer: "Udemy",
  },
  {
    id: 5,
    title: "IoT Bootcamp (Nuxt - Node - Mongo - EMQX)",
    issuer: "Udemy",
  },
];

export default function TimelineSection() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Work Experience */}
      <RevealAnimation direction="up" delay={0.1}>
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary p-2 rounded-full">
            <Briefcase className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-primary">Work Experience</h3>
        </div>
      </RevealAnimation>

      <div className="relative ml-4 pl-10 border-l-2 border-muted mb-16">
        {workExperience.map((job, index) => (
          <RevealAnimation
            key={job.id}
            direction="left"
            delay={index * 0.1}
            width="100%"
          >
            <div className="mb-12 relative">
              {/* Timeline dot */}
              <div className="absolute -left-[3.25rem] w-6 h-6 bg-primary rounded-full flex items-center justify-center timeline-dot">
                <div className="w-3 h-3 bg-background rounded-full"></div>
              </div>

              <GlowCard className="mb-4">
                <div className="bg-card p-6 rounded-xl text-card-foreground">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-primary">
                      {job.role}
                    </h4>
                    <div className="flex items-center text-muted-foreground mt-1 md:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{job.period}</span>
                    </div>
                  </div>

                  <div className="text-lg font-medium text-secondary mb-3">
                    {job.company} • {job.location}
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>

                  {job.skills && (
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-muted text-secondary rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </GlowCard>
            </div>
          </RevealAnimation>
        ))}
      </div>

      {/* Education */}
      <RevealAnimation direction="up" delay={0.1}>
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-accent p-2 rounded-full">
            <GraduationCap className="h-6 w-6 text-accent-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-primary">Education</h3>
        </div>
      </RevealAnimation>

      <div className="relative ml-4 pl-10 border-l-2 border-muted mb-16">
        {education.map((edu, index) => (
          <RevealAnimation
            key={edu.id}
            direction="left"
            delay={index * 0.1}
            width="100%"
          >
            <div className="mb-12 relative">
              {/* Timeline dot */}
              <div className="absolute -left-[3.25rem] w-6 h-6 bg-accent rounded-full flex items-center justify-center timeline-dot">
                <div className="w-3 h-3 bg-background rounded-full"></div>
              </div>

              <GlowCard className="mb-4">
                <div className="bg-card p-6 rounded-xl text-card-foreground">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-primary">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center text-muted-foreground mt-1 md:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>

                  <div className="text-lg font-medium text-secondary mb-3">
                    {edu.institution} • {edu.location}
                  </div>

                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </GlowCard>
            </div>
          </RevealAnimation>
        ))}
      </div>

      {/* Certifications */}
      <RevealAnimation direction="up" delay={0.1}>
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-secondary p-2 rounded-full">
            <Award className="h-6 w-6 text-secondary-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-primary">Certifications</h3>
        </div>
      </RevealAnimation>

      <div className="relative ml-4 pl-10 border-l-2 border-muted mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <RevealAnimation
              key={cert.id}
              direction="left"
              delay={index * 0.05}
              width="100%"
            >
              <div className="mb-4 relative">
                {/* Timeline dot */}
                <div className="absolute -left-[3.25rem] w-4 h-4 bg-secondary rounded-full flex items-center justify-center timeline-dot">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>

                <GlowCard>
                  <div className="bg-card p-4 rounded-xl text-card-foreground">
                    <div className="flex flex-col">
                      <h4 className="text-md font-bold text-primary">
                        {cert.title}
                      </h4>
                      <div className="text-sm text-muted-foreground">
                        Issued by: {cert.issuer}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
