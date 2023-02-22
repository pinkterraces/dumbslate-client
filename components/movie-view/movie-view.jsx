import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <span>{movie.title}</span>
      </div>
      <div>
        <img src={movie.image}/>
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
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genre: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};