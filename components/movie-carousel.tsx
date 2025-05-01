"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import MovieCard from "./movie-card"
import { useMobile } from "@/hooks/use-mobile"

interface MovieCarouselProps {
  title: string
  category: string
}

export default function MovieCarousel({ title, category }: MovieCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)
  const isMobile = useMobile()

  // Mock data - in a real app, this would come from an API
  const movies = [
    {
      id: "movie-1",
      title: "Stranger Things",
      image: "/placeholder.svg?height=400&width=600&text=Stranger+Things",
      match: 97,
    },
    { id: "movie-2", title: "The Witcher", image: "/placeholder.svg?height=400&width=600&text=The+Witcher", match: 95 },
    { id: "movie-3", title: "Wednesday", image: "/placeholder.svg?height=400&width=600&text=Wednesday", match: 93 },
    { id: "movie-4", title: "Squid Game", image: "/placeholder.svg?height=400&width=600&text=Squid+Game", match: 98 },
    { id: "movie-5", title: "Money Heist", image: "/placeholder.svg?height=400&width=600&text=Money+Heist", match: 96 },
    { id: "movie-6", title: "Dark", image: "/placeholder.svg?height=400&width=600&text=Dark", match: 94 },
    { id: "movie-7", title: "The Crown", image: "/placeholder.svg?height=400&width=600&text=The+Crown", match: 92 },
    { id: "movie-8", title: "Ozark", image: "/placeholder.svg?height=400&width=600&text=Ozark", match: 91 },
    { id: "movie-9", title: "Bridgerton", image: "/placeholder.svg?height=400&width=600&text=Bridgerton", match: 90 },
    {
      id: "movie-10",
      title: "The Queen's Gambit",
      image: "/placeholder.svg?height=400&width=600&text=The+Queen's+Gambit",
      match: 99,
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth

      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      })

      // Update button visibility after scrolling
      setTimeout(() => {
        if (carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
          setShowLeftButton(scrollLeft > 0)
          setShowRightButton(scrollLeft + clientWidth < scrollWidth - 10)
        }
      }, 500)
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setShowLeftButton(scrollLeft > 0)
      setShowRightButton(scrollLeft + clientWidth < scrollWidth - 10)
    }
  }

  return (
    <div className="mb-8 relative group">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>

      <div className="relative">
        {!isMobile && showLeftButton && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 h-12 w-12 rounded-full -ml-6"
            onClick={() => scroll("left")}
          >
            <ChevronLeft size={24} />
          </Button>
        )}

        {!isMobile && showRightButton && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 h-12 w-12 rounded-full -mr-6"
            onClick={() => scroll("right")}
          >
            <ChevronRight size={24} />
          </Button>
        )}

        <div ref={carouselRef} className="flex overflow-x-auto scrollbar-hide gap-2 pb-4" onScroll={handleScroll}>
          {movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-[200px] md:w-[250px]">
              <MovieCard id={movie.id} title={movie.title} image={movie.image} match={movie.match} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
