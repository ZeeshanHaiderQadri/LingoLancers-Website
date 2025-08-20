"use client"

import { Button } from "@/components/ui/button"
import { Bot, Menu, LayoutDashboard } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react" // Added import for React

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">Lingo Lancers</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/features">Features</NavLink>
        <NavLink href="/how-it-works">How it Works</NavLink>
        <NavLink href="/examples">Examples</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <NavLink href="https://dashboard.lingolancers.com">
          <LayoutDashboard className="w-5 h-5 mr-2" />
          <span>Dashboard</span>
        </NavLink>
        <Button variant="ghost" className="text-gray-500 cursor-not-allowed" disabled>
          Sign In
        </Button>
        <Button className="bg-gray-600 text-gray-400 cursor-not-allowed" disabled>
          Get Started
        </Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </Button>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isDashboard = href === "https://dashboard.lingolancers.com";
  
  if (isDashboard) {
    return (
      <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group flex items-center">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
      </Link>
    )
  }

  return (
    <span className="text-gray-500 cursor-not-allowed relative group flex items-center">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-500 transition-all" />
    </span>
  )
}
