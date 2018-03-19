import React, { Fragment } from 'react';
import './Products.css';

const Products = ({ category, productsForEachCategory }) => (
  <Fragment>
    <tr>
      <th colSpan="2">{category}</th>
    </tr>

    {productsForEachCategory.map(product => (
      <tr>
        <td className={product.stocked || 'red'}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    ))}
  </Fragment>
);

export default Products;
