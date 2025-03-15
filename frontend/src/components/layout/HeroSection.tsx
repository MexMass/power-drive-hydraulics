"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    url: "/placeholder.svg?height=600&width=1200&text=Hydraulic+Motors",
    title: "High-Performance Hydraulic Motors",
    description: "Engineered for reliability in the most demanding industrial applications",
  },
  {
    url: "/placeholder.svg?height=600&width=1200&text=Hydraulic+Winches",
    title: "Heavy-Duty Hydraulic Winches",
    description: "Superior pulling power with precision control systems",
  },
  {
    url: "/placeholder.svg?height=600&width=1200&text=Gear+Reducers",
    title: "Precision Gear Reducers",
    description: "Optimized for efficiency and durability in challenging environments",
  },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState("right")

  const goToNext = useCallback(() => {
    if (isAnimating) return
    setDirection("right")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }, [isAnimating])

  const goToPrevious = useCallback(() => {
    if (isAnimating) return
    setDirection("left")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }, [isAnimating])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 6000)
    return () => clearInterval(interval)
  }, [goToNext])

  // Reset animation state after transition completes
  const handleAnimationEnd = () => {
    setIsAnimating(false)
  }

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-in-out",
            index === currentIndex ? "opacity-100 z-10 transform-none" : "opacity-0 z-0",
            isAnimating && index === currentIndex && direction === "right" ? "animate-slide-in-right" : "",
            isAnimating && index === currentIndex && direction === "left" ? "animate-slide-in-left" : "",
          )}
          onAnimationEnd={handleAnimationEnd}
        >
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.url})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          </div>

          {/* Text Content */}
          <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-4xl">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">{slide.title}</h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">{slide.description}</p>
            <div>
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return
              setDirection(index > currentIndex ? "right" : "left")
              setIsAnimating(true)
              setCurrentIndex(index)
            }}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

