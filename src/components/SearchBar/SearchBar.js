import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <form className="form">
        <input type="text" className="form__text" placeholder="Search..." />
        <div className="checkbox-container">
          <input type="checkbox" value="Bike" />
          <span>I have a bike</span>
        </div>
      </form>
    );
  }
}

export default SearchBar;
