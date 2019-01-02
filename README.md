# Galvanize OMDB Back-End
This is a database I created to be used for my full stack OMDB application, that feeds information to my [frontend](https://github.com/daneparke/Movies-Frontend). 
* This backend contains one table that has a list of movies with their title, director, year, rating, poster url, and an id.
* In this database you can create, edit, and delete movies from the collection.

## Getting Started

Fork and clone this repository and run `npm install`. 

### Creating The Database
In the terminal you will have to create a database with the exact name of the database I used.
* To do this in the terminal run 
* `createdb Moviesdb`
* This will create a database on your computer which will than be updated when you push the seeds to it.

### Adding Seeds To Database
* To push the seeds to the database in your terminal run 
* `knex migrate:latest`
* `knex seed:run`

## Technologies Used
* [Knex](https://knexjs.org/) - Library
* [Cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - Library
* [PostgreSQL](https://www.postgresql.org/docs/) - Database Management System
* [Express](https://expressjs.com/) - Framework
* [Body-Parser](https://github.com/expressjs/body-parser) - Middleware

## Deployed Link
[Movies Database](https://danemoviesdb.herokuapp.com/movies)

