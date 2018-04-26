import React from 'react';
import './SearchBar.css';

function SearchBar({
  showOnlyProductsInStock,
  toggleShowProductsInStock,
  changeInputValue,
}) {
  const onChangeHandler = e => {
    changeInputValue(e.target.value);
  };

  return (
    <form className="form">
      <input
        type="text"
        className="form__text"
        onChange={onChangeHandler}
        placeholder="Search..."
      />
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
}

export default SearchBar;
