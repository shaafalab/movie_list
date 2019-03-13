import React, { Component } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import * as actionsManager from "./store/actions";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    que: "",
    searchQuery1: "",
    searchQuery2: "",
    is_watchlist: null
  };
  updateQuery1 = event => {
    this.setState({ searchQuery1: event.target.value });
  };

  updateQuery2 = event => {
    this.setState({ searchQuery2: event.target.value });
  };

  h = ev => {
    this.setState({ que: ev.target.value });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.props.addMovieHandler(this.state.que);
    }
  };
  render() {
    let watchlist = this.props.watchlist;
    let watched = this.props.watched;

    watchlist = watchlist.filter(movie =>
      movie.movie.toLowerCase().includes(this.state.searchQuery1)
    );

    watched = watched.filter(movie =>
      movie.movie.toLowerCase().includes(this.state.searchQuery2)
    );

    return (
      <div className="App">
        <br /> <br /> <br />
        <div className="container">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Add Movie You Want To Watch"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={this.h}
              onKeyPress={this.handleKeyPress}
            />
            <div class="input-group-append">
              <button
                class="btn btn-dark"
                onClick={() => this.props.addMovieHandler(this.state.que)}
              >
                Add Movie
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col" />
            <div className="col-5">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Watchlist</th>
                  </tr>
                </thead>
                <tbody>
                  <SearchBar
                    key={watchlist.movie}
                    handleChange1={this.updateQuery1}
                    is_watchlist={true}
                    placeholder="search"
                  />
                  {watchlist.map(movie => (
                    <tr>
                      <div className="card">
                        <div className="card-body aaa">
                          <div className="row">
                            <div className="col-12 col-md-6">
                              <h4>{movie.movie}</h4>
                            </div>
                            <div className="col-6 col-md-3">
                              <button
                                type="button"
                                onClick={() =>
                                  this.props.watchMovieHandler(movie)
                                }
                                className="btn btn-success"
                              >
                                Watched
                              </button>
                            </div>
                            <div className="col-6 col-md-3">
                              <button
                                type="button"
                                onClick={() =>
                                  this.props.deleteMovieHandler(movie)
                                }
                                className="btn btn-danger"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-5">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Watched</th>
                  </tr>
                </thead>
                <tbody>
                  <SearchBar
                    key={watchlist.movie}
                    handleChange2={this.updateQuery2}
                    is_watchlist={false}
                    placeholder={"search"}
                  />
                  {watched.map(movie => (
                    <tr>
                      <div className="card">
                        <div className="card-body aaa">
                          <div className="row">
                            <div className="col-12 col-md-6">
                              <h4>{movie.movie}</h4>
                            </div>
                            <div className="col-6 col-md-3">
                              <button
                                type="button"
                                onClick={() =>
                                  this.props.unWatchedMovieHandler(movie)
                                }
                                className="btn btn-success"
                              >
                                Unwatched
                              </button>
                            </div>
                            <div className="col-6 col-md-3">
                              <button
                                type="button"
                                onClick={() =>
                                  this.props.deleteMovieHandler(movie)
                                }
                                className="btn btn-danger"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    watchlist: state.watchlist,
    watched: state.watched
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMovieHandler: name => dispatch(actionsManager.addMovie(name)),
    deleteMovieHandler: movie => dispatch(actionsManager.deleteMovie(movie)),
    watchMovieHandler: movie => dispatch(actionsManager.watchMovie(movie)),
    unWatchedMovieHandler: movie => dispatch(actionsManager.unWatchMovie(movie))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
