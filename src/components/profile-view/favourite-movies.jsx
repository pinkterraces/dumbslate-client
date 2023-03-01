import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view"
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";

import { Row, Col, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserInfo } from "../profile-view/user-info";
import { UpdateUserInfo } from "../profile-view/update-user";



export const FavoriteMovies = ({ loggedInUser }) => {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState(null);

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch("https://dumbslate.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => {
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



  console.log("loggedInUser: ", loggedInUser);
  console.log("loggedInUser.FM: ", loggedInUser.FavoriteMovies);

  let favoriteMoviesXX = movies.filter(m => 
    user.FavoriteMovies.includes(m.id)
    );
  console.log("favoriteMoviesXX", favoriteMoviesXX);

  return (
    <>
      <Row className="justify-content-md-center pb-5" /*style={{border: "1px solid blue"}}*/ >
        <h1>Favorite Movies</h1>
        {favoriteMoviesXX.map((movie) => (
          <Col className="mb-4" key={movie.id} md={3}>
            <MovieCard
              movie={movie}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};