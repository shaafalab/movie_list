import movies from "../data";

const initialState = {
  watchlist: movies,
  watched: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        watchlist: state.watchlist.concat(action.payload)
      };

    case "WATCH_MOVIE":
      return {
        ...state,
        watched: state.watched.concat(action.payload),
        watchlist: state.watchlist.filter(movie => movie !== action.payload)
      };

    case "UN_WATCH_MOVIE":
      return {
        ...state,
        watchlist: state.watchlist.concat(action.payload),
        watched: state.watched.filter(movie => movie !== action.payload)
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        watched: state.watched.filter(movie => movie !== action.payload),
        watchlist: state.watchlist.filter(movie => movie !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
