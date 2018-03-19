import React, { Fragment } from 'react';
import './Products.css';

const Products = ({
  category,
  productsForEachCategory,
  showOnlyProductsInStock,
  inputValue,
}) => (
  <Fragment>
    <tr>
      <th colSpan="2">{category}</th>
    </tr>

    {productsForEachCategory.map(product => {
      if (showOnlyProductsInStock && !product.stocked) return;

      if (product.name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1) {
        return (
          <tr>
            <td className={product.stocked || 'red'}>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        );
      }
    })}
  </Fragment>
);

export default Products;
