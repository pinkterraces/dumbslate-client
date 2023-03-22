import { MovieCard } from "../movie-card/movie-card";

import { Row, Col } from "react-bootstrap";

export const FavoriteMovies = ({ favoriteMovies, user }) => {

  return (
    <>
      <Row className="justify-content-md-center pb-5">
        <h1>Favorite Movies</h1>
        {favoriteMovies.map((movie) => (
          <Col className="mb-4" key={movie.id} md={4}>
            <MovieCard
              movie={movie}
              user={user}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};