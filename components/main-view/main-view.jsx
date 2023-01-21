import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

const MainView = () => {
  const [movies, setMovies] = useState([
    {        
      id: 1,
      title: "The Delta Force",
      description: "After a plane is hijacked by terrorists, The Delta Force is sent in to resolve the crisis.",
      genre: "Action",
      director: "Menahem Golan",
      image: "https://m.media-amazon.com/images/M/MV5BZmY5MWM3NGEtMWVhMy00ZWFlLTg3ODAtMmI3YzU5NjU4NTZjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"
    },
    {
      id: 2, 
      title: "Enter the Ninja", 
      description: "After passing a ninja master test in Japan, Cole visits a war buddy in the Philippines. He helps him fight men, who want his buddy's plantation.",
      genre: "Action",
      director: "Menahem Golan",
      image: "https://m.media-amazon.com/images/M/MV5BYWU2MjE5ODAtOGM1YS00NjFiLWIzZjQtODVlZjg2MDdmZTQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    },
    {
      id: 3, 
      title: "Bulletproof", 
      description: "Oft-wounded L.A. cop Gary Busey invades Mexico to rescue U.S. Army types from a Soviet Agent. Henry Silva, Darlanne Fluege.",
      genre: "Action",
      director: "Steve Carver",
      image: "https://m.media-amazon.com/images/M/MV5BYjU5NjRiYmYtZjYwMy00NGYzLTkyNmYtMzViZjBiNjJhYjkxXkEyXkFqcGdeQXVyMjY3MjUzNDk@._V1_.jpg"
    },
    {
      id: 4, 
      title: "The Garbage Pail Kids Movie",
      description: "Dodger must confront the struggles of life as he is visited by the Garbage Pail Kids and intimidated by some older bullies.",
      genre: "Comedy",
      director: "Rod Amateau",
      image:"https://m.media-amazon.com/images/M/MV5BMTgzMzEwMzY5Nl5BMl5BanBnXkFtZTgwMzczNjkwMzE@._V1_.jpg"
    },
    {
      id: 5,
      title: "One Crazy Summer",
      description: "An aspiring teenage cartoonist and his friends come to the aid of a singer trying to save her family property from developers.",
      genre: "Comedy",
      director: "Savage Steve Holland",
      image: "https://m.media-amazon.com/images/M/MV5BMGNjN2ZmM2UtZjQzMS00NmM1LWJkZjUtMzg5Njc5OWQwODEyL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

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

export default MainView;