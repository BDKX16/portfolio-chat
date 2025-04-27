"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import axios from "axios";

type Message = {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: number;
};

export default function ChatInterface() {
  // Generar un ID de sesión simple usando timestamp + random
  const [sessionId] = useState(() => {
    return `session-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 9)}`;
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Hi there! I'm an AI assistant that can tell you about my creator's professional background. What would you like to know?",
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
      // Preparar un historial básico de la conversación (últimos 5 mensajes)
      const conversationHistory = messages.slice(-5).map((msg) => ({
        content: msg.content,
        role: msg.sender,
      }));

      // Verificar si la variable de entorno está definida
      if (!process.env.NEXT_PUBLIC_N8N_WEBHOOK) {
        throw new Error(
          "Webhook URL not configured. Please set NEXT_PUBLIC_N8N_WEBHOOK in .env.local"
        );
      }

      // Hacer una solicitud POST a tu webhook de IA con timeout
      const response = await axios.post(
        process.env.NEXT_PUBLIC_N8N_WEBHOOK,
        {
          message: input,
          sessionId: sessionId,
          conversationHistory: conversationHistory,
        },
        {
          timeout: 10000, // 10 segundos de timeout
          headers: { "Content-Type": "application/json" },
        }
      );

      // Verificar si la respuesta contiene la propiedad 'answer'
      if (response.data && response.data.answer) {
        console.log("AI Response:", response.data.answer);
        const aiResponse = response.data.answer;

        const assistantMessage: Message = {
          id: `msg-${Date.now()}`,
          content: aiResponse,
          sender: "assistant",
          timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        // Manejar respuesta sin la propiedad 'answer'
        throw new Error("Invalid response format from webhook");
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);

      let errorMessage =
        "Sorry, I'm having trouble connecting right now. Please try again later.";

      // Mejorar el mensaje de error basado en el tipo de error
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          errorMessage =
            "The request took too long to respond. Please try again later.";
        } else if (error.code === "ERR_NETWORK") {
          errorMessage =
            "Network error. Please check your internet connection and try again.";
        } else if (error.response) {
          // Error de respuesta HTTP (4xx, 5xx)
          errorMessage = `Server error (${error.response.status}). Please try again later.`;
        }
      } else if (error instanceof Error) {
        if (error.message.includes("Webhook URL not configured")) {
          errorMessage =
            "The chat service is not properly configured. Please contact the administrator.";
          console.error(
            "Missing environment variable: NEXT_PUBLIC_N8N_WEBHOOK"
          );
        } else if (error.message.includes("Invalid response format")) {
          errorMessage =
            "Received an unexpected response from the server. Please try again.";
        }
      }

      // Añadir mensaje de error al chat
      const errorResponseMessage: Message = {
        id: `error-${Date.now()}`,
        content: errorMessage,
        sender: "assistant",
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, errorResponseMessage]);
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

  // Función para limpiar el chat
  const clearChat = () => {
    if (window.confirm("¿Quieres borrar esta conversación?")) {
      setMessages([
        {
          id: "welcome",
          content:
            "Hi there! I'm an AI assistant that can tell you about Xavier professional background. What would you like to know?",
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
              placeholder="Ask me anything about my work profile..."
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
                  placeholder="Ask me anything about my work..."
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
