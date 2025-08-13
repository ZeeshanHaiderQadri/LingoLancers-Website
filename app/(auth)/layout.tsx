"use client"

import Link from "next/link"
import { Bot } from "lucide-react"
import { motion } from "framer-motion"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 space-y-8 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-white/10"
      >
        <div className="flex flex-col items-center">
          <Link href="/" className="flex items-center space-x-2 mb-6">
            <Bot className="w-10 h-10 text-purple-500" />
            <span className="text-white font-medium text-2xl">Lingo Lancers</span>
          </Link>
          {children}
        </div>
      </motion.div>
    </div>
  )
}

