import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import { UserInfo } from "./user-info";
import { UpdateUserInfo } from "./update-user";
import { FavoriteMovies } from "./favourite-movies";
import { DeleteUser } from "./delete-user";

export const ProfileView = ({ loggedInUser, token, movies }) => {

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser ? storedUser : null);

  console.log("user profile view 14: ", user); 

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch(`https://dumbslate.herokuapp.com/users/${loggedInUser.Username}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      return res.json();
    })
      .then((userProfile) => {
        //console.log("userProfile: ", userProfile);
        setUser(userProfile)
      })
  }, []);

  let refreshedFavoriteMovies = user.FavoriteMovies;
  let favoriteMovies = movies.filter(m => refreshedFavoriteMovies.includes(m.id));

  return (
    <>
      <Container>
        <UserInfo
          user={user}
        />
        <UpdateUserInfo
          user={user}
          token={token}
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
