const movies = {
  name: 'E.T',
  releaseYear: 1987,
  director: 'Steven Spielberg',
  imdbRating: 8.9,
};

function returnNameAndDirector(obj) {
  const valuesArr = [];
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      valuesArr.push(obj[key]);
    }
  }
  return valuesArr.join(' ');
}

console.log(returnNameAndDirector(movies));
