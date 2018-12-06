
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          title: 'The Grinch',
          director: 'Yarrow Cheney',
          year: 2018,
          rating: 4,
          url: 'https://uk.imageservice.sky.com/contentid/A5EK6sKrAaycfSWfyRzHJ/BOXART/237/356'
        },
        {
          title: 'Creed II',
          director: 'Steven Caple Jr.',
          year: 2018,
          rating: 2,
          url: 'https://www.out.com/sites/out.com/files/2018/06/19/creed_ii-_poster_0.jpg'
        },
        {
          title: 'Bohemian Rhapsody',
          director: 'Bryan Singer',
          year: 2018,
          rating: 3,
          url: 'https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_.jpg'
        },
        {
          title: 'Elf',
          director: 'Jon Favreau',
          year: 2003,
          rating: 5,
          url: 'https://i.pinimg.com/originals/f5/7f/ef/f57fef9e27ec21765c6669ee9dc055b7.jpg'
        },
        {
          title: 'Venom',
          director: 'Ruben Fleischer',
          year: 2018,
          rating: 4,
          url: 'https://www.joblo.com/assets/images/oldsite/posters/images/full/Venom-poster-6.jpg'
        },
        {
          title: 'Without a Paddle',
          director: 'Steven Brill',
          year: 2004,
          rating: 5,
          url: 'https://m.media-amazon.com/images/M/MV5BMjA0MTE2MDk2MF5BMl5BanBnXkFtZTYwMzg0NTc2._V1_UY1200_CR89,0,630,1200_AL_.jpg'
        },
        {
          title: 'The Waterboy',
          director: 'Frank Coraci',
          year: 1998,
          rating: 5,
          url: 'https://images-na.ssl-images-amazon.com/images/I/51a%2BOoShoLL.jpg'
        },
      ]);
    });
};
