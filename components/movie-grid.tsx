import MovieCard from "./movie-card"

interface MovieGridProps {
  category: string
}

export default function MovieGrid({ category }: MovieGridProps) {
  // Mock data - in a real app, this would come from an API based on the category
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
    {
      id: "movie-11",
      title: "Breaking Bad",
      image: "/placeholder.svg?height=400&width=600&text=Breaking+Bad",
      match: 98,
    },
    {
      id: "movie-12",
      title: "Peaky Blinders",
      image: "/placeholder.svg?height=400&width=600&text=Peaky+Blinders",
      match: 97,
    },
    {
      id: "movie-13",
      title: "The Last Kingdom",
      image: "/placeholder.svg?height=400&width=600&text=The+Last+Kingdom",
      match: 96,
    },
    { id: "movie-14", title: "Narcos", image: "/placeholder.svg?height=400&width=600&text=Narcos", match: 95 },
    {
      id: "movie-15",
      title: "The Umbrella Academy",
      image: "/placeholder.svg?height=400&width=600&text=The+Umbrella+Academy",
      match: 94,
    },
    {
      id: "movie-16",
      title: "Black Mirror",
      image: "/placeholder.svg?height=400&width=600&text=Black+Mirror",
      match: 93,
    },
  ]

  // Filter movies based on category in a real app
  const filteredMovies =
    category === "my-list"
      ? movies.slice(0, 4) // Fewer movies for "My List"
      : category === "movies"
        ? movies.filter((_, index) => index % 2 === 0)
        : category === "tv-shows"
          ? movies.filter((_, index) => index % 2 !== 0)
          : movies

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} image={movie.image} match={movie.match} />
      ))}

      {filteredMovies.length === 0 && (
        <div className="col-span-full py-12 text-center">
          <p className="text-gray-400">No titles found in this category.</p>
        </div>
      )}
    </div>
  )
}
