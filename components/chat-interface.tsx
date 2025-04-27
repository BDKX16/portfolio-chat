"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import axios from "axios";

// Updated profile data based on CV
const profileData = {
  name: "Xavier Galarreta",
  title: "Software Developer",
  skills: [
    ".NET Core",
    "ASP.NET MVC",
    "React",
    "Node.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "SQL Server",
    "MongoDB",
    "Docker",
    "AWS",
    "Clean Architecture",
    "Microservices",
  ],
  experience: [
    {
      company: "Softtek",
      role: "Software Developer",
      period: "12/2023-Present",
      description:
        "Development and maintenance of applications in .NET Core. Use of technologies like LINQ, NHibernate, and Vue, integrating APIs such as Arca (ex AFIP) and Mercado Pago. Implementation of Clean Architecture and development best practices.",
    },
    {
      company: "NTT DATA Services",
      role: "Fullstack Developer",
      period: "08/2021-11/2023",
      description:
        "Gained experience in both frontend and backend, creating optimized interfaces for Movistar Empresas and Techint. Worked with REST APIs, SQL, and .NET.",
    },
  ],
  education: [
    {
      institution: "Universidad Tecnológica Nacional (UTN)",
      degree: "Associate Degree in Programming & Information Systems",
      year: "2 pending finals",
    },
  ],
  projects: [
    {
      name: "Confi Plant",
      description:
        "IoT software for greenhouse automation using MQTT, with a cloud platform and multiple frontends.",
      technologies: "Node.js, React, React Native, MQTT, MongoDB, Docker",
    },
  ],
};

// Simple AI response generator based on keywords
function generateResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("name") || lowerMessage.includes("who are you")) {
    return `My name is ${profileData.name}. I'm a ${profileData.title}.`;
  }

  if (
    lowerMessage.includes("skills") ||
    lowerMessage.includes("what can you do")
  ) {
    return `My key skills include: ${profileData.skills.join(", ")}.`;
  }

  if (
    lowerMessage.includes("experience") ||
    lowerMessage.includes("work history") ||
    lowerMessage.includes("job")
  ) {
    return profileData.experience
      .map(
        (exp) =>
          `${exp.role} at ${exp.company} (${exp.period}): ${exp.description}`
      )
      .join("\n\n");
  }

  if (
    lowerMessage.includes("education") ||
    lowerMessage.includes("study") ||
    lowerMessage.includes("university")
  ) {
    return profileData.education
      .map((edu) => `${edu.degree} from ${edu.institution} (${edu.year})`)
      .join("\n\n");
  }

  if (
    lowerMessage.includes("project") ||
    lowerMessage.includes("portfolio") ||
    lowerMessage.includes("confi plant")
  ) {
    if (lowerMessage.includes("confi plant")) {
      const project = profileData.projects[0];
      return `Confi Plant: ${project.description} Technologies used: ${project.technologies}`;
    }
    return "You can see my projects in the section below. My highlighted project is Confi Plant, an IoT software for greenhouse automation.";
  }

  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("hire") ||
    lowerMessage.includes("email")
  ) {
    return "You can contact me through the contact section at the bottom of this page.";
  }

  // Backend skills
  if (
    lowerMessage.includes(".net") ||
    lowerMessage.includes("c#") ||
    lowerMessage.includes("backend")
  ) {
    return "My backend skills include C# with .NET Core, ASP.NET MVC, Entity Framework, and Clean Architecture principles. I've also worked with Node.js, Express, and different API integration patterns including REST and SOAP.";
  }

  // Frontend skills
  if (
    lowerMessage.includes("frontend") ||
    lowerMessage.includes("react") ||
    lowerMessage.includes("ui")
  ) {
    return "For frontend development, I'm proficient with React, Redux, Next.js, and have experience with TypeScript, CSS frameworks like Tailwind, and UI libraries including Material UI and shadcn/ui. I've also worked with data visualization using D3.js and 3D graphics with Three.js.";
  }

  // Database skills
  if (
    lowerMessage.includes("database") ||
    lowerMessage.includes("sql") ||
    lowerMessage.includes("mongodb")
  ) {
    return "I have experience with SQL Server and MongoDB databases, including database design, optimization, and integration with various ORMs and query tools.";
  }

  // DevOps skills
  if (
    lowerMessage.includes("devops") ||
    lowerMessage.includes("cloud") ||
    lowerMessage.includes("aws")
  ) {
    return "My DevOps and cloud skills include working with AWS, VPS, Docker containerization, Terraform for infrastructure as code, and setting up CI/CD pipelines with GitHub Actions. I'm also experienced with Nginx and EMQX for MQTT applications.";
  }

  return "I'm an AI assistant representing the portfolio owner. You can ask me about their skills, work experience, education, or projects. Feel free to scroll down to see their work!";
}

type Message = {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: number;
};

export default function ChatInterface() {
  // Create a session ID that persists during the browser session
  const [sessionId] = useState(() => {
    return `session-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 9)}`;
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: `Hi there! I'm an AI assistant representing ${profileData.name}, a ${profileData.title}. What would you like to know about their professional background?`,
      sender: "assistant",
      timestamp: Date.now(),
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatActive, setIsChatActive] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollAreaRef.current && isChatActive) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isChatActive]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // If this is the first message, activate the chat
    if (!isChatActive) {
      setIsChatActive(true);
    }

    const timestamp = Date.now();
    const userMessage: Message = {
      id: `msg-${timestamp}`,
      content: input,
      sender: "user",
      timestamp,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Prepare the conversation history (last 5 messages)
      const conversationHistory = messages.slice(-5).map((msg) => ({
        content: msg.content,
        role: msg.sender,
      }));

      // If there's a webhook configured, use it, otherwise use local response generator
      if (process.env.NEXT_PUBLIC_N8N_WEBHOOK) {
        try {
          const response = await axios.post(
            process.env.NEXT_PUBLIC_N8N_WEBHOOK,
            {
              message: input,
              sessionId: sessionId,
              conversationHistory: conversationHistory,
            },
            {
              timeout: 10000, // 10 second timeout
              headers: { "Content-Type": "application/json" },
            }
          );

          if (response.data && response.data.answer) {
            const aiResponse = response.data.answer;

            const assistantMessage: Message = {
              id: `msg-${Date.now()}`,
              content: aiResponse,
              sender: "assistant",
              timestamp: Date.now(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
          } else {
            throw new Error("Invalid webhook response format");
          }
        } catch (error) {
          console.error("Webhook error:", error);

          // Fallback to local response generation
          const localResponse = generateResponse(input);

          const assistantMessage: Message = {
            id: `msg-${Date.now()}`,
            content: localResponse,
            sender: "assistant",
            timestamp: Date.now(),
          };

          setMessages((prev) => [...prev, assistantMessage]);
        }
      } else {
        // Use local response generator
        const localResponse = generateResponse(input);

        const assistantMessage: Message = {
          id: `msg-${Date.now()}`,
          content: localResponse,
          sender: "assistant",
          timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error("Error handling message:", error);

      // Handle the error gracefully
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        content:
          "Sorry, I'm having trouble responding right now. Please try again later.",
        sender: "assistant",
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Function to clear chat history
  const clearChat = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear the conversation?"
    );
    if (confirmClear) {
      setMessages([
        {
          id: "welcome",
          content: `Hi there! I'm an AI assistant representing ${profileData.name}, a ${profileData.title}. What would you like to know about their professional background?`,
          sender: "assistant",
          timestamp: Date.now(),
        },
      ]);
      setIsChatActive(false);
    }
  };

  return (
    <Card className="border border-border rounded-xl shadow-md overflow-hidden">
      <CardContent className="p-4">
        {!isChatActive ? (
          <div className="flex gap-2">
            <Input
              placeholder="Ask me about my professional background..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!input.trim()}
              size="icon"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col h-[500px]">
            <div className="flex justify-end mb-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearChat}
                className="text-xs text-muted-foreground hover:text-destructive"
              >
                Clear Chat
              </Button>
            </div>
            <ScrollArea className="flex-1 mb-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.content}</p>
                      <div className="text-[10px] opacity-70 mt-1">
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted text-foreground">
                      <p className="animate-pulse">Thinking...</p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="border-t border-border pt-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me anything about my background..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !input.trim()}
                  size="icon"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
