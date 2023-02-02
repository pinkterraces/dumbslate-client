import { MovieCard } from "../movie-card/movie-card";

export const SimilarMovies = ({ genre, movies, selectedMovie }) => {
 
  function noDisplaySelectedMovie(movie) {
    if (movie.title !== selectedMovie) {
      return movie
    }
  }
  let editedMovies = movies.filter(noDisplaySelectedMovie)

  function checkMovieGenre(movie) {
    if (movie.genre === genre ) {
      return movie
    }
  }
  let similarMovies = editedMovies.filter(checkMovieGenre);

  return (
  <>
    <div>
      {similarMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        ))}
    </div>
  </>
  )
}