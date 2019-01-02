## Galvanize OMDB Back-End
This is database I created to be used for my full stack OMDB application, that feeds information to my [frontend](https://github.com/daneparke/Movies-Frontend). 
This backend contains one table that has a list of movies with their title, director, year, rating, poster url, and an id.
In this database you can create, edit, and delete movies from the collection.

## Getting Started

Fork and clone this repository and run `npm install`.
In the terminal you will have to create a database with the exact name of the database I used.
* To do this in the terminal run 
* `createdb Moviesdb`
* 
* This will create a database on your computer which will than be updated when you push the seeds to it.
* To push the seeds to the database in your terminal run 
*`knex seed:run`

##Technologies Used
Knex, cors, postgresql, body-parser, and express.

##Deployed Link
[Movies Database](https://danemoviesdb.herokuapp.com/movies)

