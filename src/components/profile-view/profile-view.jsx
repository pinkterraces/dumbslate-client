import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { Container, Row, Col, CardGroup, Card, Form, Button, } from "react-bootstrap";
import { UserInfo } from "./user-info";
import { UpdateUserInfo } from "./update-user";
import { FavoriteMovies } from "./favourite-movies";

export const ProfileView = ({ loggedInUser, token, movies }) => {

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser ? storedUser : null);

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
      //return userJSON = userProfile;
      setUser(userProfile)
    })
  }, []);

  //setUser(userJSON);
  //console.log("userJSON:", userJSON);
  //console.log("userJSON-user:", user);
  
  let refreshedFavoriteMovies = user.FavoriteMovies
  //console.log("refreshedFavoriteMovies: ", refreshedFavoriteMovies);
  let favoriteMovies = movies.filter(m => refreshedFavoriteMovies.includes(m.id))
  //console.log("favoriteMovies: ", favoriteMovies);

  const birthdate = user.Birthdate.substring(0, 10);
  const username = user.Username;
  const email = user.Email;
  const password = user.Password;

  return (
    <>
      <Container>
        <UserInfo
          user={user}
        />
        <UpdateUserInfo
/*           updateUsername={username}
          updateEmail={email}
          updateBirthdate={birthdate}
          updatePassword={password} */
          user={user}
          token={token}
        />
        <FavoriteMovies
          user={user}
          movies={movies}
          favoriteMovies={favoriteMovies}
        />
      </Container>
    </>

  );
};
