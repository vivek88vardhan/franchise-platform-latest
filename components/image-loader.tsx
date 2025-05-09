"use client"

import { useEffect } from "react"

// This component ensures all images are preloaded
export default function ImageLoader() {
  useEffect(() => {
    // Preload all images
    const imagePaths = [
      "/images/ai-globe.png",
      "/images/us-map.png",
      "/images/neural-network.png",
      "/images/chai-point.png",
      "/images/mba-chai-wala.png",
      "/images/chai-garam.png",
      "/images/tea-trails.png",
      "/images/creamstone.png",
      "/images/pepperfry.png",
    ]

    // Only run in browser environment
    if (typeof window !== "undefined") {
      imagePaths.forEach((path) => {
        const img = new window.Image()
        img.src = path
      })
    }
  }, [])

  return null
}
