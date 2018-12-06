const express = require('express')
const app = express()
const port = process.env.PORT || 3004
const queries = require('./queries')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    queries.getAllMovies().then(movies => res.status(200).send({ movies }))
})

app.get('/:id', (req, res) => {
    queries.getMovieById(req.params.id).then(movie => res.status(200).send(student))
})

app.post('/', (req, res) => {
    queries.createMovie(req.body).then(newMovie => res.status(201).send(newMovie))
})

app.delete('/:id', (req, res) => {
    queries.deleteMovie(id).then(res.status(204))
})

app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found.' })
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err })
})




const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)