"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Download,
  ExternalLink,
  Github,
  SmartphoneIcon,
  X,
} from "lucide-react";
import RevealAnimation from "./reveal-animation";
import GlowCard from "./glow-card";
import MouseParallax from "./mouse-parallax";

// Project data based on CV
const projects = [
  {
    id: 1,
    title: "Nota Importados",
    description:
      "E-commerce especializado en perfumes de lujo importados, desarrollado para empresa marplatense. Plataforma completa con catálogo avanzado, sistema de pagos y panel administrativo.",
    detailedDescription:
      "Nota Importados es una plataforma de e-commerce desarrollada específicamente para la importación y venta de perfumes de lujo en Buenos Aires. El sitio cuenta con un catálogo sofisticado que permite a los usuarios explorar fragancias por marca, familia olfativa y ocasión de uso. Incluye sistema de carrito de compras, múltiples métodos de pago, gestión de stock en tiempo real y un panel administrativo completo para gestionar productos, pedidos y clientes. El diseño está optimizado para ofrecer una experiencia de usuario fluida y atractiva, con un enfoque en la facilidad de navegación y la presentación visual de los productos, con un footer completo y con soporte completo para la mejor experiencia de usuario en todos sus aspectos.",
    image: "/Nota2.jpg",
    images: ["/Nota2.jpg", "/Nota4.jpg", "/Nota5.jpg", "/Nota3.jpg"],
    period: "08/2025 - 09/2025",
    tags: [
      "Next.js",
      "TypeScript",
      "Mercadopago",
      "Andreani",
      "MongoDb",
      "Tailwind CSS",
      "Nextjs",
      "Express.js",
    ],
    demoUrl: "https://notaimport.com",
    githubUrl: "https://github.com/BDKX16/nota-importados",
    features: [
      "Catálogo avanzado de perfumes",
      "Filtros por marca, familia olfativa y precio",
      "Sistema de carrito y checkout",
      "Integración con Stripe para pagos",
      "Gestión de stock en tiempo real",
      "Panel administrativo completo",
      "Sistema de usuarios y favoritos",
      "Galería de imágenes optimizada",
    ],
    challenges: [
      "Optimización de búsqueda y filtros complejos",
      "Integración segura de sistema de pagos y envíos",
      "Gestión eficiente de inventario de productos importados",
      "Optimización de imágenes para catálogo extenso",
    ],
  },
  {
    id: 2,
    title: "StudySphere",
    description:
      "Aplicación de escritorio de productividad con canvas interactivo y modo focus. Ventana flotante para tareas, interfaz estética e intuitiva, y sincronización automática offline-online.",
    detailedDescription:
      "StudySphere es una innovadora aplicación de escritorio diseñada para maximizar la productividad estudiantil y profesional. La aplicación cuenta con un canvas interactivo donde los usuarios pueden organizar visualmente sus proyectos y tareas, un modo focus que minimiza distracciones, y una ventana flotante que mantiene las tareas siempre visibles en pantalla. Su diseño estético y minimalista se combina con funcionalidades avanzadas como sincronización automática cuando se reconecta a internet, permitiendo trabajar completamente offline sin perder datos.",
    image: "/StudySphere1.jpg",
    images: [
      "/StudySphere1.jpg",
      "/StudySphere2.jpg",
      "/StudySphere3.jpg",
      "/StudySphere4.jpg",
      "/StudySphere6.jpg",
      "/StudySphere7.jpg",
      "/StudySphere8.jpg",
      "/StudySphereInstaller.jpg",
    ],
    period: "04/2025 - 08/2025",
    tags: [
      "Electron",
      "React",
      "TypeScript",
      "SQLite",
      "Desktop App",
      "Productivity",
      "Offline-First",
    ],
    downloadUrl: "https://github.com/BDKX16/studysphere-releases/releases",
    features: [
      "Canvas interactivo para organización visual",
      "Modo focus con bloqueo de distracciones",
      "Ventana flotante de tareas persistente",
      "Sincronización automática offline-online",
      "Interfaz minimalista y estética",
      "Gestión avanzada de proyectos y tareas",
      "Tema oscuro y claro",
      "Notificaciones inteligentes con sonidos",
    ],
    challenges: [
      "Implementación de canvas responsive y fluido",
      "Desarrollo de sistema offline-first robusto",
      "Optimización de ventanas flotantes en diferentes SO",
      "Sincronización de datos sin conflictos",
    ],
  },
  {
    id: 3,
    title: "Luna BrewHouse",
    description:
      "Plataforma web completa para cervecería artesanal marplatense que incluye landing page y sistema de administración integral para gestión de ventas, inventario y recetas de cerveza.",
    detailedDescription:
      "Luna BrewHouse es una solución digital completa desarrollada para una cervecería artesanal de Mar del Plata. El proyecto incluye un sitio web atractivo para mostrar productos y la historia de la marca, junto con un robusto sistema de administración que permite gestionar ventas, controlar inventario de ingredientes, administrar recetas de cerveza y generar reportes de producción. La plataforma está diseñada para optimizar las operaciones diarias de la cervecería y mejorar la experiencia del cliente.",
    image: "/LunaBrew0.jpg",
    images: [
      "/LunaBrew0.jpg",
      "/LunaBrew3.jpg",
      "/LunaBrew4.jpg",
      "/LunaBrew5.jpg",
      "/LunaBrew1.jpg",
      "/LunaBrew2.jpg",
    ],
    period: "03/2025 - 07/2025",
    tags: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Material UI",
      "Chart.js",
      "Mercadopago",
    ],
    demoUrl: "https://lunabrewhouse.com",
    githubUrl: "https://github.com/BDKX16/luna-brew-house",
    features: [
      "Sitio web corporativo responsive",
      "Sistema de gestión de ventas",
      "Administración de recetas de cerveza a tiempo real",
      "Reportes de producción y ventas",
      "Dashboard administrativo completo",
      "Gestión de clientes y proveedores",
      "Integracion de Mercadopago",
    ],
    challenges: [
      "Diseño de arquitectura para industria cervecera",
      "Implementación de sistema de recetas complejo",
      "Optimización de reportes con grandes volúmenes de datos",
      "Integración de múltiples módulos administrativos",
      "Integración de seguimiento de recetas a tiempo real",
    ],
  },

  {
    id: 4,
    title: "Fit Tracker",
    description:
      "A comprehensive fitness tracking application that allows users to log workouts, track progress, and set fitness goals. Built with a focus on user experience and performance.",
    detailedDescription:
      "Fit Tracker is a full-stack fitness application that provides users with comprehensive workout tracking capabilities. The app features user authentication, workout logging, progress visualization, goal setting, and social features. Built with modern technologies including Next.js for the frontend, Node.js for the backend, and MongoDB for data persistence. The application is containerized with Docker and deployed with SSL encryption for security.",
    image: "/FitTracker.jpg",
    images: [
      "/FitTracker.jpg",
      "/FitTracker2.jpg",
      "/FitTracker3.jpg",
      "/FitTracker4.jpg",
      "/FitTracker5.jpg",
      "/FitTracker6.jpg",
      "/FitTracker7.jpg",
    ],
    period: "05/2025 - Present",
    tags: ["Node.js", "Next.js", "MongoDB", "Docker", "SSL", "shadcn/ui"],
    demoUrl: "https://fit.xaviergalarreta.pro",
    features: [
      "User authentication and profile roles",
      "Workout logging and tracking",
      "Progress visualization with charts",
      "Goal setting and achievements",
      "Social features and sharing",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing large scale domain architecture",
      "Optimizing database queries for large datasets",
      "Creating intuitive data visualization",
    ],
  },
  {
    id: 5,
    title: "MiniTwitter",
    description:
      "A microblogging platform for sharing short updates and multimedia content. Built with a focus on real-time interactions and a responsive design.",
    detailedDescription:
      "MiniTwitter is a modern microblogging platform that enables users to share thoughts, images, and interact in real-time. The platform features a timeline feed, user profiles, following/followers system, and real-time notifications. Built with a microservices architecture using Next.js and Express.js, with Redis for caching and MongoDB for data storage.",
    image: "/Twitter.jpg",
    images: [
      "/Twitter2.jpg",
      "/Twitter4.jpg",
      "/Twitter5.jpg",
      "/Twitter3.jpg",
    ],
    period: "07/2025 - Present",
    tags: [
      "Next.js",
      "Express.js",
      "Typescript",
      "MongoDB",
      "Redis",
      "shadcn/ui",
      "Docker",
    ],
    demoUrl: "https://twitter.xaviergalarreta.pro",
    githubUrl: "https://github.com/BDKX16/mini-twitter",
    features: [
      "Real-time messaging and notifications",
      "User profiles and authentication",
      "Timeline feed with infinite scroll",
      "Image and media sharing",
      "Follow/unfollow functionality",
      "Search and discovery features",
    ],
    challenges: [
      "Implementing real-time features with WebSockets",
      "Scaling the application for multiple users",
      "Optimizing feed algorithms",
    ],
  },
  {
    id: 6,
    title: "Confi Plant",
    description:
      "IoT software for greenhouse automation, adaptable for use in various industrial fields. Implemented MQTT for efficient device communication with a cloud platform featuring database integration and multiple frontends.",
    detailedDescription:
      "Confi Plant is an comprehensive IoT platform designed for greenhouse automation and industrial monitoring. The system connects multiple sensors and actuators through MQTT protocol, providing real-time monitoring and automated control of environmental conditions. Features include temperature control, humidity monitoring, irrigation systems, and comprehensive analytics dashboard.",
    image: "/WebDashTemp.jpg",
    images: [
      "/WebDashTemp.jpg",
      "/WebDash1.jpg",
      "/WebDash2.jpg",
      "/WebDash3.jpg",
      "/WebDash4.jpg",
      "/WebDash5.jpg",
    ],
    period: "05/2022 - Present",
    tags: [
      "Node.js",
      "React",
      "MQTT",
      "WebSockets",
      "MongoDB",
      "Docker",
      "SSL",
      "shadcn/ui",
    ],
    demoUrl: "https://confiplant.cloud",
    githubUrl: "https://github.com/BDKX16/react-admin-2",
    features: [
      "Real-time sensor data monitoring",
      "Automated irrigation and climate control",
      "Historical data analysis and reporting",
      "Alert system for critical conditions",
      "Multi-device support and remote access",
      "Customizable dashboard and widgets",
    ],
    challenges: [
      "Handling large volumes of sensor data",
      "Ensuring system reliability for critical operations",
      "Implementing efficient MQTT communication",
    ],
  },
  {
    id: 7,
    title: "IoT Control Mobile App",
    description:
      "Professional mobile application for IoT device management and monitoring through WebSockets. Leverages the architecture of the Confi Plant web platform, featuring customizable themes, real-time device control, and an integrated calendar for scheduling automation tasks.",
    detailedDescription:
      "A cross-platform mobile application built with React Native that extends the Confi Plant platform to mobile devices. The app provides full control over IoT devices, real-time monitoring, and scheduling capabilities. Features include push notifications, offline data caching, and a beautiful, customizable interface that adapts to user preferences.",
    image: "/ConfiApp.jpg",
    images: ["/ConfiApp.jpg", "/ConfiApp1.jpg"],
    period: "03/2023 - Present",
    tags: [
      "React Native",
      "WebSockets",
      "Mobile Development",
      "IoT",
      "Custom Theming",
      "Real-time Data",
      "Cross-platform",
      "State Management",
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.xavigmp.confiplant",
    features: [
      "Cross-platform mobile application",
      "Real-time device monitoring and control",
      "Push notifications for alerts",
      "Offline data synchronization",
      "Custom themes and personalization",
      "Integrated calendar for automation scheduling",
    ],
    challenges: [
      "Optimizing performance for real-time data",
      "Managing offline/online state synchronization",
      "Creating responsive UI for different screen sizes",
    ],
  },
  {
    id: 8,
    title: "Content CRM",
    description:
      "Content management system for managing and distributing, and selling multimedia content. Built with React, TypeScript, and Tailwind CSS, it features a user-friendly interface and responsive design.",
    detailedDescription:
      "A comprehensive content management and distribution platform designed for multimedia content creators and distributors. The system handles content upload, processing, categorization, and sales. Features include user management, payment processing, analytics, and a modern, responsive interface built with React and TypeScript.",
    image: "/ContentCRM.jpg",
    images: ["/ContentCRM.jpg", "/ContentCRM1.jpg", "/ContentCRM2.jpg"],
    period: "08/2024 - Present",
    tags: [
      "React",
      "TypeScript",
      "MinIO",
      "Material UI",
      "Tailwind CSS",
      "Node.js",
    ],
    demoUrl: "#",
    features: [
      "Multimedia content management",
      "User authentication and roles",
      "Payment processing integration",
      "Content analytics and reporting",
      "Responsive admin dashboard",
      "File storage with MinIO",
    ],
    challenges: [
      "Handling large file uploads and processing",
      "Implementing secure payment systems",
      "Creating scalable content delivery",
    ],
  },
  {
    id: 9,
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js and Tailwind CSS showcasing my skills, experience, and projects with smooth animations and responsive design.",
    detailedDescription:
      "A modern, interactive portfolio website featuring smooth animations, responsive design, and an AI-powered chat assistant. The site showcases my professional experience, skills, and projects with an elegant user interface. Built with Next.js, it includes integration with OpenAI for the chat functionality and uses Framer Motion for animations.",
    image: "/Portfolio.jpg",
    images: ["/Portfolio.jpg"],
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
    features: [
      "Responsive and modern design",
      "AI-powered chat assistant",
      "Smooth animations and transitions",
      "Project showcase with detailed views",
      "Skills visualization",
      "Contact form integration",
    ],
    challenges: [
      "Integrating AI chat functionality",
      "Optimizing animations for performance",
      "Creating engaging user interactions",
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

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
                } gap-8 bg-card rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]`}
                onClick={() => openProjectModal(project)}
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
                    {project.downloadUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={project.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={(e) => e.stopPropagation()}
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
                        onClick={(e) => e.stopPropagation()}
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
                        className="bg-accent hover:bg-accent/90 text-primary-foreground"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SmartphoneIcon
                            className="mr-2 h-4 w-4"
                            color="white"
                          />
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

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={closeProjectModal}>
        <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-3xl font-bold text-primary">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-6">
              {/* Large Image Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="relative px-6">
                  <img
                    src={
                      selectedProject.images[currentImageIndex] ||
                      "/placeholder.svg"
                    }
                    alt={`${selectedProject.title} - Image ${
                      currentImageIndex + 1
                    }`}
                    className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-lg"
                  />

                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-all z-10"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-all z-10"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>

                      {/* Image indicators */}
                      <div className="flex justify-center space-x-3 mt-6">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              index === currentImageIndex
                                ? "bg-primary scale-125"
                                : "bg-muted hover:bg-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Image counter */}
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} /{" "}
                        {selectedProject.images.length}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Compact Project Details */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-1 text-sm">
                        Project Period
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {selectedProject.period}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2 text-sm">
                        Description
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedProject.detailedDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-primary mb-2 text-sm">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedProject.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-muted text-secondary text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    {/* Features */}
                    {selectedProject.features && (
                      <div>
                        <h4 className="font-semibold text-primary mb-2 text-sm">
                          Key Features
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                          {selectedProject.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Challenges */}
                    {selectedProject.challenges && (
                      <div>
                        <h4 className="font-semibold text-primary mb-2 text-sm">
                          Technical Challenges
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                          {selectedProject.challenges.map(
                            (challenge, index) => (
                              <li key={index}>{challenge}</li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {selectedProject.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-3 w-3" />
                            View Code
                          </a>
                        </Button>
                      )}

                      {selectedProject.demoUrl &&
                        selectedProject.demoUrl !== "#" && (
                          <Button
                            size="sm"
                            asChild
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            <a
                              href={selectedProject.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-3 w-3" />
                              Live Demo
                            </a>
                          </Button>
                        )}

                      {selectedProject.playStoreUrl && (
                        <Button
                          size="sm"
                          asChild
                          className="bg-accent hover:bg-accent/90 text-primary-foreground"
                        >
                          <a
                            href={selectedProject.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SmartphoneIcon
                              className="mr-2 h-3 w-3"
                              color="white"
                            />
                            Download App
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
