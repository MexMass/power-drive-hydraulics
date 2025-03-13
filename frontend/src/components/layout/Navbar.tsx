"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full border-b border-gray-300 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo area */}
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center">
            {/* Placeholder for logo */}
            <span className="font-bold text-gray-700">PD</span>
          </div>
          <span className="ml-2 text-lg font-semibold text-gray-800">Power Drive Hydraulics</span>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              asChild
            >
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden absolute left-0 right-0 bg-white z-50 border-b border-gray-300 shadow-lg transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <div className="flex flex-col space-y-1 p-4">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              asChild
            >
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}

