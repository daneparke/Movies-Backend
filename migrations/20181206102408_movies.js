
exports.up = (knex, Promise) => {
    return knex.schema.createTable('movies', (movie) => {
        movie.increments('id')
        movie.string('title')
        movie.string('director')
        movie.integer('year')
        movie.integer('rating')
        movie.string('url')
    })

};

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('movies')
};
