const movie = {
    title: 'Interstellar',
    releaseYear: 2014,
    genre: 'Sci-Fi',
    imdbRatings: 8.6,
    runningMinutes: 169,
    language: 'English',
    directedBy: 'Christopher Nolan'
};

function showProperties(object) {
    for (let key in object) {
        if (typeof object[key] == 'string') {
            console.log(key, object[key]);
        }
    }
}

showProperties(movie);