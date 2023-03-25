# dumbslate
 
## Documentation

### Purpose

This app allows users to browse obsure movies from the 1980s to find a short description and information about genre and director, as well as create a profile to save a list of films they're interested in.

The API uses the Express framework for Node.js to interface with a MongoDB database which leverages Mongoose models to query the data.

React bootstrap is used for the front-end interface and hosted on Netify.

Features:
Return a list of all movies
Return data (description, genre, director, image URL, whether it's featured or not) about a single movie by title
Return data about a genre (description) by name/title
Return data about a director (bio, birth year, death year) by name
Register
Update their user info
Add a movie to their list of favorites
Remove a movie from their list of favorites
Deregister
