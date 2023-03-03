import PropTypes from "prop-types";

//import "./movie-card.scss";

import { Container, Row, Col, CardGroup, Card, Form, Button, } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AddFavouriteMovie } from "../add-favourite-movie/add-favourite-movie";

export const MovieCard = ({ movie }) => {

  //console.log(movie.id);

  return (
    <Card
      className="h-100 border-0"
    >
      <Card.Img variant="top rounded-0" src={movie.image} />
      <Card.Body className="h-100 d-flex flex-column text-bg-dark ">
        <Card.Title>{movie.title}</Card.Title>
        <Card.Subtitle className="mb-3 min-vh-30">{movie.genre}</Card.Subtitle>
        {/*<Card.Text>{movie.description}</Card.Text>*/}
        <Link className="d-grid gap-2 h-100 " style={{ textDecoration: 'none' }} to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button className="mt-auto rounded-0" variant="secondary">Details</Button>
        </Link>
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
  }).isRequired
}