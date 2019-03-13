const ADD_MOVIE = "ADD_MOVIE";
const DELETE_MOVIE = "DELETE_MOVIE";
const WATCH_MOVIE = "WATCH_MOVIE";
const UN_WATCH_MOVIE = "UN_WATCH_MOVIE";

export const addMovie = movie => {
  let newMovie = {
    movie: movie
  };
  return {
    type: ADD_MOVIE,
    payload: newMovie
  };
};

export const deleteMovie = movie => {
  return {
    type: DELETE_MOVIE,
    payload: movie
  };
};

export const watchMovie = movie => {
  return {
    type: WATCH_MOVIE,
    payload: movie
  };
};

export const unWatchMovie = movie => {
  return {
    type: UN_WATCH_MOVIE,
    payload: movie
  };
};
