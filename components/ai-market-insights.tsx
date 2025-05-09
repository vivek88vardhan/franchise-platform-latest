"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, MapPin, Users, DollarSign, Clock } from "lucide-react"
import FallbackImage from "@/components/fallback-image"

export default function AIMarketInsights() {
  const [activeTab, setActiveTab] = useState("trends")
  const [animateChart, setAnimateChart] = useState(true)

  useEffect(() => {
    // Reset animation when tab changes
    setAnimateChart(false)
    const timer = setTimeout(() => setAnimateChart(true), 100)
    return () => clearTimeout(timer)
  }, [activeTab])

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
      <Tabs defaultValue="trends" value={activeTab} onValueChange={setActiveTab}>
        <div className="p-4 border-b border-white/10">
          <TabsList className="bg-white/5">
            <TabsTrigger value="trends" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Market Trends
            </TabsTrigger>
            <TabsTrigger
              value="demographics"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Demographics
            </TabsTrigger>
            <TabsTrigger value="locations" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Top Locations
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="trends" className="p-6 mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-400" />
                Indian Franchise Growth Trends
              </h3>

              <div className="h-64 relative">
                {animateChart && (
                  <>
                    {/* X-axis */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>

                    {/* Y-axis */}
                    <div className="absolute top-0 bottom-0 left-0 w-px bg-white/20"></div>

                    {/* Y-axis labels */}
                    <div className="absolute top-0 left-2 text-xs text-gray-400">100%</div>
                    <div className="absolute top-1/2 left-2 text-xs text-gray-400">50%</div>
                    <div className="absolute bottom-0 left-2 text-xs text-gray-400">0%</div>

                    {/* X-axis labels */}
                    <div className="absolute bottom-2 left-10 text-xs text-gray-400">2021</div>
                    <div className="absolute bottom-2 left-1/3 text-xs text-gray-400">2022</div>
                    <div className="absolute bottom-2 left-2/3 text-xs text-gray-400">2023</div>
                    <div className="absolute bottom-2 right-2 text-xs text-gray-400">2024</div>

                    {/* Chart lines */}
                    <motion.svg
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Beverage Franchises */}
                      <motion.path
                        d="M 40 180 L 120 150 L 200 100 L 280 60"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />

                      {/* Food Franchises */}
                      <motion.path
                        d="M 40 190 L 120 170 L 200 130 L 280 90"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                      />

                      {/* Retail Franchises */}
                      <motion.path
                        d="M 40 200 L 120 190 L 200 160 L 280 120"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
                      />
                    </motion.svg>

                    {/* Legend */}
                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-gray-300">Beverage</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                        <span className="text-xs text-gray-300">Food</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="text-xs text-gray-300">Retail</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-400" />
                Key Insights
              </h3>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-3 bg-blue-900/20 border border-blue-500/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-blue-600">Trend</Badge>
                      <h4 className="text-sm font-medium text-white">Beverage Growth</h4>
                    </div>
                    <p className="text-xs text-gray-300">
                      Indian beverage franchises have seen a 68% growth rate over the past 3 years, with chai concepts
                      leading the market.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="p-3 bg-violet-900/20 border border-violet-500/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-violet-600">Opportunity</Badge>
                      <h4 className="text-sm font-medium text-white">Market Gap</h4>
                    </div>
                    <p className="text-xs text-gray-300">
                      AI analysis identifies a 42% market gap for authentic Indian quick-service concepts in suburban
                      areas.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="p-3 bg-emerald-900/20 border border-emerald-500/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-emerald-600">Prediction</Badge>
                      <h4 className="text-sm font-medium text-white">Future Growth</h4>
                    </div>
                    <p className="text-xs text-gray-300">
                      Our AI predicts a 27% CAGR for Indian franchises over the next 5 years, with highest growth in the
                      Northeast and West Coast.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="demographics" className="p-6 mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-400" />
                Target Customer Profile
              </h3>

              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-medium text-white">Age Distribution</h4>
                    <Badge className="bg-blue-600">High Value</Badge>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-400">25-34</span>
                        <span className="text-xs text-blue-400">38%</span>
                      </div>
                      <div className="w-full bg-gray-700/30 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full w-[38%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-400">35-44</span>
                        <span className="text-xs text-blue-400">27%</span>
                      </div>
                      <div className="w-full bg-gray-700/30 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full w-[27%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-400">18-24</span>
                        <span className="text-xs text-blue-400">22%</span>
                      </div>
                      <div className="w-full bg-gray-700/30 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full w-[22%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-400">45-54</span>
                        <span className="text-xs text-blue-400">10%</span>
                      </div>
                      <div className="w-full bg-gray-700/30 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full w-[10%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-400">55+</span>
                        <span className="text-xs text-blue-400">3%</span>
                      </div>
                      <div className="w-full bg-gray-700/30 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full w-[3%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-white mb-3">Income Level</h4>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-400">32%</div>
                      <div className="text-xs text-gray-400">$50K-$75K</div>
                    </div>

                    <div className="bg-violet-900/20 border border-violet-500/20 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-violet-400">41%</div>
                      <div className="text-xs text-gray-400">$75K-$100K</div>
                    </div>

                    <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-emerald-400">27%</div>
                      <div className="text-xs text-gray-400">$100K+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-blue-400" />
                Consumer Behavior Insights
              </h3>

              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-white mb-3">Key Motivators</h4>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-600/10 flex items-center justify-center text-blue-400 font-bold">
                        1
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Authentic Experience</div>
                        <div className="text-xs text-gray-400">87% prioritize authentic Indian flavors</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600/20 to-violet-600/10 flex items-center justify-center text-violet-400 font-bold">
                        2
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Convenience</div>
                        <div className="text-xs text-gray-400">73% value quick service and accessibility</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-600/20 to-emerald-600/10 flex items-center justify-center text-emerald-400 font-bold">
                        3
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Quality Ingredients</div>
                        <div className="text-xs text-gray-400">68% are willing to pay premium for quality</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-white mb-3">Visit Frequency</h4>

                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-400">Weekly Visitors</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-400">62%</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700/30">
                      <div
                        style={{ width: "62%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-violet-500"
                      ></div>
                    </div>
                  </div>

                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-400">Monthly Visitors</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-400">28%</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700/30">
                      <div
                        style={{ width: "28%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-violet-500"
                      ></div>
                    </div>
                  </div>

                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-400">Occasional Visitors</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-400">10%</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700/30">
                      <div
                        style={{ width: "10%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-violet-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="locations" className="p-6 mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                Top US Markets for Indian Franchises
              </h3>

              <div className="relative h-64 bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                <div className="absolute inset-0 opacity-70">
                  <FallbackImage src="/images/us-map.png" alt="US Map" fill className="object-cover" />
                </div>

                {/* Hotspots */}
                <motion.div
                  className="absolute top-[30%] left-[80%] w-4 h-4 rounded-full bg-blue-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    New York
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-[40%] left-[20%] w-4 h-4 rounded-full bg-blue-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    San Francisco
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-[35%] left-[60%] w-4 h-4 rounded-full bg-blue-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    Chicago
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-[50%] left-[30%] w-4 h-4 rounded-full bg-blue-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 1.5,
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    Los Angeles
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-[60%] left-[75%] w-4 h-4 rounded-full bg-blue-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 2,
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    Miami
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-400" />
                Market Potential Score
              </h3>

              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-white">New York</span>
                    </div>
                    <span className="text-sm font-medium text-blue-400">96%</span>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full w-[96%]"></div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-white">San Francisco</span>
                    </div>
                    <span className="text-sm font-medium text-blue-400">94%</span>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full w-[94%]"></div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-white">Chicago</span>
                    </div>
                    <span className="text-sm font-medium text-blue-400">89%</span>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full w-[89%]"></div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-white">Los Angeles</span>
                    </div>
                    <span className="text-sm font-medium text-blue-400">87%</span>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full w-[87%]"></div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-white">Miami</span>
                    </div>
                    <span className="text-sm font-medium text-blue-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
