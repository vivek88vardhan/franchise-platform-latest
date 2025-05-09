"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="h-full p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-colors group">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600/20 to-violet-600/20 flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}
