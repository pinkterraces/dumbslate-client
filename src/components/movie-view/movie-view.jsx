import { useEffect } from "react";
//import { MovieCard } from "../movie-card/movie-card";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { SimilarMovies } from "../similar-movies/similar-movies";
import PropTypes from "prop-types";
//import './movie-view.scss';

import { Row, Col, CardGroup, Card, Button, } from "react-bootstrap";
import { AddFavouriteMovie } from "../add-favourite-movie/add-favourite-movie";

export const MovieView = ({ movies, user }) => {
  console.log("Movie View Movies: ", movies);

  const { movieId } = useParams(); 
  const movie = movies.find((m) => m.id === movieId);

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
                <Link className="d-grid gap-2 h-100 " style={{ textDecoration: 'none' }} to={`/`}>
                  <Button className="mt-auto rounded-0" variant="secondary" style={{ textDecoration: 'none' }} >Back</Button>
                </Link>
                <AddFavouriteMovie 
                  movie={movie}
                  user={user}
                />
              </Card.Body>
            </Card>
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

/* MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genre: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string
  }).isRequired
}; */