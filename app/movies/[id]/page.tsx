import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import MovieCarousel from "@/components/movie-carousel"
import { Play, Plus, ThumbsUp, Share2, ArrowLeft } from "lucide-react"

export default function MovieDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch movie details based on the ID
  const movie = {
    id: params.id,
    title: "Stranger Things",
    year: "2022",
    duration: "2h 15m",
    rating: "TV-14",
    genres: ["Sci-Fi", "Horror", "Drama"],
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    starring: "Winona Ryder, David Harbour, Finn Wolfhard",
    director: "The Duffer Brothers",
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative h-[70vh]">
        <Image
          src={`/placeholder.svg?height=1080&width=1920&text=${movie.title}`}
          alt={movie.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="absolute top-4 left-4">
          <Link href="/browse">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft size={24} />
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-gray-400">{movie.year}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">{movie.rating}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">{movie.duration}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres.map((genre, index) => (
              <span key={index} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                {genre}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button className="bg-white text-black hover:bg-gray-200 gap-2">
              <Play size={18} /> Play
            </Button>
            <Button variant="outline" className="border-gray-600 gap-2">
              <Plus size={18} /> My List
            </Button>
            <Button variant="outline" className="border-gray-600 gap-2">
              <ThumbsUp size={18} /> Rate
            </Button>
            <Button variant="outline" className="border-gray-600 gap-2">
              <Share2 size={18} /> Share
            </Button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Synopsis</h2>
            <p className="text-gray-300 mb-6">{movie.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-gray-400 mb-1">Starring</h3>
                <p className="text-white">{movie.starring}</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-1">Director</h3>
                <p className="text-white">{movie.director}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Details</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-gray-400 text-sm">Release Date</h3>
                <p>July 15, 2022</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm">Genre</h3>
                <p>{movie.genres.join(", ")}</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm">Runtime</h3>
                <p>{movie.duration}</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm">Audio</h3>
                <p>English [Original], Spanish, French</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm">Subtitles</h3>
                <p>English, Spanish, French, German</p>
              </div>
            </div>
          </div>
        </div>

        <MovieCarousel title="More Like This" category="similar" />
      </main>
    </div>
  )
}
