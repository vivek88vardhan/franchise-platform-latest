"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default function HeroStatic() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Main visualization */}
      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative rounded-lg overflow-hidden border-2 border-white/10 shadow-2xl">
          <div className="aspect-[4/3] relative">
            {/* Map background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-violet-900/40 z-10"></div>
            <div className="absolute inset-0 z-0">
              <svg viewBox="0 0 800 600" className="w-full h-full opacity-20">
                <path
                  d="M244,184c15.2,0.2,29.7,10.2,41.5,23.2c11.9,13,21.1,29.3,30.3,44.4c9.2,15.1,18.3,29.1,31.5,41.7
                  c13.2,12.6,30.4,23.9,45.6,23.9c15.1,0,28.2-11.3,39.5-25.3c11.3-14,20.8-30.7,30.4-45.7c9.5-15,19.1-28.3,33.3-36.7
                  c14.2-8.4,33-12,44.5-12c11.4,0,15.6,3.5,23.8,10.6c8.2,7.1,20.4,17.9,30.1,30.1c9.7,12.2,16.9,25.8,21.4,39.5
                  c4.5,13.7,6.2,27.6,2.3,40.3c-3.9,12.7-13.5,24.2-22.7,30.3c-9.1,6.1-17.8,6.7-27.6,11.9c-9.8,5.2-20.8,14.9-30.5,16.4
                  c-9.7,1.5-18.2-5.2-32.5-4.4c-14.3,0.8-34.5,9.1-49.6,8.3c-15.1-0.8-25.2-10.7-35.7-17.3c-10.5-6.6-21.4-9.9-31.5-9.9
                  c-10.1,0-19.5,3.1-27.7,9.4c-8.2,6.3-15.3,15.6-28.5,22.7c-13.2,7-32.6,11.8-43.7,11.8c-11.1,0-13.9-4.7-19.8-13
                  c-5.9-8.3-14.9-20.1-19.3-31.3c-4.4-11.2-4.2-21.7-5.8-34.2c-1.6-12.5-5-26.9-5-39.7c0-12.8,3.5-24,8.5-33.8
                  c5-9.8,11.5-18.2,21.4-22.8C227.8,184.1,228.8,183.8,244,184z"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle cx="300" cy="250" r="6" fill="white" />
                <circle cx="450" cy="300" r="6" fill="white" />
                <circle cx="380" cy="220" r="6" fill="white" />
                <circle cx="500" cy="250" r="6" fill="white" />
                <circle cx="420" cy="350" r="6" fill="white" />
              </svg>
            </div>

            {/* Franchise locations */}
            <motion.div
              className="absolute top-[30%] left-[25%] z-20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/20 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/80 to-violet-600/80 flex items-center justify-center">
                    <span className="text-white font-bold">CP</span>
                  </div>
                </div>
                <Badge className="absolute -top-2 -right-2 bg-blue-500">98%</Badge>
                <div className="absolute -bottom-2 -right-2 bg-black/70 rounded-full px-2 py-0.5 text-xs flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="text-white">4.8</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[50%] left-[60%] z-20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/20 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/80 to-violet-600/80 flex items-center justify-center">
                    <span className="text-white font-bold">MCW</span>
                  </div>
                </div>
                <Badge className="absolute -top-2 -right-2 bg-blue-500">96%</Badge>
                <div className="absolute -bottom-2 -right-2 bg-black/70 rounded-full px-2 py-0.5 text-xs flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="text-white">4.7</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[20%] left-[70%] z-20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/20 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/80 to-violet-600/80 flex items-center justify-center">
                    <span className="text-white font-bold">CS</span>
                  </div>
                </div>
                <Badge className="absolute -top-2 -right-2 bg-blue-500">97%</Badge>
                <div className="absolute -bottom-2 -right-2 bg-black/70 rounded-full px-2 py-0.5 text-xs flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="text-white">4.9</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Legend */}
          <div className="bg-black/50 backdrop-blur-sm p-3 border-t border-white/10">
            <div className="text-center text-white text-sm font-medium">AI-Predicted Franchise Success Map</div>
            <div className="flex justify-between mt-2 text-xs text-gray-300">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                <span>CP: Chai Point</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                <span>MCW: MBA Chai Wala</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                <span>CS: Creamstone</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <motion.div
          className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600/90 to-violet-600/90 rounded-lg p-3 shadow-lg border border-white/20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="text-white text-sm font-medium mb-1">AI Success Prediction</div>
          <div className="text-2xl font-bold text-white">97.8%</div>
          <div className="text-xs text-blue-200">Based on 50+ data points</div>
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-600/90 to-violet-600/90 rounded-lg p-3 shadow-lg border border-white/20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="text-white text-sm font-medium mb-1">Market Opportunity</div>
          <div className="text-2xl font-bold text-white">$2.4M</div>
          <div className="text-xs text-blue-200">Average annual revenue</div>
        </motion.div>
      </motion.div>

      {/* Connection lines */}
      <svg className="absolute inset-0 z-0 opacity-20" width="100%" height="100%">
        <motion.line
          x1="30%"
          y1="30%"
          x2="70%"
          y2="70%"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.line
          x1="70%"
          y1="30%"
          x2="30%"
          y2="70%"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </svg>
    </div>
  )
}
