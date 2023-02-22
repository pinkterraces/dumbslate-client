import { useEffect } from "react";
//import { MovieCard } from "../movie-card/movie-card";
import { SimilarMovies } from "../similar-movies/similar-movies";
import PropTypes from "prop-types";
//import './movie-view.scss';

import { Container, Row, Col, CardGroup, Card, Form, Button, } from "react-bootstrap";

export const MovieView = ({ movie, movies, onBackClick }) => {
  console.log("Movie View Movies: ", movies);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Row className="row-cols-sm-1 row-cols-md-2"/*style={{ border: "1px solid blue" }}*/>
        <Col>
          <CardGroup className="border-0">
            <Card className="h-100 border-0 mb-3">
              <Card.Img variant="top rounded-0" src={movie.image} />
            </Card>
          </CardGroup>
        </Col>
        <Col>
          <CardGroup >
            <Card className="mb-3 border-0">
              <Card.Body className="h-100 d-flex flex-column text-light bg-dark">
                <Card.Title><h1>{movie.title}</h1></Card.Title>
                <Card.Subtitle className="mb-3">{movie.genre}</Card.Subtitle>
                <Card.Text>{movie.description}</Card.Text>
                <Card.Text>Directed by {movie.director}</Card.Text>
                <Button className="mt-3 bg-secondary border-0 rounded-0" onClick={onBackClick}>Back</Button>
              </Card.Body>
            </Card>
{/*             <Button className="my-0 py-0 bg-secondary border-0 rounded-0 close w-25 h-25 " onClick={onBackClick}>
              <span className="display-4" aria-hidden="true">&times;</span>
            </Button> */}
          </CardGroup>
        </Col>
      </Row>
      <Row>
        <hr />
        <h2>Similar Movies</h2>
        <Col>
          <SimilarMovies
            genre={movie.genre}
            movies={movies}
            selectedMovie={movie.title}
          />
        </Col>
      </Row>
    </>
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