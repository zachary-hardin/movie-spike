const imdb = require('imdb-api');
    
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

console.log(Promise.resolve(getMovieById("The Walking Dead")));