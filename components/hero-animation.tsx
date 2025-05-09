"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import FallbackImage from "@/components/fallback-image"

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative w-full h-[400px] md:h-[500px]">
      {/* Main 3D object */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80"
        animate={{
          rotateY: 360,
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-violet-600/20 blur-xl"></div>
          <FallbackImage
            src="/images/ai-globe.png"
            alt="AI-powered global franchise network"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 shadow-lg"
        animate={{
          y: [0, -10, 0],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center">
            <FallbackImage
              src="/images/chai-point.png"
              alt="Chai Point"
              width={20}
              height={20}
              className="rounded-full"
            />
          </div>
          <div>
            <div className="text-xs font-medium text-white">Chai Point</div>
            <div className="text-xs text-blue-400">98% Success Rate</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 shadow-lg"
        animate={{
          y: [0, 10, 0],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center">
            <FallbackImage
              src="/images/mba-chai-wala.png"
              alt="MBA Chai Wala"
              width={20}
              height={20}
              className="rounded-full"
            />
          </div>
          <div>
            <div className="text-xs font-medium text-white">MBA Chai Wala</div>
            <div className="text-xs text-blue-400">96% Success Rate</div>
          </div>
        </div>
      </motion.div>

      {/* Data points */}
      <motion.div
        className="absolute top-1/3 left-10 flex flex-col items-center"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        <div className="h-16 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-10 flex flex-col items-center"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1.5,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-violet-500"></div>
        <div className="h-16 w-0.5 bg-gradient-to-b from-violet-500 to-transparent"></div>
      </motion.div>

      {/* Pulse effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-40 h-40 md:w-60 md:h-60 rounded-full border border-blue-500/20"
          animate={{
            scale: [1, 1.5],
            opacity: [0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
        <motion.div
          className="w-40 h-40 md:w-60 md:h-60 rounded-full border border-violet-500/20"
          animate={{
            scale: [1, 1.5],
            opacity: [0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: 0.5,
          }}
        />
      </div>
    </div>
  )
}
