import { MovieCard } from "../movie-card/movie-card";

import { Row, Col } from "react-bootstrap";

export const FavoriteMovies = ({ favoriteMovies }) => {

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