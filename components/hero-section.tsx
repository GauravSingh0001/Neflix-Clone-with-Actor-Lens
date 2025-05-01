import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Info } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative h-[80vh] md:h-[90vh]">
      {/* Hero Background */}
      <Image
        src="/placeholder.svg?height=1080&width=1920&text=Featured+Movie"
        alt="Featured movie"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Stranger Things</h1>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-green-500 font-medium">97% Match</span>
              <span className="text-gray-400">2022</span>
              <span className="border border-gray-600 px-1 text-xs">TV-14</span>
              <span className="text-gray-400">4 Seasons</span>
            </div>

            <p className="text-lg text-gray-200 mb-8">
              When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying
              supernatural forces, and one strange little girl.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white text-black hover:bg-gray-200 gap-2">
                <Link href="/movies/stranger-things">
                  <Play className="h-5 w-5" /> Play
                </Link>
              </Button>
              <Button asChild variant="secondary" className="bg-gray-600/80 text-white hover:bg-gray-700 gap-2">
                <Link href="/movies/stranger-things">
                  <Info className="h-5 w-5" /> More Info
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
