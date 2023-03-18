import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import { UserInfo } from "./user-info";
import { UpdateUserInfo } from "./update-user";
import { FavoriteMovies } from "./favourite-movies";
import { DeleteUser } from "./delete-user";

export const ProfileView = ({ movies }) => {

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(
    {
      Username: "",
      Password: "",
      Email: "",
      Birthdate: "",
      FavoriteMovies: []
    }
  );
  const token = localStorage.getItem("token");

  const getUser = async () => {
    try {
      await fetch(`https://dumbslate.herokuapp.com/users/${storedUser}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => { 
          const newRes = response.json();
          setUser(newRes);
          console.log("user x: ", user);
          console.log("response.json(): ", newRes);
        })
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!token) {
      return;
    }
    getUser();
  }, []);

  let refreshedFavoriteMovies = user.FavoriteMovies;
  console.log("user 40: ", user);
  console.log("refreshedFavoriteMovies", refreshedFavoriteMovies);
  console.log("user.Username: ", user.Username);
  console.log("user.FavoriteMovies: ", user.FavoriteMovies);
  let favoriteMovies = movies.filter(m => refreshedFavoriteMovies.includes(m.id));

  return (
    <>
      <Container>
        <UserInfo
          user={user}
        />
        <UpdateUserInfo
          user={user}
        //token={token}
        />
        <DeleteUser
          user={user}
        />
        <FavoriteMovies
          favoriteMovies={favoriteMovies}
          user={user}
        />
      </Container>
    </>

  );
};
