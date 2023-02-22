import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      <div>
        <img src={movie.image}/>
      </div>
      <div>{movie.title}</div>
      <div>{movie.genre}</div>
      <div>{movie.description}</div>
    </div>
  );
};

/* MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
} */