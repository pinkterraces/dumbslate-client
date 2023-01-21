export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>{movie.director}</span>
      </div>
      <div>
        <span>{movie.genre}</span>
      </div>
      <div>
        <span>{movie.description}</span>
      </div>
      <div>
        <img src={movie.image}/>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};