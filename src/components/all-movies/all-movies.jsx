import { useState } from "react";

import { Container, Row, Col, CardGroup, Card, Form, Button, } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

export const AllMovies = ({ movies, user }) => {

  const storedToken = localStorage.getItem("token");


  //Search


  //console.log(event.target.value); 
  //  const value = event.target.value; //.target.value = syntax for taking value of a given input

  const value = "";

  function checkSearchTerm(movie) {
    if (movie.title === value ) {
      return movie
    }
  }
  let searchResults = movies.filter(checkSearchTerm);
  console.log("searchResults: ", searchResults);

 /*  if (!value) {
    return;
  }
  console.log('do i get here');
  function checkPokemonName(pokemon) {
    //console.log(pokemon);
    if (pokemon.name.toLowerCase().includes(value.toLowerCase())) {
      return pokemon
    }
  }
  //console.log(pokemonRepository.getAll().filter(checkPokemonName));
  let result = pokemonRepository.getAll().filter(checkPokemonName);
  //console.log(result[0].name);
  let pokemonListDisplay = document.querySelector('.pokemon-list');
  pokemonListDisplay.innerHTML = '';
  result.forEach(function (pokemon) {
    pokemonRepository.addCard(pokemon);
  }); */


  return (
    <>
      {
        !value ? (
          movies.map((movie) => (
            <Col className="mb-4" key={movie.id} md={3}>
              <MovieCard
                movie={movie}
                user={user}
              />
            </Col>
          ))
        ) : (
          searchResults.map((movie) => (
            <Col className="mb-4" key={movie.id} md={3}>
              <MovieCard
                movie={movie}
                user={user}
              />
            </Col>
          ))
        )
      }
    </>
  );
};