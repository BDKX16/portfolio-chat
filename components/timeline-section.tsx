"use client";
import RevealAnimation from "./reveal-animation";
import GlowCard from "./glow-card";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

// Sample timeline data - replace with your actual experience and education
const workExperience = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description:
      "Led the development of the company's flagship product, improving performance by 40%. Mentored junior developers and implemented best practices for code quality.",
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    period: "2018 - 2021",
    description:
      "Developed responsive web applications for clients in various industries. Collaborated with designers and backend developers to deliver high-quality products.",
    skills: ["React", "JavaScript", "CSS", "RESTful APIs"],
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "StartUp Ventures",
    location: "Boston, MA",
    period: "2017 - 2018",
    description:
      "Assisted in the development of web applications. Gained experience in modern web development practices and tools.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];

const education = [
  {
    id: 1,
    degree: "Master of Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2019 - 2021",
    description:
      "Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "MIT",
    location: "Cambridge, MA",
    period: "2015 - 2019",
    description:
      "Focused on Software Engineering and Data Structures. Participated in hackathons and coding competitions.",
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

      <div className="relative ml-4 pl-10 border-l-2 border-muted">
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
    </div>
  );
}
