import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view"
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = JSON.parse(localStorage.getItem("token"));
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null); 

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch("https://dumbslate.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log("data: ", data);
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
  }, [token]);

  if (!user) {
    return (
      <>
        <LoginView 
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
            }} 
        />
        <SignupView />
      </>
    );
  }

  if (selectedMovie) {
    return ( 
            <MovieView
              movie={selectedMovie}
              movies={movies}
              onBackClick={() => {
                setSelectedMovie(null);
              }} 
            />
          );
        }

  if (movies.length === 0) {
    return (
      <>
        <div>This list doesn't contain any movies.</div>
        <button
              onClick={() => {
                setUser(null)
                setToken(null)
                localStorage.clear();
              }}
            >Log Out</button>
      </>
    )
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
        <button
          onClick={() => {
            setUser(null)
            setToken(null)
            localStorage.clear();
          }}
        >Log Out</button>
    </div>
  );

  

};