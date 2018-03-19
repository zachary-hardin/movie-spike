const imdb = require('imdb-api');

let movie = {
  title: ""
};
const apiKey = 'fa95c527';
const auth = {
  apiKey: apiKey,
  timeout: 30000
};

function getMovieById(title) {
  return imdb.get(title, auth).then(response => {
    return response;
  });
}

// console.log(Promise.resolve(getMovieById("The Walking Dead")));

getMovieById("The Walking Dead").then((data) => {
  movie = data;
  console.log("foo");
  console.log(movie);
  processMovies();
});

function processMovies() {
  console.log("bar");
  console.log(movie);
}


// https://blog.risingstack.com/mastering-async-await-in-nodejs/