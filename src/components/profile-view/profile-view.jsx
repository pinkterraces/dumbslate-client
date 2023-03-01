import { useState, useEffect } from "react";
import { useParams } from "react-router";

import {Container, Row, Col, CardGroup, Card, Form, Button, } from "react-bootstrap";
import { UserInfo } from "./user-info";
import { UpdateUserInfo } from "./update-user";
import { FavoriteMovies } from "./favourite-movies";

export const ProfileView = ({ loggedInUser, token, movies }) => {
 

  console.log(loggedInUser);
  console.log("Logged in User Details: " + "Username: ", loggedInUser.Username + ", Email: ", loggedInUser.Email + ", Birthdate: ", loggedInUser.Birthdate);

  const birthdate = loggedInUser.Birthdate.substring(0, 10);
  const username = loggedInUser.Username;
  const email = loggedInUser.Email;
  const password = loggedInUser.Password;

  return (
    <>
      <Container>
        <UserInfo
          username={username}
          email={email}
          birthdate={birthdate}
        />
        <UpdateUserInfo 
          updateUsername={username}
          updateEmail={email}
          updateBirthdate={birthdate}
          updatePassword={password}
          token={token}    
        />
        <FavoriteMovies
        loggedInUser={loggedInUser}
        movies={movies}
        />
      </Container>
    </>

  );
};
