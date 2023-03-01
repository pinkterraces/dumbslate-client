import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export const AddFavouriteMovie = ({ movie, user }) => {

  const storedToken = localStorage.getItem("token");
  const [token] = useState(storedToken ? storedToken : null);
  const [favoriteMovies, setFavoriteMovies] = useState([user.FavoriteMovies]);
  const currentMovieId = movie.id;

  console.log("user.Username: ", user.FavouriteMovies);

  //Returns user favorite movies
  useEffect(() => {
    if (!token) {
      return;
    }
    fetch(`https://dumbslate.herokuapp.com/users/${user.Username}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User data: ", data);
        const allFavoriteMovies = data.FavoriteMovies;
        setFavoriteMovies(allFavoriteMovies);
      });
  }, []);

  console.log("favoriteMovies: ", favoriteMovies);

  const checkMovie = favoriteMovies.find((m) => {
    if (m === currentMovieId) {
      console.log("Movie exists: true");
      return true;
    }
  })

  if (checkMovie) {
    //Removes movie from database onClick
    const handleSubmit = (event) => {
      event.preventDefault();

      fetch(`https://dumbslate.herokuapp.com/users/${user.Username}/movies/${currentMovieId}`, {
        method: "DELETE",
        //body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        if (res.ok) {
          alert("Movie removed!");
          window.location.reload();
        } else {
          alert("Movie could not be removed");
        }
      });
    };
    return (
      <>
        <Button
          className="mt-auto rounded-0"
          variant="secondary"
          onClick={handleSubmit}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="dark" className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </Button>
      </>
    );
  } else {
    //Adds movie to database onClick
    const handleSubmit = (event) => {
      event.preventDefault();

      if (checkMovie) {
        alert("Movie already exists in favorites");
      } else {
        fetch(`https://dumbslate.herokuapp.com/users/${user.Username}/movies/${currentMovieId}`, {
          method: "POST",
          //body: JSON.stringify(data),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          if (res.ok) {
            alert("Movie Added!");
            window.location.reload();
          } else {
            alert("Movie could not be added");
          }
        });
      }
    };
    return (
      <>
        <Button
          className="mt-auto rounded-0"
          variant="secondary"
          onClick={handleSubmit}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </Button>
      </>

    );
  }
/* 

  //Adds movie to database onClick
  const handleSubmit = (event) => {
    event.preventDefault();

    const checkMovie = favoriteMovies.find((m) => {
      if (m === currentMovieId) {
        console.log("Movie exists: true");
        return true;
      }
    })

    if (checkMovie) {
      alert("Movie already exists in favorites");
    } else {
      fetch(`https://dumbslate.herokuapp.com/users/${user.Username}/movies/${currentMovieId}`, {
        method: "POST",
        //body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        if (res.ok) {
          alert("Movie Added!");
          window.location.reload();
        } else {
          alert("Movie could not be added");
        }
      });
    }
  };

  return (

    <>
      <Button
        className="mt-auto rounded-0"
        variant="secondary"
        onClick={handleSubmit}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
        </svg>
      </Button>
    </>

  );*/

} 