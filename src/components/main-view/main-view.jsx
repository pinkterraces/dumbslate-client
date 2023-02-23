import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view"
import { SignupView } from "../signup-view/signup-view";

import { Row, Col, Button, Nav } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = JSON.parse(localStorage.getItem("token"));
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

  return (
    <>
      <h1 href="#" className="text-dark " >Dumbslate</h1>
      <Row className="justify-content-md-center pb-5" /*style={{border: "1px solid blue"}}*/ >
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                      }}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <>
                    <Col>This list doesn't contain any movies.</Col>
                  </>
                ) : (
                  <Col md={8}>
                    <MovieView movies={movies} />
                  </Col>
                )}
            </>
            }
          />
          <Route 
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <>
                    <Col>This list doesn't contain any movies.</Col> 
                  </>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col className="mb-4" key={movie.id} md={3}>
                        <MovieCard
                          movie={movie}
                        />
                      </Col>
                    ))}
                  </>
                )}
                  <Button
                    onClick={() => {
                      setUser(null)
                      setToken(null)
                      localStorage.clear();
                    }}
                    className="mt-3"
                    variant="dark"
                    type="submit"
                    >Log Out
                  </Button>                
                </>
            }
          />       
        </Routes>
      </Row>
    </>
  );
};