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



export const FavoriteMovies = ({ user, favoriteMovies }) => {
  const [movies, setMovies] = useState([]);

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken ? storedToken : null);

  return (
    <>
      <Row className="justify-content-md-center pb-5" /*style={{border: "1px solid blue"}}*/ >
        <h1>Favorite Movies</h1>
        {favoriteMovies.map((movie) => (
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