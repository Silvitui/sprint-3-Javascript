// Exercise 1: Get the array of all directors.
const  getAllDirectors = (movies) =>  {
  let result = movies.map(movie => movie.director)
  console.log("Todos los directores:", result);
  return result;
}

// Exercise 2: Get the films of a certain director
const  getMoviesFromDirector = (movies,director) => {
  const filmsFromDirector = movies.filter(movie => movie.director === director)
  console.log("Todas las peliculas de un director específico:" , filmsFromDirector)
  return filmsFromDirector
}

// Exercise 3: Calculate the average of the films of a given director.
const moviesAverageOfDirector = (movies, director) => {
  const moviesByDirector = getMoviesFromDirector(movies, director);
  const totalScore = moviesByDirector.reduce((acc, movie) => acc + movie.score, 0);
  const average = totalScore / moviesByDirector.length;
  return parseFloat(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
const orderAlphabetically = (movies) => {
  const movieTitles = movies.map((movie) => movie.title);
  const sortedTitles = movieTitles.sort((a, b) => a.localeCompare(b));
  return sortedTitles.slice(0, 20);
};

// Exercise 5: Order by year, ascending
const orderByYear = (movies) =>  {
  const organizedMovies = [...movies]
  .sort((a,b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    } else {
      return a.year - b.year
    }
  })
  console.log("Películas ordenadas por año",organizedMovies)
  return organizedMovies
}

// Exercise 6: Calculate the average of the movies in a category
const moviesAverageByCategory = (movies,genre) =>  {
    const moviesGenre = movies.filter(movie => movie.genre.includes(genre));
    if (moviesGenre.length === 0) return 0;
    const totalScore = moviesGenre.reduce((acc, movie) => acc + movie.score, 0)
    const averageScore = totalScore / moviesGenre.length;
  
    return parseFloat(averageScore.toFixed(2));
  };
  

// Exercise 7: Modify the duration of movies to minutes
const hoursToMinutes = (movies) => {
  return movies.map((movie) => {
    const timeParts = movie.duration.split(" ");
    const totalMinutes = timeParts.reduce((total, part) => {
      if (part.includes("h")) {
        total += parseInt(part) * 60;
      } else if (part.includes("min")) {
        total += parseInt(part);
      }
      return total;
    }, 0);

    return {
      ...movie, 
      duration: totalMinutes, 
    };
  });
};


// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
