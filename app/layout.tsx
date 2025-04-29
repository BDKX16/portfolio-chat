import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import Script from "next/script";
import Waves from "@/components/ui/waves";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xavier Galarreta | Full Stack Developer | React, .NET, Vue Developer",
  description:
    "Portfolio profesional de Xavier Galarreta, Full Stack Developer especializado en React, .NET y Vue con 3+ años de experiencia. Proyectos de desarrollo web, clean architecture y microservicios.",
  generator: "Next.js",
  keywords: [
    "Xavier Galarreta",
    "Full Stack Developer",
    "React Developer",
    "Vue Developer",
    ".NET Developer",
    "Mar del Plata",
    "clean architecture",
    "microservicios",
    "frontend developer",
    "backend developer",
    "software engineer",
  ],
  creator: "Xavier Galarreta",
  publisher: "Xavier Galarreta",
  authors: [
    {
      name: "Xavier Galarreta",
      url: "https://www.linkedin.com/in/xavier-galarreta-52a076212/",
    },
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://xaviergalarreta.com",
    title:
      "Xavier Galarreta | Full Stack Developer | React, .NET, Vue Developer",
    description:
      "Portfolio profesional de Xavier Galarreta, Full Stack Developer especializado en React, .NET y Vue con 3+ años de experiencia. Proyectos de desarrollo web, clean architecture y microservicios.",
    siteName: "Portfolio de Xavier Galarreta",
    images: [
      {
        url: "/profile.webp",
        width: 1200,
        height: 630,
        alt: "Xavier Galarreta - Full Stack Developer",
      },
    ],
  },
  alternates: {
    canonical: "https://xaviergalarreta.com",
    languages: {
      "es-AR": "https://xaviergalarreta.com",
    },
  },
  metadataBase: new URL("https://xaviergalarreta.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Xavier Galarreta",
              url: "https://xaviergalarreta.com",
              image: "https://xaviergalarreta.com/profile.webp",
              sameAs: [
                "https://www.linkedin.com/in/xavier-galarreta-52a076212/",
                "https://github.com/BDKX16",
                "https://www.instagram.com/xavi.galarreta/",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              description:
                "Full Stack Developer con más de 3 años de experiencia especializado en React, .NET y Vue. Experto en clean architecture, microservicios y metodologías ágiles.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mar del Plata",
                addressRegion: "Buenos Aires",
                addressCountry: "Argentina",
              },
              knowsAbout: [
                "React",
                "Vue",
                ".NET",
                "JavaScript",
                "TypeScript",
                "C#",
                "Clean Architecture",
                "Microservicios",
                "Desarrollo Web",
                "Frontend Development",
                "Backend Development",
                "Node.js",
                "SQL",
                "NoSQL",
                "Git",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <Waves
              style={{
                zIndex: 0,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: "none",
              }}
              lineColor="#f0f0f0a9"
              backgroundColor="rgba(255, 255, 255, 0.2)"
              waveSpeedX={0.02}
              waveSpeedY={0.01}
              waveAmpX={40}
              waveAmpY={20}
              friction={0.9}
              tension={0.01}
              maxCursorMove={120}
              xGap={12}
              yGap={36}
            />

            <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
