"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageCircle, X, Send, Loader2, Sparkles, Brain, Maximize2, Minimize2, Bot } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3 } from "lucide-react"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  thinking?: boolean
}

type SuggestionCategory = "franchise" | "market" | "investment" | "general"

type Suggestion = {
  id: string
  text: string
  category: SuggestionCategory
}

const suggestions: Suggestion[] = [
  { id: "1", text: "What franchise has the highest AI success score?", category: "franchise" },
  { id: "2", text: "Analyze the market potential for Chai Point in New York", category: "market" },
  { id: "3", text: "What's the ROI timeline for a $200K investment?", category: "investment" },
  { id: "4", text: "How does your AI predict franchise success?", category: "general" },
  { id: "5", text: "Compare Chai Point and MBA Chai Wala", category: "franchise" },
  { id: "6", text: "What locations are best for Indian beverage franchises?", category: "market" },
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm your AI franchise assistant. I can help you analyze market opportunities, compare franchises, and provide personalized recommendations. How can I assist you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("chat")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent | string) => {
    if (typeof e !== "string") {
      e.preventDefault()
    }

    const userMessage = typeof e === "string" ? e : input
    if (!userMessage.trim()) return

    setInput("")

    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newUserMessage])
    setIsLoading(true)

    // Add a "thinking" message
    const thinkingId = (Date.now() + 1).toString()
    setMessages((prev) => [
      ...prev,
      {
        id: thinkingId,
        role: "assistant",
        content: "Analyzing data and generating response...",
        timestamp: new Date(),
        thinking: true,
      },
    ])

    try {
      // Simulate AI processing time
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Example of how you would use the AI SDK in a real implementation:
      // const { text } = await generateText({
      //   model: openai("gpt-4o"),
      //   prompt: userMessage,
      //   system: "You are an AI assistant for an Indian franchise platform. Provide detailed, data-driven information about establishing Indian franchises in the US."
      // });

      // For demo purposes, we'll use hardcoded responses
      const simulatedResponses = [
        "Based on our AI analysis, Chai Point has a 98% success prediction score in the US market, particularly in urban areas with high foot traffic. The franchise model has been optimized for the American consumer while maintaining authentic Indian flavors.",

        "Our market analysis indicates that New York City, particularly areas like Manhattan and Brooklyn, would be ideal for Chai Point. The demographic data shows a 32% increase in demand for premium tea experiences, and the local competition is relatively low compared to coffee establishments.",

        "For a $200,000 investment, our AI forecasts an ROI timeline of approximately 18-24 months for most Indian beverage franchises. This is based on current market trends, operational costs in the US, and projected revenue growth of 15-20% annually after the initial establishment period.",

        "Our AI uses a multi-factor analysis model that considers over 50 variables including location demographics, market trends, consumer behavior patterns, supply chain efficiency, and competitive landscape. We've trained our models on data from successful franchises and continuously update them with real-time market information.",

        "When comparing Chai Point and MBA Chai Wala, our AI analysis shows that Chai Point has a slightly higher success prediction score (98% vs. 96%) in the US market. Chai Point requires a higher initial investment but offers more comprehensive support systems and a more established supply chain. MBA Chai Wala has a stronger social media presence and appeals to a younger demographic.",

        "The 'Don't Start From Zero' approach means our AI has already done the heavy lifting for you. We've analyzed market trends, established supply chains, and optimized operational procedures specifically for Indian franchises in the US market.",
      ]

      const randomResponse = simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)]

      // Remove the thinking message and add the real response
      setMessages((prev) => prev.filter((msg) => msg.id !== thinkingId))

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          role: "assistant",
          content: randomResponse,
          timestamp: new Date(),
        },
      ])
    } catch (error) {
      console.error("Error generating response:", error)
      // Remove the thinking message and add an error message
      setMessages((prev) => prev.filter((msg) => msg.id !== thinkingId))

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 3).toString(),
          role: "assistant",
          content: "I'm sorry, I encountered an error analyzing the data. Please try again later.",
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 rounded-full w-16 h-16 p-0 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-700/20 z-50 group"
          >
            <Brain className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <Badge className="absolute -top-2 -right-2 bg-white text-blue-800 px-2 py-0.5 text-xs">AI</Badge>
          </Button>
        </motion.div>
      )}

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              className={`fixed ${isExpanded ? "inset-4 max-w-none" : "bottom-6 right-6 w-80 md:w-96 max-h-[500px]"} shadow-2xl border-white/10 bg-black/80 backdrop-blur-xl z-50 flex flex-col overflow-hidden transition-all duration-300`}
            >
              <CardHeader className="bg-gradient-to-r from-blue-600 to-violet-600 py-3 px-4 flex flex-row justify-between items-center">
                <div className="font-medium flex items-center gap-2 text-white">
                  <Brain className="h-5 w-5" />
                  <span>AI Franchise Assistant</span>
                  <Badge className="bg-white/20 text-white text-xs">GPT-4o</Badge>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="h-8 w-8 text-white hover:bg-white/10 rounded-full"
                  >
                    {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 text-white hover:bg-white/10 rounded-full"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <Tabs defaultValue="chat" className="flex-1 flex flex-col" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mx-4 mt-2 bg-white/5">
                  <TabsTrigger value="chat" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Chat
                  </TabsTrigger>
                  <TabsTrigger
                    value="insights"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    AI Insights
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="chat" className="flex-1 flex flex-col mt-0 p-0">
                  <CardContent className="p-4 overflow-y-auto flex-grow">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div className="flex items-start gap-2 max-w-[85%]">
                            {message.role === "assistant" && (
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0 mt-1">
                                <Bot className="h-4 w-4 text-white" />
                              </div>
                            )}
                            <div>
                              <div
                                className={`rounded-lg p-3 ${
                                  message.role === "user"
                                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                                    : message.thinking
                                      ? "bg-gray-800/50 text-gray-300 border border-white/10"
                                      : "bg-white/10 text-gray-200 border border-white/10"
                                }`}
                              >
                                {message.thinking ? (
                                  <div className="flex items-center gap-2">
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    <span>{message.content}</span>
                                  </div>
                                ) : (
                                  message.content
                                )}
                              </div>
                              <div className="text-xs text-gray-500 mt-1 ml-1">{formatTime(message.timestamp)}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>

                    {messages.length === 1 && (
                      <div className="mt-6">
                        <p className="text-sm text-gray-400 mb-3">Try asking about:</p>
                        <div className="grid grid-cols-1 gap-2">
                          {suggestions.map((suggestion) => (
                            <Button
                              key={suggestion.id}
                              variant="outline"
                              className="justify-start text-left h-auto py-2 border-white/10 hover:bg-white/5 hover:text-blue-400"
                              onClick={() => handleSendMessage(suggestion.text)}
                            >
                              <div className="flex items-center">
                                {suggestion.category === "franchise" && (
                                  <Sparkles className="h-4 w-4 mr-2 text-blue-400" />
                                )}
                                {suggestion.category === "market" && (
                                  <BarChart3 className="h-4 w-4 mr-2 text-blue-400" />
                                )}
                                {suggestion.category === "investment" && (
                                  <Brain className="h-4 w-4 mr-2 text-blue-400" />
                                )}
                                {suggestion.category === "general" && (
                                  <MessageCircle className="h-4 w-4 mr-2 text-blue-400" />
                                )}
                                <span>{suggestion.text}</span>
                              </div>
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="p-3 border-t border-white/10">
                    <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                      <Input
                        placeholder="Ask about franchises, market analysis, ROI..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-grow bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-blue-500"
                        disabled={isLoading}
                      />
                      <Button
                        type="submit"
                        size="icon"
                        disabled={isLoading || !input.trim()}
                        className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 border-0"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </CardFooter>
                </TabsContent>

                <TabsContent value="insights" className="flex-1 overflow-auto p-4">
                  <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2 flex items-center">
                        <Brain className="h-5 w-5 mr-2 text-blue-400" />
                        Market Trend Analysis
                      </h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Our AI has detected these emerging trends in the US franchise market:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                          <span>27% increase in demand for authentic Indian tea experiences</span>
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                          <span>Urban centers showing 32% higher success rates for Indian franchises</span>
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <span>College towns emerging as high-potential locations (41% growth)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2 flex items-center">
                        <Sparkles className="h-5 w-5 mr-2 text-blue-400" />
                        Personalized Recommendations
                      </h3>
                      <p className="text-sm text-gray-300 mb-3">Based on your interactions, our AI recommends:</p>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-blue-900/30 to-violet-900/30 p-3 rounded border border-white/10">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-white font-medium">Chai Point</span>
                            <Badge className="bg-blue-600">98% Match</Badge>
                          </div>
                          <p className="text-xs text-gray-300">
                            Aligns with your budget range and offers excellent growth potential in urban markets.
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-blue-900/30 to-violet-900/30 p-3 rounded border border-white/10">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-white font-medium">MBA Chai Wala</span>
                            <Badge className="bg-blue-600">96% Match</Badge>
                          </div>
                          <p className="text-xs text-gray-300">
                            Lower initial investment with strong appeal to younger demographics and social media
                            presence.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2 flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2 text-blue-400" />
                        Success Metrics
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-gray-300">ROI Timeline</span>
                            <span className="text-xs text-blue-400">18-24 months</span>
                          </div>
                          <div className="w-full bg-gray-700/30 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full w-3/4"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-gray-300">Market Readiness</span>
                            <span className="text-xs text-blue-400">92%</span>
                          </div>
                          <div className="w-full bg-gray-700/30 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full w-[92%]"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-gray-300">Supply Chain Optimization</span>
                            <span className="text-xs text-blue-400">87%</span>
                          </div>
                          <div className="w-full bg-gray-700/30 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full w-[87%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
