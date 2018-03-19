import React from 'react';
import './ProductsTable.css';

import Products from '../Products';

import { products, categories } from '../../utils/products';

const ProductsTable = ({ showOnlyProductsInStock }) => {
  const renderProducts = categories.map(category => {
    const productsForEachCategory = products.filter(
      prod => prod.category === category,
    );

    return (
      <Products
        category={category}
        showOnlyProductsInStock={showOnlyProductsInStock}
        productsForEachCategory={productsForEachCategory}
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
};

export default ProductsTable;
