"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MovieCardProps {
  id: string
  title: string
  image: string
  match?: number
}

export default function MovieCard({ id, title, image, match }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative rounded-md overflow-hidden transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/movies/${id}`}>
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered ? "scale-110 brightness-75" : "scale-100"
            }`}
          />

          {match && <div className="absolute bottom-2 left-2 text-green-500 font-medium text-sm">{match}% Match</div>}
        </div>
      </Link>

      {isHovered && (
        <div className="absolute inset-x-0 bottom-0 bg-gray-900 p-3 transform translate-y-0 transition-transform duration-300 z-10">
          <h3 className="text-sm font-medium mb-2 line-clamp-1">{title}</h3>

          <div className="flex items-center gap-1 mb-2">
            <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full bg-white text-black hover:bg-gray-200">
              <Play size={14} />
            </Button>
            <Button size="icon" variant="outline" className="h-7 w-7 rounded-full border-gray-600 hover:bg-gray-800">
              <Plus size={14} />
            </Button>
            <Button size="icon" variant="outline" className="h-7 w-7 rounded-full border-gray-600 hover:bg-gray-800">
              <ThumbsUp size={14} />
            </Button>
            <div className="flex-grow"></div>
            <Button size="icon" variant="outline" className="h-7 w-7 rounded-full border-gray-600 hover:bg-gray-800">
              <ChevronDown size={14} />
            </Button>
          </div>

          <div className="flex items-center text-xs gap-2">
            <span className="text-green-500 font-medium">{match || 97}% Match</span>
            <span className="border border-gray-600 px-1">TV-14</span>
            <span>2 Seasons</span>
          </div>

          <div className="flex flex-wrap gap-1 mt-1 text-xs">
            <span>Drama</span>
            <span>•</span>
            <span>Sci-Fi</span>
            <span>•</span>
            <span>Mystery</span>
          </div>
        </div>
      )}
    </div>
  )
}
