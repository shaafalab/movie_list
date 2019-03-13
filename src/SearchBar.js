import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          {this.props.is_watchlist ? (
            <input
              className="form-control"
              type="text"
              onChange={this.props.handleChange1}
            />
          ) : (
            <input
              className="form-control"
              type="text"
              onChange={this.props.handleChange2}
            />
          )}
          <div className="input-group-append">
            <span className="input-group-text" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
