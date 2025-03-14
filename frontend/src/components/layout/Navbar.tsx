"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
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
    <nav className="w-full bg-gray-100 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
        
        {/* Logo area */}
        <div>
          <Link to="/">
            <img
              src="/logo.svg"
              alt="Power Drive Hydraulics Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-18 md:w-24"
            />
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center md:gap-3 lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="inline-flex items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 md:text-base lg:text-lg"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden absolute left-0 right-0 bg-gray-100 z-50 shadow-lg transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <div className="flex flex-col p-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="w-full text-left text-lg font-medium text-gray-800 hover:bg-gray-200 hover:text-gray-900 py-4 px-4 rounded-md my-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

