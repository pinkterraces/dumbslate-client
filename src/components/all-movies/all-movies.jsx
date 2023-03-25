import { useState } from "react";

import { Row, Col, Form } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

export const AllMovies = ({ movies, user }) => {

  const storedToken = localStorage.getItem("token");
  const [value, setValue] = useState("");

  //Search
  function checkSearchTerm(movie) {
    if (movie.title.toLowerCase().includes(value.toLowerCase()) || movie.genre.toLowerCase().includes(value.toLowerCase())  ) {
      return movie
    }
  }
  let searchResults = movies.filter(checkSearchTerm);
  console.log("searchResults: ", searchResults);

  return (
    <>

      <Row className="justify-content-md-end mb-3 mt-0 mx-0 px-0">

        <Col sm lg="3" >
          <Form>
            <Form.Group >
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                minLength="5"
                className="rounded-0 sm text-bg-light border-0"
                placeholder={"Search..."}
              >
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>

{/* Movies grid      */} 

      {
        !value ? (
          movies.map((movie) => (
            <Col className="mb-4" key={movie.id} md={3}>
              <MovieCard
                movie={movie}
                user={user}
              />
            </Col>
          ))
        ) : (
          searchResults.map((movie) => (
            <Col className="mb-4" key={movie.id} md={3}>
              <MovieCard
                movie={movie}
                user={user}
              />
            </Col>
          ))
        )
      }
    </>
  );
};