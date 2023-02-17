import PropTypes from "prop-types";

//import "./movie-card.scss";

import { Container, Row, Col, CardGroup, Card, Form, Button, } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card 
      className="h-100 border-0"
      onClick={() => {
        onMovieClick(movie);
      }}
      >
      <Card.Img variant="top rounded-0" src={movie.image} />
      <Card.Body className="h-100 d-flex flex-column text-bg-dark ">
        <Card.Title>{movie.title}</Card.Title>
        <Card.Subtitle className="mb-3">{movie.genre}</Card.Subtitle>
        {/*<Card.Text>{movie.description}</Card.Text>*/}
        <Button className="mt-auto rounded-0" variant="secondary">Details</Button>
      </Card.Body>  
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
}