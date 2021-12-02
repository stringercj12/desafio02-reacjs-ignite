import { MovieCard } from "./MovieCard";
import { GenreResponseProps } from "../App";

interface ContentProps {
  movies: {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: {
      Source: string;
      Value: string;
    }[];
    Runtime: string;
  }[],
  selectedGenre: GenreResponseProps
}

export function Content({ movies, selectedGenre }: ContentProps) {
  // Complete aqui

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}