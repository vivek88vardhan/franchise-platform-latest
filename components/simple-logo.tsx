"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface SimpleLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function SimpleLogo({ className = "", size = "md" }: SimpleLogoProps) {
  // Size mappings
  const sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  }

  return (
    <Link href="/" className={`flex items-center gap-1 font-bold ${sizes[size]} ${className}`}>
      <div className="relative">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">franchise</span>
        <motion.div
          className={`absolute -right-1 top-0 ${dotSizes[size]} rounded-full bg-gradient-to-r from-blue-500 to-violet-500`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">.ai</span>
    </Link>
  )
}
