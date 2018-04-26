import React from 'react';
import uuidv4 from 'uuid/v4';
import './ProductsTable.css';

import Products from '../Products';

import { products, categories } from '../../utils/products';

function ProductsTable({ showOnlyProductsInStock, inputValue }) {
  const renderProducts = categories.map(category => {
    const productsForEachCategory = products.filter(
      prod => prod.category === category,
    );

    return (
      <Products
        key={uuidv4()}
        category={category}
        showOnlyProductsInStock={showOnlyProductsInStock}
        productsForEachCategory={productsForEachCategory}
        inputValue={inputValue}
      />
    );
  });

  return (
    <table className="table">
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>

      {renderProducts}
    </table>
  );
}

export default ProductsTable;
