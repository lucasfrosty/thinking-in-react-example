import React from 'react';
import './ProductsTable.css';

import Products from '../Products';

const ProductsTable = () => (
  <table className="table">
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>

    <Products />
  </table>
);

export default ProductsTable;
