import React, { Component } from 'react';
import './SearchBar.css';

const SearchBar = ({ showOnlyProductsInStock, toggleShowProductsInStock }) => {
  return (
    <form className="form">
      <input type="text" className="form__text" placeholder="Search..." />
      <label className="checkbox-container">
        <input
          type="checkbox"
          onClick={toggleShowProductsInStock}
          checked={showOnlyProductsInStock}
          value="Bike"
        />
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
