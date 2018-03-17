const imdb = require('imdb-api');

const apiKey = 'fa95c527';
const auth = {
    apiKey: apiKey,
    timeout: 30000
};

let movie = {
    title: "",
    year: "",
    genre: "",
    actors: "",
    plot: "",
    poster: ""
};


const getMovie = () => {
    return (resolve, reject) => {
        imdb.get(title, auth).then((response) => {
            let movieData = response;
            resolve(movieData);
        });
    }
};

getMovie().then((resultValue) => {
    movie = resultValue;
});



// function getMovieByTitle(title) {
//     return imdb.get(title, auth).then(response => {
//         movie.title = response.title;
//         return movie;
//     });
// }

// mymovie = getMovieByTitle('The Walking Dead');
console.log(getMovie());
