"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export function FloatingPaper({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [positions, setPositions] = useState<Array<{x: number, y: number}>>([])

  // Seeded random number generator
  function seededRandom(seed: number) {
    let x = Math.sin(seed) * 10000
    return x - Math.floor(x)
  }

  useEffect(() => {
    // Generate stable positions on mount
    const initialPositions = Array.from({ length: count }).map((_, i) => ({
      x: seededRandom(i) * dimensions.width,
      y: seededRandom(i + count) * dimensions.height
    }))
    setPositions(initialPositions)

    // Update dimensions and positions on client side
    const updateDimensions = () => {
      const newDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      }
      setDimensions(newDimensions)
      
      // Update positions based on new dimensions
      setPositions(prev => prev.map((pos, i) => ({
        x: (pos.x / dimensions.width) * newDimensions.width,
        y: (pos.y / dimensions.height) * newDimensions.height
      })))
    }

    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [count, dimensions.height, dimensions.width])

  return (
    <div className="relative w-full h-full">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: positions[i]?.x || 0,
            y: positions[i]?.y || 0,
          }}
          animate={{
            x: [
              positions[i]?.x || 0,
              seededRandom(i + 1) * dimensions.width,
              seededRandom(i + 2) * dimensions.width
            ],
            y: [
              positions[i]?.y || 0,
              seededRandom(i + count + 1) * dimensions.height,
              seededRandom(i + count + 2) * dimensions.height
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
            <FileText className="w-8 h-8 text-purple-400/50" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
