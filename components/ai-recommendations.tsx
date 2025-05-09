"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, DollarSign, MapPin } from "lucide-react"

interface Recommendation {
  id: number
  name: string
  match: number
  investment: string
  roi: string
  locations: string[]
}

const initialRecommendations: Recommendation[] = [
  {
    id: 1,
    name: "Chai Point",
    match: 98,
    investment: "$100K - $200K",
    roi: "18-24 months",
    locations: ["New York", "San Francisco", "Chicago"],
  },
  {
    id: 2,
    name: "MBA Chai Wala",
    match: 96,
    investment: "$80K - $150K",
    roi: "20-26 months",
    locations: ["Boston", "Austin", "Seattle"],
  },
  {
    id: 3,
    name: "Tea Trails",
    match: 93,
    investment: "$120K - $220K",
    roi: "22-28 months",
    locations: ["Los Angeles", "Miami", "Denver"],
  },
]

export default function AiRecommendations() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>(initialRecommendations)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnalyzing) {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsAnalyzing(false)
            return 0
          }
          return prev + 5
        })
      }
    }, 100)

    return () => clearInterval(interval)
  }, [isAnalyzing])

  const simulateAnalysis = () => {
    setIsAnalyzing(true)
    setProgress(0)

    // Simulate AI analysis
    setTimeout(() => {
      // Shuffle the recommendations to simulate new AI analysis
      setRecommendations([...recommendations].sort(() => Math.random() - 0.5))
    }, 2000)
  }

  return (
    <div className="bg-gradient-to-br from-blue-900/30 to-violet-900/30 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-blue-400" />
          <h3 className="text-lg font-medium text-white">AI Recommendations</h3>
        </div>
        <Badge className="bg-blue-600 hover:bg-blue-700 cursor-pointer" onClick={simulateAnalysis}>
          {isAnalyzing ? "Analyzing..." : "Refresh Analysis"}
        </Badge>
      </div>

      {isAnalyzing ? (
        <div className="py-8">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-24 h-24 mb-4">
              <div className="absolute inset-0 rounded-full border-2 border-blue-600/20"></div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={290}
                  strokeDashoffset={290 - (290 * progress) / 100}
                  className="text-blue-600"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <p className="text-blue-400 font-medium mb-2">AI Analysis in Progress</p>
            <p className="text-sm text-gray-400 text-center max-w-xs">
              Our AI is analyzing market data, demographics, and franchise performance to find your perfect match
            </p>
            <div className="w-full mt-4 bg-gray-700/30 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {recommendations.map((recommendation, index) => (
            <motion.div
              key={recommendation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 p-4 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 bg-gradient-to-br from-blue-600/80 to-violet-600/80 flex items-center justify-center">
                    <span className="text-white font-bold">{recommendation.name.substring(0, 2)}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium text-white">{recommendation.name}</h4>
                      <Badge className="bg-gradient-to-r from-blue-600 to-violet-600">
                        {recommendation.match}% Match
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="flex items-center text-gray-400">
                        <DollarSign className="h-3 w-3 mr-1 text-blue-400" />
                        {recommendation.investment}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <TrendingUp className="h-3 w-3 mr-1 text-blue-400" />
                        ROI: {recommendation.roi}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-3 w-3 mr-1 text-blue-400" />
                        {recommendation.locations.length} locations
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
