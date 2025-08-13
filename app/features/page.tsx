"use client"

import Navbar from "@/components/navbar"
import { FloatingPaper } from "@/components/floating-paper"
import { RoboAnimation } from "@/components/robo-animation"
import Sparkles from "@/components/sparkles"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Features
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px]">
            <FloatingPaper count={6} />
          </div>
          
          <div className="space-y-8">
            <div className="p-6 bg-gray-900 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 relative">
                Interactive Animations
                <div className="absolute inset-0">
                  <Sparkles />
                </div>
              </h2>
              <p className="text-gray-300">
                Experience our cutting-edge interactive animations that bring your content to life.
              </p>
            </div>
            
            <div className="p-6 bg-gray-900 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 relative">
                AI-Powered Features
                <div className="absolute inset-0">
                  <Sparkles />
                </div>
              </h2>
              <p className="text-gray-300">
                Leverage our AI capabilities for smarter, more efficient workflows.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <RoboAnimation />
        </div>
      </div>
    </div>
  )
}
