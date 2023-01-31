import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://dumbslate.herokuapp.com/movies")
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        const allFilmsApi = data.map((movies) => {
          return {
            id: movies._id,
            title: movies.Title,
            genre: movies.Genre.Name,
            director: movies.Director.Name,
            image: movies.ImagePath,
            description: movies.Description
          };
        });
        setMovies(allFilmsApi);
      });
  }, []);

  if (selectedMovie) {
    return ( 
            <MovieView
              movie={selectedMovie}
              onBackClick={() => {
                setSelectedMovie(null);
              }} 
            />
          );
        }

  if (movies.length === 0) {
    return <div>This list doesn't contain any movies.</div>
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};