//import { MovieCard } from "../movie-card/movie-card";
import { SimilarMovies } from "../similar-movies/similar-movies";
//import PropTypes from "prop-types";

export const MovieView = ({ movie, movies, onBackClick }) => {
  console.log("Movie View Movies: ", movies);
  return (
    <>
      <div>
        <span>{movie.title}</span>
      </div>
      <div>
        <img src={movie.image} />
      </div>
      <div>
        <span>{movie.genre}</span>
      </div>
      <div>
        <span>{movie.description}</span>
      </div>
      <div>
        <span>{movie.director}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
      <hr />
      <h1>Similar Movies</h1>
      <SimilarMovies
        genre={movie.genre}
        movies={movies}
        selectedMovie={movie.title}
      />

{/*       <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        ))}
      </div> */}
    </>
  );
};

/* MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genre: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
}; */