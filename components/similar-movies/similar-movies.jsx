import { MovieCard } from "../movie-card/movie-card";

export const SimilarMovies = ({ genre, movies }) => {
 
  function checkMovieName(movie) {
    if (movie.genre === genre ) {
      return movie
    }
  }
  let similarMovies = movies.filter(checkMovieName);

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