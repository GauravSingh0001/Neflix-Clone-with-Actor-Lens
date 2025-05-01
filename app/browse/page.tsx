import Navbar from "@/components/navbar"
import MovieGrid from "@/components/movie-grid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold">Browse</h1>

          <div className="relative w-full md:w-auto">
            <Input
              type="search"
              placeholder="Search titles..."
              className="bg-gray-900 border-gray-700 text-white pl-10 w-full md:w-64"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-gray-900 border-b border-gray-800">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="movies">Movies</TabsTrigger>
            <TabsTrigger value="tv-shows">TV Shows</TabsTrigger>
            <TabsTrigger value="my-list">My List</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <MovieGrid category="all" />
          </TabsContent>

          <TabsContent value="movies">
            <MovieGrid category="movies" />
          </TabsContent>

          <TabsContent value="tv-shows">
            <MovieGrid category="tv-shows" />
          </TabsContent>

          <TabsContent value="my-list">
            <MovieGrid category="my-list" />
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-8">
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
            Load More
          </Button>
        </div>
      </main>
    </div>
  )
}
