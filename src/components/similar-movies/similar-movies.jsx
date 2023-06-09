import { MovieCard } from "../movie-card/movie-card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


/**
* Create movie card for movie with same genre in DB to be displayed on movie-view
* @param {string} genre
* @param {Object[]} movies
* @param {string} selectedMovie
*/
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
    <Row>
      {similarMovies.map((movie) => (
          <Col className="mb-4" key={movie.id} md={4}>
          <MovieCard
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
          </Col>
        ))}
    </Row>
  )
}