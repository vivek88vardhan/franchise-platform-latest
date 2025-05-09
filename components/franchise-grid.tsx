"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Info, Star, TrendingUp, Zap, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

const franchises = [
  {
    id: 1,
    name: "Chai Point",
    category: "Beverage",
    investmentRange: "$100K - $200K",
    popularity: "High",
    rating: 4.8,
    aiScore: 98,
    growthPotential: "Excellent",
    marketFit: 95,
  },
  {
    id: 2,
    name: "MBA Chai Wala",
    category: "Beverage",
    investmentRange: "$80K - $150K",
    popularity: "High",
    rating: 4.7,
    aiScore: 96,
    growthPotential: "Excellent",
    marketFit: 92,
  },
  {
    id: 3,
    name: "Chai Garam",
    category: "Beverage",
    investmentRange: "$70K - $130K",
    popularity: "Medium",
    rating: 4.5,
    aiScore: 91,
    growthPotential: "Good",
    marketFit: 88,
  },
  {
    id: 4,
    name: "Tea Trails",
    category: "Beverage & Snacks",
    investmentRange: "$120K - $220K",
    popularity: "Medium",
    rating: 4.6,
    aiScore: 93,
    growthPotential: "Very Good",
    marketFit: 90,
  },
  {
    id: 5,
    name: "Creamstone",
    category: "Ice Cream",
    investmentRange: "$150K - $250K",
    popularity: "High",
    rating: 4.9,
    aiScore: 97,
    growthPotential: "Excellent",
    marketFit: 94,
  },
  {
    id: 6,
    name: "Pepperfry",
    category: "Furniture",
    investmentRange: "$200K - $400K",
    popularity: "Medium",
    rating: 4.4,
    aiScore: 89,
    growthPotential: "Good",
    marketFit: 85,
  },
]

export default function FranchiseGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {franchises.map((franchise) => (
        <motion.div
          key={franchise.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: franchise.id * 0.1 }}
          viewport={{ once: true }}
          onMouseEnter={() => setHoveredId(franchise.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-900/50 to-violet-900/50 flex items-center justify-center">
              <div className="text-4xl font-bold text-white">{franchise.name.substring(0, 2)}</div>
              <Badge
                className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-violet-600"
                variant="secondary"
              >
                {franchise.popularity} Demand
              </Badge>
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm rounded-full py-1 px-3 flex items-center">
                <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                <span className="text-xs font-medium text-white">{franchise.rating}</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-blue-500/80 backdrop-blur-sm rounded-full py-1 px-3 flex items-center">
                <Zap className="h-3 w-3 text-white mr-1" />
                <span className="text-xs font-medium text-white">AI Score: {franchise.aiScore}</span>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{franchise.name}</h3>
                  <p className="text-gray-400 text-sm">{franchise.category}</p>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400 hover:bg-blue-900/20">
                  <Info className="h-5 w-5" />
                </Button>
              </div>

              {hoveredId === franchise.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 space-y-2"
                >
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-gray-300">
                      <TrendingUp className="h-4 w-4 mr-1 text-blue-400" />
                      <span>Growth Potential:</span>
                    </div>
                    <span className="text-blue-400 font-medium">{franchise.growthPotential}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-gray-300">
                      <BarChart3 className="h-4 w-4 mr-1 text-blue-400" />
                      <span>US Market Fit:</span>
                    </div>
                    <span className="text-blue-400 font-medium">{franchise.marketFit}%</span>
                  </div>
                </motion.div>
              )}

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-sm text-gray-400">Investment</p>
                  <p className="font-semibold text-white">{franchise.investmentRange}</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 border-0">
                  AI Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
